import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroResidential from "@/assets/hero-residential.jpg";
import heroCommercial from "@/assets/hero-commercial.jpg";
import heroInfrastructure from "@/assets/hero-infrastructure.jpg";
import heroRenovation from "@/assets/hero-renovation.jpg";

const slides = [
  { image: heroResidential, label: "Residential Projects" },
  { image: heroCommercial, label: "Commercial Buildings" },
  { image: heroInfrastructure, label: "Infrastructure Projects" },
  { image: heroRenovation, label: "Renovation & Remodeling" },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % slides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <img src={slides[current].image} alt={slides[current].label} loading="eager" className="w-full h-full object-cover" />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 dark-overlay" />
      <div className="relative z-10 h-full flex flex-col justify-center container-custom px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="inline-block text-gold font-medium tracking-[0.3em] uppercase text-sm mb-4">
            BUILDWISE INFRA
          </span>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-primary-foreground leading-tight mb-6">
            Built with <span className="text-gold-gradient">Trust</span>
          </h1>
          <p className="text-primary-foreground/80 text-lg md:text-xl max-w-xl mb-8 font-body">
            Delivering quality construction with precision, reliability, and excellence across Telangana.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="gold-gradient px-8 py-4 text-foreground font-semibold rounded-sm hover:opacity-90 transition-opacity flex items-center gap-2"
            >
              Get a Quote <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="border border-primary-foreground/30 px-8 py-4 text-primary-foreground font-semibold rounded-sm hover:border-gold hover:text-gold transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
          {slides.map((s, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1 rounded-full transition-all duration-300 ${
                i === current ? "w-12 bg-gold" : "w-6 bg-primary-foreground/30"
              }`}
              aria-label={s.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
