import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/site-data";

export function ServiceCards() {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => {
        const Icon = service.icon;
        return (
          <Link key={service.slug} href={`/services/${service.slug}`} className="group rounded-lg border border-navy-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-premium">
            <Icon className="h-8 w-8 text-gold-700" />
            <p className="mt-5 text-sm font-bold uppercase tracking-[0.14em] text-navy-500">{service.eyebrow}</p>
            <h3 className="mt-2 text-xl font-black text-navy-950">{service.title}</h3>
            <p className="mt-3 text-sm leading-7 text-navy-700">{service.summary}</p>
            <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-gold-700">
              Explore service <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </span>
          </Link>
        );
      })}
    </div>
  );
}
