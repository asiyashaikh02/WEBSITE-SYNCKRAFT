export default function CTA() {
  const WHATSAPP_URL = "https://wa.me/919867799655?text=Hello%20Synckraft%20Team%2C%0A%0AI'm%20interested%20in%20your%20Specialized%20AI%20systems%20for%20diverse%20industry%20requirements.%0A%0APlease%20help%20me%20with%3A%0A%0A%E2%80%A2%20Healthcare%20AI%20%20%0A%E2%80%A2%20Fashion%20AI%20%20%0A%E2%80%A2%20Beauty%20AI%20%20%0A%E2%80%A2%20Jewellery%20AI%20%20%0A%E2%80%A2%20Supermarket%20AI%20%20%0A%E2%80%A2%20Furniture%20AI%20%20%0A%E2%80%A2%20Gym%20AI%20%20%0A%E2%80%A2%20Retail%20AI%20%20%0A%E2%80%A2%20AI%20%2F%20Obsidian%20Core%20Systems%20%20%0A%0AI%20would%20like%20to%3A%0A%0A%E2%80%A2%20Schedule%20a%20Demo%20%20%0A%E2%80%A2%20Talk%20to%20Sales%20%20%0A%0APlease%20assist%20me%20with%20the%20next%20steps.%0A%0AThank%20you.";

  return (
    <section className="py-32 px-6">
      <div className="max-w-4xl mx-auto rounded-[2rem] bg-gradient-to-br from-surface-container-high to-surface p-12 md:p-20 text-center relative overflow-hidden border border-outline-variant/20">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-tertiary/10 blur-[100px] rounded-full"></div>
        <h2 className="text-4xl md:text-5xl font-extrabold font-headline mb-8 relative z-10">Ready to Sync Your Business?</h2>
        <p className="text-on-surface-variant text-lg mb-12 relative z-10 max-w-xl mx-auto">
          Join hundreds of modern enterprises leveraging Synckraft's cognitive architecture to scale operations.
        </p>
        <div className="flex flex-wrap justify-center gap-6 relative z-10">
          <a href={WHATSAPP_URL} className="px-10 py-4 bg-primary text-on-primary rounded-xl font-bold hover:scale-105 transition-transform">
            Schedule Demo
          </a>
          <a href={WHATSAPP_URL} className="px-10 py-4 bg-surface-container-highest text-on-surface rounded-xl font-bold border border-outline-variant/20 hover:bg-surface-bright transition-all">
            Talk to Sales
          </a>
        </div>
      </div>
    </section>
  );
}
