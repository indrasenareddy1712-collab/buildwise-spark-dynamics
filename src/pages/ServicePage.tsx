import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroResidential from "@/assets/hero-residential.jpg";
import heroCommercial from "@/assets/hero-commercial.jpg";
import heroInfrastructure from "@/assets/hero-infrastructure.jpg";
import heroRenovation from "@/assets/hero-renovation.jpg";

const data: Record<string, { title: string; tagline: string; image: string; description: string; steps: string[]; gallery: string[] }> = {
  residential: {
    title: "Residential Construction",
    tagline: "Building homes that last generations",
    image: heroResidential,
    description: "From elegant villas to modern apartments, BUILDWISE INFRA creates residential spaces that combine comfort, functionality, and enduring quality. We work closely with homeowners to bring their dream living spaces to life, using premium materials and expert craftsmanship.",
    steps: ["Initial Consultation & Site Visit", "Architectural Design & Planning", "Permits & Approvals", "Foundation & Structural Work", "Interior & Exterior Finishing", "Quality Inspection & Handover"],
    gallery: [heroResidential, heroCommercial],
  },
  commercial: {
    title: "Commercial Construction",
    tagline: "Spaces that drive business growth",
    image: heroCommercial,
    description: "BUILDWISE INFRA designs and builds commercial spaces optimized for productivity and business success. From modern office complexes to retail spaces and warehouses, we deliver projects that meet stringent commercial standards and timelines.",
    steps: ["Business Requirement Analysis", "Commercial Design & Engineering", "Regulatory Compliance", "Construction & Project Management", "MEP Systems Installation", "Final Inspection & Occupancy"],
    gallery: [heroCommercial, heroInfrastructure],
  },
  infrastructure: {
    title: "Infrastructure Development",
    tagline: "Building the backbone of tomorrow",
    image: heroInfrastructure,
    description: "Our infrastructure division handles large-scale projects including roads, bridges, flyovers, and public utilities. With advanced engineering capabilities and experienced teams, we contribute to the growth and connectivity of communities across Telangana.",
    steps: ["Feasibility Study & Survey", "Engineering Design", "Government Approvals", "Heavy Construction Phase", "Quality Assurance Testing", "Commissioning & Handover"],
    gallery: [heroInfrastructure, heroResidential],
  },
  renovation: {
    title: "Renovation & Remodeling",
    tagline: "Transforming spaces, preserving integrity",
    image: heroRenovation,
    description: "Breathe new life into existing properties with BUILDWISE INFRA's renovation services. Whether it's a complete interior overhaul, structural upgrades, or modern retrofitting, we transform spaces while maintaining their structural integrity.",
    steps: ["Property Assessment", "Design & Planning", "Structural Analysis", "Demolition & Prep Work", "Renovation Execution", "Final Touches & Handover"],
    gallery: [heroRenovation, heroCommercial],
  },
};

const ServicePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = data[slug || "residential"];

  if (!service) return <div className="min-h-screen flex items-center justify-center text-foreground">Service not found</div>;

  return (
    <>
      <Header />
      <main>
        <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
          <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 dark-overlay" />
          <div className="relative z-10 h-full flex flex-col justify-end container-custom px-4 sm:px-6 lg:px-8 pb-16">
            <nav className="text-primary-foreground/50 text-sm mb-4">
              <Link to="/" className="hover:text-gold transition-colors">Home</Link> / <Link to="/services/residential" className="hover:text-gold transition-colors">Services</Link> / <span className="text-primary-foreground">{service.title}</span>
            </nav>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground">{service.title}</h1>
            <p className="text-gold text-lg mt-2">{service.tagline}</p>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="container-custom max-w-4xl">
            <p className="text-muted-foreground text-lg leading-relaxed mb-12">{service.description}</p>
            <h2 className="font-display text-2xl font-bold text-foreground mb-8">Our Process</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {service.steps.map((step, i) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4 bg-secondary p-6 rounded-sm"
                >
                  <span className="text-gold font-display font-bold text-2xl">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-foreground font-medium">{step}</span>
                </motion.div>
              ))}
            </div>
            <h2 className="font-display text-2xl font-bold text-foreground mb-8">Project Gallery</h2>
            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              {service.gallery.map((img, i) => (
                <img key={i} src={img} alt={`${service.title} project`} className="w-full aspect-video object-cover rounded-sm" />
              ))}
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 gold-gradient px-8 py-4 text-foreground font-semibold rounded-sm hover:opacity-90 transition-opacity"
            >
              Request a Quote <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        <ContactCTA />
      </main>
      <Footer />
    </>
  );
};

export default ServicePage;
