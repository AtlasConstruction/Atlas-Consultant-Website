import { Button } from "@/components/button";
import { company } from "@/lib/site-data";

export function LeadForm({ title = "Request Free Site Inspection" }: { title?: string }) {
  return (
    <form className="glass rounded-lg p-5" action={`https://formsubmit.co/${company.email}`} method="POST">
      <input type="hidden" name="_subject" value={`Atlas Consultant enquiry: ${title}`} />
      <input type="hidden" name="_next" value="https://atlasconsultant.in/thank-you" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />
      <p className="text-lg font-black text-navy-950">{title}</p>
      <p className="mt-1 text-sm text-navy-600">For audits, repair PMC, leakage diagnosis and society consultations.</p>
      <div className="mt-4 grid gap-3">
        <input required name="name" placeholder="Name" className="min-h-11 rounded-md border border-navy-100 bg-white px-3 text-sm outline-none focus:border-gold-500" />
        <input required name="phone" placeholder="Mobile number" className="min-h-11 rounded-md border border-navy-100 bg-white px-3 text-sm outline-none focus:border-gold-500" />
        <input name="society" placeholder="Society / building name" className="min-h-11 rounded-md border border-navy-100 bg-white px-3 text-sm outline-none focus:border-gold-500" />
        <select name="service" className="min-h-11 rounded-md border border-navy-100 bg-white px-3 text-sm outline-none focus:border-gold-500">
          <option>Structural Audit</option>
          <option>Building Repair PMC</option>
          <option>Waterproofing Consultancy</option>
          <option>Redevelopment Advisory</option>
          <option>Structural Engineering</option>
        </select>
        <textarea name="message" placeholder="Tell us about cracks, leakage, repair or redevelopment requirement" className="min-h-24 rounded-md border border-navy-100 bg-white px-3 py-3 text-sm outline-none focus:border-gold-500" />
        <Button type="submit">Submit Enquiry</Button>
      </div>
      <p className="mt-3 text-xs leading-5 text-navy-600">Atlas Consultant will use these details only to respond to your society enquiry.</p>
    </form>
  );
}
