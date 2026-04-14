import { useEffect } from 'react';

export default function RealEstate() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <main className="pt-24">
{/* Hero Section */}
<section className="max-w-screen-2xl mx-auto px-8 mb-32">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container/30 border border-outline-variant/20">
<span className="material-symbols-outlined text-tertiary text-sm" data-icon="auto_awesome">auto_awesome</span>
<span className="text-xs font-bold tracking-widest uppercase text-secondary">The Future of Property Sales</span>
</div>
<h1 className="text-6xl md:text-8xl font-headline font-extrabold tracking-tight text-on-surface leading-[1.05]">
                        Real Estate <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-tertiary">Engineered.</span>
</h1>
<p className="text-xl text-on-surface-variant max-w-xl leading-relaxed">
                        Scale your real estate empire with an integrated cognitive architecture that automates lead capture, visual storytelling, and high-velocity sales pipelines.
                    </p>
<div className="flex flex-wrap gap-4 pt-4">
<button className="bg-gradient-to-r from-primary to-on-primary-container text-on-primary font-bold px-8 py-4 rounded-xl text-lg hover:shadow-[0_0_20px_rgba(137,206,255,0.3)] transition-all active:scale-95">
                            Book Real Estate Demo
                        </button>
<button className="bg-surface-container-highest text-primary font-bold px-8 py-4 rounded-xl text-lg border border-primary/20 hover:bg-surface-container-high transition-all">
                            View Ecosystem
                        </button>
</div>
</div>
<div className="relative">
<div className="aspect-square rounded-3xl overflow-hidden bg-surface-container-low shadow-2xl relative group">
<img alt="Luxury Architecture" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" data-alt="Cinematic wide shot of a futuristic ultra-luxury modern villa at twilight with warm interior lighting and deep blue atmospheric sky" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfM9ygyM8al1z0iId9bsCFaVe_epq1LBPsFkyNVt10ozLPcfFYm-Caa_SWGNCPQUrywd-iAUKT4hNLWH-w-A0_6tI5Ui_ERbLR9E_uHh9j0e7W7pHg70ew0IYSkLF5tDXXU8MFAJKKcLp1Ctg1OFza_6vHw1ec3Q5KbhQhccgU0LhcYsZEGRBMY6nF0sdIUpJoIgCZJeCozGZ3OGcf6jD7ELhVONh2e7DnkLwHb2wT3eKSjhv41zRpi1rM_xiu1nUTVBkuIO0ENJk"/>
<div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent"></div>
{/* Floating Intelligence Stats */}
<div className="absolute bottom-8 left-8 p-6 glass-panel bg-surface-container-high/40 rounded-2xl border border-outline-variant/10">
<p className="text-tertiary text-xs font-bold uppercase tracking-widest mb-1">Lead Flow Efficiency</p>
<p className="text-4xl font-headline font-black text-on-surface">+312%</p>
</div>
</div>
</div>
</div>
</section>
{/* Bento Grid: Lead Generation */}
<section className="max-w-screen-2xl mx-auto px-8 mb-40">
<div className="flex justify-between items-end mb-12">
<div className="space-y-4">
<h2 className="text-4xl font-headline font-bold text-on-surface">Lead Generation</h2>
<p className="text-on-surface-variant max-w-lg">Omnichannel capture systems designed to identify high-intent investors before they even search.</p>
</div>
<span className="text-primary font-bold font-inter text-sm hover:underline cursor-pointer">Explore Lead Tech →</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
{/* Landing Pages */}
<div className="md:col-span-2 p-8 rounded-3xl bg-surface-container-low hover:bg-surface-container transition-colors relative overflow-hidden group">
<span className="material-symbols-outlined text-primary text-4xl mb-6" data-icon="web">web</span>
<h3 className="text-2xl font-headline font-bold mb-4">High-Conversion Landing Pages</h3>
<p className="text-on-surface-variant mb-8">Bespoke digital destinations optimized for property engagement and data capture.</p>
<img className="rounded-xl w-full h-48 object-cover opacity-40 group-hover:opacity-60 transition-opacity" data-alt="Clean minimal website dashboard interface showing real estate analytics and user engagement heatmaps in dark mode aesthetic" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC74dVvbcUrqIdfpgqsT3y96KdkOXITo2MNB38wXEyx3siPmPrROk6JtFZy9nAwOq1SBUFbRWuosaLqQoY8MISkaS9Y9ioDYYwhHYxdpOKFnmgkORpyVhp5XGhEjhcG0Er8hZ4eHgr0hhMnOzb_eeMWO987-gxkL6XX9sfrzC7WqGrC8L8dg_8O_AAbquhxb5v-2b1ltE247edJbtRIel20gDjpYhZh891bha7MH3mWt-PPbwLS4BADyD-kPUFwBAVp0xH_-NHriZQ"/>
</div>
{/* Lead Funnels */}
<div className="md:col-span-1 p-8 rounded-3xl bg-surface-container-high relative flex flex-col justify-between">
<div>
<span className="material-symbols-outlined text-secondary text-4xl mb-6" data-icon="filter_alt">filter_alt</span>
<h3 className="text-xl font-headline font-bold mb-2">Lead Funnels</h3>
<p className="text-sm text-on-surface-variant">Automated qualifying journeys for every property tier.</p>
</div>
<div className="mt-8 pt-4 border-t border-outline-variant/10">
<div className="flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-primary animate-pulse"></span>
<span className="text-xs font-bold text-primary">Active Qualification</span>
</div>
</div>
</div>
{/* Property Listing */}
<div className="md:col-span-1 p-8 rounded-3xl bg-surface-container-low hover:bg-surface-container transition-colors">
<span className="material-symbols-outlined text-tertiary text-4xl mb-6" data-icon="holiday_village">holiday_village</span>
<h3 className="text-xl font-headline font-bold mb-2">Smart Listings</h3>
<p className="text-sm text-on-surface-variant">Dynamic property feeds that adapt to user preferences in real-time.</p>
</div>
</div>
</section>
{/* CRM & Automation: Asymmetric Layout */}
<section className="bg-surface-container-lowest py-32 mb-40">
<div className="max-w-screen-2xl mx-auto px-8">
<div className="grid lg:grid-cols-12 gap-12 items-center">
<div className="lg:col-span-5 space-y-8">
<div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
<span className="text-primary text-xs font-bold tracking-tighter uppercase font-inter">Core Infrastructure</span>
</div>
<h2 className="text-5xl font-headline font-bold text-on-surface">CRM &amp; Cognitive Automation</h2>
<p className="text-lg text-on-surface-variant leading-relaxed">
                            A centralized nervous system for your brokerage. Every WhatsApp message, every booking, and every follow-up is orchestrated by Synckraft AI.
                        </p>
<div className="grid grid-cols-2 gap-6">
<div className="space-y-2">
<span className="material-symbols-outlined text-primary" data-icon="forum">forum</span>
<h4 className="font-bold">WhatsApp Sync</h4>
<p className="text-xs text-on-surface-variant">Instant AI-driven responses on the world's most used platform.</p>
</div>
<div className="space-y-2">
<span className="material-symbols-outlined text-secondary" data-icon="event_available">event_available</span>
<h4 className="font-bold">Auto Booking</h4>
<p className="text-xs text-on-surface-variant">Seamless property viewing schedules integrated with your calendar.</p>
</div>
</div>
</div>
<div className="lg:col-span-7">
<div className="grid grid-cols-2 gap-4">
<div className="bg-surface-container-high rounded-3xl p-8 transform translate-y-12 shadow-xl">
<div className="flex justify-between items-start mb-12">
<div className="p-3 rounded-2xl bg-surface-container-highest">
<span className="material-symbols-outlined text-primary" data-icon="ads_click">ads_click</span>
</div>
<span className="text-2xl font-black text-on-surface/20 font-headline">01</span>
</div>
<h3 className="text-xl font-bold mb-3">Lead Tracking</h3>
<p className="text-sm text-on-surface-variant">Know exactly where your leads come from and what they desire.</p>
</div>
<div className="bg-surface-container rounded-3xl p-8 shadow-xl">
<div className="flex justify-between items-start mb-12">
<div className="p-3 rounded-2xl bg-surface-container-highest">
<span className="material-symbols-outlined text-tertiary" data-icon="cycle">cycle</span>
</div>
<span className="text-2xl font-black text-on-surface/20 font-headline">02</span>
</div>
<h3 className="text-xl font-bold mb-3">Follow-up AI</h3>
<p className="text-sm text-on-surface-variant">Smart persistence that nurtures leads until they are ready to close.</p>
</div>
</div>
</div>
</div>
</div>
</section>
{/* Visual Services: Editorial Style */}
<section className="max-w-screen-2xl mx-auto px-8 mb-40">
<div className="text-center mb-20 space-y-4">
<h2 className="text-5xl font-headline font-bold text-on-surface">Visual Immersion</h2>
<p className="text-on-surface-variant max-w-2xl mx-auto">High-fidelity 3D and 2D assets that bridge the gap between imagination and reality.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="group cursor-pointer">
<div className="aspect-[3/4] rounded-3xl overflow-hidden mb-6 relative">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="Hyper-realistic 3D interior render of a modern living room with floor-to-ceiling windows and sculptural furniture" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZruXUjPUR_y8Ru9_QIfMi8e8a_o5Lcl_Leol0VX_4aVPsBoIu49udVVw-17jXtBUDJTmcnBzXnYdjygWpJW9QTfIUXN55AzVNkPm2loa5tAsRf-up75ERaAd-tzX4NRjZmoZVuTDE4ouOOe73sQ5dGNgTUVbYw7SrDKrlvU_ajWvMdSz3Li6hyYG81Yq1XcuCxMYTZhlWUi3TSi74FdJ5S-avxL-Z21ZXxlCg5qruXIXCTs6YKEg0ealXs7LFVNgYrEYpAI4NIkE"/>
<div className="absolute inset-0 bg-surface-dim/20 group-hover:bg-transparent transition-colors"></div>
</div>
<h3 className="text-2xl font-headline font-bold">3D Renders</h3>
<p className="text-on-surface-variant text-sm">Hyper-realistic visualizations for unbuilt properties.</p>
</div>
<div className="group cursor-pointer translate-y-12">
<div className="aspect-[3/4] rounded-3xl overflow-hidden mb-6 relative">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="Architectural 2D blueprints and floor plans spread out on a workspace with clean drafting tools and soft light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQsgQiqviBqgOTtNy_vLzqIu6Vyn3ysgCswqetXHaZH5hzH1iPITK9mfYClf3FdPlntVjhT1451BYHFDUxbL58za5IQD3fD1ft_3l7a1YpHG0v7N0j1TNZn1a1YFXx0xHCYb-jk1Kqc1dcy2FFHc79CqDO4mw0tyyTeuJX8WIUJ9wmiQ6FQsbYy_phlYLb_moOavsEALoWxdx9wCFk8iqLGVYnIBNr7aSIm564FHdhokZlbvHlWqoIzj1dkTQl7EnhxBC0Cr6iOdo"/>
<div className="absolute inset-0 bg-surface-dim/20 group-hover:bg-transparent transition-colors"></div>
</div>
<h3 className="text-2xl font-headline font-bold">2D Plans</h3>
<p className="text-on-surface-variant text-sm">Precision technical layouts for professional portfolios.</p>
</div>
<div className="group cursor-pointer">
<div className="aspect-[3/4] rounded-3xl overflow-hidden mb-6 relative">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="Luxury property brochure mockups with gold foil accents on a dark textured background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUboPz3agIrq0VnHC3hHWwe4-wfLlHSBaHpDJy7fHihyTiJOqM65g4w7-7QpZikyQn6MDlnNEcHGnyiXmyXpEFwLzp8ibBqCYwTPC9g2V084EEneEe57GyNLqRbpaClCf_A6YJX2u0hrYAbVzo3CaFG5XAANUAsP3NbOewUGY4GkrMI6s63B67yTqhIfwyruz9cjpdWrD7tytudkG3-FRzStnJ7RG3apVvg1ecKx9VzZmTThwWRZ40e50HhqvSprG63yNzgvAkxZc"/>
<div className="absolute inset-0 bg-surface-dim/20 group-hover:bg-transparent transition-colors"></div>
</div>
<h3 className="text-2xl font-headline font-bold">Premium Brochures</h3>
<p className="text-on-surface-variant text-sm">High-impact physical and digital sales materials.</p>
</div>
</div>
</section>
{/* Sales Automation: Dashboard Style */}
<section className="max-w-screen-2xl mx-auto px-8 mb-40">
<div className="p-12 rounded-[2.5rem] bg-surface-container-low border border-outline-variant/10">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1">
<div className="bg-surface-container-lowest p-6 rounded-2xl shadow-2xl border border-outline-variant/5">
<div className="flex items-center justify-between mb-8">
<span className="font-bold font-headline text-on-surface">Pipeline Tracker</span>
<span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded">Live AI Feed</span>
</div>
<div className="space-y-4">
<div className="flex items-center gap-4 p-4 rounded-xl bg-surface-container-high border border-primary/20">
<div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
<span className="material-symbols-outlined text-primary text-sm" data-icon="person">person</span>
</div>
<div className="flex-1">
<div className="h-2 w-24 bg-on-surface-variant/30 rounded-full mb-2"></div>
<div className="h-1.5 w-16 bg-on-surface-variant/10 rounded-full"></div>
</div>
<div className="text-right">
<span className="text-[10px] font-bold text-tertiary block">HOT LEAD</span>
<span className="text-[10px] text-on-surface-variant">2m ago</span>
</div>
</div>
<div className="flex items-center gap-4 p-4 rounded-xl bg-surface-container-low">
<div className="h-10 w-10 rounded-full bg-surface-container-highest flex items-center justify-center text-on-surface-variant/40">
<span className="material-symbols-outlined text-sm" data-icon="person">person</span>
</div>
<div className="flex-1">
<div className="h-2 w-32 bg-on-surface-variant/10 rounded-full mb-2"></div>
<div className="h-1.5 w-20 bg-on-surface-variant/5 rounded-full"></div>
</div>
<div className="text-right">
<span className="text-[10px] font-bold text-on-surface-variant block">NURTURING</span>
<span className="text-[10px] text-on-surface-variant">15m ago</span>
</div>
</div>
</div>
</div>
</div>
<div className="order-1 lg:order-2 space-y-6">
<h2 className="text-4xl font-headline font-bold text-on-surface">Sales Automation</h2>
<p className="text-on-surface-variant text-lg">Remove friction from the closing process. Our pipeline tracking and auto-response systems ensure no opportunity is ever lost to silence.</p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-primary mt-1" data-icon="check_circle">check_circle</span>
<div>
<p className="font-bold text-on-surface">Lead Nurturing</p>
<p className="text-sm text-on-surface-variant">Automated sequences tailored to buyer behavior.</p>
</div>
</li>
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-primary mt-1" data-icon="check_circle">check_circle</span>
<div>
<p className="font-bold text-on-surface">Auto Responses</p>
<p className="text-sm text-on-surface-variant">Smart AI handling initial inquiries 24/7.</p>
</div>
</li>
</ul>
</div>
</div>
</div>
</section>
{/* Final CTA */}
<section className="max-w-screen-2xl mx-auto px-8 mb-40">
<div className="relative py-24 rounded-[3rem] overflow-hidden bg-gradient-to-br from-surface-container-low via-surface-container to-surface-container-high border border-outline-variant/10 text-center">
<div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[100px]"></div>
<div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-tertiary/10 rounded-full blur-[100px]"></div>
<h2 className="text-5xl md:text-7xl font-headline font-black text-on-surface mb-8 relative z-10">Ready to <span className="text-primary">Sync</span>?</h2>
<p className="text-xl text-on-surface-variant max-w-2xl mx-auto mb-12 relative z-10">Join the elite developers and agencies leveraging cognitive systems to dominate the market.</p>
<button className="bg-gradient-to-r from-primary to-on-primary-container text-on-primary font-bold px-12 py-5 rounded-2xl text-xl hover:shadow-[0_0_40px_rgba(137,206,255,0.4)] transition-all active:scale-95 relative z-10">
                    Book Real Estate Demo
                </button>
</div>
</section>
</main>
    </>
  );
}
