import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, CheckCircle, Phone, Hammer, Home, Paintbrush, Wrench, Star, Send, Quote } from "lucide-react";
import Layout from "@/components/Layout";
import { useToast } from "@/hooks/use-toast";
import { photos } from "@/assets/projects";

const services = [
  {
    title: "Interior Remodel",
    description: "Whole-home interior renovations — from framing and drywall to flooring, trim, and finish carpentry that ties every room together.",
    icon: Home,
    href: "/services/interior",
    image: photos.interiorLivingDining,
  },
  {
    title: "Exterior Remodel",
    description: "Siding, stone facades, roofing, and curb-appeal upgrades that protect your home and make it stand out on the block.",
    icon: Paintbrush,
    href: "/services/exterior",
    image: photos.exteriorStoneFront,
  },
  {
    title: "Additions",
    description: "Ground-up additions and second-story expansions built tight to code, finished to match the rest of your home seamlessly.",
    icon: Hammer,
    href: "/services/additions",
    image: photos.additionRearComplete,
  },
  {
    title: "Decks & Patios",
    description: "Covered patios, pergolas, and outdoor living spaces engineered to last decades, framed and finished by our in-house crew.",
    icon: Wrench,
    href: "/services/decks",
    image: photos.patioCoveredFramedSide,
  },
];

const benefits = [
  "Fully Licensed & Insured in NJ",
  "Free On-Site Project Estimates",
  "Crew-Built, Not Subcontracted Out",
  "Clear Timelines & Weekly Updates",
  "Proven Track Record Across NJ",
  "Workmanship Guaranteed in Writing",
];

const reviews = [
  {
    name: "Daniel K.",
    location: "Mt. Laurel, NJ",
    rating: 5,
    text: "Arch GC handled our two-story rear addition from foundation to final paint. The crew showed up every day, kept the site clean, and the finished space matches the rest of the house perfectly.",
    project: "Rear Addition",
  },
  {
    name: "Rebecca H.",
    location: "Cherry Hill, NJ",
    rating: 5,
    text: "We had three contractors quote our kitchen. Arch was the only one who walked us through the plan honestly and stuck to the number they gave us. The result speaks for itself.",
    project: "Kitchen Renovation",
  },
  {
    name: "The Alvarez Family",
    location: "Princeton, NJ",
    rating: 5,
    text: "Our basement was a concrete shell. Now it's a full living space with a custom bar and bathroom. Yaqup and his team treated our home like it was their own.",
    project: "Basement Build-Out",
  },
  {
    name: "Steve P.",
    location: "Burlington County, NJ",
    rating: 5,
    text: "Covered patio came out better than the renderings. Solid framing, real attention to the structural details, and they finished a week ahead of schedule.",
    project: "Covered Patio",
  },
];

const serviceOptions = [
  "Interior Remodel",
  "Exterior Remodel",
  "Additions",
  "Decks & Patios",
  "Kitchen Remodel",
  "Bathroom Remodel",
  "Basement Finishing",
  "General Contracting",
];

const featured = [
  photos.kitchenModernIsland,
  photos.bathroomGlassShower,
  photos.basementOpenWide,
  photos.exteriorStoneFront,
  photos.patioCoveredFramedFront,
  photos.kitchenGraniteIsland,
];

const Index = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", location: "", service: "", message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await new Promise((r) => setTimeout(r, 500));
      setFormData({ name: "", email: "", phone: "", location: "", service: "", message: "" });
      toast({ title: "Request received", description: "A member of the Arch GC team will be in touch shortly." });
    } catch {
      toast({ title: "Something went wrong", description: "Please try again or call us directly.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[80vh] md:min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <img src={photos.kitchenModernIsland} alt="Custom kitchen built by Arch General Contracting" className="w-full h-full object-cover" />
          {/* Mobile: near-solid navy overlay for legibility. Desktop: gradient. */}
          <div className="absolute inset-0 bg-secondary/80 md:hidden" />
          <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-secondary/95 via-secondary/80 to-transparent" />
        </div>
        <div className="container mx-auto px-4 relative z-10 py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10 items-center">
            <div className="lg:col-span-3 max-w-2xl animate-slide-up">
              <span className="inline-block text-white font-semibold text-xs sm:text-sm uppercase tracking-widest mb-3 sm:mb-4">
                Arch General Contracting LLC
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-secondary-foreground leading-tight mb-4 sm:mb-6">
                Built Right.{" "}
                <span className="text-gradient">Built to Last.</span>
              </h1>
              <p className="text-base sm:text-lg text-secondary-foreground/90 mb-6 sm:mb-8 leading-relaxed">
                New Jersey's trusted general contractor for additions, full remodels, and ground-up
                builds. One team handles your project end to end — from the first sketch to the final
                walkthrough.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-start">
                <Button variant="hero" size="sm" className="text-xs sm:text-sm sm:h-12 sm:px-8" asChild>
                  <Link to="/contact">
                    Get a Free Estimate
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button variant="heroOutline" size="sm" className="text-xs sm:text-sm sm:h-12 sm:px-8" asChild>
                  <Link to="/services">See What We Build</Link>
                </Button>
              </div>
              <div className="mt-6 sm:mt-10 flex items-center gap-4">
                <a href="tel:+16092841185" className="flex items-center gap-2 text-secondary-foreground hover:text-primary transition-colors">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-primary/30 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-xs text-secondary-foreground/70 uppercase tracking-wider">Talk to a Builder</p>
                    <p className="font-semibold text-sm sm:text-base">(609) 284-1185</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Compact contact form */}
            <div className="lg:col-span-2 w-full animate-slide-up">
              <div className="bg-card/95 backdrop-blur rounded-lg p-5 sm:p-6 card-elevated">
                <div className="mb-4">
                  <span className="inline-block text-primary font-semibold text-xs uppercase tracking-widest mb-1">
                    Start Your Project
                  </span>
                  <h2 className="text-lg sm:text-xl font-heading font-bold">Request a Free Estimate</h2>
                </div>
                <form onSubmit={handleSubmit} className="space-y-3">
                  <Input name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" required className="h-10" />
                  <Input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Email" required className="h-10" />
                  <Input name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="Phone" required className="h-10" />
                  <select name="service" value={formData.service} onChange={handleChange} required aria-label="Project Type" className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                    <option value="">Project Type</option>
                    {serviceOptions.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                  <Textarea name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about the project..." required rows={3} />
                  <Button type="submit" variant="default" size="default" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : (<>Send Request<Send className="w-4 h-4" /></>)}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* (Previously a large "Start Your Project" form section lived here — moved into the hero) */}

      {/* Services */}
      <section className="py-12 md:py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-16">
            <span className="inline-block text-primary font-semibold text-xs sm:text-sm uppercase tracking-widest mb-3 md:mb-4">
              What We Build
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-3 md:mb-4">
              General Contracting, Done in House
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
              Whether you're adding 800 square feet or refinishing every room, our crew manages the
              framing, the finish work, and everything in between.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {services.map((service, index) => (
              <Link key={service.title} to={service.href} className="group card-elevated bg-card rounded-lg overflow-hidden" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="p-3 sm:p-6">
                  <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2 sm:mb-4">
                    <service.icon className="w-4 h-4 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-sm sm:text-xl font-bold mb-1 sm:mb-2 group-hover:text-primary transition-colors leading-tight">{service.title}</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm line-clamp-3 sm:line-clamp-none">{service.description}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8 md:mt-12">
            <Button variant="default" size="lg" asChild>
              <Link to="/services">
                Browse All Services
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About preview */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img src={photos.sidingCrewInstall} alt="Arch GC crew installing siding on a home" className="rounded-lg shadow-2xl w-full" />
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-xl">
                <p className="text-4xl font-heading font-bold">20+</p>
                <p className="text-sm uppercase tracking-wider">Years on the Tools</p>
              </div>
            </div>
            <div>
              <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-4">
                Who We Are
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                A Hands-On General Contractor You Can Actually Reach
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Arch GC isn't a sales office that hands your project off to whoever's free. Yaqup
                and his crew are on every job site, swinging hammers and signing off on every detail
                before it gets called done.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                We've spent more than a decade earning a reputation across New Jersey
                for honest pricing, clean job sites, and finished work that holds up long after the
                final invoice is paid.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {benefits.slice(0, 4).map((benefit) => (
                  <div key={benefit} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
              <Button variant="default" size="lg" asChild>
                <Link to="/about">
                  Get to Know Arch GC
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-12 md:py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-16">
            <span className="inline-block text-primary font-semibold text-xs sm:text-sm uppercase tracking-widest mb-3 md:mb-4">
              Owner Feedback
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-3 md:mb-4">
              What Homeowners Tell Us
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
              We grow almost entirely through referrals. Here's what some of our recent clients had
              to say after move-in day.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {reviews.map((review, index) => (
              <div key={index} className="bg-card rounded-lg p-4 sm:p-6 card-elevated relative">
                <Quote className="absolute top-3 right-3 sm:top-4 sm:right-4 w-6 h-6 sm:w-8 sm:h-8 text-primary/20" />
                <div className="flex gap-1 mb-3 sm:mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 sm:w-5 sm:h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed line-clamp-5 sm:line-clamp-none">"{review.text}"</p>
                <div className="border-t border-border pt-3 sm:pt-4">
                  <p className="font-heading font-semibold text-sm sm:text-base">{review.name}</p>
                  <p className="text-[11px] sm:text-xs text-muted-foreground">{review.location}</p>
                  <p className="text-[11px] sm:text-xs text-primary mt-1">{review.project}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery preview */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <span className="inline-block text-primary font-semibold text-xs sm:text-sm uppercase tracking-widest mb-3 md:mb-4">
              Recent Work
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-3 md:mb-4">From the Job Site</h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
              A snapshot of recently finished kitchens, baths, basements, additions, and outdoor builds.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {featured.map((img, index) => (
              <div key={index} className="aspect-[4/3] overflow-hidden rounded-lg group cursor-pointer">
                <img src={img} alt={`Arch GC project ${index + 1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
            ))}
          </div>

          <div className="text-center mt-8 md:mt-12">
            <Button variant="default" size="lg" asChild>
              <Link to="/gallery">
                See the Full Portfolio
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>


      {/* CTA */}
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-secondary-foreground mb-6">
            Have a Project in Mind?
          </h2>
          <p className="text-secondary-foreground/80 max-w-2xl mx-auto mb-8">
            Estimates are free and there's no pressure. We'll walk the site, talk through your
            options, and give you a number you can plan around.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Request an Estimate
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="hero" size="xl" asChild>
              <a href="tel:+16092841185">
                <Phone className="w-5 h-5" />
                Call (609) 284-1185
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
