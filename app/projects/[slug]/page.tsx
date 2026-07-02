import type { Metadata } from "next";
import Image from "next/image";
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
    title: `${project.name} Project Portfolio`,
    description: `${project.name} project photographs from Atlas Consultant.`
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <main>
      <section className="blueprint bg-navy-950 py-20 text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.75fr] lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-gold-300">{project.category}</p>
            <h1 className="mt-3 text-4xl font-black md:text-6xl">{project.name}</h1>
            <p className="mt-4 text-lg text-white/74">Project Scope & Site Photographs</p>
          </div>
          <div className="overflow-hidden rounded-lg border border-white/10">
            <Image src={project.image} alt={project.imageAlt} width={900} height={600} priority className="aspect-[4/3] w-full object-cover" />
          </div>
        </div>
      </section>
      <section className="section bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.8fr] lg:px-8">
          <article className="space-y-8">
            {project.gallery.length > 0 && (
              <div>
                <h2 className="text-2xl font-black text-navy-950">Project Scope & Site Photographs</h2>
                <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {project.gallery.map((photo) => (
                    <div key={photo.card} className="overflow-hidden rounded-lg border border-navy-100 bg-white">
                      <Image src={photo.card} alt={photo.alt} width={900} height={600} className="aspect-[4/3] w-full object-cover" />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </article>
          <LeadForm title="Discuss a Similar Society Project" />
        </div>
      </section>
    </main>
  );
}
