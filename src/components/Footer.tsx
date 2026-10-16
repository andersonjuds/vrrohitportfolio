import { ArrowUp, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#050505]">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">

        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

          {/* Brand */}
          <div>
            <a
              href="#home"
              style={{ fontFamily: "'Times New Roman', Times, Georgia, serif" }}
              className="group flex items-center text-4xl font-bold tracking-tight text-white transition-all duration-300"
            >
              <span className="bg-gradient-to-r from-white via-zinc-100 to-zinc-300 bg-clip-text text-transparent transition-all duration-300 group-hover:from-white group-hover:to-violet-300">
                Rohit R
              </span>
              <span className="ml-1 text-violet-400 drop-shadow-[0_0_10px_rgba(167,139,250,0.7)]">.</span>
            </a>

            <p className="mt-2 text-sm text-zinc-600">
              Data Analyst · AI Engineer · Python & Java Developer
            </p>
          </div>

          {/* Social */}
          <div className="flex items-center gap-3">

            <a
              href="mailto:vrrohit2020@gmail.com"
              aria-label="Email"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-zinc-500 transition-all hover:border-white/20 hover:bg-white/5 hover:text-white"
            >
              <Mail size={17} />
            </a>

            <a
              href="https://github.com/rohit-r-20"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-zinc-500 transition-all hover:border-white/20 hover:bg-white/5 hover:text-white"
            >
              <FaGithub size={17} />
            </a>

            <a
              href="https://www.linkedin.com/in/rohit-r-1608b5388/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-zinc-500 transition-all hover:border-white/20 hover:bg-white/5 hover:text-white"
            >
              <FaLinkedin size={17} />
            </a>

            <a
              href="#home"
              aria-label="Back to top"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-zinc-500 transition-all hover:border-white/20 hover:bg-white/5 hover:text-white"
            >
              <ArrowUp size={17} />
            </a>

          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 flex flex-col gap-3 border-t border-white/5 pt-6 text-xs text-zinc-700 sm:flex-row sm:items-center sm:justify-between">

          <p>
            © {new Date().getFullYear()} Rohit R. All rights reserved.
          </p>

          <p>
            Built with React · TypeScript · Tailwind CSS
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;