import { motion } from "motion/react";
import secondImg from "@/assets/secondimg.png";

export function About() {
  return (
    <section id="about" className="relative bg-[#7E52D9] py-16 md:py-24">
      {/* subtle dark overlay on left for depth */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-1/3 bg-gradient-to-r from-[#1a0533]/60 to-transparent" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-[1fr_auto_1fr] md:px-10">
        {/* Left: heading + description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-display text-4xl font-extrabold leading-tight tracking-tight text-black sm:text-5xl">
            Building Digital<br />Excellence
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-black/80 md:text-base">
            We believe great technology should be powerful, intuitive, and beautifully designed. As a modern technology studio, we partner with ambitious businesses to create digital experiences that inspire trust and drive measurable growth.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-black/80 md:text-base">
            Our expertise spans web development, mobile application development, DevOps, AI-powered automation, UI/UX design, and branding — delivering solutions that are engineered to scale and designed to stand out.
          </p>
        </motion.div>

        {/* Center: image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex justify-center"
        >
          <img
            src={secondImg}
            alt="Hand holding a glowing digital card"
            loading="lazy"
            className="w-48 max-w-full sm:w-56 md:w-64 object-contain drop-shadow-2xl"
            style={{ filter: "drop-shadow(0 0 30px rgba(15,7,24,0.4))" }}
          />
        </motion.div>

        {/* Right: partner paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <p className="text-sm leading-relaxed text-white/90 md:text-base">
            Our approach goes beyond development. We become your technology partner, working closely with your team to transform ideas into meaningful digital experiences. Every project is driven by innovation, attention to detail, and a commitment to quality — ensuring that every website, application, or brand we create not only looks exceptional but also performs flawlessly and supports long-term business growth.
          </p>
        </motion.div>
      </div>
    </section>
  );
}