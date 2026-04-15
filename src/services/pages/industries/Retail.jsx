import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Retail() {

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

      {/* 🔴 FOMO */}
      <div className="text-center text-xs text-primary mb-4">
        🔴 34 stores exploring • 15 onboarded this week
      </div>

      {/* ================= HERO ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >

          <h1 className="text-5xl md:text-7xl font-extrabold">
            Retail <span className="text-primary">Growth OS</span>
          </h1>

          <p className="text-lg text-white/60 max-w-2xl">
            One system to manage your entire retail business — inventory, billing, customers, online orders, and analytics.
          </p>

          <div className="flex gap-4 pt-4">
            <button 
              onClick={() => setShowPopup(true)}
              className="px-8 py-4 bg-primary rounded-xl font-bold hover:scale-105 transition"
            >
              Book Demo
            </button>

            <button className="px-8 py-4 border border-white/20 rounded-xl">
              See System
            </button>
          </div>

        </motion.div>
      </section>

      {/* ================= CORE SYSTEM ================= */}
      <section className="max-w-7xl mx-auto px-6 pb-24">

        <h2 className="text-3xl font-bold mb-10 text-center">
          Everything Your Store Needs
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {[
            {
              title: "Billing & POS",
              desc: "Fast billing system with all payment options.",
              result: "Faster checkout"
            },
            {
              title: "Inventory Management",
              desc: "Track stock, alerts, and expiry automatically.",
              result: "No stock loss"
            },
            {
              title: "Online Orders",
              desc: "Sell online with full order tracking system.",
              result: "More sales channels"
            },
            {
              title: "Customer CRM",
              desc: "Track customers, visits, and preferences.",
              result: "More repeat buyers"
            },
            {
              title: "Offers & Loyalty",
              desc: "Run offers, coupons, and loyalty programs.",
              result: "Increase retention"
            },
            {
              title: "Reports & Analytics",
              desc: "See sales, profit, and product performance.",
              result: "Better decisions"
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10"
            >
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-white/60 mb-3">{item.desc}</p>
              <p className="text-xs text-primary font-bold">{item.result}</p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* 📊 TRUST */}
      <section className="text-center mb-24">
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto px-6">
          {[
            { value: "+170%", label: "Sales Growth" },
            { value: "2.2x", label: "Customer Retention" },
            { value: "85%", label: "Automation" }
          ].map((s, i) => (
            <div key={i} className="p-6 bg-white/5 rounded-xl border border-white/10">
              <h3 className="text-3xl font-bold text-primary">{s.value}</h3>
              <p className="text-sm text-white/60">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 💬 TESTIMONIAL */}
      <section className="text-center max-w-3xl mx-auto mb-24 px-6">
        <p className="text-xl italic text-white/80 mb-4">
          “Our retail store operations became smooth and our sales increased within weeks.”
        </p>
        <p className="text-sm text-white/50">— Supermarket Owner</p>
      </section>

      {/* 🚀 CTA */}
      <section className="text-center pb-32 px-6">
        <div className="max-w-4xl mx-auto p-12 rounded-3xl bg-white/5 border border-white/10">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Scale Your Store?
          </h2>

          <button 
            onClick={() => setShowPopup(true)}
            className="px-10 py-5 bg-primary rounded-xl font-bold text-lg"
          >
            Book Strategy Call
          </button>
        </div>
      </section>

      {/* 📌 STICKY CTA */}
      <AnimatePresence>
        {showSticky && (
          <motion.div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
            <div className="bg-black/80 px-6 py-4 rounded-2xl flex gap-4 border border-white/10">
              <span className="text-sm text-white/70">
                🔥 Limited onboarding slots
              </span>
              <button onClick={() => setShowPopup(true)} className="bg-primary px-5 py-2 rounded-lg font-bold">
                Book Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 🧲 POPUP */}
      <AnimatePresence>
        {showPopup && (
          <motion.div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center">
            <div className="bg-[#0b0f1a] p-8 rounded-2xl max-w-md w-full border border-white/10">
              <h3 className="text-2xl font-bold mb-4">
                Grow Your Retail Business 🚀
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