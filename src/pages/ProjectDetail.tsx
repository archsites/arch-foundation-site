import { useParams, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, MapPin, Calendar } from "lucide-react";
import Layout from "@/components/Layout";
import { photos } from "@/assets/projects";

type Project = {
  title: string;
  category: string;
  location: string;
  completedDate: string;
  description: string;
  details: string[];
  images: string[];
};

const projectsData: Record<string, Project> = {
  "1": {
    title: "Modern Kitchen Renovation",
    category: "Kitchens",
    location: "Central NJ",
    completedDate: "2024",
    description: "A full kitchen gut and rebuild for a family that wanted more counter space, a real island, and a layout that worked for everyday cooking. We removed the original soffit, reworked the cabinet layout, and installed quartz counters with a wraparound island that seats four.",
    details: [
      "Full demo of existing cabinetry and counters",
      "Custom cabinetry with soft-close hardware",
      "Quartz countertops with waterfall island edge",
      "Tile backsplash and under-cabinet lighting",
      "New plumbing rough-in for relocated sink",
      "Hardwood flooring throughout",
    ],
    images: [photos.kitchenModernIsland, photos.kitchenModernStove, photos.kitchenGraniteIsland, photos.cabinetInstallHardware],
  },
  "2": {
    title: "Warm Wood Kitchen Refresh",
    category: "Kitchens",
    location: "South Jersey",
    completedDate: "2023",
    description: "A budget-conscious kitchen update that kept the existing footprint but transformed the look. We refaced cabinetry, added a working island, and opened the sightline to the adjacent dining area.",
    details: [
      "Cabinet refacing with new wood doors and drawers",
      "Custom-built kitchen island",
      "Granite countertops",
      "New stainless appliance package",
      "Open sightline to dining room",
    ],
    images: [photos.kitchenWoodIsland, photos.kitchenWoodWide, photos.kitchenWoodOpen],
  },
  "3": {
    title: "Master Bath with Glass Enclosure",
    category: "Bathrooms",
    location: "Mt. Laurel, NJ",
    completedDate: "2024",
    description: "A primary bath taken down to the studs and rebuilt with a curbless glass shower, double vanity, and full tile work. Waterproofing and substrate work were redone from scratch.",
    details: [
      "Full demo and re-waterproofing",
      "Frameless glass shower enclosure",
      "Marble-look porcelain tile throughout",
      "Custom double vanity with quartz top",
      "Heated floor under tile",
      "Recessed and vanity lighting",
    ],
    images: [photos.bathroomGlassShower],
  },
  "4": {
    title: "Finished Basement with Custom Bar",
    category: "Basements",
    location: "Princeton, NJ",
    completedDate: "2024",
    description: "A poured-concrete basement converted into a full secondary living level. The build included a custom bar, hardwood-look flooring throughout, recessed lighting, and a guest bathroom rough-in.",
    details: [
      "Full insulation, framing, and vapor barrier",
      "Custom bar with cabinetry and beverage center",
      "Engineered hardwood flooring throughout",
      "Recessed lighting and entertainment wiring",
      "Guest bathroom with shower",
      "Egress window addition",
    ],
    images: [photos.basementOpenWide, photos.basementHardwood, photos.basementHardwoodAlt, photos.basementHallway, photos.basementCustomBar],
  },
  "5": {
    title: "Two-Story Rear Addition",
    category: "Additions",
    location: "Burlington County, NJ",
    completedDate: "2024",
    description: "A 1,200 square-foot rear addition adding a downstairs family room and an upstairs primary suite. Foundation, framing, mechanicals, and full interior and exterior finish were handled in house.",
    details: [
      "Full footings and foundation pour",
      "Two-story framing with structural ridge",
      "Roof tie-in to existing structure",
      "New HVAC zone and electrical sub-panel",
      "Matching siding and trim to existing home",
      "Full interior finish — drywall through paint",
    ],
    images: [photos.additionRearComplete, photos.additionRearMidBuild, photos.additionRearStoneWall, photos.additionBlueTarp, photos.additionFramingExterior, photos.additionGarageOver],
  },
  "6": {
    title: "Vaulted Great Room Addition",
    category: "Additions",
    location: "Cherry Hill, NJ",
    completedDate: "2024",
    description: "A great room addition with cathedral ceiling and a full wall of arched windows. Spray-foam insulation between the rafters keeps the vaulted space comfortable year-round.",
    details: [
      "Cathedral ceiling with exposed structural rafters",
      "Full arched window wall",
      "Closed-cell foam insulation on roof deck",
      "Hardwood flooring throughout",
      "Tied into existing HVAC and electrical",
    ],
    images: [photos.additionGreatRoomVaulted, photos.additionVaultedLadder, photos.additionPinkInsulation, photos.additionFramingArch, photos.additionCeilingFraming],
  },
  "7": {
    title: "Whole-House Interior Reframe",
    category: "Interior Remodel",
    location: "Central NJ",
    completedDate: "2023",
    description: "An older home taken down to its bones for a full interior overhaul. We rebuilt walls, replaced subfloor, ran new mechanicals, and finished every room to current code.",
    details: [
      "Full interior demo to studs",
      "New framing and door/window openings",
      "Complete electrical and plumbing rough-in",
      "New subfloor and drywall throughout",
      "Trim, flooring, and paint to finish",
    ],
    images: [photos.interiorFramingOpen, photos.interiorFramingDoor, photos.interiorFramingDeep, photos.interiorFramingHall, photos.interiorFramingClose, photos.cabinetInstallTwo],
  },
  "8": {
    title: "Stone-Front Exterior Transformation",
    category: "Exterior Remodel",
    location: "South Jersey",
    completedDate: "2024",
    description: "An exterior remodel that took a dated facade and gave it a modern stone-and-siding look. We rebuilt the front entry, added a stone veneer wall, and re-clad the rest of the home.",
    details: [
      "Full stone veneer facade installation",
      "Re-siding on remaining exterior",
      "New entry door and decorative trim",
      "Front retaining wall and walkway",
      "Updated lighting and house numbers",
    ],
    images: [photos.exteriorStoneFront, photos.exteriorStoneWallBuild, photos.exteriorBasketballHouse],
  },
  "9": {
    title: "Full Re-Siding & Wrap",
    category: "Exterior Remodel",
    location: "Burlington County, NJ",
    completedDate: "2023",
    description: "A full-perimeter tear-off and re-siding job. The original siding was removed, sheathing inspected and repaired, a new weather barrier wrapped, and modern vinyl siding installed.",
    details: [
      "Tear-off of original siding",
      "Sheathing repair and replacement where needed",
      "New house wrap with taped seams",
      "Vinyl siding installation",
      "New soffits, fascia, and gutter system",
    ],
    images: [photos.sidingCrewInstall, photos.sidingTyvekWrap, photos.exteriorBeigeHouse, photos.exteriorBlueHouse, photos.exteriorWhiteSide],
  },
  "10": {
    title: "Covered Outdoor Living Patio",
    category: "Decks & Patios",
    location: "Mt. Laurel, NJ",
    completedDate: "2024",
    description: "A covered patio addition that turned a flat lawn into a year-round outdoor living room. Built on poured-concrete footings with a structural roof tied to the rear of the home.",
    details: [
      "Concrete footings below frost line",
      "Structural pavilion framing",
      "Roof tied into existing rear elevation",
      "Tongue-and-groove ceiling",
      "Electrical for fan and recessed lighting",
      "Stone-clad column wraps",
    ],
    images: [photos.patioCoveredFramedFront, photos.patioCoveredFramedSide, photos.patioPergolaWide, photos.patioPergolaCloser],
  },
  "11": {
    title: "New Concrete Patio Build",
    category: "Decks & Patios",
    location: "South Jersey",
    completedDate: "2024",
    description: "Site prep, forming, rebar grid, and a full poured-concrete pad — the foundation for a future covered outdoor space.",
    details: [
      "Excavation and grading",
      "Form work and rebar grid",
      "Concrete pour and float",
      "Drainage and gravel base",
    ],
    images: [photos.patioRebarPad, photos.patioConcretePadOne, photos.patioConcretePadTwo, photos.foundationBlocksOne, photos.foundationBlocksTwo, photos.patioRearBackyard],
  },
  "12": {
    title: "Roof & Structural Replacement",
    category: "Exterior Remodel",
    location: "Central NJ",
    completedDate: "2023",
    description: "A storm-damaged roof replaced down to the decking. We pulled the existing shingles, replaced rotted sheathing, re-flashed every penetration, and installed a new architectural shingle system.",
    details: [
      "Tear-off to decking",
      "Sheathing replacement",
      "Ice and water shield at eaves",
      "New synthetic underlayment",
      "Architectural shingles with full ridge vent",
    ],
    images: [photos.roofingInProgress, photos.exteriorDemoExcavator, photos.additionSideAngle, photos.cabinetInstallHardware],
  },
  "13": {
    title: "Living & Dining Room Refresh",
    category: "Interior Remodel",
    location: "Burlington County, NJ",
    completedDate: "2023",
    description: "An interior refresh that opened up the main living level. We removed a non-load-bearing wall, refinished the floors, and reworked the trim package throughout.",
    details: [
      "Wall removal and header installation",
      "Hardwood floor refinishing",
      "New base, casing, and crown molding",
      "Repaint of full main level",
    ],
    images: [photos.interiorLivingDining, photos.interiorFireplace],
  },
};

const ProjectDetail = () => {
  const params = useParams({ strict: false }) as { id?: string };
  const project = params.id ? projectsData[params.id] : undefined;

  if (!project) {
    return (
      <Layout>
        <section className="py-32 container mx-auto px-4 text-center">
          <h1 className="text-3xl font-heading font-bold mb-4">Project Not Found</h1>
          <p className="text-muted-foreground mb-8">We couldn't find that project. Browse the full gallery instead.</p>
          <Button asChild><Link to="/gallery"><ArrowLeft className="w-4 h-4" /> Back to Gallery</Link></Button>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="relative py-24 hero-gradient">
        <div className="container mx-auto px-4">
          <Link to="/gallery" className="inline-flex items-center gap-2 text-secondary-foreground/80 hover:text-primary mb-6 text-sm">
            <ArrowLeft className="w-4 h-4" /> All Projects
          </Link>
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-4">
            {project.category}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-secondary-foreground mb-6 max-w-4xl">
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-6 text-secondary-foreground/80">
            <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /><span>{project.location}</span></div>
            <div className="flex items-center gap-2"><Calendar className="w-4 h-4 text-primary" /><span>Completed {project.completedDate}</span></div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-4">
              {project.images.map((img, i) => (
                <img key={i} src={img} alt={`${project.title} ${i + 1}`} className="w-full rounded-lg shadow-lg" />
              ))}
            </div>
            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                <div>
                  <h2 className="text-2xl font-heading font-bold mb-4">About the Project</h2>
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                </div>
                <div>
                  <h3 className="text-lg font-heading font-bold mb-4">Scope of Work</h3>
                  <ul className="space-y-2">
                    {project.details.map((d) => (
                      <li key={d} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-1">•</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button variant="default" size="lg" className="w-full" asChild>
                  <Link to="/contact">Start a Similar Project<ArrowRight className="w-4 h-4" /></Link>
                </Button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectDetail;
