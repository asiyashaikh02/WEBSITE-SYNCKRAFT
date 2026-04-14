import { useEffect } from 'react';

export default function Jewelry() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <main className="pt-24">
{/* Hero Section */}
<section className="relative px-8 lg:px-24 py-20 min-h-[707px] flex flex-col justify-center hero-gradient">
<div className="max-w-4xl">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary-container/30 border border-secondary/20 mb-8">
<span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
<span className="text-xs font-semibold uppercase tracking-widest text-on-secondary-container">Intelligent Luxury Commerce</span>
</div>
<h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tight text-on-surface mb-6 leading-tight">
                    Synckraft <span className="text-primary">Jewellery</span> Digital System
                </h1>
<p className="text-xl text-on-surface-variant max-w-2xl mb-10 leading-relaxed">
                    Transforming high-jewelry retail through hyper-realistic 3D visualization, immersive virtual showrooms, and AI-driven sales orchestration.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="px-8 py-4 bg-gradient-to-br from-primary to-on-primary-container text-on-primary font-bold rounded-xl shadow-lg shadow-primary/10 hover:shadow-primary/20 active:scale-95 transition-all">
                        Book Jewellery Demo
                    </button>
<button className="px-8 py-4 bg-surface-container-low border border-outline-variant/30 text-on-surface font-semibold rounded-xl hover:bg-surface-container transition-all">
                        Explore Systems
                    </button>
</div>
</div>
{/* Asymmetric Floating Visual */}
<div className="absolute right-0 top-1/2 -translate-y-1/2 hidden xl:block w-1/3">
<div className="relative group">
<div className="absolute -inset-1 bg-gradient-to-r from-primary to-tertiary rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
<div className="relative bg-surface-container-high p-4 rounded-2xl">
<img alt="Jewellery Showcase" className="rounded-xl w-full object-cover shadow-2xl" data-alt="High-end luxury diamond ring with intricate platinum setting glowing under precise studio spotlights on a dark velvet surface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVJsVr8bxYZsirAJZBVjRkWVwJrfAbZ7PJxs9bvSKwAoYX740nBSKhr4psQdqyPAp4zQjjN8wdtMiOzTqwI3hHq8JnfNXAtws_bkaFUcTDowIfJbP6_H6gLd2tX_b87ApqEMWGO7tkmEp2BySIq5zUtfzJs2qr-4jShnxl0nv2P3q2__rbV_8d26xk4Z1lQCeHJWyHslAIdacNGil-OpZtDC_8jpfpAlSj9KDfKea0NIcQ8w1dK73-yWLJeo5gwyPKZ_jXeiUgwUQ"/>
</div>
</div>
</div>
</section>
{/* Section 1: Product Visualization */}
<section className="px-8 lg:px-24 py-24 bg-surface-container-low">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
<div className="lg:col-span-5">
<h2 className="font-headline text-4xl font-bold mb-6 text-primary">Product Visualization</h2>
<p className="text-on-surface-variant text-lg mb-8">
                        The gold standard in digital craftsmanship. Our proprietary rendering engine captures the physical soul of every gemstone and precious metal.
                    </p>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<div className="mt-1 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-lg" data-icon="view_in_ar">view_in_ar</span>
</div>
<div>
<h4 className="font-bold text-on-surface">3D Jewellery Renders</h4>
<p className="text-sm text-on-surface-variant">Physically based rendering (PBR) for hyper-realistic diamond facets and metal finishes.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-lg" data-icon="auto_awesome_motion">auto_awesome_motion</span>
</div>
<div>
<h4 className="font-bold text-on-surface">Premium Catalog</h4>
<p className="text-sm text-on-surface-variant">Editorial-grade digital Lookbooks with interactive zoom and multi-angle viewing.</p>
</div>
</li>
</ul>
</div>
<div className="lg:col-span-7 grid grid-cols-2 gap-4">
<div className="space-y-4 pt-12">
<div className="bg-surface-container rounded-2xl p-2 aspect-[4/5] overflow-hidden shadow-xl">
<img alt="Emerald Necklace" className="w-full h-full object-cover rounded-xl" data-alt="Exquisite gold necklace with emerald pendants displayed against a dark atmospheric background with focused highlights" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWvOqSUtbB9KEBN3MF3de473XEwVv9gqfhBp8b7B-txdwwZfqmRFhZ8gKBaHRli-db3f2Kf00nqpSbhp3R1LqHCSjamdEU2Ko5Vker8YUp0eUe9rMAN7OF3aVecK2maKj8fLZRgJ3Ens34uHHoFE7-qOlmIs_IOfLLfb2PO5BBsT8_jheLjzxrhX2F45lieASeEeg2CktFOe5mzcW2QgGHdZx8N7CZsc2SHdeXvTIDJpjO0lvNKKcrf7QXtM94S_yrAa8nBWWC4w8"/>
</div>
<div className="bg-primary/5 p-6 rounded-2xl">
<span className="text-3xl font-black text-primary block mb-2">99%</span>
<span className="text-xs uppercase tracking-widest font-bold text-on-surface-variant">Visual Fidelity</span>
</div>
</div>
<div className="space-y-4">
<div className="bg-surface-container rounded-2xl p-2 aspect-[4/5] overflow-hidden shadow-xl">
<img alt="Diamond Earrings" className="w-full h-full object-cover rounded-xl" data-alt="Pair of diamond stud earrings reflecting soft light on a polished black obsidian base" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgijDsW6JmasBAgq3-tYXwJRkmxLPr53D49HCotMGt6j-scK_fdRc2yo71qYSD1UPY3NYAbXL-LJ9h4ti1AlAHhlbGb-ljFG3dzlyTj8cqjTswn8vC_qMqJtjOdqZIwvHAdt2YAqs7fTBD8iJWDevIP3jHa4wZ-rBLjjaFqikJrLo5oUk91GxVsyJ1FKBxpMuUQqfUKOW9KspNNwI0TfcYOLYQkEe4weFAEHut4-gV5yQrSkJ7KDzk_M7R41xJfKEYpZ2v0kRRH44"/>
</div>
<div className="bg-surface-container rounded-2xl p-6">
<h4 className="font-bold text-on-surface mb-2">Product Showcase</h4>
<p className="text-xs text-on-surface-variant">Dynamic 360° rotation modules for immersive product storytelling.</p>
</div>
</div>
</div>
</div>
</section>
{/* Section 2: Virtual Experience (Bento Grid) */}
<section className="px-8 lg:px-24 py-32">
<div className="text-center mb-16">
<h2 className="font-headline text-4xl font-bold mb-4">Virtual Experience</h2>
<p className="text-on-surface-variant max-w-2xl mx-auto">Bridging the gap between the screen and the skin with world-class interactive technology.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-[800px] md:h-[600px]">
{/* Virtual Try-On */}
<div className="md:col-span-2 md:row-span-2 bg-surface-container rounded-3xl relative overflow-hidden group">
<img alt="AR Experience" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" data-alt="Modern high-tech AR interface showing a woman virtually trying on an elegant diamond tiara with digital tracking markers" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAz_R01kaKE9od4tqiT0Sly24u3qdaVZyUS6GbM-H2aXRQTDaJYUTtq91eZKrDBBlnW5QQM7tAclW8WBd9Gw9VJV9KvIWptr8uPyPQyCP98yfZWuunLXn0bJGvObfLGZkQeABn6YamdibKDpF8xlxRdfuJYWj6ahl31545YIZEXxsth2CVDg_xQ5BzwCbaBFp3Oz-WzGrrtmWJpk5zN_EEBvKDY0DDOCZFlvFUtOS_wqZK3tJbatJ_2zYTJIIIMKCizeh-QqkICXjU"/>
<div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent p-8 flex flex-col justify-end">
<div className="inline-flex items-center gap-2 px-3 py-1 bg-primary text-on-primary rounded-full w-fit text-xs font-bold mb-4">NEW: AR TRACKING</div>
<h3 className="text-2xl font-bold mb-2">Virtual Try-on</h3>
<p className="text-on-surface-variant text-sm max-w-sm">Precision AR mapping for rings, watches, and necklaces using real-time facial and hand tracking.</p>
</div>
</div>
{/* Digital Showroom */}
<div className="md:col-span-2 bg-surface-container-high rounded-3xl p-8 flex flex-col justify-between border border-outline-variant/10">
<div className="flex justify-between items-start">
<span className="material-symbols-outlined text-4xl text-secondary" data-icon="storefront">storefront</span>
<div className="bg-secondary/10 px-3 py-1 rounded-full text-[10px] font-bold text-secondary tracking-widest uppercase">3D Space</div>
</div>
<div>
<h3 className="text-xl font-bold mb-2">Digital Showroom</h3>
<p className="text-on-surface-variant text-sm">A 3D virtual environment for VIP clients to explore the entire collection from their browsers.</p>
</div>
</div>
{/* Online Consultation */}
<div className="md:col-span-2 bg-surface-container-highest rounded-3xl p-8 flex items-center gap-8 group cursor-pointer hover:bg-surface-bright transition-colors">
<div className="w-16 h-16 rounded-2xl bg-tertiary/20 flex items-center justify-center flex-shrink-0">
<span className="material-symbols-outlined text-tertiary text-3xl" data-icon="video_chat">video_chat</span>
</div>
<div>
<h3 className="text-xl font-bold mb-1">Online Consultation</h3>
<p className="text-on-surface-variant text-sm">Live expert-led sessions with integrated product controls and high-res screen sharing.</p>
</div>
</div>
</div>
</section>
{/* Section 3: Sales System */}
<section className="px-8 lg:px-24 py-24 bg-surface-container-lowest">
<div className="flex flex-col lg:flex-row gap-16 items-start">
<div className="lg:w-1/3 sticky top-32">
<h2 className="font-headline text-4xl font-bold mb-6 text-on-surface">Sales System</h2>
<p className="text-on-surface-variant mb-8">
                        The machinery behind the luxury. We automate the friction so your experts can focus on the relationship.
                    </p>
<div className="p-6 bg-surface-container rounded-2xl border-l-4 border-primary">
<span className="material-symbols-outlined text-primary mb-4" data-icon="rocket_launch">rocket_launch</span>
<h4 className="font-bold mb-2">Omnichannel Flow</h4>
<p className="text-xs text-on-surface-variant leading-relaxed">Sync every lead from social, web, and AR into a single high-precision dashboard.</p>
</div>
</div>
<div className="lg:w-2/3 grid grid-cols-1 gap-6">
{/* Sales Cards */}
<div className="p-10 rounded-3xl bg-surface-container flex flex-col md:flex-row gap-8 items-center border border-outline-variant/10">
<div className="w-full md:w-1/2 aspect-video bg-[#131b2e] rounded-xl overflow-hidden relative">
<img alt="WhatsApp Selling" className="w-full h-full object-cover" data-alt="Stylized social media marketing interface on a mobile phone showing luxury jewelry ads and chat notifications" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBu6hG6JxN_iEibX-dEoriiRcsc2mJqQZAHSJFW1T1vNYVlsr3RvjZyaWeBHh0-fD13wSZZeMKTU1rskNVmVFdKfbQ_EbFskSSabGjpINDKPvgJyzTxyvUaPK2f_fqTFwx_-pOnUk3yKBVchilM6SnGHp6s9k9I4BoHt8N0fc1FEmZVN6zL4tZIrrW6kM9OCDsDVbIKiRaf5JxSmQq7vJbhzS1skPFi5SSMtq_0EJTKMMVowjcpwMMfwrJvK92UeqWFFeKJpUTioJQ"/>
</div>
<div className="md:w-1/2">
<h3 className="text-2xl font-bold mb-4">WhatsApp Selling</h3>
<p className="text-on-surface-variant mb-6">Automated catalogs and checkout flows integrated directly into WhatsApp for instant relationship commerce.</p>
<div className="flex items-center gap-2 text-primary font-bold text-sm">
<span>Learn More</span>
<span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="p-8 rounded-3xl bg-surface-container-high hover:bg-surface-container-highest transition-all duration-300">
<span className="material-symbols-outlined text-3xl text-primary mb-6" data-icon="person_search">person_search</span>
<h3 className="text-lg font-bold mb-3">Online Inquiry</h3>
<p className="text-sm text-on-surface-variant">High-intent forms capturing specific gemstone preferences and custom design requirements.</p>
</div>
<div className="p-8 rounded-3xl bg-surface-container-high hover:bg-surface-container-highest transition-all duration-300">
<span className="material-symbols-outlined text-3xl text-secondary mb-6" data-icon="track_changes">track_changes</span>
<h3 className="text-lg font-bold mb-3">Lead Tracking</h3>
<p className="text-sm text-on-surface-variant">AI-scored lead prioritization based on virtual interaction time and product engagement depth.</p>
</div>
</div>
</div>
</div>
</section>
{/* Final CTA Section */}
<section className="px-8 lg:px-24 py-32 text-center">
<div className="max-w-3xl mx-auto p-12 rounded-[2.5rem] bg-gradient-to-br from-surface-container-low to-surface border border-primary/10 shadow-2xl relative overflow-hidden">
<div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/10 blur-[100px] rounded-full"></div>
<div className="absolute -bottom-24 -right-24 w-64 h-64 bg-tertiary/10 blur-[100px] rounded-full"></div>
<h2 className="font-headline text-4xl md:text-5xl font-bold mb-6 text-on-surface">Ready to Digitise Your Collection?</h2>
<p className="text-on-surface-variant text-lg mb-10">Join the world's most innovative jewellery houses in defining the future of luxury commerce.</p>
<button className="px-12 py-5 bg-primary text-on-primary font-black rounded-2xl shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all text-lg">
                    Book Jewellery Demo
                </button>
</div>
</section>
</main>
    </>
  );
}
