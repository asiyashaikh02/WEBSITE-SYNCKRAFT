import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function IndustryPage() {

  // ================= STATE =================
  const [showSticky, setShowSticky] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [exitPopup, setExitPopup] = useState(false);
  const [form, setForm] = useState({ name: "", contact: "" });

  // ================= EFFECTS =================
  useEffect(() => {
    window.scrollTo(0, 0);

    const handleScroll = () => setShowSticky(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);

    // timed popup
    const timer = setTimeout(() => setShowPopup(true), 7000);

    // exit intent
    const exitHandler = (e) => {
      if (e.clientY < 10) setExitPopup(true);
    };
    window.addEventListener("mouseout", exitHandler);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("mouseout", exitHandler);
    };
  }, []);

  // ================= DATA =================
  const data = {
    title: "Real Estate Engineered.",
    subtitle:
      "AI-powered systems to capture, nurture & convert high-intent buyers automatically.",
    services: [
      "Lead Generation",
      "CRM Automation",
      "Visual Sales System",
      "AI Follow-ups",
    ],
  };

  // ================= HANDLERS =================
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Lead:", form);

    // 🔌 HUBSPOT READY (future)
    // fetch("hubspot api", { method: "POST", body: JSON.stringify(form) })

    alert("Demo request received!");
    setShowPopup(false);
  };

  // ================= UI =================
  return (
    <main className="bg-[#05070d] text-white overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="max-w-7xl mx-auto px-6 pt-28 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <div className="text-sm text-blue-400 font-semibold">
            🔴 18 people viewing right now
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-tight">
            {data.title}
          </h1>

          <p className="text-lg text-white/60 max-w-xl">
            {data.subtitle}
          </p>

          <div className="flex gap-4 pt-4">
            <button
              onClick={() => setShowPopup(true)}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 font-bold hover:scale-105 transition"
            >
              Book Demo
            </button>

            <button className="px-8 py-4 rounded-xl border border-white/20 hover:bg-white/10 transition">
              View System
            </button>
          </div>
        </motion.div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="max-w-7xl mx-auto px-6 pb-24 grid md:grid-cols-4 gap-6">
        {data.services.map((s, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -10 }}
            className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl"
          >
            <h3 className="text-xl font-bold">{s}</h3>
            <p className="text-sm text-white/60 mt-2">
              Premium system designed for high conversion output.
            </p>
          </motion.div>
        ))}
      </section>

      {/* ================= TESTIMONIAL ================= */}
      <section className="text-center max-w-3xl mx-auto pb-28 px-6">
        <p className="text-xl italic text-white/80 mb-4">
          “We increased conversions by 3x within 60 days.”
        </p>
        <p className="text-sm text-white/50">— Real Estate Developer</p>
      </section>

      {/* ================= CTA ================= */}
      <section className="text-center pb-32 px-6">
        <div className="bg-gradient-to-r from-blue-500/20 to-indigo-500/20 p-12 rounded-3xl border border-white/10">
          <h2 className="text-4xl font-black mb-6">
            Ready to Scale?
          </h2>
          <button
            onClick={() => setShowPopup(true)}
            className="px-10 py-5 rounded-xl bg-blue-500 font-bold text-lg hover:scale-105 transition"
          >
            Book Strategy Call
          </button>
        </div>
      </section>

      {/* ================= STICKY CTA ================= */}
      <AnimatePresence>
        {showSticky && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
          >
            <div className="bg-black/80 backdrop-blur-xl px-6 py-4 rounded-2xl border border-white/10 flex items-center gap-4 shadow-xl">
              <span className="text-sm text-white/70">
                🔥 Limited slots available
              </span>
              <button
                onClick={() => setShowPopup(true)}
                className="bg-blue-500 px-5 py-2 rounded-lg font-bold"
              >
                Book Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= POPUP ================= */}
      <AnimatePresence>
        {(showPopup || exitPopup) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="bg-[#0b0f1a] p-8 rounded-2xl w-full max-w-md border border-white/10"
            >
              <h3 className="text-2xl font-bold mb-4">
                Get High-Intent Leads 🚀
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  required
                  placeholder="Your Name"
                  className="w-full p-3 rounded bg-black/40 border border-white/10"
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                />

                <input
                  required
                  placeholder="WhatsApp / Email"
                  className="w-full p-3 rounded bg-black/40 border border-white/10"
                  onChange={(e) =>
                    setForm({ ...form, contact: e.target.value })
                  }
                />

                <button className="w-full bg-blue-500 py-3 rounded font-bold">
                  Get Demo
                </button>
              </form>

              <button
                onClick={() => {
                  setShowPopup(false);
                  setExitPopup(false);
                }}
                className="mt-4 text-sm text-white/50"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}