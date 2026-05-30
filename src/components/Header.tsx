import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const services = [
  { name: "Interior Remodel", href: "/services/interior" },
  { name: "Exterior Remodel", href: "/services/exterior" },
  { name: "Additions", href: "/services/additions" },
  { name: "Decks & Patios", href: "/services/decks" },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services", hasDropdown: true },
  { name: "About Us", href: "/about" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact Us", href: "/contact" },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Pro Master Carpentry" className="h-14 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.hasDropdown && setIsServicesOpen(true)}
                onMouseLeave={() => link.hasDropdown && setIsServicesOpen(false)}
              >
                <Link
                  to={link.href}
                  className={`nav-link flex items-center gap-1 text-sm uppercase tracking-wider font-semibold ${
                    location.pathname === link.href ? "text-primary" : ""
                  }`}
                >
                  {link.name}
                  {link.hasDropdown && (
                    <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
                  )}
                </Link>

                {/* Services Dropdown */}
                {link.hasDropdown && isServicesOpen && (
                  <div className="absolute top-full left-0 pt-2 animate-scale-in">
                    <div className="bg-background border border-border rounded-lg shadow-xl p-2 min-w-[220px]">
                      {services.map((service) => (
                        <Link
                          key={service.name}
                          to={service.href}
                          className="block px-4 py-2.5 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-muted rounded-md transition-colors"
                        >
                          {service.name}
                        </Link>
                      ))}
                      <div className="border-t border-border mt-2 pt-2">
                        <Link
                          to="/services"
                          className="block px-4 py-2.5 text-sm font-semibold text-primary hover:bg-primary/10 rounded-md transition-colors"
                        >
                          View All Services →
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+16094010433" className="flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              (609) 401-0433
            </a>
            <Button variant="default" size="lg" asChild>
              <Link to="/contact">Free Estimate</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border animate-slide-up">
          <div className="container mx-auto px-4 py-6">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.hasDropdown ? (
                    <>
                      <button
                        onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                        className="flex items-center justify-between w-full py-2 text-lg font-semibold uppercase tracking-wider text-foreground hover:text-primary transition-colors"
                      >
                        {link.name}
                        <ChevronDown className={`w-5 h-5 transition-transform ${isMobileServicesOpen ? "rotate-180" : ""}`} />
                      </button>
                      {isMobileServicesOpen && (
                        <div className="pl-4 mt-2 flex flex-col gap-2">
                          {services.map((service) => (
                            <Link
                              key={service.name}
                              to={service.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="block py-1.5 text-sm text-foreground/70 hover:text-primary transition-colors"
                            >
                              {service.name}
                            </Link>
                          ))}
                          <Link
                            to="/services"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block py-1.5 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                          >
                            All Services
                          </Link>
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-2 text-lg font-semibold uppercase tracking-wider text-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
            <div className="mt-6 pt-6 border-t border-border flex flex-col gap-4">
              <a href="tel:+16094010433" className="flex items-center gap-2 text-lg font-semibold text-foreground">
                <Phone className="w-5 h-5" />
                (609) 401-0433
              </a>
              <Button variant="default" size="lg" className="w-full" asChild>
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Free Estimate</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
