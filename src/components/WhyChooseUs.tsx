import { motion } from "framer-motion";
import { Shield, Award, Clock, Users } from "lucide-react";

const reasons = [
  { icon: Shield, title: "Trusted Construction Practices", description: "We follow industry-leading construction standards and safety protocols on every project." },
  { icon: Award, title: "High-Quality Materials", description: "Only the finest materials sourced from certified suppliers for lasting structures." },
  { icon: Clock, title: "On-Time Project Delivery", description: "We honor deadlines with meticulous project management and execution." },
  { icon: Users, title: "Experienced Team", description: "Skilled engineers, architects, and craftsmen with decades of combined experience." },
];

const stats = [
  { value: "250+", label: "Projects Completed" },
  { value: "15+", label: "Years Experience" },
  { value: "100+", label: "Happy Clients" },
  { value: "50+", label: "Expert Team" },
];

const WhyChooseUs = () => (
  <section className="section-padding bg-dark text-primary-foreground">
    <div className="container-custom">
      <div className="text-center mb-16">
        <span className="text-gold font-medium tracking-[0.2em] uppercase text-sm">Why Us</span>
        <h2 className="font-display text-3xl md:text-5xl font-bold mt-2">Why Choose BUILDWISE INFRA</h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {reasons.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center"
          >
            <div className="w-16 h-16 mx-auto mb-4 gold-gradient rounded-sm flex items-center justify-center">
              <r.icon className="w-8 h-8 text-foreground" />
            </div>
            <h3 className="font-display text-lg font-semibold mb-2">{r.title}</h3>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">{r.description}</p>
          </motion.div>
        ))}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="text-gold-gradient font-display text-4xl md:text-5xl font-bold">{s.value}</div>
            <div className="text-primary-foreground/50 text-sm mt-2">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
