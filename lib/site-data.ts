import {
  Award,
  BadgeCheck,
  Building2,
  ClipboardCheck,
  Droplets,
  FileCheck2,
  Hammer,
  HardHat,
  MapPin,
  Radar,
  ShieldCheck,
  Wrench
} from "lucide-react";
import projectPhotoManifest from "../public/project-photos/manifest.json";

export const company = {
  name: "ATLAS CONSULTANT",
  tagline: "Durability that Lasts",
  phone: "+91 99300 81641",
  alternatePhone: "+91 90291 83103",
  whatsapp: "919930081641",
  email: "atlasconstruction406@gmail.com",
  address: "Shop No. 103, Neelam Ruby CHS Ltd., Queens Park, Mira Road (E), Thane - 401 107",
  municipalities: ["BMC", "MBMC", "VVMC", "TMC", "NMMC", "KDMC", "PMC"],
  profilePdf: "/downloads/atlas-profile.pdf",
  notableClients: ["Phoenix Palladium", "DCB Bank", "Peninsula Business Ltd."],
  teamHighlights: [
    "Team of licensed structural engineers",
    "Three licensed structural engineers with IIT Bombay and BMC learning exposure",
    "Specialists in structural analysis, design validation, retrofitting and design audit",
    "Waterproofing and durability experts for leakage-prone buildings"
  ],
  stats: [
    { value: "545+", label: "Structural Audits" },
    { value: "115+", label: "Repair Projects Managed" },
    { value: "62+", label: "Building Designs" },
    { value: "12+", label: "Years Experience" }
  ]
};

export const navLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/knowledge-centre", label: "Knowledge" },
  { href: "/projects", label: "Projects" },
  { href: "/process", label: "Process" },
  { href: "/blog", label: "Insights" },
  { href: "/contact", label: "Contact" }
];

export const services = [
  {
    slug: "structural-audit",
    title: "Structural Engineering & Building Assessment",
    eyebrow: "Audit, diagnosis and building health",
    icon: ShieldCheck,
    keywords: ["Structural Audit Consultant Mumbai", "Structural Stability Certificate Mumbai", "Building Condition Assessment MMR"],
    summary:
      "Independent structural audit, health assessment and technical investigation services for housing societies, commercial buildings, industrial buildings and institutional properties across Mumbai, Thane, Navi Mumbai, Mira Road, Vasai-Virar and the MMR.",
    includes: ["Structural Audit", "Structural Stability Certification", "Structural Health Assessment", "Building Condition Assessment", "Technical Due Diligence", "Structural Investigation", "Crack Investigation", "Thermal Imaging Inspection", "Moisture Investigation", "Building Performance Assessment"],
    benefits: ["Clear engineering diagnosis before repair spending", "Documented safety and serviceability observations", "Better committee decisions for housing society repairs", "Technical basis for repair scope, NDT and PMC planning"],
    process: ["Site briefing and document review", "Visual and instrument-based inspection", "Damage mapping and investigation planning", "Technical assessment and recommendations", "Report, certification guidance and next-step consultancy"],
    faqs: [
      ["Is Atlas Consultant a contractor?", "No. Atlas Consultant works as an independent structural engineering and technical consultancy, focusing on inspection, investigation, reporting, design advice, tender support and PMC controls."],
      ["When should a society conduct a structural audit?", "A society should conduct a structural audit as per applicable municipal requirements and whenever visible cracks, corrosion, leakage, loose plaster, settlement or ageing distress is observed."]
    ]
  },
  {
    slug: "structural-engineering",
    title: "Structural Design & Engineering",
    eyebrow: "Design, analysis and technical drawings",
    icon: HardHat,
    keywords: ["Structural Engineer Mumbai", "Structural Engineer Thane", "Structural Design Consultant Mumbai"],
    summary:
      "Structural design, analysis, drafting and peer-review consultancy for residential, commercial and industrial buildings, including repair design, renovation design, retrofitting design and as-built documentation.",
    includes: ["Residential Building Design", "Commercial Building Design", "Industrial Building Design", "RCC Design", "Steel Structure Design", "Foundation Design", "Retrofitting Design", "Repair Design", "Renovation Design", "Structural Peer Review", "AutoCAD Drafting", "As-Built Drawings"],
    benefits: ["Independent structural engineering input", "Design decisions backed by calculations and drawings", "Better coordination between societies, architects and contractors", "Technical clarity for repair, strengthening and renovation works"],
    process: ["Brief, drawings and site data review", "Structural analysis and design checks", "Design option selection", "Drawing and calculation preparation", "Clarifications during execution or review"],
    faqs: [
      ["Do you provide structural peer review?", "Yes. Atlas Consultant provides independent structural peer review for societies, property owners and project teams that need technical validation."],
      ["Can you prepare repair and retrofitting design?", "Yes. Repair and retrofitting design can be prepared after inspection, condition assessment and review of structural requirements."]
    ]
  },
  {
    slug: "building-repair-rehabilitation",
    title: "Building Repair & Rehabilitation Consultancy",
    eyebrow: "RCC repair and rehabilitation advisory",
    icon: Hammer,
    keywords: ["Building Repair Consultant Mumbai", "Building Repair Consultancy Mumbai", "RCC Repair Consultant Mumbai"],
    summary:
      "Professional building repair consultancy for RCC repair, concrete rehabilitation, structural strengthening, facade rehabilitation, repair specifications, BOQ preparation and tender documentation. Atlas Consultant provides engineering advice and PMC support, not contractor-led execution.",
    includes: ["Building Repair Consultancy", "RCC Repair Consultancy", "Concrete Rehabilitation", "Structural Strengthening", "Building Restoration", "Facade Rehabilitation", "Polymer Modified Mortar Repair", "Polymer Modified Concrete Repair", "Micro Concrete Repair", "Fibre Reinforced Polymer (FRP) Strengthening", "Carbon Fibre Strengthening (CFRP)", "Structural Jacketing", "Epoxy Injection", "Pressure Grouting", "PU Injection Grouting", "Cementitious Grouting", "Corrosion Treatment", "Rebar Treatment & Replacement", "Honeycomb Repair", "Spalled Concrete Repair", "Expansion Joint Repair", "Repair Specifications", "Repair Cost Estimation (BOQ)", "Tender Documentation"],
    benefits: ["Independent repair methodology before contractor appointment", "Transparent repair scope and BOQ", "Reduced risk of patchwork and repeated repair failure", "Quality-focused site supervision and bill verification"],
    process: ["Defect survey and diagnosis", "Repair methodology and scope preparation", "BOQ, tender and contractor evaluation", "Repair PMC and quality checkpoints", "Completion review and documentation"],
    faqs: [
      ["What does a building repair consultant do?", "A building repair consultant diagnoses defects, prepares repair methodology, defines BOQ and tender scope, evaluates contractors and monitors quality so the society is not dependent only on contractor recommendations."],
      ["Does Atlas Consultant execute repair work as a contractor?", "No. Atlas Consultant focuses on structural engineering consultancy, repair advisory, tender documentation, PMC, supervision and quality control."]
    ]
  },
  {
    slug: "waterproofing-consultancy",
    title: "Waterproofing & Leakage Consultancy",
    eyebrow: "Leakage diagnosis and waterproofing systems",
    icon: Droplets,
    keywords: ["Waterproofing Consultant Mumbai", "Leakage Investigation Consultant Mumbai", "Terrace Waterproofing Consultant Mumbai"],
    summary:
      "Waterproofing and leakage consultancy for terraces, podiums, basements, toilets, external walls, tanks and expansion joints using moisture investigation, thermal camera leak detection and system-based specifications.",
    includes: ["Terrace Waterproofing", "Podium Waterproofing", "Basement Waterproofing", "Toilet Waterproofing", "External Wall Waterproofing", "Water Tank Waterproofing", "Expansion Joint Waterproofing", "Leakage Investigation", "Thermal Camera Leak Detection", "Crystalline Waterproofing", "Polymer Cementitious Waterproofing", "PU Waterproofing Systems", "APP Membrane Systems", "SBS Membrane Systems"],
    benefits: ["Root-cause leakage diagnosis before treatment", "System selection suited to site condition", "Reduced dependency on generic waterproofing proposals", "Warranty and quality-control documentation support"],
    process: ["Leakage history and visual inspection", "Moisture and thermal imaging review", "Source tracing and system selection", "Specification and tender-ready scope", "Execution monitoring and final checks"],
    faqs: [
      ["Why hire a waterproofing consultant instead of a contractor directly?", "A consultant identifies the leakage source, specifies the right system, prepares scope and monitors quality so the society is not dependent only on contractor claims."],
      ["Do you use thermal cameras for leakage detection?", "Yes. Thermal imaging can help identify concealed dampness and leakage patterns when used with site observations and moisture assessment."]
    ]
  },
  {
    slug: "ndt-testing-coordination",
    title: "Non-Destructive Testing (NDT) Coordination",
    eyebrow: "Testing support for structural diagnosis",
    icon: Radar,
    keywords: ["NDT Testing Mumbai", "Rebound Hammer Test Mumbai", "UPV Test Mumbai"],
    summary:
      "NDT coordination for structural audits and repair investigations, including test selection, agency coordination, site support and interpretation of findings in the context of building condition.",
    includes: ["NDT Investigation", "Rebound Hammer Test", "Ultrasonic Pulse Velocity (UPV)", "Core Testing Coordination", "Cover Meter Survey", "Carbonation Test", "Half Cell Potential Test", "Chemical Testing Coordination"],
    benefits: ["Testing aligned with engineering questions", "Better understanding of concrete quality and corrosion risk", "Useful inputs for repair design and rehabilitation planning", "Avoids unnecessary or poorly targeted testing"],
    process: ["Define testing objective", "Select appropriate NDT methods", "Coordinate testing agency and locations", "Review test results", "Integrate findings into audit or repair recommendations"],
    faqs: [
      ["Is NDT required for every structural audit?", "Not always. NDT should be selected based on building age, visible distress, corrosion risk, structural importance and the engineering question being investigated."],
      ["Does Atlas perform laboratory testing directly?", "Atlas Consultant coordinates and interprets testing through suitable agencies where required, while keeping the consultancy role independent."]
    ]
  },
  {
    slug: "project-management-consultancy",
    title: "Project Management Consultancy",
    eyebrow: "Planning, tendering, supervision and control",
    icon: ClipboardCheck,
    keywords: ["PMC Consultant Mumbai", "Building Repair PMC Consultant Mumbai", "Project Management Consultant Mumbai"],
    summary:
      "PMC consultancy for building repair, waterproofing, painting, rehabilitation and society engineering projects, covering planning, tendering, contractor evaluation, QA/QC, monitoring, billing and completion documentation.",
    includes: ["Project Planning", "BOQ Preparation", "Tender Preparation", "Contractor Evaluation", "Bid Comparison", "Agreement Documentation", "Technical Documentation", "Site Supervision", "Quality Assurance & Quality Control", "Progress Monitoring", "Cost Control", "Bill Certification", "Project Completion Consultancy"],
    benefits: ["Protects the society's technical and financial interest", "Improves transparency in contractor appointment and billing", "Creates measurable quality checkpoints", "Supports committee decisions with documentation"],
    process: ["Project scope freeze", "BOQ and tender preparation", "Contractor evaluation and bid comparison", "Site supervision and QA/QC", "Bill certification and completion consultancy"],
    faqs: [
      ["What does a repair PMC do for a society?", "A PMC protects the society's technical and financial interest by defining scope, selecting capable contractors, monitoring work quality and verifying bills."],
      ["Can Atlas prepare tender documents?", "Yes. Atlas Consultant prepares technical tender documents, BOQs, specifications and contractor comparison inputs for committee review."]
    ]
  },
  {
    slug: "redevelopment-consultancy",
    title: "Redevelopment Consultancy",
    eyebrow: "Society-first redevelopment advice",
    icon: Building2,
    keywords: ["Redevelopment Consultant Mumbai", "Society Redevelopment Consultant Mumbai", "Housing Society Redevelopment Consultant Mumbai"],
    summary:
      "Technical redevelopment consultancy for housing societies, including existing building assessment, feasibility support, developer evaluation, technical due diligence and redevelopment advisory.",
    includes: ["Redevelopment Feasibility Study", "Existing Building Assessment", "Society Technical Advisory", "Developer Evaluation", "Technical Due Diligence", "Redevelopment Support"],
    benefits: ["Technical clarity before major redevelopment decisions", "Independent assessment of existing building condition", "Structured developer evaluation support", "Better communication between committee, members and advisors"],
    process: ["Existing building assessment", "Feasibility and technical review", "Developer evaluation inputs", "Technical due diligence", "Redevelopment support and monitoring inputs"],
    faqs: [
      ["When should a society consider redevelopment?", "Redevelopment should be evaluated when repairs are technically or financially insufficient, FSI potential is significant, or long-term safety and amenity goals cannot be met through repairs alone."],
      ["Do you help with developer selection?", "Yes. Atlas supports technical tendering, developer comparison and evaluation criteria so committees can make informed decisions."]
    ]
  },
  {
    slug: "plumbing-utility-consultancy",
    title: "Plumbing & Utility Consultancy",
    eyebrow: "Water supply, drainage and utility assessment",
    icon: Wrench,
    keywords: ["Plumbing Rehabilitation Consultant Mumbai", "Drainage System Assessment Mumbai", "Utility Infrastructure Assessment MMR"],
    summary:
      "Technical consultancy for plumbing rehabilitation, water supply condition review, drainage assessment, rainwater pipe planning and utility infrastructure assessment in housing societies and commercial buildings.",
    includes: ["Plumbing Rehabilitation", "Water Supply Assessment", "Drainage System Assessment", "Rainwater Pipe Consultancy", "Utility Infrastructure Assessment"],
    benefits: ["Identifies recurring leakage and drainage issues", "Improves coordination with civil repair and waterproofing scope", "Supports long-term maintenance planning", "Creates a documented technical basis for utility upgrades"],
    process: ["Utility complaint and layout review", "Site inspection and condition assessment", "Repair or replacement recommendations", "Scope and specification preparation", "PMC support during execution where required"],
    faqs: [
      ["Can plumbing rehabilitation be planned with building repair?", "Yes. Plumbing, waterproofing and facade repair scopes should be coordinated to avoid repeated breaking, leakage and rework."],
      ["Do you inspect rainwater pipes?", "Yes. Rainwater pipe condition and routing can be reviewed as part of building repair, leakage or monsoon-readiness consultancy."]
    ]
  },
  {
    slug: "painting-protective-coating-consultancy",
    title: "Painting & Protective Coating Consultancy",
    eyebrow: "Facade protection and coating systems",
    icon: Award,
    keywords: ["External Painting Consultant Mumbai", "Anti Carbonation Coating Consultant", "Protective Coating Systems Mumbai"],
    summary:
      "Consultancy for external painting, facade coatings, anti-carbonation systems and protective coating specifications after repair, waterproofing or rehabilitation works.",
    includes: ["External Painting Consultancy", "Internal Painting Consultancy", "Podium Painting Consultancy", "Facade Painting Consultancy", "Anti-Carbonation Coatings", "Protective Coating Systems"],
    benefits: ["Coating selection aligned with building exposure", "Better protection after concrete repair", "Clear material specifications and quality checks", "Reduced risk of premature coating failure"],
    process: ["Surface condition assessment", "Coating system selection", "Specification and tender scope", "Surface preparation quality checks", "Application monitoring and completion review"],
    faqs: [
      ["Why does painting need consultancy?", "Painting and protective coating failures often come from poor surface preparation, wrong system selection or weak quality checks. Consultancy defines the correct technical scope."],
      ["Do anti-carbonation coatings help RCC buildings?", "Anti-carbonation coatings can help reduce carbonation ingress when selected and applied correctly after concrete repair and surface preparation."]
    ]
  },
  {
    slug: "beautification-horticulture-consultancy",
    title: "Beautification & Horticulture Consultancy",
    eyebrow: "Common area and landscape improvement",
    icon: MapPin,
    keywords: ["Society Beautification Consultant Mumbai", "Landscape Planning Consultant MMR", "Podium Landscape Design Mumbai"],
    summary:
      "Consultancy for society beautification, garden development, podium landscape planning, hardscape, softscape and common area enhancement after technical feasibility and utility coordination.",
    includes: ["Landscape Planning", "Garden Development", "Society Beautification", "Podium Landscape Design", "Hardscape Design", "Softscape Design", "Tree Plantation Planning", "Common Area Enhancement"],
    benefits: ["Improves common areas without compromising technical performance", "Coordinates landscape with waterproofing and drainage requirements", "Supports phased society improvement planning", "Creates a cleaner brief for vendors and committees"],
    process: ["Common area review", "Landscape and utility constraints check", "Concept and scope preparation", "Vendor scope coordination", "Quality and completion review"],
    faqs: [
      ["Can podium landscape affect waterproofing?", "Yes. Podium landscaping should be coordinated with waterproofing, drainage and loading considerations to avoid leakage and maintenance problems."],
      ["Do you help societies plan common area upgrades?", "Yes. Atlas Consultant can support technical planning and scope preparation for society common area enhancement."]
    ]
  },
  {
    slug: "society-engineering-advisory",
    title: "Society Engineering Advisory",
    eyebrow: "Preventive maintenance and committee support",
    icon: FileCheck2,
    keywords: ["Society Technical Advisory Mumbai", "Annual Building Inspection Mumbai", "Preventive Maintenance Planning MMR"],
    summary:
      "Ongoing engineering advisory for housing societies, including annual building inspection, preventive maintenance planning, capital repair planning, reserve fund support and engineering documentation.",
    includes: ["Annual Building Inspection", "Preventive Maintenance Planning", "Capital Repair Planning", "Reserve Fund Planning Support", "Engineering Documentation", "AutoCAD Damage Mapping", "Society Technical Advisory"],
    benefits: ["Moves societies from reactive repair to planned maintenance", "Supports budget planning for major repairs", "Improves committee records and member communication", "Creates continuity across audits, repairs and PMC decisions"],
    process: ["Annual inspection or advisory brief", "Record and complaint review", "Priority mapping", "Budget and maintenance planning support", "Committee-ready technical documentation"],
    faqs: [
      ["Can Atlas support annual maintenance planning?", "Yes. Annual inspections and preventive maintenance planning help societies identify priority repairs before they become emergency works."],
      ["Can you support reserve fund planning?", "Atlas Consultant can provide technical inputs and repair-priority guidance that committees may use for capital repair and reserve fund planning discussions."]
    ]
  },
  {
    slug: "municipal-technical-coordination",
    title: "Municipal & Technical Coordination",
    eyebrow: "Documentation and authority coordination support",
    icon: BadgeCheck,
    keywords: ["Municipal Technical Coordination Mumbai", "Repair Permission Documentation Mumbai", "Structural Audit Permission Documentation"],
    summary:
      "Technical documentation and coordination support for municipal repair requirements, structural audit documentation, technical reports, authority submission assistance and engineering liaison.",
    includes: ["Municipal Technical Coordination", "Repair Permission Documentation", "Structural Audit Permission Documentation", "Technical Reports", "Authority Submission Assistance", "Engineering Liaison Support"],
    benefits: ["Better documentation for committee and authority processes", "Clear technical reports for repair or audit matters", "Support across municipal contexts in the MMR", "Reduces confusion around technical submission requirements"],
    process: ["Requirement and jurisdiction review", "Technical document preparation", "Coordination inputs for authority submission", "Clarification and response support", "Record closeout for society files"],
    faqs: [
      ["Do you help with municipal technical documents?", "Yes. Atlas Consultant supports technical reports, repair documentation and coordination inputs where engineering documentation is required."],
      ["Which municipal areas do you understand?", "Atlas Consultant has experience across BMC, MBMC, VVMC, TMC, NMMC, KDMC and PMC contexts."]
    ]
  }
];

export const usps = [
  { title: "Thermal Camera Leak Detection", text: "FLIR and FLUKE-led inspection workflows for concealed leakage and dampness diagnosis.", icon: Radar },
  { title: "Spider Jhula Building Inspection", text: "Close-range external inspection for facades, cracks, leakage points and unsafe plaster zones.", icon: Wrench },
  { title: "In-House Audit Software", text: "Structured defect capture, advanced damage mapping and consistent society reporting.", icon: FileCheck2 },
  { title: "AutoCAD Crack Mapping", text: "Technical drawings that help committees understand risk zones, scope and contractor responsibility.", icon: MapPin },
  { title: "FRP & Micro Concrete Expertise", text: "Repair methodology advice for FRP wrapping, jacketing and structural strengthening.", icon: Award },
  { title: "End-to-End PMC", text: "Tender documentation, contractor selection, quality control, billing verification and completion support.", icon: BadgeCheck }
];

export const processSteps = [
  "Proposal",
  "Structural Audit",
  "Tender Process",
  "Project Management Consultant",
  "Stability Certificate"
];

export const detailedAuditSteps = [
  "Site Visit",
  "Investigation",
  "Structural Audit",
  "Budget Estimation",
  "Tender Preparation",
  "Contractor Selection",
  "PMC Monitoring",
  "Quality Control",
  "Project Completion",
  "Structural Stability Certification"
];

export const ndtTests = [
  "Rebound Hammer Test",
  "Ultrasonic Pulse Velocity (UPV) Test",
  "Half-Cell Potentiometer Test",
  "Carbonation Test",
  "Core Test"
];

export const tenderRequirements = [
  "Detailed tender documents for structural repairs, retrofitting, civil repairs, plastering, plumbing, waterproofing, painting, finishing and beautification",
  "Earnest Money Deposit (EMD) requirement",
  "10% retention clause",
  "Approved material brand specifications",
  "Public tender invitation in Marathi and English newspapers",
  "Sealed tender submission through the society tender box",
  "Contractor bank solvency certificate",
  "Minimum 10 years contractor experience",
  "Past and present project disclosure",
  "Legal compliance and pending-case disclosure",
  "BOQ-based comparative statements",
  "Transparent negotiation in the presence of society representatives"
];

export const locations = [
  "Mumbai",
  "South Mumbai",
  "Western Suburbs",
  "Eastern Suburbs",
  "Thane",
  "Navi Mumbai",
  "Mira Road",
  "Bhayandar",
  "Vasai",
  "Virar",
  "Nalasopara",
  "Panvel",
  "Kalyan",
  "Dombivli",
  "Bhiwandi",
  "Borivali",
  "Kandivali",
  "Malad",
  "Goregaon",
  "Andheri",
  "Powai",
  "Mulund",
  "Ghatkopar",
  "Chembur",
  "Vashi",
  "Nerul",
  "Belapur",
  "Airoli",
  "Seawoods",
  "Ghodbunder Road"
];

export const landingPages = [
  ["structural-audit-mumbai", "Structural Audit Consultant Mumbai", "Mumbai", "structural-audit"],
  ["structural-audit-thane", "Structural Audit Consultant Thane", "Thane", "structural-audit"],
  ["structural-audit-navi-mumbai", "Structural Audit Consultant Navi Mumbai", "Navi Mumbai", "structural-audit"],
  ["structural-audit-mira-road", "Structural Audit Consultant Mira Road", "Mira Road", "structural-audit"],
  ["building-repair-mumbai", "Building Repair Consultant Mumbai", "Mumbai", "building-repair-rehabilitation"],
  ["building-repair-thane", "Building Repair Consultant Thane", "Thane", "building-repair-rehabilitation"],
  ["building-repair-navi-mumbai", "Building Repair Consultant Navi Mumbai", "Navi Mumbai", "building-repair-rehabilitation"],
  ["waterproofing-mumbai", "Waterproofing Consultant Mumbai", "Mumbai", "waterproofing-consultancy"],
  ["waterproofing-thane", "Waterproofing Consultant Thane", "Thane", "waterproofing-consultancy"],
  ["waterproofing-navi-mumbai", "Waterproofing Consultant Navi Mumbai", "Navi Mumbai", "waterproofing-consultancy"],
  ["pmc-consultant-mumbai", "PMC Consultant Mumbai", "Mumbai", "project-management-consultancy"],
  ["pmc-consultant-thane", "PMC Consultant Thane", "Thane", "project-management-consultancy"],
  ["pmc-consultant-navi-mumbai", "PMC Consultant Navi Mumbai", "Navi Mumbai", "project-management-consultancy"],
  ["redevelopment-consultant-mumbai", "Redevelopment Consultant Mumbai", "Mumbai", "redevelopment-consultancy"],
  ["redevelopment-consultant-thane", "Redevelopment Consultant Thane", "Thane", "redevelopment-consultancy"],
  ["redevelopment-consultant-navi-mumbai", "Redevelopment Consultant Navi Mumbai", "Navi Mumbai", "redevelopment-consultancy"]
] as const;

export const expertiseImages = [
  { src: "/profile-pages/atlas-expertise-18.png", title: "Building Repairs: Restoration Journey" },
  { src: "/profile-pages/atlas-expertise-19.png", title: "Polymer Treatment" },
  { src: "/profile-pages/atlas-expertise-20.png", title: "Micro-Concrete with Jacketing" },
  { src: "/profile-pages/atlas-expertise-21.png", title: "Fibre Wrapping Structural Strengthening" },
  { src: "/profile-pages/atlas-expertise-22.png", title: "Readymix Plaster Work" },
  { src: "/profile-pages/atlas-expertise-23.png", title: "Epoxy Injection Grouting" },
  { src: "/profile-pages/atlas-expertise-24.png", title: "External Painting" },
  { src: "/profile-pages/atlas-expertise-25.png", title: "Terrace Waterproofing" }
];

type ProjectPhoto = {
  src: string;
  card: string;
  width?: number;
  height?: number;
  original?: string;
};

const projectPhotosByOriginal = new Map(
  (projectPhotoManifest as ProjectPhoto[]).map((photo) => [photo.original?.replace(/^word\//, ""), photo])
);

function projectPhoto(original: string, projectName: string, index: number) {
  const photo = projectPhotosByOriginal.get(original);
  if (!photo) {
    throw new Error(`Missing project photo for ${original}`);
  }

  return {
    ...photo,
    alt: `${projectName} project photograph ${index + 1}`
  };
}

const projectPortfolio = [
  { name: "Forest Hill Co. Op. Hsg. Soc. Ltd.", media: ["media/image1.jpeg", "media/image2.jpeg", "media/image3.jpeg", "media/image4.jpeg", "media/image5.jpeg", "media/image6.jpeg", "media/image7.jpeg"] },
  { name: "Vasudev Planet Co. Op. Hsg. Soc. Ltd.", media: ["media/image8.jpeg", "media/image9.jpeg", "media/image10.jpeg", "media/image11.jpeg", "media/image12.jpeg", "media/image13.jpeg", "media/image14.jpeg"] },
  { name: "Narendra Park Venus Co. Op. Hsg. Soc. Ltd.", media: ["media/image15.jpeg", "media/image16.jpeg", "media/image17.jpeg", "media/image18.jpeg", "media/image19.jpeg", "media/image20.jpeg", "media/image21.jpeg"] },
  { name: "Om Shivalaya 2A and 2B Co. Op. Hsg. Soc. Ltd.", media: ["media/image22.jpeg", "media/image23.jpeg", "media/image24.jpeg", "media/image25.jpeg", "media/image26.jpeg", "media/image27.jpeg", "media/image28.jpeg"] },
  { name: "Sana Heights Co. Op. Hsg. Soc. Ltd.", media: ["media/image29.jpeg", "media/image30.jpeg", "media/image31.jpeg", "media/image32.jpeg", "media/image33.jpeg", "media/image34.jpeg", "media/image35.jpeg"] },
  { name: "Ostwal Heights Building 1 Co. Op. Hsg. Soc. Ltd.", media: ["media/image36.png", "media/image37.jpeg", "media/image38.jpeg", "media/image39.jpeg", "media/image40.jpeg", "media/image41.jpeg", "media/image42.jpeg"] },
  { name: "Ostwal Heights Building 3 Co. Op. Hsg. Soc. Ltd.", media: ["media/image43.jpeg", "media/image44.jpeg", "media/image45.jpeg", "media/image46.jpeg", "media/image47.jpeg", "media/image48.jpeg", "media/image49.jpeg"] },
  { name: "Lake View Co. Op. Hsg. Soc. Ltd.", media: ["media/image50.jpeg", "media/image51.jpeg", "media/image52.jpeg", "media/image53.jpeg", "media/image54.jpeg", "media/image55.jpeg", "media/image56.jpeg"] },
  { name: "DCB Bank Ltd.", media: ["media/image57.jpeg", "media/image58.jpeg", "media/image59.jpeg", "media/image60.jpeg", "media/image61.jpeg", "media/image62.jpeg", "media/image63.jpeg"] },
  { name: "Royal Accord 3 Co. Op. Hsg. Soc. Ltd.", media: ["media/image64.jpeg", "media/image65.jpeg", "media/image66.jpeg", "media/image67.jpeg", "media/image68.jpeg", "media/image69.jpeg", "media/image70.jpeg"] },
  { name: "Peninsula Business Ltd.", media: ["media/image71.jpeg"] },
  { name: "Jyestha Srishti Co. Op. Hsg. Soc. Ltd.", media: ["media/image72.jpeg", "media/image73.jpeg", "media/image74.jpeg", "media/image75.jpeg", "media/image76.jpeg", "media/image77.jpeg", "media/image78.jpeg"] },
  { name: "Asmita Sameer Co. Op. Hsg. Soc. Ltd.", media: ["media/image79.jpeg", "media/image80.jpeg", "media/image81.jpeg", "media/image82.jpeg", "media/image83.jpeg", "media/image84.jpeg", "media/image85.jpeg"] },
  { name: "Ayesha Apartment Co. Op. Hsg. Soc. Ltd.", media: ["media/image86.jpeg", "media/image87.jpeg", "media/image88.jpeg", "media/image89.jpeg", "media/image90.jpeg", "media/image91.jpeg", "media/image92.jpeg"] },
  { name: "Khushi Residency Co. Op. Hsg. Soc. Ltd.", media: ["media/image93.jpeg", "media/image94.jpeg", "media/image95.jpeg", "media/image96.jpeg", "media/image97.jpeg", "media/image98.jpeg", "media/image99.jpeg"] },
  { name: "Sukh Angan Co. Op. Hsg. Soc. Ltd.", media: ["media/image100.jpeg"] },
  { name: "Satyadeep Co. Op. Hsg. Soc. Ltd.", media: ["media/image101.jpeg"] },
  { name: "Marigold 1 Co. Op. Hsg. Soc. Ltd.", media: ["media/image102.jpeg"] },
  { name: "Silver Oak 1 Co. Op. Hsg. Soc. Ltd.", media: ["media/image103.jpeg"] }
];

export const projects = projectPortfolio.map((project, index) => {
  const photos = project.media.map((media, photoIndex) => projectPhoto(media, project.name, photoIndex));
  const [featuredImage, ...workPhotos] = photos;

  return {
    slug: `housing-society-case-study-${index + 1}`,
    name: project.name,
    category: "Project Portfolio",
    image: featuredImage.card,
    imageFull: featuredImage.src,
    imageAlt: featuredImage.alt,
    gallery: workPhotos,
    photoCount: photos.length,
    source: "PROJECT PHOTOS.docx"
  };
});

const generatedBlogTopics = [
  "Structural Audit for Housing Societies in Mumbai",
  "How to Read a Structural Audit Report",
  "Structural Stability Certificate Requirements",
  "RCC Repair Methods for Old Buildings",
  "Corrosion Treatment in Coastal Mumbai Buildings",
  "Terrace Waterproofing for Housing Societies",
  "External Wall Leakage Investigation",
  "Basement Waterproofing Diagnosis",
  "Podium Waterproofing Checklist",
  "Why Societies Need Repair PMC",
  "Tender Preparation for Building Repairs",
  "Contractor Selection for Society Repairs",
  "Billing Verification in Repair Projects",
  "Quality Control for RCC Repair",
  "Redevelopment Feasibility for Housing Societies",
  "Developer Selection in Redevelopment",
  "Repair vs Redevelopment Decision Guide",
  "Crack Mapping for Residential Buildings",
  "Thermal Imaging for Leakage Detection",
  "Spider Jhula Facade Inspection",
  "FRP Wrapping in Structural Strengthening",
  "Micro Concrete Jacketing Explained",
  "Carbonation and Chloride Attack",
  "Building Repair Budget Planning",
  "Society Committee Repair Checklist",
  "NDT Testing in Structural Audits",
  "Rebound Hammer Test for Buildings",
  "Ultrasonic Pulse Velocity Testing",
  "Core Cutting Test in Concrete",
  "Dampness Assessment for Apartments",
  "Seepage Repair Planning",
  "Facade Repair Safety",
  "Monsoon Readiness for Housing Societies",
  "Structural Engineer Role in Repairs",
  "PMC Consultant Role in Mumbai",
  "Repair Tender BOQ Explained",
  "Comparative Statement for Contractors",
  "Waterproofing Warranty Red Flags",
  "Common Building Distress Signs",
  "Audit Frequency for Old Buildings",
  "Society Member Communication During Repairs",
  "How to Avoid Repair Cost Escalation",
  "Structural Audit in Thane",
  "Structural Audit in Navi Mumbai",
  "Building Repair in Mumbai Suburbs",
  "Waterproofing in Coastal Buildings",
  "Leakage Source Identification",
  "Structural Strengthening Design",
  "Design Audit for Societies",
  "Completion Certificates for Repair Works",
  "Post Repair Maintenance Plan",
  "Choosing a Structural Consultant Near Me"
].map((title, index) => ({
  slug: title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
  title,
  category: ["Structural Audit", "Waterproofing", "Building Repairs", "PMC", "Redevelopment", "Society Management"][index % 6],
  readingTime: `${7 + (index % 5)} min read`
}));

export const blogTopics = [
  {
    slug: "maharashtra-bpms-bmc-structural-engineer-license",
    title: "How to Obtain a Maharashtra State Structural Engineer License and BMC Structural Engineer License",
    category: "Structural Engineering",
    readingTime: "8 min read"
  },
  ...generatedBlogTopics
];

export const faqs = Array.from({ length: 52 }, (_, index) => {
  const topic = blogTopics[index % blogTopics.length].title;
  return {
    question: `What should a housing society know about ${topic.toLowerCase()}?`,
    answer:
      "The committee should begin with a qualified inspection, written technical scope, transparent budget estimate and consultant-led quality checks before appointing any contractor."
  };
});
