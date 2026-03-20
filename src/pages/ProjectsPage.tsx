import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroResidential from "@/assets/hero-residential.jpg";
import heroCommercial from "@/assets/hero-commercial.jpg";
import heroInfrastructure from "@/assets/hero-infrastructure.jpg";
import heroRenovation from "@/assets/hero-renovation.jpg";

const projects = [
  { title: "Skyline Residency", category: "Residential", location: "Hyderabad", image: heroResidential, description: "A premium 120-unit residential complex with modern amenities." },
  { title: "TechPark Tower", category: "Commercial", location: "Gachibowli", image: heroCommercial, description: "A state-of-the-art IT park spanning 200,000 sq ft." },
  { title: "Outer Ring Flyover", category: "Infrastructure", location: "Secunderabad", image: heroInfrastructure, description: "A 4.5 km elevated corridor reducing commute times." },
  { title: "Heritage Villa Restoration", category: "Renovation", location: "Banjara Hills", image: heroRenovation, description: "Complete restoration of a heritage property with modern interiors." },
  { title: "Green Valley Homes", category: "Residential", location: "Kompally", image: heroResidential, description: "Eco-friendly gated community with 80 independent villas." },
  { title: "Metro Mall Complex", category: "Commercial", location: "Ameerpet", image: heroCommercial, description: "Multi-level retail and entertainment complex." },
];

const ProjectsPage = () => (
  <>
    <Header />
    <main>
      <section className="pt-32 pb-16 bg-dark text-primary-foreground">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <nav className="text-primary-foreground/50 text-sm mb-4"><Link to="/" className="hover:text-gold transition-colors">Home</Link> / <span className="text-primary-foreground">Projects</span></nav>
          <h1 className="font-display text-4xl md:text-6xl font-bold">Our <span className="text-gold-gradient">Projects</span></h1>
          <p className="text-primary-foreground/70 max-w-xl mt-4 text-lg">Explore our portfolio of completed and ongoing construction projects across Telangana.</p>
        </div>
      </section>
      <section className="section-padding bg-background">
        <div className="container-custom grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group rounded-sm overflow-hidden bg-secondary"
            >
              <div className="aspect-video overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <span className="text-gold text-xs font-medium tracking-wider uppercase">{p.category}</span>
                <h3 className="font-display text-xl font-semibold text-foreground mt-1">{p.title}</h3>
                <p className="text-muted-foreground text-sm mt-2">{p.description}</p>
                <p className="text-muted-foreground text-xs mt-3">📍 {p.location}, Telangana</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      <ContactCTA />
    </main>
    <Footer />
  </>
);

export default ProjectsPage;
