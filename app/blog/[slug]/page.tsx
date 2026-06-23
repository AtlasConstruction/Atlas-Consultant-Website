import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LeadForm } from "@/components/lead-form";
import { FaqSchema } from "@/components/schema";
import { blogTopics, faqs } from "@/lib/site-data";

type Props = {
  params: Promise<{ slug: string }>;
};

function getPost(slug: string) {
  return blogTopics.find((post) => post.slug === slug);
}

export function generateStaticParams() {
  return blogTopics.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: `${post.title}: a detailed guide for Mumbai Metropolitan Region housing societies by Atlas Consultant.`
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const postFaqs = faqs.slice(0, 4);

  return (
    <main>
      <FaqSchema faqs={postFaqs} />
      <section className="blueprint bg-navy-950 py-20 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-gold-300">{post.category}</p>
          <h1 className="mt-3 text-4xl font-black md:text-6xl">{post.title}</h1>
          <p className="mt-5 text-lg text-white/72">{post.readingTime} • For cooperative housing societies in Mumbai Metropolitan Region</p>
        </div>
      </section>
      <section className="section bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.42fr] lg:px-8">
          <article className="space-y-6 text-base leading-8 text-navy-800">
            {Array.from({ length: 14 }, (_, index) => (
              <p key={index}>
                {post.title} is an important decision area for housing societies because it affects safety, repair budgets, member confidence and contractor accountability. A committee should begin with documented observations, a qualified consultant inspection and a clear technical scope before moving into quotations or work orders. In Mumbai, Thane and Navi Mumbai, buildings face monsoon exposure, coastal corrosion, ageing RCC members, terrace leakage, facade distress and repeated patch repairs, so a structured engineering approach is essential.
              </p>
            ))}
            <h2 className="text-3xl font-black text-navy-950">Recommended committee action plan</h2>
            <p>
              The society should collect previous repair records, leakage complaints, photographs, municipal notices, structural drawings if available and member feedback. Atlas Consultant can then review the building condition, map distress, recommend testing where required, prepare a practical repair or audit strategy and support tendering, contractor selection and PMC controls.
            </p>
          </article>
          <aside>
            <LeadForm title="Ask Atlas Consultant" />
          </aside>
        </div>
      </section>
    </main>
  );
}
