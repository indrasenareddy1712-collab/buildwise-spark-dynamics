import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services/residential" },
  { label: "Projects", path: "/projects" },
  { label: "Cost Calculator", path: "/cost-calculator" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-dark/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container-custom flex items-center justify-between px-4 sm:px-6 lg:px-8 h-20">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 gold-gradient rounded-sm flex items-center justify-center font-display font-bold text-foreground text-lg">
            B
          </div>
          <div>
            <span className="font-display font-bold text-primary-foreground text-lg tracking-wide">
              BUILDWISE
            </span>
            <span className="block text-gold text-[10px] tracking-[0.3em] uppercase -mt-1">
              INFRA
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium tracking-wide uppercase transition-colors ${
                isActive(link.path)
                  ? "text-gold border-b-2 border-gold pb-1"
                  : "text-primary-foreground/80 hover:text-gold"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a href="tel:9346479152" className="flex items-center gap-2 text-gold text-sm font-medium">
            <Phone className="w-4 h-4" />
            9346479152
          </a>
          <Link
            to="/get-a-quote"
            className="gold-gradient px-6 py-2.5 text-foreground text-sm font-semibold rounded-sm hover:opacity-90 transition-opacity"
          >
            Get a Quote
          </Link>
        </div>

        <button
          className="lg:hidden text-primary-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-dark/95 backdrop-blur-md border-t border-gold/20"
          >
            <nav className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-base font-medium py-2 transition-colors ${
                    isActive(link.path)
                      ? "text-gold"
                      : "text-primary-foreground/80 hover:text-gold"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/get-a-quote"
                className="gold-gradient px-6 py-3 text-foreground text-sm font-semibold rounded-sm text-center mt-2"
              >
                Get a Quote
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
