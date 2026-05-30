import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import Layout from "@/components/Layout";
import additionImage from "@/assets/addition.jpg";

const services = [
  "Room Additions",
  "Second Story Additions",
  "Garage Conversions",
  "Sunroom Construction",
  "In-Law Suites",
  "Home Office Additions",
  "Master Suite Additions",
  "Framing and Structural Work",
  "Foundation Work",
  "Permit Management",
];

const Additions = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <img 
            src={additionImage} 
            alt="Home addition" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-4">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-secondary-foreground mb-6">
              Home Additions
            </h1>
            <p className="text-lg text-secondary-foreground/80 mb-8">
              Expand your living space with professionally built additions that 
              seamlessly blend with your existing home.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Get Free Estimate
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-heading font-bold mb-6">
                Expand Your Living Space
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Need more room? Pro Master Carpentry specializes in building high-quality 
                home additions that seamlessly integrate with your existing structure. 
                Whether you need an extra bedroom, a home office, or a complete second 
                story, we have the expertise to make it happen.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Our experienced team handles everything from initial design and permits 
                to framing and finishing. We ensure your addition looks and feels like 
                it was always part of your home.
              </p>

              <h3 className="text-xl font-heading font-bold mb-4">
                Addition Services Include:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {services.map((service) => (
                  <div key={service} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm">{service}</span>
                  </div>
                ))}
              </div>

              <Button variant="default" size="lg" asChild>
                <Link to="/contact">
                  Request a Quote
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>

            <div>
              <img 
                src={additionImage} 
                alt="Home addition construction" 
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary-foreground mb-6">
            Ready to Expand Your Home?
          </h2>
          <p className="text-secondary-foreground/80 max-w-2xl mx-auto mb-8">
            Contact us today for a free consultation and estimate on your addition project.
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

export default Additions;
