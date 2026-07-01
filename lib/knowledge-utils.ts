import { knowledgeTopics, type KnowledgeTopic } from "@/lib/knowledge-data";

export function getKnowledgeTopic(slug: string) {
  return knowledgeTopics.find((topic) => topic.slug === slug);
}

export function getRelatedTopics(topic: KnowledgeTopic, limit = 6) {
  return knowledgeTopics
    .filter((item) => item.slug !== topic.slug && (item.category === topic.category || item.section === topic.section))
    .slice(0, limit);
}

export function categorySlug(category: string) {
  return category.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export function wordsToReadingTime(text: string) {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return `${Math.max(4, Math.ceil(words / 180))} min read`;
}

export const ndtTests = [
  {
    name: "Rebound Hammer",
    use: "Indicative surface hardness and comparative concrete quality assessment.",
    caution: "Results are influenced by surface condition, carbonation, moisture and aggregate type."
  },
  {
    name: "UPV",
    use: "Concrete uniformity, cracks, voids and relative quality using ultrasonic pulse velocity.",
    caution: "Requires proper coupling and interpretation with member geometry and moisture condition."
  },
  {
    name: "Core Test",
    use: "Direct in-situ compressive strength verification when reliable strength data is required.",
    caution: "It is partially destructive and needs structural permission, repair of core locations and careful sampling."
  },
  {
    name: "Half-Cell Potential",
    use: "Probability of active reinforcement corrosion in concrete.",
    caution: "It indicates corrosion likelihood, not section loss or remaining bar capacity by itself."
  },
  {
    name: "Carbonation Test",
    use: "Depth of carbonation and risk of depassivation of reinforcement.",
    caution: "Must be compared with cover depth to understand corrosion risk."
  },
  {
    name: "Cover Meter",
    use: "Location of reinforcement and approximate cover measurement.",
    caution: "Accuracy depends on bar congestion, member thickness and calibration."
  },
  {
    name: "Chemical Analysis",
    use: "Chloride, sulphate, pH and other durability indicators where exposure attack is suspected.",
    caution: "Sampling location and interpretation matter more than isolated lab numbers."
  }
];

export const standardSections = [
  "Quick Answer",
  "Definition",
  "Introduction",
  "Purpose",
  "Importance",
  "Engineering Background",
  "Causes",
  "Types",
  "Symptoms",
  "Investigation Procedure",
  "Equipment Used",
  "Relevant NDT Tests",
  "Applicable IS Codes",
  "Atlas Engineering Methodology",
  "Step-by-Step Procedure",
  "Materials",
  "BOQ",
  "Rate Analysis",
  "Quality Control",
  "Safety",
  "Common Mistakes",
  "Atlas Engineering Recommendation",
  "Practical Site Experience",
  "FAQs",
  "Related Topics",
  "Glossary"
];
