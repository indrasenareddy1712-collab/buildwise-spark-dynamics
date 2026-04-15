import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Calculator } from "lucide-react";

const posts = [
  {
    slug: "construction-cost-guide-telangana",
    title: "Construction Cost Guide 2024: Building in Telangana",
    excerpt: "A comprehensive breakdown of construction costs per sq ft in Telangana, including material prices, labor rates, and hidden expenses you should budget for.",
    date: "March 15, 2024",
    category: "Guide",
    readTime: "8 min read",
  },
  {
    slug: "house-planning-tips",
    title: "10 Essential House Planning Tips Before You Build",
    excerpt: "From selecting the right plot to understanding vastu principles — here are 10 critical tips every homeowner should know before starting construction.",
    date: "February 28, 2024",
    category: "Tips",
    readTime: "6 min read",
  },
  {
    slug: "latest-construction-trends",
    title: "Latest Construction Trends Shaping 2024",
    excerpt: "Green building, modular construction, and smart home integration — discover the trends transforming the Indian construction industry.",
    date: "January 20, 2024",
    category: "Trends",
    readTime: "5 min read",
  },
  {
    slug: "cost-to-build-house-india",
    title: "Cost to Build a House in India: Complete 2024 Guide",
    excerpt: "Everything you need to know about building costs across India — from foundation to finishing. Includes state-wise comparison and budgeting tips.",
    date: "March 28, 2024",
    category: "Guide",
    readTime: "10 min read",
  },
  {
    slug: "best-materials-construction",
    title: "Best Materials for Construction: A Homeowner's Guide",
    excerpt: "TMT bars, AAC blocks, fly ash bricks — learn which construction materials offer the best quality, durability, and value for your project.",
    date: "April 5, 2024",
    category: "Materials",
    readTime: "7 min read",
  },
  {
    slug: "renovation-vs-rebuild",
    title: "Renovation vs Rebuild: Which Is Right for Your Property?",
    excerpt: "Should you renovate your existing home or tear it down and rebuild? We break down the costs, timelines, and factors to help you decide.",
    date: "April 10, 2024",
    category: "Tips",
    readTime: "6 min read",
  },
];

const BlogPage = () => (
  <>
    <Header />
    <main>
      <section className="pt-32 pb-16 bg-dark text-primary-foreground">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <nav className="text-primary-foreground/50 text-sm mb-4">
            <Link to="/" className="hover:text-gold transition-colors">Home</Link> /{" "}
            <span className="text-primary-foreground">Blog</span>
          </nav>
          <h1 className="font-display text-4xl md:text-6xl font-bold">
            Construction <span className="text-gold-gradient">Insights</span>
          </h1>
          <p className="text-primary-foreground/70 max-w-xl mt-4 text-lg">
            Expert articles on construction costs, materials, planning, and industry trends in India.
          </p>
        </div>
      </section>

      {/* CTA banner */}
      <section className="bg-secondary py-6">
        <div className="container-custom px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-foreground font-medium text-sm">
            <Calculator className="w-4 h-4 inline mr-2 text-gold" />
            Planning to build? Try our free construction cost calculator for instant estimates.
          </p>
          <Link to="/cost-calculator" className="gold-gradient px-6 py-2.5 text-foreground text-sm font-semibold rounded-sm hover:opacity-90 transition-opacity flex items-center gap-2">
            Calculate Cost <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom grid md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-secondary p-8 rounded-sm flex flex-col"
            >
              <span className="text-gold text-xs font-medium tracking-wider uppercase">{post.category}</span>
              <h2 className="font-display text-xl font-semibold text-foreground mt-2 mb-3">{post.title}</h2>
              <p className="text-muted-foreground text-sm leading-relaxed flex-1">{post.excerpt}</p>
              <div className="flex items-center justify-between mt-6">
                <div className="flex items-center gap-3">
                  <span className="text-muted-foreground text-xs">{post.date}</span>
                  <span className="text-muted-foreground text-xs">· {post.readTime}</span>
                </div>
                <span className="text-gold text-sm font-medium flex items-center gap-1">
                  Read More <ArrowRight className="w-3 h-3" />
                </span>
              </div>
              <div className="mt-4 text-sm text-muted-foreground">
                Related:{" "}
                <Link to="/services/residential" className="text-gold hover:underline">Residential</Link> ·{" "}
                <Link to="/projects" className="text-gold hover:underline">Projects</Link> ·{" "}
                <Link to="/cost-calculator" className="text-gold hover:underline">Cost Calculator</Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* SEO backlink section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom max-w-4xl">
          <h2 className="font-display text-2xl font-bold text-foreground mb-4">Useful Construction Resources</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Stay informed with authoritative construction resources:
          </p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <a href="https://bis.gov.in/" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">
                Bureau of Indian Standards (BIS)
              </a> — National construction quality and safety standards
            </li>
            <li>
              <a href="https://mohua.gov.in/" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">
                Ministry of Housing and Urban Affairs
              </a> — Government housing policies and schemes
            </li>
            <li>
              <a href="https://www.nbmcw.com/" target="_blank" rel="nofollow noopener noreferrer" className="text-gold hover:underline">
                NBM&CW
              </a> — New Building Materials & Construction World magazine
            </li>
            <li>
              <a href="https://igbc.in/" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">
                Indian Green Building Council (IGBC)
              </a> — Green building certification and guidelines
            </li>
          </ul>
          <p className="text-muted-foreground text-sm mt-6">
            Need expert construction advice? <Link to="/contact" className="text-gold hover:underline">Contact BUILDWISE INFRA</Link> for a free consultation,
            or explore our <Link to="/services/residential" className="text-gold hover:underline">construction services</Link>.
          </p>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default BlogPage;
