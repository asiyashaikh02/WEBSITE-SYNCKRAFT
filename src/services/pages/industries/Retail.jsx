import React, { useEffect } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { Link } from "react-router-dom";

const animationVariants = {
  fadeInUp: { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } },
  fadeInScale: { hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } } },
  staggerContainer: { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } } },
};

export default function Retail() {
  useEffect(() => window.scrollTo(0, 0), []);
  return (
    <main className="pt-20 md:pt-24 overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <section className="max-w-screen-2xl mx-auto px-4 md:px-8 py-16 md:py-32 mb-20 md:mb-32">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
          <motion.div initial="hidden" animate="visible" variants={animationVariants.fadeInUp} className="space-y-4 md:space-y-8">
            <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-primary/10 border border-primary/20"><span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>Retail Operating System</div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold"><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-tertiary">Reimagined</span></h1>
            <p className="text-lg md:text-xl opacity-70">Transform your retail operations with intelligent automation.</p>
            <div className="flex gap-4"><motion.button whileHover={{ scale: 1.05 }} className="bg-gradient-to-r from-primary to-tertiary px-8 py-3 rounded-xl font-bold text-white">Book Demo</motion.button></div>
          </motion.div>
          <motion.div initial="hidden" animate="visible" variants={animationVariants.fadeInScale} className="relative h-64">
            <motion.img animate={{ y: [0, -20, 0] }} src="https://images.unsplash.com/photo-1554224311-beee415c15ae?w=800&q=80" className="w-full h-full object-cover rounded-3xl"/>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
