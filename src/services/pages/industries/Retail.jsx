import { useEffect } from 'react';

export default function Retail() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <main className="pt-24">
{/* Hero Section */}
<section className="px-8 max-w-7xl mx-auto mb-24">
<div className="flex flex-col lg:flex-row items-center gap-16">
<div className="lg:w-1/2">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary-container/30 text-on-secondary-container text-xs font-bold tracking-widest uppercase mb-6">
<span className="w-2 h-2 rounded-full bg-primary"></span>
                        Industry Excellence
                    </div>
<h1 className="text-5xl md:text-7xl font-headline font-extrabold text-on-surface tracking-tighter leading-tight mb-6">
                        Synckraft <span className="text-primary">Smart Retail</span> System
                    </h1>
<p className="text-xl text-on-surface-variant max-w-xl mb-10 leading-relaxed font-body">
                        The definitive operating system for modern supermarkets. Unifying online presence, real-time logistics, and algorithmic customer retention in a single cognitive layer.
                    </p>
<div className="flex flex-wrap gap-4">
<button className="px-8 py-4 bg-gradient-to-br from-[#89ceff] to-[#0089c3] text-[#00344d] rounded-xl font-bold text-lg active:scale-95 duration-200">
                            Book Retail Demo
                        </button>
<button className="px-8 py-4 bg-surface-container-highest border border-primary/30 text-primary rounded-xl font-bold text-lg active:scale-95 duration-200">
                            Explore Architecture
                        </button>
</div>
</div>
<div className="lg:w-1/2 relative">
<div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-full"></div>
<div className="relative rounded-2xl overflow-hidden border border-outline-variant/20 shadow-2xl">
<img alt="Supermarket Dashboard" className="w-full aspect-[4/3] object-cover" data-alt="A clean top-down view of a modern grocery store aisle with digital screens and high-tech inventory robots moving efficiently" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrG_LDHjWXxgfeaI03QAU0eapavSqtFm3RxOkNkRRjwYmj79DgNhc9NiHZ4xe_c8pLvJ4xVQW84F-gUlHlz5X4N7ErpmmAQRpZteG4CGb4fej8b6lxTvk-I2_8wmDL599bTH5MHF7UWZXE0kTs9dxHZfkSwLQChtDOG-rKMpPMtRd4JNJEeIBODEs--0dOoU5eWuLAk5BEm54TZ42f0w0gPjfW8kbv0sKE7AxJIhoTWCC4GcetRYrGdIw22hANgQwQw3lWkUfbxgQ"/>
<div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-40"></div>
<div className="absolute bottom-6 left-6 right-6 flex gap-4">
<div className="bg-surface/80 backdrop-blur-md p-4 rounded-xl flex-1 border border-outline-variant/10">
<p className="text-[10px] uppercase tracking-widest text-primary font-bold mb-1">Stock Efficiency</p>
<p className="text-2xl font-bold text-on-surface">+34.2%</p>
</div>
<div className="bg-surface/80 backdrop-blur-md p-4 rounded-xl flex-1 border border-outline-variant/10">
<p className="text-[10px] uppercase tracking-widest text-tertiary font-bold mb-1">Customer Retention</p>
<p className="text-2xl font-bold text-on-surface">89%</p>
</div>
</div>
</div>
</div>
</div>
</section>
{/* Bento Grid: Core Modules */}
<section className="px-8 max-w-7xl mx-auto space-y-8">
<div className="grid grid-cols-1 md:grid-cols-12 gap-6">
{/* Online Ordering: Large Module */}
<div className="md:col-span-8 bg-surface-container-low rounded-3xl p-10 relative overflow-hidden group">
<div className="relative z-10">
<span className="material-symbols-outlined text-primary text-4xl mb-6">shopping_cart</span>
<h3 className="text-3xl font-headline font-bold text-on-surface mb-4">Online Ordering</h3>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
<div className="p-6 rounded-2xl bg-surface-container border border-outline-variant/10 group-hover:border-primary/20 transition-colors">
<span className="material-symbols-outlined text-secondary mb-3">list_alt</span>
<p className="font-bold text-on-surface mb-2">Digital catalog</p>
<p className="text-sm text-on-surface-variant">Real-time sync between shelf and app.</p>
</div>
<div className="p-6 rounded-2xl bg-surface-container border border-outline-variant/10 group-hover:border-primary/20 transition-colors">
<span className="material-symbols-outlined text-secondary mb-3">touch_app</span>
<p className="font-bold text-on-surface mb-2">Online ordering</p>
<p className="text-sm text-on-surface-variant">Seamless checkout with multi-pay.</p>
</div>
<div className="p-6 rounded-2xl bg-surface-container border border-outline-variant/10 group-hover:border-primary/20 transition-colors">
<span className="material-symbols-outlined text-secondary mb-3">history</span>
<p className="font-bold text-on-surface mb-2">Quick reorder</p>
<p className="text-sm text-on-surface-variant">Predictive lists based on habits.</p>
</div>
</div>
</div>
<div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
</div>
{/* Small Callout */}
<div className="md:col-span-4 bg-gradient-to-br from-surface-container to-surface-container-highest rounded-3xl p-10 flex flex-col justify-between border border-outline-variant/20">
<div className="text-tertiary">
<span className="material-symbols-outlined text-5xl">bolt</span>
<h4 className="text-xl font-bold mt-4">Rapid Deployment</h4>
</div>
<p className="text-on-surface-variant leading-relaxed">Our retail engine integrates with legacy POS systems in under 48 hours.</p>
<a className="inline-flex items-center gap-2 text-primary font-bold group" href="#">
                        Technical Specs
                        <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
</a>
</div>
{/* Inventory System: Medium Module */}
<div className="md:col-span-6 bg-surface-container-low rounded-3xl p-10 border border-outline-variant/10 relative overflow-hidden">
<span className="material-symbols-outlined text-tertiary text-4xl mb-6">inventory_2</span>
<h3 className="text-3xl font-headline font-bold text-on-surface mb-4">Inventory System</h3>
<ul className="space-y-6">
<li className="flex gap-4 items-start">
<div className="w-8 h-8 rounded-full bg-tertiary/10 flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-tertiary text-sm">track_changes</span>
</div>
<div>
<p className="font-bold">Stock tracking</p>
<p className="text-sm text-on-surface-variant">RFID and AI-vision integration for 99% accuracy.</p>
</div>
</li>
<li className="flex gap-4 items-start">
<div className="w-8 h-8 rounded-full bg-tertiary/10 flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-tertiary text-sm">category</span>
</div>
<div>
<p className="font-bold">Product management</p>
<p className="text-sm text-on-surface-variant">Automated SKU generation and vendor portal.</p>
</div>
</li>
<li className="flex gap-4 items-start">
<div className="w-8 h-8 rounded-full bg-tertiary/10 flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-tertiary text-sm">notification_important</span>
</div>
<div>
<p className="font-bold">Alerts</p>
<p className="text-sm text-on-surface-variant">Smart notifications for expiring items and low stock.</p>
</div>
</li>
</ul>
</div>
{/* Customer Engagement: Medium Module */}
<div className="md:col-span-6 bg-surface-container-low rounded-3xl p-10 border border-outline-variant/10 relative overflow-hidden">
<span className="material-symbols-outlined text-secondary text-4xl mb-6">diversity_3</span>
<h3 className="text-3xl font-headline font-bold text-on-surface mb-4">Customer Engagement</h3>
<div className="space-y-8">
<div className="p-6 rounded-2xl bg-surface-container-highest/50 border border-outline-variant/20">
<div className="flex justify-between items-center mb-2">
<p className="font-bold">Loyalty program</p>
<span className="text-xs text-primary font-mono">ACTIVE</span>
</div>
<p className="text-sm text-on-surface-variant">Gamified point systems that drive repeat visits.</p>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="p-6 rounded-2xl bg-surface-container">
<span className="material-symbols-outlined text-primary mb-2">local_offer</span>
<p className="font-bold">Offers</p>
<p className="text-xs text-on-surface-variant">Personalized coupons based on cart history.</p>
</div>
<div className="p-6 rounded-2xl bg-surface-container">
<span className="material-symbols-outlined text-tertiary mb-2">campaign</span>
<p className="font-bold">Promotions</p>
<p className="text-xs text-on-surface-variant">Multi-channel campaigns (SMS, Push, Email).</p>
</div>
</div>
</div>
</div>
</div>
</section>
{/* Final CTA Section */}
<section className="px-8 mt-32">
<div className="max-w-4xl mx-auto text-center p-16 rounded-[2rem] bg-surface-container relative overflow-hidden border border-outline-variant/20 shadow-[0_40px_100px_rgba(0,0,0,0.4)]">
<div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-tertiary/5"></div>
<h2 className="text-4xl font-headline font-extrabold text-on-surface mb-6 relative z-10">Ready to optimize your retail floor?</h2>
<p className="text-on-surface-variant mb-10 text-lg relative z-10">Join over 200+ supermarket chains using Synckraft to scale their digital operations.</p>
<div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
<button className="px-10 py-5 bg-gradient-to-br from-[#89ceff] to-[#0089c3] text-[#00344d] rounded-xl font-bold text-xl hover:shadow-[0_0_20px_rgba(137,206,255,0.4)] transition-all">
                        Book Retail Demo
                    </button>
<button className="px-10 py-5 bg-transparent border border-outline-variant text-on-surface rounded-xl font-bold text-xl hover:bg-surface-container-highest transition-colors">
                        Contact Sales
                    </button>
</div>
</div>
</section>
</main>
    </>
  );
}
