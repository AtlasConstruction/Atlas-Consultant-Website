import { company } from "@/lib/site-data";
import { absoluteUrl } from "@/lib/utils";

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function OrganizationSchema() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
        name: company.name,
        slogan: company.tagline,
        url: absoluteUrl(),
        telephone: company.phone,
        email: company.email,
        address: {
          "@type": "PostalAddress",
          addressRegion: "Maharashtra",
          addressCountry: "IN"
        },
        areaServed: ["Mumbai", "Thane", "Navi Mumbai", "Mira Bhayandar", "Vasai Virar", "Mumbai Metropolitan Region"],
        knowsAbout: ["Structural Audit", "Building Repair", "Waterproofing", "PMC", "Redevelopment", "Structural Engineering"]
      }}
    />
  );
}

export function FaqSchema({ faqs }: { faqs: { question: string; answer: string }[] }) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer
          }
        }))
      }}
    />
  );
}
