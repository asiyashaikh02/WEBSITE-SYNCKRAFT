import { useEffect } from 'react';

export default function Restaurant() {
  // Add specific background to the body if necessary, or just rely on the main wrapper
  return (
    <>
      <main className="pt-24 min-h-screen" style={{
        background: 'radial-gradient(circle at top right, rgba(137, 206, 255, 0.1), transparent), radial-gradient(circle at bottom left, rgba(192, 193, 255, 0.05), transparent)'
      }}>
        {/* Hero Section */}
        <section className="max-w-screen-2xl mx-auto px-8 py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary-container/30 border border-secondary/20">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-secondary font-label text-xs uppercase tracking-widest font-bold">Next-Gen Hospitality OS</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-extrabold font-headline leading-[1.1] tracking-tighter text-on-surface">
              Cognitive Ecosystem<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-tertiary"></span> for Modern Dining.
            </h1>
            <p className="text-xl text-on-surface-variant max-w-2xl leading-relaxed">
              Synckraft automates the complex choreography of restaurant operations, from 3D digital menus to AI-powered kitchen intelligence.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="px-8 py-4 bg-primary text-on-primary rounded-xl font-bold font-headline shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all">Launch Your Digital Kitchen</button>
              <button className="px-8 py-4 bg-surface-container-high text-on-surface rounded-xl font-bold font-headline border border-outline-variant/20 hover:bg-surface-container-highest transition-all">Explore Platform</button>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl shadow-black/50 border border-outline-variant/10">
              <img className="w-full h-full object-cover" alt="Futuristic high-tech restaurant interior" src="https://lh3.googleusercontent.com/aida-public/AB6AXuClXNw7-i8QM41kBPKUbcABuwVpxMkEzU49W_c7jiVkfqDKP6kuW917tx1vG-ta0AEPy4tMpMs_zdXd-gxFHvF6aOFjRBGk_9WTc_dMCc0PSRW0inEIe6hV9OQoCLIIeOPJrBgtmSdLoaPCVAMyQXqcQ0gCGrO1F8swJaGnXYjhXG3pbDWyr7r7FU74zV580c6HsIIkzETqYN0Ytp6iqbAJ4rsU7cLdqe31e5rmBwZ2BpmQclGe8APQT_idPbhnIqKADa0qpMEpp0I" />
            </div>
            {/* Floating Info Card */}
            <div className="absolute -bottom-6 -left-6 bg-[rgba(11,19,38,0.6)] backdrop-blur-md p-6 rounded-2xl border border-primary/20 shadow-xl max-w-[240px]">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">monitoring</span>
                </div>
                <div>
                  <p className="text-xs text-on-surface-variant">Live Efficiency</p>
                  <p className="text-lg font-bold text-primary">+34%</p>
                </div>
              </div>
              <div className="w-full bg-surface-container h-1 rounded-full overflow-hidden">
                <div className="w-3/4 h-full bg-primary"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Bento Grid: Core Services */}
        <section className="max-w-screen-2xl mx-auto px-8 py-24">
          <div className="mb-16">
            <h2 className="text-4xl font-extrabold font-headline tracking-tight mb-4">Digital Menu & Ordering</h2>
            <p className="text-on-surface-variant max-w-xl">Immersive guest experiences paired with frictionless transaction flows.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-8 bg-surface-container rounded-3xl p-10 flex flex-col justify-between min-h-[450px] relative overflow-hidden group">
              <div className="relative z-10 max-w-md">
                <span className="material-symbols-outlined text-primary text-4xl mb-6">qr_code_2</span>
                <h3 className="text-3xl font-bold font-headline mb-4">Smart Digital Catalog</h3>
                <p className="text-on-surface-variant leading-relaxed mb-6">QR-activated 3D menus that allow customers to visualize dishes in AR before ordering. Full multi-branch sync for real-time inventory updates.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-surface-container-highest text-xs font-bold text-secondary">3D VISUALIZATION</span>
                  <span className="px-3 py-1 rounded-full bg-surface-container-highest text-xs font-bold text-secondary">MULTI-BRANCH</span>
                  <span className="px-3 py-1 rounded-full bg-surface-container-highest text-xs font-bold text-secondary">QR PAY</span>
                </div>
              </div>
              <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-30 group-hover:opacity-50 transition-opacity">
                <img className="w-full h-full object-cover" alt="Smartphone displaying 3D menu" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDE_4Xxic32m6c595rL0VnegFYMzE8NRifTi7E33p6eiLyOD1LYrquxw07ROTHVK3QYGFCGDsSZM4-dlz4H2b7kvJLP39vBlx7LE-qDkd8RRaU61nuaiz_sfR3rQfYZZtaKFHrsgU_FiKI7RnKzczZoxJTzZDxAWJAPKN2RkcOKzm93KY6Xw5szAHSLcLw6jaK9WqXBM3OyUWbkm9Vodiv2LC5p1NRV-P5sM6bP_ibyiXtAWrjrwiDWxYbmhDIrjPgWtlO3VT5aPqI" />
              </div>
            </div>
            
            <div className="md:col-span-4 bg-primary text-on-primary rounded-3xl p-10 flex flex-col justify-between">
              <div>
                <span className="material-symbols-outlined text-4xl mb-6">touch_app</span>
                <h3 className="text-3xl font-bold font-headline mb-4">Smart Ordering</h3>
                <p className="text-on-primary/80 leading-relaxed">In-store kiosks, table-side tablets, and pre-order capabilities integrated into a single unified flow.</p>
              </div>
              <div className="pt-8">
                <div className="flex -space-x-3 mb-4">
                  <div className="w-10 h-10 rounded-full border-2 border-primary bg-surface-container-highest"></div>
                  <div className="w-10 h-10 rounded-full border-2 border-primary bg-surface-container-high"></div>
                  <div className="w-10 h-10 rounded-full border-2 border-primary bg-surface-container-low"></div>
                </div>
                <p className="text-sm font-bold uppercase tracking-wider">Trusted by 500+ Venues</p>
              </div>
            </div>

            <div className="md:col-span-4 bg-surface-container rounded-3xl p-10 border border-outline-variant/10">
              <span className="material-symbols-outlined text-tertiary text-4xl mb-6">cake</span>
              <h3 className="text-2xl font-bold font-headline mb-4">Advanced Customization</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-6">Specialty modules for complex orders: Cake builders, festive hampers, and bulk corporate catering with automated invoicing.</p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-xs font-semibold text-on-surface">
                  <span className="w-1 h-1 rounded-full bg-tertiary"></span>
                  FESTIVAL BUNDLING
                </li>
                <li className="flex items-center gap-3 text-xs font-semibold text-on-surface">
                  <span className="w-1 h-1 rounded-full bg-tertiary"></span>
                  CORPORATE BULK PORTAL
                </li>
              </ul>
            </div>

            <div className="md:col-span-8 bg-surface-container-high rounded-3xl p-10 flex flex-col md:flex-row gap-8 items-center overflow-hidden">
              <div className="flex-1">
                <span className="material-symbols-outlined text-primary text-4xl mb-6">insights</span>
                <h3 className="text-2xl font-bold font-headline mb-4">Predictive Analytics</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">Leverage AI to understand sales patterns. Identify popular items before they trend and optimize inventory waste with cognitive insights.</p>
              </div>
              <div className="flex-1 w-full flex flex-col gap-4">
                <div className="h-24 bg-surface-container-low rounded-xl p-4 flex flex-col justify-between">
                  <div className="flex justify-between text-[10px] uppercase font-black text-outline">Revenue Insight</div>
                  <div className="flex items-end gap-1 h-8">
                    <div className="w-full bg-primary/20 h-4 rounded-t"></div>
                    <div className="w-full bg-primary/20 h-6 rounded-t"></div>
                    <div className="w-full bg-primary/20 h-5 rounded-t"></div>
                    <div className="w-full bg-primary h-8 rounded-t shadow-[0_0_10px_rgba(137,206,255,0.4)]"></div>
                    <div className="w-full bg-primary/20 h-6 rounded-t"></div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-surface-container-low p-4 rounded-xl">
                    <p className="text-[10px] text-outline mb-1 uppercase font-black">Top Item</p>
                    <p className="text-lg font-bold text-tertiary tracking-tight">Truffle Risotto</p>
                  </div>
                  <div className="bg-surface-container-low p-4 rounded-xl">
                    <p className="text-[10px] text-outline mb-1 uppercase font-black">Waste Red.</p>
                    <p className="text-lg font-bold text-primary tracking-tight">-18.4%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Automation & Queue Management */}
        <section className="max-w-screen-2xl mx-auto px-8 py-24 bg-surface-container-low/50 rounded-[4rem]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-5xl font-extrabold font-headline tracking-tighter leading-tight">
                Orchestrate Your <br/><span className="text-primary">Staff with Precision</span>.
              </h2>
              <div className="space-y-6">
                <div className="flex gap-6 group">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-surface-container flex items-center justify-center border border-outline-variant/10 group-hover:border-primary/50 transition-all">
                    <span className="material-symbols-outlined text-primary">dvr</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">Intelligent Dashboards</h4>
                    <p className="text-on-surface-variant text-sm leading-relaxed">Dedicated interfaces for Kitchen (KDS), Packing, and Front-of-House staff that sync instantly.</p>
                  </div>
                </div>
                <div className="flex gap-6 group">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-surface-container flex items-center justify-center border border-outline-variant/10 group-hover:border-primary/50 transition-all">
                    <span className="material-symbols-outlined text-primary">confirmation_number</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">Queue & Pickup Optimization</h4>
                    <p className="text-on-surface-variant text-sm leading-relaxed">Smart order display systems and virtual queues that keep the lobby clear and customers informed.</p>
                  </div>
                </div>
                <div className="flex gap-6 group">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-surface-container flex items-center justify-center border border-outline-variant/10 group-hover:border-primary/50 transition-all">
                    <span className="material-symbols-outlined text-primary">precision_manufacturing</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">Automated Packing Flows</h4>
                    <p className="text-on-surface-variant text-sm leading-relaxed">Optimized routes for delivery and packing verification to ensure zero error rates.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                  <img className="w-full h-full object-cover" alt="Kitchen staff" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRcwSqvEbSBh28FOguWYDWrzODnmM2g52R3Vej6cdJrmC3CUk3Kt6-w1qdUfMGFSy8jkuqo_aOPEuoIED7Qi50rW66G7L2TDnJB2SOFwLQ-jncI2rN6o7PJxP33DuoSlI387BhE86N19Pxia2Q2ovIh7UGPWJO_RSYMF9P-uqCfNGXpBgG-Fhq2J1vxPA7Mnfw65DM5mBjFly5Yd4N2J_Z1sO8XoaNUCbu8ftgzH0iQGRiDMaDA3e22Dqu9UZhbqGDRAbjiAt47aM" />
                </div>
                <div className="aspect-square rounded-3xl bg-secondary-container/20 border border-secondary/10 flex flex-col items-center justify-center p-8 text-center">
                  <span className="text-4xl font-black text-secondary mb-2">99.9%</span>
                  <span className="text-xs font-bold tracking-widest text-on-secondary-container uppercase">System Uptime</span>
                </div>
              </div>
              <div className="space-y-4 pt-12">
                <div className="aspect-square rounded-3xl bg-surface-container-highest border border-outline-variant/20 p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="material-symbols-outlined text-primary">check_circle</span>
                    <span className="text-xs font-bold uppercase tracking-wider text-primary">Live Sync</span>
                  </div>
                  <p className="text-2xl font-bold font-headline">Instant Order Routing</p>
                </div>
                <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                  <img className="w-full h-full object-cover" alt="Sleek digital kiosk" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3hDGPDoLry89UxJqsd9ET_WnkMvy704fqkfLKQsZc6755eKgyGjYyCtJXDUcwy0CNo7zNClyw7PaURYSuJcgOZt9MihSU4LLNhGI4O2gy4fsuZnsogJbhDIuisRuVrS7gIRsyXQrJjUAqFjG_NyeST12aUolEM7ENCCvH9zawlDGMfSnVmNeWjztROG1WEqjBOh9M_m7cKM_3wlMKb722yb2YReyfYasHwwrOHSKWRK6FjkigxZLl-JeZLomsPudxuzmcuK5KK-4" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-screen-2xl mx-auto px-8 py-32 text-center">
          <div className="max-w-4xl mx-auto bg-[rgba(11,19,38,0.6)] backdrop-blur-[12px] p-16 rounded-[3rem] border border-outline-variant/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/5 -z-10"></div>
            <h2 className="text-5xl font-extrabold font-headline mb-8 tracking-tighter">Ready to Evolve Your Restaurant?</h2>
            <p className="text-xl text-on-surface-variant mb-12 max-w-2xl mx-auto">Join the leading hospitality brands leveraging Synckraft's cognitive systems to drive growth and operational excellence.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-10 py-5 bg-primary text-on-primary rounded-2xl font-bold text-lg shadow-xl shadow-primary/30 hover:scale-[1.02] transition-transform">Book a Personalized Demo</button>
              <button className="px-10 py-5 bg-transparent text-on-surface border border-outline-variant rounded-2xl font-bold text-lg hover:bg-surface-container transition-colors">Speak with an Architect</button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
