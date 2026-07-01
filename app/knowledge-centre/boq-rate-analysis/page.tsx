import Link from "next/link";
import { boqItems } from "@/lib/knowledge-data";
import { JsonLd } from "@/components/schema";
import { absoluteUrl } from "@/lib/utils";

export const metadata = {
  title: "BOQ and Rate Analysis for Building Repair",
  description:
    "Structured BOQ and rate analysis guide for society building repairs, scaffolding, plaster, waterproofing, RCC repair, painting and PMC billing verification."
};

export default function BoqRateAnalysisPage() {
  const groups = Array.from(new Set(boqItems.map((item) => item.group)));

  return (
    <main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "TechArticle",
          headline: "BOQ and Rate Analysis for Building Repair",
          url: absoluteUrl("/knowledge-centre/boq-rate-analysis"),
          author: { "@type": "Organization", name: "ATLAS CONSULTANT" },
          about: ["Bill of Quantities", "Rate Analysis", "Building Repair", "PMC"]
        }}
      />
      <section className="blueprint bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="text-sm font-semibold text-navy-500">
            <Link href="/">Home</Link> / <Link href="/knowledge-centre">Knowledge Centre</Link> / <span className="text-navy-900">BOQ and Rate Analysis</span>
          </nav>
          <h1 className="mt-8 max-w-4xl text-4xl font-black leading-tight text-navy-950 md:text-6xl">
            BOQ and Rate Analysis for Society Building Repair Projects
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-navy-700">
            A BOQ converts engineering repair diagnosis into measurable tender and billing items. Rate analysis explains how material, labour, access, equipment, overheads, profit and market factors influence final repair cost.
          </p>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 md:grid-cols-3">
            {["Purpose", "Measurement", "Billing Control"].map((title) => (
              <div key={title} className="rounded-lg border border-navy-100 bg-white p-5">
                <h2 className="text-xl font-black text-navy-950">{title}</h2>
                <p className="mt-3 text-sm leading-7 text-navy-700">
                  BOQ language should define scope, unit, method, measurement rule, quality checks and payment condition so society committees can compare tenders fairly.
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 space-y-10">
            {groups.map((group) => (
              <section key={group} className="rounded-lg border border-navy-100 bg-white p-5">
                <h2 className="text-2xl font-black text-navy-950">{group}</h2>
                <div className="mt-5 overflow-x-auto">
                  <table className="w-full min-w-[760px] text-left text-sm">
                    <thead>
                      <tr className="bg-navy-950 text-white">
                        <th className="p-3">Item</th>
                        <th className="p-3">Unit</th>
                        <th className="p-3">Qty</th>
                        <th className="p-3">Rate</th>
                        <th className="p-3">Engineering note</th>
                      </tr>
                    </thead>
                    <tbody>
                      {boqItems
                        .filter((item) => item.group === group)
                        .slice(0, 18)
                        .map((item, index) => (
                          <tr key={`${item.item}-${index}`} className="border-b border-navy-100">
                            <td className="p-3 font-semibold text-navy-950">{item.item}</td>
                            <td className="p-3">{item.unit}</td>
                            <td className="p-3">{item.quantity}</td>
                            <td className="p-3">{item.rate}</td>
                            <td className="p-3">Verify scope, surface condition, access requirement, measurement basis and quality hold points before billing.</td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
