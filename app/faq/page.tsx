import { FaqSchema } from "@/components/schema";
import { faqs } from "@/lib/site-data";

export const metadata = {
  title: "FAQs for Structural Audit, Repair, Waterproofing and PMC",
  description: "Frequently asked questions for housing societies about structural audit, building repair, waterproofing, tendering, PMC and redevelopment."
};

export default function FaqPage() {
  return (
    <main className="section bg-navy-50">
      <FaqSchema faqs={faqs} />
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-black uppercase tracking-[0.18em] text-gold-700">FAQs</p>
        <h1 className="mt-3 text-4xl font-black text-navy-950 md:text-6xl">Housing society consultancy FAQs</h1>
        <div className="mt-10 grid gap-4">
          {faqs.map((faq) => (
            <details key={faq.question} className="rounded-lg bg-white p-5 shadow-sm">
              <summary className="cursor-pointer font-black text-navy-950">{faq.question}</summary>
              <p className="mt-3 leading-7 text-navy-700">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </main>
  );
}
