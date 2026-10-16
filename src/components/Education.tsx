import { motion } from "framer-motion";
import { ArrowUpRight, GraduationCap, Award, BookOpen } from "lucide-react";
import { education } from "../data/education";

function Education() {
  return (
    <section
      id="education"
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
              Education & Credentials
            </span>
          </div>

          <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            The foundation behind
            <span className="text-zinc-500"> my work.</span>
          </h2>
        </motion.div>

        {/* Primary Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mt-16 overflow-hidden rounded-3xl border border-white/8 bg-white/[0.02]"
        >
          <div className="grid lg:grid-cols-[0.35fr_0.65fr]">

            {/* Left */}
            <div className="flex flex-col justify-between border-b border-white/8 bg-white/[0.02] p-8 lg:border-b-0 lg:border-r sm:p-10">
              <div>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-400/5 text-violet-300">
                  <GraduationCap size={26} />
                </div>

                <p className="mt-8 text-sm font-medium text-violet-300">
                  {education.period}
                </p>

                <div className="mt-4 inline-flex items-center rounded-full border border-violet-400/30 bg-violet-400/10 px-3.5 py-1 text-xs font-semibold text-violet-200">
                  {education.grade}
                </div>
              </div>

              <p className="mt-10 text-xs uppercase tracking-[0.2em] text-zinc-700">
                Undergraduate Degree
              </p>
            </div>

            {/* Right */}
            <div className="p-8 sm:p-10 lg:p-14">
              <h3 className="max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                {education.degree}
              </h3>

              <p className="mt-4 text-lg text-zinc-400">
                {education.institution}
              </p>

              <p className="mt-7 max-w-3xl text-sm leading-7 text-zinc-500 sm:text-base">
                {education.description}
              </p>

              {/* Areas */}
              <div className="mt-9">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-700">
                  Areas of Study
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {education.areas.map((area) => (
                    <span
                      key={area}
                      className="rounded-full border border-white/8 bg-white/[0.02] px-3.5 py-2 text-xs text-zinc-500"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              {/* Link */}
              <div className="mt-9">
                <a
                  href="#projects"
                  className="group inline-flex items-center gap-2 text-sm font-medium text-white"
                >
                  View the work built from this foundation

                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              </div>
            </div>

          </div>
        </motion.div>

        {/* Secondary Education & Certifications Grid */}
        <div className="mt-8 grid gap-6 md:grid-cols-2">

          {/* Schooling */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-white/8 bg-white/[0.02] p-7 sm:p-8"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-violet-300">
                <BookOpen size={20} />
              </div>

              <h4 className="text-lg font-semibold text-white">
                Secondary Education
              </h4>
            </div>

            <div className="mt-6 space-y-5">
              {education.secondary.map((item) => (
                <div
                  key={item.level}
                  className="rounded-xl border border-white/5 bg-black/20 p-4"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm font-medium text-white">
                        {item.level}
                      </p>
                      <p className="mt-1 text-xs text-zinc-500">
                        {item.institution}
                      </p>
                    </div>

                    <span className="rounded-full border border-violet-400/20 bg-violet-400/5 px-2.5 py-1 text-xs font-medium text-violet-300">
                      {item.score}
                    </span>
                  </div>

                  <p className="mt-2 text-[11px] text-zinc-600">
                    {item.period}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-white/8 bg-white/[0.02] p-7 sm:p-8"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-violet-300">
                <Award size={20} />
              </div>

              <h4 className="text-lg font-semibold text-white">
                Certifications & Badges
              </h4>
            </div>

            <div className="mt-6 space-y-3">
              {education.certifications.map((cert) => (
                <div
                  key={cert}
                  className="flex items-center gap-3 rounded-xl border border-white/5 bg-black/20 p-3.5"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                  <span className="text-sm text-zinc-300">{cert}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Education;