import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import Layout from "@/components/Layout";
import { photos } from "@/assets/projects";

const services = [
  "Primary Bath Gut Renovations",
  "Guest & Hall Bath Refreshes",
  "Frameless Glass Shower Enclosures",
  "Tile & Stone Surrounds",
  "Custom Vanities & Storage",
  "Heated Floors",
  "Tub-to-Shower Conversions",
  "Plumbing Reroutes & Fixture Upgrades",
  "Ventilation & Recessed Lighting",
  "Accessible / Aging-in-Place Builds",
];

const Bathrooms = () => (
  <Layout>
    <section className="relative min-h-[60vh] flex items-center">
      <div className="absolute inset-0">
        <img src={photos.bathroomGlassShower} alt="Bathroom remodel with frameless glass shower" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-transparent" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-4">Services</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-secondary-foreground mb-6">Bathroom Remodels</h1>
          <p className="text-lg text-secondary-foreground/80 mb-8">
            Watertight construction, clean tile work, and the kind of detail you only notice when it's missing — that's what separates an Arch GC bathroom from the rest.
          </p>
          <Button variant="hero" size="xl" asChild><Link to="/contact">Get a Free Estimate<ArrowRight className="w-5 h-5" /></Link></Button>
        </div>
      </div>
    </section>

    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-heading font-bold mb-6">Built Watertight from the Studs Out</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Most bathroom failures start behind the wall, not on the surface. Improper waterproofing,
              skipped membranes, and rushed tile prep show up six months later as cracked grout and
              soft subfloor. We don't cut those corners.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Every Arch GC bathroom gets proper backer board, waterproof membrane, level subfloor,
              and meticulous tile layout. You see the marble and the glass — but it's the work behind
              them that decides how long the room lasts.
            </p>
            <h3 className="text-xl font-heading font-bold mb-4">What We Build:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {services.map((s) => (<div key={s} className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-primary shrink-0" /><span className="text-sm">{s}</span></div>))}
            </div>
            <Button variant="default" size="lg" asChild><Link to="/contact">Request a Quote<ArrowRight className="w-4 h-4" /></Link></Button>
          </div>
          <div><img src={photos.bathroomGlassShower} alt="Completed bathroom" className="rounded-lg shadow-xl w-full" /></div>
        </div>
      </div>
    </section>

    <section className="py-20 hero-gradient">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary-foreground mb-6">Ready to Redo a Bathroom?</h2>
        <p className="text-secondary-foreground/80 max-w-2xl mx-auto mb-8">Book a free site visit and we'll talk through layout, tile, and budget — no pressure.</p>
        <Button variant="hero" size="xl" asChild><Link to="/contact">Get a Free Estimate<ArrowRight className="w-5 h-5" /></Link></Button>
      </div>
    </section>
  </Layout>
);

export default Bathrooms;
