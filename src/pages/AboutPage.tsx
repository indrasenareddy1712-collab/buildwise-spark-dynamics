import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";
import { motion } from "framer-motion";
import { Target, Eye, Shield } from "lucide-react";

const AboutPage = () => (
  <>
    <Header />
    <main>
      <section className="pt-32 pb-16 bg-dark text-primary-foreground">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <span className="text-gold font-medium tracking-[0.2em] uppercase text-sm">About Us</span>
          <h1 className="font-display text-4xl md:text-6xl font-bold mt-2">Building the Future,<br /><span className="text-gold-gradient">One Project at a Time</span></h1>
          <p className="text-primary-foreground/70 max-w-2xl mt-6 text-lg leading-relaxed">
            BUILDWISE INFRA is a leading construction company based in Telangana, India. With over 15 years of experience, we deliver exceptional construction services across residential, commercial, infrastructure, and renovation sectors.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom grid md:grid-cols-3 gap-8">
          {[
            { icon: Target, title: "Our Mission", text: "To deliver world-class construction services that exceed client expectations through innovation, integrity, and excellence." },
            { icon: Eye, title: "Our Vision", text: "To become Telangana's most trusted construction partner, setting new benchmarks in quality and reliability." },
            { icon: Shield, title: "Our Values", text: "Trust, quality, transparency, and on-time delivery form the cornerstone of everything we do at BUILDWISE INFRA." },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-secondary p-8 rounded-sm"
            >
              <item.icon className="w-10 h-10 text-gold mb-4" />
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <ContactCTA />
    </main>
    <Footer />
  </>
);

export default AboutPage;
