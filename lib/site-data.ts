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
  { href: "/services/structural-audit", label: "Services" },
  { href: "/knowledge-centre", label: "Knowledge" },
  { href: "/projects", label: "Projects" },
  { href: "/process", label: "Process" },
  { href: "/blog", label: "Insights" },
  { href: "/contact", label: "Contact" }
];

export const services = [
  {
    slug: "structural-audit",
    title: "Structural Audit",
    eyebrow: "Society safety and compliance",
    icon: ShieldCheck,
    keywords: ["Structural Audit Consultant Mumbai", "Structural Audit for Housing Societies Mumbai", "Structural Stability Certificate Mumbai"],
    summary:
      "Detailed structural audits for housing societies, residential buildings and commercial properties with damage mapping, NDT coordination, repair recommendations and stability certification guidance.",
    includes: ["Internal flat-wise visual survey", "External facade and common-area survey", "Thermal testing in flats", "Moisture meter detection", "Spider Jhula tapping", "NDT testing coordination", "AutoCAD panel markings", "Repair cost estimates", "Structural stability certificates"],
    process: ["Proposal and process explanation", "Flat-wise internal survey", "External survey using Spider Jhula", "NDT and thermal inspection", "AutoCAD damage mapping", "BOQ and structural audit report"],
    faqs: [
      ["How often should a housing society conduct a structural audit?", "Most societies should conduct periodic structural audits based on building age, municipal requirements and visible distress. Older or leakage-affected buildings should not wait for statutory deadlines."],
      ["Do you provide structural stability certificates?", "Atlas Consultant supports societies with structural assessment, audit documentation and stability certification guidance after the required inspection and repair validation."]
    ]
  },
  {
    slug: "building-repair-rehabilitation",
    title: "Building Repair & Rehabilitation",
    eyebrow: "RCC repair and strengthening",
    icon: Hammer,
    keywords: ["Building Repair Consultant Mumbai", "Society Building Repair Consultant Mumbai", "RCC Repair Consultant Mumbai"],
    summary:
      "Repair consultancy and PMC for RCC repairs, corrosion treatment, facade repairs, crack repair, strengthening, rehabilitation planning and contractor quality monitoring.",
    includes: ["Polymer treatment", "Micro-concrete jacketing", "FRP fibre wrapping", "Epoxy injection grouting", "Readymix plaster work", "External painting with waterproofing warranty", "Facade repairs", "Rehabilitation planning"],
    process: ["Defect survey", "Repair methodology", "BOQ and tender", "Contractor selection", "Site supervision", "Final quality certification"],
    faqs: [
      ["Can Atlas manage the full repair project?", "Yes. The PMC scope can cover tendering, contractor selection, quality control, billing verification, site monitoring and completion documentation."],
      ["Do you design repair methods?", "Repair methods are selected after diagnosis, severity mapping and structural engineering review, including jacketing, corrosion treatment, polymer mortar, FRP wrapping or micro concrete where appropriate."]
    ]
  },
  {
    slug: "waterproofing-consultancy",
    title: "Waterproofing Consultancy",
    eyebrow: "Leakage diagnosis before treatment",
    icon: Droplets,
    keywords: ["Waterproofing Consultant Mumbai", "Terrace Waterproofing Consultant Mumbai", "Leakage Investigation Consultant Mumbai"],
    summary:
      "Waterproofing diagnosis and specification for terraces, external walls, basements and podiums using site investigation, thermal imaging and root-cause analysis.",
    includes: ["Terrace waterproofing", "External wall waterproofing", "Basement waterproofing", "Podium waterproofing", "Thermal-camera leakage investigation", "Moisture detection", "Seepage and dampness assessment", "Warranty documentation coordination"],
    process: ["Leakage history", "Moisture survey", "Thermal camera inspection", "Source tracing", "Specification", "Execution monitoring"],
    faqs: [
      ["Why hire a waterproofing consultant instead of a contractor directly?", "A consultant identifies the leakage source, specifies the right system, prepares scope and monitors quality so the society is not dependent only on contractor claims."],
      ["Do you use thermal cameras?", "Yes. Thermal imaging using FLIR and FLUKE inspection workflows can help identify concealed moisture paths and leakage patterns."]
    ]
  },
  {
    slug: "project-management-consultancy",
    title: "Project Management Consultancy",
    eyebrow: "End-to-end repair PMC",
    icon: ClipboardCheck,
    keywords: ["PMC Consultant Mumbai", "Building Repair PMC Consultant Mumbai", "Project Management Consultant Mumbai"],
    summary:
      "PMC services for society repair and waterproofing projects, including tender preparation, contractor selection, site monitoring, billing verification and quality control.",
    includes: ["Complete site supervision", "Daily work report sheets", "Quality control", "Quantity control", "Leakage solution coordination", "Material management", "Weekly committee meetings", "Microsoft Project work-program monitoring", "Joint measurements", "Payment certificates"],
    process: ["Scope freeze", "Tender and BOQ", "Comparative statement", "Contractor onboarding", "Daily reporting", "Progress review", "Joint measurement and billing verification"],
    faqs: [
      ["What does a repair PMC do for a society?", "A PMC protects the society's technical and financial interest by defining scope, selecting capable contractors, monitoring work quality and verifying bills."],
      ["Can you prepare tender documents?", "Yes. Atlas prepares detailed tender documents, BOQs, technical specifications and contractor comparison statements."]
    ]
  },
  {
    slug: "redevelopment-consultancy",
    title: "Redevelopment Consultancy",
    eyebrow: "Society-first redevelopment advice",
    icon: Building2,
    keywords: ["Redevelopment Consultant Mumbai", "Society Redevelopment Consultant Mumbai", "Housing Society Redevelopment Consultant Mumbai"],
    summary:
      "Redevelopment advisory for housing societies including feasibility, developer selection, tendering support, agreement review coordination and project monitoring.",
    includes: ["Feasibility studies", "Developer selection", "Tendering", "Agreement review", "Project monitoring", "Member communication support"],
    process: ["Feasibility", "Member briefings", "Tender strategy", "Developer evaluation", "Agreement coordination", "Construction monitoring"],
    faqs: [
      ["When should a society consider redevelopment?", "Redevelopment should be evaluated when repairs are technically or financially insufficient, FSI potential is significant, or long-term safety and amenity goals cannot be met through repairs alone."],
      ["Do you help with developer selection?", "Yes. Atlas supports technical tendering, developer comparison and evaluation criteria so committees can make informed decisions."]
    ]
  },
  {
    slug: "structural-engineering",
    title: "Structural Engineering",
    eyebrow: "Design, analysis and repair engineering",
    icon: HardHat,
    keywords: ["Structural Engineer Mumbai", "Structural Engineer Thane", "Structural Engineer Navi Mumbai"],
    summary:
      "Structural design, analysis, RCC design, repair design and strengthening design for residential and society-focused projects.",
    includes: ["Structural design", "Structural analysis", "RCC design", "Repair design", "Structural strengthening design", "Design audit services"],
    process: ["Brief and drawings", "Analysis model", "Design checks", "Drawing issue", "Site queries", "Completion review"],
    faqs: [
      ["Do you provide design audit services?", "Yes. Design audit services are available for societies, developers and committees that need independent technical review."],
      ["Can you design strengthening works?", "Yes. Strengthening design is prepared after diagnosis, load assessment and condition evaluation."]
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
