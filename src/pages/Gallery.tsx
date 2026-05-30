import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import princetonBasement1 from "@/assets/gallery/princeton-basement-1.jpg";
import gymBasementGym from "@/assets/gallery/gym-basement-gym.jpg";
import mtLaurelVanity from "@/assets/gallery/mt-laurel-bathroom-vanity.jpg";
import moorestownFull from "@/assets/gallery/moorestown-bathroom-full.jpg";
import washingtonTwpFull from "@/assets/gallery/washington-twp-bathroom-full.jpg";
import voorheesFull from "@/assets/gallery/voorhees-bathroom-full.jpg";
import burlingtonLed from "@/assets/gallery/burlington-bathroom-led.jpg";
import cherryHillVanity from "@/assets/gallery/cherry-hill-vanity.jpg";
import cinnaminsonVanity from "@/assets/gallery/cinnaminson-vanity.jpg";
import medfordBookshelfFront from "@/assets/gallery/medford-bookshelf-front.jpg";
import delranRoomBlue from "@/assets/gallery/delran-room-blue.jpg";
import moorestownDoor from "@/assets/gallery/moorestown-door.jpg";
import willingboroGazeboSide from "@/assets/gallery/willingboro-gazebo-side.jpg";
import somersetKitchenFull from "@/assets/gallery/somerset-kitchen-full.jpg";
import mtLaurelKitchenFull from "@/assets/gallery/mt-laurel-kitchen-full.jpg";
import westhamptonRusticFull from "@/assets/gallery/westhampton-rustic-full.jpg";
import kendallParkKitchenFull from "@/assets/gallery/kendall-park-kitchen-full.jpg";
import eveshamStaircaseFront from "@/assets/gallery/evesham-staircase-front.jpg";
import haddonfieldBathroomFull from "@/assets/gallery/haddonfield-bathroom-full.jpg";
import laurelSpringsFireplace from "@/assets/gallery/laurel-springs-fireplace.jpg";
import gibbsboroBarnDoor from "@/assets/gallery/gibbsboro-barn-door.jpg";
import audubonCloset from "@/assets/gallery/audubon-walk-in-closet.jpg";
import newBrunswickBayExterior from "@/assets/gallery/new-brunswick-bay-window-exterior.jpg";

const categories = [
  "All",
  "Basements",
  "Bathrooms",
  "Kitchens",
  "Carpentry",
  "Exterior Remodel",
  "Interior Remodel",
];

const projects = [
  { id: "1", title: "Full Basement Finish with Kitchen & Bath", category: "Basements", image: princetonBasement1, location: "Princeton, NJ" },
  { id: "2", title: "Basement Suite with Gym & Kitchenette", category: "Basements", image: gymBasementGym, location: "South Jersey" },
  { id: "3", title: "Bathroom & Shower Remodel", category: "Bathrooms", image: mtLaurelVanity, location: "Mt. Laurel, NJ" },
  { id: "4", title: "Bathroom Remodel with Skylight Shower", category: "Bathrooms", image: moorestownFull, location: "Moorestown, NJ" },
  { id: "5", title: "Full Bathroom Remodel", category: "Bathrooms", image: washingtonTwpFull, location: "Washington Township, NJ" },
  { id: "6", title: "Black & White Bathroom Remodel", category: "Bathrooms", image: voorheesFull, location: "Voorhees, NJ" },
  { id: "7", title: "Modern Bathroom with LED Mirror", category: "Bathrooms", image: burlingtonLed, location: "Burlington, NJ" },
  { id: "8", title: "Master Bathroom with Freestanding Tub", category: "Bathrooms", image: cherryHillVanity, location: "Burlington County, NJ" },
  { id: "9", title: "Master Bath with Soaking Tub & Shower", category: "Bathrooms", image: cinnaminsonVanity, location: "Cinnaminson, NJ" },
  { id: "10", title: "Custom Built-In Bookshelf Unit", category: "Carpentry", image: medfordBookshelfFront, location: "Medford, NJ" },
  { id: "11", title: "Flooring & Painting Refresh", category: "Interior Remodel", image: delranRoomBlue, location: "Delran, NJ" },
  { id: "12", title: "Front Door Replacement", category: "Exterior Remodel", image: moorestownDoor, location: "Moorestown, NJ" },
  { id: "13", title: "Screened-In Gazebo Addition", category: "Exterior Remodel", image: willingboroGazeboSide, location: "Willingboro, NJ" },
  { id: "14", title: "Modern Wood Kitchen Renovation", category: "Kitchens", image: somersetKitchenFull, location: "Somerset, NJ" },
  { id: "15", title: "Two-Tone Kitchen Remodel", category: "Kitchens", image: mtLaurelKitchenFull, location: "Mt. Laurel, NJ" },
  { id: "16", title: "Rustic Kitchen Renovation", category: "Kitchens", image: westhamptonRusticFull, location: "Westhampton, NJ" },
  { id: "17", title: "Classic White Kitchen Remodel", category: "Kitchens", image: kendallParkKitchenFull, location: "Kendall Park, NJ" },
  { id: "18", title: "Custom Staircase Remodel", category: "Interior Remodel", image: eveshamStaircaseFront, location: "Evesham, NJ" },
  { id: "19", title: "Marble Walk-In Shower Bathroom", category: "Bathrooms", image: haddonfieldBathroomFull, location: "Haddonfield, NJ" },
  { id: "20", title: "Custom Fireplace & Living Room", category: "Interior Remodel", image: laurelSpringsFireplace, location: "Laurel Springs, NJ" },
  { id: "21", title: "Glass Sliding Barn Door", category: "Interior Remodel", image: gibbsboroBarnDoor, location: "Gibbsboro, NJ" },
  { id: "22", title: "Custom Walk-In Closet", category: "Interior Remodel", image: audubonCloset, location: "Audubon, NJ" },
  { id: "23", title: "Bay Window & Sitting Area", category: "Exterior Remodel", image: newBrunswickBayExterior, location: "New Brunswick, NJ" },
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-4">
            Our Work
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-secondary-foreground mb-6">
            Project Gallery
          </h1>
          <p className="text-lg text-secondary-foreground/80 max-w-3xl mx-auto">
            Browse through our portfolio of completed projects and see the quality 
            of work that sets Arch General Contracting apart.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2.5 rounded-full font-heading text-sm uppercase tracking-wider transition-all ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <Link
                key={project.id}
                to={`/gallery/${project.id}`}
                className="group overflow-hidden rounded-lg card-elevated"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-4 bg-card">
                  <p className="text-xs text-primary uppercase tracking-wider mb-1">
                    {project.category}
                  </p>
                  <h3 className="font-heading font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">{project.location}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Let us help you create your dream space. Contact us today for a free 
            consultation and estimate.
          </p>
          <Button variant="default" size="xl" asChild>
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

export default Gallery;
