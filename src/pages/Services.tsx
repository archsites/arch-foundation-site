import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight, Home, Hammer, Wrench, Bath, ChefHat, Building2, TreeDeciduous } from "lucide-react";
import Layout from "@/components/Layout";
import { photos } from "@/assets/projects";

const mainServices = [
  {
    title: "Interior Remodel",
    description: "Full-room and whole-home interior renovations — framing, drywall, flooring, trim, and finish carpentry handled by one crew.",
    icon: Home,
    href: "/services/interior",
    image: photos.interiorLivingDining,
    features: ["Open-Concept Conversions", "Hardwood & LVP Flooring", "Trim, Millwork & Built-Ins", "Drywall, Paint & Finish"],
  },
  {
    title: "Exterior Remodel",
    description: "Siding, stone facades, roofing, windows, and entry upgrades that protect your home and refresh its curb appeal.",
    icon: TreeDeciduous,
    href: "/services/exterior",
    image: photos.exteriorStoneFront,
    features: ["Siding & Stone Veneer", "Roofing & Soffits", "Entry Doors & Windows", "Tear-Off & Re-Wrap"],
  },
  {
    title: "Additions",
    description: "Rear, side, and second-story additions — engineered, framed, and finished to match your existing home seamlessly.",
    icon: Building2,
    href: "/services/additions",
    image: photos.additionRearComplete,
    features: ["Rear & Side Additions", "Second-Story Builds", "Sunrooms & Great Rooms", "Foundation to Finish"],
  },
  {
    title: "Decks & Patios",
    description: "Covered patios, pergolas, and outdoor entertaining spaces built to last with proper footings and structural detail.",
    icon: TreeDeciduous,
    href: "/services/decks",
    image: photos.patioCoveredFramedSide,
    features: ["Covered Patios", "Pergolas & Pavilions", "Concrete Pads & Footings", "Composite & Wood Decks"],
  },
];

const specialtyServices = [
  {
    title: "Kitchens",
    description: "We take kitchens from gut to grand opening. Custom cabinetry, stone counters, smart layouts, and clean finish work that turns the busiest room in the house into the one you're proud to show off.",
    icon: ChefHat,
    href: "/services/kitchens",
    image: photos.kitchenModernIsland,
  },
  {
    title: "Bathrooms",
    description: "From a quick guest-bath refresh to a full primary suite, we deliver tile, glass, and plumbing work with the kind of detail you only get from a finish-focused crew.",
    icon: Bath,
    href: "/services/bathrooms",
    image: photos.bathroomGlassShower,
  },
  {
    title: "Basements",
    description: "Unfinished basements turned into real living space — full bars, bathrooms, theaters, and home gyms with proper insulation, framing, and code-compliant egress.",
    icon: Hammer,
    href: "/services/basements",
    image: photos.basementOpenWide,
  },
];

const allServices = [
  "Rear & Side Additions",
  "Second-Story Additions",
  "Sunrooms & Four-Season Rooms",
  "Full Kitchen Renovations",
  "Bathroom Remodels",
  "Finished Basements",
  "Whole-Home Interior Remodels",
  "Custom Cabinetry & Built-Ins",
  "Hardwood & LVP Flooring",
  "Tile & Stone Installation",
  "Trim, Crown & Wainscoting",
  "Staircases & Railings",
  "Drywall, Skim Coat & Paint",
  "Door & Window Replacement",
  "Siding & Stone Veneer",
  "Roofing & Re-Roofs",
  "Soffit, Fascia & Gutters",
  "Concrete Pads & Footings",
  "Covered Patios & Pergolas",
  "Composite & Wood Decks",
  "Retaining Walls & Hardscape",
  "Garage Builds & Conversions",
  "Mudrooms & Entryways",
  "Fireplace Surrounds & Mantels",
  "Permit & Plan Coordination",
  "Insurance & Storm Repairs",
  "General Contracting Management",
];

const Services = () => {
  return (
    <Layout>
      <section className="relative py-24 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-4">
            Services
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-secondary-foreground mb-6">
            One Contractor.<br />Every Phase of the Build.
          </h1>
          <p className="text-lg text-secondary-foreground/80 max-w-3xl mx-auto">
            Arch GC handles the full scope of your project in house — framing, mechanicals,
            finishes, and the punch list. Below is the work we do most often across New Jersey.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Core Service Areas</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The four categories that make up most of our work — explore each for project examples and scope details.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mainServices.map((service) => (
              <Link key={service.title} to={service.href} className="group card-elevated bg-card rounded-lg overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <service.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-heading text-lg font-bold group-hover:text-primary transition-colors">{service.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{service.description}</p>
                  <ul className="space-y-1.5 mb-4">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-xs">
                        <div className="w-1 h-1 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                    See Projects
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Room-by-Room Specialties</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Three rooms we get hired for most often — kitchens, bathrooms, and basements.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {specialtyServices.map((service) => (
              <Link key={service.title} to={service.href} className="group">
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-4">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 mb-2">
                      <service.icon className="w-5 h-5 text-primary" />
                      <h3 className="font-heading text-xl font-bold text-secondary-foreground">{service.title}</h3>
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                <div className="flex items-center gap-2 text-primary font-semibold text-sm mt-3">
                  Explore {service.title}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Everything We Build & Renovate</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A working list of the trades and project types our crew handles regularly. If you
              don't see what you need, ask — chances are we've done it.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {allServices.map((service) => (
              <div key={service} className="bg-card p-4 rounded-lg border border-border hover:border-primary transition-colors">
                <div className="flex items-center gap-3">
                  <Wrench className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-sm font-medium">{service}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary-foreground mb-6">
            Let's Scope Your Project
          </h2>
          <p className="text-secondary-foreground/80 max-w-2xl mx-auto mb-8">
            Tell us what you're thinking and we'll come walk the site, talk through options, and
            put a real number on paper.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact">
              Request an Estimate
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
