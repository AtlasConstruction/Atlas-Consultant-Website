import Link from "next/link";
import { blogTopics } from "@/lib/site-data";

export const metadata = {
  title: "Structural Audit, Repair and Waterproofing Blog",
  description: "SEO-focused insights for housing societies on structural audit, building repairs, waterproofing, PMC, tendering and redevelopment."
};

export default function BlogPage() {
  return (
    <main className="section bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-black uppercase tracking-[0.18em] text-gold-700">Knowledge centre</p>
        <h1 className="mt-3 text-4xl font-black text-navy-950 md:text-6xl">Society repair and structural audit insights</h1>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {blogTopics.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="rounded-lg border border-navy-100 p-6 shadow-sm transition hover:shadow-premium">
              <p className="text-xs font-black uppercase tracking-[0.14em] text-gold-700">{post.category}</p>
              <h2 className="mt-3 text-xl font-black text-navy-950">{post.title}</h2>
              <p className="mt-4 text-sm leading-7 text-navy-700">A practical guide for managing committees, secretaries, treasurers and society members.</p>
              <p className="mt-5 text-sm font-bold text-navy-500">{post.readingTime}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
