import { motion } from "motion/react";
import { useState } from "react";

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label htmlFor={name} className="block text-xs font-semibold text-[#0F0718]/80">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-lg border border-black/10 bg-white px-3 py-2.5 text-sm text-[#0F0718] outline-none transition placeholder:text-black/30 focus:border-[#A86CFF] focus:ring-2 focus:ring-[#A86CFF]/30"
      />
    </div>
  );
}

export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="bg-[#A86CFF] py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 md:grid-cols-2 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-display text-4xl font-extrabold leading-tight tracking-tight text-[#0F0718] sm:text-5xl">
            Let's Build Something<br />Great Together.
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <div className="text-sm font-bold text-[#0F0718]">Phone</div>
              <div className="mt-1 text-sm text-[#0F0718]/80">+91 8544005858</div>
            </div>
            <div>
              <div className="text-sm font-bold text-[#0F0718]">Email</div>
              <div className="mt-1 text-sm text-[#0F0718]/80 break-all">support@beyondyourimagination.shop</div>
            </div>
          </div>
          <a
            href="mailto:support@beyondyourimagination.shop"
            className="btn-glow mt-8 inline-flex w-full items-center justify-center rounded-[10px] bg-[#0F0718] px-8 py-3.5 text-sm font-semibold text-white sm:w-auto"
          >
            Contact Us
          </a>
          <div className="mt-10 flex items-center gap-2">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#0F0718] text-lg font-black text-white">B</span>
            <span className="font-display text-lg font-extrabold text-[#0F0718]">Beyond</span>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="rounded-2xl bg-white p-6 shadow-[0_20px_60px_rgba(15,7,24,0.25)] md:p-8"
        >
          <h3 className="font-display text-2xl font-extrabold text-[#0F0718] sm:text-3xl">Schedule an Appointment</h3>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field label="Name" name="name" placeholder="John" />
            <Field label="Surname" name="surname" placeholder="Doe" />
          </div>
          <div className="mt-4">
            <Field label="Mail" name="email" type="email" placeholder="john@mail.com" />
          </div>
          <div className="mt-4">
            <Field label="Address" name="address" placeholder="Capitol, WA" />
          </div>
          <div className="mt-4">
            <label htmlFor="description" className="block text-xs font-semibold text-[#0F0718]/80">Description</label>
            <textarea
              id="description"
              name="description"
              rows={4}
              className="mt-1.5 w-full rounded-lg border border-black/10 bg-white px-3 py-2.5 text-sm text-[#0F0718] outline-none transition focus:border-[#A86CFF] focus:ring-2 focus:ring-[#A86CFF]/30"
            />
          </div>
          <button
            type="submit"
            className="btn-glow mt-6 w-full rounded-[10px] bg-[#0F0718] py-3.5 text-sm font-semibold text-white"
          >
            {sent ? "Thanks! We'll be in touch." : "Contact Us"}
          </button>
        </motion.form>
      </div>
    </section>
  );
}