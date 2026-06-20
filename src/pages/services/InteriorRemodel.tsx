import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import Layout from "@/components/Layout";
import { photos } from "@/assets/projects";

const services = [
  "Whole-Home Interior Renovations",
  "Open-Concept Wall Removals",
  "Hardwood & LVP Flooring",
  "Drywall, Skim Coat & Paint",
  "Trim, Crown & Wainscoting",
  "Custom Built-Ins & Shelving",
  "Staircase & Railing Rebuilds",
  "Fireplace Surrounds",
  "Doors, Windows & Casing",
  "Mudrooms & Storage Solutions",
];

const InteriorRemodel = () => (
  <Layout>
    <section className="relative min-h-[60vh] flex items-center">
      <div className="absolute inset-0">
        <img src={photos.interiorLivingDining} alt="Interior remodel" className="w-full h-full object-cover"  loading="lazy" decoding="async" />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-transparent" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-4">Services</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-secondary-foreground mb-6">Interior Remodels</h1>
          <p className="text-lg text-secondary-foreground/80 mb-8">
            From a single room to a full-house gut, we handle the framing, the finishes, and every detail that ties it all together.
          </p>
          <Button variant="hero" size="xl" asChild><Link to="/contact">Get a Free Estimate<ArrowRight className="w-5 h-5" /></Link></Button>
        </div>
      </div>
    </section>

    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-heading font-bold mb-6">Reshape the Way You Live in Your Home</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Walls in the wrong places. Floors that don't flow. Trim that's been painted six times.
              Most homes have great bones — they just need a thoughtful remodel to actually function
              the way today's families live.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              We've gut-renovated entire interiors and we've quietly upgraded single rooms. Either
              way, the work goes deeper than paint: layout changes, structural openings, proper
              flooring transitions, and trim that's mitered tight where it should be.
            </p>
            <h3 className="text-xl font-heading font-bold mb-4">Interior Scope We Cover:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {services.map((s) => (<div key={s} className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-primary shrink-0" /><span className="text-sm">{s}</span></div>))}
            </div>
            <Button variant="default" size="lg" asChild><Link to="/contact">Request a Quote<ArrowRight className="w-4 h-4" /></Link></Button>
          </div>
          <div className="grid grid-cols-2 gap-4 self-start">
            <img src={photos.basementHardwoodAlt} alt="Hardwood floor install" className="rounded-lg shadow-xl w-full h-full object-cover aspect-[3/4]"  loading="lazy" decoding="async" />
            <img src={photos.cabinetInstallTwo} alt="Custom built-in install" className="rounded-lg shadow-xl w-full h-full object-cover aspect-[3/4]"  loading="lazy" decoding="async" />
          </div>
        </div>
      </div>
    </section>

    <section className="py-20 hero-gradient">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary-foreground mb-6">Time for an Interior Refresh?</h2>
        <p className="text-secondary-foreground/80 max-w-2xl mx-auto mb-8">Tell us what's not working and we'll show you what's possible.</p>
        <Button variant="hero" size="xl" asChild><Link to="/contact">Get a Free Estimate<ArrowRight className="w-5 h-5" /></Link></Button>
      </div>
    </section>
  </Layout>
);

export default InteriorRemodel;
