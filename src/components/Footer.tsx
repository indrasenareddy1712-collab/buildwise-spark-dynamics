import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram } from "lucide-react";

const Footer = () => (
  <footer className="bg-dark text-primary-foreground/70">
    <div className="container-custom section-padding">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 gold-gradient rounded-sm flex items-center justify-center font-display font-bold text-foreground text-lg">B</div>
            <div>
              <span className="font-display font-bold text-primary-foreground text-lg">BUILDWISE</span>
              <span className="block text-gold text-[10px] tracking-[0.3em] uppercase -mt-1">INFRA</span>
            </div>
          </div>
          <p className="text-sm leading-relaxed">Delivering quality construction with precision, reliability, and excellence across Telangana, India.</p>
        </div>
        <div>
          <h4 className="font-display text-primary-foreground font-semibold mb-4">Services</h4>
          <div className="flex flex-col gap-2 text-sm">
            <Link to="/services/residential" className="hover:text-gold transition-colors">Residential Construction</Link>
            <Link to="/services/commercial" className="hover:text-gold transition-colors">Commercial Construction</Link>
            <Link to="/services/infrastructure" className="hover:text-gold transition-colors">Infrastructure Development</Link>
            <Link to="/services/renovation" className="hover:text-gold transition-colors">Renovation & Remodeling</Link>
          </div>
        </div>
        <div>
          <h4 className="font-display text-primary-foreground font-semibold mb-4">Quick Links</h4>
          <div className="flex flex-col gap-2 text-sm">
            <Link to="/about" className="hover:text-gold transition-colors">About Us</Link>
            <Link to="/projects" className="hover:text-gold transition-colors">Projects</Link>
            <Link to="/cost-calculator" className="hover:text-gold transition-colors">Cost Calculator</Link>
            <Link to="/blog" className="hover:text-gold transition-colors">Blog</Link>
            <Link to="/contact" className="hover:text-gold transition-colors">Contact</Link>
          </div>
        </div>
        <div>
          <h4 className="font-display text-primary-foreground font-semibold mb-4">Contact</h4>
          <div className="flex flex-col gap-3 text-sm">
            <a href="tel:9346479152" className="flex items-center gap-2 hover:text-gold transition-colors"><Phone className="w-4 h-4 text-gold" />9346479152</a>
            <a href="mailto:buildwiseinfra@yahoo.com" className="flex items-center gap-2 hover:text-gold transition-colors"><Mail className="w-4 h-4 text-gold" />buildwiseinfra@yahoo.com</a>
            <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-gold" />Telangana, India</span>
            <a href="https://www.instagram.com/buildwisec?igsh=MW43Z2pzMHJxazdzNg==" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-gold transition-colors"><Instagram className="w-4 h-4 text-gold" />Follow us on Instagram</a>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center text-sm">
        © {new Date().getFullYear()} BUILDWISE INFRA. All rights reserved. Built with Trust.
      </div>
    </div>
  </footer>
);

export default Footer;
