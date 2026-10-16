import { motion } from "framer-motion";
import { ArrowUpRight, Code2, BrainCircuit, BarChart3, Database } from "lucide-react";

const focusAreas = [
  {
    icon: BarChart3,
    title: "Data Analytics & BI",
    description:
      "Exploratory Data Analysis (EDA), retail analytics, automated ETL pipelines, and interactive executive dashboards with Power BI and Tableau.",
  },
  {
    icon: BrainCircuit,
    title: "AI & Generative AI",
    description:
      "Autonomous agentic systems with LangGraph, LangChain, RAG pipelines, ChromaDB persistent vector memory, and Gemini 1.5 Flash.",
  },
  {
    icon: Database,
    title: "Data Engineering & ML",
    description:
      "Predictive modeling with Scikit-learn and TensorFlow, data cleaning, feature engineering, CNNs, NLP, and scalable SQL databases.",
  },
  {
    icon: Code2,
    title: "Backend & Optimization",
    description:
      "FastAPI microservices, REST APIs, WebSockets, algorithmic optimization, and data structures problem solving in Python and Java.",
  },
];

function About() {
  return (
    <section
      id="about"
      className="relative border-t border-white/5 bg-[#070707] py-28 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-violet-400" />

            <span className="text-sm font-medium uppercase tracking-[0.25em] text-violet-300">
              About Me
            </span>
          </div>

          <h2 className="mt-6 max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Transforming complex data into
            <span className="text-zinc-500"> intelligent systems.</span>
          </h2>
        </motion.div>

        {/* Main content */}
        <div className="mt-16 grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">

          {/* About text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xl leading-9 text-zinc-300">
              I'm Rohit R, an Artificial Intelligence & Data Science graduate
              focused on building scalable machine learning solutions, data
              pipelines, and agentic AI systems.
            </p>

            <p className="mt-6 leading-8 text-zinc-500">
              My technical foundation spans both data analytics and software
              engineering. I enjoy taking challenges from raw data to production-ready
              applications — designing ETL data pipelines, extracting actionable
              patterns through exploratory data analysis, developing predictive models,
              and delivering interactive dashboards that drive strategic decisions.
            </p>

            <p className="mt-6 leading-8 text-zinc-500">
              My hands-on experience covers Generative AI with LangGraph and ChromaDB,
              Machine Learning with Scikit-learn and TensorFlow, cybersecurity risk
              analysis, and algorithmic optimization where I improved solution
              efficiencies by up to 35%. I am eager to contribute as a Data Analyst,
              AI Engineer, Python Developer, or Machine Learning Engineer.
            </p>

            <a
              href="#experience"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-white"
            >
              Explore my experience

              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          </motion.div>

          {/* Focus cards */}
          <div className="grid gap-4 sm:grid-cols-2">
            {focusAreas.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="group rounded-2xl border border-white/8 bg-white/[0.02] p-6 transition-all duration-300 hover:border-violet-400/20 hover:bg-white/[0.04]"
                >
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-violet-300">
                    <Icon size={21} />
                  </div>

                  <h3 className="text-base font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-zinc-500">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Career highlights */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mt-20 grid overflow-hidden rounded-2xl border border-white/8 bg-white/[0.02] sm:grid-cols-3"
        >
          <div className="border-b border-white/8 p-7 sm:border-b-0 sm:border-r">
            <p className="text-3xl font-semibold text-white">9.04 CGPA</p>
            <p className="mt-2 text-sm text-zinc-500">
              B.Tech in AI & Data Science
            </p>
          </div>

          <div className="border-b border-white/8 p-7 sm:border-b-0 sm:border-r">
            <p className="text-3xl font-semibold text-white">GenAI + Agents</p>
            <p className="mt-2 text-sm text-zinc-500">
              LangGraph · RAG · ChromaDB
            </p>
          </div>

          <div className="p-7">
            <p className="text-3xl font-semibold text-white">Analytics + ETL</p>
            <p className="mt-2 text-sm text-zinc-500">
              Power BI · SQL · FastAPI · Python
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default About;