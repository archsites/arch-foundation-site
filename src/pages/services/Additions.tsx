import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import Layout from "@/components/Layout";
import { photos } from "@/assets/projects";

const services = [
  "Rear & Side Additions",
  "Second-Story Additions",
  "Great Room & Sunroom Builds",
  "Garage Additions & Conversions",
  "Master Suite Additions",
  "Mudroom & Entryway Expansions",
  "Foundation, Footings & Framing",
  "Roof Tie-In & Reframing",
  "Permits, Plans & Engineering Coordination",
  "Full Interior & Exterior Finish",
];

const Additions = () => (
  <Layout>
    <section className="relative min-h-[60vh] flex items-center">
      <div className="absolute inset-0">
        <img src={photos.additionRearComplete} alt="Two-story rear addition" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-transparent" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-4">Services</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-secondary-foreground mb-6">Home Additions</h1>
          <p className="text-lg text-secondary-foreground/80 mb-8">
            Outgrow your house without leaving it. We add the space you need — and tie it into your existing home so it looks like it was always there.
          </p>
          <Button variant="hero" size="xl" asChild><Link to="/contact">Get a Free Estimate<ArrowRight className="w-5 h-5" /></Link></Button>
        </div>
      </div>
    </section>

    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          <div>
            <h2 className="text-3xl font-heading font-bold mb-6">Engineered, Permitted, and Built to Match</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Additions are the most demanding work a contractor takes on. Foundations have to tie
              into existing structure, rooflines have to land cleanly, and the new space has to feel
              like part of the original house — not a bolt-on.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              We've delivered single-room bump-outs, full great rooms, and two-story rear additions
              across New Jersey. Every project starts with a real set of stamped plans, gets
              permitted in your municipality, and is built by our own crew start to finish.
            </p>
            <h3 className="text-xl font-heading font-bold mb-4">Addition Work We Handle:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {services.map((s) => (<div key={s} className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-primary shrink-0" /><span className="text-sm">{s}</span></div>))}
            </div>
            <Button variant="default" size="lg" asChild><Link to="/contact">Request a Quote<ArrowRight className="w-4 h-4" /></Link></Button>
          </div>
          <div className="flex flex-col gap-6 min-h-0">
            <img src={photos.additionGreatRoomVaulted} alt="Vaulted great room addition framing" className="rounded-lg shadow-xl w-full flex-1 object-cover min-h-0" />
            <img src={photos.additionFramingExterior} alt="Addition exterior framing" className="rounded-lg shadow-xl w-full flex-1 object-cover min-h-0" />
          </div>
        </div>
      </div>
    </section>

    <section className="py-20 hero-gradient">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary-foreground mb-6">Thinking About Adding On?</h2>
        <p className="text-secondary-foreground/80 max-w-2xl mx-auto mb-8">We'll walk the property, talk through what's feasible, and give you an honest budget range.</p>
        <Button variant="hero" size="xl" asChild><Link to="/contact">Get a Free Estimate<ArrowRight className="w-5 h-5" /></Link></Button>
      </div>
    </section>
  </Layout>
);

export default Additions;
