import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Award } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-12">
          <div className="space-y-4 col-span-3 md:col-span-2 lg:col-span-1 order-2 lg:order-1">
            <div className="bg-white rounded-lg p-2 inline-block">
              <img src={logo} alt="Arch General Contracting" className="h-16 w-auto" />
            </div>
            <p className="text-secondary-foreground/70 text-sm leading-relaxed">
              Arch General Contracting LLC is a New Jersey general contractor specializing in additions,
              full renovations, and outdoor builds — handled in house from foundation to final walkthrough.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" aria-label="Facebook" className="text-secondary-foreground/60 hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Instagram" className="text-secondary-foreground/60 hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-secondary-foreground/60 hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="order-3 lg:order-2">

            <h4 className="font-heading text-sm md:text-lg font-semibold mb-3 md:mb-6 uppercase tracking-wider">Quick Links</h4>
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

          <div className="order-4 lg:order-3">

            <h4 className="font-heading text-sm md:text-lg font-semibold mb-3 md:mb-6 uppercase tracking-wider">Our Services</h4>
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

          <div className="col-span-3 md:col-span-2 lg:col-span-1 order-1 lg:order-4">
            <h4 className="font-heading text-sm md:text-lg font-semibold mb-3 md:mb-6 uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm text-secondary-foreground/70">Call Us</p>
                  <a href="tel:+16092841185" className="font-semibold hover:text-primary transition-colors">(609) 284-1185</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm text-secondary-foreground/70">Email Us</p>
                  <a href="mailto:archbasements@gmail.com" className="font-semibold hover:text-primary transition-colors text-sm">archbasements@gmail.com</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm text-secondary-foreground/70">Service Area</p>
                  <p className="font-semibold text-sm">Burlington County, NJ<br/>& Surrounding Areas</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-secondary-foreground/10">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-secondary-foreground/60">
            © {new Date().getFullYear()} Arch General Contracting LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <p className="flex items-center gap-1.5 text-sm text-secondary-foreground/60">
              <Award className="w-4 h-4 text-primary" />
              A+ BBB Accredited
            </p>
            <span className="hidden md:inline text-secondary-foreground/20">|</span>
            <p className="text-sm text-secondary-foreground/60">
              Licensed &amp; Insured
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
