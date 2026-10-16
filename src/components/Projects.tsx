import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ExternalLink,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";
import { projects } from "../data/projects";

function Projects() {
  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section
      id="projects"
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
              Selected Work
            </span>
          </div>

          <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Projects that turn
            <span className="text-zinc-500"> ideas into systems.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-500 sm:text-lg">
            A selection of AI, software engineering, automation and
            data-driven projects I've worked on.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="mt-16 space-y-8">
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
              className="group overflow-hidden rounded-3xl border border-white/8 bg-white/[0.02]"
            >
              <div className="grid lg:grid-cols-[1.05fr_0.95fr]">

                {/* Image */}
                <div className="relative min-h-[320px] overflow-hidden bg-zinc-900 lg:min-h-[460px]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                    }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                  <span className="absolute left-6 top-6 rounded-full border border-white/10 bg-black/40 px-4 py-2 text-xs font-medium text-zinc-300 backdrop-blur-md">
                    Featured Project
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-14">

                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-violet-300">
                    {project.category}
                  </p>

                  <h3 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                    {project.title}
                  </h3>

                  <p className="mt-5 text-base leading-7 text-zinc-400">
                    {project.description}
                  </p>

                  <p className="mt-5 text-sm leading-7 text-zinc-600">
                    {project.details}
                  </p>

                  {/* Technologies */}
                  <div className="mt-7 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-white/8 bg-white/[0.02] px-3 py-1.5 text-xs text-zinc-500"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="mt-8 flex flex-wrap gap-5">
                    <a
                      href={project.github}
                      className="group/link inline-flex items-center gap-2 text-sm font-medium text-white"
                    >
<FaGithub size={17} />
                      GitHub

                      <ArrowUpRight
                        size={15}
                        className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                      />
                    </a>

                    <a
                      href={project.demo}
                      className="group/link inline-flex items-center gap-2 text-sm font-medium text-zinc-500 transition-colors hover:text-white"
                    >
                      <ExternalLink size={16} />

                      Live Demo

                      <ArrowUpRight
                        size={15}
                        className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Other Projects */}
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {otherProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              className="group rounded-2xl border border-white/8 bg-white/[0.02] p-7 transition-all duration-300 hover:border-violet-400/20 hover:bg-white/[0.04]"
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-violet-300">
                    {project.category}
                  </p>

                  <h3 className="mt-3 text-xl font-semibold text-white">
                    {project.title}
                  </h3>
                </div>

                <ArrowUpRight
                  size={19}
                  className="shrink-0 text-zinc-700 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-violet-300"
                />
              </div>

              <p className="mt-4 text-sm leading-7 text-zinc-500">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.slice(0, 5).map((technology) => (
                  <span
                    key={technology}
                    className="rounded-lg border border-white/8 px-2.5 py-1.5 text-xs text-zinc-600"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <div className="mt-7 flex gap-5">
                <a
                  href={project.github}
                  className="inline-flex items-center gap-2 text-xs text-zinc-500 hover:text-white"
                >
<FaGithub size={15} />
                  GitHub
                </a>

                <a
                  href={project.demo}
                  className="inline-flex items-center gap-2 text-xs text-zinc-500 hover:text-white"
                >
                  <ExternalLink size={15} />
                  Demo
                </a>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;