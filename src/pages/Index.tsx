import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, CheckCircle, Phone, Hammer, Home, Paintbrush, Wrench, Star, Send, Quote } from "lucide-react";
import Layout from "@/components/Layout";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import heroImage from "@/assets/hero-kitchen.jpg";
import craftsmanImage from "@/assets/craftsman.jpg";
import deckImage from "@/assets/deck.jpg";
import exteriorImage from "@/assets/exterior-remodel.jpg";
import bathroomImage from "@/assets/bathroom.jpg";
import basementImage from "@/assets/basement.jpg";
import additionImage from "@/assets/addition.jpg";
import kendallParkKitchen from "@/assets/gallery/kendall-park-kitchen-full.jpg";
import cherryHillShower from "@/assets/gallery/cherry-hill-shower-wide.jpg";
import princetonBasement from "@/assets/gallery/princeton-basement-1.jpg";
import somersetKitchen from "@/assets/gallery/somerset-kitchen-full.jpg";
import mtLaurelBathroom from "@/assets/gallery/mt-laurel-shower-enclosure.jpg";
import newBrunswickWindow from "@/assets/gallery/new-brunswick-bay-window-exterior.jpg";

const services = [
  {
    title: "Interior Remodel",
    description: "Transform your living spaces with custom kitchen, bathroom, and basement renovations.",
    icon: Home,
    href: "/services/interior",
    image: heroImage,
  },
  {
    title: "Exterior Remodel",
    description: "Enhance your home's curb appeal with siding, trim, and outdoor woodwork.",
    icon: Paintbrush,
    href: "/services/exterior",
    image: exteriorImage,
  },
  {
    title: "Additions",
    description: "Expand your living space with professionally built home additions.",
    icon: Hammer,
    href: "/services/additions",
    image: additionImage,
  },
  {
    title: "Decks & Patios",
    description: "Create the perfect outdoor living space with custom decks and patios.",
    icon: Wrench,
    href: "/services/decks",
    image: deckImage,
  },
];

const benefits = [
  "Licensed and Insured Professionals",
  "Free Detailed Estimates",
  "Quality Materials & Craftsmanship",
  "On-Time Project Completion",
  "10+ Years of Experience",
  "100% Satisfaction Guaranteed",
];

const reviews = [
  {
    name: "Michael R.",
    location: "Cherry Hill, NJ",
    rating: 5,
    text: "Pro Master Carpentry transformed our outdated kitchen into a modern masterpiece. The attention to detail and craftsmanship was exceptional. Highly recommend!",
    project: "Kitchen Remodel",
  },
  {
    name: "Sarah T.",
    location: "Haddonfield, NJ",
    rating: 5,
    text: "We hired them for a deck addition and couldn't be happier. Professional team, on time, and the quality is outstanding. Our neighbors are jealous!",
    project: "Deck Construction",
  },
  {
    name: "James & Lisa M.",
    location: "Voorhees, NJ",
    rating: 5,
    text: "From start to finish, the basement renovation was seamless. They communicated every step and delivered beyond our expectations.",
    project: "Basement Finishing",
  },
  {
    name: "Patricia D.",
    location: "Marlton, NJ",
    rating: 5,
    text: "Amazing work on our bathroom remodel! The custom cabinetry and tile work is beautiful. True craftsmen who take pride in their work.",
    project: "Bathroom Remodel",
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
  "Custom Carpentry",
];

const Index = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    service: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Save to database
      const { error } = await supabase
        .from('contact_submissions')
        .insert({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          location: formData.location.trim(),
          service: formData.service.trim(),
          message: formData.message.trim(),
        });

      if (error) throw error;

      // Send email notification
      await supabase.functions.invoke('send-contact-notification', {
        body: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          location: formData.location,
          service: formData.service,
          message: formData.message,
        },
      });

      setFormData({ name: "", email: "", phone: "", location: "", service: "", message: "" });
      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Beautiful kitchen remodel" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl animate-slide-up">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-4">
              Pro Master Carpentry LLC
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-secondary-foreground leading-tight mb-6">
              Transforming Houses Into{" "}
              <span className="text-gradient">Dream Homes</span>
            </h1>
            <p className="text-lg text-secondary-foreground/80 mb-8 leading-relaxed">
              From kitchens to basements, decks to additions — Pro Master does it all. 
              Quality craftsmanship you can trust for all your remodeling needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-start">
              <Button variant="hero" size="sm" className="text-xs sm:text-sm sm:h-12 sm:px-8" asChild>
                <Link to="/contact">
                  Get Free Estimate
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="sm" className="text-xs sm:text-sm sm:h-12 sm:px-8" asChild>
                <Link to="/services">Our Services</Link>
              </Button>
            </div>
            
            <div className="mt-10 flex items-center gap-4">
              <a href="tel:+16094010433" className="flex items-center gap-2 text-secondary-foreground hover:text-primary transition-colors">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-secondary-foreground/60 uppercase tracking-wider">Call Us Now</p>
                  <p className="font-semibold">(609) 401-0433</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-4">
              What We Do
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
              Our Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From simple repairs to complete home transformations, we bring expertise and 
              dedication to every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Link
                key={service.title}
                to={service.href}
                className="group card-elevated bg-card rounded-lg overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {service.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="default" size="lg" asChild>
              <Link to="/services">
                View All Services
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src={craftsmanImage} 
                alt="Master carpenter at work" 
                className="rounded-lg shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-xl">
                <p className="text-4xl font-heading font-bold">10+</p>
                <p className="text-sm uppercase tracking-wider">Years Experience</p>
              </div>
            </div>
            
            <div>
              <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-4">
                About Us
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Master Craftsmen Dedicated to Your Vision
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                At Pro Master Carpentry, we believe every home has untapped potential. 
                Our team of skilled craftsmen brings decades of combined experience to 
                transform your living spaces into something extraordinary.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Whether you're dreaming of a modern kitchen, a luxurious bathroom, or an 
                expanded living space, we have the expertise to bring your vision to life 
                with precision and care.
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
                  Learn More About Us
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-4">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
              What Our Clients Say
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our satisfied customers have to say 
              about their experience with Pro Master Carpentry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.map((review, index) => (
              <div 
                key={index}
                className="bg-card rounded-lg p-6 card-elevated relative"
              >
                <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  "{review.text}"
                </p>
                <div className="border-t border-border pt-4">
                  <p className="font-heading font-semibold">{review.name}</p>
                  <p className="text-xs text-muted-foreground">{review.location}</p>
                  <p className="text-xs text-primary mt-1">{review.project}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-4">
              Our Work
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Featured Projects
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Take a look at some of our recent transformations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[kendallParkKitchen, cherryHillShower, princetonBasement, somersetKitchen, mtLaurelBathroom, newBrunswickWindow].map((img, index) => (
              <div 
                key={index}
                className="aspect-[4/3] overflow-hidden rounded-lg group cursor-pointer"
              >
                <img 
                  src={img} 
                  alt={`Project ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="default" size="lg" asChild>
              <Link to="/gallery">
                View Full Gallery
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-4">
                Get In Touch
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Request a Free Estimate
              </h2>
              <p className="text-muted-foreground">
                Ready to start your project? Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </div>

            <div className="bg-card rounded-lg p-8 card-elevated">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="h-12"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(609) 401-0433"
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label htmlFor="location" className="block text-sm font-medium mb-2">
                      Location (City, State) *
                    </label>
                    <Input
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="Cherry Hill, NJ"
                      required
                      className="h-12"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium mb-2">
                    Service Type *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full h-12 px-4 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="">Select a service</option>
                    {serviceOptions.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Project Details *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    required
                    rows={4}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  variant="default" 
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-secondary-foreground mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-secondary-foreground/80 max-w-2xl mx-auto mb-8">
            Get a free, no-obligation estimate for your next remodeling project. 
            Our team is ready to bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Request Free Estimate
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="hero" size="xl" asChild>
              <a href="tel:+16094010433">
                <Phone className="w-5 h-5" />
                Call (609) 401-0433
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;