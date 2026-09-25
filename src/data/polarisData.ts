export interface Capability {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  materials: string[];
  specifications: string[];
  image: string;
  secondaryImage?: string;
  detailQuote: string;
}

export interface Project {
  id: string;
  title: string;
  category: 'Hospitality' | 'Commercial' | 'High Rise' | 'Luxury Villas' | 'Ongoing';
  location: string;
  year?: string;
  scope: string;
  clientOrOperator?: string;
  featuredImage: string;
  gallery: string[];
  description: string;
  architecturalHighlights: string[];
}

export interface FactoryStat {
  value: string;
  label: string;
  sublabel: string;
}

export interface MachineryItem {
  name: string;
  count: number | string;
  category: string;
  purpose: string;
}

export interface GlobalOffice {
  city: string;
  country: string;
  type: 'Strategic Regional Office' | 'Landmark Project Location';
  role: string;
  coordinates: { x: number; y: number }; // percentage on map projection
  details: string;
}

export const POLARIS_PROFILE = {
  name: "Polaris International Industries LLC",
  shortName: "Polaris International",
  establishedLocation: "Dubai Investment Park (DIP), Dubai, UAE",
  facilityArea: "45,000+ SQ. FT.",
  tagline: "REDEFINING INTERIORS",
  subheadline: "Integrated manufacturing and interior fit-out solutions, crafted with precision in Dubai.",
  mission: "Providing high-quality manufacturing services in the furniture and interior fit-out space, primarily targeting clients within the Gulf Co-operation Council (GCC) and discerning clients around the globe.",
  philosophy: "We believe we are diametrically different because we don't do different things, we do them differently our way.",
  contact: {
    address: "Dubai Investment Park, Dubai, United Arab Emirates",
    email: "info@polaris-industries.ae",
    phone: "+971 4 885 9192",
    brochure: "/Polaris_International_Industries_PQ.pdf"
  }
};

export const CAPABILITIES: Capability[] = [
  {
    id: "fitted-joinery",
    number: "01",
    title: "Fitted Joinery & Mill Works",
    subtitle: "Architectural Woodwork & Complex Paneling",
    tagline: "Millimeter-precision engineering for landmark interior envelopes",
    description: "Full turnkey architectural joinery and custom millwork manufactured to exacting tolerances. Our production lines combine automated multi-axis timber milling with artisanal veneer matching, fabricating intricate acoustic wall paneling, fluted timber cladding, integrated concealed storage, and monolithic architectural ceilings for world-renowned hotels and luxury residences.",
    materials: ["Smoked Oak", "American Walnut", "Burled Veneers", "Brushed Brass Inlays", "Acoustic Substrates"],
    specifications: [
      "CNC sizing with continuous wood-grain bookmatching across elevations",
      "Seamless invisible concealed pivots and soft-action architectural hardware",
      "Class 0 / Class 1 fire-rated and moisture-resistant internal cores",
      "Engineered acoustic paneling with customized perforation patterns"
    ],
    image: "/assets/page_092_img_3_1113x730.jpeg",
    secondaryImage: "/assets/page_058_img_2_1440x732.jpeg",
    detailQuote: "Precision millwork is where architecture meets sculpture—seamless grain continuity across entire structural spans."
  },
  {
    id: "solid-wood",
    number: "02",
    title: "Solid Wood & Veneered Furniture",
    subtitle: "Custom Freestanding & Built-in Masterpieces",
    tagline: "Master-crafted heirloom pieces tailored for grand public and private spaces",
    description: "From monolithic solid timber dining surfaces and executive boardroom suites to delicate figured-veneer credenzas, our furniture atelier bridges industrial capability with artisanal finishing. Each piece undergoes controlled moisture stabilization in our AC seasoning environment before precision pressing and hand buffing.",
    materials: ["Solid European White Oak", "Canaletto Walnut", "Quarter-Cut Ash", "Calacatta Marble Inlays", "Hand-Stitched Leather"],
    specifications: [
      "Climate-controlled wood seasoning for optimal GCC stability (8%–10% EMC)",
      "Hydraulic hot-press veneer laminating with zero-void bonding",
      "Bookmatch, slipmatch, and radial diamond marquetry techniques",
      "High-durability polyurethane, acrylic, and matte natural oil finishing"
    ],
    image: "/assets/page_064_img_2_1116x733.jpeg",
    secondaryImage: "/assets/page_066_img_1_1124x794.jpeg",
    detailQuote: "Selecting timber is an art; stabilizing and shaping it for Dubai's exacting luxury standards is an exact science."
  },
  {
    id: "doors",
    number: "03",
    title: "Standard & Decorative Doors",
    subtitle: "Monumental Entrance & Acoustic Passage Portals",
    tagline: "Certified fire safety harmonized with extraordinary architectural presence",
    description: "Engineered timber door assemblies, oversized floor-to-ceiling pivot doors, and acoustic passage portals. Manufactured with multi-layer stabilized solid timber cores, bespoke decorative veneer skins, integrated acoustic drop seals, and certified fire resistance up to FD120.",
    materials: ["Solid Core Timber", "Engineered Solid Hardwood Stile", "Bronze Reveal Trims", "Concealed Hydraulic Closers"],
    specifications: [
      "Civil Defense compliant fire-rated door assemblies (30, 60, 90 & 120 minutes)",
      "Oversized architectural pivot portals up to 3.8m in height with concealed floor bearings",
      "Sound transmission class (STC) ratings up to 48dB for luxury hospitality",
      "Bespoke CNC geometric routing, metal reveal rebates, and flush shadow gaps"
    ],
    image: "/assets/page_100_img_3_1115x730.jpeg",
    secondaryImage: "/assets/page_071_img_2_1115x733.jpeg",
    detailQuote: "A door is the tactile transition between spaces; its weight, swing resistance, and silence define luxury."
  },
  {
    id: "soft-furnishing",
    number: "04",
    title: "Soft Furnishing & Upholstery",
    subtitle: "Textile Craftsmanship & Bespoke Seating",
    tagline: "Tactile opulence, ergonomic engineering, and acoustic comfort",
    description: "Our dedicated soft furnishings division engineers tailored upholstery for luxury hotel guestrooms, high-capacity ballroom banquet seating, presidential suite headboards, and executive lounges. Working with the world's most prestigious textile and leather houses, we ensure high Martindale rub-count durability and strict crib-5 fire compliance.",
    materials: ["Full-Grain Aniline Leather", "Belgian Linen", "Heavy Mohair Velvets", "High-Resilience Fire-Retardant Foams"],
    specifications: [
      "Crib 5 / BS 5852 flammability compliant foam and interliner assemblies",
      "Multi-density high-resilience polyurethane foam cores with feather-down wraps",
      "Bespoke deep buttoning, fluted channel quilting, and precision saddle topstitching",
      "Engineered internal hardwood and steel subframes with lifetime structural stability"
    ],
    image: "/assets/page_080_img_2_1336x893.jpeg",
    secondaryImage: "/assets/page_075_img_6_1200x800.jpeg",
    detailQuote: "Every stitch and contour is calibrated for the subtle interplay between ergonomic resilience and sensory indulgence."
  },
  {
    id: "metal-works",
    number: "05",
    title: "Specialized Metal Works",
    subtitle: "Architectural Metallurgy & Precision Trim",
    tagline: "Seamless fusion of structural metals with luxury joinery detailing",
    description: "In-house specialized architectural metallurgy capable of fabricating custom patinated bronze, PVD titanium-coated stainless steel, blackened steel partitions, brushed champagne brass accents, and structural support frameworks. Metal elements are manufactured alongside timber components to achieve seamless tolerances.",
    materials: ["316 Marine Grade Stainless Steel", "Architectural Brass", "Gunmetal Bronze", "PVD Champagne Gold", "Powder-Coated Structural Steel"],
    specifications: [
      "Laser and waterjet cutting with sub-millimeter edge tolerances",
      "Chemical patination, antiquing, and satin directional hairline brushing",
      "PVD (Physical Vapor Deposition) coating with exceptional scratch and corrosion resistance",
      "Seamless TIG welding with hand-ground invisible corner transitions"
    ],
    image: "/assets/page_088_img_2_1280x576.jpeg",
    secondaryImage: "/assets/page_065_img_2_1114x730.jpeg",
    detailQuote: "Metal frames provide the crisp geometric rhythm that elevates warm timber and cool stone into pure architecture."
  },
  {
    id: "glass-works",
    number: "06",
    title: "Decorative Glass Works",
    subtitle: "Textured, Fluted & Mirrored Vitreous Elements",
    tagline: "Light manipulation, translucency, and spatial depth",
    description: "Specialized glass and mirror fabrication that complements luxury joinery works. Our capability encompasses custom fluted and reeded privacy panels, antiqued hand-silvered bronze mirrors, laminated acoustic glass partitions, and illuminated display vitrines for high-end hospitality and retail environments.",
    materials: ["Low-Iron Ultra-Clear Glass", "Fluted / Reeded Glass", "Antique Bronze Mirrored Glass", "Tinted Grey Float Glass", "Laminated Acoustic PVB"],
    specifications: [
      "Precision CNC beveling, waterjet cutouts, and polished mitred arrises",
      "Tempered safety and acoustic laminated configurations complying with safety codes",
      "Custom decorative silvering, satin acid etching, and back-painted ceramic frit",
      "Integrated concealed LED channel housings with diffused illumination"
    ],
    image: "/assets/page_071_img_1_1124x794.jpeg",
    secondaryImage: "/assets/page_073_img_1_1111x758.jpeg",
    detailQuote: "Glass captures Dubai's ambient desert light, transforming physical boundaries into ethereal gradients."
  }
];

export const FACTORY_DETAILS = {
  headline: "45,000+ SQ. FT.",
  subheadline: "ADVANCED INDUSTRIAL FACILITY IN DUBAI INVESTMENT PARK",
  statement: "Our state-of-the-art facility is functionally laid out over a 45,000+ square-foot area to make it one of the most efficient, advanced, and sophisticated manufacturing environments in the region. Fitted with multi-purpose European machinery and dedicated climate-controlled processing bays, Polaris delivers turnkey furniture and interior fit-out components with uncompromised precision.",
  
  stages: [
    { title: "45,000+", subtitle: "SQUARE FEET", description: "Functionally zoned industrial complex in Dubai Investment Park (DIP)" },
    { title: "MANUFACTURING", subtitle: "INTEGRATED LINES", description: "Automated woodworking, pressing, edge-banding, metal, and glass fabrication" },
    { title: "PRECISION", subtitle: "MICRON TOLERANCE", description: "Computerized beam saws, multi-head borers, and CNC spindle shapers" },
    { title: "CRAFT", subtitle: "MASTER ARTISANS", description: "Hand-finished veneers, artisanal spray polishing, and structural fit-testing" }
  ],

  panoramas: [
    {
      title: "Main Joinery & Woodworking Production Line",
      subtitle: "High-throughput CNC beam sawing and automated edge processing",
      image: "/assets/page_019_img_2_1536x864.png"
    },
    {
      title: "Precision Beam Saw & Veneer Preparation",
      subtitle: "Panel sizing with computerized optimization to eliminate raw material wastage",
      image: "/assets/page_020_img_1_1124x794.jpeg"
    },
    {
      title: "Joinery Assembly & Master Craft Benches",
      subtitle: "Dedicated assembly lines with 7 specialized tables and localized sanding booths",
      image: "/assets/page_021_img_2_1536x864.png"
    },
    {
      title: "Hydraulic Press & Veneer Stitching Bay",
      subtitle: "Multi-ton hydraulic pressing for defect-free architectural veneer laminations",
      image: "/assets/page_022_img_2_1536x864.png"
    },
    {
      title: "Triple Enclosed Spray Booth Facility",
      subtitle: "Three temperature and humidity-regulated paint spray booths plus 2 dry curing booths",
      image: "/assets/page_023_img_2_1536x864.png"
    },
    {
      title: "Multi-Head Boring & Profiling Workstations",
      subtitle: "3-head and 6-head multi-boring machinery for flawless joinery hardware integration",
      image: "/assets/page_025_img_1_2334x1651.jpeg"
    }
  ],

  machinery: [
    { name: "Computerized Beam Saw", count: "1 Unit", category: "Cutting", purpose: "Automated panel sizing with computerized cut-pattern optimization" },
    { name: "Heavy Thicknesser", count: "1 Unit", category: "Planing", purpose: "Calibrated timber leveling with micron-accurate depth settings" },
    { name: "Automatic Edge Bander", count: "1 Unit", category: "Edge Finishing", purpose: "High-speed continuous edge banding with hot-melt adhesive" },
    { name: "Industrial Sanding Machine", count: "1 Unit", category: "Surface Prep", purpose: "Wide-belt calibrated surface leveling prior to finishing" },
    { name: "Veneer Cutting Guillotine", count: "1 Unit", category: "Veneer", purpose: "Precision parallel guillotine shearing for hairline veneer seams" },
    { name: "Veneer Stitching Machines", count: "2 Units", category: "Veneer", purpose: "Thermal glue-thread cross-stitching for seamless face veneers" },
    { name: "Hydraulic Hot Press Machine", count: "1 Unit", category: "Lamination", purpose: "Uniform multi-ton pressure bonding for curved and flat panels" },
    { name: "Professional Spray / Paint Booths", count: "3 Units", category: "Finishing", purpose: "Fully filtered positive-pressure booths with climate controls" },
    { name: "Dry Curing Booths", count: "2 Units", category: "Finishing", purpose: "Dust-free thermal curing environment for lacquers and polishes" },
    { name: "Assembly & Sanding Stations", count: "7 Tables", category: "Assembly", purpose: "Integrated sanding booths with localized vacuum extraction" },
    { name: "Multi-Boring (3-Head & 6-Head)", count: "2 Units", category: "Drilling", purpose: "Simultaneous multi-axis drilling for hardware and shelf pins" },
    { name: "Spindle & 6-Head Molder with Feeder", count: "2 Units", category: "Molding", purpose: "Complex architectural profiles and crown mold production" },
    { name: "Industrial Air Compressor & Dryer", count: "50 HP", category: "Utility", purpose: "Clean dry pneumatic network powering all factory tooling" },
    { name: "Centralized Dust Collector", count: "1 System", category: "EHS", purpose: "High-capacity cyclonic dust extraction ensuring zero ambient particulate" },
    { name: "Wood Seasoning AC & Climate Controls", count: "Full Facility", category: "Quality", purpose: "Regulated equilibrium moisture content for GCC weather durability" }
  ]
};

export const PROJECTS: Project[] = [
  // HOSPITALITY
  {
    id: "novotel-dhahran",
    title: "Novotel Hotel & Residences",
    category: "Hospitality",
    location: "Dhahran, Kingdom of Saudi Arabia",
    scope: "Joinery Works, Guestroom Headboards, Credenzas, Doors, Public Area Paneling & Custom Fit-Out",
    clientOrOperator: "Accor Group / Amaad Business Park",
    featuredImage: "/assets/page_084_img_2_1116x733.jpeg",
    gallery: [
      "/assets/page_084_img_1_1124x794.jpeg",
      "/assets/page_085_img_2_1116x733.jpeg",
      "/assets/page_086_img_2_1024x768.jpeg"
    ],
    description: "A monumental 4-star business hotel and serviced residence development in Dhahran. Polaris engineered and delivered complete turnkey joinery and casework, featuring custom veneered guestroom suites, upholstered acoustic walls, monumental lobby millwork, and fire-rated doors.",
    architecturalHighlights: [
      "250+ complete guestroom casegoods delivered and installed to Accor brand standards",
      "Custom warm walnut timber paneling with integrated brass reveal channels",
      "Bespoke bathroom vanities with moisture-resistant joinery substrates"
    ]
  },
  {
    id: "ritz-carlton-ballroom",
    title: "Ritz-Carlton Ballroom & Spa",
    category: "Hospitality",
    location: "Dubai, United Arab Emirates",
    scope: "Monumental Entrance Doors, Ballroom Paneling, Acoustic Wall Finishes, Counters & Specialized Metal Works",
    clientOrOperator: "Marriott International",
    featuredImage: "/assets/page_079_img_2_1336x891.jpeg",
    gallery: [
      "/assets/page_079_img_1_1124x794.jpeg",
      "/assets/page_080_img_1_1124x794.jpeg",
      "/assets/page_078_img_9_946x1499.jpeg"
    ],
    description: "Opulent interior fit-out for one of the most prestigious grand ballrooms and wellness spas in the Middle East. Intricate bookmatched veneers, specialized metal bronze accents, and monumental acoustic portal doors crafted with uncompromised precision.",
    architecturalHighlights: [
      "Custom decorative millwork panels with hand-patinated antique bronze metal reveals",
      "Monumental double-leaf acoustic ballroom doors with concealed drop-down sound seals",
      "Curved spa reception casework integrating low-iron glass, brushed metal, and smoked timber"
    ]
  },
  {
    id: "four-points-sheraton-senegal",
    title: "Four Points by Sheraton",
    category: "Hospitality",
    location: "Dakar Diamniadio Sports City, Senegal",
    scope: "Complete Turnkey Joinery, Wooden Doors, Glass & Metal Works across Guestrooms & Public Lobby",
    clientOrOperator: "Marriott International",
    featuredImage: "/assets/page_076_img_2_1336x890.jpeg",
    gallery: [
      "/assets/page_077_img_5_990x555.jpeg",
      "/assets/page_077_img_2_1336x893.jpeg"
    ],
    description: "Polaris manufactured in its Dubai facility and exported full turnkey architectural joinery packages for this landmark international hotel at Senegal's premier sports complex. Complete with guestroom cabinetry, lobby feature ceilings, and bespoke dining millwork.",
    architecturalHighlights: [
      "International turn-key export logistics managed seamlessly from Dubai Investment Park",
      "Turnkey guestroom package with integrated wardrobe, desk, minibar, and luggage bench units",
      "Vibrant architectural metal screens paired with natural ash timber finishes"
    ]
  },
  {
    id: "radisson-blu-palm",
    title: "Radisson Blu Resort",
    category: "Hospitality",
    location: "Palm Jumeirah, Dubai, UAE",
    scope: "Joinery Works, Wooden Doors, Glass & Metal Works in Guest Rooms, Suites & Public Areas",
    clientOrOperator: "Radisson Hotel Group",
    featuredImage: "/assets/page_070_img_3_1280x853.jpeg",
    gallery: [
      "/assets/page_070_img_1_1124x794.jpeg",
      "/assets/page_071_img_3_1108x730.jpeg",
      "/assets/page_072_img_2_1280x853.jpeg"
    ],
    description: "High-end resort fit-out on the iconic Palm Jumeirah. Polaris manufactured and fitted bespoke headboard joinery, vanity assemblies, decorative fluted glass privacy partitions, and heavy-duty acoustic guest entrance portals.",
    architecturalHighlights: [
      "Refined coastal luxury palette with whitewashed oak and brushed nickel accents",
      "Custom fluted glass and metal bathroom divider systems",
      "Full turnkey public area restaurant buffet counters and feature bar joinery"
    ]
  },
  {
    id: "edition-hotel",
    title: "The EDITION Hotel",
    category: "Hospitality",
    location: "Dubai, United Arab Emirates",
    scope: "Architectural Joinery Works, Mirror Feature Units, Wall Paneling & Millwork",
    clientOrOperator: "Marriott International / Ian Schrager",
    featuredImage: "/assets/page_068_img_2_1116x730.jpeg",
    gallery: [
      "/assets/page_068_img_1_1124x794.jpeg",
      "/assets/page_068_img_4_1120x749.jpeg"
    ],
    description: "Minimalist ultra-luxury millwork for Dubai's EDITION hotel. Characterized by serene pale oak, seamless flush shadow-gaps, integrated ambient architectural illumination, and impeccable minimalist finishes.",
    architecturalHighlights: [
      "Zero-tolerance shadow reveals across all ceiling-height wall panel installations",
      "Monolithic pale oak credenzas and custom mirror assemblies",
      "Subtle integration of concealed warm LED architectural lighting channels"
    ]
  },
  {
    id: "marriott-residences",
    title: "Marriott Residences",
    category: "Hospitality",
    location: "Business Bay, Dubai, UAE",
    scope: "Wooden Doors, Counters, Cabinets, Wall Paneling, Glass, Mirrors, Metal Works & Lobby Fit-Out",
    clientOrOperator: "Marriott International",
    featuredImage: "/assets/page_082_img_2_1116x990.jpeg",
    gallery: [
      "/assets/page_082_img_1_1124x794.jpeg",
      "/assets/page_082_img_4_1116x730.jpeg"
    ],
    description: "Premium branded residential tower in Business Bay. Polaris supplied comprehensive joinery and interior fit-out for typical lobbies, residential corridors, private apartments, and public amenities.",
    architecturalHighlights: [
      "Over 400 certified fire-rated timber apartment entrance door sets",
      "Sculptural lobby concierge counter in engineered timber and bronze metalwork",
      "Integrated kitchen cabinetry and custom wardrobe suites"
    ]
  },

  // COMMERCIAL
  {
    id: "vurse-head-office",
    title: "Vurse Head Office",
    category: "Commercial",
    location: "Dubai, United Arab Emirates",
    scope: "Turnkey Corporate Interior Fit-Out, Executive Boardrooms, Acoustic Pods, Metal Partitions & Signage",
    clientOrOperator: "Vurse Global",
    featuredImage: "/assets/page_064_img_2_1116x733.jpeg",
    gallery: [
      "/assets/page_064_img_3_1108x733.jpeg",
      "/assets/page_065_img_1_1124x794.jpeg"
    ],
    description: "A visionary corporate headquarters combining futuristic architectural metalwork with warm organic timber surfaces. Polaris executed full custom joinery, curved timber meeting pods, executive desks, and acoustic glass conference walls.",
    architecturalHighlights: [
      "Parametric curved timber ceiling and wall slats with integrated acoustic felt backing",
      "Bespoke boardroom conference table seating 24 with integrated invisible power/data channels",
      "Blackened steel and reeded glass executive partition system"
    ]
  },
  {
    id: "multiply-group",
    title: "Multiply Group Head Office",
    category: "Commercial",
    location: "Abu Dhabi / Dubai, UAE",
    scope: "Joinery Works, Wooden Doors, Reception Counters, Cabinets, Custom Furniture, Glass & Metal Works, Pods",
    clientOrOperator: "Multiply Group",
    featuredImage: "/assets/page_066_img_2_640x427.jpeg",
    gallery: [
      "/assets/page_066_img_3_640x427.jpeg",
      "/assets/page_066_img_4_1024x683.jpeg"
    ],
    description: "State-of-the-art corporate office interior for prominent investment holding entity Multiply Group. Features a dramatic sculptured reception desk, acoustic private focus pods, and handcrafted walnut executive suites.",
    architecturalHighlights: [
      "Sculptural reception desk with cantilevered stone and fluted oak base",
      "Integrated micro-architectural phone booths and acoustic privacy pods",
      "Hand-finished dark walnut veneer paneling throughout boardrooms"
    ]
  },
  {
    id: "visa-cemea-hq",
    title: "Visa CEMEA Headquarters",
    category: "Commercial",
    location: "Dubai Media City / Internet City, Dubai",
    scope: "Architectural Wooden Framing, Heavy Acoustic Doors, Feature Paneling & Turnkey Millwork",
    clientOrOperator: "Visa Inc.",
    featuredImage: "/assets/page_065_img_3_1114x730.jpeg",
    gallery: ["/assets/page_065_img_4_1114x758.jpeg"],
    description: "Regional corporate headquarters for Visa covering Central and Eastern Europe, Middle East, and Africa. Polaris fabricated the precision wooden framing, certified high-acoustic door sets, and executive collaboration spaces.",
    architecturalHighlights: [
      "High-performance acoustic framing achieving STC 45+ for sensitive executive suites",
      "Sustainable certified FSC timber veneers throughout open collaborate areas",
      "Bespoke timber presentation portals and auditorium millwork"
    ]
  },

  // HIGH RISE & PENTHOUSES
  {
    id: "dorchester-collection",
    title: "The Dorchester Collection",
    category: "High Rise",
    location: "Marasi Bay / Business Bay, Dubai",
    scope: "Super-Luxury Joinery Works, Master Wardrobes, Architectural Wall Paneling & Specialized Detailing",
    clientOrOperator: "Omniyat / Dorchester Collection",
    featuredImage: "/assets/page_092_img_4_1121x758.jpeg",
    gallery: [
      "/assets/page_092_img_3_1113x730.jpeg"
    ],
    description: "Among Dubai's most ultra-exclusive residential developments. Polaris delivered museum-grade joinery packages including walk-in master dressing suites with integrated LED leather shelving, bookmatched Italian walnut wall cladding, and concealed pantry portals.",
    architecturalHighlights: [
      "Ultra-luxury Italian veneer matching with continuous horizontal grain wrapping",
      "Master walk-in closets with hand-stitched leather drawer fronts and bronze hardware",
      "Seamless invisible frameless pivot doors matching wall paneling"
    ]
  },
  {
    id: "collective-dubai-hills",
    title: "Collective 2.0 – Dubai Hills",
    category: "High Rise",
    location: "Dubai Hills Estate, Dubai",
    scope: "Public Area Joinery Works, Glass & Specialized Metal Works, Communal Lounges & Co-Working Hubs",
    clientOrOperator: "Emaar Properties",
    featuredImage: "/assets/page_088_img_2_1280x576.jpeg",
    gallery: [
      "/assets/page_088_img_3_1280x576.jpeg",
      "/assets/page_088_img_5_1280x576.jpeg"
    ],
    description: "Contemporary high-rise residential complex by Emaar. Polaris crafted dynamic social hub millwork, industrial metal and fluted glass space dividers, communal study tables, and high-traffic public lobby casework.",
    architecturalHighlights: [
      "Industrial blackened steel screen dividers with fluted acoustic glass inserts",
      "Heavy-duty solid timber co-working tables with integrated power points",
      "Resilient millwork engineered for thousands of daily resident interactions"
    ]
  },
  {
    id: "helvetia-residence",
    title: "Helvetia Residence",
    category: "High Rise",
    location: "Jumeirah Village Circle, Dubai",
    scope: "Turnkey Kitchen Units, Custom Wardrobe Suites, Vanity Units & Architectural Joinery",
    clientOrOperator: "DHG Properties",
    featuredImage: "/assets/page_094_img_3_1200x800.jpeg",
    gallery: [
      "/assets/page_094_img_4_1200x800.jpeg"
    ],
    description: "Bespoke Swiss-inspired architectural apartment building. Polaris fabricated high-end minimalist kitchens with soft-closing Blum hardware, floor-to-ceiling wardrobe modules, and floating bathroom vanities.",
    architecturalHighlights: [
      "Precision German hardware mechanisms integrated into custom Dubai-built millwork",
      "Full-height matt anti-fingerprint lacquered wardrobe portals",
      "Quartz composite integrated vanity joinery"
    ]
  },
  {
    id: "golf-ville",
    title: "Golf Ville – Dubai Hills",
    category: "High Rise",
    location: "Dubai Hills Estate, Dubai",
    scope: "Joinery Works, Wooden Doors, Counters, Cabinets, Staircases, Wardrobes & Public Area Glass/Metal",
    clientOrOperator: "Emaar Properties",
    featuredImage: "/assets/page_091_img_2_1280x853.jpeg",
    gallery: [
      "/assets/page_091_img_1_1124x794.jpeg",
      "/assets/page_091_img_4_1280x853.jpeg"
    ],
    description: "Overlooking the 18-hole championship golf course, Golf Ville features custom communal clubhouse joinery, timber stair treads, feature shelving units, and premium residential casework.",
    architecturalHighlights: [
      "Massive multi-tier architectural library shelving in blackened oak and bronze",
      "Solid hardwood open-riser staircase integration",
      "Integrated hospitality-standard grab-and-go counter joinery"
    ]
  },

  // LUXURY VILLAS
  {
    id: "private-villa-dubai-hills",
    title: "Private Mansion in Dubai Hills",
    category: "Luxury Villas",
    location: "Dubai Hills Estate, Dubai",
    scope: "Bespoke Villa Fit-Out, Custom Kitchens, Wardrobe Suites, Architectural Wall Cladding & Grand Doors",
    clientOrOperator: "Private Royal / HNW Client",
    featuredImage: "/assets/page_060_img_2_1120x730.jpeg",
    gallery: [
      "/assets/page_058_img_2_1440x732.jpeg",
      "/assets/page_058_img_3_1440x960.jpeg",
      "/assets/page_059_img_4_1440x749.jpeg"
    ],
    description: "A 25,000 sq ft private palatial villa. Polaris engineered complete turnkey interior woodwork, spanning monumental 3.8m pivot entrance doors, bookmatched Santos rosewood wall panels, back-lit onyx display bars, and an opulent primary master dressing salon.",
    architecturalHighlights: [
      "Grand 3.8m pivot entrance door weighing 400kg with concealed motorized hydraulic closure",
      "Exquisite Santos Rosewood and Figured Sycamore custom veneers throughout reception salons",
      "Bespoke show kitchen and discreet heavy-duty preparation kitchen"
    ]
  },
  {
    id: "tilal-al-ghaf-harmony",
    title: "Tilal Al Ghaf – Harmony 1",
    category: "Luxury Villas",
    location: "Tilal Al Ghaf, Dubai",
    scope: "ID Joinery Fit-Out Works, Bespoke Built-In Cabinetry, Decorative Feature Walls & Doors",
    clientOrOperator: "Majid Al Futtaim / Private Client",
    featuredImage: "/assets/page_062_img_5_563x692.jpeg",
    gallery: [
      "/assets/page_062_img_4_892x692.jpeg",
      "/assets/page_062_img_7_720x540.jpeg"
    ],
    description: "Resort-style luxury villa fit-out blending warm stone, light oak millwork, and customized indoor-outdoor architectural transitions.",
    architecturalHighlights: [
      "Light European oak custom cabinetry with seamless concealed pull-tabs",
      "Acoustic slatted timber feature wall framing double-height living areas",
      "Custom outdoor-resistant joinery for shaded terrace dining"
    ]
  },

  // ONGOING LANDMARKS
  {
    id: "st-regis-residences",
    title: "St. Regis Residences",
    category: "Ongoing",
    location: "Downtown Dubai, UAE",
    scope: "Ultra-Luxury Joinery, Doors, Vanity Units & Bespoke Residential Millwork",
    clientOrOperator: "Emaar / St. Regis Hotels & Resorts",
    featuredImage: "/assets/page_096_img_4_1116x900.jpeg",
    gallery: [
      "/assets/page_096_img_2_1116x730.jpeg"
    ],
    description: "Refined branded residences located in Downtown Dubai. In production at our Dubai Investment Park facility: bespoke dressing rooms, five-star hotel-standard vanities, and opulent wood paneling.",
    architecturalHighlights: [
      "St. Regis brand standard certified millwork tolerances",
      "High-gloss polyester lacquer and burled walnut bespoke cabinetry",
      "Integrated smart lighting channels inside master storage joinery"
    ]
  },
  {
    id: "kimpton-hotel",
    title: "Kimpton Hotel & Club",
    category: "Ongoing",
    location: "Dubai, United Arab Emirates",
    scope: "Boutique Hospitality Joinery, Public Area Millwork, Custom Bar & Guestroom Furniture",
    clientOrOperator: "IHG (InterContinental Hotels Group)",
    featuredImage: "/assets/page_097_img_5_1113x729.jpeg",
    gallery: [
      "/assets/page_097_img_3_1113x761.jpeg",
      "/assets/page_097_img_6_1116x758.jpeg"
    ],
    description: "Boutique luxury hospitality with eclectic design aesthetics. Polaris is fabricating statement cocktail bars, curved booth seating, fluted timber guestroom headboards, and decorative metal screens.",
    architecturalHighlights: [
      "Custom curving timber bar counter with hammered brass footrail",
      "Fluted timber headboard walls with integrated floating bedside tables",
      "Hand-finished bronze decorative screens"
    ]
  },
  {
    id: "liv-lux-tower",
    title: "LIV LUX Tower",
    category: "Ongoing",
    location: "Dubai Marina, Dubai",
    scope: "Wooden Doors, Premium Kitchen Cabinetry & Custom Master Wardrobes",
    clientOrOperator: "LIV Developers",
    featuredImage: "/assets/page_098_img_3_1113x730.jpeg",
    gallery: ["/assets/page_098_img_1_1124x794.jpeg"],
    description: "47-storey ultra-luxury tower in Dubai Marina. Polaris has been contracted for the manufacturing and installation of bespoke kitchens, fire-rated apartment doors, and luxury bedroom wardrobes.",
    architecturalHighlights: [
      "47 floors of precision-manufactured timber doors and kitchen cabinetry",
      "Custom European quartz and timber island units",
      "Full acoustic drop seals and fire barrier ratings"
    ]
  },
  {
    id: "blue-waters-causeway",
    title: "Blue Waters Causeway Towers",
    category: "Ongoing",
    location: "Bluewaters Island, Dubai",
    scope: "Wooden Doors, Wardrobes, Vanity Units & Other Joinery Units",
    clientOrOperator: "Meraas / Dubai Holding",
    featuredImage: "/assets/page_100_img_3_1115x730.jpeg",
    gallery: [
      "/assets/page_100_img_4_1116x746.jpeg"
    ],
    description: "Iconic waterfront high-rise development at Bluewaters Island. Manufacturing hundreds of specialized marine-climate stabilized timber doors, bathroom vanity suites, and master wardrobes.",
    architecturalHighlights: [
      "Marine-environment stabilized finishes resistant to coastal humidity",
      "Over 1,200 bespoke fire-rated and acoustic door sets",
      "Integrated minimalist vanity units with moisture-sealed internal joinery"
    ]
  },
  {
    id: "hammock-park",
    title: "Hammock Park Residences",
    category: "Ongoing",
    location: "Wasl Gate, Dubai",
    scope: "Resort-Inspired Residential Fit-Out, Kitchens, Vanity Units & Architectural Millwork",
    clientOrOperator: "Divine One Group",
    featuredImage: "/assets/page_099_img_4_1118x759.jpeg",
    gallery: [
      "/assets/page_099_img_5_1120x759.jpeg"
    ],
    description: "Resort-inspired residential community. Polaris is currently delivering custom kitchen casework, fluted feature paneling, vanity cabinetry, and architectural timber features.",
    architecturalHighlights: [
      "High-density moisture-resistant MDF cores with tactile woodgrain laminates",
      "Resort-style open shelving and acoustic slat integration",
      "Turnkey on-site installation overseen by Polaris certified QA/QC engineers"
    ]
  }
];

export const GLOBAL_PRESENCE: {
  offices: GlobalOffice[];
  landmarks: { name: string; country: string; region: string; project: string }[];
} = {
  offices: [
    {
      city: "Dubai",
      country: "United Arab Emirates",
      type: "Strategic Regional Office",
      role: "Global Headquarters & 45,000+ Sq. Ft. Manufacturing Facility",
      coordinates: { x: 58.5, y: 44.5 },
      details: "Dubai Investment Park (DIP). Core manufacturing lines, design support, engineering, project management, and executive leadership."
    },
    {
      city: "London",
      country: "United Kingdom",
      type: "Strategic Regional Office",
      role: "European Client Liaison & Architecture Studio Coordination",
      coordinates: { x: 44.2, y: 28.5 },
      details: "Direct interface with London-based international interior design studios, procurement specialists, and European project developments."
    },
    {
      city: "Riyadh & Dhahran",
      country: "Kingdom of Saudi Arabia",
      type: "Strategic Regional Office",
      role: "KSA Operations & Vision 2030 Landmark Delivery",
      coordinates: { x: 55.0, y: 46.0 },
      details: "Supporting major hospitality and giga-project fit-out works including Novotel Dhahran and developments across the Red Sea corridor."
    },
    {
      city: "Mumbai",
      country: "India",
      type: "Strategic Regional Office",
      role: "South Asian Technical Engineering & Procurement Liaison",
      coordinates: { x: 67.5, y: 49.0 },
      details: "Engineering support, specialized raw material sourcing, and regional commercial operations."
    }
  ],
  landmarks: [
    { name: "Dubai", country: "UAE", region: "Middle East", project: "Ritz-Carlton, Dorchester Collection, EDITION, Dubai Hills Mansions" },
    { name: "London", country: "United Kingdom", region: "Europe", project: "Private Luxury Residences & Design Studio Collaboration" },
    { name: "Dammam & Dhahran", country: "KSA", region: "Middle East", project: "Novotel Hotel & Residences (Amaad Business Park)" },
    { name: "The Red Sea", country: "KSA", region: "Middle East", project: "Giga-Project Hospitality & Ultra-Luxury Resort Developments" },
    { name: "Dakar", country: "Senegal", region: "West Africa", project: "Four Points by Sheraton (Diamniadio Sports City)" },
    { name: "Kigali", country: "Rwanda", region: "East Africa", project: "Novotel Hotel Kigali" },
    { name: "Port Louis", country: "Mauritius", region: "Indian Ocean", project: "Luxury Island Resort Custom Joinery & Loose Furniture" }
  ]
};

export const CERTIFICATIONS = {
  quality: {
    title: "ISO 9001:2008 Certified Management System",
    description: "Our quality policy conforms to the international standard ISO 9001:2008 as well as all applicable national and international regulatory frameworks. Every process—from raw timber inspection to factory CNC routing, veneer finishing, and final on-site installation—is governed by stringent quality assurance protocols designed around defect prevention.",
    points: [
      "Rigorous understanding and documented translation of client architectural specifications",
      "Full internal resources and state-of-the-art European tooling allocated to each objective",
      "Optimum utilization of employee skills, master craftsmanship, and continuous technical training",
      "Systematic prevention of non-conformities through proactive manufacturing engineering",
      "Rapid-response correction protocols to guarantee defect-free client handover"
    ]
  },
  hse: {
    title: "Health, Safety & Environmental Management (EMS)",
    description: "Polaris conducts all operations with strict regard to moral, environmental, and statutory requirements. We believe that true luxury craftsmanship can only exist within an environment that ensures zero accidents, protects employee welfare, and actively minimizes ecological footprint.",
    points: [
      "Full Environmental Management System (EMS) compliance across factory floor and job sites",
      "Continuous reduction of volatile organic compound (VOC) emissions through filtered spray booths",
      "Centralized 50HP high-capacity cyclonic dust extraction and timber waste recycling",
      "Hazard identification, safe operating procedures, and comprehensive PPE enforcement",
      "Periodic HSE audits and continuous safety refresher certifications for all workshop staff"
    ]
  },
  approvals: [
    "Government of Dubai – Department of Economic Development Licensed",
    "Dubai Investment Park (DIP) Industrial Manufacturing Approval",
    "Civil Defense Approved Fire-Rated Door Manufacturing (Up to 120 Mins)",
    "ISO 9001:2008 Quality Management System Standards Conformance",
    "Dubai Municipality Environmental & Waste Management Clearance"
  ]
};

export const BRANDS = [
  { name: "Marriott International", category: "Hospitality" },
  { name: "The Ritz-Carlton", category: "Hospitality" },
  { name: "Accor Hotels & Resorts", category: "Hospitality" },
  { name: "Radisson Hotel Group", category: "Hospitality" },
  { name: "The Dorchester Collection", category: "Ultra Luxury" },
  { name: "The EDITION Hotels", category: "Luxury Lifestyle" },
  { name: "Hilton Worldwide", category: "Hospitality" },
  { name: "InterContinental Hotels Group", category: "Hospitality" },
  { name: "Emaar Properties", category: "Master Developer" },
  { name: "Sobha Heartland", category: "Luxury Developer" },
  { name: "Multiply Group", category: "Corporate Holding" },
  { name: "Visa CEMEA", category: "Global Enterprise" }
];
