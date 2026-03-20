import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  { name: "Rajesh Kumar", role: "Homeowner, Hyderabad", text: "BUILDWISE INFRA delivered our dream home on time and within budget. Their attention to detail and commitment to quality is unmatched. Highly recommended!" },
  { name: "Priya Sharma", role: "Business Owner", text: "Our commercial complex was built to perfection. The team's professionalism and expertise made the entire process smooth and stress-free." },
  { name: "Venkat Reddy", role: "Real Estate Developer", text: "We've partnered with BUILDWISE INFRA on multiple projects. Their reliability and quality of work make them our go-to construction partner." },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  return (
    <section className="section-padding bg-background">
      <div className="container-custom max-w-4xl">
        <div className="text-center mb-12">
          <span className="text-gold font-medium tracking-[0.2em] uppercase text-sm">Testimonials</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-2">What Our Clients Say</h2>
        </div>
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="bg-secondary p-8 md:p-12 rounded-sm text-center"
            >
              <Quote className="w-10 h-10 text-gold mx-auto mb-6" />
              <p className="text-foreground text-lg md:text-xl leading-relaxed mb-8 font-body italic">
                "{testimonials[current].text}"
              </p>
              <div className="font-display font-semibold text-foreground">{testimonials[current].name}</div>
              <div className="text-muted-foreground text-sm mt-1">{testimonials[current].role}</div>
            </motion.div>
          </AnimatePresence>
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={() => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length)}
              className="w-12 h-12 border border-foreground/20 rounded-full flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => setCurrent((p) => (p + 1) % testimonials.length)}
              className="w-12 h-12 border border-foreground/20 rounded-full flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
