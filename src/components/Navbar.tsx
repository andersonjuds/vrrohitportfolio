import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-[#050505]/85 shadow-lg backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* Logo / Brand Name */}
        <a
          href="#home"
          style={{ fontFamily: "'Times New Roman', Times, Georgia, serif" }}
          className="group relative flex items-center text-4xl font-bold tracking-tight text-white transition-all duration-300 sm:text-5xl lg:text-[3.25rem]"
        >
          {/* Subtle elegant ambient glow on hover */}
          <span className="pointer-events-none absolute -inset-x-4 -inset-y-2 rounded-2xl bg-violet-600/0 blur-2xl transition-all duration-500 group-hover:bg-violet-600/25" />

          <span className="relative bg-gradient-to-r from-white via-zinc-100 to-zinc-300 bg-clip-text text-transparent transition-all duration-500 group-hover:from-white group-hover:via-violet-200 group-hover:to-violet-400">
            Rohit R
          </span>

          <span className="relative ml-1 text-violet-400 drop-shadow-[0_0_10px_rgba(167,139,250,0.7)] transition-all duration-300 group-hover:scale-125 group-hover:text-violet-300 group-hover:drop-shadow-[0_0_16px_rgba(167,139,250,1)]">
            .
          </span>

          {/* Elegant micro-underline accent */}
          <span className="absolute -bottom-1 left-0 h-[1.5px] w-0 rounded-full bg-gradient-to-r from-violet-400 via-violet-300 to-transparent transition-all duration-500 ease-out group-hover:w-full" />
        </a>

        {/* Desktop Navigation Menu (Enlarged by 2 sizes with elegant effects) */}
        <div className="hidden items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] p-1.5 shadow-2xl backdrop-blur-md md:flex">

          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="group relative rounded-full px-4 py-2 text-base font-medium text-zinc-300 transition-all duration-300 hover:bg-white/[0.08] hover:text-white"
            >
              <span>{item.name}</span>

              {/* Elegant hover dot indicator */}
              <span className="absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-violet-400 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:shadow-[0_0_8px_rgba(167,139,250,1)]" />
            </a>
          ))}

          {/* Resume CTA Button */}
          <a
            href="/Rohit_R_Resume.pdf"
            download="Rohit_R_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group ml-2 flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-5 py-2 text-base font-semibold text-white shadow-[0_0_15px_rgba(167,139,250,0.15)] transition-all duration-300 hover:border-violet-400/60 hover:bg-violet-500/20 hover:shadow-[0_0_25px_rgba(167,139,250,0.35)]"
          >
            <span>Resume</span>

            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 text-violet-300"
            />
          </a>

        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg border border-white/10 p-2.5 text-zinc-300 transition-colors hover:bg-white/5 md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="border-t border-white/10 bg-[#050505]/95 backdrop-blur-xl md:hidden"
          >
            <div className="mx-auto max-w-7xl px-6 py-5">

              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={handleNavClick}
                  className="block border-b border-white/5 py-4 text-base font-medium text-zinc-300 transition-colors hover:text-white"
                >
                  {item.name}
                </a>
              ))}

              <a
                href="/Rohit_R_Resume.pdf"
                download="Rohit_R_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleNavClick}
                className="mt-5 flex items-center justify-center gap-2 rounded-full border border-violet-400/40 bg-violet-500/20 px-5 py-3.5 text-base font-semibold text-white shadow-[0_0_20px_rgba(167,139,250,0.25)]"
              >
                Download Resume
                <ArrowUpRight size={17} />
              </a>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;