import { useParams, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, MapPin, Calendar } from "lucide-react";
import Layout from "@/components/Layout";
import princetonBasement1 from "@/assets/gallery/princeton-basement-1.jpg";
import princetonBasement2 from "@/assets/gallery/princeton-basement-2.jpg";
import princetonBasement3 from "@/assets/gallery/princeton-basement-3.jpg";
import princetonBasement4 from "@/assets/gallery/princeton-basement-4.jpg";
import princetonBasement5 from "@/assets/gallery/princeton-basement-5.jpg";

import gymBasementGym from "@/assets/gallery/gym-basement-gym.jpg";
import gymBasementLounge from "@/assets/gallery/gym-basement-lounge.jpg";
import gymBasementKitchen from "@/assets/gallery/gym-basement-kitchen.jpg";
import gymBasementVanity from "@/assets/gallery/gym-basement-vanity.jpg";
import gymBasementShower from "@/assets/gallery/gym-basement-shower.jpg";
import gymBasementTv from "@/assets/gallery/gym-basement-tv.jpg";

import mtLaurelVanity from "@/assets/gallery/mt-laurel-bathroom-vanity.jpg";
import mtLaurelShowerDetail from "@/assets/gallery/mt-laurel-shower-detail.jpg";
import mtLaurelShowerEnclosure from "@/assets/gallery/mt-laurel-shower-enclosure.jpg";

import moorestownFull from "@/assets/gallery/moorestown-bathroom-full.jpg";
import moorestownEnclosure from "@/assets/gallery/moorestown-shower-enclosure.jpg";
import moorestownDetail from "@/assets/gallery/moorestown-shower-detail.jpg";
import moorestownFloor from "@/assets/gallery/moorestown-shower-floor.jpg";

import washingtonTwpFull from "@/assets/gallery/washington-twp-bathroom-full.jpg";
import washingtonTwpShower from "@/assets/gallery/washington-twp-shower.jpg";
import washingtonTwpVanity from "@/assets/gallery/washington-twp-vanity.jpg";

import voorheesFull from "@/assets/gallery/voorhees-bathroom-full.jpg";
import voorheesVanity from "@/assets/gallery/voorhees-vanity.jpg";
import voorheesNiche from "@/assets/gallery/voorhees-shower-niche.jpg";
import voorheesVanityAngle from "@/assets/gallery/voorhees-vanity-angle.jpg";
import voorheesOverview from "@/assets/gallery/voorhees-overview.jpg";

import burlingtonLed from "@/assets/gallery/burlington-bathroom-led.jpg";
import burlingtonFull from "@/assets/gallery/burlington-full-view.jpg";
import burlingtonVanity from "@/assets/gallery/burlington-vanity.jpg";
import burlingtonShower from "@/assets/gallery/burlington-shower.jpg";

import cherryHillShowerFront from "@/assets/gallery/cherry-hill-shower-front.jpg";
import cherryHillShowerDetail from "@/assets/gallery/cherry-hill-shower-detail.jpg";
import cherryHillVanity from "@/assets/gallery/cherry-hill-vanity.jpg";
import cherryHillTub from "@/assets/gallery/cherry-hill-tub.jpg";
import cherryHillShowerWide from "@/assets/gallery/cherry-hill-shower-wide.jpg";
import cherryHillNiche from "@/assets/gallery/cherry-hill-niche.jpg";
import cherryHillHalfBath from "@/assets/gallery/cherry-hill-half-bath.jpg";
import cherryHillVanityWide from "@/assets/gallery/cherry-hill-vanity-wide.jpg";
import cherryHillTubFront from "@/assets/gallery/cherry-hill-tub-front.jpg";

import cinnaminsonVanity from "@/assets/gallery/cinnaminson-vanity.jpg";
import cinnaminsonShowerTub from "@/assets/gallery/cinnaminson-shower-tub.jpg";
import cinnaminsonShowerWide from "@/assets/gallery/cinnaminson-shower-wide.jpg";

import medfordBookshelfFront from "@/assets/gallery/medford-bookshelf-front.jpg";
import medfordBookshelfCorner from "@/assets/gallery/medford-bookshelf-corner.jpg";
import medfordBookshelfWall from "@/assets/gallery/medford-bookshelf-wall.jpg";
import medfordBookshelfAbove from "@/assets/gallery/medford-bookshelf-above.jpg";
import medfordBookshelfTop from "@/assets/gallery/medford-bookshelf-top.jpg";

import delranRoomBlue from "@/assets/gallery/delran-room-blue.jpg";
import delranRoomTeal from "@/assets/gallery/delran-room-teal.jpg";
import delranRoomNeutral from "@/assets/gallery/delran-room-neutral.jpg";

import moorestownDoor from "@/assets/gallery/moorestown-door.jpg";

import willingboroGazeboSide from "@/assets/gallery/willingboro-gazebo-side.jpg";
import willingboroGazeboFull from "@/assets/gallery/willingboro-gazebo-full.jpg";

import somersetKitchenFull from "@/assets/gallery/somerset-kitchen-full.jpg";
import somersetKitchenIsland1 from "@/assets/gallery/somerset-kitchen-island-1.jpg";
import somersetKitchenIsland2 from "@/assets/gallery/somerset-kitchen-island-2.jpg";
import somersetKitchenCounter from "@/assets/gallery/somerset-kitchen-counter.jpg";
import somersetKitchenSink from "@/assets/gallery/somerset-kitchen-sink.jpg";
import somersetKitchenDishwasher from "@/assets/gallery/somerset-kitchen-dishwasher.jpg";
import somersetKitchenStove from "@/assets/gallery/somerset-kitchen-stove.jpg";
import somersetKitchenWide from "@/assets/gallery/somerset-kitchen-wide.jpg";
import somersetKitchenOvens from "@/assets/gallery/somerset-kitchen-ovens.jpg";
import somersetKitchenSeating from "@/assets/gallery/somerset-kitchen-seating.jpg";

import mtLaurelKitchenFull from "@/assets/gallery/mt-laurel-kitchen-full.jpg";
import mtLaurelKitchenWide from "@/assets/gallery/mt-laurel-kitchen-wide.jpg";
import mtLaurelKitchenIslandDrawer from "@/assets/gallery/mt-laurel-kitchen-island-drawer.jpg";
import mtLaurelKitchenCabinetDrawer from "@/assets/gallery/mt-laurel-kitchen-cabinet-drawer.jpg";
import mtLaurelKitchenIslandOpen from "@/assets/gallery/mt-laurel-kitchen-island-open.jpg";

import westhamptonRusticFull from "@/assets/gallery/westhampton-rustic-full.jpg";
import westhamptonRusticIsland from "@/assets/gallery/westhampton-rustic-island.jpg";
import westhamptonRusticWide from "@/assets/gallery/westhampton-rustic-wide.jpg";
import westhamptonRusticPantry from "@/assets/gallery/westhampton-rustic-pantry.jpg";
import westhamptonRusticCounter from "@/assets/gallery/westhampton-rustic-counter.jpg";
import westhamptonRusticCabinetsOpen from "@/assets/gallery/westhampton-rustic-cabinets-open.jpg";

import kendallParkKitchenFull from "@/assets/gallery/kendall-park-kitchen-full.jpg";
import kendallParkKitchenIsland from "@/assets/gallery/kendall-park-kitchen-island.jpg";
import kendallParkKitchenStove from "@/assets/gallery/kendall-park-kitchen-stove.jpg";
import kendallParkKitchenWindow from "@/assets/gallery/kendall-park-kitchen-window.jpg";
import kendallParkKitchenOvens from "@/assets/gallery/kendall-park-kitchen-ovens.jpg";
import kendallParkKitchenWide from "@/assets/gallery/kendall-park-kitchen-wide.jpg";
import kendallParkKitchenCounter from "@/assets/gallery/kendall-park-kitchen-counter.jpg";
import kendallParkKitchenCounter2 from "@/assets/gallery/kendall-park-kitchen-counter2.jpg";
import kendallParkKitchenPanoramic from "@/assets/gallery/kendall-park-kitchen-panoramic.jpg";

import eveshamStaircaseFront from "@/assets/gallery/evesham-staircase-front.jpg";
import eveshamStaircaseTop from "@/assets/gallery/evesham-staircase-top.jpg";

import haddonfieldBathroomFull from "@/assets/gallery/haddonfield-bathroom-full.jpg";
import laurelSpringsFireplace from "@/assets/gallery/laurel-springs-fireplace.jpg";
import gibbsboroBarnDoor from "@/assets/gallery/gibbsboro-barn-door.jpg";
import audubonCloset from "@/assets/gallery/audubon-walk-in-closet.jpg";
import newBrunswickBayExterior from "@/assets/gallery/new-brunswick-bay-window-exterior.jpg";
import newBrunswickBayInterior from "@/assets/gallery/new-brunswick-bay-window-interior.jpg";

const projectsData: Record<string, {
  title: string;
  category: string;
  location: string;
  completedDate: string;
  description: string;
  details: string[];
  images: string[];
}> = {
  "1": {
    title: "Full Basement Finish with Kitchen & Bath",
    category: "Basements",
    location: "Princeton, NJ",
    completedDate: "2024",
    description: "A complete basement finishing project for a homeowner in Princeton, NJ. The customer wanted to transform their unfinished basement into a fully livable space. We delivered a stunning finished basement complete with a custom kitchen, a full bathroom with a marble-tiled shower, built-in bookshelves, and a spacious open-concept living area with beautiful staircase railings.",
    details: [
      "Full basement finishing with drywall, trim, and carpet",
      "Custom kitchen installation with countertops",
      "Full bathroom with marble-look tile shower and glass enclosure",
      "Built-in bookshelf and storage",
      "Custom staircase with oak railing and white spindles",
      "Recessed lighting throughout",
      "Open-concept layout for entertainment space"
    ],
    images: [princetonBasement1, princetonBasement2, princetonBasement3, princetonBasement4, princetonBasement5]
  },
  "2": {
    title: "Basement Suite with Gym & Kitchenette",
    category: "Basements",
    location: "South Jersey",
    completedDate: "2024",
    description: "This comprehensive basement remodel transformed an empty space into a multi-functional suite. The project features a dedicated home gym with rubber flooring and mirrors, a stylish kitchenette with open shelving, and a full bathroom. The living area is highlighted by elegant wainscoting, a modern fireplace, and comfortable lounge seating.",
    details: [
      "Dedicated home gym with rubber flooring and wall mirrors",
      "Custom kitchenette with white cabinetry and open shelving",
      "Full bathroom with modern vanity and black-framed shower door",
      "Elegant wainscoting throughout the lounge area",
      "Electric fireplace with custom mantel",
      "LVP flooring in living areas",
      "Custom staircase with modern black railings"
    ],
    images: [gymBasementGym, gymBasementLounge, gymBasementKitchen, gymBasementTv, gymBasementVanity, gymBasementShower]
  },
  "3": {
    title: "Bathroom & Shower Remodel",
    category: "Bathrooms",
    location: "Mt. Laurel, NJ",
    completedDate: "2024",
    description: "A beautiful bathroom and shower remodel in Mt. Laurel, NJ. This project featured a complete transformation with marble-look porcelain tile throughout, a frameless glass shower enclosure, and a sleek modern vanity with matching countertop. The matte black fixtures add a bold contrast to the elegant white marble aesthetic.",
    details: [
      "Marble-look porcelain tile on walls and floors",
      "Frameless glass shower enclosure with black hardware",
      "Hexagon mosaic tile on shower floor",
      "Built-in shower niche with decorative tile accent",
      "Modern vanity with marble countertop and undermount sink",
      "Matte black rain showerhead and handheld shower",
      "Linear drain in shower floor"
    ],
    images: [mtLaurelVanity, mtLaurelShowerEnclosure, mtLaurelShowerDetail]
  },
  "4": {
    title: "Bathroom Remodel with Skylight Shower",
    category: "Bathrooms",
    location: "Moorestown, NJ",
    completedDate: "2025",
    description: "A stunning bathroom remodel in Moorestown, NJ featuring a gorgeous skylight window above the shower that floods the space with natural light. The bathroom showcases elegant marble-look porcelain tile throughout, a frameless glass shower enclosure, and a beautiful white vanity with matte black hardware for a clean, modern look.",
    details: [
      "Skylight window installed above shower for natural lighting",
      "Marble-look porcelain tile on walls and floors",
      "Frameless glass shower enclosure with black hardware",
      "Hexagon mosaic tile on shower floor",
      "Double-tier built-in shower niche with hexagon accent tile",
      "White vanity with marble countertop and matte black fixtures",
      "Matte black rain showerhead and handheld shower",
      "Linear drain in shower floor",
      "Crystal vanity light fixture"
    ],
    images: [moorestownFull, moorestownEnclosure, moorestownDetail, moorestownFloor]
  },
  "5": {
    title: "Full Bathroom Remodel",
    category: "Bathrooms",
    location: "Washington Township, NJ",
    completedDate: "2024",
    description: "A complete bathroom remodel in Washington Township, NJ featuring a stunning combination of warm and modern elements. The project highlights a sliding barn-door style glass shower enclosure with marble-look porcelain tile, decorative patterned floor tile, and a rich dark wood vanity with an arched mirror and brass-accented light fixtures.",
    details: [
      "Sliding barn-door style glass shower enclosure with matte black hardware",
      "Marble-look porcelain tile on shower walls",
      "Pebble mosaic tile on shower floor",
      "Decorative patterned ceramic floor tile",
      "Built-in shower niche with pebble tile accent",
      "Dark wood vanity with white countertop and undermount sink",
      "Arched wood-framed mirror",
      "Brass and black three-light vanity fixture",
      "Matte black rain showerhead and handheld shower",
      "Linear drain in shower floor",
      "Recessed lighting"
    ],
    images: [washingtonTwpFull, washingtonTwpShower, washingtonTwpVanity]
  },
  "6": {
    title: "Black & White Bathroom Remodel",
    category: "Bathrooms",
    location: "Voorhees, NJ",
    completedDate: "2024",
    description: "A striking black and white bathroom remodel in Voorhees, NJ with bold industrial-style design. This project features a stunning black grid-frame glass shower enclosure, dramatic black and white patterned cement floor tile, and a navy blue vanity with brass hardware. The marble-look porcelain shower walls and dark pebble stone shower floor with matching niche create a sophisticated contrast.",
    details: [
      "Industrial black grid-frame sliding glass shower enclosure",
      "Black and white decorative cement floor tile",
      "Marble-look porcelain tile on shower walls",
      "Dark pebble stone shower floor with matching niche accent",
      "Double-tier built-in shower niche with stone accent",
      "Navy blue vanity with white countertop and brass knobs",
      "Large arched black-framed mirror",
      "Glass globe vanity light fixtures with brass accents",
      "Matte black rain showerhead and handheld shower",
      "Full-height mirror on opposite wall",
      "Recessed lighting"
    ],
    images: [voorheesFull, voorheesVanity, voorheesNiche, voorheesVanityAngle, voorheesOverview]
  },
  "7": {
    title: "Modern Bathroom with LED Mirror",
    category: "Bathrooms",
    location: "Burlington, NJ",
    completedDate: "2024",
    description: "A contemporary bathroom remodel in Burlington, NJ featuring a large LED backlit vanity mirror as the focal point. The space includes a spacious double vanity in dark wood, marble-look porcelain tile flooring with dramatic veining, and a sliding glass shower enclosure with a unique black and white checkered mosaic tile floor.",
    details: [
      "Large LED backlit vanity mirror with color changing options",
      "Dark wood double vanity with white marble countertop",
      "Matte black widespread faucets and hardware",
      "Large format marble-look porcelain floor tile",
      "Sliding glass shower enclosure with black hardware",
      "Black and white checkered mosaic tile on shower floor and niche",
      "Marble-look wall tile in shower",
      "Built-in shower niche with checkered tile accent",
      "Modern 4-light vanity fixture",
      "Matte black rain showerhead and handheld shower",
      "Linear drain in shower floor"
    ],
    images: [burlingtonLed, burlingtonFull, burlingtonVanity, burlingtonShower]
  },
  "8": {
    title: "Master Bathroom with Freestanding Tub",
    category: "Bathrooms",
    location: "Burlington County, NJ",
    completedDate: "2024",
    description: "A luxurious master bathroom remodel in Burlington County, NJ featuring a stunning freestanding soaking tub with a matte black floor-mounted faucet, a spacious walk-in shower with textured gray subway tile accent wall and marble hexagon mosaic floor, and an elegant gray double vanity with white quartz countertop. The space also includes a separate half bath with a matching gray vanity and black fixtures throughout.",
    details: [
      "Freestanding soaking tub with matte black floor-mounted faucet",
      "Spacious walk-in shower with frameless glass enclosure and black hardware",
      "Textured gray subway tile accent wall in shower",
      "Marble-look porcelain tile on shower walls and bathroom floor",
      "Marble hexagon mosaic tile on shower floor",
      "Built-in shower niche with gray subway tile accent",
      "Gray double vanity with white quartz countertop",
      "Matte black widespread faucets and hardware throughout",
      "Gray-framed mirrors with modern multi-light vanity fixture",
      "Separate half bath with matching gray vanity",
      "Matte black square rain showerhead",
      "Recessed lighting throughout"
    ],
    images: [cherryHillVanity, cherryHillTub, cherryHillShowerFront, cherryHillShowerDetail, cherryHillShowerWide, cherryHillNiche, cherryHillVanityWide, cherryHillHalfBath, cherryHillTubFront]
  },
  "9": {
    title: "Master Bath with Soaking Tub & Shower",
    category: "Bathrooms",
    location: "Cinnaminson, NJ",
    completedDate: "2024",
    description: "An elegant master bathroom remodel in Cinnaminson, NJ featuring a beautiful freestanding soaking tub with a decorative gothic arch mirror above it, a spacious frameless glass shower enclosure with half-wall, and dual white vanities with real marble countertops and polished chrome fixtures. The wood-look LVP flooring adds warmth to the space.",
    details: [
      "Freestanding soaking tub with polished chrome floor-mounted faucet",
      "Decorative gothic arch mirror above tub as focal point",
      "Spacious frameless glass shower enclosure with half-wall base",
      "Polished chrome rain showerhead with handheld shower and grab bars",
      "Dual separate white vanities with real marble countertops",
      "Polished chrome widespread faucets and bar-pull hardware",
      "White-framed vanity mirrors with 3-light chrome fixtures",
      "Wood-look luxury vinyl plank flooring",
      "Recessed lighting throughout",
      "Decorative window valances"
    ],
    images: [cinnaminsonVanity, cinnaminsonShowerTub, cinnaminsonShowerWide]
  },
  "10": {
    title: "Custom Built-In Bookshelf Unit",
    category: "Carpentry",
    location: "Medford, NJ",
    completedDate: "2025",
    description: "A stunning custom built-in bookshelf unit in Medford, NJ designed to maximize storage in a unique stairwell space. This floor-to-ceiling wrap-around bookshelf features an asymmetric grid pattern with varying shelf sizes, finished in clean white paint with elegant crown molding along the top. The unit spans multiple walls and follows the natural angles of the staircase, turning an otherwise unused area into a beautiful library showcase.",
    details: [
      "Floor-to-ceiling custom built-in bookshelf spanning multiple walls",
      "Asymmetric grid pattern with varied shelf sizes for visual interest",
      "Wrap-around L-shaped design following the stairwell layout",
      "Clean white paint finish with crown molding detail at the top",
      "Custom-fitted around staircase angles and architectural features",
      "Hardwood flooring preserved and complemented by white shelving",
      "Integrated electrical outlets maintained for functionality"
    ],
    images: [medfordBookshelfFront, medfordBookshelfCorner, medfordBookshelfWall, medfordBookshelfAbove, medfordBookshelfTop]
  },
  "11": {
    title: "Flooring & Painting Refresh",
    category: "Interior Remodel",
    location: "Delran, NJ",
    completedDate: "2024",
    description: "A multi-room flooring and painting refresh in Delran, NJ. This project transformed several bedrooms with new luxury vinyl plank flooring in a rich walnut tone, fresh paint in distinct color palettes for each room, and crisp white baseboards and trim throughout. Each room was finished with a ceiling fan and recessed lighting for a clean, move-in ready look.",
    details: [
      "Luxury vinyl plank flooring installed in rich walnut tone across multiple rooms",
      "Custom paint colors for each bedroom — soft blue-gray, vibrant teal, and warm neutral",
      "Crisp white baseboard and door trim throughout",
      "Ceiling fan installation with integrated lighting",
      "Recessed lighting for even, modern illumination",
      "New matte black door hardware and hinges",
      "Clean window trim and casings"
    ],
    images: [delranRoomBlue, delranRoomTeal, delranRoomNeutral]
  },
  "12": {
    title: "Front Door Replacement",
    category: "Exterior Remodel",
    location: "Moorestown, NJ",
    completedDate: "2024",
    description: "A beautiful front door replacement in Moorestown, NJ featuring an elegant wrought iron and glass entry door with matching sidelights. The dark espresso-finished fiberglass door features decorative iron scrollwork over tempered glass, creating a stunning and secure entryway. The matching sidelights on each side add symmetry and allow natural light into the foyer.",
    details: [
      "Fiberglass entry door with rich espresso finish",
      "Decorative wrought iron scrollwork over tempered glass insert",
      "Matching sidelights with coordinating iron detailing",
      "Matte black handle set with electronic keypad deadbolt",
      "Custom dark trim and framing around entire entry",
      "Clean white threshold and base trim",
      "Weather-sealed installation for energy efficiency"
    ],
    images: [moorestownDoor]
  },
  "13": {
    title: "Screened-In Gazebo Addition",
    category: "Exterior Remodel",
    location: "Willingboro, NJ",
    completedDate: "2024",
    description: "A spacious screened-in gazebo addition in Willingboro, NJ, extending the home's living space into the backyard. This custom-built enclosed porch features large screened panels on all sides for full ventilation while keeping insects out, matching vinyl siding to blend seamlessly with the existing home, and a solid roof tied into the main structure for year-round protection.",
    details: [
      "Custom-built screened-in gazebo attached to existing home",
      "Large screened panels on all sides for maximum airflow",
      "Matching vinyl siding for seamless integration with the home",
      "Solid roof extension tied into main roof structure",
      "White aluminum framing and trim throughout",
      "Gutters and downspouts integrated into the design",
      "Spacious interior for outdoor dining and entertaining"
    ],
    images: [willingboroGazeboSide, willingboroGazeboFull]
  },
  "14": {
    title: "Modern Wood Kitchen Renovation",
    category: "Kitchens",
    location: "Somerset, NJ",
    completedDate: "2024",
    description: "A stunning modern kitchen renovation in Somerset, NJ featuring warm wood cabinetry that reaches the ceiling for maximum storage and visual impact. The design centers around a large island with a waterfall edge quartzite countertop and integrated gas cooktop. Modern black dome pendant lights and matte black hardware provide a striking contrast to the warm wood tones and light flooring.",
    details: [
      "Custom floor-to-ceiling wood cabinetry with crown molding",
      "Large kitchen island with waterfall quartzite countertop",
      "Integrated gas cooktop in island with downdraft ventilation",
      "Double wall ovens and built-in microwave",
      "Matte black dome pendant lighting and recessed lights",
      "Matte black cabinet hardware and faucet",
      "Light wood luxury vinyl plank flooring",
      "Subway tile backsplash in soft gray",
      "Open wood shelving accents near window",
      "Counter seating at the island"
    ],
    images: [somersetKitchenFull, somersetKitchenIsland1, somersetKitchenWide, somersetKitchenIsland2, somersetKitchenStove, somersetKitchenCounter, somersetKitchenSink, somersetKitchenDishwasher, somersetKitchenOvens, somersetKitchenSeating]
  },
  "15": {
    title: "Two-Tone Kitchen Remodel",
    category: "Kitchens",
    location: "Mt. Laurel, NJ",
    completedDate: "2024",
    description: "A bright and functional two-tone kitchen remodel in Mt. Laurel, NJ. This project features crisp white shaker upper and perimeter cabinets paired with a contrasting dark navy island. The layout includes custom pull-out drawers for maximized organization, quartz countertops with subtle veining, and gold hardware for a touch of elegance. The light wood flooring adds warmth to the clean, modern aesthetic.",
    details: [
      "Two-tone shaker style cabinetry: White perimeter and Navy island",
      "White quartz countertops with subtle grey veining",
      "Custom pull-out drawers and organizers in lower cabinets",
      "Gold cabinet hardware and faucet",
      "Textured white subway tile backsplash",
      "Modern gas range and stainless steel appliances",
      "Pendant lighting over the island",
      "Light wood luxury vinyl plank flooring",
      "Recessed lighting throughout"
    ],
    images: [mtLaurelKitchenFull, mtLaurelKitchenWide, mtLaurelKitchenIslandDrawer, mtLaurelKitchenCabinetDrawer, mtLaurelKitchenIslandOpen]
  },
  "16": {
    title: "Rustic Kitchen Renovation",
    category: "Kitchens",
    location: "Westhampton, NJ",
    completedDate: "2024",
    description: "A beautifully crafted rustic kitchen renovation in Westhampton, NJ. This unique project features rich, warm-toned wood cabinetry with knotty pine character, giving the space a cozy, cabin-like feel. The kitchen centers around a large island with an integrated electric cooktop and bright white quartz countertop that contrasts beautifully with the dark wood. The classic herringbone brick floor adds texture and timeless charm to the space.",
    details: [
      "Rich, warm-toned wood cabinetry with knotty pine character",
      "Large center island with integrated electric cooktop",
      "Bright white quartz countertops for striking contrast",
      "Classic herringbone brick flooring in terracotta tones",
      "Floor-to-ceiling pantry cabinets with ample storage",
      "Built-in wall ovens and black stainless refrigerator",
      "Custom wood trim and casing around windows",
      "Recessed lighting throughout",
      "Farmhouse sink with bridge faucet"
    ],
    images: [westhamptonRusticFull, westhamptonRusticIsland, westhamptonRusticWide, westhamptonRusticPantry, westhamptonRusticCounter, westhamptonRusticCabinetsOpen]
  },
  "17": {
    title: "Classic White Kitchen Remodel",
    category: "Kitchens",
    location: "Kendall Park, NJ",
    completedDate: "2024",
    description: "An elegant classic white kitchen remodel in Kendall Park, NJ featuring all-white shaker cabinetry with crown molding that extends to the ceiling, creating a bright and airy feel. The spacious layout includes a large center island with beadboard paneling, speckled quartz countertops, and a matte black faucet and sink. Open floating wood shelves add warmth to the crisp white palette, while stainless steel KitchenAid appliances complete the look.",
    details: [
      "All-white shaker cabinetry with crown molding to ceiling",
      "Large center island with beadboard paneling and quartz countertop",
      "Speckled quartz countertops throughout",
      "Matte black cabinet hardware, faucet, and sink",
      "Stainless steel KitchenAid appliances including double wall ovens",
      "Gas cooktop with stainless steel range hood",
      "Open floating wood shelves for display",
      "Light oak luxury vinyl plank flooring",
      "Recessed lighting throughout",
      "Pull-out pantry storage beside wall ovens"
    ],
    images: [kendallParkKitchenFull, kendallParkKitchenIsland, kendallParkKitchenStove, kendallParkKitchenWindow, kendallParkKitchenOvens, kendallParkKitchenWide, kendallParkKitchenCounter, kendallParkKitchenCounter2, kendallParkKitchenPanoramic]
  },
  "18": {
    title: "Custom Staircase Remodel",
    category: "Interior Remodel",
    location: "Evesham, NJ",
    completedDate: "2024",
    description: "A stunning staircase remodel in Evesham, NJ featuring dark espresso-stained hardwood treads with crisp white painted risers and stringers. The highlight of this project is the custom geometric wrought iron balusters with a square pattern design, paired with a rich dark wood handrail and matching newel posts. The two-story foyer is complemented by a coordinating cage-style chandelier and arched window overhead.",
    details: [
      "Dark espresso-stained hardwood stair treads",
      "Crisp white painted risers and stair stringers",
      "Custom geometric wrought iron balusters with square pattern",
      "Dark-stained wood handrail and newel posts",
      "Matching wall-mounted handrail on opposite side",
      "Dark hardwood flooring on main level to match treads",
      "White baseboard trim and crown molding throughout",
      "Two-story foyer with arched window and cage chandelier"
    ],
    images: [eveshamStaircaseFront, eveshamStaircaseTop]
  },
  "19": {
    title: "Marble Walk-In Shower Bathroom",
    category: "Bathrooms",
    location: "Haddonfield, NJ",
    completedDate: "2025",
    description: "A sophisticated bathroom remodel in Haddonfield, NJ featuring floor-to-ceiling marble-look porcelain tile throughout the entire space, including all walls and the open walk-in shower. The curbless shower design with a half-wall and glass panel creates a seamless, accessible layout. The pebble mosaic floor tile carries throughout both the shower and main bathroom area for a cohesive, spa-like feel.",
    details: [
      "Floor-to-ceiling marble-look porcelain tile on all walls",
      "Curbless walk-in shower with half-wall and glass panel",
      "Pebble mosaic floor tile throughout bathroom and shower",
      "Built-in shower niche for storage",
      "Brushed nickel handheld showerhead",
      "White shaker vanity with matching countertop",
      "Recessed lighting in ceiling",
      "Accessible barrier-free shower entry"
    ],
    images: [haddonfieldBathroomFull]
  },
  "20": {
    title: "Custom Fireplace & Living Room",
    category: "Interior Remodel",
    location: "Laurel Springs, NJ",
    completedDate: "2025",
    description: "A cozy living room transformation in Laurel Springs, NJ centered around a beautiful fireplace update. The project features a new tiled fireplace surround and hearth in a soft neutral stone, paired with a custom white mantel shelf. The space is finished with rich hardwood flooring and fresh paint, creating a warm and inviting atmosphere for family gatherings.",
    details: [
      "New tiled fireplace surround in neutral stone",
      "Matching tiled hearth flush with floor",
      "Custom white mantel shelf with corbels",
      "Glass fireplace doors with dark bronze trim",
      "Rich hardwood flooring installation throughout",
      "Fresh neutral wall paint and white trim",
      "Recessed lighting",
      "New baseboards and shoe molding"
    ],
    images: [laurelSpringsFireplace]
  },
  "21": {
    title: "Glass Sliding Barn Door",
    category: "Interior Remodel",
    location: "Gibbsboro, NJ",
    completedDate: "2025",
    description: "A custom glass sliding barn door installation in Gibbsboro, NJ. This elegant double-panel barn door features frosted glass panels set in clean white frames, creating a modern room divider that allows natural light to flow between spaces while providing privacy. The doors glide smoothly on a concealed track system and complement the home's hardwood flooring.",
    details: [
      "Custom double-panel frosted glass barn doors",
      "White painted wood frames with clean lines",
      "Three-panel frosted glass design per door",
      "Concealed overhead track and sliding hardware",
      "Smooth rolling operation for easy daily use",
      "Seamless integration with existing hardwood flooring",
      "Custom framing and trim work around opening"
    ],
    images: [gibbsboroBarnDoor]
  },
  "22": {
    title: "Custom Walk-In Closet",
    category: "Interior Remodel",
    location: "Audubon, NJ",
    completedDate: "2025",
    description: "A fully custom walk-in closet built from scratch in Audubon, NJ. This narrow space was maximized with floor-to-ceiling white shelving on both sides, featuring adjustable shelves, hanging rods, and dedicated compartments for shoes, folded clothing, and accessories. A full-length mirror at the back wall adds depth and functionality.",
    details: [
      "Floor-to-ceiling custom white shelving system",
      "Adjustable shelves for flexible storage",
      "Multiple hanging rod sections at varying heights",
      "Dedicated shoe shelving compartments",
      "Full-length mirror installed at back wall",
      "Recessed lighting for bright, even illumination",
      "Dark flooring for a clean contrast"
    ],
    images: [audubonCloset]
  },
  "23": {
    title: "Bay Window & Sitting Area",
    category: "Exterior Remodel",
    location: "New Brunswick, NJ",
    completedDate: "2025",
    description: "A beautiful bay window installation with a custom built-in sitting area in New Brunswick, NJ. The exterior features a classic three-panel bay window with colonial grid muntins and a shingled roof cap, while the interior showcases a custom-built window seat with built-in storage cabinets below. The clean white trim and cabinetry create a bright, inviting nook perfect for relaxing.",
    details: [
      "Three-panel bay window with colonial grid muntins",
      "Shingled roof cap over bay window exterior",
      "Custom white trim and exterior casing",
      "Built-in window seat with storage cabinets",
      "White painted cabinetry with knob hardware",
      "Deep window sill for seating comfort",
      "Interior trim and molding to match home style"
    ],
    images: [newBrunswickBayExterior, newBrunswickBayInterior]
  },
};

const ProjectDetail = () => {
  const { id } = useParams({ strict: false }) as { id?: string };
  const project = id ? projectsData[id] : null;

  if (!project) {
    return (
      <Layout>
        <section className="py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-heading font-bold mb-4">Project Not Found</h1>
            <p className="text-muted-foreground mb-8">
              The project you're looking for doesn't exist or has been removed.
            </p>
            <Button variant="default" asChild>
              <Link to="/gallery">
                <ArrowLeft className="w-4 h-4" />
                Back to Gallery
              </Link>
            </Button>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 hero-gradient">
        <div className="container mx-auto px-4">
          <Link 
            to="/gallery" 
            className="inline-flex items-center gap-2 text-secondary-foreground/80 hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Gallery
          </Link>
          <div className="max-w-3xl">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-4">
              {project.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-secondary-foreground mb-6">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-6 text-secondary-foreground/80">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                {project.location}
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-primary" />
                {project.completedDate}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Images */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {project.images.map((image, index) => (
              <div 
                key={index}
                className="aspect-[4/3] overflow-hidden rounded-lg"
              >
                <img 
                  src={image} 
                  alt={`${project.title} - Image ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-heading font-bold mb-4">About This Project</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                {project.description}
              </p>
              
              <h3 className="text-xl font-heading font-bold mb-4">What We Did</h3>
              <ul className="space-y-3">
                {project.details.map((detail, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-muted-foreground">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="bg-muted rounded-lg p-6 sticky top-24">
                <h3 className="text-lg font-heading font-bold mb-4">Ready to Start Your Project?</h3>
                <p className="text-muted-foreground text-sm mb-6">
                  Get a free estimate for your {project.category.toLowerCase()} project today.
                </p>
                <Button variant="default" size="lg" className="w-full" asChild>
                  <Link to="/contact">
                    Get Free Estimate
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            View More Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Explore more of our completed projects and see the quality craftsmanship 
            we bring to every job.
          </p>
          <Button variant="default" size="xl" asChild>
            <Link to="/gallery">
              Back to Gallery
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectDetail;
