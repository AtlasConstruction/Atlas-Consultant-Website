import { JsonLd } from "@/components/schema";
import { getRelatedTopics } from "@/lib/knowledge-utils";
import type { KnowledgeTopic } from "@/lib/knowledge-data";
import { absoluteUrl } from "@/lib/utils";

export function KnowledgeSchemas({ topic }: { topic: KnowledgeTopic }) {
  const url = absoluteUrl(`/knowledge-centre/${topic.slug}`);
  const related = getRelatedTopics(topic, 5);
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "TechArticle",
          headline: topic.title,
          description: topic.quickAnswer,
          url,
          about: topic.category,
          author: { "@type": "Organization", name: "ATLAS CONSULTANT" },
          publisher: { "@type": "Organization", name: "ATLAS CONSULTANT" },
          isPartOf: { "@type": "WebSite", name: "Atlas Consultant Knowledge Centre", url: absoluteUrl("/knowledge-centre") },
          mentions: related.map((item) => ({ "@type": "Thing", name: item.title, url: absoluteUrl(`/knowledge-centre/${item.slug}`) }))
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: topic.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer }
          }))
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
            { "@type": "ListItem", position: 2, name: "Knowledge Centre", item: absoluteUrl("/knowledge-centre") },
            { "@type": "ListItem", position: 3, name: topic.title, item: url }
          ]
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: `Engineering procedure for ${topic.title}`,
          description: topic.quickAnswer,
          step: [
            "Collect documents and site history.",
            "Carry out visual inspection and distress mapping.",
            "Select tests or measurements based on observed risk.",
            "Interpret findings against relevant standards.",
            "Prepare repair, monitoring, BOQ or safety recommendation.",
            "Document quality checks and completion requirements."
          ].map((name, index) => ({ "@type": "HowToStep", position: index + 1, name }))
        }}
      />
      {topic.glossary.map((item) => (
        <JsonLd
          key={item.term}
          data={{
            "@context": "https://schema.org",
            "@type": "DefinedTerm",
            name: item.term,
            description: item.definition,
            inDefinedTermSet: absoluteUrl("/knowledge-centre/glossary")
          }}
        />
      ))}
    </>
  );
}
