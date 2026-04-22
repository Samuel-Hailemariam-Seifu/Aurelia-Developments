import PageLayout from "@/components/PageLayout";
import CTA from "@/components/CTA";
import Link from "next/link";

const phases = [
  {
    number: "01",
    title: "Strategic Vision",
    summary:
      "We begin with deep market intelligence, location analysis, and long-term value modeling.",
    points: [
      "Market and demand assessment",
      "Location and planning feasibility",
      "Investment and return scenarios",
    ],
  },
  {
    number: "02",
    title: "Design Direction",
    summary:
      "We shape a design language that combines architectural distinction with functional livability.",
    points: [
      "Architect and consultant coordination",
      "Material and finish curation",
      "Sustainability-led design decisions",
    ],
  },
  {
    number: "03",
    title: "Precision Delivery",
    summary:
      "Our teams execute construction with disciplined controls for quality, cost, and timeline certainty.",
    points: [
      "Milestone-based execution planning",
      "Quality and safety governance",
      "Transparent progress communication",
    ],
  },
  {
    number: "04",
    title: "Legacy Handover",
    summary:
      "Every project concludes with curated handover standards and long-term asset stewardship.",
    points: [
      "Comprehensive handover protocols",
      "Operations and service onboarding",
      "Post-completion performance support",
    ],
  },
];

export default function ProcessPage() {
  return (
    <PageLayout>
      <section className="py-20 bg-charcoal relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80')",
            }}
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-off-white mb-6">
              Our Process
            </h1>
            <div className="w-24 h-[1px] bg-bronze mx-auto mb-6"></div>
            <p className="text-xl text-warm-gray leading-relaxed">
              From concept to completion, every phase is structured to deliver
              landmark quality with investment-grade discipline.
            </p>
          </div>
        </div>
      </section>

      <section className="py-section bg-charcoal border-t border-bronze/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-12">
            {phases.map((phase, index) => (
              <article
                key={phase.number}
                className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start border border-bronze/15 p-8 lg:p-10"
              >
                <div className="lg:col-span-2">
                  <p className="text-5xl lg:text-6xl font-serif font-bold text-bronze/40">
                    {phase.number}
                  </p>
                </div>
                <div className="lg:col-span-6">
                  <h2 className="text-3xl lg:text-4xl font-serif font-bold text-off-white mb-4">
                    {phase.title}
                  </h2>
                  <p className="text-warm-gray text-lg leading-relaxed">
                    {phase.summary}
                  </p>
                </div>
                <div className="lg:col-span-4">
                  <div className="w-12 h-[1px] bg-bronze mb-5"></div>
                  <ul className="space-y-3">
                    {phase.points.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <span className="mt-2 w-1.5 h-1.5 bg-bronze rounded-full" />
                        <span className="text-warm-gray">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {index < phases.length - 1 ? (
                  <div className="lg:col-span-12">
                    <div className="h-px bg-bronze/10 mt-2" />
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-section bg-charcoal border-t border-bronze/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="border border-bronze/15 p-8">
              <h3 className="text-2xl font-serif font-semibold text-off-white mb-4">
                Transparent Execution
              </h3>
              <p className="text-warm-gray leading-relaxed">
                Structured milestones and communication checkpoints keep every
                stakeholder informed from pre-development to final delivery.
              </p>
            </div>
            <div className="border border-bronze/15 p-8">
              <h3 className="text-2xl font-serif font-semibold text-off-white mb-4">
                Global Design Standards
              </h3>
              <p className="text-warm-gray leading-relaxed">
                Each project follows a refined design and material framework to
                ensure timeless architecture and consistent luxury positioning.
              </p>
            </div>
            <div className="border border-bronze/15 p-8">
              <h3 className="text-2xl font-serif font-semibold text-off-white mb-4">
                Enduring Asset Value
              </h3>
              <p className="text-warm-gray leading-relaxed">
                We optimize for long-term performance, operational efficiency,
                and resident experience beyond project handover.
              </p>
            </div>
          </div>
          <div className="text-center mt-16">
            <Link
              href="/contact"
              className="inline-block px-10 py-4 bg-bronze text-charcoal text-lg font-medium hover:bg-bronze/90 transition-all duration-300"
            >
              Discuss Your Investment Goals
            </Link>
          </div>
        </div>
      </section>

      <CTA />
    </PageLayout>
  );
}
