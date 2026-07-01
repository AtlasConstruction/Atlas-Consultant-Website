import {
  BadgeCheck,
  Building2,
  ClipboardCheck,
  FileText,
  Hammer,
  HardHat,
  Ruler,
  Search,
  ShieldCheck,
  Waves
} from "lucide-react";
import { JsonLd } from "@/components/schema";
import { company } from "@/lib/site-data";

export const metadata = {
  title: "Atlas Consultant | Building Repair Consultant & Structural Engineering Experts",
  description:
    "Atlas Consultant is a leading Building Repair Consultant providing structural audits, building repair consultancy, rehabilitation, waterproofing diagnosis, structural engineering, and Project Management Consultancy (PMC) for housing societies and commercial buildings across Mumbai and the MMR."
};

const services = [
  { title: "Structural Audits", icon: Search },
  { title: "Building Repair Consultancy", icon: Hammer },
  { title: "Building Rehabilitation", icon: Building2 },
  { title: "Project Management Consultancy (PMC)", icon: ClipboardCheck },
  { title: "Structural Design & Analysis", icon: Ruler },
  { title: "Structural Retrofitting", icon: HardHat },
  { title: "Waterproofing Diagnosis", icon: Waves },
  { title: "Non-Destructive Testing (NDT)", icon: ShieldCheck },
  { title: "Redevelopment Technical Advisory", icon: Building2 },
  { title: "Tender Documentation & Evaluation", icon: FileText },
  { title: "Site Supervision & Quality Control", icon: BadgeCheck }
];

const strengths = [
  "3 Licensed Structural Engineers",
  "Independent Engineering Consultancy",
  "Transparent Tendering",
  "Technical Documentation",
  "Quality Site Supervision",
  "Long-Term Building Performance",
  "Specialists in Leakage Investigation",
  "Residential & Commercial Building Expertise"
];

export default function AboutPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService", "LocalBusiness"],
    name: company.name,
    slogan: company.tagline,
    url: "https://atlasconsultant.in/about",
    telephone: company.phone,
    email: "atlasconsultant.pmc@outlook.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: company.address,
      addressRegion: "Maharashtra",
      addressCountry: "IN"
    },
    areaServed: ["Mumbai", "Thane", "Navi Mumbai", "Mira Bhayandar", "Vasai Virar", "Mumbai Metropolitan Region"],
    knowsAbout: [
      "Building Repair",
      "Building Repair Consultancy",
      "Structural Audit",
      "Building Rehabilitation",
      "Waterproofing",
      "Structural Engineering",
      "Housing Society Repairs",
      "Project Management Consultancy",
      "Structural Engineer"
    ]
  };

  return (
    <main className="bg-white">
      <JsonLd data={schema} />

      <article>
        <header className="blueprint border-b border-navy-100 bg-slate-50">
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-gold-700">About Atlas Consultant</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight text-navy-950 md:text-6xl">
              Independent structural engineering consultancy for safer, durable buildings
            </h1>
            <p className="mt-6 max-w-[900px] text-lg leading-9 text-navy-700">
              Atlas Consultant is a Building Repair Consultant and structural engineering consultancy serving housing societies, apartment associations and commercial property owners across Mumbai and the Mumbai Metropolitan Region.
            </p>
          </div>
        </header>

        <section className="section bg-white" aria-labelledby="engineering-consultancy">
          <div className="mx-auto max-w-[920px] px-4 sm:px-6 lg:px-8">
            <h2 id="engineering-consultancy" className="text-3xl font-black text-navy-950 md:text-4xl">
              Engineering advice before repair spending
            </h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-navy-800 md:text-lg md:leading-9">
              <p>
                The firm provides independent engineering consultancy for Structural Audit, Building Rehabilitation, Waterproofing diagnosis, Structural Engineering, Project Management Consultancy and Housing Society Repairs. The work is focused on diagnosis, documentation, tender clarity, contractor evaluation and quality-controlled execution.
              </p>
              <p>
                Many societies approach repairs only after leakage, cracks, plaster spalling, corrosion stains or facade distress become visible. As a Building Repair Consultant, Atlas Consultant helps committees understand the cause of distress before approving contractor-driven solutions, so repair decisions are based on structural condition, durability requirements and long-term building performance.
              </p>
              <p>
                The consultancy supports chairmen, secretaries, treasurers and managing committees with technical reporting, repair methodology, tender documentation, site supervision and billing verification. This approach gives societies a clearer path from inspection to completion without losing control of cost, quality or scope.
              </p>
            </div>
          </div>
        </section>

        <section className="section bg-slate-50" aria-labelledby="services">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-[900px] text-center">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-gold-700">Services</p>
              <h2 id="services" className="mt-3 text-3xl font-black text-navy-950 md:text-4xl">
                Consultancy services for audit, repair, waterproofing and PMC
              </h2>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <div key={service.title} className="rounded-lg border border-navy-100 bg-white p-5 shadow-sm">
                    <Icon className="h-6 w-6 text-gold-700" aria-hidden="true" />
                    <h3 className="mt-4 text-lg font-black text-navy-950">{service.title}</h3>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section bg-white" aria-labelledby="why-atlas">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-[900px]">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-gold-700">Why choose Atlas Consultant</p>
              <h2 id="why-atlas" className="mt-3 text-3xl font-black text-navy-950 md:text-4xl">
                Technical independence for confident committee decisions
              </h2>
              <p className="mt-5 text-base leading-8 text-navy-700 md:text-lg md:leading-9">
                Atlas Consultant works as a Building Repair Consultant and Project Management Consultancy partner for societies that need transparent technical advice, not one-size-fits-all repairs. The team brings Structural Engineer expertise to audit findings, repair specifications, waterproofing recommendations and contractor quality control.
              </p>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {strengths.map((item) => (
                <div key={item} className="rounded-lg border border-navy-100 bg-white p-5 shadow-sm">
                  <BadgeCheck className="h-6 w-6 text-gold-700" aria-hidden="true" />
                  <h3 className="mt-4 text-base font-black leading-6 text-navy-950">{item}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section bg-navy-950 text-white" aria-labelledby="experience">
          <div className="mx-auto max-w-[920px] px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-gold-300">Experience</p>
            <h2 id="experience" className="mt-3 text-3xl font-black md:text-4xl">
              MMR-focused building repair and structural audit experience
            </h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-white/76 md:text-lg md:leading-9">
              <p>
                Atlas Consultant has worked across municipal contexts including {company.municipalities.join(", ")} and supports buildings across Mumbai, Thane, Navi Mumbai, Mira Bhayandar, Vasai-Virar and surrounding MMR locations.
              </p>
              <p>
                The company profile highlights work associations including {company.notableClients.join(", ")} and project types such as high-rise residential societies, commercial buildings, leakage-prone structures and buildings requiring repair planning or rehabilitation.
              </p>
              <p>
                For committees searching for a Building Repair Consultant, Structural Audit Consultant, Waterproofing Consultant or Rehabilitation Consultant, the Atlas approach is to define the problem technically first, then guide the society through a documented and measurable repair process.
              </p>
            </div>
          </div>
        </section>

        <footer className="section bg-white" aria-labelledby="contact-atlas">
          <div className="mx-auto max-w-[920px] px-4 text-center sm:px-6 lg:px-8">
            <h2 id="contact-atlas" className="text-3xl font-black text-navy-950 md:text-4xl">
              Speak with Atlas Consultant
            </h2>
            <p className="mt-5 text-base leading-8 text-navy-700 md:text-lg md:leading-9">
              Housing societies, apartment associations and commercial property owners can contact Atlas Consultant for structural audit, building repair consultancy, waterproofing diagnosis, structural engineering and PMC support.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm font-bold">
              <a href={`tel:${company.phone}`} className="rounded-md bg-gold-500 px-5 py-3 text-navy-950">
                Call {company.phone}
              </a>
              <a href="mailto:atlasconsultant.pmc@outlook.com" className="rounded-md border border-navy-200 px-5 py-3 text-navy-950">
                atlasconsultant.pmc@outlook.com
              </a>
            </div>
            <p className="mt-6 text-sm leading-7 text-navy-600">Office: {company.address}</p>
          </div>
        </footer>
      </article>
    </main>
  );
}
