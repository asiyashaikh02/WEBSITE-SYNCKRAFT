import React from "react";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-20 sm:py-28">
      <div className="absolute inset-0 bg-slate-950/95" />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 12%, rgba(56,189,248,0.18), transparent 28%), radial-gradient(circle at 82% 18%, rgba(168,85,247,0.14), transparent 26%), radial-gradient(circle at 55% 85%, rgba(14,165,233,0.08), transparent 35%)",
          mixBlendMode: "screen",
          opacity: 0.75,
        }}
      />

      <div className="hero-glow" />
      <div className="absolute left-10 top-28 h-72 w-72 rounded-full bg-cyan-500/15 blur-3xl" />
      <div className="absolute right-8 top-40 h-56 w-56 rounded-full bg-fuchsia-500/15 blur-3xl" />
      <div className="absolute left-[10%] bottom-16 h-44 w-44 rounded-full bg-sky-500/10 blur-3xl" />
      <div className="absolute right-[12%] bottom-20 h-64 w-64 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-slate-200 shadow-[0_0_32px_rgba(56,189,248,0.16)] backdrop-blur-xl">
          <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
          +35% Avg Revenue Growth | Rated 4.9/5 by 100+ Businesses
        </div>

        <h1 className="mt-8 max-w-4xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.03] text-white">
          Turn Your Business Into A
          <span className="block bg-gradient-to-r from-cyan-300 via-sky-300 to-fuchsia-400 bg-clip-text text-transparent">
            Scaleable Growth Engine
          </span>
        </h1>

        <p className="mt-6 max-w-3xl text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed">
          We build robust operating systems and automated workflows that eliminate manual friction, generate qualified leads, and scale your revenue predictably.
        </p>

        <div className="mt-10 flex w-full flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
          <Link
            to="/free-audit"
            className="inline-flex min-w-[220px] items-center justify-center rounded-full bg-gradient-to-r from-blue-500 via-cyan-500 to-sky-500 px-8 py-4 text-base font-semibold text-white shadow-[0_24px_80px_rgba(56,189,248,0.25)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_30px_90px_rgba(56,189,248,0.35)]"
          >
            Get Free Growth Audit
          </Link>

          <Link
            to="/services"
            className="inline-flex min-w-[220px] items-center justify-center rounded-full border border-white/10 bg-white/10 px-8 py-4 text-base font-semibold text-slate-100 shadow-[0_20px_60px_rgba(15,23,42,0.2)] transition duration-300 hover:bg-white/15 hover:shadow-[0_24px_70px_rgba(56,189,248,0.18)]"
          >
            See How It Works
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
