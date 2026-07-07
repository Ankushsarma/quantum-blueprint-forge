import { motion } from "motion/react";
import hologram from "@/assets/hologram.jpg";

export function About() {
  return (
    <section id="about" className="relative bg-gradient-to-b from-[#7E52D9] to-[#6a44c2] py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-2 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-display text-4xl font-extrabold leading-tight tracking-tight text-[#1a0533] sm:text-5xl">
            Building Digital<br />Excellence
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-[#1a0533]/80 md:text-base">
            We believe great technology should be powerful, intuitive, and beautifully designed. As a modern technology studio, we partner with ambitious businesses to create digital experiences that inspire trust and drive measurable growth.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-[#1a0533]/80 md:text-base">
            Our expertise spans web development, mobile application development, DevOps, AI-powered automation, UI/UX design, and branding — delivering solutions that are engineered to scale and designed to stand out.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="grid grid-cols-1 items-center gap-6 sm:grid-cols-2"
        >
          <img
            src={hologram}
            alt="Holographic phone"
            loading="lazy"
            width={1024}
            height={1024}
            className="w-full rounded-2xl object-cover shadow-2xl"
          />
          <p className="text-sm leading-relaxed text-[#1a0533]/85 md:text-base">
            Our approach goes beyond development. We become your technology partner, working closely with your team to transform ideas into meaningful digital experiences. Every project is driven by innovation, attention to detail, and a commitment to quality — ensuring that every website, application, or brand we create not only looks exceptional but also performs flawlessly and supports long-term business growth.
          </p>
        </motion.div>
      </div>
    </section>
  );
}