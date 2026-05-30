import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import Layout from "@/components/Layout";
import exteriorImage from "@/assets/exterior-remodel.jpg";

const services = [
  "Siding and Exterior Woodwork",
  "Pergolas and Gazebo Construction",
  "Outdoor Kitchen Carpentry",
  "Deck and Patio Construction",
  "Exterior Trim and Molding",
  "Fence Installation",
  "Garage and Workshop Storage",
  "Exterior Door Installation",
  "Window Trim and Surrounds",
  "Outdoor Living Spaces",
];

const ExteriorRemodel = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <img 
            src={exteriorImage} 
            alt="Exterior remodel" 
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
              Exterior Remodeling
            </h1>
            <p className="text-lg text-secondary-foreground/80 mb-8">
              Enhance your home's curb appeal and outdoor living spaces with 
              professional exterior carpentry and construction.
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
                Transform Your Home's Exterior
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Your home's exterior is the first thing people see. Arch GC 
                Carpentry specializes in creating stunning outdoor spaces and 
                enhancing curb appeal through quality exterior work.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                From custom siding and trim work to pergolas and outdoor kitchens, 
                we bring the same attention to detail to exterior projects as we 
                do to interior work.
              </p>

              <h3 className="text-xl font-heading font-bold mb-4">
                Exterior Services Include:
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
                src={exteriorImage} 
                alt="Exterior remodel" 
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
            Ready to Enhance Your Home's Exterior?
          </h2>
          <p className="text-secondary-foreground/80 max-w-2xl mx-auto mb-8">
            Contact us today for a free consultation and estimate.
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

export default ExteriorRemodel;
