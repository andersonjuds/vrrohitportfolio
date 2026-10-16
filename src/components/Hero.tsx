import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Mail,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import profileImage from "../assets/profile/rohit.jpg";

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#050505] pt-24"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[140px]" />

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 px-6 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">

        {/* =====================================================
            LEFT CONTENT
        ====================================================== */}

        <div>

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 flex items-center gap-3"
          >
            <span className="h-px w-10 bg-violet-400" />

            <span className="text-sm font-medium uppercase tracking-[0.25em] text-violet-300">
              Data Analyst · AI Engineer · Python & Java Developer
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          >
            Building intelligent
            <span className="block text-zinc-500">
              systems & data pipelines.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg"
          >
            Results-driven AI & Data Science graduate with hands-on experience in
            Machine Learning, Deep Learning, Data Engineering, ETL Pipelines, NLP,
            LangChain, FastAPI, SQL, and Cloud platforms.
          </motion.p>

          {/* Career Keywords */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 flex max-w-2xl flex-wrap gap-x-3 gap-y-2 text-sm text-zinc-500"
          >
            <span>Data Analytics</span>
            <span className="text-zinc-700">•</span>

            <span>AI & Machine Learning</span>
            <span className="text-zinc-700">•</span>

            <span>LLMs & LangGraph</span>
            <span className="text-zinc-700">•</span>

            <span>Python & Java</span>
            <span className="text-zinc-700">•</span>

            <span>Power BI & Tableau</span>
            <span className="text-zinc-700">•</span>

            <span>FastAPI & SQL</span>
            <span className="text-zinc-700">•</span>

            <span>ETL Pipelines & Cloud</span>
          </motion.div>

          {/* =====================================================
              BUTTONS
          ====================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-wrap gap-4"
          >

            {/* Explore My Work */}
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-transparent px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-violet-400/40 hover:bg-violet-400/5"
            >
              Explore My Work

              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>

            {/* Download Resume */}
            <a
              href="/Rohit_R_Resume.pdf"
              download="Rohit_R_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-transparent px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-violet-400/40 hover:bg-violet-400/5"
            >
              Download Resume

              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>

          </motion.div>

          {/* =====================================================
              SOCIAL LINKS
          ====================================================== */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-9 flex items-center gap-5"
          >

            {/* GitHub */}
            <a
              href="https://github.com/rohit-r-20"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-zinc-500 transition-colors duration-300 hover:text-white"
            >
              <FaGithub size={21} />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/rohit-r-1608b5388/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-zinc-500 transition-colors duration-300 hover:text-white"
            >
              <FaLinkedin size={21} />
            </a>

            {/* Email */}
            <a
              href="mailto:vrrohit2020@gmail.com"
              aria-label="Email"
              className="text-zinc-500 transition-colors duration-300 hover:text-white"
            >
              <Mail size={21} />
            </a>

          </motion.div>

        </div>

        {/* =====================================================
            RIGHT — PROFILE PHOTO
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, scale: 0.95, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto w-full max-w-md lg:ml-auto"
        >

          {/* Outer Frame */}
          <div className="absolute -inset-4 rounded-[2rem] border border-violet-400/10" />

          {/* Photo Container */}
          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-zinc-900">

            <img
              src={profileImage}
              alt="Rohit R"
              className="aspect-[4/5] w-full object-cover"
            />

            {/* Photo Gradient */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

          </div>

          {/* Open to Opportunities */}
          <div className="absolute -bottom-5 -left-5 flex items-center gap-3 rounded-2xl border border-white/10 bg-zinc-950/90 px-5 py-4 shadow-2xl backdrop-blur-xl">

            {/* Status Indicator */}
            <span className="relative flex h-3 w-3">

              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />

              <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400" />

            </span>

            <div>
              <p className="text-xs font-medium text-white">
                Open to opportunities
              </p>

              <p className="mt-0.5 text-[11px] text-zinc-500">
                Data Analyst · AI Engineer · Python Dev
              </p>
            </div>

          </div>

        </motion.div>

      </div>

      {/* =====================================================
          SCROLL INDICATOR
      ====================================================== */}

      <motion.a
        href="#about"
        animate={{ y: [0, 7, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-zinc-600 md:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">
          Scroll
        </span>

        <ArrowDown size={15} />
      </motion.a>

    </section>
  );
}

export default Hero;