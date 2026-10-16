import { motion } from "framer-motion";
import {
  BrainCircuit,
  BarChart3,
  Database,
  Terminal,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: BarChart3,
    title: "Data Analytics & BI",
    description:
      "Engineering end-to-end data pipelines, exploratory data analysis (EDA), retail metrics, and executive interactive dashboards in Power BI and Tableau.",
    technologies: [
      "Power BI",
      "Tableau",
      "SQL",
      "Pandas",
      "EDA",
      "Excel",
    ],
  },
  {
    number: "02",
    icon: BrainCircuit,
    title: "Agentic AI & GenAI",
    description:
      "Developing autonomous multi-step agents using LangGraph, RAG pipelines, ChromaDB persistent vector memory, and Google Gemini 1.5 Flash.",
    technologies: [
      "LangGraph",
      "LangChain",
      "RAG",
      "ChromaDB",
      "FastAPI",
      "WebSockets",
    ],
  },
  {
    number: "03",
    icon: Database,
    title: "Machine Learning & Deep Learning",
    description:
      "Training and evaluating predictive models, convolutional neural networks (CNN), NLP pipelines, and data engineering transformations.",
    technologies: [
      "Scikit-learn",
      "TensorFlow",
      "Deep Learning",
      "CNN",
      "NLP",
      "ETL Pipelines",
    ],
  },
  {
    number: "04",
    icon: Terminal,
    title: "Backend & Algorithmic Engineering",
    description:
      "Building high-speed asynchronous REST APIs, optimized data structures, time complexity reduction, and enterprise database systems.",
    technologies: [
      "Python",
      "FastAPI",
      "Java",
      "SQL & DBMS",
      "DSA Optimization",
      "Linux",
    ],
  },
];

function Services() {
  return (
    <section
      id="services"
      className="border-t border-white/5 bg-[#050505] py-28 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-violet-400" />

            <span className="text-sm font-medium uppercase tracking-[0.25em] text-violet-300">
              What I Do
            </span>
          </div>

          <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Engineering solutions
            <span className="text-zinc-500"> across data, AI and backend.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-500 sm:text-lg">
            I combine data analytics, machine learning, generative AI, and
            robust software engineering to build scalable applications that
            solve real business problems.
          </p>
        </motion.div>

        {/* Services */}
        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/8 bg-white/8 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                }}
                className="group relative bg-[#080808] p-8 transition-colors duration-300 hover:bg-[#0c0c0c] sm:p-10"
              >
                {/* Number */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium tracking-[0.2em] text-zinc-700">
                    {service.number}
                  </span>

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-violet-300 transition-all duration-300 group-hover:border-violet-400/30 group-hover:bg-violet-400/10">
                    <Icon size={21} />
                  </div>
                </div>

                {/* Content */}
                <h3 className="mt-10 text-2xl font-semibold tracking-tight text-white">
                  {service.title}
                </h3>

                <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-500">
                  {service.description}
                </p>

                {/* Technologies */}
                <div className="mt-7 flex flex-wrap gap-2">
                  {service.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/8 bg-white/[0.02] px-3 py-1.5 text-xs text-zinc-500 transition-colors group-hover:text-zinc-400"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Arrow */}
                <div className="mt-8 flex items-center gap-2 text-xs font-medium text-zinc-700 transition-colors group-hover:text-violet-300">
                  Explore capability

                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;