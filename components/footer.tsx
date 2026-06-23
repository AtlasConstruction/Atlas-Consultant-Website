import Link from "next/link";
import { company, landingPages, services } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.2fr_1fr_1fr] lg:px-8">
        <div>
          <p className="text-2xl font-black">{company.name}</p>
          <p className="mt-2 text-gold-300">{company.tagline}</p>
          <p className="mt-5 max-w-md text-sm leading-7 text-white/72">
            Structural audit, building repair, waterproofing, redevelopment and PMC consultants for housing societies across Mumbai Metropolitan Region.
          </p>
        </div>
        <div>
          <p className="font-bold text-gold-300">Services</p>
          <div className="mt-4 grid gap-3 text-sm text-white/72">
            {services.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`} className="hover:text-white">
                {service.title}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="font-bold text-gold-300">Local SEO Pages</p>
          <div className="mt-4 grid gap-3 text-sm text-white/72">
            {landingPages.slice(0, 8).map(([slug, title]) => (
              <Link key={slug} href={`/${slug}`} className="hover:text-white">
                {title}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-white/54">
        © {new Date().getFullYear()} {company.name}. Built for society enquiries across MMR.
      </div>
    </footer>
  );
}
