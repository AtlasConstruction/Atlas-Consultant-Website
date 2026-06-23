import Link from "next/link";
import { projects } from "@/lib/site-data";

export const metadata = {
  title: "Housing Society Project Case Studies",
  description: "Structural audit, building repair, waterproofing, PMC and redevelopment case study templates for Atlas Consultant projects."
};

export default function ProjectsPage() {
  return (
    <main className="section bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-black uppercase tracking-[0.18em] text-gold-700">Projects</p>
        <h1 className="mt-3 text-4xl font-black text-navy-950 md:text-6xl">Society project case studies</h1>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Link key={project.slug} href={`/projects/${project.slug}`} className="rounded-lg border border-navy-100 bg-white p-6 shadow-sm transition hover:shadow-premium">
              <p className="text-xs font-black uppercase tracking-[0.14em] text-gold-700">{project.category}</p>
              <h2 className="mt-3 text-xl font-black text-navy-950">{project.name}</h2>
              <p className="mt-2 text-sm font-semibold text-navy-600">{project.location}</p>
              <p className="mt-4 text-sm leading-7 text-navy-700">{project.scope}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
