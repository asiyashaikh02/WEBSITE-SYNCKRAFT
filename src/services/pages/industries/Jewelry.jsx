import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Jewelry() {

  const [showPopup, setShowPopup] = useState(false);
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleScroll = () => setShowSticky(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);

    const timer = setTimeout(() => setShowPopup(true), 8000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="pt-24">

      {/* 🔴 FOMO */}
      <div className="text-center text-xs text-primary mb-4">
        🔴 12 premium buyers exploring • 4 consultations booked today
      </div>

      {/* ================= HERO ================= */}
      <section className="px-8 py-20">

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl"
        >

          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
            Jewellery <span className="text-primary">Experience System</span>
          </h1>

          <p className="text-xl text-white/60 mb-10 max-w-2xl">
            Create a premium digital experience for your jewellery brand with 3D visualization, virtual try-on, and high-conversion sales systems.
          </p>

          <div className="flex gap-4">
            <button 
              onClick={() => setShowPopup(true)}
              className="px-8 py-4 bg-primary rounded-xl font-bold hover:scale-105 transition"
            >
              Book Jewellery Demo
            </button>

            <button className="px-8 py-4 border border-white/20 rounded-xl">
              View Collection Flow
            </button>
          </div>

        </motion.div>

      </section>

      {/* 📊 TRUST METRICS */}
      <section className="px-6 mb-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 text-center">
          {[
            { value: "+180%", label: "Conversion Growth" },
            { value: "2.5x", label: "Customer Engagement" },
            { value: "70%", label: "Faster Sales Cycle" }
          ].map((item, i) => (
            <div key={i} className="p-6 rounded-xl bg-white/5 border border-white/10">
              <h3 className="text-3xl font-bold text-primary">{item.value}</h3>
              <p className="text-white/60 text-sm">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 💬 TESTIMONIAL */}
      <section className="text-center max-w-3xl mx-auto mb-24 px-6">
        <p className="text-xl italic text-white/80 mb-4">
          “Our jewellery sales increased dramatically after moving to a digital experience system.”
        </p>
        <p className="text-sm text-white/50">— Luxury Jewellery Brand</p>
      </section>

      {/* 🚀 CTA */}
      <section className="px-6 pb-32 text-center">
        <div className="max-w-4xl mx-auto p-12 rounded-3xl bg-white/5 border border-white/10">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Elevate Your Jewellery Brand?
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
                🔥 Limited premium onboarding
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
                Build Your Jewellery System 💎
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