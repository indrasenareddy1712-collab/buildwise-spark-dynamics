import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ServicesOverview from "@/components/ServicesOverview";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Calculator, ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";

const Index = () => (
  <>
    <Helmet>
      <title>BUILDWISE INFRA | Built with Trust - Construction Company in Telangana</title>
      <meta name="description" content="BUILDWISE INFRA delivers quality residential, commercial, and infrastructure construction services across Telangana, India. Get a free quote today." />
      <link rel="canonical" href="https://buildwiseinfra.com" />
    </Helmet>
    <Header />
    <main>
      <HeroSection />
      <ServicesSection />

      {/* Free Estimate CTA Banner */}
      <section className="py-10 gold-gradient">
        <div className="container-custom px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-display text-2xl font-bold text-foreground">Get a Free Construction Estimate</h2>
            <p className="text-foreground/80 text-sm mt-1">Use our cost calculator or request a personalized quote from our experts.</p>
          </div>
          <div className="flex gap-4">
            <Link to="/cost-calculator" className="bg-dark text-primary-foreground px-6 py-3 rounded-sm font-semibold text-sm hover:bg-dark-surface transition-colors flex items-center gap-2">
              <Calculator className="w-4 h-4" /> Cost Calculator
            </Link>
            <Link to="/contact" className="bg-foreground text-background px-6 py-3 rounded-sm font-semibold text-sm hover:opacity-90 transition-opacity flex items-center gap-2">
              Get Quote <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <ProjectsSection />
      <WhyChooseUs />
      <ServicesOverview />
      <TestimonialsSection />
      <ContactCTA />
    </main>
    <Footer />
  </>
);

export default Index;
