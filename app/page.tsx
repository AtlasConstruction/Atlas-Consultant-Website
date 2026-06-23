import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Download, Phone } from "lucide-react";
import { Button } from "@/components/button";
import { LeadForm } from "@/components/lead-form";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCards } from "@/components/service-card";
import { company, expertiseImages, locations, processSteps, projects, usps } from "@/lib/site-data";

export default function Home() {
  return (
    <main>
      <section className="blueprint overflow-hidden bg-navy-950 text-white">
        <div className="mx-auto grid min-h-[calc(100vh-72px)] max-w-7xl items-center gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-gold-300">Housing society consultants across MMR</p>
            <h1 className="mt-5 text-4xl font-black leading-tight md:text-6xl">
              Mumbai&apos;s Trusted Structural Audit & Building Repair Consultants for Housing Societies
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78">
              Serving Housing Societies Across Mumbai, Thane, Navi Mumbai, Mira Bhayandar, Vasai-Virar and the Entire Mumbai Metropolitan Region.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/contact">Request Site Inspection</Button>
              <Button href="/contact" variant="ghost" className="border-white/20 bg-white/10 text-white hover:bg-white/20">
                Get Free Consultation
              </Button>
              <Button href={`tel:${company.phone}`} variant="secondary" className="bg-white text-navy-950 hover:bg-gold-100">
                <Phone className="mr-2 h-4 w-4" /> Call Now
              </Button>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
              {company.stats.map((stat) => (
                <div key={stat.label} className="rounded-lg border border-white/12 bg-white/8 p-4 backdrop-blur">
                  <p className="text-3xl font-black text-gold-300">{stat.value}</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-white/72">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-lg border border-white/12 shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
                alt="Premium residential building inspected by Atlas Consultant"
                width={900}
                height={1100}
                priority
                className="h-[520px] w-full object-cover"
              />
            </div>
            <div className="glass absolute -bottom-6 left-4 right-4 rounded-lg p-5 text-navy-950">
              <p className="text-sm font-black uppercase tracking-[0.16em] text-gold-700">Municipal experience</p>
              <p className="mt-2 text-sm font-semibold">{company.municipalities.join(" • ")}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Core services"
            title="Specialist consultancy for society safety, repairs, waterproofing and redevelopment"
            text="Atlas Consultant is positioned for managing committees that need independent engineering advice, transparent tendering and disciplined project monitoring."
          />
          <ServiceCards />
        </div>
      </section>

      <section className="section bg-navy-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Why Atlas Consultant" title="Technical depth that helps committees make confident decisions" />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {usps.map((usp) => {
              const Icon = usp.icon;
              return (
                <div key={usp.title} className="rounded-lg bg-white p-6 shadow-sm">
                  <Icon className="h-8 w-8 text-gold-700" />
                  <h3 className="mt-4 text-lg font-black text-navy-950">{usp.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-navy-700">{usp.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section bg-white">
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

      <section className="section bg-navy-950 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Project proof" title="Society and commercial projects from the Atlas Consultant profile" />
          <div className="grid gap-5 md:grid-cols-3">
            {projects.slice(0, 6).map((project) => (
              <Link key={project.slug} href={`/projects/${project.slug}`} className="rounded-lg border border-white/10 bg-white/8 p-5 transition hover:bg-white/12">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-gold-300">{project.category}</p>
                <h3 className="mt-3 text-xl font-black">{project.name}</h3>
                <p className="mt-3 text-sm leading-7 text-white/70">{project.scope}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-gold-300">
                  View case study <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-navy-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Repair expertise"
            title="Profile-backed repair methods and waterproofing systems"
            text="These method visuals are rendered from the company profile and can later be replaced with individual project photographs."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {expertiseImages.map((item) => (
              <div key={item.src} className="overflow-hidden rounded-lg bg-white shadow-sm">
                <Image src={item.src} alt={item.title} width={700} height={950} className="aspect-[4/5] w-full object-cover" />
                <p className="p-4 text-sm font-black text-navy-950">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Local authority" title="Serving housing societies across Mumbai Metropolitan Region" />
          <div className="flex flex-wrap justify-center gap-3">
            {locations.map((location) => (
              <span key={location} className="rounded-full border border-navy-100 bg-navy-50 px-4 py-2 text-sm font-semibold text-navy-800">
                {location}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gold-500 py-12 text-navy-950">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 sm:px-6 md:flex-row md:items-center lg:px-8">
          <div>
            <h2 className="text-3xl font-black">Need a structural audit, repair estimate or leakage diagnosis?</h2>
            <p className="mt-2 font-semibold">Book a consultation before appointing contractors or finalising budgets.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href="/contact" variant="secondary">Get Quotation</Button>
            <Button href={company.profilePdf} variant="ghost">
              <Download className="mr-2 h-4 w-4" /> Company Profile
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
