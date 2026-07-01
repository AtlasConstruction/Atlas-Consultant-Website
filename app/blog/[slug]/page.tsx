import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { LeadForm } from "@/components/lead-form";
import { FaqSchema } from "@/components/schema";
import { blogTopics, faqs } from "@/lib/site-data";

type Props = {
  params: Promise<{ slug: string }>;
};

function getPost(slug: string) {
  return blogTopics.find((post) => post.slug === slug);
}

const licenseGuideSlug = "maharashtra-bpms-bmc-structural-engineer-license";

export function generateStaticParams() {
  return blogTopics.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description:
      post.slug === licenseGuideSlug
        ? "Understand the difference between Maharashtra BPMS Structural Engineer registration and the separate BMC Structural Engineer license for Mumbai building proposals."
        : `${post.title}: a detailed guide for Mumbai Metropolitan Region housing societies by Atlas Consultant.`
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const postFaqs = faqs.slice(0, 4);

  return (
    <main>
      <FaqSchema faqs={postFaqs} />
      <section className="blueprint bg-navy-950 py-20 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-gold-300">{post.category}</p>
          <h1 className="mt-3 text-4xl font-black md:text-6xl">{post.title}</h1>
          <p className="mt-5 text-lg text-white/72">{post.readingTime} • For cooperative housing societies in Mumbai Metropolitan Region</p>
        </div>
      </section>
      <section className="section bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.42fr] lg:px-8">
          {post.slug === licenseGuideSlug ? (
            <LicenseGuideArticle />
          ) : (
            <article className="space-y-6 text-base leading-8 text-navy-800">
              {Array.from({ length: 14 }, (_, index) => (
                <p key={index}>
                  {post.title} is an important decision area for housing societies because it affects safety, repair budgets, member confidence and contractor accountability. A committee should begin with documented observations, a qualified consultant inspection and a clear technical scope before moving into quotations or work orders. In Mumbai, Thane and Navi Mumbai, buildings face monsoon exposure, coastal corrosion, ageing RCC members, terrace leakage, facade distress and repeated patch repairs, so a structured engineering approach is essential.
                </p>
              ))}
              <h2 className="text-3xl font-black text-navy-950">Recommended committee action plan</h2>
              <p>
                The society should collect previous repair records, leakage complaints, photographs, municipal notices, structural drawings if available and member feedback. Atlas Consultant can then review the building condition, map distress, recommend testing where required, prepare a practical repair or audit strategy and support tendering, contractor selection and PMC controls.
              </p>
            </article>
          )}
          <aside>
            <LeadForm title="Ask Atlas Consultant" />
          </aside>
        </div>
      </section>
    </main>
  );
}

function LicenseGuideArticle() {
  const steps = [
    {
      title: "Visit the official BPMS portal",
      text: "Use the MahaVastu BPMS portal and select the technical person login or registration option. BPMS is the online system used for building permission workflows across many Maharashtra urban local bodies."
    },
    {
      title: "Register as a Licensed Technical Person",
      text: "Enter full name, mobile number, email address, Aadhaar number, PAN number, educational qualification, structural engineer category and professional details. Keep all personal details consistent with uploaded identity and qualification documents."
    },
    {
      title: "Select the appropriate ULB",
      text: "After login, choose the Urban Local Body where registration is required. The selected ULB should match the engineer's intended area of practice."
    },
    {
      title: "Upload required documents",
      text: "Prepare scanned copies of passport size photograph, signature, Aadhaar card, PAN card, degree certificate, qualification certificate, experience certificate where applicable, self declaration form and any additional authority requirement."
    },
    {
      title: "Submit and save acknowledgement",
      text: "Review every field before final submission and save the acknowledgement receipt. Incorrect document details can delay verification."
    },
    {
      title: "Track verification",
      text: "The application is normally reviewed by the concerned authority. If there is no update within a reasonable period, contact BPMS support through the official MahaVastu portal."
    }
  ];

  return (
    <article className="space-y-8 text-base leading-8 text-navy-800">
      <div className="rounded-lg border border-gold-500/30 bg-gold-50 p-5">
        <h2 className="text-2xl font-black text-navy-950">Quick answer</h2>
        <p className="mt-3">
          Maharashtra State BPMS Structural Engineer registration and BMC Structural Engineer licensing are separate registrations. BPMS registration is used for participating Urban Local Bodies in Maharashtra, while Mumbai building proposal work under BMC requires a separate BMC Structural Engineer license through the Building Proposal Department.
        </p>
      </div>

      <section>
        <h2 className="text-3xl font-black text-navy-950">Important distinction</h2>
        <p className="mt-3">
          A Maharashtra State BPMS license should not be treated as a substitute for BMC registration. Engineers who intend to submit or support building proposals within Brihanmumbai Municipal Corporation limits must follow BMC's separate registration process.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-black text-navy-950">Maharashtra State Structural Engineer License through BPMS</h2>
        <p className="mt-3">
          The Government of Maharashtra's Building Plan Management System is available through the MahaVastu portal. Engineers can begin from the official portal:
          {" "}
          <a href="https://mahavastu.maharashtra.gov.in/index.php" className="font-bold text-gold-700 underline" target="_blank" rel="noreferrer">
            mahavastu.maharashtra.gov.in
          </a>
          .
        </p>
        <div className="mt-6 grid gap-4">
          {steps.map((step, index) => (
            <div key={step.title} className="rounded-lg border border-navy-100 bg-white p-5 shadow-sm">
              <p className="text-sm font-black uppercase tracking-[0.16em] text-gold-700">Step {index + 1}</p>
              <h3 className="mt-2 text-xl font-black text-navy-950">{step.title}</h3>
              <p className="mt-2">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-black text-navy-950">BMC Structural Engineer License</h2>
        <p className="mt-3">
          Mumbai does not use the Maharashtra BPMS Structural Engineer license for BMC building proposals. For work within BMC limits, engineers should use the BMC Building Proposal Department route:
          {" "}
          <a href="https://www.mcgm.gov.in/irj/portal/anonymous/qlBuildProp12" className="font-bold text-gold-700 underline" target="_blank" rel="noreferrer">
            mcgm.gov.in building proposal portal
          </a>
          .
        </p>
        <p className="mt-3">
          The BMC application generally requires educational qualification certificates, experience documents, identity proof, passport photograph and any additional documents prescribed by the authority. Eligible applicants may be scrutinized by the Building Proposal Department and may be called for verification or interview before license issue.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-black text-navy-950">BPMS vs BMC registration</h2>
        <div className="mt-5 overflow-hidden rounded-lg border border-navy-100">
          <table className="w-full border-collapse text-left text-sm">
            <thead className="bg-navy-950 text-white">
              <tr>
                <th className="p-4 font-black">Maharashtra State BPMS</th>
                <th className="p-4 font-black">BMC or MCGM</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-navy-100">
              <tr>
                <td className="p-4">Applicable to many participating ULBs in Maharashtra</td>
                <td className="p-4">Applicable within Mumbai BMC limits</td>
              </tr>
              <tr>
                <td className="p-4">Registration through MahaVastu BPMS</td>
                <td className="p-4">Registration through BMC Building Proposal Department</td>
              </tr>
              <tr>
                <td className="p-4">Valid for the relevant participating authority or ULB</td>
                <td className="p-4">Valid only for BMC jurisdiction as per BMC approval</td>
              </tr>
              <tr>
                <td className="p-4 font-bold">Does not automatically authorize BMC building proposal practice</td>
                <td className="p-4 font-bold">Separate BMC license is mandatory for Mumbai proposals</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-black text-navy-950">Practical recommendation</h2>
        <p className="mt-3">
          Engineers should decide the jurisdiction first. If the work is outside BMC and within a participating Maharashtra ULB, BPMS registration may be the relevant route. If the work is within Mumbai BMC limits, apply separately through BMC. Societies and developers should verify the consultant's applicable license for the project jurisdiction before relying on proposal submissions.
        </p>
        <p className="mt-3">
          This guide is for general information. Engineers should confirm current requirements, forms, scrutiny process and document lists directly on the official authority portals before applying.
        </p>
      </section>

      <div className="rounded-lg border border-navy-100 bg-slate-50 p-5">
        <h2 className="text-2xl font-black text-navy-950">Related Atlas Consultant pages</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link href="/services/structural-engineering" className="rounded-full bg-white px-4 py-2 text-sm font-bold text-navy-900">
            Structural Engineering
          </Link>
          <Link href="/services/structural-audit" className="rounded-full bg-white px-4 py-2 text-sm font-bold text-navy-900">
            Structural Audit
          </Link>
          <Link href="/why-structural-audit" className="rounded-full bg-white px-4 py-2 text-sm font-bold text-navy-900">
            Why Structural Audit
          </Link>
        </div>
      </div>
    </article>
  );
}
