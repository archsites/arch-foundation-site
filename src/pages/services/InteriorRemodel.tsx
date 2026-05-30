import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import Layout from "@/components/Layout";
import heroImage from "@/assets/hero-kitchen.jpg";
import bathroomImage from "@/assets/bathroom.jpg";
import basementImage from "@/assets/basement.jpg";

const services = [
  "Wall Paneling and Wainscoting",
  "Ceiling Beams and Coffered Ceilings",
  "Wood Accent Walls",
  "Custom Built-Ins",
  "Home Office and Study Rooms",
  "Under-Stair Storage Solutions",
  "Wine Cellars and Racks",
  "Fireplace Mantels and Surrounds",
  "Barn Door Installation",
  "Acoustic Wood Paneling",
  "Closet and Storage Solutions",
  "Shelving and Bookcase Construction",
];

const InteriorRemodel = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Interior remodel" 
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
              Interior Remodeling
            </h1>
            <p className="text-lg text-secondary-foreground/80 mb-8">
              Transform your living spaces with custom carpentry, built-ins, and 
              finishing work that brings your vision to life.
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
                Complete Interior Transformations
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                At Arch General Contracting, we specialize in transforming interior spaces 
                through expert craftsmanship. Whether you're looking to add character 
                with wainscoting and ceiling beams, create functional storage solutions, 
                or completely reimagine your living areas, our team has the skills to 
                make it happen.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                We work closely with homeowners to understand their vision and deliver 
                results that exceed expectations. From traditional designs to modern 
                aesthetics, we bring decades of experience to every interior project.
              </p>

              <h3 className="text-xl font-heading font-bold mb-4">
                Interior Services Include:
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

            <div className="space-y-6">
              <img 
                src={bathroomImage} 
                alt="Bathroom interior" 
                className="rounded-lg shadow-xl w-full"
              />
              <img 
                src={basementImage} 
                alt="Finished basement" 
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
            Ready to Transform Your Interior?
          </h2>
          <p className="text-secondary-foreground/80 max-w-2xl mx-auto mb-8">
            Contact us today for a free consultation and estimate on your interior 
            remodeling project.
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

export default InteriorRemodel;
