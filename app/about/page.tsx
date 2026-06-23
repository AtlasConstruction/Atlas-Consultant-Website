import { SectionHeading } from "@/components/section-heading";
import { company } from "@/lib/site-data";

export const metadata = {
  title: "About Atlas Consultant",
  description: "About Atlas Consultant, specialist structural audit, building repair, waterproofing, redevelopment and PMC consultants for housing societies."
};

export default function AboutPage() {
  return (
    <main className="section bg-white">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="About us" title="Engineering-led consultancy focused exclusively on housing society outcomes" />
        <div className="prose prose-lg max-w-none text-navy-800">
          <p>
            ATLAS CONSULTANT is a specialist consultancy for cooperative housing societies, apartment associations and managing committees across Mumbai Metropolitan Region. The firm supports societies through structural audit, building repair and rehabilitation, waterproofing diagnosis, redevelopment advisory, structural engineering and project management consultancy.
          </p>
          <p>
            The company&apos;s society-focused approach is built around independent diagnosis, clear technical documentation, transparent tendering and disciplined site monitoring. Instead of treating repair as a contractor-led activity, Atlas helps chairmen, secretaries, treasurers and committee members understand the building condition, budget implications, execution risks and quality controls needed for durable outcomes.
          </p>
          <p>
            Atlas Consultant has experience with municipal contexts including {company.municipalities.join(", ")} and supports buildings across Mumbai, Thane, Navi Mumbai, Mira Bhayandar, Vasai-Virar and surrounding MMR locations.
          </p>
          <h2>Profile-Backed Strengths</h2>
          <ul>
            {company.teamHighlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p>
            The company profile highlights notable work associations including {company.notableClients.join(", ")} and project types such as high-rise residential and commercial buildings, structurally challenging buildings and leakage-prone buildings.
          </p>
          <p>
            Office: {company.address}. Contact: {company.phone}, {company.alternatePhone}, {company.email}.
          </p>
        </div>
      </div>
    </main>
  );
}
