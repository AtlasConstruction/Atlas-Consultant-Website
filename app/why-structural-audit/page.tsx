import { LeadForm } from "@/components/lead-form";

export const metadata = {
  title: "Why Housing Societies Need Structural Audit",
  description: "Understand structural audit requirements, safety benefits, corrosion detection, leakage investigation, crack identification and structural health monitoring."
};

export default function WhyStructuralAuditPage() {
  const points = [
    ["Society requirements", "As per Model Bye-Law No. 75a, buildings aged 15-30 years should be audited once every 5 years, while buildings over 30 years should be audited once every 3 years."],
    ["Safety benefits", "A structural audit is a health check-up for columns, beams, slabs and core members so hidden weaknesses can be identified before they become occupant hazards."],
    ["Root-cause leakage investigation", "The audit looks beyond dampness and traces whether water ingress is coming from terraces, plumbing, external walls or waterproofing failure."],
    ["Crack identification", "Cracks are classified so the society can distinguish cosmetic plaster cracks from structural cracks that affect load-bearing performance."],
    ["Hidden corrosion detection", "NDT and site inspection can identify corrosion risk in reinforcement before concrete cracking or spalling becomes severe."],
    ["Committee clarity", "Audit reports, BOQs and AutoCAD mappings help committees justify repair budgets, prioritize work and conduct transparent tendering."]
  ];
  return (
    <main>
      <section className="blueprint bg-navy-950 py-20 text-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-gold-300">Structural health</p>
          <h1 className="mt-3 text-4xl font-black md:text-6xl">Why structural audits matter for housing societies</h1>
          <p className="mt-6 text-lg leading-8 text-white/74">
            A structural audit helps committees move from visible symptoms to technical clarity, repair priority and member confidence.
          </p>
        </div>
      </section>
      <section className="section bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.8fr] lg:px-8">
          <div className="grid gap-4">
            {points.map(([point, text]) => (
              <div key={point} className="rounded-lg border border-navy-100 p-6">
                <h2 className="text-2xl font-black text-navy-950">{point}</h2>
                <p className="mt-3 leading-8 text-navy-700">
                  {text}
                </p>
              </div>
            ))}
          </div>
          <LeadForm title="Request Structural Audit" />
        </div>
      </section>
    </main>
  );
}
