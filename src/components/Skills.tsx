import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { skillGroups } from "../data/skills";

function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-white/5 bg-[#070707] py-28 sm:py-32"
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
              Tech Stack
            </span>
          </div>

          <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Tools I use to
            <span className="text-zinc-500"> build and ship.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-500 sm:text-lg">
            A combination of AI technologies, programming languages,
            backend frameworks, frontend tools, automation platforms and
            cloud technologies.
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <motion.article
              key={group.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.07,
              }}
              className="group rounded-2xl border border-white/8 bg-white/[0.02] p-7 transition-all duration-300 hover:border-violet-400/20 hover:bg-white/[0.04]"
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-700">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="mt-4 text-xl font-semibold text-white">
                    {group.title}
                  </h3>
                </div>

                <ArrowUpRight
                  size={18}
                  className="text-zinc-700 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-violet-300"
                />
              </div>

              <p className="mt-4 text-sm leading-6 text-zinc-500">
                {group.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-white/8 bg-black/20 px-3 py-2 text-xs text-zinc-400 transition-colors duration-300 group-hover:border-white/10 group-hover:text-zinc-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 border-l border-violet-400/40 pl-6"
        >
          <p className="max-w-3xl text-sm leading-7 text-zinc-500 sm:text-base">
            My focus is not just learning technologies, but understanding how
            they work together to turn an idea into a reliable software
            solution.
          </p>
        </motion.div>

      </div>
    </section>
  );
}

export default Skills;