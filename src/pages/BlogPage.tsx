import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const posts = [
  {
    slug: "construction-cost-guide-telangana",
    title: "Construction Cost Guide 2024: Building in Telangana",
    excerpt: "A comprehensive breakdown of construction costs per sq ft in Telangana, including material prices, labor rates, and hidden expenses.",
    date: "March 15, 2024",
    category: "Guide",
  },
  {
    slug: "house-planning-tips",
    title: "10 Essential House Planning Tips Before You Build",
    excerpt: "From selecting the right plot to understanding vastu principles — here are 10 critical tips every homeowner should know before starting construction.",
    date: "February 28, 2024",
    category: "Tips",
  },
  {
    slug: "latest-construction-trends",
    title: "Latest Construction Trends Shaping 2024",
    excerpt: "Green building, modular construction, and smart home integration — discover the trends transforming the Indian construction industry.",
    date: "January 20, 2024",
    category: "Trends",
  },
];

const BlogPage = () => (
  <>
    <Header />
    <main>
      <section className="pt-32 pb-16 bg-dark text-primary-foreground">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <nav className="text-primary-foreground/50 text-sm mb-4"><Link to="/" className="hover:text-gold transition-colors">Home</Link> / <span className="text-primary-foreground">Blog</span></nav>
          <h1 className="font-display text-4xl md:text-6xl font-bold">Construction <span className="text-gold-gradient">Insights</span></h1>
          <p className="text-primary-foreground/70 max-w-xl mt-4 text-lg">Expert articles on construction, planning, and industry trends.</p>
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
                <span className="text-muted-foreground text-xs">{post.date}</span>
                <span className="text-gold text-sm font-medium flex items-center gap-1">
                  Read More <ArrowRight className="w-3 h-3" />
                </span>
              </div>
              <div className="mt-4 text-sm text-muted-foreground">
                Related: <Link to="/services/residential" className="text-gold hover:underline">Residential</Link> · <Link to="/projects" className="text-gold hover:underline">Projects</Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default BlogPage;
