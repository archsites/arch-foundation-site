import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight, Home, Paintbrush, Hammer, Wrench, Bath, ChefHat, Building2, TreeDeciduous } from "lucide-react";
import Layout from "@/components/Layout";
import heroImage from "@/assets/hero-kitchen.jpg";
import bathroomImage from "@/assets/bathroom.jpg";
import deckImage from "@/assets/deck.jpg";
import exteriorImage from "@/assets/exterior-remodel.jpg";
import basementImage from "@/assets/basement.jpg";
import additionImage from "@/assets/addition.jpg";

const mainServices = [
  {
    title: "Interior Remodel",
    description: "Complete interior transformations including wall paneling, wainscoting, ceiling beams, coffered ceilings, wood accent walls, and custom built-ins.",
    icon: Home,
    href: "/services/interior",
    image: heroImage,
    features: ["Wall Paneling & Wainscoting", "Ceiling Beams", "Wood Accent Walls", "Custom Built-Ins"],
  },
  {
    title: "Exterior Remodel",
    description: "Transform your home's exterior with siding, trim work, outdoor structures, and custom woodwork that enhances curb appeal.",
    icon: TreeDeciduous,
    href: "/services/exterior",
    image: exteriorImage,
    features: ["Siding Installation", "Exterior Trim", "Pergolas & Gazebos", "Outdoor Kitchens"],
  },
  {
    title: "Additions",
    description: "Expand your living space with professionally framed and finished room additions, garage conversions, and more.",
    icon: Building2,
    href: "/services/additions",
    image: additionImage,
    features: ["Room Additions", "Framing & Structure", "Garage Conversions", "Home Extensions"],
  },
  {
    title: "Decks & Patios",
    description: "Create beautiful outdoor living spaces with custom decks, patios, pergolas, and outdoor entertainment areas.",
    icon: TreeDeciduous,
    href: "/services/decks",
    image: deckImage,
    features: ["Custom Decks", "Patios", "Pergolas", "Outdoor Living"],
  },
];

const specialtyServices = [
  {
    title: "Kitchens",
    description: "Complete kitchen renovations including cabinet installation, custom storage solutions, and modern updates. Transform your kitchen into the heart of your home with custom cabinetry, beautiful countertops, and efficient layouts.",
    icon: ChefHat,
    href: "/services/kitchens",
    image: heroImage,
  },
  {
    title: "Bathrooms",
    description: "Luxury bathroom remodels with custom cabinetry, tile work, and modern fixtures for a spa-like experience. From powder rooms to master bathrooms, we create beautiful, functional spaces.",
    icon: Bath,
    href: "/services/bathrooms",
    image: bathroomImage,
  },
  {
    title: "Basements",
    description: "Transform your basement into functional living space with custom finishes, entertainment centers, and storage. Add a home theater, wine cellar, or additional living area.",
    icon: Hammer,
    href: "/services/basements",
    image: basementImage,
  },
];

const allServices = [
  "Cabinet Installation & Repair",
  "Trim and Molding Installation",
  "Deck and Patio Construction",
  "Framing and Structural Carpentry",
  "Door and Window Installation",
  "Flooring Installation",
  "Staircase and Railing Construction",
  "Closet and Storage Solutions",
  "Shelving and Bookcase Construction",
  "Partition Wall Construction",
  "Pergolas and Gazebo Construction",
  "Siding and Exterior Woodwork",
  "Custom Built-Ins",
  "Wall Paneling and Wainscoting",
  "Ceiling Beams and Coffered Ceilings",
  "Wood Accent Walls",
  "Home Office and Study Rooms",
  "Under-Stair Storage Solutions",
  "Wine Cellars and Racks",
  "Fireplace Mantels and Surrounds",
  "Barn Door Installation",
  "Acoustic Wood Paneling",
  "Outdoor Kitchen Carpentry",
  "Garage and Workshop Storage",
  "Mudroom and Entryway Storage",
  "Themed or Specialty Carpentry",
  "Boat and RV Woodwork",
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-4">
            Our Services
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-secondary-foreground mb-6">
            Professional Carpentry &<br />Remodeling Services
          </h1>
          <p className="text-lg text-secondary-foreground/80 max-w-3xl mx-auto">
            From kitchens to basements, decks to additions — Arch GC does it all. 
            Explore our comprehensive range of carpentry and remodeling services.
          </p>
        </div>
      </section>

      {/* Main Services Grid - 4 Columns */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Our Main Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our core service areas designed to transform every part of your home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mainServices.map((service) => (
              <Link
                key={service.title}
                to={service.href}
                className="group card-elevated bg-card rounded-lg overflow-hidden"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <service.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-heading text-lg font-bold group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {service.description}
                  </p>
                  <ul className="space-y-1.5 mb-4">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-xs">
                        <div className="w-1 h-1 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                    Learn More
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Specialty Services - Kitchen, Bathroom, Basement */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Specialty Remodeling
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our most popular room transformations — kitchens, bathrooms, and basements.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {specialtyServices.map((service) => (
              <Link
                key={service.title}
                to={service.href}
                className="group"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-4">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 mb-2">
                      <service.icon className="w-5 h-5 text-primary" />
                      <h3 className="font-heading text-xl font-bold text-secondary-foreground">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
                <div className="flex items-center gap-2 text-primary font-semibold text-sm mt-3">
                  Explore {service.title}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Services List */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Complete Service List
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              This is most of the carpentry and remodeling services we offer. 
              If you don't see what you need, just ask — we can handle almost any project.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {allServices.map((service) => (
              <div 
                key={service}
                className="bg-card p-4 rounded-lg border border-border hover:border-primary transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Wrench className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-sm font-medium">{service}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary-foreground mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-secondary-foreground/80 max-w-2xl mx-auto mb-8">
            Contact us today for a free estimate on your next project. We're ready to bring 
            your vision to life.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact">
              Get Free Estimate
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Services;