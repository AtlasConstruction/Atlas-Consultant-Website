import { LeadForm } from "@/components/lead-form";
import { tenderRequirements } from "@/lib/site-data";

export const metadata = {
  title: "Tendering Consultant for Society Building Repairs",
  description: "Tender documents, BOQ preparation, contractor selection, comparative statements, contract review and award process for housing society repairs."
};

export default function TenderingPage() {
  return (
    <main className="section bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.75fr] lg:px-8">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-gold-700">Tendering</p>
          <h1 className="mt-3 text-4xl font-black text-navy-950 md:text-6xl">Transparent tendering for society repair projects</h1>
          <p className="mt-5 text-lg leading-8 text-navy-700">
            Atlas Consultant prepares contractor-ready technical documents that reduce ambiguity, improve comparison and protect society funds. The profile also references Model Bye-Law No. 156a and 156c, where repair expenditure above the committee limit requires a tender process.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {tenderRequirements.map((item) => (
              <div key={item} className="rounded-lg bg-navy-50 p-5">
                <h2 className="text-base font-black text-navy-950">{item}</h2>
              </div>
            ))}
          </div>
        </div>
        <LeadForm title="Request Tender Consultation" />
      </div>
    </main>
  );
}
