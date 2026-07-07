import { useEffect, useState } from "react";
import { motion } from "motion/react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-md bg-[#0F0718]/70 border-b border-white/5" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <a href="#home" className="flex items-center gap-2 font-display text-xl font-extrabold tracking-tight">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-[#A86CFF] to-[#7E52D9] shadow-[0_0_20px_rgba(168,108,255,0.5)]">
            <span className="text-lg font-black text-white">B</span>
          </span>
          <span className="hidden sm:inline">Beyond</span>
        </a>
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm font-medium text-white/80 transition-colors hover:text-white">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden md:block">
          <a
            href="#contact"
            className="btn-glow inline-flex items-center justify-center rounded-[10px] bg-white px-5 py-2.5 text-sm font-semibold text-black"
          >
            Get Started
          </a>
        </div>
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-white/5 bg-[#0F0718]/95 backdrop-blur">
          <ul className="flex flex-col gap-1 px-6 py-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  onClick={() => setOpen(false)}
                  href={l.href}
                  className="block rounded-md px-2 py-2 text-sm text-white/80 hover:bg-white/5"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                onClick={() => setOpen(false)}
                href="#contact"
                className="mt-2 block rounded-[10px] bg-white px-4 py-2.5 text-center text-sm font-semibold text-black"
              >
                Get Started
              </a>
            </li>
          </ul>
        </div>
      )}
    </motion.header>
  );
}