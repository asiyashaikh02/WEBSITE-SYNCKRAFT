import Hero from '../components/Hero';
import CTA from '../components/CTA';
import IndustryCard from '../components/IndustryCard';
import FeaturedIndustryCard from '../components/FeaturedIndustryCard';

export default function Home() {
  return (
    <>
      <main className="pt-24">
        <Hero />

        {/* Primary Solutions */}
        <section className="py-24 px-6 max-w-screen-2xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">Core Ecosystems</h2>
              <p className="text-on-surface-variant">Our flagship AI frameworks designed for high-impact industrial scale.</p>
            </div>
            <span className="text-primary font-bold tracking-widest text-xs uppercase">Flagship Solutions</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div id="real-estate">
              <FeaturedIndustryCard
                to="industries/real-estate"
                imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuDXLqgtAVw-h9IJBYsIkzUsmikWSs4m7eybkf734RFgXYxZMJvnha1XEwZhhFyOvo2lTZ96_otqOPMbVLC6aCx14-gGZVoQ1yW6qHpDMNo4PJeJmMUcw6CElX9O88VucdFAPAVt5BXKf-y6Dt3wEKongkcOcu5Woq1nYyKSAZibP-4bCbDLA_VcMcKUnEO9t5cP6SgDFw_Yf3EVG20hBWwQ6Sh8Qy96pEgTBDltsRkVIm2gBJdRQnW-CLS0BrsZYadOWZZ1GMsiljA"
                imageAlt="Modern architecture"
                icon="domain"
                title="Real Estate Solutions"
                description="Automated property valuation, smart lead scoring, and predictive maintenance scheduling for global portfolios."
                isPopular={false}
              />
            </div>
            <div id="restaurant">
              <FeaturedIndustryCard
                to="industries/restaurant"
                imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuDzsVVE_948417n2Ty2DkCC4eHFPQCSbscziiKfHDdWW_ja4gr6MAE3QhQZrU2gv03i1DpvUoYR3kIOdHHoE0LRsPG935eJsrYvrE5LJ1nUO8jceje2onHLCImNvkEONEqcEqqr7i_N-06ggU9SIH2zzwG0doYfrWUvP9Y1hWu0x9GUduu2mFMnpq6GurXJH-uiH0CcZa1BQPdsFUuqzOTr6gO9y7cgcEeQocjy2qXa9xVN7jC8xkngzFdi9Wi_w7TjzxdZDhpdkDw"
                imageAlt="Luxury restaurant interior"
                icon="restaurant"
                title="Restaurant Solutions"
                description="AI-driven inventory optimization, dynamic pricing models, and automated customer loyalty orchestration."
                isPopular={true}
                highlightClass="bg-surface-container-high border-2 border-primary/40 shadow-2xl shadow-primary/10"
              />
            </div>
          </div>
        </section>

        {/* Secondary Industries Grid */}
        <section className="py-24 px-6 bg-surface-container-lowest">
          <div className="max-w-screen-2xl mx-auto">
            <div className="mb-16 text-center">
              <h2 className="text-3xl font-bold font-headline mb-4">Vertical Intelligence</h2>
              <p className="text-on-surface-variant">Specialized AI systems for diverse industry requirements.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              <div id="healthcare"><IndustryCard to="industries/healthcare" icon="medical_services" colorClass="text-tertiary" title="Healthcare" description="Data-driven diagnostics & ops." /></div>
              <IndustryCard to="industries/fashion" icon="apparel" colorClass="text-secondary" title="Fashion" description="Trend forecasting & logistics." />
              <IndustryCard to="industries/beauty" icon="auto_awesome" colorClass="text-primary" title="Beauty" description="Personalized curation AI." />
              <IndustryCard to="industries/jewellery" icon="diamond" colorClass="text-tertiary" title="Jewellery" description="Inventory tracking & luxury CRM." />
              <IndustryCard to="industries/supermarkets" icon="shopping_cart" colorClass="text-secondary" title="Supermarkets" description="Supply chain automation." />
              <IndustryCard to="industries/furniture" icon="chair" colorClass="text-primary" title="Furniture" description="AR-integrated retail systems." />
              <IndustryCard to="industries/gym" icon="fitness_center" colorClass="text-tertiary" title="Gym" description="Institute workflow algorithms." />
              <IndustryCard to="industries/retail" icon="storefront" colorClass="text-secondary" title="Retail" description="Intelligent retail analytics." />
              <IndustryCard to="industries/ai" icon="robot_2" colorClass="text-primary" title="AI / Obsidian" description="Core system transformations." highlightClass="bg-primary/5 border border-primary/20 hover:bg-primary/10" />
            </div>
          </div>
        </section>

        <CTA />
      </main>
    </>
  );
}
