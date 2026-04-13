import ReactGA from 'react-ga4';

// Use a placeholder if not provided yet. Replace 'G-XXXXXXXXXX' with actual GA4 ID later.
const TRACKING_ID = 'G-XXXXXXXXXX'; 

export const initAnalytics = () => {
  try {
    ReactGA.initialize(TRACKING_ID);
    console.log("Analytics Initialized");
  } catch (error) {
    console.error("Analytics failing to init", error);
  }
};

export const trackPageView = (path: string) => {
  ReactGA.send({ hitType: "pageview", page: path });
};

export const trackEvent = (category: string, action: string, label?: string) => {
  ReactGA.event({
    category,
    action,
    label,
  });
};

export const trackFunnelStep = (funnelName: string, step: number, stepName: string) => {
  trackEvent('Funnel', `Step ${step}: ${stepName}`, funnelName);
};

export const trackButtonClick = (buttonName: string, location: string) => {
  trackEvent('Button Click', buttonName, location);
};
