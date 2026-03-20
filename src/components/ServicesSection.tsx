import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Building2, Landmark, Wrench, ArrowRight } from "lucide-react";
import heroResidential from "@/assets/hero-residential.jpg";
import heroCommercial from "@/assets/hero-commercial.jpg";
import heroInfrastructure from "@/assets/hero-infrastructure.jpg";
import heroRenovation from "@/assets/hero-renovation.jpg";

const services = [
  {
    id: "residential",
    icon: Home,
    title: "Residential Construction",
    description: "From dream homes to apartment complexes, we build residential spaces that combine comfort, durability, and modern design to create lasting living environments.",
    image: heroResidential,
    features: ["Custom Home Design", "Apartment Complexes", "Villa Projects", "Gated Communities"],
    link: "/services/residential",
  },
  {
    id: "commercial",
    icon: Building2,
    title: "Commercial Construction",
    description: "Constructing commercial spaces that drive business growth — from office buildings to retail complexes, built to the highest standards of quality and compliance.",
    image: heroCommercial,
    features: ["Office Buildings", "Retail Complexes", "Warehouses", "Industrial Facilities"],
    link: "/services/commercial",
  },
  {
    id: "infrastructure",
    icon: Landmark,
    title: "Infrastructure Development",
    description: "Large-scale infrastructure projects including roads, bridges, and public facilities that form the backbone of modern communities.",
    image: heroInfrastructure,
    features: ["Road Construction", "Bridges & Flyovers", "Public Facilities", "Utility Systems"],
    link: "/services/infrastructure",
  },
  {
    id: "renovation",
    icon: Wrench,
    title: "Renovation & Remodeling",
    description: "Transform existing spaces with expert renovation services. We breathe new life into properties while preserving their structural integrity.",
    image: heroRenovation,
    features: ["Interior Renovation", "Structural Upgrades", "Space Optimization", "Modern Retrofitting"],
    link: "/services/renovation",
  },
];

const ServicesSection = () => {
  const [active, setActive] = useState(0);
  const current = services[active];

  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="text-gold font-medium tracking-[0.2em] uppercase text-sm">What We Do</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-2">Our Core Services</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
          {services.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setActive(i)}
              className={`flex flex-col items-center gap-3 p-6 rounded-sm transition-all duration-300 ${
                i === active
                  ? "bg-dark text-primary-foreground shadow-lg"
                  : "bg-background text-foreground hover:bg-muted"
              }`}
            >
              <s.icon className={`w-8 h-8 ${i === active ? "text-gold" : "text-muted-foreground"}`} />
              <span className="font-medium text-sm text-center">{s.title}</span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-2 gap-8 items-center"
          >
            <div className="relative rounded-sm overflow-hidden aspect-video">
              <img src={current.image} alt={current.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent" />
            </div>
            <div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">{current.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">{current.description}</p>
              <ul className="grid grid-cols-2 gap-3 mb-8">
                {current.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                    <span className="w-2 h-2 rounded-full bg-gold flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to={current.link}
                className="inline-flex items-center gap-2 gold-gradient px-6 py-3 text-foreground font-semibold rounded-sm hover:opacity-90 transition-opacity"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ServicesSection;
