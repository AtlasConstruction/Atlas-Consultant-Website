import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { Button } from "@/components/button";
import { FaqSchema, JsonLd } from "@/components/schema";
import { LeadForm } from "@/components/lead-form";
import { SectionHeading } from "@/components/section-heading";
import { company, projects, services } from "@/lib/site-data";
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
    title: `${service.title} | Atlas Consultant MMR`,
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
  const relatedServices = services.filter((item) => item.slug !== service.slug).slice(0, 3);
  const relatedProjects = projects.slice(0, 3);

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
          description: service.summary,
          serviceType: service.includes.slice(0, 8)
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
            { "@type": "ListItem", position: 2, name: "Services", item: absoluteUrl("/services") },
            { "@type": "ListItem", position: 3, name: service.title, item: absoluteUrl(`/services/${service.slug}`) }
          ]
        }}
      />
      <section className="blueprint bg-navy-950 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.8fr] lg:px-8">
          <div>
            <nav className="mb-8 flex flex-wrap gap-2 text-sm font-semibold text-white/62" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-white">Home</Link>
              <span>/</span>
              <Link href="/services" className="hover:text-white">Services</Link>
              <span>/</span>
              <span className="text-gold-300">{service.title}</span>
            </nav>
            <Icon className="h-12 w-12 text-gold-300" />
            <p className="mt-5 text-sm font-black uppercase tracking-[0.18em] text-gold-300">{service.eyebrow}</p>
            <h1 className="mt-3 text-4xl font-black md:text-6xl">{service.title}</h1>
            <p className="mt-6 text-lg leading-8 text-white/76">{service.summary}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/contact">Request Consultation</Button>
              <Button href={`tel:${company.phone}`} variant="secondary">
                <Phone className="mr-2 h-4 w-4" /> Call Now
              </Button>
            </div>
          </div>
          <LeadForm title={`Request ${service.title} Consultation`} />
        </div>
      </section>
      <section className="section bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-black text-navy-950">Scope of work</h2>
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
            <h2 className="text-3xl font-black text-navy-950">Benefits</h2>
            <div className="mt-6 grid gap-3">
              {service.benefits.map((item) => (
                <div key={item} className="rounded-lg bg-navy-50 p-4">
                  <span className="font-bold text-navy-900">{item}</span>
                </div>
              ))}
            </div>
            <h2 className="mt-10 text-3xl font-black text-navy-950">Consultancy process</h2>
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
      <section className="section bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Related projects" title="Project photographs from Atlas Consultant portfolio" />
          <div className="grid gap-5 md:grid-cols-3">
            {relatedProjects.map((project) => (
              <Link key={project.slug} href={`/projects/${project.slug}`} className="overflow-hidden rounded-lg border border-navy-100 bg-white shadow-sm transition hover:shadow-premium">
                <Image src={project.image} alt={project.imageAlt} width={900} height={600} className="aspect-[4/3] w-full object-cover" />
                <div className="p-5">
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-gold-700">Project portfolio</p>
                  <h3 className="mt-2 text-lg font-black text-navy-950">{project.name}</h3>
                </div>
              </Link>
            ))}
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
          <div className="mt-12 rounded-lg bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-black text-navy-950">Related engineering services</h2>
            <div className="mt-5 grid gap-3 md:grid-cols-3">
              {relatedServices.map((item) => (
                <Link key={item.slug} href={`/services/${item.slug}`} className="group rounded-lg border border-navy-100 p-4 text-sm font-bold text-navy-900 transition hover:border-gold-500">
                  {item.title}
                  <ArrowRight className="mt-3 h-4 w-4 transition group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-10 text-center">
            <Link href="/contact" className="font-black text-gold-700">Request a technical review for your society or property</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
