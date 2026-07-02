import { motion } from "motion/react";
import { useState } from "react";
import { submitContactForm } from "@/actions/contact";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await submitContactForm({ data: formData });
      setSent(true);
      setFormData({ fullname: "", email: "", company: "", message: "" });
    } catch (error) {
      console.error("Failed to submit form", error);
      alert("Failed to submit the form. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-12 md:py-16"
      style={{ background: "#0d0d10" }}
    >
      {/* ── Ambient Background Glows ── */}
      <div className="pointer-events-none absolute left-0 top-1/3 h-[500px] w-[500px] -translate-x-1/3 rounded-full bg-[#5d28ab]/20 blur-[130px]" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-[600px] w-[600px] translate-x-1/3 rounded-full bg-[#8A5CF5]/15 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl w-full px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* ── Left Column: Compact Contact Details (5 cols) ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-3.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-md shadow-sm">
                <span className="h-2 w-2 rounded-full bg-[#A882FF] animate-pulse" />
                <span className="text-[11px] font-semibold tracking-wide text-white/80 uppercase">Get In Touch</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] font-extrabold leading-[1.06] tracking-tight text-white mb-3">
                Let's Build <br />
                <span className="bg-gradient-to-r from-white via-[#E0CFFF] to-[#A882FF] bg-clip-text text-transparent">
                  Something Extraordinary.
                </span>
              </h2>
              <p className="text-white/70 text-xs sm:text-sm leading-relaxed mb-6 max-w-md">
                Have a vision, question, or ambitious project? Partner with our team of AI and design engineers to bring your ideas to life.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="flex flex-col gap-3">
              {/* Email Card */}
              <a
                href="mailto:support@beyondyourimagination.shop"
                className="group flex items-center gap-3.5 p-3 sm:p-3.5 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.07] hover:border-white/25 transition-all duration-300"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#7E52D9]/40 to-[#A882FF]/10 border border-white/15 text-[#C49EFF] group-hover:scale-110 transition-transform">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] font-medium text-white/50 uppercase tracking-wider mb-0.5">Direct Email</p>
                  <p className="text-xs sm:text-sm font-semibold text-white group-hover:text-[#C49EFF] transition-colors break-all">
                    support@beyondyourimagination.shop
                  </p>
                </div>
              </a>

              {/* Location Card */}
              <div className="flex items-center gap-3.5 p-3 sm:p-3.5 rounded-xl border border-white/10 bg-white/[0.03]">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#7E52D9]/40 to-[#A882FF]/10 border border-white/15 text-[#C49EFF]">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] font-medium text-white/50 uppercase tracking-wider mb-0.5">Headquarters</p>
                  <p className="text-xs sm:text-sm font-semibold text-white">
                    Bailey Road, Patna, Bihar
                  </p>
                </div>
              </div>

              {/* Socials */}
              <div className="pt-1 flex flex-wrap items-center gap-2.5">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[11px] font-semibold text-white/80 hover:bg-white/15 hover:text-white transition-all"
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                  <span>@byi_agency</span>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[11px] font-semibold text-white/80 hover:bg-white/15 hover:text-white transition-all"
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  <span>beyondyourimagination</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* ── Right Column: Compact Form (7 cols) ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              className="relative rounded-2xl p-5 sm:p-7 border border-white/15 bg-gradient-to-b from-white/[0.07] to-white/[0.02] backdrop-blur-xl shadow-[0_0_50px_rgba(138,92,245,0.12)]"
            >
              <div className="mb-5">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">Send us a Message</h3>
                <p className="text-xs text-white/60">Fill out the form below and our team will get back to you within 24 hours.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-3.5">
                <div>
                  <label htmlFor="fullname" className="block text-[10px] font-semibold uppercase tracking-wider text-white/70 mb-1.5">
                    Full Name <span className="text-[#A882FF]">*</span>
                  </label>
                  <input
                    id="fullname"
                    name="fullname"
                    type="text"
                    placeholder="John Doe"
                    value={formData.fullname}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-white/15 bg-white/5 px-3.5 py-2.5 text-xs text-white placeholder-white/30 outline-none transition-all focus:border-[#A882FF] focus:bg-white/10 focus:ring-1 focus:ring-[#A882FF]"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-[10px] font-semibold uppercase tracking-wider text-white/70 mb-1.5">
                    Email Address <span className="text-[#A882FF]">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-white/15 bg-white/5 px-3.5 py-2.5 text-xs text-white placeholder-white/30 outline-none transition-all focus:border-[#A882FF] focus:bg-white/10 focus:ring-1 focus:ring-[#A882FF]"
                  />
                </div>
              </div>

              <div className="mb-3.5">
                <label htmlFor="company" className="block text-[10px] font-semibold uppercase tracking-wider text-white/70 mb-1.5">
                  Company / Organization <span className="text-white/40 font-normal">(Optional)</span>
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Your Company Ltd."
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-white/15 bg-white/5 px-3.5 py-2.5 text-xs text-white placeholder-white/30 outline-none transition-all focus:border-[#A882FF] focus:bg-white/10 focus:ring-1 focus:ring-[#A882FF]"
                />
              </div>

              <div className="mb-5">
                <label htmlFor="message" className="block text-[10px] font-semibold uppercase tracking-wider text-white/70 mb-1.5">
                  Project Details / Message <span className="text-[#A882FF]">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={2}
                  placeholder="Tell us about your project requirements or goals..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-white/15 bg-white/5 px-3.5 py-2.5 text-xs text-white placeholder-white/30 outline-none transition-all focus:border-[#A882FF] focus:bg-white/10 focus:ring-1 focus:ring-[#A882FF] resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading || sent}
                className="w-full rounded-xl bg-gradient-to-r from-white via-white to-[#E0CFFF] py-3 text-sm font-bold text-black shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-300 hover:shadow-[0_0_35px_rgba(168,130,255,0.5)] hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70 disabled:hover:translate-y-0 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <span>Sending Message...</span>
                ) : sent ? (
                  <span className="text-[#2e7d32] font-extrabold">✓ Message Sent Successfully!</span>
                ) : (
                  <>
                    <span>Submit Inquiry</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}