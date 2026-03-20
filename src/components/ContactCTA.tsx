import { useState } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, ArrowRight } from "lucide-react";

const ContactCTA = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! We'll contact you shortly.");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section className="section-padding bg-dark text-primary-foreground">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-gold font-medium tracking-[0.2em] uppercase text-sm">Get Started</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mt-2 mb-6">
              Start Your Project <span className="text-gold-gradient">Today</span>
            </h2>
            <p className="text-primary-foreground/70 leading-relaxed mb-8">
              Ready to bring your construction vision to life? Contact BUILDWISE INFRA today for a free consultation and quote.
            </p>
            <div className="flex flex-col gap-4">
              <a href="tel:9346479152" className="flex items-center gap-3 text-gold hover:opacity-80 transition-opacity">
                <Phone className="w-5 h-5" /> 9346479152
              </a>
              <a href="mailto:buildwiseinfra@yahoo.com" className="flex items-center gap-3 text-gold hover:opacity-80 transition-opacity">
                <Mail className="w-5 h-5" /> buildwiseinfra@yahoo.com
              </a>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="bg-dark-surface p-8 rounded-sm space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              required
              maxLength={100}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-primary-foreground/5 border border-primary-foreground/10 rounded-sm px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/30 focus:outline-none focus:border-gold transition-colors"
            />
            <input
              type="email"
              placeholder="Email Address"
              required
              maxLength={255}
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-primary-foreground/5 border border-primary-foreground/10 rounded-sm px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/30 focus:outline-none focus:border-gold transition-colors"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              maxLength={15}
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full bg-primary-foreground/5 border border-primary-foreground/10 rounded-sm px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/30 focus:outline-none focus:border-gold transition-colors"
            />
            <textarea
              placeholder="Tell us about your project"
              required
              maxLength={1000}
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-primary-foreground/5 border border-primary-foreground/10 rounded-sm px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/30 focus:outline-none focus:border-gold transition-colors resize-none"
            />
            <button
              type="submit"
              className="w-full gold-gradient px-6 py-4 text-foreground font-semibold rounded-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              Send Inquiry <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
