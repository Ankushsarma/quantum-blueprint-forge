import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 pt-16 pb-12 text-white" style={{ background: "#0b0b0e" }}>
      {/* ── Ambient Glows ── */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[800px] -translate-x-1/2 rounded-full bg-[#7E52D9]/15 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        
        {/* ── Top Call-to-Action Glass Banner ── */}
        <div className="mb-16 rounded-3xl border border-white/15 bg-gradient-to-r from-white/[0.07] via-[#8A5CF5]/10 to-white/[0.05] p-8 sm:p-10 backdrop-blur-xl shadow-[0_0_60px_rgba(138,92,245,0.12)] flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="pointer-events-none absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-[#A882FF]/20 blur-2xl" />
          
          <div className="text-center md:text-left z-10">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#C49EFF] mb-2">Next-Generation Digital Agency</span>
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white">Ready to elevate your digital presence?</h3>
            <p className="mt-1 text-sm text-white/70 max-w-lg">Let's collaborate to build cutting-edge AI software and breathtaking web experiences tailored to your vision.</p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3.5 z-10 shrink-0">
            <a
              href="https://beyondyourimagination.shop"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition-all hover:bg-white/20 hover:border-white/40"
            >
              <span>Visit Main Store</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-white via-white to-[#E0CFFF] px-6 py-3 text-sm font-bold text-black shadow-[0_0_25px_rgba(255,255,255,0.25)] transition-all hover:shadow-[0_0_40px_rgba(168,130,255,0.6)] hover:-translate-y-0.5"
            >
              Start Your Project
            </a>
          </div>
        </div>

        {/* ── Main Footer Navigation Grid ── */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5">
                <img
                  src={logo}
                  alt="Beyond Your Imagination Logo"
                  className="h-11 w-auto object-contain"
                  style={{ filter: "drop-shadow(0 0 12px rgba(168,108,255,0.6))" }}
                />
                <span className="font-display text-lg font-extrabold text-white tracking-tight">Beyond Your Imagination</span>
              </div>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
                Architecting luxury digital products, AI solutions, and high-conversion web ecosystems that push boundaries beyond imagination.
              </p>
            </div>

            <div className="mt-6">
              <a
                href="mailto:support@beyondyourimagination.shop"
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3.5 py-2 text-xs font-medium text-white/80 hover:border-white/25 hover:text-[#C49EFF] transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <span>support@beyondyourimagination.shop</span>
              </a>
            </div>
          </div>

          {/* Navigation Links (3 cols) */}
          <div className="lg:col-span-3 lg:pl-6">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#C49EFF] mb-4">Navigation</h4>
            <ul className="space-y-3 text-sm font-medium text-white/70">
              {["Home", "About", "Services", "Process", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="group inline-flex items-center gap-2 hover:text-white transition-colors"
                  >
                    <span className="h-1 w-1 rounded-full bg-white/20 group-hover:bg-[#C49EFF] transition-colors" />
                    <span>{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Ecosystem (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#C49EFF] mb-4">Ecosystem</h4>
            <ul className="space-y-3 text-sm font-medium text-white/70">
              <li>
                <a href="https://beyondyourimagination.shop" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span>Main Website</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                  </svg>
                </a>
              </li>
              <li><a href="#services" className="hover:text-white transition-colors">AI Engineering</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">UI/UX Design</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Client Support</a></li>
            </ul>
          </div>

          {/* Social Connect (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#C49EFF] mb-4">Connect With Us</h4>
            <p className="text-xs text-white/60 mb-4 leading-relaxed">Follow our latest work, insights, and innovations across social media.</p>
            
            <div className="flex items-center gap-3">
              {/* Instagram */}
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white/80 transition-all duration-300 hover:scale-110 hover:border-[#A882FF] hover:bg-[#A882FF]/20 hover:text-white hover:shadow-[0_0_20px_rgba(168,130,255,0.5)]"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white/80 transition-all duration-300 hover:scale-110 hover:border-[#A882FF] hover:bg-[#A882FF]/20 hover:text-white hover:shadow-[0_0_20px_rgba(168,130,255,0.5)]"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>

              {/* Twitter / X */}
              <a
                href="#"
                aria-label="Twitter / X"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white/80 transition-all duration-300 hover:scale-110 hover:border-[#A882FF] hover:bg-[#A882FF]/20 hover:text-white hover:shadow-[0_0_20px_rgba(168,130,255,0.5)]"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                </svg>
              </a>

              {/* GitHub */}
              <a
                href="#"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white/80 transition-all duration-300 hover:scale-110 hover:border-[#A882FF] hover:bg-[#A882FF]/20 hover:text-white hover:shadow-[0_0_20px_rgba(168,130,255,0.5)]"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* ── Bottom Copyright Bar ── */}
        <div className="mt-14 border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-white/50">
          <div>
            © {new Date().getFullYear()} Beyond Your Imagination. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Security</a>
          </div>
        </div>

      </div>
    </footer>
  );
}