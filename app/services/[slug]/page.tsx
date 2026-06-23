import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { FaqSchema, JsonLd } from "@/components/schema";
import { LeadForm } from "@/components/lead-form";
import { SectionHeading } from "@/components/section-heading";
import { services } from "@/lib/site-data";
import { absoluteUrl } from "@/lib/utils";

type Props = {
  params: Promise<{ slug: string }>;
};

function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: `${service.title} Consultant Mumbai`,
    description: service.summary,
    alternates: { canonical: `/services/${service.slug}` },
    keywords: service.keywords
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  const Icon = service.icon;
  const faqItems = service.faqs.map(([question, answer]) => ({ question, answer }));

  return (
    <main>
      <FaqSchema faqs={faqItems} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: service.title,
          provider: { "@type": "Organization", name: "ATLAS CONSULTANT" },
          areaServed: "Mumbai Metropolitan Region",
          url: absoluteUrl(`/services/${service.slug}`),
          description: service.summary
        }}
      />
      <section className="blueprint bg-navy-950 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.8fr] lg:px-8">
          <div>
            <Icon className="h-12 w-12 text-gold-300" />
            <p className="mt-5 text-sm font-black uppercase tracking-[0.18em] text-gold-300">{service.eyebrow}</p>
            <h1 className="mt-3 text-4xl font-black md:text-6xl">{service.title} for Housing Societies</h1>
            <p className="mt-6 text-lg leading-8 text-white/76">{service.summary}</p>
          </div>
          <LeadForm title={`Request ${service.title} Consultation`} />
        </div>
      </section>
      <section className="section bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-black text-navy-950">What this service includes</h2>
            <div className="mt-6 grid gap-3">
              {service.includes.map((item) => (
                <div key={item} className="flex gap-3 rounded-lg border border-navy-100 p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold-700" />
                  <span className="font-semibold text-navy-800">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-black text-navy-950">Consultancy process</h2>
            <div className="mt-6 grid gap-3">
              {service.process.map((item, index) => (
                <div key={item} className="rounded-lg bg-navy-50 p-4">
                  <span className="text-sm font-black text-gold-700">Step {index + 1}</span>
                  <p className="mt-1 font-bold text-navy-900">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="section bg-navy-50">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="FAQs" title={`${service.title} FAQs`} />
          <div className="grid gap-4">
            {faqItems.map((faq) => (
              <details key={faq.question} className="rounded-lg bg-white p-5 shadow-sm">
                <summary className="cursor-pointer font-black text-navy-950">{faq.question}</summary>
                <p className="mt-3 leading-7 text-navy-700">{faq.answer}</p>
              </details>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/contact" className="font-black text-gold-700">Request a technical review for your society</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
