import { motion } from "framer-motion";
import { Compass, HardHat, ClipboardCheck, MessageSquare } from "lucide-react";

const services = [
  { icon: Compass, title: "Planning & Design", description: "Comprehensive architectural planning and design services tailored to your vision and budget." },
  { icon: HardHat, title: "Construction Execution", description: "Expert construction management from foundation to finishing with the highest quality standards." },
  { icon: ClipboardCheck, title: "Project Management", description: "End-to-end project management ensuring timely delivery and cost efficiency." },
  { icon: MessageSquare, title: "Consultation", description: "Professional consultation for your construction needs — from feasibility to final handover." },
];

const ServicesOverview = () => (
  <section className="section-padding bg-secondary">
    <div className="container-custom">
      <div className="text-center mb-12">
        <span className="text-gold font-medium tracking-[0.2em] uppercase text-sm">How We Work</span>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-2">Services Overview</h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-background p-8 rounded-sm hover:shadow-lg transition-shadow group"
          >
            <s.icon className="w-10 h-10 text-gold mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesOverview;
