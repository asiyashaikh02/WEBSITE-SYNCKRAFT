import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Supermarket() {
  useEffect(() => window.scrollTo(0, 0), []);
  return (
    <main className="pt-20 md:pt-24 overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <section className="pt-24 px-8 pb-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              Supermarket Operating System
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-tertiary">Optimized</span> for Efficiency
            </h1>
            <p className="text-lg md:text-xl opacity-70 leading-relaxed">
              Eliminate waste and maximize inventory efficiency at scale with intelligent demand forecasting and automated replenishment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-primary to-tertiary px-8 py-3 rounded-xl font-bold text-white"
              >
                Book Demo
              </motion.button>
              <Link to="/contact-sales">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-primary/50 text-primary px-8 py-3 rounded-xl font-bold hover:bg-primary/10 transition-colors"
                >
                  Contact Sales
                </motion.button>
              </Link>
            </div>
          </motion.div>
          <motion.div className="relative">
            <motion.img
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              src="https://images.unsplash.com/photo-1599972291473-c90be2b54a5f?w=800&q=80"
              className="w-full h-80 md:h-96 object-cover rounded-3xl shadow-2xl"
              loading="lazy"
            />
          </motion.div>
        </div>
      </section>
    </main>
  );
}
