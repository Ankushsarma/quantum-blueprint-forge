import { motion } from "motion/react";
import heroImg from "@/assets/hero.png";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-screen flex items-center pt-24 pb-12 md:pt-24 md:pb-16"
      style={{ background: "#0d0d10" }}
    >
      {/* ── Background video ── */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover opacity-25"
          style={{ mixBlendMode: "screen" }}
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-network-animation-5798-large.mp4"
            type="video/mp4"
          />
        </video>
        {/* Gradient overlay so text stays readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d10] via-[#0d0d10]/85 to-[#0d0d10]/30" />
      </div>

      {/* Purple glow on right */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-2/3 z-0">
        <div className="absolute right-0 top-0 h-full w-full bg-gradient-to-l from-[#5d28ab]/80 via-[#351375]/45 to-transparent" />
        <div className="absolute right-1/4 top-1/3 h-[600px] w-[600px] rounded-full bg-[#8A5CF5]/30 blur-[130px]" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl w-full grid-cols-1 items-center gap-8 px-6 md:grid-cols-2 md:px-10 -mt-4 md:-mt-8">
        {/* Left: text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-2 text-center md:order-1 md:text-left -mt-6 md:-mt-12"
        >
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-3.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-md shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#A882FF] animate-pulse" />
            <span className="text-xs font-semibold tracking-wide text-white/80 uppercase">Next-Gen Digital Studio</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-[56px] xl:text-[66px] font-extrabold leading-[1.05] tracking-tight text-white">
            Crafting the <br />
            <span className="bg-gradient-to-r from-white via-white/95 to-[#A882FF] bg-clip-text text-transparent">
              Future of
            </span>{" "}
            <br />
            <span className="whitespace-nowrap">Digital Brands.</span>
          </h1>
          <p className="mt-4 max-w-lg text-sm sm:text-base text-white/70 mx-auto md:mx-0 leading-relaxed font-normal">
            Premium web experiences powered by state-of-the-art design, modern engineering, and futuristic AI innovation.
          </p>
          <div className="mt-5 flex flex-col sm:flex-row items-center gap-3.5 justify-center md:justify-start">
            <a
              href="#contact"
              className="group inline-flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-full bg-white px-7 py-3.5 text-base font-bold text-black shadow-[0_0_30px_rgba(255,255,255,0.25)] transition-all duration-300 hover:bg-white/90 hover:shadow-[0_0_45px_rgba(168,130,255,0.5)] hover:-translate-y-0.5"
            >
              Get Started
              <svg
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
            <a
              href="https://beyondyourimagination.shop"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-base font-semibold text-white/90 backdrop-blur-md transition-all duration-300 hover:border-white/30 hover:bg-white/10 hover:text-white"
            >
              <span>Visit Main Website</span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
              </svg>
            </a>
          </div>
        </motion.div>

        {/* Right: hero image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="order-1 md:order-2 relative flex items-center justify-center md:justify-end border-0 outline-none"
        >
          <motion.img
            src={heroImg}
            alt="Futuristic AI robot head"
            className="w-64 max-w-full sm:w-80 md:w-full md:max-w-[460px] lg:max-w-[500px] object-contain object-right-bottom select-none border-0 outline-none ring-0 shadow-none"
            style={{
              filter: "drop-shadow(0 0 60px rgba(138,92,245,0.65))",
              maskImage: "radial-gradient(ellipse 88% 88% at center, black 65%, transparent 98%)",
              WebkitMaskImage: "radial-gradient(ellipse 88% 88% at center, black 65%, transparent 98%)",
              mixBlendMode: "lighten",
            }}
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
}