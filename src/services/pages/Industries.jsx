import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const industries = [
  { path: "/industries/real-estate", name: "Real Estate", icon: "apartment" },
  { path: "/industries/restaurant", name: "Restaurant", icon: "restaurant" },
  { path: "/industries/retail", name: "Retail", icon: "storefront" },
  { path: "/industries/supermarket", name: "Supermarket", icon: "shopping_cart" },
  { path: "/industries/healthcare", name: "Healthcare", icon: "medical_services" },
  { path: "/industries/gym", name: "Gym", icon: "fitness_center" },
  { path: "/industries/hospitality", name: "Hospitality", icon: "hotel" },
  { path: "/industries/beauty", name: "Beauty", icon: "spa" },
  { path: "/industries/education", name: "Education", icon: "school" },
  { path: "/industries/fashion", name: "Fashion", icon: "checkroom" },
  { path: "/industries/furniture", name: "Furniture", icon: "chair" },
  { path: "/industries/automobile", name: "Automobile", icon: "directions_car" },
  { path: "/industries/jewelry", name: "Jewelry", icon: "diamond" },
  { path: "/industries/enterprise", name: "Enterprise", icon: "business" }
];

export default function Industries() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-32 min-h-screen">
      <section className="px-8 max-w-7xl mx-auto mb-20 text-center">
        <h1 className="text-5xl font-headline font-extrabold tracking-tighter text-on-surface mb-6">
          Industries We Elevate
        </h1>
        <p className="text-xl text-on-surface-variant max-w-2xl mx-auto">
          Select an ecosystem below to explore tailored cognitive architectures engineered for your specific domain.
        </p>
      </section>

      <section className="px-8 max-w-5xl mx-auto pb-32">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {industries.map((ind, idx) => (
            <Link key={idx} to={ind.path} className="bg-surface-container-low p-8 rounded-[2rem] border border-outline-variant/10 text-center flex flex-col items-center justify-center gap-4 hover:bg-surface-container hover:border-primary/30 transition-all hover:-translate-y-1">
              <span className="material-symbols-outlined text-4xl text-primary">{ind.icon}</span>
              <span className="font-headline font-bold text-lg text-on-surface">{ind.name}</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
