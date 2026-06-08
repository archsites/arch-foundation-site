import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Award, Users, Clock, Shield } from "lucide-react";
import Layout from "@/components/Layout";
import { photos } from "@/assets/projects";

const values = [
  {
    icon: Award,
    title: "Built by the Owner",
    description: "Yaqup runs every project personally — you talk to the builder, not a salesperson.",
  },
  {
    icon: Users,
    title: "One Crew, Start to Finish",
    description: "The same in-house team that frames your project also finishes it. No revolving door of subs.",
  },
  {
    icon: Clock,
    title: "Schedules We Honor",
    description: "We give you a realistic timeline up front and update you weekly so you're never guessing.",
  },
  {
    icon: Shield,
    title: "Fully Licensed & Insured",
    description: "Licensed in New Jersey and covered top to bottom — including workers' comp and liability.",
  },
];

const stats = [
  { number: "250+", label: "Homes Built or Renovated" },
  { number: "20+", label: "Years of Field Experience" },
  { number: "98%", label: "Referral-Driven Business" },
  { number: "A+", label: "BBB Accredited" },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-4">
            About Arch GC
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-secondary-foreground mb-6">
            A New Jersey General<br />Contractor You Can Trust
          </h1>
          <p className="text-lg text-secondary-foreground/80 max-w-3xl mx-auto">
            Arch General Contracting LLC builds additions, full renovations, and outdoor structures
            across New Jersey — with one in-house crew, one point of contact, and one standard for
            quality.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-4">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Started on the Tools. Still on the Tools.
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Arch GC was founded by Yaqup after more than two decades of framing, finishing, and
                project-managing other contractors' jobs. He started the company on a simple promise:
                show up when you say you will, build it the way you said you would, and never leave
                a homeowner chasing answers.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Today we're a small, deliberately tight-knit crew. We don't take on more work than
                we can supervise ourselves, which is why every Arch GC project gets the same level
                of hands-on attention — whether it's a covered patio or a two-story rear addition.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Most of our work comes from neighbors of past clients. That kind of growth only
                happens when the finished product holds up and the experience getting there is a
                good one. We take both seriously.
              </p>
              <div className="space-y-3">
                {[
                  "Owner on-site for every project",
                  "Written scope, written timeline, written warranty",
                  "Permits pulled in your name — we handle the paperwork",
                  "Daily site cleanup, weekly progress check-ins",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img src={photos.sidingCrewInstall} alt="Arch GC crew at work on a job site" className="rounded-lg shadow-2xl w-full" />
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-xl">
                <p className="text-4xl font-heading font-bold">250+</p>
                <p className="text-sm uppercase tracking-wider">Homes Built or Renovated</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-2">{stat.number}</p>
                <p className="text-primary-foreground/80 text-sm uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-4">
              How We Operate
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Why Homeowners Choose Arch GC
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're not the cheapest quote you'll get and we're not trying to be. We're the crew
              that actually finishes the job — on spec, on schedule, and to a standard we'd accept
              in our own homes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="bg-card p-6 rounded-lg card-elevated text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-bold mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img src={photos.kitchenModernIsland} alt="Finished kitchen by Arch GC" className="rounded-lg shadow-2xl w-full" />
            </div>
            <div className="order-1 lg:order-2">
              <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-4">
                Our Process
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                From First Walkthrough to Final Punch List
              </h2>
              <div className="space-y-6">
                {[
                  { step: "01", title: "Site Walk & Conversation", description: "We meet you at the project, ask the questions other contractors skip, and listen to what you actually want." },
                  { step: "02", title: "Scope & Itemized Estimate", description: "You get a clear written scope, a line-item budget, and a realistic build schedule — not a vague back-of-napkin number." },
                  { step: "03", title: "Permits, Materials, Build", description: "We pull the permits, coordinate the materials, and run the build day in, day out — with our own crew, not a rotating cast." },
                  { step: "04", title: "Walkthrough & Warranty", description: "Nothing's done until you say it's done. We walk every detail with you and back our work with a written workmanship warranty." },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="text-3xl font-heading font-bold text-primary/30">{item.step}</div>
                    <div>
                      <h3 className="font-heading text-lg font-bold mb-1">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary-foreground mb-6">
            Ready to Talk to a Real Builder?
          </h2>
          <p className="text-secondary-foreground/80 max-w-2xl mx-auto mb-8">
            We respond to every inquiry personally. Tell us about your project and we'll set up a
            no-cost site visit.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact">
              Get a Free Estimate
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default About;
