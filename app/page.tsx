import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/button";
import { LeadForm } from "@/components/lead-form";
import { LicensedEngineersBadge } from "@/components/licensed-engineers-badge";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCards } from "@/components/service-card";
import { company, locations, processSteps, projects, usps } from "@/lib/site-data";

export default function Home() {
  return (
    <main>
      <section className="blueprint overflow-hidden bg-white">
        <div className="mx-auto grid min-h-[calc(100vh-72px)] max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div>
            <p className="inline-flex rounded-full border border-navy-100 bg-navy-50 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-navy-800">
              Housing society consultants across MMR
            </p>
            <h1 className="mt-6 text-4xl font-black leading-tight text-navy-950 md:text-6xl">
              Mumbai&apos;s Trusted Structural Audit & Building Repair Consultants for Housing Societies
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-navy-700">
              Serving Housing Societies Across Mumbai, Thane, Navi Mumbai, Mira Bhayandar, Vasai-Virar and the entire Mumbai Metropolitan Region.
            </p>
            <LicensedEngineersBadge />
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/contact">Request Site Inspection</Button>
              <Button href="/contact" variant="ghost">
                Get Free Consultation
              </Button>
              <Button href={`tel:${company.phone}`} variant="secondary">
                <Phone className="mr-2 h-4 w-4" /> Call Now
              </Button>
            </div>
          </div>
          <div>
            <div className="relative overflow-hidden rounded-lg border border-navy-100 shadow-premium">
              <div className="hero-bg-slideshow relative h-[480px] w-full" aria-hidden="true">
                <Image
                  src="/hero-slideshow/1.Before_Repair.webp"
                  alt=""
                  fill
                  priority
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="hero-bg-slide hero-bg-slide-1 object-cover"
                />
                <Image
                  src="/hero-slideshow/2.During_Repair.webp"
                  alt=""
                  fill
                  priority
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="hero-bg-slide hero-bg-slide-2 object-cover"
                />
                <Image
                  src="/hero-slideshow/3.After_Repair.webp"
                  alt=""
                  fill
                  priority
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="hero-bg-slide hero-bg-slide-3 object-cover"
                />
              </div>
              <div className="absolute bottom-4 left-4 right-4 rounded-lg border border-white/30 bg-white/88 p-3 shadow-premium backdrop-blur">
                <div className="rounded-md bg-[#8B6B00] px-4 py-3 text-white shadow-[0_14px_32px_rgba(7,28,51,0.28)]">
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-white sm:text-sm">
                    Municipal experience
                  </p>
                  <p className="mt-2 text-base font-black leading-6 text-white sm:text-lg">{company.municipalities.join(" | ")}</p>
                </div>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3 xl:grid-cols-4">
              {company.stats.map((stat) => (
                <div key={stat.label} className="rounded-lg border border-navy-100 bg-white p-4 shadow-sm">
                  <p className="text-3xl font-black text-navy-950">{stat.value}</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-navy-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Core services"
            title="Specialist consultancy for society safety, repairs, waterproofing and redevelopment"
            text="Independent engineering advice, transparent tendering and disciplined project monitoring for managing committees."
          />
          <ServiceCards />
        </div>
      </section>

      <section className="section bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Why Atlas Consultant" title="Technical depth for confident committee decisions" />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {usps.map((usp) => {
              const Icon = usp.icon;
              return (
                <div key={usp.title} className="rounded-lg border border-navy-100 bg-white p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-md bg-navy-50">
                    <Icon className="h-6 w-6 text-navy-800" />
                  </span>
                  <h3 className="mt-4 text-lg font-black text-navy-950">{usp.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-navy-700">{usp.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-gold-700">Process</p>
            <h2 className="mt-3 text-3xl font-black text-navy-950 md:text-5xl">From first site visit to stability documentation</h2>
            <div className="mt-8 grid gap-3">
              {processSteps.map((step, index) => (
                <div key={step} className="flex items-center gap-4 rounded-lg border border-navy-100 bg-white p-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-navy-900 text-sm font-black text-gold-300">{index + 1}</span>
                  <span className="font-bold text-navy-900">{step}</span>
                </div>
              ))}
            </div>
          </div>
          <LeadForm />
        </div>
      </section>

      <section className="section bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Project proof" title="Atlas Consultant project portfolio" />
          <div className="grid gap-5 md:grid-cols-3">
            {projects.slice(0, 6).map((project) => (
              <Link key={project.slug} href={`/projects/${project.slug}`} className="overflow-hidden rounded-lg border border-navy-100 bg-white transition hover:border-gold-500 hover:shadow-premium">
                <Image src={project.image} alt={project.imageAlt} width={900} height={600} className="aspect-[4/3] w-full object-cover" />
                <div className="p-5">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-gold-700">{project.category}</p>
                  <h3 className="mt-3 text-xl font-black text-navy-950">{project.name}</h3>
                  <p className="mt-3 text-sm leading-7 text-navy-700">Project Scope & Site Photographs</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-navy-900">
                    View case study <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Local authority" title="Serving housing societies across Mumbai Metropolitan Region" />
          <div className="flex flex-wrap justify-center gap-3">
            {locations.map((location) => (
              <span key={location} className="rounded-full border border-navy-100 bg-white px-4 py-2 text-sm font-semibold text-navy-800">
                {location}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-950 py-12 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 sm:px-6 md:flex-row md:items-center lg:px-8">
          <div>
            <h2 className="text-3xl font-black">Need a structural audit, repair estimate or leakage diagnosis?</h2>
            <p className="mt-2 font-semibold text-white/72">Book a consultation before appointing contractors or finalising budgets.</p>
          </div>
          <Button href="/contact">Get Quotation</Button>
        </div>
      </section>
    </main>
  );
}
