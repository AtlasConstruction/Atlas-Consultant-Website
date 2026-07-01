import Link from "next/link";
import { knowledgeTopics } from "@/lib/knowledge-data";

export const metadata = {
  title: "Engineering Glossary",
  description: "Glossary of building repair, structural audit, RCC, NDT, BOQ, waterproofing and rehabilitation terms used by Atlas Consultant."
};

export default function KnowledgeGlossaryPage() {
  const map = new Map<string, string>();
  for (const topic of knowledgeTopics) {
    for (const item of topic.glossary) {
      if (!map.has(item.term)) map.set(item.term, item.definition);
    }
  }
  const entries = Array.from(map.entries()).sort(([a], [b]) => a.localeCompare(b));

  return (
    <main className="section bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <nav className="text-sm font-semibold text-navy-500">
          <Link href="/">Home</Link> / <Link href="/knowledge-centre">Knowledge Centre</Link> / <span className="text-navy-900">Glossary</span>
        </nav>
        <h1 className="mt-8 text-4xl font-black text-navy-950 md:text-6xl">Engineering Glossary</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-navy-700">
          Defined terms used across the Atlas Consultant building repair engineering knowledge centre.
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {entries.map(([term, definition]) => (
            <div key={term} className="rounded-lg border border-navy-100 bg-white p-5">
              <h2 className="text-xl font-black text-navy-950">{term}</h2>
              <p className="mt-2 text-sm leading-7 text-navy-700">{definition}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
