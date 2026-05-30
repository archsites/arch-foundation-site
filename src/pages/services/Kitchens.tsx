import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import Layout from "@/components/Layout";
import { photos } from "@/assets/projects";

const services = [
  "Full Kitchen Gut & Rebuild",
  "Custom Cabinetry & Islands",
  "Quartz & Granite Countertops",
  "Tile Backsplashes",
  "Layout Reconfigurations",
  "Pantry & Storage Solutions",
  "Under-Cabinet & Recessed Lighting",
  "Hardwood & Tile Flooring",
  "Appliance Coordination",
  "Plumbing & Electrical Rough-In",
];

const Kitchens = () => (
  <Layout>
    <section className="relative min-h-[60vh] flex items-center">
      <div className="absolute inset-0">
        <img src={photos.kitchenModernIsland} alt="Modern kitchen renovation by Arch GC" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-transparent" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-4">Services</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-secondary-foreground mb-6">Kitchen Renovations</h1>
          <p className="text-lg text-secondary-foreground/80 mb-8">
            Custom cabinetry, stone countertops, and the structural work to make it all fit — handled by one crew, from demo to the final outlet cover.
          </p>
          <Button variant="hero" size="xl" asChild><Link to="/contact">Get a Free Estimate<ArrowRight className="w-5 h-5" /></Link></Button>
        </div>
      </div>
    </section>

    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-heading font-bold mb-6">The Room You Actually Live In</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Kitchens are the most-used room in the house and the toughest to get right. There's
              cabinetry, plumbing, electrical, gas, tile, stone, and appliance coordination — all
              squeezed into the same square footage and all expected to look perfect when it's done.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Arch GC manages every one of those trades in house. That means fewer change orders,
              cleaner transitions between phases, and a finished kitchen that holds up to the next
              twenty years of family dinners.
            </p>
            <h3 className="text-xl font-heading font-bold mb-4">What's Included:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {services.map((s) => (<div key={s} className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-primary shrink-0" /><span className="text-sm">{s}</span></div>))}
            </div>
            <Button variant="default" size="lg" asChild><Link to="/contact">Request a Quote<ArrowRight className="w-4 h-4" /></Link></Button>
          </div>
          <div className="space-y-6">
            <img src={photos.kitchenModernStove} alt="Kitchen stove and counter detail" className="rounded-lg shadow-xl w-full" />
            <img src={photos.kitchenGraniteIsland} alt="Granite kitchen island" className="rounded-lg shadow-xl w-full" />
          </div>
        </div>
      </div>
    </section>

    <section className="py-20 hero-gradient">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary-foreground mb-6">Planning a Kitchen Project?</h2>
        <p className="text-secondary-foreground/80 max-w-2xl mx-auto mb-8">Tell us what you have in mind and we'll come measure the space and build a real budget around it.</p>
        <Button variant="hero" size="xl" asChild><Link to="/contact">Get a Free Estimate<ArrowRight className="w-5 h-5" /></Link></Button>
      </div>
    </section>
  </Layout>
);

export default Kitchens;
