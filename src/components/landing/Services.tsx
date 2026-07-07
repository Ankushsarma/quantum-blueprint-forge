import { motion } from "motion/react";

const services = [
  { title: "Web / App", subtitle: "Development" },
  { title: "Backend", subtitle: "Development" },
  { title: "UI/UX Design /", subtitle: "Branding" },
  { title: "AI Automation", subtitle: "" },
];

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-[#0F0718] py-16 md:py-24">
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-[#7E52D9]/40 via-[#A86CFF]/20 to-transparent blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl"
        >
          Professional Development and Branding Services
        </motion.h2>
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glow-card glow-card-hover rounded-2xl p-8 min-h-[140px] flex items-center justify-center text-center"
            >
              <h3 className="font-display text-xl font-bold text-white sm:text-2xl">
                {s.title}
                {s.subtitle && (
                  <>
                    <br />
                    {s.subtitle}
                  </>
                )}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}