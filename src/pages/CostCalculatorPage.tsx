import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";
import { motion } from "framer-motion";
import { Calculator, ArrowRight, Building, Layers, Home, Paintbrush, HardHat } from "lucide-react";

const constructionTypes = [
  { value: "basic", label: "Basic", rate: 1400, desc: "Standard materials, functional design" },
  { value: "standard", label: "Standard", rate: 1800, desc: "Quality materials, modern amenities" },
  { value: "premium", label: "Premium", rate: 2500, desc: "Premium materials, luxury finishes" },
];

const locationMultipliers: Record<string, { label: string; multiplier: number }> = {
  urban: { label: "Urban (Hyderabad City)", multiplier: 1.15 },
  suburban: { label: "Suburban (Outer Hyderabad)", multiplier: 1.0 },
  semiurban: { label: "Semi-Urban (District HQs)", multiplier: 0.9 },
  rural: { label: "Rural (Villages)", multiplier: 0.8 },
};

const phaseBreakdown = [
  { name: "Planning & Design", icon: Layers, percent: 5 },
  { name: "Foundation", icon: Building, percent: 15 },
  { name: "Structure", icon: HardHat, percent: 35 },
  { name: "Finishing", icon: Paintbrush, percent: 25 },
  { name: "Interiors", icon: Home, percent: 20 },
];

const CostCalculatorPage = () => {
  const [plotSize, setPlotSize] = useState("");
  const [floors, setFloors] = useState("1");
  const [type, setType] = useState("standard");
  const [location, setLocation] = useState("suburban");
  const [calculated, setCalculated] = useState(false);

  const totalSqFt = Number(plotSize) * Number(floors);
  const baseRate = constructionTypes.find((t) => t.value === type)?.rate || 1800;
  const locMul = locationMultipliers[location]?.multiplier || 1;
  const totalCost = totalSqFt * baseRate * locMul;

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    if (Number(plotSize) > 0) setCalculated(true);
  };

  const formatCurrency = (n: number) =>
    new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(n);

  return (
    <>
      <Header />
      <main>
        <section className="pt-32 pb-16 bg-dark text-primary-foreground">
          <div className="container-custom px-4 sm:px-6 lg:px-8">
            <nav className="text-primary-foreground/50 text-sm mb-4">
              <Link to="/" className="hover:text-gold transition-colors">Home</Link> /{" "}
              <span className="text-primary-foreground">Cost Calculator</span>
            </nav>
            <h1 className="font-display text-4xl md:text-6xl font-bold">
              Construction <span className="text-gold-gradient">Cost Calculator</span>
            </h1>
            <p className="text-primary-foreground/70 max-w-xl mt-4 text-lg">
              Get an instant estimate for your construction project in Telangana. Plan your budget with our AI-powered cost calculator.
            </p>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="container-custom grid lg:grid-cols-2 gap-12">
            {/* Calculator Form */}
            <form onSubmit={handleCalculate} className="bg-secondary p-8 rounded-sm space-y-6">
              <div className="flex items-center gap-3 mb-2">
                <Calculator className="w-6 h-6 text-gold" />
                <h2 className="font-display text-2xl font-bold text-foreground">Enter Project Details</h2>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Plot Size (sq ft)</label>
                <input
                  type="number"
                  min="100"
                  max="100000"
                  required
                  value={plotSize}
                  onChange={(e) => { setPlotSize(e.target.value); setCalculated(false); }}
                  placeholder="e.g., 1200"
                  className="w-full border border-border rounded-sm px-4 py-3 bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Number of Floors</label>
                <select
                  value={floors}
                  onChange={(e) => { setFloors(e.target.value); setCalculated(false); }}
                  className="w-full border border-border rounded-sm px-4 py-3 bg-background text-foreground focus:outline-none focus:border-gold transition-colors"
                >
                  {[1, 2, 3, 4, 5].map((n) => (
                    <option key={n} value={n}>{n} {n === 1 ? "Floor" : "Floors"}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Construction Type</label>
                <div className="grid grid-cols-3 gap-3">
                  {constructionTypes.map((ct) => (
                    <button
                      key={ct.value}
                      type="button"
                      onClick={() => { setType(ct.value); setCalculated(false); }}
                      className={`p-3 rounded-sm border text-center transition-all ${
                        type === ct.value
                          ? "border-gold bg-gold/10 text-foreground"
                          : "border-border bg-background text-muted-foreground hover:border-gold/50"
                      }`}
                    >
                      <div className="font-semibold text-sm">{ct.label}</div>
                      <div className="text-xs mt-1">₹{ct.rate}/sq ft</div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Location Type</label>
                <select
                  value={location}
                  onChange={(e) => { setLocation(e.target.value); setCalculated(false); }}
                  className="w-full border border-border rounded-sm px-4 py-3 bg-background text-foreground focus:outline-none focus:border-gold transition-colors"
                >
                  {Object.entries(locationMultipliers).map(([key, loc]) => (
                    <option key={key} value={key}>{loc.label}</option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                className="w-full gold-gradient px-6 py-4 text-foreground font-semibold rounded-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                Calculate Cost <Calculator className="w-4 h-4" />
              </button>
            </form>

            {/* Results */}
            <div>
              {calculated && totalSqFt > 0 ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <div className="bg-dark text-primary-foreground p-8 rounded-sm">
                    <h3 className="text-gold font-medium tracking-wider uppercase text-sm mb-2">Estimated Total Cost</h3>
                    <div className="font-display text-4xl md:text-5xl font-bold text-gold-gradient">
                      {formatCurrency(totalCost)}
                    </div>
                    <div className="text-primary-foreground/60 text-sm mt-2">
                      {totalSqFt.toLocaleString("en-IN")} sq ft × ₹{Math.round(baseRate * locMul)}/sq ft
                    </div>
                  </div>

                  <h3 className="font-display text-xl font-bold text-foreground">Phase-wise Breakdown</h3>
                  <div className="space-y-3">
                    {phaseBreakdown.map((phase, i) => {
                      const phaseCost = totalCost * (phase.percent / 100);
                      return (
                        <motion.div
                          key={phase.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="bg-secondary p-4 rounded-sm flex items-center justify-between"
                        >
                          <div className="flex items-center gap-3">
                            <phase.icon className="w-5 h-5 text-gold" />
                            <div>
                              <div className="text-foreground font-medium text-sm">{phase.name}</div>
                              <div className="text-muted-foreground text-xs">{phase.percent}% of total</div>
                            </div>
                          </div>
                          <div className="font-semibold text-foreground">{formatCurrency(phaseCost)}</div>
                        </motion.div>
                      );
                    })}
                  </div>

                  <div className="bg-secondary p-6 rounded-sm">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      <strong className="text-foreground">Disclaimer:</strong> This is an approximate estimate based on current construction rates in Telangana.
                      Actual costs may vary based on materials, labor availability, site conditions, and design complexity.
                      For an accurate quote, <Link to="/contact" className="text-gold hover:underline">contact our team</Link> or call{" "}
                      <a href="tel:9346479152" className="text-gold hover:underline">9346479152</a>.
                    </p>
                  </div>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 gold-gradient px-8 py-4 text-foreground font-semibold rounded-sm hover:opacity-90 transition-opacity"
                  >
                    Get Accurate Quote <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-center py-16">
                  <Calculator className="w-16 h-16 text-gold/30 mb-4" />
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">Enter your project details</h3>
                  <p className="text-muted-foreground max-w-sm">
                    Fill in the form to get an instant construction cost estimate for your project in Telangana.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* SEO content section */}
        <section className="section-padding bg-secondary">
          <div className="container-custom max-w-4xl">
            <h2 className="font-display text-2xl font-bold text-foreground mb-6">Understanding Construction Costs in Telangana</h2>
            <div className="prose max-w-none text-muted-foreground space-y-4">
              <p>
                Construction costs in Telangana vary significantly based on location, material quality, and project complexity.
                As of 2024, the average construction cost ranges from ₹1,400 to ₹2,500 per square foot depending on the type of construction.
              </p>
              <h3 className="font-display text-lg font-semibold text-foreground">Key Cost Factors</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Materials:</strong> Steel, cement, bricks, and sand prices fluctuate seasonally. Using TMT bars from reputed brands ensures structural integrity.</li>
                <li><strong>Labor:</strong> Skilled labor rates in Hyderabad are higher than rural areas but ensure better quality construction.</li>
                <li><strong>Location:</strong> Urban land preparation and logistics cost more than suburban or rural areas.</li>
                <li><strong>Design:</strong> Complex architectural designs increase costs by 10-20% compared to standard plans.</li>
              </ul>
              <p>
                For more details, explore our <Link to="/services/residential" className="text-gold hover:underline">residential construction services</Link> or
                read our <Link to="/blog" className="text-gold hover:underline">construction cost guide</Link>.
                You can also refer to the{" "}
                <a href="https://bis.gov.in/" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">
                  Bureau of Indian Standards (BIS)
                </a>{" "}
                for construction quality standards.
              </p>
            </div>
          </div>
        </section>

        <ContactCTA />
      </main>
      <Footer />
    </>
  );
};

export default CostCalculatorPage;
