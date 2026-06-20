import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import Layout from "@/components/Layout";
import { photos } from "@/assets/projects";

const services = [
  "Covered Patios & Pavilions",
  "Pergolas & Trellises",
  "Composite Decks",
  "Pressure-Treated Wood Decks",
  "Concrete Pads & Footings",
  "Retaining Walls & Hardscape",
  "Outdoor Kitchens",
  "Privacy Screens & Railings",
  "Stairs & Multi-Level Builds",
  "Deck Repair & Re-Boarding",
];

const Decks = () => (
  <Layout>
    <section className="relative min-h-[60vh] flex items-center">
      <div className="absolute inset-0">
        <img src={photos.patioCoveredFramedSide} alt="Covered patio framing by Arch GC" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-transparent" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-4">Services</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-secondary-foreground mb-6">Decks & Patios</h1>
          <p className="text-lg text-secondary-foreground/80 mb-8">
            Outdoor structures built on real footings, with real framing — so what we put up still looks square ten summers from now.
          </p>
          <Button variant="hero" size="xl" asChild><Link to="/contact">Get a Free Estimate<ArrowRight className="w-5 h-5" /></Link></Button>
        </div>
      </div>
    </section>

    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          <div>
            <h2 className="text-3xl font-heading font-bold mb-6">Built Like an Addition, Used Like a Patio</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              A covered patio or pergola lives outside in every season — sun, freeze, thaw, storms.
              That's why we frame them like additions: proper footings below frost line, structural
              posts, real beam spans, and roofing tied into the house when it makes sense.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Whether it's a simple ground-level deck or a fully covered outdoor living room with
              power and lighting, we engineer it to last and finish it to look the part.
            </p>
            <h3 className="text-xl font-heading font-bold mb-4">What We Build Outdoors:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {services.map((s) => (<div key={s} className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-primary shrink-0" /><span className="text-sm">{s}</span></div>))}
            </div>
            <Button variant="default" size="lg" asChild><Link to="/contact">Request a Quote<ArrowRight className="w-4 h-4" /></Link></Button>
          </div>
          <div className="flex flex-col gap-6 min-h-0">
            <img src={photos.patioCoveredFramedFront} alt="Covered patio framing" className="rounded-lg shadow-xl w-full flex-1 object-cover min-h-0" />
            <img src={photos.patioRebarPad} alt="Patio concrete pad with rebar" className="rounded-lg shadow-xl w-full flex-1 object-cover min-h-0" />
          </div>

        </div>
      </div>
    </section>

    <section className="py-20 hero-gradient">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary-foreground mb-6">Designing Your Backyard?</h2>
        <p className="text-secondary-foreground/80 max-w-2xl mx-auto mb-8">Send us your ideas and we'll come price out the build — footings, framing, finish and all.</p>
        <Button variant="hero" size="xl" asChild><Link to="/contact">Get a Free Estimate<ArrowRight className="w-5 h-5" /></Link></Button>
      </div>
    </section>
  </Layout>
);

export default Decks;
