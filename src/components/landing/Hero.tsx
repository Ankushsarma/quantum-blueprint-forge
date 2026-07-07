import { motion } from "motion/react";
import robot from "@/assets/robot.jpg";
import heroVideo from "@/assets/hero-bg.mp4.asset.json";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden radial-purple pt-32 pb-16 md:pt-40 md:pb-24">
      <video
        src={heroVideo.url}
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-40 mix-blend-screen"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0F0718]/60 via-[#0F0718]/40 to-[#0F0718]/80" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-2 md:gap-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-2 text-center md:order-1 md:text-left"
        >
          <h1 className="font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Crafting the<br />Future of<br />Digital Brands.
          </h1>
          <p className="mt-6 max-w-md text-sm text-white/70 md:text-base mx-auto md:mx-0">
            Premium web experiences powered by design, technology, and innovation.
          </p>
          <div className="mt-8 flex justify-center md:justify-start">
            <a
              href="#contact"
              className="btn-glow inline-flex w-full items-center justify-center rounded-[10px] bg-white px-8 py-3.5 text-base font-semibold text-black sm:w-auto"
            >
              Get Started
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="order-1 md:order-2 relative flex justify-center md:justify-end"
        >
          <motion.img
            src={robot}
            alt="Futuristic AI robot"
            width={1024}
            height={1280}
            className="w-64 max-w-full sm:w-80 md:w-full md:max-w-[520px] rounded-2xl object-cover"
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-[#A86CFF]/20 blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
}