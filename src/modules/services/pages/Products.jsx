import React from 'react';

const products = [
  { id: 1, name: "Synckraft Kitchen OS", desc: "Automated KDS and cloud-kitchen management system.", domain: "Restaurant" },
  { id: 2, name: "Omni-Shelf AI", desc: "Smart inventory tracking and online ordering for modern retail.", domain: "Retail" },
  { id: 3, name: "StyleSync Engine", desc: "Digital styling and multi-channel inventory distribution.", domain: "Fashion" },
  { id: 4, name: "AR Furniture Visualizer", desc: "Allow customers to place 3D furniture models within their homes.", domain: "Furniture" },
  { id: 5, name: "Luxe Catalog Platform", desc: "High-security digital catalogs for fine jewelry management.", domain: "Jewelry" },
  { id: 6, name: "Property Pipeline CRM", desc: "Automated lead tracking and dynamic property portfolio portals.", domain: "Real Estate" },
  { id: 7, name: "AutoServe Portal", desc: "Dealership workflow automation and digital test drive bookings.", domain: "Automobile" },
  { id: 8, name: "Patient Flow OS", desc: "HIPAA-compliant appointment scaling and patient queue management.", domain: "Healthcare" },
  { id: 9, name: "Campus Core Platform", desc: "Unified grading, attendance, and administrative workflows.", domain: "Education" },
  { id: 10, name: "Guest Experience AI", desc: "Contactless hotel operations and predictive concierge routing.", domain: "Hospitality" },
];

export default function Products() {
  return (
    <main className="pt-32 min-h-screen">
      <section className="px-8 max-w-7xl mx-auto mb-20 text-center">
        <h1 className="text-5xl font-headline font-extrabold tracking-tighter text-on-surface mb-6">
          Future Architecture
        </h1>
        <p className="text-xl text-on-surface-variant max-w-2xl mx-auto">
          Explore our upcoming pipeline of 10 dedicated premium products designed across 10 specialized domains.
        </p>
      </section>

      <section className="px-8 max-w-[1600px] mx-auto pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {products.map(product => (
            <div key={product.id} className="bg-surface-container-low rounded-3xl p-6 border border-outline-variant/10 flex flex-col justify-between group hover:border-primary/30 transition-all hover:-translate-y-1 shadow-lg hover:shadow-primary/5">
              <div>
                <div className="inline-flex px-3 py-1 bg-surface-container-highest rounded-full text-[10px] font-bold tracking-widest uppercase text-tertiary mb-4">
                  Domain: {product.domain}
                </div>
                <h3 className="text-xl font-headline font-bold text-on-surface mb-3 line-clamp-2">
                  {product.name}
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed line-clamp-3 mb-6">
                  {product.desc}
                </p>
              </div>
              <button disabled className="w-full py-3 rounded-xl bg-surface-container-highest text-on-surface-variant font-bold text-sm border border-outline-variant/20 uppercase tracking-widest group-hover:text-primary transition-colors">
                Coming Soon
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
