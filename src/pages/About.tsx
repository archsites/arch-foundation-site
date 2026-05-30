import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Award, Users, Clock, Shield } from "lucide-react";
import Layout from "@/components/Layout";
import craftsmanImage from "@/assets/craftsman.jpg";
import heroImage from "@/assets/hero-kitchen.jpg";

const values = [
  {
    icon: Award,
    title: "Quality Craftsmanship",
    description: "We take pride in delivering exceptional work that stands the test of time.",
  },
  {
    icon: Users,
    title: "Customer Focused",
    description: "Your satisfaction is our top priority from start to finish.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "We respect your time and always strive to complete projects on schedule.",
  },
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "Fully licensed and insured for your peace of mind.",
  },
];

const stats = [
  { number: "500+", label: "Projects Completed" },
  { number: "10+", label: "Years Experience" },
  { number: "100%", label: "Satisfaction Rate" },
  { number: "50+", label: "5-Star Reviews" },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-4">
            About Us
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-secondary-foreground mb-6">
            Master Craftsmen<br />Building Your Dreams
          </h1>
          <p className="text-lg text-secondary-foreground/80 max-w-3xl mx-auto">
            Arch General Contracting LLC is dedicated to transforming homes with exceptional 
            craftsmanship and attention to detail.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-4">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Building Excellence Since Day One
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Arch General Contracting was founded with a simple mission: to deliver outstanding 
                craftsmanship that exceeds expectations. What started as a small operation has 
                grown into a trusted name in home remodeling and carpentry services.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our team of skilled craftsmen brings decades of combined experience to every 
                project. We believe that attention to detail and quality materials are the 
                foundation of lasting work. That's why we never cut corners and always use 
                the best materials available.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                From simple repairs to complete home transformations, we approach every job 
                with the same level of dedication and professionalism. Our customers trust us 
                to turn their visions into reality, and we take that responsibility seriously.
              </p>
              
              <div className="space-y-3">
                {[
                  "Licensed and fully insured professionals",
                  "Quality materials on every project",
                  "Clear communication throughout",
                  "Clean job sites and respect for your home",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={craftsmanImage} 
                alt="Craftsman at work" 
                className="rounded-lg shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-xl">
                <p className="text-4xl font-heading font-bold">500+</p>
                <p className="text-sm uppercase tracking-wider">Happy Customers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-2">
                  {stat.number}
                </p>
                <p className="text-primary-foreground/80 text-sm uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-4">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              What Sets Us Apart
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're not just another remodeling company. Here's what makes Arch GC 
              Carpentry the right choice for your project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div 
                key={value.title}
                className="bg-card p-6 rounded-lg card-elevated text-center"
              >
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

      {/* Team/Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src={heroImage} 
                alt="Beautiful completed project" 
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
            
            <div className="order-1 lg:order-2">
              <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-4">
                Our Process
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                How We Work
              </h2>
              
              <div className="space-y-6">
                {[
                  {
                    step: "01",
                    title: "Consultation",
                    description: "We start by understanding your vision, needs, and budget through a free consultation.",
                  },
                  {
                    step: "02",
                    title: "Planning & Design",
                    description: "Our team creates a detailed plan and provides a comprehensive estimate.",
                  },
                  {
                    step: "03",
                    title: "Construction",
                    description: "We execute the project with precision, keeping you informed every step of the way.",
                  },
                  {
                    step: "04",
                    title: "Final Walkthrough",
                    description: "We ensure everything meets your expectations before considering the job complete.",
                  },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="text-3xl font-heading font-bold text-primary/30">
                      {item.step}
                    </div>
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

      {/* CTA Section */}
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary-foreground mb-6">
            Let's Build Something Amazing
          </h2>
          <p className="text-secondary-foreground/80 max-w-2xl mx-auto mb-8">
            Ready to transform your space? Contact us today for a free consultation 
            and estimate.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact">
              Get Free Estimate
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default About;
