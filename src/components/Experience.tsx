import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  MapPin,
} from "lucide-react";
import { experiences } from "../data/experience";

function Experience() {
  return (
    <section
      id="experience"
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
              Experience
            </span>
          </div>

          <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Where I've applied
            <span className="text-zinc-500"> my skills in industry.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-500 sm:text-lg">
            Hands-on internship experience in Python algorithmic optimization,
            system efficiency, network vulnerability analysis, and security auditing.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="mt-16 space-y-8">
          {experiences.map((experience, index) => (
            <motion.article
              key={`${experience.company}-${experience.period}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="grid gap-8 lg:grid-cols-[220px_1fr]"
            >
              {/* Date */}
              <div className="hidden lg:block">
                <p className="text-sm font-medium text-violet-300">
                  {experience.period}
                </p>

                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-zinc-700">
                  {experience.type}
                </p>
              </div>

              {/* Card */}
              <div className="rounded-3xl border border-white/8 bg-white/[0.02] p-7 sm:p-9">

                {/* Mobile date */}
                <div className="mb-6 flex items-center justify-between lg:hidden">
                  <div>
                    <p className="text-sm font-medium text-violet-300">
                      {experience.period}
                    </p>

                    <p className="mt-1 text-xs uppercase tracking-[0.2em] text-zinc-700">
                      {experience.type}
                    </p>
                  </div>

                  <BriefcaseBusiness
                    size={20}
                    className="text-zinc-700"
                  />
                </div>

                {/* Role */}
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-sm text-zinc-500">
                      {experience.company}
                    </p>

                    <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                      {experience.role}
                    </h3>

                    {experience.location && (
                      <div className="mt-3 flex items-center gap-2 text-sm text-zinc-600">
                        <MapPin size={14} />
                        {experience.location}
                      </div>
                    )}
                  </div>

                  <span className="hidden text-zinc-700 sm:block">
                    <ArrowUpRight size={20} />
                  </span>
                </div>

                {/* Description */}
                <p className="mt-7 max-w-3xl text-sm leading-7 text-zinc-400 sm:text-base">
                  {experience.description}
                </p>

                {/* Contributions */}
                <div className="mt-8 border-t border-white/5 pt-7">
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-700">
                    Key Contributions
                  </p>

                  <ul className="mt-5 space-y-4">
                    {experience.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex gap-4 text-sm leading-7 text-zinc-500"
                      >
                        <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />

                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mt-8 flex flex-wrap gap-2">
                  {experience.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/8 bg-black/20 px-3 py-1.5 text-xs text-zinc-500"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Experience;