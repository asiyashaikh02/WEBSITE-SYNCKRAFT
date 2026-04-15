// import React, { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// export default function IndustryTemplate({
//   badge,
//   title,
//   subtitle,
//   description,
//   features = [],
//   metrics = [],
//   testimonial,
//   cta = {},
//   liveStats,
// }) {
//   const [showPopup, setShowPopup] = useState(false);
//   const [showSticky, setShowSticky] = useState(false);
//   const [form, setForm] = useState({ name: "", contact: "" });
//   const [loading, setLoading] = useState(false);

//   // ================= EFFECTS =================
//   useEffect(() => {
//     const handleScroll = () => setShowSticky(window.scrollY > 300);
//     window.addEventListener("scroll", handleScroll);

//     const timer = setTimeout(() => setShowPopup(true), 7000);

//     return () => clearTimeout(timer);
//   }, []);

//   // ================= ANIMATIONS =================
//   const fadeUp = {
//     hidden: { opacity: 0, y: 40 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6, ease: "easeOut" },
//     },
//   };

//   const stagger = {
//     visible: {
//       transition: { staggerChildren: 0.1 },
//     },
//   };

//   // ================= BACKEND HANDLER =================
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       // 🔌 HUBSPOT / API READY
//       await fetch("/api/lead", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(form),
//       });

//       alert("Request received 🚀");
//       setShowPopup(false);
//       setForm({ name: "", contact: "" });
//     } catch (err) {
//       console.error(err);
//       alert("Something went wrong");
//     }

//     setLoading(false);
//   };

//   return (
//     <main className="relative pt-24 overflow-hidden text-white">

//       {/* 🌌 BACKGROUND GRADIENT (ULTRA PREMIUM) */}
//       <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_30%,rgba(0,200,255,0.15),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(140,100,255,0.15),transparent_40%)]" />

//       {/* 🔴 FOMO */}
//       {liveStats && (
//         <div className="text-center text-xs text-cyan-300 mb-4">
//           🔴 {liveStats.viewers} people viewing • {liveStats.bookings}
//         </div>
//       )}

//       {/* ================= HERO ================= */}
//       <motion.section
//         initial="hidden"
//         animate="visible"
//         variants={fadeUp}
//         className="max-w-7xl mx-auto px-6 py-20 text-center"
//       >
//         {badge && (
//           <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-white/10 bg-white/5 text-xs mb-6 backdrop-blur-xl">
//             <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
//             {badge}
//           </div>
//         )}

//         <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
//           {title}
//         </h1>

//         <p className="text-lg text-white/60 max-w-2xl mx-auto mb-10">
//           {description}
//         </p>

//         <div className="flex justify-center gap-4 flex-wrap">
//           <button
//             onClick={() => setShowPopup(true)}
//             className="px-8 py-4 rounded-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 hover:scale-105 transition"
//           >
//             {cta.primary || "Book Demo"}
//           </button>

//           <button className="px-8 py-4 border border-white/20 rounded-xl hover:bg-white/10 transition">
//             {cta.secondary || "Explore"}
//           </button>
//         </div>

//         {cta.note && (
//           <p className="text-xs text-white/40 mt-3">{cta.note}</p>
//         )}
//       </motion.section>

//       {/* ================= METRICS ================= */}
//       {metrics.length > 0 && (
//         <motion.section
//           variants={stagger}
//           initial="hidden"
//           animate="visible"
//           className="max-w-5xl mx-auto px-6 mb-24 grid md:grid-cols-3 gap-6 text-center"
//         >
//           {metrics.map((m, i) => (
//             <motion.div
//               key={i}
//               variants={fadeUp}
//               whileHover={{ scale: 1.05 }}
//               className="p-6 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10"
//             >
//               <h3 className="text-3xl font-bold text-cyan-300">{m.value}</h3>
//               <p className="text-sm text-white/60">{m.label}</p>
//             </motion.div>
//           ))}
//         </motion.section>
//       )}

//       {/* ================= FEATURES ================= */}
//       <section className="max-w-7xl mx-auto px-6 pb-24">
//         <h2 className="text-3xl font-bold text-center mb-10">
//           Everything You Need — In One System
//         </h2>

//         <div className="grid md:grid-cols-3 gap-6">
//           {features.map((f, i) => (
//             <motion.div
//               key={i}
//               whileHover={{ y: -10 }}
//               className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10"
//             >
//               <span className="material-symbols-outlined text-cyan-300 mb-3">
//                 {f.icon}
//               </span>
//               <h3 className="text-lg font-bold mb-2">{f.title}</h3>
//               <p className="text-sm text-white/60 mb-2">{f.description}</p>
//               {f.outcome && (
//                 <p className="text-xs text-cyan-300 font-bold">
//                   {f.outcome}
//                 </p>
//               )}
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* ================= TESTIMONIAL ================= */}
//       {testimonial && (
//         <section className="text-center max-w-3xl mx-auto mb-24 px-6">
//           <p className="text-xl italic text-white/80 mb-4">
//             “{testimonial.quote}”
//           </p>
//           <p className="text-sm text-white/50">
//             — {testimonial.author}
//           </p>
//         </section>
//       )}

//       {/* ================= CTA ================= */}
//       <section className="text-center pb-32 px-6">
//         <div className="max-w-4xl mx-auto p-12 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10">
//           <h2 className="text-4xl font-bold mb-6">
//             Ready to Get Started?
//           </h2>

//           <button
//             onClick={() => setShowPopup(true)}
//             className="px-10 py-5 bg-cyan-400 text-black rounded-xl font-bold text-lg hover:scale-105 transition"
//           >
//             {cta.primary || "Book Demo"}
//           </button>
//         </div>
//       </section>

//       {/* ================= STICKY CTA ================= */}
//       <AnimatePresence>
//         {showSticky && (
//           <motion.div
//             initial={{ y: 100 }}
//             animate={{ y: 0 }}
//             exit={{ y: 100 }}
//             className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
//           >
//             <div className="bg-black/70 backdrop-blur-xl px-6 py-4 rounded-2xl flex gap-4 border border-white/10">
//               <span className="text-sm text-white/70">
//                 🔥 Limited slots available
//               </span>
//               <button
//                 onClick={() => setShowPopup(true)}
//                 className="bg-cyan-400 text-black px-5 py-2 rounded-lg font-bold"
//               >
//                 Book Now
//               </button>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* ================= POPUP ================= */}
//       <AnimatePresence>
//         {showPopup && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center"
//           >
//             <motion.div
//               initial={{ scale: 0.8 }}
//               animate={{ scale: 1 }}
//               className="bg-[#0b0f1a] p-8 rounded-2xl max-w-md w-full border border-white/10"
//             >
//               <h3 className="text-2xl font-bold mb-4">
//                 Get Started 🚀
//               </h3>

//               <form onSubmit={handleSubmit} className="space-y-4">
//                 <input
//                   required
//                   placeholder="Your Name"
//                   value={form.name}
//                   onChange={(e) =>
//                     setForm({ ...form, name: e.target.value })
//                   }
//                   className="w-full p-3 bg-black/40 rounded border border-white/10"
//                 />

//                 <input
//                   required
//                   placeholder="WhatsApp / Email"
//                   value={form.contact}
//                   onChange={(e) =>
//                     setForm({ ...form, contact: e.target.value })
//                   }
//                   className="w-full p-3 bg-black/40 rounded border border-white/10"
//                 />

//                 <button className="w-full bg-cyan-400 text-black py-3 rounded font-bold">
//                   {loading ? "Submitting..." : "Submit"}
//                 </button>
//               </form>

//               <button
//                 onClick={() => setShowPopup(false)}
//                 className="mt-4 text-sm text-white/50"
//               >
//                 Close
//               </button>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//     </main>
//   );
// }
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function IndustryTemplate({
  badge,
  title,
  description,
  features = [],
  metrics = [],
  testimonial,
  cta = {},
  liveStats,
}) {
  const [showPopup, setShowPopup] = useState(false);
  const [showSticky, setShowSticky] = useState(false);
  const [form, setForm] = useState({ name: "", contact: "" });
  const [loading, setLoading] = useState(false);

  // ================= EFFECTS =================
  useEffect(() => {
    const handleScroll = () => setShowSticky(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);

    const timer = setTimeout(() => setShowPopup(true), 7000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  // ================= HUBSPOT + N8N =================
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 🔥 1. SEND TO HUBSPOT
      const hubspotRes = await fetch(
        "https://api.hsforms.com/submissions/v3/integration/submit/245886634/abee8a62-74da-40b5-9e0f-64e240d62d2d",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fields: [
              { name: "firstname", value: form.name },
              { name: "phone", value: form.contact },
              { name: "company", value: `${title} Lead` },
              { name: "industry", value: title },
            ],
          }),
        }
      );

      if (!hubspotRes.ok) throw new Error("HubSpot failed");

      // 🔥 2. SEND TO N8N (WHATSAPP)
      await fetch("https://your-n8n-domain/webhook/hubspot-lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          phone: form.contact,
          industry: title,
        }),
      });

      // SUCCESS
      alert("Submitted 🚀 We’ll contact you shortly");
      setShowPopup(false);
      setForm({ name: "", contact: "" });

    } catch (err) {
      console.error(err);
      alert("Something went wrong ❌");
    }

    setLoading(false);
  };

  return (
    <main className="relative pt-24 overflow-hidden text-white">

      {/* 🌌 BACKGROUND */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_30%,rgba(0,200,255,0.15),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(140,100,255,0.15),transparent_40%)]" />

      {/* 🔴 FOMO */}
      {liveStats && (
        <div className="text-center text-xs text-cyan-300 mb-4">
          🔴 {liveStats.viewers} people viewing • {liveStats.bookings}
        </div>
      )}

      {/* HERO */}
      <section className="text-center py-20 px-6">
        {badge && (
          <div className="inline-block px-4 py-1 border border-white/10 rounded-full mb-6 text-xs">
            {badge}
          </div>
        )}

        <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
          {title}
        </h1>

        <p className="text-white/60 max-w-2xl mx-auto mb-10">
          {description}
        </p>

        <button
          onClick={() => setShowPopup(true)}
          className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl font-bold hover:scale-105 transition"
        >
          {cta.primary || "Book Demo"}
        </button>
      </section>

      {/* FEATURES */}
      <section className="max-w-7xl mx-auto px-6 pb-24 grid md:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -10 }}
            className="p-6 bg-white/5 border border-white/10 rounded-2xl"
          >
            <h3 className="font-bold mb-2">{f.title}</h3>
            <p className="text-sm text-white/60">{f.description}</p>
          </motion.div>
        ))}
      </section>

      {/* POPUP */}
      <AnimatePresence>
        {showPopup && (
          <motion.div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
            <motion.div className="bg-[#0b0f1a] p-8 rounded-2xl w-full max-w-md">

              <h3 className="text-xl font-bold mb-4">Get Started 🚀</h3>

              <form onSubmit={handleSubmit} className="space-y-4">

                <input
                  required
                  placeholder="Your Name"
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                  className="w-full p-3 bg-black/40 border border-white/10 rounded"
                />

                <input
                  required
                  placeholder="WhatsApp Number"
                  value={form.contact}
                  onChange={(e) =>
                    setForm({ ...form, contact: e.target.value })
                  }
                  className="w-full p-3 bg-black/40 border border-white/10 rounded"
                />

                <button className="w-full bg-cyan-400 text-black py-3 rounded font-bold">
                  {loading ? "Submitting..." : "Submit"}
                </button>

              </form>

              <button
                onClick={() => setShowPopup(false)}
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