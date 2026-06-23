import { MessageCircle, Phone } from "lucide-react";
import { company } from "@/lib/site-data";

export function FloatingActions() {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3">
      <a
        href={`https://wa.me/${company.whatsapp}`}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white shadow-premium transition hover:scale-105"
        aria-label="WhatsApp Atlas Consultant"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
      <a
        href={`tel:${company.phone}`}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-500 text-navy-950 shadow-premium transition hover:scale-105"
        aria-label="Call Atlas Consultant"
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
}
