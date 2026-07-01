import type { MetadataRoute } from "next";
import { blogTopics, landingPages, projects, services } from "@/lib/site-data";
import { knowledgeTopics } from "@/lib/knowledge-data";
import { absoluteUrl } from "@/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/contact",
    "/projects",
    "/process",
    "/why-structural-audit",
    "/tendering",
    "/faq",
    "/blog",
    "/knowledge-centre",
    "/knowledge-centre/glossary",
    "/knowledge-centre/boq-rate-analysis"
  ];
  return [
    ...staticRoutes.map((route) => ({ url: absoluteUrl(route), lastModified: new Date() })),
    ...services.map((service) => ({ url: absoluteUrl(`/services/${service.slug}`), lastModified: new Date() })),
    ...landingPages.map(([slug]) => ({ url: absoluteUrl(`/${slug}`), lastModified: new Date() })),
    ...projects.map((project) => ({ url: absoluteUrl(`/projects/${project.slug}`), lastModified: new Date() })),
    ...blogTopics.map((post) => ({ url: absoluteUrl(`/blog/${post.slug}`), lastModified: new Date() })),
    ...knowledgeTopics.map((topic) => ({ url: absoluteUrl(`/knowledge-centre/${topic.slug}`), lastModified: new Date() }))
  ];
}
