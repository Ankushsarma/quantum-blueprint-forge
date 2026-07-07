import { motion } from "motion/react";

export function CTABanner() {
  return (
    <section className="bg-[#0F0718] py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-4xl px-6 text-center"
      >
        <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
          Build Your online presence TODAY!
        </h2>
        <div className="mt-8 flex justify-center">
          <a
            href="#contact"
            className="btn-glow inline-flex w-full items-center justify-center rounded-[10px] bg-[#7E52D9] px-10 py-3.5 text-base font-semibold text-white shadow-[0_0_25px_rgba(168,108,255,0.4)] sm:w-auto"
          >
            Contact Us
          </a>
        </div>
      </motion.div>
    </section>
  );
}