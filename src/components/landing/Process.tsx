import { motion } from "motion/react";

const steps = [
  {
    n: "01",
    phase: "Phase 01",
    title: "Discover & Strategize",
    subtitle: "Strategy + Planning",
    tags: ["Research", "Goal Setting", "Roadmap"],
    desc: "We begin by diving deep into your business model, target audience, and competitive landscape. Through collaborative discovery sessions, we architect a high-impact roadmap that aligns innovative AI technology with your long-term vision.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
      </svg>
    ),
    accent: "from-[#8A5CF5]/30 to-transparent",
  },
  {
    n: "02",
    phase: "Phase 02",
    title: "Design & Engineering",
    subtitle: "Build with Precision",
    tags: ["UI/UX Design", "Full-Stack Dev", "AI Automation"],
    desc: "Our engineers and designers transform concepts into state-of-the-art digital ecosystems. From luxury glassmorphic UI/UX and branding to robust full-stack architectures and AI automation, every component is crafted for elite performance.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
        <line x1="14" y1="4" x2="10" y2="20" />
      </svg>
    ),
    accent: "from-[#A882FF]/30 to-transparent",
  },
  {
    n: "03",
    phase: "Phase 03",
    title: "Launch & Accelerate",
    subtitle: "Optimize for Growth",
    tags: ["Security Audit", "Deployment", "Growth Scalability"],
    desc: "Following rigorous security and stress testing, we execute a seamless cloud deployment. We continuously monitor real-world analytics and optimize infrastructure to guarantee effortless scaling as your enterprise expands.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      </svg>
    ),
    accent: "from-[#C49EFF]/30 to-transparent",
  },
];

export function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden pt-16 pb-12 md:pt-24 md:pb-16"
      style={{ background: "#0d0d10" }}
    >
      {/* ── Ambient Glows ── */}
      <div className="pointer-events-none absolute left-1/4 top-1/2 h-[500px] w-[500px] -translate-y-1/2 -translate-x-1/2 rounded-full bg-[#6A38C2]/15 blur-[140px]" />
      <div className="pointer-events-none absolute right-1/4 bottom-0 h-[500px] w-[500px] translate-x-1/4 rounded-full bg-[#8A5CF5]/15 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-5 rounded-full border border-white/15 bg-white/5 backdrop-blur-md shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#A882FF] animate-pulse" />
            <span className="text-xs font-semibold tracking-wide text-white/80 uppercase">How We Work</span>
          </div>
          <h2 className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-[54px] leading-[1.08] mb-4">
            Our Proven <span className="bg-gradient-to-r from-white via-[#E0CFFF] to-[#A882FF] bg-clip-text text-transparent">Agency Process</span>
          </h2>
          <p className="text-white/60 text-base sm:text-lg">
            A transparent, engineering-first methodology designed to take your ambitious vision from concept to market-leading reality.
          </p>
        </motion.div>

        {/* ── 3-Column Luxury Cards Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative rounded-3xl border border-white/15 bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-8 sm:p-9 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#A882FF]/50 hover:shadow-[0_20px_50px_rgba(168,130,255,0.2)] flex flex-col justify-between overflow-hidden"
            >
              {/* Internal top glowing orb */}
              <div className={`pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full bg-gradient-to-br ${s.accent} blur-2xl group-hover:scale-150 transition-transform duration-700`} />

              <div>
                {/* Card Header: Step Number Badge + Icon */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-9 items-center justify-center rounded-xl bg-gradient-to-r from-[#8A5CF5] to-[#A882FF] px-3.5 text-xs font-black text-black shadow-[0_0_15px_rgba(168,130,255,0.4)]">
                      {s.n}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-widest text-white/50 group-hover:text-white/80 transition-colors">
                      {s.phase}
                    </span>
                  </div>

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/5 text-[#C49EFF] group-hover:scale-110 group-hover:border-[#A882FF]/40 group-hover:bg-[#A882FF]/15 transition-all duration-300 shadow-sm">
                    {s.icon}
                  </div>
                </div>

                {/* Title & Subtitle */}
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-1 group-hover:text-[#E0CFFF] transition-colors">
                  {s.title}
                </h3>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#A882FF] mb-6">
                  {s.subtitle}
                </p>

                {/* Description */}
                <p className="text-sm text-white/70 leading-relaxed mb-8">
                  {s.desc}
                </p>
              </div>

              {/* Minimalist Key Deliverables Strip */}
              <div className="pt-6 border-t border-white/10">
                <div className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-3.5">
                  Key Deliverables
                </div>
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2.5">
                  {s.tags.map((tag) => (
                    <div key={tag} className="flex items-center gap-2 group/tag">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#C49EFF] shadow-[0_0_8px_#C49EFF] group-hover/tag:scale-150 transition-transform" />
                      <span className="text-xs font-semibold text-white/75 group-hover/tag:text-white transition-colors tracking-wide">
                        {tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}