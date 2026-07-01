import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { KnowledgeSchemas } from "@/components/knowledge-schema";
import { LeadForm } from "@/components/lead-form";
import { codeReferenceTables, crackReferenceTables, knowledgeTopics } from "@/lib/knowledge-data";
import { getKnowledgeTopic, getRelatedTopics, ndtTests, standardSections } from "@/lib/knowledge-utils";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return knowledgeTopics.map((topic) => ({ slug: topic.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const topic = getKnowledgeTopic(slug);
  if (!topic) return {};
  return {
    title: `${topic.title} | Engineering Knowledge Centre`,
    description: topic.quickAnswer,
    alternates: { canonical: `/knowledge-centre/${topic.slug}` },
    openGraph: {
      title: topic.title,
      description: topic.quickAnswer,
      type: "article",
      url: `/knowledge-centre/${topic.slug}`
    },
    twitter: {
      card: "summary_large_image",
      title: topic.title,
      description: topic.quickAnswer
    }
  };
}

function SectionBlock({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-28 border-b border-navy-100 py-8 last:border-b-0">
      <h2 className="text-2xl font-black text-navy-950">{title}</h2>
      <div className="mt-4 text-base leading-8 text-navy-700">{children}</div>
    </section>
  );
}

export default async function KnowledgeTopicPage({ params }: Props) {
  const { slug } = await params;
  const topic = getKnowledgeTopic(slug);
  if (!topic) notFound();
  const related = getRelatedTopics(topic);
  const isCrackTopic = /crack|spalling|corrosion|repair/i.test(topic.title + topic.source);
  const isCodeTopic = /code|is 456|is 875|is 1893|is 13920|bmc|stability/i.test(topic.title + topic.source);

  return (
    <main>
      <KnowledgeSchemas topic={topic} />
      <section className="blueprint bg-white py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="text-sm font-semibold text-navy-500">
            <Link href="/">Home</Link> / <Link href="/knowledge-centre">Knowledge Centre</Link> / <span className="text-navy-900">{topic.title}</span>
          </nav>
          <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_0.38fr]">
            <div>
              <p className="inline-flex rounded-full border border-navy-100 bg-navy-50 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-navy-800">
                {topic.category}
              </p>
              <h1 className="mt-5 text-4xl font-black leading-tight text-navy-950 md:text-6xl">{topic.title}</h1>
              <p className="mt-5 text-lg leading-8 text-navy-700">{topic.quickAnswer}</p>
              <p className="mt-4 text-sm font-bold text-gold-700">{topic.readingTime}</p>
            </div>
            <aside className="rounded-lg border border-navy-100 bg-white p-5 shadow-sm">
              <p className="text-sm font-black uppercase tracking-[0.14em] text-gold-700">Table of contents</p>
              <div className="mt-4 grid gap-2">
                {standardSections.map((section) => (
                  <a key={section} href={`#${section.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`} className="text-sm font-semibold text-navy-700 hover:text-navy-950">
                    {section}
                  </a>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-10">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.38fr] lg:px-8">
          <article className="rounded-lg border border-navy-100 bg-white p-6 md:p-8">
            <SectionBlock id="quick-answer" title="Quick Answer">
              <p className="rounded-lg bg-navy-50 p-5 font-semibold text-navy-900">{topic.quickAnswer}</p>
            </SectionBlock>

            <SectionBlock id="definition" title="Definition">
              <p>
                In building repair engineering, <strong>{topic.title}</strong> refers to the technical concept, site condition, test, design check or decision process used to understand building safety, durability, repair scope or statutory documentation. The definition must always be read with the actual site condition and applicable Indian Standards.
              </p>
            </SectionBlock>

            <SectionBlock id="introduction" title="Introduction">
              <p>{topic.source || topic.quickAnswer}</p>
              <p className="mt-4">
                This topic is part of {topic.section || topic.category}. It is relevant to structural engineers, repair consultants, housing society committees, contractors and property managers because it affects diagnosis, cost, tendering, execution quality and long-term durability.
              </p>
            </SectionBlock>

            <SectionBlock id="purpose" title="Purpose">
              <ul className="list-disc space-y-2 pl-5">
                <li>Convert visible building symptoms into engineering evidence.</li>
                <li>Separate cosmetic issues from structural or durability risks.</li>
                <li>Support repair selection, BOQ preparation, tender comparison and quality control.</li>
                <li>Create a defensible technical record for society decision-making.</li>
              </ul>
            </SectionBlock>

            <SectionBlock id="importance" title="Importance">
              <p>
                Housing societies should care about this topic because wrong diagnosis can create repeated repairs, inflated budgets, unsafe execution or incomplete compliance. A committee should insist on clear observations, engineering reasoning and measurable acceptance criteria before approving work.
              </p>
            </SectionBlock>

            <SectionBlock id="engineering-background" title="Engineering Background">
              <p>
                Existing buildings behave differently from new design assumptions. Ageing, carbonation, chloride exposure, leakage, workmanship variation, past modifications and repeated patch repairs can change the condition of concrete, reinforcement and waterproofing systems. Engineering judgment must therefore combine visual inspection, drawings, measurements, testing and practical site experience.
              </p>
            </SectionBlock>

            <SectionBlock id="causes" title="Causes">
              <div className="grid gap-3 md:grid-cols-2">
                {["Water ingress and persistent dampness", "Reinforcement corrosion", "Inadequate cover or poor workmanship", "Overloading or unauthorized alteration", "Shrinkage, thermal movement or settlement", "Poor material compatibility during earlier repairs"].map((item) => (
                  <div key={item} className="rounded-lg bg-slate-50 p-4 font-semibold text-navy-800">{item}</div>
                ))}
              </div>
            </SectionBlock>

            <SectionBlock id="types" title="Types">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[620px] border-collapse text-left text-sm">
                  <thead>
                    <tr className="bg-navy-950 text-white">
                      <th className="p-3">Type</th>
                      <th className="p-3">Typical use</th>
                      <th className="p-3">Engineering caution</th>
                    </tr>
                  </thead>
                  <tbody>
                    {["Visual condition", "Testing evidence", "Design verification", "Repair execution", "Completion documentation"].map((item) => (
                      <tr key={item} className="border-b border-navy-100">
                        <td className="p-3 font-bold text-navy-950">{item}</td>
                        <td className="p-3">Used to classify risk and decide next action.</td>
                        <td className="p-3">Should not be interpreted without site context.</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </SectionBlock>

            <SectionBlock id="symptoms" title="Symptoms">
              <ul className="list-disc space-y-2 pl-5">
                <li>Cracks, spalling, hollow plaster, exposed reinforcement or rust stains.</li>
                <li>Leakage marks, damp patches, efflorescence, paint failure or recurring seepage.</li>
                <li>Deflection, settlement, loose facade elements or unsafe projections.</li>
                <li>Hidden signs such as low cover, carbonation reaching steel, chloride contamination or active corrosion potential.</li>
              </ul>
            </SectionBlock>

            <SectionBlock id="investigation-procedure" title="Investigation Procedure">
              <ol className="list-decimal space-y-3 pl-5">
                <li><strong>Document review:</strong> drawings, previous repairs, leakage complaints and municipal records establish background and risk history.</li>
                <li><strong>Visual inspection:</strong> defect location, pattern and severity are mapped before any repair method is assumed.</li>
                <li><strong>Measurement and testing:</strong> selected tests verify strength, cover, corrosion probability or concrete quality where visual evidence is insufficient.</li>
                <li><strong>Engineering interpretation:</strong> observations are connected to likely causes and classified by priority.</li>
                <li><strong>Reporting:</strong> findings should include photographs, drawings, recommendations, BOQ implications and quality checks.</li>
              </ol>
            </SectionBlock>

            <SectionBlock id="equipment-used" title="Equipment Used">
              <div className="grid gap-4 md:grid-cols-2">
                {["Hammer and tapping tools", "Cover meter", "Moisture meter", "Thermal camera", "Rebound hammer", "UPV equipment", "Half-cell kit", "Core cutting tools"].map((item) => (
                  <div key={item} className="rounded-lg border border-navy-100 p-4">
                    <h3 className="font-black text-navy-950">{item}</h3>
                    <p className="mt-2 text-sm leading-7">Used to convert site observations into measurable evidence. The limitation is that every instrument must be calibrated, interpreted and cross-checked with visible condition.</p>
                  </div>
                ))}
              </div>
            </SectionBlock>

            <SectionBlock id="relevant-ndt-tests" title="Relevant NDT Tests">
              <div className="grid gap-3">
                {ndtTests.map((test) => (
                  <div key={test.name} className="rounded-lg bg-slate-50 p-4">
                    <h3 className="font-black text-navy-950">{test.name}</h3>
                    <p className="mt-2 text-sm"><strong>Use:</strong> {test.use}</p>
                    <p className="mt-1 text-sm"><strong>Limitation:</strong> {test.caution}</p>
                  </div>
                ))}
              </div>
            </SectionBlock>

            <SectionBlock id="applicable-is-codes" title="Applicable IS Codes">
              <p>
                Commonly connected standards include IS 456 for RCC design and durability, IS 875 for loading, IS 1893 for earthquake design, IS 13920 for ductile detailing, IS 13311 for rebound hammer and UPV, IS 516 for concrete testing, IS 15988 for repair and strengthening, and IS 16204 for concrete structure maintenance and rehabilitation.
              </p>
              {isCodeTopic ? (
                <div className="mt-5 overflow-x-auto">
                  <table className="w-full min-w-[620px] text-left text-sm">
                    <tbody>
                      {codeReferenceTables.slice(0, 2).flatMap((table) => table.rows.slice(1, 6)).map((row, index) => (
                        <tr key={index} className="border-b border-navy-100">
                          <td className="p-3 font-bold text-navy-950">{row[0]}</td>
                          <td className="p-3">{row[1]}</td>
                          <td className="p-3">{row[2] || ""}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : null}
            </SectionBlock>

            <SectionBlock id="atlas-engineering-methodology" title="Atlas Engineering Methodology">
              <p>
                Atlas-style methodology starts with site history, flat-wise and common-area inspection, defect mapping, testing where required, AutoCAD or panel marking for clarity, repair priority classification, BOQ preparation, tender support and PMC quality monitoring. The method is evidence-first: the repair item follows the diagnosis, not the other way around.
              </p>
            </SectionBlock>

            <SectionBlock id="step-by-step-procedure" title="Step-by-Step Procedure">
              <div className="grid gap-3">
                {["Inspection", "Preparation", "Execution", "Quality Control", "Completion"].map((step, index) => (
                  <div key={step} className="rounded-lg border border-navy-100 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.14em] text-gold-700">Stage {index + 1}</p>
                    <h3 className="mt-1 font-black text-navy-950">{step}</h3>
                    <p className="mt-2 text-sm leading-7">Define the acceptance criteria, responsible party, documentation requirement and hold point before moving to the next stage.</p>
                  </div>
                ))}
              </div>
            </SectionBlock>

            <SectionBlock id="materials" title="Materials">
              <p>
                Materials should be selected for compatibility with existing concrete, exposure condition, crack movement, moisture condition, strength requirement and workmanship constraints. Storage, shelf life, surface preparation and manufacturer instructions must be controlled at site.
              </p>
            </SectionBlock>

            <SectionBlock id="boq" title="BOQ">
              <p>
                If this topic affects execution, the BOQ should define item scope, unit of measurement, surface preparation, material specification, application method, measurement rule, quality checks and exclusions. Vague lump-sum repair descriptions should be avoided.
              </p>
            </SectionBlock>

            <SectionBlock id="rate-analysis" title="Rate Analysis">
              <p>
                Rate analysis should account for material consumption, labour productivity, equipment, access system, wastage, transport, overheads, contractor margin, warranty obligations and market variation. Repair rates vary significantly with height, access, quantity, surface condition and curing/protection requirements.
              </p>
            </SectionBlock>

            <SectionBlock id="quality-control" title="Quality Control">
              <ul className="list-disc space-y-2 pl-5">
                <li>Approve materials and method statements before execution.</li>
                <li>Check surface preparation before concealed stages are covered.</li>
                <li>Record measurements jointly for billing transparency.</li>
                <li>Maintain photographs, site reports and test records.</li>
                <li>Close work only after inspection, curing/protection and completion documentation.</li>
              </ul>
            </SectionBlock>

            <SectionBlock id="safety" title="Safety">
              <p>
                Safety planning must include PPE, barricading, work-at-height precautions, scaffold or rope access checks, electrical isolation, falling-object protection, emergency response and resident communication. No repair saving justifies unsafe access or uncontrolled demolition.
              </p>
            </SectionBlock>

            <SectionBlock id="common-mistakes" title="Common Mistakes">
              <ul className="list-disc space-y-2 pl-5">
                <li>Starting repair before identifying the root cause.</li>
                <li>Using one repair material for every defect type.</li>
                <li>Skipping measurements, photographs or stage-wise documentation.</li>
                <li>Accepting contractor rates without comparable BOQ scope.</li>
                <li>Issuing safety conclusions without adequate inspection or testing basis.</li>
              </ul>
            </SectionBlock>

            <SectionBlock id="atlas-engineering-recommendation" title="Atlas Engineering Recommendation">
              <p>
                For <strong>{topic.title}</strong>, use a proportionate engineering approach: inspect first, classify risk, test only where the result will influence decision-making, prepare a clear scope, and monitor execution through measurable quality checks. Society committees should not approve work based only on verbal assurances.
              </p>
            </SectionBlock>

            <SectionBlock id="practical-site-experience" title="Practical Site Experience">
              <p>
                In occupied housing societies, repair decisions are affected by resident access, leakage complaints, monsoon timing, contractor sequencing, committee approvals and budget limits. Good engineering documentation helps reduce disputes because it connects site condition, repair scope, measurement and payment.
              </p>
            </SectionBlock>

            {isCrackTopic ? (
              <SectionBlock id="crack-reference" title="Crack Reference Tables">
                <div className="grid gap-5">
                  {crackReferenceTables.map((table) => (
                    <div key={table.title} className="overflow-x-auto">
                      <h3 className="mb-3 font-black text-navy-950">{table.title}</h3>
                      <table className="w-full min-w-[680px] text-left text-sm">
                        <tbody>
                          {table.rows.slice(0, 8).map((row, index) => (
                            <tr key={index} className="border-b border-navy-100">
                              {row.slice(0, 4).map((cell, cellIndex) => (
                                <td key={cellIndex} className="p-3">{cell}</td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ))}
                </div>
              </SectionBlock>
            ) : null}

            <SectionBlock id="faqs" title="Frequently Asked Questions">
              <div className="grid gap-4">
                {topic.faqs.map((faq) => (
                  <details key={faq.question} className="rounded-lg bg-slate-50 p-5">
                    <summary className="cursor-pointer font-black text-navy-950">{faq.question}</summary>
                    <p className="mt-3 text-sm leading-7 text-navy-700">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </SectionBlock>

            <SectionBlock id="related-topics" title="Related Topics">
              <div className="grid gap-3 md:grid-cols-2">
                {related.map((item) => (
                  <Link key={item.slug} href={`/knowledge-centre/${item.slug}`} className="rounded-lg border border-navy-100 p-4 font-bold text-navy-950 hover:border-gold-500">
                    {item.title}
                  </Link>
                ))}
              </div>
            </SectionBlock>

            <SectionBlock id="glossary" title="Glossary">
              <div className="grid gap-3">
                {(topic.glossary.length ? topic.glossary : [{ term: topic.title, definition: topic.quickAnswer }]).map((item) => (
                  <div key={item.term} className="rounded-lg bg-slate-50 p-4">
                    <dt className="font-black text-navy-950">{item.term}</dt>
                    <dd className="mt-1 text-sm leading-7">{item.definition}</dd>
                  </div>
                ))}
              </div>
            </SectionBlock>
          </article>
          <aside className="space-y-5">
            <LeadForm title="Ask an Engineering Question" />
            <div className="rounded-lg border border-navy-100 bg-white p-5">
              <p className="text-sm font-black uppercase tracking-[0.14em] text-gold-700">Knowledge category</p>
              <p className="mt-2 text-xl font-black text-navy-950">{topic.category}</p>
              <Link href="/knowledge-centre" className="mt-4 inline-flex items-center gap-2 text-sm font-black text-navy-900">
                Browse all topics <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
