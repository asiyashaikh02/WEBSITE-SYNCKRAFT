import { useEffect } from 'react';

export default function Fashion() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <main className="pt-24">
{/* Hero Section */}
<section className="relative px-8 py-20 lg:py-32 overflow-hidden">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div className="z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold tracking-widest uppercase mb-6">
<span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
                        Next-Gen Fashion Tech
                    </div>
<h1 className="font-headline text-5xl lg:text-7xl font-extrabold text-on-surface tracking-tight mb-8 leading-[1.1]">
                        Synckraft <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-tertiary">Fashion Digital</span> Experience
                    </h1>
<p className="text-on-surface-variant text-lg lg:text-xl max-w-xl mb-10 leading-relaxed">
                        Transform your fashion brand with high-fidelity 3D visualization, hyper-automated social growth, and a seamless digital commerce ecosystem.
                    </p>
<div className="flex flex-wrap gap-4">
<button className="px-8 py-4 bg-gradient-to-br from-primary to-on-primary-container text-on-primary font-bold rounded-xl shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all duration-200">
                            Book Fashion Demo
                        </button>
<button className="px-8 py-4 bg-surface-container-high text-on-surface font-semibold rounded-xl border border-outline-variant/20 hover:bg-surface-container-highest transition-all">
                            View Ecosystem
                        </button>
</div>
</div>
<div className="relative">
<div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/10 blur-[100px] rounded-full"></div>
<div className="absolute -bottom-20 -left-20 w-96 h-96 bg-tertiary/10 blur-[100px] rounded-full"></div>
<div className="relative rounded-2xl overflow-hidden border border-outline-variant/20 shadow-2xl">
<img className="w-full h-[600px] object-cover" data-alt="High-end fashion photography featuring a sleek modern outfit in a minimalist neon-lit studio with deep blue and purple accents" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXcsknhOVoh6lUxP2lr-dh4w40ekBhnBAs76UDDxbrBzrF9mob7uOkqJxH7pi2v4Ac0ftVCBMaH04aWhZBSmNh_7FOxqnM5n2b7XX470_nXcDgZJvSNTWvRv2F5uo61bojJPJJqcaQmXD9ie27NKxeX67tx-z1c14S96EALcwN9F93STlp2EHv2ke8yHMWzhnaYv1G85Dbu8vkdZwb4mF-dKsZdGiRVv2rvqdE__rkX3ZhDETkd6ukukbDZ02QQMcFagwNDUBEcoQ"/>
<div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent"></div>
<div className="absolute bottom-8 left-8 right-8 glass-panel p-6 rounded-xl border border-white/10">
<div className="flex justify-between items-end">
<div>
<p className="text-xs text-primary font-bold uppercase tracking-widest mb-1">Live Analytics</p>
<h3 className="text-2xl font-bold font-headline">+142% Engagement</h3>
</div>
<span className="material-symbols-outlined text-4xl text-primary" data-icon="trending_up">trending_up</span>
</div>
</div>
</div>
</div>
</div>
</section>
{/* Product Visualization Bento */}
<section className="px-8 py-20 bg-surface-container-low">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div className="max-w-2xl">
<h2 className="font-headline text-4xl font-bold mb-4">Product Visualization</h2>
<p className="text-on-surface-variant text-lg">Bring your collections to life with cinematic fidelity. Reduce returns and increase buyer confidence with immersive previews.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="md:col-span-2 group relative h-[400px] rounded-2xl overflow-hidden bg-surface-container hover:shadow-2xl transition-all duration-500">
<img className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" data-alt="Close up of high-tech fabric textures with 3D digital wireframe overlay showing architectural precision in garment design" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCA8HLk57r4xUyfJ1XoK52FgF84oncanVQDAaAkaTstDWrn1GIKjkstAuLzxT6I-8TiB865155Zb_pRJsunK92MNKECGRrxr-PWJskBj_ntjX9ibmI1OhLmjQUaNXuZOjh-IMYTsZcMxwaBVmDZan-rzUf7ArkyFgysQlLDoz0ZGNQGcDimKJcBmjuSmH4Fg17iRtWSH8Te_laz5bYss4tI-uf5Mh7HNyHU4n3Rf1hZ_Vp6EpbmUJhT_QhcJYDRmXB_HU0ySH5kU9U"/>
<div className="absolute inset-0 bg-gradient-to-r from-surface-container via-surface-container/20 to-transparent"></div>
<div className="relative p-10 h-full flex flex-col justify-end">
<span className="material-symbols-outlined text-primary text-5xl mb-4" data-icon="view_in_ar">view_in_ar</span>
<h3 className="text-3xl font-bold font-headline mb-4">3D Product Preview</h3>
<p className="text-on-surface-variant max-w-md">Photorealistic rendering that captures every thread, shadow, and movement of your premium garments.</p>
</div>
</div>
<div className="group relative rounded-2xl p-8 bg-surface-container border border-outline-variant/10 hover:border-primary/40 transition-all flex flex-col">
<div className="mb-auto">
<div className="w-14 h-14 rounded-xl bg-tertiary/10 flex items-center justify-center text-tertiary mb-6">
<span className="material-symbols-outlined text-3xl" data-icon="accessibility_new">accessibility_new</span>
</div>
<h3 className="text-2xl font-bold font-headline mb-4">Virtual Try-on</h3>
<p className="text-on-surface-variant leading-relaxed">Let customers experience your fit through high-precision AR overlays on any mobile device.</p>
</div>
<div className="mt-8 pt-6 border-t border-outline-variant/10">
<span className="text-primary font-bold flex items-center gap-2 cursor-pointer group-hover:translate-x-2 transition-transform">
                                Explore Tech <span className="material-symbols-outlined">arrow_forward</span>
</span>
</div>
</div>
<div className="md:col-span-3 group relative h-[300px] rounded-2xl overflow-hidden bg-surface-container">
<div className="absolute inset-0 flex items-center justify-between px-12 z-10">
<div className="max-w-md">
<h3 className="text-2xl font-bold font-headline mb-4">Catalog Design</h3>
<p className="text-on-surface-variant">Automated generation of high-fashion digital catalogs, optimized for both tablet browsing and print-ready formats.</p>
</div>
<div className="hidden lg:flex gap-4">
<div className="w-40 h-56 rounded-lg bg-surface-container-high border border-outline-variant/20 -rotate-6 shadow-xl"></div>
<div className="w-40 h-56 rounded-lg bg-surface-container-highest border border-outline-variant/20 rotate-3 shadow-xl"></div>
</div>
</div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(137,206,255,0.08),transparent)]"></div>
</div>
</div>
</div>
</section>
{/* Ecommerce System */}
<section className="px-8 py-20 relative">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-20">
<h2 className="font-headline text-4xl lg:text-5xl font-bold mb-6">Ecommerce Reinvented</h2>
<p className="text-on-surface-variant text-lg max-w-2xl mx-auto">A high-performance sales engine designed for the luxury fashion market's demanding standards.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
{/* Online Store */}
<div className="p-8 rounded-3xl bg-surface-container-high border border-outline-variant/20 hover:shadow-[0_0_50px_rgba(137,206,255,0.05)] transition-all">
<span className="material-symbols-outlined text-primary mb-6 block text-4xl" data-icon="shopping_bag">shopping_bag</span>
<h4 className="text-xl font-bold mb-3">Online Store</h4>
<p className="text-on-surface-variant mb-6">Headless commerce storefronts that load in milliseconds and look stunning on every screen size.</p>
<ul className="space-y-3">
<li className="flex items-center gap-2 text-sm text-on-surface/80">
<span className="material-symbols-outlined text-primary text-lg" data-icon="check_circle">check_circle</span> Fast Edge-Rendering
                            </li>
<li className="flex items-center gap-2 text-sm text-on-surface/80">
<span className="material-symbols-outlined text-primary text-lg" data-icon="check_circle">check_circle</span> Localization Ready
                            </li>
</ul>
</div>
{/* Product Management */}
<div className="p-8 rounded-3xl bg-surface-container-high border border-outline-variant/20 hover:shadow-[0_0_50px_rgba(137,206,255,0.05)] transition-all">
<span className="material-symbols-outlined text-tertiary mb-6 block text-4xl" data-icon="inventory_2">inventory_2</span>
<h4 className="text-xl font-bold mb-3">Product Management</h4>
<p className="text-on-surface-variant mb-6">Unified dashboard for inventory tracking across multiple warehouses and brick-and-mortar locations.</p>
<ul className="space-y-3">
<li className="flex items-center gap-2 text-sm text-on-surface/80">
<span className="material-symbols-outlined text-tertiary text-lg" data-icon="check_circle">check_circle</span> SKU Optimization
                            </li>
<li className="flex items-center gap-2 text-sm text-on-surface/80">
<span className="material-symbols-outlined text-tertiary text-lg" data-icon="check_circle">check_circle</span> Multi-tier Variants
                            </li>
</ul>
</div>
{/* Checkout System */}
<div className="p-8 rounded-3xl bg-surface-container-high border border-outline-variant/20 hover:shadow-[0_0_50px_rgba(137,206,255,0.05)] transition-all">
<span className="material-symbols-outlined text-secondary mb-6 block text-4xl" data-icon="credit_card">credit_card</span>
<h4 className="text-xl font-bold mb-3">Checkout System</h4>
<p className="text-on-surface-variant mb-6">Optimized 1-click checkout flows designed to maximize conversion and support luxury payment tiers.</p>
<ul className="space-y-3">
<li className="flex items-center gap-2 text-sm text-on-surface/80">
<span className="material-symbols-outlined text-secondary text-lg" data-icon="check_circle">check_circle</span> Apple Pay &amp; Crypto
                            </li>
<li className="flex items-center gap-2 text-sm text-on-surface/80">
<span className="material-symbols-outlined text-secondary text-lg" data-icon="check_circle">check_circle</span> Fraud Protection
                            </li>
</ul>
</div>
</div>
</div>
</section>
{/* Social Automation */}
<section className="px-8 py-20 bg-surface-container-lowest">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
<div className="order-2 lg:order-1">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-4 pt-12">
<div className="p-6 rounded-2xl bg-surface-container border border-outline-variant/20">
<span className="material-symbols-outlined text-primary mb-4" data-icon="alternate_email">alternate_email</span>
<h5 className="font-bold mb-1">Instagram AI</h5>
<p className="text-xs text-on-surface-variant">Auto-replies and tag management</p>
</div>
<div className="p-6 rounded-2xl bg-surface-container-high border border-outline-variant/20">
<span className="material-symbols-outlined text-tertiary mb-4" data-icon="rocket_launch">rocket_launch</span>
<h5 className="font-bold mb-1">Auto Posting</h5>
<p className="text-xs text-on-surface-variant">Optimal time scheduling</p>
</div>
</div>
<div className="space-y-4">
<div className="p-6 rounded-2xl bg-surface-container-highest border border-primary/30">
<span className="material-symbols-outlined text-primary mb-4" data-icon="groups">groups</span>
<h5 className="font-bold mb-1">Lead Gen</h5>
<p className="text-xs text-on-surface-variant">High-intent customer capture</p>
</div>
<div className="aspect-square rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
<img className="w-full h-full object-cover" data-alt="Digital interface showing social media analytics with colorful growth charts and trend lines in a dark mode UI" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdNUyNZnoYr1kYcJ5-3_4THrOqMinhWKnnnTCDxFwTU_6dGy-2W_MCPZ0mVHD5ebtoNpwhFSYRtjvMHV2B7cuEKCIfnpVsyUu5eAlD4QoInsRnbdnKhsM5P0GgoPAfzoZHi7VcJ9rXrYbzWyiBOk2cIzNZDB0jOkRI8PoipYESl5MXqb4FStZVXIsm0eC7DOGJepd-LFGJlVL393tC3IVYjXQf20dvu31Ti99HX8mafAEvqokfrluGsOMmCL5Dl5s_U9H-a8hO3yE"/>
</div>
</div>
</div>
</div>
<div className="order-1 lg:order-2">
<h2 className="font-headline text-4xl font-bold mb-6">Social Growth Automation</h2>
<p className="text-on-surface-variant text-lg mb-8 leading-relaxed">
                        Scale your presence without scaling your team. Synckraft's AI engine manages your social lifecycle from posting to lead conversion.
                    </p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-12 h-12 shrink-0 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">1</div>
<div>
<h4 className="font-bold mb-1">Intelligent Instagram Automation</h4>
<p className="text-on-surface-variant">Our AI understands context to reply to comments and DMs like a seasoned brand manager.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-12 h-12 shrink-0 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">2</div>
<div>
<h4 className="font-bold mb-1">Seamless Lead Generation</h4>
<p className="text-on-surface-variant">Turn every like and comment into a trackable lead in your CRM automatically.</p>
</div>
</div>
</div>
<button className="mt-10 px-8 py-4 bg-transparent border-2 border-primary text-primary font-bold rounded-xl hover:bg-primary/10 transition-all">
                        View Growth Metrics
                    </button>
</div>
</div>
</section>
{/* Final CTA */}
<section className="px-8 py-20">
<div className="max-w-5xl mx-auto rounded-[3rem] p-12 lg:p-24 bg-gradient-to-br from-surface-container-high to-surface-container relative overflow-hidden border border-outline-variant/10 text-center">
<div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px]"></div>
<div className="absolute bottom-0 left-0 w-64 h-64 bg-tertiary/10 blur-[100px]"></div>
<h2 className="font-headline text-4xl lg:text-6xl font-extrabold mb-8 relative z-10">Ready to redefine your <span className="text-primary">digital runway?</span></h2>
<p className="text-on-surface-variant text-xl mb-12 max-w-2xl mx-auto relative z-10">Join the elite fashion brands using Synckraft to dominate the digital landscape.</p>
<div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
<button className="px-12 py-5 bg-primary text-on-primary font-black rounded-2xl text-lg shadow-xl shadow-primary/30 hover:scale-105 active:scale-95 transition-all">
                        Book Fashion Demo
                    </button>
<button className="px-12 py-5 bg-surface-container-highest text-on-surface font-bold rounded-2xl text-lg hover:bg-surface-bright transition-all">
                        Speak to an Architect
                    </button>
</div>
</div>
</section>
</main>
    </>
  );
}
