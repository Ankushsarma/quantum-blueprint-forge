import { motion } from "motion/react";

export function CTABanner() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24" style={{ background: "#0d0d10" }}>
      {/* ── Background video ── */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover opacity-20"
          style={{ mixBlendMode: "screen" }}
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-network-animation-5798-large.mp4"
            type="video/mp4"
          />
        </video>
        {/* Gradient overlay so text stays readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d10] via-transparent to-[#0d0d10]" />
      </div>

      {/* subtle center glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center z-0">
        <div className="h-[400px] w-[800px] rounded-full bg-[#7E52D9]/20 blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative z-10 mx-auto max-w-4xl px-6 text-center"
      >
        <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
          Build Your online presence TODAY!
        </h2>
        <div className="mt-8 flex justify-center">
          <a
            href="#contact"
            className="btn-glow inline-flex w-full items-center justify-center rounded-[10px] bg-[#7E52D9] px-10 py-3.5 text-base font-semibold text-white shadow-[0_0_25px_rgba(126,82,217,0.5)] sm:w-auto hover:-translate-y-1 transition-all"
          >
            Contact Us
          </a>
        </div>
      </motion.div>
    </section>
  );
}