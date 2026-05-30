import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & About */}
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-2 inline-block">
              <img src={logo} alt="Pro Master Carpentry" className="h-14 w-auto" />
            </div>
            <p className="text-secondary-foreground/70 text-sm leading-relaxed">
              Pro Master Carpentry LLC delivers exceptional craftsmanship and quality remodeling services. 
              From kitchens to basements, we transform your vision into reality.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="text-secondary-foreground/60 hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-secondary-foreground/60 hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-secondary-foreground/60 hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "Services", href: "/services" },
                { name: "About Us", href: "/about" },
                { name: "Gallery", href: "/gallery" },
                { name: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6 uppercase tracking-wider">Our Services</h4>
            <ul className="space-y-3">
              {[
                { name: "Interior Remodel", href: "/services/interior" },
                { name: "Exterior Remodel", href: "/services/exterior" },
                { name: "Additions", href: "/services/additions" },
                { name: "Decks & Patios", href: "/services/decks" },
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6 uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm text-secondary-foreground/70">Call Us</p>
                  <a href="tel:+16094010433" className="font-semibold hover:text-primary transition-colors">
                    (609) 401-0433
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm text-secondary-foreground/70">Email Us</p>
                  <a href="mailto:promastercarpentry@gmail.com" className="font-semibold hover:text-primary transition-colors text-sm">
                    promastercarpentry@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm text-secondary-foreground/70">Visit Us</p>
                  <p className="font-semibold text-sm">35 Regent Road<br />Cherry Hill, NJ</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-secondary-foreground/10">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-secondary-foreground/60">
            © {new Date().getFullYear()} Pro Master Carpentry LLC. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-sm text-secondary-foreground/60 hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-secondary-foreground/60 hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
