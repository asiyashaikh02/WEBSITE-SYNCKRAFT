export default function Hero() {
  const WHATSAPP_URL = "https://wa.me/919867799655?text=Hello%20Synckraft%20Team%2C%0A%0AI'm%20interested%20in%20your%20Specialized%20AI%20systems%20for%20diverse%20industry%20requirements.%0A%0APlease%20help%20me%20with%3A%0A%0A%E2%80%A2%20Healthcare%20AI%20%20%0A%E2%80%A2%20Fashion%20AI%20%20%0A%E2%80%A2%20Beauty%20AI%20%20%0A%E2%80%A2%20Jewellery%20AI%20%20%0A%E2%80%A2%20Supermarket%20AI%20%20%0A%E2%80%A2%20Furniture%20AI%20%20%0A%E2%80%A2%20Gym%20AI%20%20%0A%E2%80%A2%20Retail%20AI%20%20%0A%E2%80%A2%20AI%20%2F%20Obsidian%20Core%20Systems%20%20%0A%0AI%20would%20like%20to%3A%0A%0A%E2%80%A2%20Schedule%20a%20Demo%20%20%0A%E2%80%A2%20Talk%20to%20Sales%20%20%0A%0APlease%20assist%20me%20with%20the%20next%20steps.%0A%0AThank%20you.";

  return (
    <section className="relative min-h-[707px] flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      <div className="hero-gradient absolute inset-0 pointer-events-none"></div>
      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary-container/20 border border-secondary/20 text-on-secondary-container text-xs font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          Next-Gen AI Orchestration
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold font-headline tracking-tighter text-on-surface mb-8 leading-[1.1]">
          AI Powered Business Systems for <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-tertiary">Modern Businesses</span>
        </h1>
        <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto mb-12 font-light">
          Transforming complex enterprise workflows into seamless, automated intelligence. Precision engineering for the digital-first era.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href={WHATSAPP_URL} className="w-full sm:w-auto px-8 py-4 bg-primary text-on-primary rounded-xl font-bold text-lg hover:shadow-[0_0_20px_rgba(137,206,255,0.4)] transition-all">
            Schedule Demo
          </a>
          <a href={WHATSAPP_URL} className="w-full sm:w-auto px-8 py-4 bg-surface-container-high text-on-surface rounded-xl font-bold text-lg border border-outline-variant/20 hover:bg-surface-container-highest transition-all">
            Talk to Sales
          </a>
        </div>
      </div>
      <div className="mt-20 w-full max-w-6xl mx-auto px-4 opacity-50">
        <div className="h-px bg-gradient-to-r from-transparent via-outline-variant/30 to-transparent"></div>
      </div>
    </section>
  );
}
