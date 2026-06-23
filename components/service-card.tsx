import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/site-data";

export function ServiceCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => {
        const Icon = service.icon;
        return (
          <Link key={service.slug} href={`/services/${service.slug}`} className="group rounded-lg border border-navy-100 bg-white p-6 transition hover:border-gold-500 hover:shadow-premium">
            <span className="flex h-11 w-11 items-center justify-center rounded-md bg-navy-50">
              <Icon className="h-6 w-6 text-navy-800" />
            </span>
            <p className="mt-5 text-xs font-bold uppercase tracking-[0.14em] text-gold-700">{service.eyebrow}</p>
            <h3 className="mt-2 text-xl font-black text-navy-950">{service.title}</h3>
            <p className="mt-3 text-sm leading-7 text-navy-700">{service.summary}</p>
            <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-navy-900">
              Explore service <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </span>
          </Link>
        );
      })}
    </div>
  );
}
