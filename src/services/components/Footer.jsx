export default function Footer() {
  return (
    <footer className="w-full bg-[#0b1326] border-t border-[#45464d]/20 py-12 px-8">
      <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="text-lg font-bold text-[#dae2fd] font-headline tracking-tighter">SYNCKRAFT</div>
          <p className="font-inter text-xs uppercase tracking-widest text-[#dae2fd]/40">© 2024 Synckraft AI Business Systems. All rights reserved.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          <a className="font-inter text-xs uppercase tracking-widest text-[#dae2fd]/40 hover:text-[#89ceff] transition-colors" href="https://wa.me/919867799655?text=Hello%20Synckraft%20Team%2C%0A%0AI'm%20interested%20in%20your%20Specialized%20AI%20systems%20for%20diverse%20industry%20requirements.%0A%0APlease%20help%20me%20with%3A%0A%0A%E2%80%A2%20Healthcare%20AI%20%20%0A%E2%80%A2%20Fashion%20AI%20%20%0A%E2%80%A2%20Beauty%20AI%20%20%0A%E2%80%A2%20Jewellery%20AI%20%20%0A%E2%80%A2%20Supermarket%20AI%20%20%0A%E2%80%A2%20Furniture%20AI%20%20%0A%E2%80%A2%20Gym%20AI%20%20%0A%E2%80%A2%20Retail%20AI%20%20%0A%E2%80%A2%20AI%20%2F%20Obsidian%20Core%20Systems%20%20%0A%0AI%20would%20like%20to%3A%0A%0A%E2%80%A2%20Schedule%20a%20Demo%20%20%0A%E2%80%A2%20Talk%20to%20Sales%20%20%0A%0APlease%20assist%20me%20with%20the%20next%20steps.%0A%0AThank%20you.">WhatsApp</a>
          <a className="font-inter text-xs uppercase tracking-widest text-[#dae2fd]/40 hover:text-[#89ceff] transition-colors" href="#">LinkedIn</a>
          <a className="font-inter text-xs uppercase tracking-widest text-[#dae2fd]/40 hover:text-[#89ceff] transition-colors" href="#">Instagram</a>
          <a className="font-inter text-xs uppercase tracking-widest text-[#dae2fd]/40 hover:text-[#89ceff] transition-colors" href="#">Contact Info</a>
          <a className="font-inter text-xs uppercase tracking-widest text-[#dae2fd]/40 hover:text-[#89ceff] transition-colors" href="#">Email</a>
        </div>
      </div>
    </footer>
  );
}
