import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for reaching out! We'll get back to you within 24 hours.");
    setForm({ name: "", email: "", phone: "", service: "", message: "" });
  };

  return (
    <>
      <Header />
      <main>
        <section className="pt-32 pb-16 bg-dark text-primary-foreground">
          <div className="container-custom px-4 sm:px-6 lg:px-8">
            <nav className="text-primary-foreground/50 text-sm mb-4"><Link to="/" className="hover:text-gold transition-colors">Home</Link> / <span className="text-primary-foreground">Contact</span></nav>
            <h1 className="font-display text-4xl md:text-6xl font-bold">Get in <span className="text-gold-gradient">Touch</span></h1>
            <p className="text-primary-foreground/70 max-w-xl mt-4 text-lg">Ready to start your project? Contact us for a free consultation.</p>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="container-custom grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">Contact Information</h2>
              <div className="space-y-6">
                <a href="tel:9346479152" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 gold-gradient rounded-sm flex items-center justify-center"><Phone className="w-5 h-5 text-foreground" /></div>
                  <div>
                    <div className="text-muted-foreground text-sm">Phone</div>
                    <div className="text-foreground font-medium group-hover:text-gold transition-colors">9346479152</div>
                  </div>
                </a>
                <a href="mailto:buildwiseinfra@yahoo.com" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 gold-gradient rounded-sm flex items-center justify-center"><Mail className="w-5 h-5 text-foreground" /></div>
                  <div>
                    <div className="text-muted-foreground text-sm">Email</div>
                    <div className="text-foreground font-medium group-hover:text-gold transition-colors">buildwiseinfra@yahoo.com</div>
                  </div>
                </a>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 gold-gradient rounded-sm flex items-center justify-center"><MapPin className="w-5 h-5 text-foreground" /></div>
                  <div>
                    <div className="text-muted-foreground text-sm">Location</div>
                    <div className="text-foreground font-medium">Telangana, India</div>
                  </div>
                </div>
              </div>
              <div className="mt-8 rounded-sm overflow-hidden aspect-video">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.2!2d78.4867!3d17.3850!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDIzJzA2LjAiTiA3OMKwMjknMTIuMSJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="BUILDWISE INFRA Location"
                />
              </div>
            </div>
            <form onSubmit={handleSubmit} className="bg-secondary p-8 rounded-sm space-y-4">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Request a Quote</h2>
              <input type="text" placeholder="Full Name" required maxLength={100} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full border border-border rounded-sm px-4 py-3 bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors" />
              <input type="email" placeholder="Email Address" required maxLength={255} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full border border-border rounded-sm px-4 py-3 bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors" />
              <input type="tel" placeholder="Phone Number" maxLength={15} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full border border-border rounded-sm px-4 py-3 bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors" />
              <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}
                className="w-full border border-border rounded-sm px-4 py-3 bg-background text-foreground focus:outline-none focus:border-gold transition-colors">
                <option value="">Select Service</option>
                <option>Residential Construction</option>
                <option>Commercial Construction</option>
                <option>Infrastructure Development</option>
                <option>Renovation & Remodeling</option>
                <option>Consultation</option>
              </select>
              <textarea placeholder="Project Details" required maxLength={1000} rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full border border-border rounded-sm px-4 py-3 bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors resize-none" />
              <button type="submit" className="w-full gold-gradient px-6 py-4 text-foreground font-semibold rounded-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                Submit Inquiry <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;
