import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LeadForm } from "@/components/lead-form";
import { projects } from "@/lib/site-data";

type Props = {
  params: Promise<{ slug: string }>;
};

function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.name} Case Study`,
    description: `${project.category} case study in ${project.location} by Atlas Consultant.`
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <main>
      <section className="blueprint bg-navy-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-gold-300">{project.category}</p>
          <h1 className="mt-3 text-4xl font-black md:text-6xl">{project.name}</h1>
          <p className="mt-4 text-lg text-white/74">{project.location} • Timeline: {project.timeline}</p>
        </div>
      </section>
      <section className="section bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.8fr] lg:px-8">
          <article className="space-y-8">
            <div>
              <h2 className="text-2xl font-black text-navy-950">Scope</h2>
              <p className="mt-3 leading-8 text-navy-700">{project.scope}</p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-navy-950">Challenge</h2>
              <p className="mt-3 leading-8 text-navy-700">{project.challenge}</p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-navy-950">Solution</h2>
              <p className="mt-3 leading-8 text-navy-700">{project.solution}</p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-navy-950">Outcome</h2>
              <p className="mt-3 leading-8 text-navy-700">{project.outcome}</p>
            </div>
          </article>
          <LeadForm title="Discuss a Similar Society Project" />
        </div>
      </section>
    </main>
  );
}
