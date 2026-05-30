import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import Layout from "@/components/Layout";
import { photos } from "@/assets/projects";

const services = [
  "Full Basement Finishing",
  "Egress Window Cuts & Wells",
  "Bathroom & Wet Bar Build-Outs",
  "Home Theaters & Lounges",
  "Home Gyms & Studios",
  "Insulated Framing & Vapor Barriers",
  "Drop & Drywall Ceilings",
  "LVP & Engineered Hardwood",
  "Custom Built-Ins & Wainscoting",
  "Sump Pump & Moisture Mitigation",
];

const Basements = () => (
  <Layout>
    <section className="relative min-h-[60vh] flex items-center">
      <div className="absolute inset-0">
        <img src={photos.basementOpenWide} alt="Finished basement by Arch GC" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-transparent" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-4">Services</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-secondary-foreground mb-6">Finished Basements</h1>
          <p className="text-lg text-secondary-foreground/80 mb-8">
            Turn the level no one uses into the level everyone hangs out on. Full living spaces, built dry, level, and to code.
          </p>
          <Button variant="hero" size="xl" asChild><Link to="/contact">Get a Free Estimate<ArrowRight className="w-5 h-5" /></Link></Button>
        </div>
      </div>
    </section>

    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-heading font-bold mb-6">The Square Footage You Already Paid For</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Finishing your basement is the cheapest way to add real, usable square footage to your
              home. The walls and roof are already there — it just takes the right framing,
              insulation, mechanicals, and finishes to bring it to life.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              We build basements as full living spaces: kitchenettes, bathrooms, theaters, gyms, and
              custom bars. Every job starts with moisture mitigation and proper vapor barriers, so
              what we finish stays finished.
            </p>
            <h3 className="text-xl font-heading font-bold mb-4">Scope We Handle:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {services.map((s) => (<div key={s} className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-primary shrink-0" /><span className="text-sm">{s}</span></div>))}
            </div>
            <Button variant="default" size="lg" asChild><Link to="/contact">Request a Quote<ArrowRight className="w-4 h-4" /></Link></Button>
          </div>
          <div className="space-y-6">
            <img src={photos.basementHardwood} alt="Finished basement room" className="rounded-lg shadow-xl w-full" />
            <img src={photos.basementCustomBar} alt="Custom basement bar" className="rounded-lg shadow-xl w-full" />
          </div>
        </div>
      </div>
    </section>

    <section className="py-20 hero-gradient">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary-foreground mb-6">Unlock the Whole Lower Level</h2>
        <p className="text-secondary-foreground/80 max-w-2xl mx-auto mb-8">Schedule a free walkthrough and we'll map out what's possible in your basement.</p>
        <Button variant="hero" size="xl" asChild><Link to="/contact">Get a Free Estimate<ArrowRight className="w-5 h-5" /></Link></Button>
      </div>
    </section>
  </Layout>
);

export default Basements;
