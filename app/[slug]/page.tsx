import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LeadForm } from "@/components/lead-form";
import { FaqSchema, JsonLd } from "@/components/schema";
import { landingPages, services } from "@/lib/site-data";
import { absoluteUrl } from "@/lib/utils";

type Props = {
  params: Promise<{ slug: string }>;
};

function getLanding(slug: string) {
  const row = landingPages.find(([pageSlug]) => pageSlug === slug);
  if (!row) return null;
  const [pageSlug, title, location, serviceSlug] = row;
  const service = services.find((item) => item.slug === serviceSlug);
  return service ? { slug: pageSlug, title, location, service } : null;
}

export function generateStaticParams() {
  return landingPages.map(([slug]) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const landing = getLanding(slug);
  if (!landing) return {};
  return {
    title: `${landing.title} | Housing Society Consultants`,
    description: `${landing.title} for housing societies, apartment associations and managing committees with inspection, reporting, tendering, PMC and technical documentation.`,
    alternates: { canonical: `/${landing.slug}` },
    keywords: [landing.title, ...landing.service.keywords]
  };
}

export default async function LandingPage({ params }: Props) {
  const { slug } = await params;
  const landing = getLanding(slug);
  if (!landing) notFound();
  const faqs = [
    {
      question: `Why choose Atlas Consultant for ${landing.title}?`,
      answer: "Atlas Consultant combines society-focused diagnosis, detailed documentation, tender support and PMC controls for durable, transparent outcomes."
    },
    {
      question: `Do you serve housing societies in ${landing.location}?`,
      answer: `Yes. Atlas Consultant serves cooperative housing societies, apartment associations and managing committees across ${landing.location} and nearby MMR locations.`
    }
  ];

  return (
    <main>
      <FaqSchema faqs={faqs} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: landing.title,
          areaServed: landing.location,
          provider: { "@type": "Organization", name: "ATLAS CONSULTANT" },
          url: absoluteUrl(`/${landing.slug}`)
        }}
      />
      <section className="blueprint bg-navy-950 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.82fr] lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-gold-300">Local expertise in {landing.location}</p>
            <h1 className="mt-3 text-4xl font-black md:text-6xl">{landing.title}</h1>
            <p className="mt-6 text-lg leading-8 text-white/76">
              Atlas Consultant supports housing societies in {landing.location} with {landing.service.title.toLowerCase()}, technical reporting, repair planning, contractor-ready tender scope and committee-friendly guidance.
            </p>
          </div>
          <LeadForm title={`Request ${landing.title}`} />
        </div>
      </section>
      <section className="section bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_0.7fr] lg:px-8">
          <article className="text-navy-800">
            <h2 className="text-3xl font-black text-navy-950">Specialist society consultancy in {landing.location}</h2>
            <div className="mt-5 space-y-5 text-base leading-8">
              {Array.from({ length: 8 }, (_, index) => (
                <p key={index}>
                  Housing societies in {landing.location} need technical decisions that balance safety, member communication, budget control and contractor accountability. Atlas Consultant provides a structured consultancy workflow for {landing.service.title.toLowerCase()} so committees can move from visible symptoms such as cracks, seepage, corrosion, loose plaster or ageing waterproofing to a documented action plan. The process includes inspection, defect mapping, technical recommendations, budget visibility, tender-ready scope and quality checkpoints suited to Mumbai Metropolitan Region building conditions.
                </p>
              ))}
            </div>
          </article>
          <aside className="rounded-lg bg-navy-50 p-6">
            <h3 className="text-xl font-black text-navy-950">What societies receive</h3>
            <ul className="mt-5 grid gap-3">
              {landing.service.includes.map((item) => (
                <li key={item} className="rounded-md bg-white p-3 text-sm font-semibold text-navy-800">{item}</li>
              ))}
            </ul>
          </aside>
        </div>
      </section>
      <section className="section bg-navy-50">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-navy-950">FAQs for {landing.location} societies</h2>
          <div className="mt-6 grid gap-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="rounded-lg bg-white p-5">
                <summary className="cursor-pointer font-black">{faq.question}</summary>
                <p className="mt-3 leading-7 text-navy-700">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
