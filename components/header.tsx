import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import { company, navLinks } from "@/lib/site-data";
import { Button } from "@/components/button";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-navy-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/atlas-logo.png"
            alt={`${company.name} - ${company.tagline}`}
            width={64}
            height={64}
            priority
            className="h-11 w-11 object-contain"
          />
          <span>
            <span className="block text-base font-black tracking-wide text-navy-950">{company.name}</span>
            <span className="block text-xs font-semibold text-gold-700">{company.tagline}</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-5 lg:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-semibold text-navy-700 transition hover:text-navy-950">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 sm:flex">
          <a href={`tel:${company.phone}`} className="inline-flex items-center gap-2 text-sm font-bold text-navy-900">
            <Phone className="h-4 w-4 text-gold-700" />
            Call
          </a>
          <Button href="/contact" className="min-h-10 px-4 py-2">
            Request Inspection
          </Button>
        </div>
      </div>
    </header>
  );
}
