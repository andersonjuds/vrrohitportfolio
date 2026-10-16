import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-white/5 bg-[#050505] py-28 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">

          {/* Main CTA */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-violet-400" />

              <span className="text-sm font-medium uppercase tracking-[0.25em] text-violet-300">
                Get In Touch
              </span>
            </div>

            <h2 className="mt-6 max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Let's build something
              <span className="block text-zinc-500">
                data-driven together.
              </span>
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-8 text-zinc-500 sm:text-lg">
              I'm actively seeking entry-level opportunities as a Data Analyst,
              AI Engineer, Python Developer, Machine Learning Engineer, or Data Engineer.
            </p>

            <a
              href="mailto:vrrohit2020@gmail.com"
              className="group mt-10 inline-flex items-center gap-3 rounded-full border border-white/15 bg-transparent px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:border-violet-400/40 hover:bg-violet-400/5"
            >
              Start a conversation

              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl border border-white/8 bg-white/[0.02] p-7 sm:p-9"
          >
            <div className="space-y-7">

              {/* Email */}
              <a
                href="mailto:vrrohit2020@gmail.com"
                className="group flex items-start gap-4"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-violet-300">
                  <Mail size={19} />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-zinc-700">
                    Email
                  </p>

                  <p className="mt-2 text-sm text-zinc-400 transition-colors group-hover:text-white">
                    vrrohit2020@gmail.com
                  </p>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+919498050929"
                className="group flex items-start gap-4"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-violet-300">
                  <Phone size={19} />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-zinc-700">
                    Phone
                  </p>

                  <p className="mt-2 text-sm text-zinc-400 transition-colors group-hover:text-white">
                    +91 94980 50929
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-violet-300">
                  <MapPin size={19} />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-zinc-700">
                    Location
                  </p>

                  <p className="mt-2 text-sm text-zinc-400">
                    Tamil Nadu, India
                  </p>
                </div>
              </div>

              {/* Social Links */}
              <div className="border-t border-white/5 pt-7">
                <p className="text-xs uppercase tracking-[0.2em] text-zinc-700">
                  Connect
                </p>

                <div className="mt-5 flex gap-3">

                  {/* GitHub */}
                  <a
                    href="https://github.com/rohit-r-20"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-zinc-500 transition-all duration-300 hover:border-white/20 hover:bg-white/5 hover:text-white"
                  >
                    <FaGithub size={19} />
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/rohit-r-1608b5388/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-zinc-500 transition-all duration-300 hover:border-white/20 hover:bg-white/5 hover:text-white"
                  >
                    <FaLinkedin size={19} />
                  </a>

                </div>
              </div>

            </div>
          </motion.div>
        </div>

        {/* Availability */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20 flex items-center gap-3 border-t border-white/5 pt-8"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />

            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
          </span>

          <span className="text-xs uppercase tracking-[0.2em] text-zinc-600">
            Open to entry-level roles & opportunities
          </span>
        </motion.div>

      </div>
    </section>
  );
}

export default Contact;