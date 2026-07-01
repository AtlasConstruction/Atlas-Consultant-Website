import Link from "next/link";
import { ArrowRight, BookOpen, Search } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { boqItems, knowledgeCategories, knowledgeTopics } from "@/lib/knowledge-data";
import { categorySlug } from "@/lib/knowledge-utils";

export const metadata = {
  title: "Engineering Knowledge Centre",
  description:
    "Atlas Consultant knowledge centre for structural audit, RCC repair, NDT testing, BOQ, rate analysis, waterproofing, seismic design and building rehabilitation."
};

export default function KnowledgeCentrePage() {
  const featured = knowledgeTopics.slice(0, 12);
  const counts = knowledgeCategories.map((category) => ({
    category,
    count: knowledgeTopics.filter((topic) => topic.category === category).length
  }));

  return (
    <main>
      <section className="blueprint bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="inline-flex rounded-full border border-navy-100 bg-navy-50 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-navy-800">
              Engineering handbook
            </p>
            <h1 className="mt-6 text-4xl font-black leading-tight text-navy-950 md:text-6xl">
              Atlas Building Repair Engineering Knowledge Centre
            </h1>
            <p className="mt-5 text-lg leading-8 text-navy-700">
              A structured reference platform built from Atlas Consultant&apos;s engineering notes on structural audit, RCC repair, NDT, waterproofing, BOQ, rate analysis, BMC compliance, seismic design and project management.
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <div className="rounded-lg border border-navy-100 bg-white p-5 shadow-sm">
              <BookOpen className="h-7 w-7 text-gold-700" />
              <p className="mt-4 text-3xl font-black text-navy-950">{knowledgeTopics.length}</p>
              <p className="text-sm font-semibold text-navy-600">Engineering topic pages</p>
            </div>
            <div className="rounded-lg border border-navy-100 bg-white p-5 shadow-sm">
              <Search className="h-7 w-7 text-gold-700" />
              <p className="mt-4 text-3xl font-black text-navy-950">{knowledgeCategories.length}</p>
              <p className="text-sm font-semibold text-navy-600">Knowledge categories</p>
            </div>
            <Link href="/knowledge-centre/boq-rate-analysis" className="rounded-lg border border-navy-100 bg-white p-5 shadow-sm transition hover:border-gold-500">
              <p className="text-3xl font-black text-navy-950">{boqItems.length}</p>
              <p className="mt-1 text-sm font-semibold text-navy-600">BOQ and rate items extracted</p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-black text-gold-700">
                Open BOQ guide <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Categories" title="Browse by engineering discipline" />
          <div className="grid gap-4 md:grid-cols-3">
            {counts.map(({ category, count }) => (
              <a key={category} href={`#${categorySlug(category)}`} className="rounded-lg border border-navy-100 bg-white p-5">
                <p className="text-xl font-black text-navy-950">{category}</p>
                <p className="mt-2 text-sm font-semibold text-navy-600">{count} topics</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Featured topics" title="High-value engineering chapters" />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((topic) => (
              <Link key={topic.slug} href={`/knowledge-centre/${topic.slug}`} className="rounded-lg border border-navy-100 bg-white p-5 transition hover:border-gold-500 hover:shadow-premium">
                <p className="text-xs font-black uppercase tracking-[0.14em] text-gold-700">{topic.category}</p>
                <h2 className="mt-3 text-xl font-black text-navy-950">{topic.title}</h2>
                <p className="mt-3 text-sm leading-7 text-navy-700">{topic.quickAnswer}</p>
                <p className="mt-4 text-xs font-bold text-navy-500">{topic.readingTime}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {knowledgeCategories.map((category) => (
            <div key={category} id={categorySlug(category)} className="mb-12 scroll-mt-28">
              <div className="mb-5 flex items-end justify-between gap-4">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-gold-700">Knowledge category</p>
                  <h2 className="mt-2 text-3xl font-black text-navy-950">{category}</h2>
                </div>
              </div>
              <div className="grid gap-3 md:grid-cols-2">
                {knowledgeTopics
                  .filter((topic) => topic.category === category)
                  .slice(0, 18)
                  .map((topic) => (
                    <Link key={topic.slug} href={`/knowledge-centre/${topic.slug}`} className="flex items-center justify-between gap-4 rounded-lg border border-navy-100 bg-white p-4 transition hover:border-gold-500">
                      <span className="font-bold text-navy-950">{topic.title}</span>
                      <ArrowRight className="h-4 w-4 shrink-0 text-gold-700" />
                    </Link>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
