import { motion } from "motion/react";

const steps = [
  {
    n: "1",
    title: "Discover (Strategy + Planning)",
    desc: "We begin by understanding your business, goals, audience, and challenges. Through research and collaboration, we define a clear roadmap that aligns technology with your vision.",
  },
  {
    n: "2",
    title: "Design & Develop (Build with Precision)",
    desc: "Our team transforms ideas into intuitive designs and high-performance digital solutions. From UI/UX and branding to web, mobile, DevOps, and automation, every detail is crafted for quality and scalability.",
  },
  {
    n: "3",
    title: "Launch & Scale (Optimize for Growth)",
    desc: "After rigorous testing and deployment, we monitor, optimize, and continuously improve your product to ensure long-term performance, security, and business growth.",
  },
];

export function Process() {
  return (
    <section id="process" className="relative overflow-hidden bg-gradient-to-b from-[#0F0718] via-[#1a0a35] to-[#0F0718] py-16 md:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#7E52D9]/30 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-[#A86CFF]/20 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
            Our Process
          </h2>
          <p className="mt-3 max-w-xl text-sm text-white/70 md:text-base">
            From concept to deployment, we transform ideas into scalable digital solutions.
          </p>
        </motion.div>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group rounded-2xl bg-white p-6 shadow-[0_10px_40px_rgba(126,82,217,0.25)] transition-transform hover:-translate-y-1"
            >
              <div className="flex items-start gap-3">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#0F0718] text-sm font-bold text-white">
                  {s.n}
                </span>
                <div className="min-w-0">
                  <h3 className="font-display text-sm font-bold text-[#0F0718] sm:text-base">{s.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-black/70 sm:text-sm">{s.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}