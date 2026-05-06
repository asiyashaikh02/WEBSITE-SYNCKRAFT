import React from "react";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-32 bg-white">
      {/* Light elegant gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-50/80 blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-slate-50/80 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">
        <div className="inline-flex items-center gap-3 rounded-full border border-blue-100 bg-blue-50/50 px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-blue-600 mb-8 backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Parent Ecosystem Company
        </div>

        <h1 className="max-w-4xl text-5xl md:text-6xl lg:text-[72px] font-extrabold tracking-tight text-slate-900 leading-[1.1]">
          Building the Future of
          <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
            Institutional Infrastructure
          </span>
        </h1>

        <p className="mt-8 max-w-2xl text-xl text-slate-500 font-medium leading-relaxed">
          Synckraft builds and powers specialized modern infrastructure brands. We architect ecosystems that drive enterprise performance at scale.
        </p>

        <div className="mt-12 flex w-full flex-col justify-center gap-4 sm:flex-row sm:gap-6">
          <Link
            to="/ecosystem"
            className="inline-flex min-w-[220px] items-center justify-center rounded-full bg-slate-900 px-8 py-4 text-base font-semibold text-white shadow-[0_8px_30px_rgba(15,23,42,0.12)] transition-all hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(15,23,42,0.2)] hover:bg-blue-600"
          >
            Explore Ecosystem
          </Link>

          <Link
            to="/company"
            className="inline-flex min-w-[220px] items-center justify-center rounded-full border border-slate-200 bg-white px-8 py-4 text-base font-semibold text-slate-700 shadow-sm transition-all hover:bg-slate-50 hover:-translate-y-1 hover:border-slate-300"
          >
            About Synckraft
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
