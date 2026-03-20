import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroResidential from "@/assets/hero-residential.jpg";
import heroCommercial from "@/assets/hero-commercial.jpg";
import heroInfrastructure from "@/assets/hero-infrastructure.jpg";
import heroRenovation from "@/assets/hero-renovation.jpg";

const projects = [
  { title: "Skyline Residency", category: "Residential", location: "Hyderabad, Telangana", image: heroResidential },
  { title: "TechPark Tower", category: "Commercial", location: "Gachibowli, Hyderabad", image: heroCommercial },
  { title: "Outer Ring Flyover", category: "Infrastructure", location: "Secunderabad, Telangana", image: heroInfrastructure },
  { title: "Heritage Villa Restoration", category: "Renovation", location: "Banjara Hills, Hyderabad", image: heroRenovation },
];

const ProjectsSection = () => (
  <section className="section-padding bg-background">
    <div className="container-custom">
      <div className="text-center mb-12">
        <span className="text-gold font-medium tracking-[0.2em] uppercase text-sm">Our Work</span>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-2">Featured Projects</h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative rounded-sm overflow-hidden aspect-[3/4] cursor-pointer"
          >
            <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span className="text-gold text-xs font-medium tracking-wider uppercase">{p.category}</span>
              <h3 className="font-display text-xl font-bold text-primary-foreground mt-1">{p.title}</h3>
              <p className="text-primary-foreground/60 text-sm mt-1">{p.location}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="text-center mt-10">
        <Link to="/projects" className="inline-flex items-center gap-2 border border-foreground/20 px-8 py-3 text-foreground font-semibold rounded-sm hover:border-gold hover:text-gold transition-colors">
          View All Projects
        </Link>
      </div>
    </div>
  </section>
);

export default ProjectsSection;
