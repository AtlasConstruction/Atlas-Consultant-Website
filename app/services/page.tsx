import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/button";
import { JsonLd } from "@/components/schema";
import { company, services } from "@/lib/site-data";
import { absoluteUrl } from "@/lib/utils";

export const metadata = {
  title: "Our Engineering Services | Structural, Repair, Waterproofing & PMC Consultants",
  description:
    "Atlas Consultant provides structural engineering, building repair consultancy, waterproofing diagnosis, PMC, redevelopment advisory and technical consultancy services for housing societies and commercial buildings across Mumbai, Thane, Navi Mumbai and the MMR."
};

export default function ServicesPage() {
  return (
    <main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Atlas Consultant Engineering Services",
          itemListElement: services.map((service, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: service.title,
            url: absoluteUrl(`/services/${service.slug}`)
          }))
        }}
      />

      <section className="blueprint bg-navy-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-gold-300">Our Engineering Services</p>
          <h1 className="mt-3 max-w-5xl text-4xl font-black leading-tight md:text-6xl">
            Structural engineering, building repair, waterproofing and PMC consultancy across MMR
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/76">
            Atlas Consultant is a professional technical consultancy for housing societies, commercial buildings, industrial buildings and institutional properties. The emphasis is on inspection, investigation, design, documentation, tendering, supervision and project management consultancy, not contractor-led execution.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/contact">Request Consultation</Button>
            <Button href="/contact" variant="ghost">Request Inspection</Button>
            <Button href={`tel:${company.phone}`} variant="secondary">
              <Phone className="mr-2 h-4 w-4" /> Call Now
            </Button>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article key={service.slug} className="group rounded-lg border border-navy-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-gold-500 hover:shadow-premium">
                  <div className="flex items-start gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-navy-50">
                      <Icon className="h-6 w-6 text-navy-900" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-gold-700">{service.eyebrow}</p>
                      <h2 className="mt-2 text-xl font-black text-navy-950">{service.title}</h2>
                    </div>
                  </div>
                  <p className="mt-5 text-sm leading-7 text-navy-700">{service.summary}</p>
                  <div className="mt-5 grid gap-2">
                    {service.includes.slice(0, 5).map((item) => (
                      <span key={item} className="rounded-md bg-slate-50 px-3 py-2 text-sm font-semibold text-navy-800">
                        {item}
                      </span>
                    ))}
                  </div>
                  <Link href={`/services/${service.slug}`} className="mt-6 inline-flex items-center gap-2 text-sm font-black text-navy-950">
                    Learn More <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-gold-700">Consultancy first</p>
          <h2 className="mt-3 text-3xl font-black text-navy-950 md:text-5xl">Need help deciding the right service?</h2>
          <p className="mt-5 text-lg leading-8 text-navy-700">
            Share your building concern: cracks, leakage, repair planning, redevelopment, structural design, tendering or PMC. Atlas Consultant will guide the next technical step for your society or property.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/contact">Request Technical Review</Button>
            <Button href={`tel:${company.phone}`} variant="secondary">
              <Phone className="mr-2 h-4 w-4" /> Call Atlas Consultant
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
