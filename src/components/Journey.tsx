import { motion } from "framer-motion";
import {
  GraduationCap,
  BrainCircuit,
  BriefcaseBusiness,
  Sparkles,
  Code2,
  ArrowDown,
} from "lucide-react";

const journey = [
  {
    year: "2022",
    title: "Started B.Tech in AI & Data Science",
    description:
      "Began my undergraduate journey at Velammal Institute of Technology, building strong foundational knowledge in Python, SQL, Java, probability, statistics, and data structures.",
    icon: GraduationCap,
  },
  {
    year: "2023 – 2024",
    title: "Data Analytics & Machine Learning Pipelines",
    description:
      "Applied machine learning algorithms, deep learning architectures, and retail data analytics. Built interactive Power BI and Tableau dashboards to derive strategic business intelligence.",
    icon: BrainCircuit,
  },
  {
    year: "Aug 2024 – Sep 2024",
    title: "Cyber Security Intern at CYBERFORGE",
    description:
      "Conducted network traffic and system log analysis to identify vulnerabilities, contributing to a 25% reduction in security gaps during simulated threat audits.",
    icon: BriefcaseBusiness,
  },
  {
    year: "Dec 2024 – Jan 2025",
    title: "DSA Intern at INTRAINZ",
    description:
      "Optimized Python-based data structures and algorithms, boosting solution execution efficiency by 35% and reducing runtime complexity by 30%.",
    icon: Code2,
  },
  {
    year: "2025 →",
    title: "Agentic AI & Autonomous Pipelines",
    description:
      "Engineered ATLAS, an autonomous multi-step AI agent using LangGraph, ChromaDB vector retrieval, Gemini 1.5 Flash, and real-time WebSockets.",
    icon: Sparkles,
  },
];

function Journey() {
  return (
    <section
      id="journey"
      className="border-t border-white/5 bg-[#070707] py-28 sm:py-32"
    >
      <div className="mx-auto max-w-5xl px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-violet-400" />

            <span className="text-sm font-medium uppercase tracking-[0.25em] text-violet-300">
              Career Journey
            </span>

            <span className="h-px w-10 bg-violet-400" />
          </div>

          <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            From learning algorithms to
            <span className="text-zinc-500"> building intelligent systems.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-zinc-500 sm:text-lg">
            A track record of continuous learning, rigorous algorithmic problem solving,
            industry cybersecurity and DSA internships, and autonomous AI engineering.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-20">

          {/* Vertical line */}
          <div className="absolute left-5 top-0 h-full w-px bg-white/8 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-12">
            {journey.map((item, index) => {
              const Icon = item.icon;
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={`${item.year}-${item.title}`}
                  initial={{
                    opacity: 0,
                    x: isLeft ? -25 : 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                    margin: "-80px",
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                  }}
                  className="relative grid md:grid-cols-2 md:gap-16"
                >
                  {/* Desktop left */}
                  <div
                    className={`hidden md:block ${
                      isLeft ? "text-right" : ""
                    }`}
                  >
                    {isLeft && (
                      <JourneyContent
                        item={item}
                        Icon={Icon}
                        align="right"
                      />
                    )}
                  </div>

                  {/* Center node */}
                  <div className="absolute left-5 top-0 z-10 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border border-violet-400/30 bg-[#070707] text-violet-300 md:left-1/2">
                    <Icon size={17} />
                  </div>

                  {/* Desktop right */}
                  <div className="hidden md:block">
                    {!isLeft && (
                      <JourneyContent
                        item={item}
                        Icon={Icon}
                        align="left"
                      />
                    )}
                  </div>

                  {/* Mobile */}
                  <div className="pl-12 md:hidden">
                    <JourneyContent
                      item={item}
                      Icon={Icon}
                      align="left"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Ending */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 flex flex-col items-center text-center"
        >
          <ArrowDown size={18} className="mb-5 text-violet-300" />

          <p className="text-sm uppercase tracking-[0.2em] text-zinc-600">
            Ready for new opportunities
          </p>
        </motion.div>

      </div>
    </section>
  );
}

function JourneyContent({
  item,
  align,
}: {
  item: (typeof journey)[number];
  Icon: React.ElementType;
  align: "left" | "right";
}) {
  return (
    <div className={align === "right" ? "md:pr-2" : "md:pl-2"}>
      <span className="text-xs font-medium uppercase tracking-[0.2em] text-violet-300">
        {item.year}
      </span>

      <h3 className="mt-3 text-xl font-semibold tracking-tight text-white">
        {item.title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-zinc-500">
        {item.description}
      </p>
    </div>
  );
}

export default Journey;