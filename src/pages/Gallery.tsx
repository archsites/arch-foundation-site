import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import { photos } from "@/assets/projects";

const categories = ["All", "Additions", "Kitchens", "Bathrooms", "Basements", "Interior Remodel", "Exterior Remodel", "Decks & Patios"];

const projects = [
  { id: "1", title: "Modern Kitchen Renovation", category: "Kitchens", image: photos.kitchenModernIsland, location: "Central NJ" },
  { id: "2", title: "Warm Wood Kitchen Refresh", category: "Kitchens", image: photos.kitchenWoodIsland, location: "South Jersey" },
  { id: "3", title: "Master Bath with Glass Enclosure", category: "Bathrooms", image: photos.bathroomGlassShower, location: "Mt. Laurel, NJ" },
  { id: "4", title: "Finished Basement with Custom Bar", category: "Basements", image: photos.basementOpenWide, location: "Princeton, NJ" },
  { id: "5", title: "Two-Story Rear Addition", category: "Additions", image: photos.additionRearComplete, location: "Burlington County, NJ" },
  { id: "6", title: "Vaulted Great Room Addition", category: "Additions", image: photos.additionGreatRoomVaulted, location: "Cherry Hill, NJ" },
  { id: "7", title: "Whole-House Interior Reframe", category: "Interior Remodel", image: photos.interiorFramingOpen, location: "Central NJ" },
  { id: "8", title: "Stone-Front Exterior Transformation", category: "Exterior Remodel", image: photos.exteriorStoneFront, location: "South Jersey" },
  { id: "9", title: "Full Re-Siding & Wrap", category: "Exterior Remodel", image: photos.sidingCrewInstall, location: "Burlington County, NJ" },
  { id: "10", title: "Covered Outdoor Living Patio", category: "Decks & Patios", image: photos.patioCoveredFramedFront, location: "Mt. Laurel, NJ" },
  { id: "11", title: "New Concrete Patio Build", category: "Decks & Patios", image: photos.patioRebarPad, location: "South Jersey" },
  { id: "12", title: "Roof & Structural Replacement", category: "Exterior Remodel", image: photos.roofingInProgress, location: "Central NJ" },
  { id: "13", title: "Living & Dining Room Refresh", category: "Interior Remodel", image: photos.interiorLivingDining, location: "Burlington County, NJ" },
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const filtered = selectedCategory === "All" ? projects : projects.filter((p) => p.category === selectedCategory);

  return (
    <Layout>
      <section className="relative py-24 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-4">Portfolio</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-secondary-foreground mb-6">Our Recent Builds</h1>
          <p className="text-lg text-secondary-foreground/80 max-w-3xl mx-auto">
            A look at additions, renovations, and outdoor builds Arch GC has wrapped recently across New Jersey.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2.5 rounded-full font-heading text-sm uppercase tracking-wider transition-all ${
                  selectedCategory === category ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project) => (
              <Link key={project.id} to={`/gallery/${project.id}`} className="group overflow-hidden rounded-lg card-elevated">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="p-4 bg-card">
                  <p className="text-xs text-primary uppercase tracking-wider mb-1">{project.category}</p>
                  <h3 className="font-heading font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{project.location}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">See Your Project Here Next</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Every build on this page started with a conversation. Yours can too — we offer free site visits and itemized estimates.
          </p>
          <Button variant="default" size="xl" asChild>
            <Link to="/contact">Get a Free Estimate<ArrowRight className="w-5 h-5" /></Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
