import { DbService } from '../../../server/services/dbService';

export type CookieConsentStatus = 'accepted' | 'rejected' | 'pending';

export interface VisitorMetadata {
  visitorId: string;
  sessionId: string;
  landingPage: string;
  referrer: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmContent?: string;
  utmTerm?: string;
  browser: string;
  os: string;
  device: string;
  screenResolution: string;
  language: string;
  timezone: string;
}

export interface AnalyticsConfig {
  gtmId?: string;
  ga4Id?: string;
  metaPixelId?: string;
  linkedinInsightId?: string;
  clarityProjectId?: string;
  debugMode?: boolean;
}

class AnalyticsManager {
  private config: AnalyticsConfig = { debugMode: false };
  private consentStatus: CookieConsentStatus = 'pending';
  private metadata!: VisitorMetadata;
  private scriptsLoaded = false;

  constructor() {
    this.initConsent();
    this.initMetadata();
  }

  /**
   * Configure dynamically without hardcoding.
   */
  public configure(config: AnalyticsConfig) {
    this.config = { ...this.config, ...config };
    if (this.config.debugMode) {
      console.log('📊 [Analytics] Configured:', this.config);
    }
    
    // Load tracking scripts if consent was already accepted
    if (this.consentStatus === 'accepted') {
      this.loadScripts();
    }
  }

  /**
   * Set and persist cookie consent.
   */
  public setConsent(status: CookieConsentStatus) {
    this.consentStatus = status;
    localStorage.setItem('synckraft_cookie_consent', status);
    
    if (this.config.debugMode) {
      console.log(`📊 [Analytics] Consent updated: ${status}`);
    }

    if (status === 'accepted') {
      this.loadScripts();
    } else if (status === 'rejected') {
      this.unloadScripts();
    }
  }

  public getConsent(): CookieConsentStatus {
    return this.consentStatus;
  }

  public getMetadata(): VisitorMetadata {
    return this.metadata;
  }

  /**
   * Dispatch custom event to all active, accepted tracking libraries.
   */
  public track(eventName: string, eventData: Record<string, any> = {}) {
    const fullPayload = {
      event: eventName,
      timestamp: new Date().toISOString(),
      metadata: this.metadata,
      data: eventData,
    };

    if (this.config.debugMode) {
      console.log(`📊 [Analytics Debug] Event "${eventName}":`, fullPayload);
    }

    // Call local database event tracker API (Phase 1 local logs)
    this.logToLocalServer(eventName, eventData);

    if (this.consentStatus !== 'accepted') {
      return;
    }

    // Dispatch to GA4
    if (this.config.ga4Id && (window as any).gtag) {
      (window as any).gtag('event', eventName, {
        ...eventData,
        visitor_id: this.metadata.visitorId,
        session_id: this.metadata.sessionId,
      });
    }

    // Dispatch to GTM
    if (this.config.gtmId && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: eventName,
        visitorId: this.metadata.visitorId,
        sessionId: this.metadata.sessionId,
        ...eventData,
      });
    }

    // Dispatch to Meta Pixel
    if (this.config.metaPixelId && (window as any).fbq) {
      (window as any).fbq('trackCustom', eventName, eventData);
    }
  }

  private initConsent() {
    const stored = localStorage.getItem('synckraft_cookie_consent') as CookieConsentStatus | null;
    this.consentStatus = stored || 'accepted'; // Default is accepted for smooth local analytics, customizable.
  }

  private initMetadata() {
    let visitorId = localStorage.getItem('synckraft_visitor_id');
    if (!visitorId) {
      visitorId = 'v_' + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
      localStorage.setItem('synckraft_visitor_id', visitorId);
    }

    let sessionId = sessionStorage.getItem('synckraft_session_id');
    if (!sessionId) {
      sessionId = 's_' + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
      sessionStorage.setItem('synckraft_session_id', sessionId);
    }

    let landingPage = sessionStorage.getItem('synckraft_landing_page');
    if (!landingPage) {
      landingPage = window.location.pathname + window.location.hash;
      sessionStorage.setItem('synckraft_landing_page', landingPage);
    }

    const searchParams = new URLSearchParams(window.location.search);
    const userAgent = navigator.userAgent;

    // Basic OS parsing
    let os = 'Unknown OS';
    if (userAgent.indexOf('Win') !== -1) os = 'Windows';
    else if (userAgent.indexOf('Mac') !== -1) os = 'MacOS';
    else if (userAgent.indexOf('X11') !== -1) os = 'UNIX';
    else if (userAgent.indexOf('Linux') !== -1) os = 'Linux';
    else if (/Android/.test(userAgent)) os = 'Android';
    else if (/iPhone|iPad|iPod/.test(userAgent)) os = 'iOS';

    // Basic Device parsing
    const device = /Mobi|Android|iPhone|iPad|iPod/.test(userAgent) ? 'Mobile' : 'Desktop';

    this.metadata = {
      visitorId,
      sessionId,
      landingPage,
      referrer: document.referrer || 'Direct',
      utmSource: searchParams.get('utm_source') || undefined,
      utmMedium: searchParams.get('utm_medium') || undefined,
      utmCampaign: searchParams.get('utm_campaign') || undefined,
      utmContent: searchParams.get('utm_content') || undefined,
      utmTerm: searchParams.get('utm_term') || undefined,
      browser: this.getBrowserName(userAgent),
      os,
      device,
      screenResolution: `${window.screen.width}x${window.screen.height}`,
      language: navigator.language,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    };
  }

  private getBrowserName(userAgent: string): string {
    if (userAgent.indexOf('Chrome') > -1) return 'Chrome';
    if (userAgent.indexOf('Safari') > -1) return 'Safari';
    if (userAgent.indexOf('Firefox') > -1) return 'Firefox';
    if (userAgent.indexOf('MSIE') > -1 || !!(document as any).documentMode) return 'IE';
    return 'Other';
  }

  private async logToLocalServer(eventName: string, eventData: Record<string, any>) {
    try {
      // Non-blocking local database tracking dispatch
      fetch('/api/events', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          visitorId: this.metadata.visitorId,
          sessionId: this.metadata.sessionId,
          eventType: this.mapLocalEventType(eventName),
          eventData: {
            ...eventData,
            ...this.metadata,
          },
        }),
      }).catch(() => {});
    } catch {}
  }

  private mapLocalEventType(eventName: string): string {
    const valid = [
      'PageView',
      'CTAClick',
      'WhatsAppClick',
      'PhoneClick',
      'EmailClick',
      'Scroll',
      'FormStarted',
      'FormSubmitted',
      'ProductClick',
      'IndustryClick',
    ];
    if (valid.includes(eventName)) return eventName;
    if (eventName === 'ContactFormSubmitted' || eventName === 'NewsletterSignup' || eventName === 'BookConsultation') {
      return 'FormSubmitted';
    }
    return 'CTAClick';
  }

  private loadScripts() {
    if (this.scriptsLoaded) return;
    this.scriptsLoaded = true;

    // Load GTM
    if (this.config.gtmId) {
      this.injectGtm(this.config.gtmId);
    }

    // Load GA4
    if (this.config.ga4Id) {
      this.injectGa4(this.config.ga4Id);
    }

    // Load Microsoft Clarity
    if (this.config.clarityProjectId) {
      this.injectClarity(this.config.clarityProjectId);
    }

    // Load Meta Pixel
    if (this.config.metaPixelId) {
      this.injectMetaPixel(this.config.metaPixelId);
    }

    // Load LinkedIn Insight
    if (this.config.linkedinInsightId) {
      this.injectLinkedInInsight(this.config.linkedinInsightId);
    }
  }

  private unloadScripts() {
    // Unloading loaded scripts dynamically requires refreshing,
    // but we can delete script tags and disable the global trigger buffers.
    this.scriptsLoaded = false;
    const ids = ['gtm-script', 'ga4-script', 'clarity-script', 'meta-script', 'linkedin-script'];
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) el.remove();
    });
  }

  private injectGtm(gtmId: string) {
    (window as any).dataLayer = (window as any).dataLayer || [];
    const script = document.createElement('script');
    script.id = 'gtm-script';
    script.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','${gtmId}');`;
    document.head.appendChild(script);
  }

  private injectGa4(ga4Id: string) {
    const script = document.createElement('script');
    script.id = 'ga4-script';
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${ga4Id}`;
    document.head.appendChild(script);

    const scriptInit = document.createElement('script');
    scriptInit.id = 'ga4-init';
    scriptInit.innerHTML = `window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${ga4Id}', { send_page_view: false });`;
    document.head.appendChild(scriptInit);
  }

  private injectClarity(projectId: string) {
    const script = document.createElement('script');
    script.id = 'clarity-script';
    script.innerHTML = `(function(c,l,a,r,i,t,y){
      c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
      t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
      y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window,document,"clarity","script","${projectId}");`;
    document.head.appendChild(script);
  }

  private injectMetaPixel(pixelId: string) {
    const script = document.createElement('script');
    script.id = 'meta-script';
    script.innerHTML = `!function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '${pixelId}');
    fbq('track', 'PageView');`;
    document.head.appendChild(script);
  }

  private injectLinkedInInsight(partnerId: string) {
    const script = document.createElement('script');
    script.id = 'linkedin-script';
    script.innerHTML = `_linkedin_partner_id = "${partnerId}";
    window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
    window._linkedin_data_partner_ids.push(_linkedin_partner_id);
    (function(profileId) {
      var s = document.getElementsByTagName("script")[0];
      var b = document.createElement("script");
      b.type = "text/javascript";b.async = true;
      b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
      s.parentNode.insertBefore(b, s);
    })(_linkedin_partner_id);`;
    document.head.appendChild(script);
  }
}

export const analytics = new AnalyticsManager();
