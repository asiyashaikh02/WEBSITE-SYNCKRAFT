import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Fashion() {

  const [showPopup, setShowPopup] = useState(false);
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleScroll = () => setShowSticky(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);

    const timer = setTimeout(() => setShowPopup(true), 7000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="pt-24">

      {/* 🔴 FOMO BAR */}
      <div className="text-center text-xs text-primary mb-4">
        🔴 21 people are viewing this right now • 9 brands joined this week
      </div>

      {/* ================= HERO ================= */}
      <section className="relative px-8 py-20 lg:py-32 overflow-hidden">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

          {/* TEXT */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="z-10"
          >

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container text-xs font-bold mb-6">
              <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
              Luxury Fashion Intelligence
            </div>

            <h1 className="text-5xl lg:text-7xl font-extrabold mb-8 leading-[1.1]">
              Fashion <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-tertiary">Commerce OS</span>
            </h1>

            <p className="text-lg text-on-surface-variant mb-10 max-w-xl">
              Build a high-performance digital fashion ecosystem with immersive 3D, AI-driven growth, and conversion-focused commerce systems.
            </p>

            <div className="flex gap-4">
              <button 
                onClick={() => setShowPopup(true)}
                className="px-8 py-4 bg-gradient-to-r from-primary to-tertiary font-bold rounded-xl hover:scale-105 transition"
              >
                Book Fashion Demo
              </button>

              <button className="px-8 py-4 border border-white/20 rounded-xl hover:bg-white/10 transition">
                View Case Study
              </button>
            </div>

          </motion.div>

          {/* IMAGE */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              className="w-full h-[600px] object-cover opacity-80"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXcsknhOVoh6lUxP2lr-dh4w40ekBhnBAs76UDDxbrBzrF9mob7uOkqJxH7pi2v4Ac0ftVCBMaH04aWhZBSmNh_7FOxqnM5n2b7XX470_nXcDgZJvSNTWvRv2F5uo61bojJPJJqcaQmXD9ie27NKxeX67tx-z1c14S96EALcwN9F93STlp2EHv2ke8yHMWzhnaYv1G85Dbu8vkdZwb4mF-dKsZdGiRVv2rvqdE__rkX3ZhDETkd6ukukbDZ02QQMcFagwNDUBEcoQ"
            />
          </div>

        </div>
      </section>

      {/* 📊 TRUST METRICS */}
      <section className="text-center mb-24 px-8">
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { value: "+142%", label: "Engagement Growth" },
            { value: "3.1x", label: "Conversion Rate" },
            { value: "24/7", label: "Automation" }
          ].map((item, i) => (
            <div key={i} className="p-6 rounded-xl bg-white/5 border border-white/10">
              <h3 className="text-3xl font-bold text-primary">{item.value}</h3>
              <p className="text-sm text-white/60">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 💬 TESTIMONIAL */}
      <section className="text-center max-w-3xl mx-auto mb-28 px-6">
        <p className="text-xl italic text-white/80 mb-4">
          “Our fashion brand scaled 3x online within 90 days using Synckraft.”
        </p>
        <p className="text-sm text-white/50">— Luxury Fashion Label</p>
      </section>

      {/* 🚀 CTA */}
      <section className="text-center pb-32 px-6">
        <div className="bg-gradient-to-r from-primary/20 to-tertiary/20 p-12 rounded-3xl border border-white/10">
          <h2 className="text-4xl font-black mb-6">
            Ready to Dominate Fashion Digital?
          </h2>

          <button 
            onClick={() => setShowPopup(true)}
            className="px-10 py-5 bg-primary rounded-xl font-bold text-lg hover:scale-105 transition"
          >
            Book Strategy Call
          </button>
        </div>
      </section>

      {/* 📌 STICKY CTA */}
      <AnimatePresence>
        {showSticky && (
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
          >
            <div className="bg-black/80 backdrop-blur-xl px-6 py-4 rounded-2xl flex gap-4 border border-white/10">
              <span className="text-sm text-white/70">
                🔥 Limited onboarding slots
              </span>
              <button 
                onClick={() => setShowPopup(true)}
                className="bg-primary px-5 py-2 rounded-lg font-bold"
              >
                Book Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 🧲 POPUP */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center"
          >
            <div className="bg-[#0b0f1a] p-8 rounded-2xl max-w-md w-full border border-white/10">

              <h3 className="text-2xl font-bold mb-4">
                Scale Your Fashion Brand 🚀
              </h3>

              <input placeholder="Your Name" className="w-full p-3 mb-3 bg-black/40 rounded border border-white/10"/>
              <input placeholder="WhatsApp / Email" className="w-full p-3 mb-4 bg-black/40 rounded border border-white/10"/>

              <button className="w-full bg-primary py-3 rounded font-bold">
                Get Demo
              </button>

              <button onClick={() => setShowPopup(false)} className="mt-3 text-sm text-white/50">
                Close
              </button>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}