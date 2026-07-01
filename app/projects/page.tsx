import Image from "next/image";
import Link from "next/link";
import { projectPhotoSet, projects } from "@/lib/site-data";

export const metadata = {
  title: "Atlas Consultant Project Gallery",
  description: "Representative structural audit, building repair, waterproofing, PMC and redevelopment project photos from Atlas Consultant."
};

export default function ProjectsPage() {
  return (
    <main className="section bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-black uppercase tracking-[0.18em] text-gold-700">Projects</p>
        <h1 className="mt-3 text-4xl font-black text-navy-950 md:text-6xl">Atlas Consultant project gallery</h1>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Link key={project.slug} href={`/projects/${project.slug}`} className="overflow-hidden rounded-lg border border-navy-100 bg-white shadow-sm transition hover:shadow-premium">
              <Image src={project.image} alt={project.imageAlt} width={900} height={600} className="aspect-[4/3] w-full object-cover" />
              <div className="p-6">
                <p className="text-xs font-black uppercase tracking-[0.14em] text-gold-700">{project.category}</p>
                <h2 className="mt-3 text-xl font-black text-navy-950">{project.name}</h2>
                <p className="mt-2 text-sm font-semibold text-navy-600">{project.location}</p>
                <p className="mt-4 text-sm leading-7 text-navy-700">{project.scope}</p>
              </div>
            </Link>
          ))}
        </div>
        <section className="mt-16">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-gold-700">Site gallery</p>
          <h2 className="mt-3 text-3xl font-black text-navy-950">Repair, audit and rehabilitation photos</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3 lg:grid-cols-4">
            {projectPhotoSet.slice(0, 16).map((photo) => (
              <div key={photo.card} className="overflow-hidden rounded-lg border border-navy-100 bg-white">
                <Image src={photo.card} alt={photo.title} width={900} height={600} className="aspect-[4/3] w-full object-cover" />
                <p className="p-3 text-sm font-bold text-navy-800">{photo.title}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
