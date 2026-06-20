import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import Layout from "@/components/Layout";
import { photos } from "@/assets/projects";

const services = [
  "Full-Home Re-Siding",
  "Stone & Brick Veneer Facades",
  "Roof Replacements & Re-Roofs",
  "Soffits, Fascia & Gutters",
  "Window & Entry Door Replacement",
  "Bay Windows & Architectural Trim",
  "Tyvek & Weather Barrier Wraps",
  "Front Porch & Portico Builds",
  "Storm & Insurance Repairs",
  "Pressure Washing & Prep",
];

const ExteriorRemodel = () => (
  <Layout>
    <section className="relative min-h-[60vh] flex items-center">
      <div className="absolute inset-0">
        <img src={photos.exteriorStoneFront} alt="Exterior remodel with stone facade" className="w-full h-full object-cover"  loading="eager" decoding="async" fetchPriority="high" />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-transparent" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-4">Services</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-secondary-foreground mb-6">Exterior Remodels</h1>
          <p className="text-lg text-secondary-foreground/80 mb-8">
            Siding, roofing, stone, and trim work that doesn't just look good — it actually keeps weather out for the next twenty years.
          </p>
          <Button variant="hero" size="xl" asChild><Link to="/contact">Get a Free Estimate<ArrowRight className="w-5 h-5" /></Link></Button>
        </div>
      </div>
    </section>

    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-heading font-bold mb-6">The Envelope That Protects Everything Inside</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Your home's exterior is the first thing visitors see and the only thing standing
              between your interior and the weather. A good exterior remodel does both jobs:
              modernizes the look and tightens the building envelope.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              We strip down to sheathing when it needs to come down, wrap properly, flash every
              opening, and re-clad with siding, stone, or whatever material fits the design. The
              result is a home that holds heat in winter, sheds water year-round, and looks brand-new
              from the curb.
            </p>
            <h3 className="text-xl font-heading font-bold mb-4">Exterior Work We Handle:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {services.map((s) => (<div key={s} className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-primary shrink-0" /><span className="text-sm">{s}</span></div>))}
            </div>
            <Button variant="default" size="lg" asChild><Link to="/contact">Request a Quote<ArrowRight className="w-4 h-4" /></Link></Button>
          </div>
          <div className="space-y-6">
            <img src={photos.sidingCrewInstall} alt="Siding installation in progress" className="rounded-lg shadow-xl w-full"  loading="lazy" decoding="async" />
            <img src={photos.exteriorStoneWallBuild} alt="Stone facade construction" className="rounded-lg shadow-xl w-full"  loading="lazy" decoding="async" />
          </div>
        </div>
      </div>
    </section>

    <section className="py-20 hero-gradient">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary-foreground mb-6">Time to Refresh the Exterior?</h2>
        <p className="text-secondary-foreground/80 max-w-2xl mx-auto mb-8">We'll walk the house, document what's behind the siding, and give you a real plan.</p>
        <Button variant="hero" size="xl" asChild><Link to="/contact">Get a Free Estimate<ArrowRight className="w-5 h-5" /></Link></Button>
      </div>
    </section>
  </Layout>
);

export default ExteriorRemodel;
