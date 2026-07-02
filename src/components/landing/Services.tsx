import { motion } from "motion/react";

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden py-24 md:py-32" style={{ background: "#0d0d10" }}>
      {/* ── Subtle background glows ── */}
      <div className="pointer-events-none absolute left-0 top-1/2 h-[600px] w-[600px] -translate-y-1/2 -translate-x-1/2 rounded-full bg-[#7E52D9]/10 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 top-0 h-[600px] w-[600px] translate-x-1/3 -translate-y-1/3 rounded-full bg-[#A86CFF]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
        
        {/* ── Left Column: Text Content ── */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-start text-left z-10"
        >
          <span className="text-[#A86CFF] text-sm font-bold tracking-widest uppercase mb-4">
            Services
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-5xl font-extrabold text-white leading-[1.1] mb-6">
            Professional Development and Branding Services
          </h2>
          <p className="text-white/60 text-lg mb-8 max-w-lg leading-relaxed">
            Everything you need to build, launch, and grow your digital presence — crafted with precision and passion.
          </p>
          
          {/* List of the 4 original services */}
          <div className="flex flex-col gap-3 mb-10">
            {[
              "Web / App Development",
              "Backend Development",
              "UI/UX Design / Branding",
              "AI Automation"
            ].map((service) => (
              <div key={service} className="flex items-center gap-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C49EFF" strokeWidth="3">
                  <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-white font-semibold">{service}</span>
              </div>
            ))}
          </div>

          <a href="#contact" className="group flex items-center gap-4 text-white font-bold text-lg hover:text-[#A86CFF] transition-colors mb-6">
            <span className="relative">
              Explore more
              <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-white group-hover:bg-[#A86CFF] transition-colors" />
            </span>
            <span className="w-8 h-8 rounded-full bg-white group-hover:bg-[#A86CFF] transition-colors flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-black group-hover:text-white">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </a>
        </motion.div>

        {/* ── Right Column: Image Collage ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative h-[500px] sm:h-[650px] w-full mt-10 lg:mt-0"
        >
          {/* Top Left Image */}
          <div className="absolute top-0 left-0 w-[55%] h-[45%] rounded-3xl overflow-hidden shadow-2xl border border-white/10 z-10">
            <img 
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80" 
              alt="Web and App Development code" 
              className="w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal hover:opacity-100 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d10]/60 to-transparent" />
          </div>

          {/* Middle Right Image */}
          <div className="absolute top-[20%] right-0 w-[45%] h-[55%] rounded-3xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.8)] border border-white/10 z-20">
            <img 
              src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80" 
              alt="UI/UX Design tools" 
              className="w-full h-full object-cover opacity-90 mix-blend-luminosity hover:mix-blend-normal hover:opacity-100 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#7E52D9]/40 to-transparent mix-blend-overlay" />
          </div>

          {/* Bottom Left Image */}
          <div className="absolute bottom-0 left-[5%] w-[60%] h-[40%] rounded-3xl overflow-hidden shadow-2xl border border-white/10 z-30">
            <img 
              src="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80" 
              alt="AI and Automation visualization" 
              className="w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal hover:opacity-100 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d10]/60 to-transparent" />
          </div>

          {/* Spinning Circular Badge */}
          <div className="absolute top-[50%] left-[55%] -translate-x-1/2 -translate-y-1/2 z-40 flex items-center justify-center">
            {/* The spinning text circle */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="relative w-36 h-36 rounded-full bg-white flex items-center justify-center shadow-[0_0_30px_rgba(168,108,255,0.4)]"
            >
              {/* Circular SVG text */}
              <svg viewBox="0 0 100 100" className="w-full h-full p-2">
                <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none" />
                <text fill="#000" fontSize="11.5" fontWeight="bold" letterSpacing="2">
                  <textPath href="#circlePath" startOffset="0%">
                    BEYOND YOUR IMAGINATION •
                  </textPath>
                </text>
              </svg>
            </motion.div>
            
            {/* Center static logo/icon inside the badge */}
            <div className="absolute w-12 h-12 bg-[#0F0718] rounded-full flex items-center justify-center border-2 border-white shadow-inner">
              <span className="font-display font-black text-white text-lg">B</span>
            </div>
          </div>

          {/* Scroll Indicator (Mouse icon) */}
          <div className="absolute bottom-0 right-[15%] hidden lg:flex flex-col items-center gap-4">
            <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-white/40 to-white/80" />
            <div className="w-6 h-9 rounded-full border-2 border-white flex justify-center p-1 opacity-80">
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-1 h-2 bg-white rounded-full"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}