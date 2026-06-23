import { processSteps } from "@/lib/site-data";

export const metadata = {
  title: "Society Repair Consultancy Process",
  description: "Atlas Consultant process from site visit and investigation to tendering, PMC monitoring, quality control and structural stability documentation."
};

export default function ProcessPage() {
  return (
    <main className="section bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-black uppercase tracking-[0.18em] text-gold-700">Methodology</p>
        <h1 className="mt-3 text-4xl font-black text-navy-950 md:text-6xl">A committee-friendly process for safer society buildings</h1>
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {processSteps.map((step, index) => (
            <div key={step} className="rounded-lg border border-navy-100 bg-navy-50 p-6">
              <span className="text-sm font-black text-gold-700">Step {index + 1}</span>
              <h2 className="mt-2 text-2xl font-black text-navy-950">{step}</h2>
              <p className="mt-3 leading-7 text-navy-700">
                Atlas Consultant documents the requirement, technical observations, decision points and committee approvals so every stage is traceable and aligned with society objectives.
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
