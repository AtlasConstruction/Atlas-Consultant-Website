import { LeadForm } from "@/components/lead-form";
import { company } from "@/lib/site-data";

const contactEmail = "atlasconsultant.pmc@outlook.com";

export const metadata = {
  title: "Contact Atlas Consultant",
  description: "Request structural audit, building repair, waterproofing, PMC or redevelopment consultation for housing societies in Mumbai Metropolitan Region."
};

export default function ContactPage() {
  return (
    <main className="section blueprint bg-navy-50">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1fr] lg:px-8">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-gold-700">Contact</p>
          <h1 className="mt-3 text-4xl font-black text-navy-950 md:text-6xl">Request a society consultation</h1>
          <p className="mt-5 text-lg leading-8 text-navy-700">
            Share your building&apos;s cracks, leakage, repair, audit, tendering or redevelopment requirement. Atlas Consultant will respond with the right next step.
          </p>
          <div className="mt-8 grid gap-3 text-sm font-semibold text-navy-800">
            <a href={`tel:${company.phone}`}>Call: {company.phone}</a>
            <a href={`https://wa.me/${company.whatsapp}`}>WhatsApp: {company.phone}</a>
            <a href={`mailto:${contactEmail}`}>Email: {contactEmail}</a>
          </div>
        </div>
        <LeadForm title="Get Free Consultation" />
      </div>
    </main>
  );
}
