import { useState } from "react";
import { motion } from "motion/react";

const Contact = ({ theme = "light" }) => {
  const isDark = theme === "dark";
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSending(true);
    setStatus("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const result = await response.json();

      if (!response.ok) throw new Error(result.message);

      setStatus(result.message);
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus(error.message || "Unable to send your message. Please try again later.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="c-space scroll-mt-24 pb-10">
      <div
        className={`rounded-[2rem] border p-5 md:p-8 mt-20 backdrop-blur-sm  ${
          isDark
            ? "border-white/10 bg-slate-950/60"
            : "border-[#7c3aed]/20 bg-[linear-gradient(135deg,rgba(255,249,240,0.85),rgba(243,214,176,0.65),rgba(173,147,214,0.5))]"
        }`}
      >
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.35 }}
          className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]"
        >
          <div className="space-y-4">
            <h2 className={`text-heading ${isDark ? "text-white" : "text-[#d97706]"}`}>
              Contact
            </h2>
            <p className={`text-base leading-7 ${isDark ? "text-neutral-300" : "text-slate-800"}`}>
              Let’s build something meaningful together. Reach out with your idea,
              project, or collaboration request.
            </p>
            <a
              href="mailto:mkanag40@gmail.com"
              className={`inline-flex rounded-full border px-4 py-2 text-sm transition hover:-translate-y-0.5 ${
                isDark
                  ? "border-white/20 bg-white/5 text-white hover:bg-white/10"
                  : "border-[#7c3aed]/30 bg-white/60 text-slate-900 hover:bg-white/80"
              }`}
            >
              mkanag40@gmail.com
            </a>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-2">
                <span className={`text-sm ${isDark ? "text-neutral-200" : "text-slate-900"}`}>
                  Name
                </span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className={`w-full rounded-xl border px-4 py-3 outline-none transition ${
                    isDark
                      ? "border-white/10 bg-white/5 text-white placeholder:text-neutral-400"
                      : "border-[#7c3aed]/20 bg-white/70 text-slate-900 placeholder:text-slate-500"
                  }`}
                  placeholder="Your name"
                />
              </label>

              <label className="space-y-2">
                <span className={`text-sm ${isDark ? "text-neutral-200" : "text-slate-900"}`}>
                  Email
                </span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className={`w-full rounded-xl border px-4 py-3 outline-none transition ${
                    isDark
                      ? "border-white/10 bg-white/5 text-white placeholder:text-neutral-400"
                      : "border-[#7c3aed]/20 bg-white/70 text-slate-900 placeholder:text-slate-500"
                  }`}
                  placeholder="you@example.com"
                />
              </label>
            </div>

            <label className="space-y-2 block">
              <span className={`text-sm ${isDark ? "text-neutral-200" : "text-slate-900"}`}>
                Message
              </span>
              <textarea
                name="message"
                rows="6"
                value={form.message}
                onChange={handleChange}
                required
                className={`w-full rounded-xl border px-4 py-3 outline-none transition ${
                  isDark
                    ? "border-white/10 bg-white/5 text-white placeholder:text-neutral-400"
                    : "border-[#7c3aed]/20 bg-white/70 text-slate-900 placeholder:text-slate-500"
                }`}
                placeholder="Tell me about your project..."
              />
            </label>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                disabled={isSending}
                className={`rounded-full px-5 py-3 font-semibold transition hover:-translate-y-0.5 ${
                  isDark
                    ? "bg-[#f5c451] text-slate-950"
                    : "bg-[#d97706] text-white"
                } disabled:cursor-not-allowed disabled:opacity-60`}
              >
                {isSending ? "Sending..." : "Send Message"}
              </button>

              {status && (
                <p className={`text-sm ${isDark ? "text-neutral-300" : "text-slate-800"}`}>
                  {status}
                </p>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
