import { useState } from "react";
import { Phone, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const RequestCallModal = () => {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", time: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => { setOpen(false); setSubmitted(false); setForm({ name: "", phone: "", time: "" }); }, 2500);
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 left-6 z-40 flex items-center gap-2 bg-dark text-primary-foreground px-4 py-3 rounded-full shadow-lg hover:bg-dark-surface transition-colors text-sm font-medium"
      >
        <Phone className="w-4 h-4 text-gold" /> Request a Call
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/50 flex items-center justify-center p-4"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-background rounded-sm p-8 w-full max-w-md relative"
            >
              <button onClick={() => setOpen(false)} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground">
                <X className="w-5 h-5" />
              </button>

              {submitted ? (
                <div className="text-center py-8">
                  <Phone className="w-12 h-12 text-gold mx-auto mb-4" />
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">Thank You!</h3>
                  <p className="text-muted-foreground">We'll call you back shortly.</p>
                </div>
              ) : (
                <>
                  <h3 className="font-display text-xl font-bold text-foreground mb-1">Request a Callback</h3>
                  <p className="text-muted-foreground text-sm mb-6">Our expert will call you within 30 minutes during business hours.</p>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      required
                      maxLength={100}
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full border border-border rounded-sm px-4 py-3 bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors"
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      required
                      maxLength={15}
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full border border-border rounded-sm px-4 py-3 bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors"
                    />
                    <select
                      value={form.time}
                      onChange={(e) => setForm({ ...form, time: e.target.value })}
                      className="w-full border border-border rounded-sm px-4 py-3 bg-background text-foreground focus:outline-none focus:border-gold transition-colors"
                    >
                      <option value="">Preferred Time</option>
                      <option>Morning (9 AM - 12 PM)</option>
                      <option>Afternoon (12 PM - 4 PM)</option>
                      <option>Evening (4 PM - 7 PM)</option>
                    </select>
                    <button
                      type="submit"
                      className="w-full gold-gradient px-6 py-3 text-foreground font-semibold rounded-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                    >
                      Request Call <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default RequestCallModal;
