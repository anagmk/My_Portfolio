import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { experiences } from "../constants";

const Experience = ({ theme = "light" }) => {
  const isDark = theme === "dark";
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="experience" className="c-space mt-20 scroll-mt-24">
      <div
        className={`rounded-[2rem] border p-5 md:p-8 backdrop-blur-sm ${
          isDark
            ? "border-white/10 bg-slate-950/55"
            : "border-[#7c3aed]/20 bg-[linear-gradient(135deg,rgba(255,249,240,0.85),rgba(243,214,176,0.65),rgba(173,147,214,0.5))]"
        }`}
      >
        <h2 className={`text-heading ${isDark ? "text-white" : "text-[#d97706]"}`}>
          Experience
        </h2>

        <div className="mt-8 space-y-10">
          {experiences.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.article
                key={`${item.title}-${item.date}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                whileHover={{ y: -4 }}
                className="grid gap-5 md:grid-cols-[0.9fr_1.4fr]"
              >
                <div className="relative flex items-start gap-3 md:pr-8">
                  <div className="relative hidden h-full flex-col items-center md:flex">
                    <motion.span
                      initial={{ scale: 0.7, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      className={`mt-2 h-4 w-4 rounded-full ${
                        isDark ? "bg-[#f5c451] shadow-[0_0_18px_rgba(245,196,81,0.8)]" : "bg-[#d97706] shadow-[0_0_18px_rgba(217,119,6,0.55)]"
                      }`}
                    />
                    {index !== experiences.length - 1 && (
                      <div
                        className={`mt-2 h-full w-px ${
                          isDark ? "bg-white/20" : "bg-[#7c3aed]/30"
                        }`}
                      />
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="w-full text-left md:w-auto"
                  >
                    <div className="flex items-center justify-between gap-4 md:block">
                      <div className="flex items-center gap-3">
                        <span
                          className={`inline-flex h-6 w-6 items-center justify-center rounded-full border text-sm md:hidden ${
                            isDark
                              ? "border-white/20 bg-white/5 text-white"
                              : "border-[#7c3aed]/30 bg-white/60 text-slate-900"
                          }`}
                        >
                          {isOpen ? "▴" : "▾"}
                        </span>
                        <div>
                          <p
                            className={`text-2xl font-bold md:text-2xl ${
                              isDark ? "text-white" : "text-slate-900"
                            }`}
                          >
                            {item.date}
                          </p>
                          <p
                            className={`mt-3 text-xl font-semibold ${
                              isDark ? "text-white" : "text-slate-900"
                            }`}
                          >
                            {item.job}
                          </p>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>

                <div className="hidden md:block">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.45, delay: index * 0.08 + 0.07 }}
                    className={`rounded-2xl border p-5 ${
                      isDark
                        ? "border-white/10 bg-white/5"
                        : "border-[#7c3aed]/20 bg-white/45"
                    }`}
                  >
                    <h3 className={`text-2xl font-semibold ${isDark ? "text-white" : "text-slate-900"}`}>
                      {item.title}
                    </h3>
                    <ul className="mt-4 space-y-3">
                      {item.contents.map((content, contentIndex) => (
                        <li
                          key={`${item.title}-${contentIndex}`}
                          className={`flex items-start gap-2 text-base leading-7 ${
                            isDark ? "text-neutral-300" : "text-slate-800"
                          }`}
                        >
                          <span
                            className={`mt-1.5 inline-block h-2.5 w-2.5 rounded-full ${
                              isDark ? "bg-[#f5c451]" : "bg-[#7c3aed]"
                            }`}
                          />
                          <span>{content}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden md:hidden"
                    >
                      <div
                        className={`rounded-2xl border p-5 ${
                          isDark
                            ? "border-white/10 bg-white/5"
                            : "border-[#7c3aed]/20 bg-white/45"
                        }`}
                      >
                        <h3 className={`text-2xl font-semibold ${isDark ? "text-white" : "text-slate-900"}`}>
                          {item.title}
                        </h3>
                        <ul className="mt-4 space-y-3">
                          {item.contents.map((content, contentIndex) => (
                            <li
                              key={`${item.title}-${contentIndex}`}
                              className={`flex items-start gap-2 text-base leading-7 ${
                                isDark ? "text-neutral-300" : "text-slate-800"
                              }`}
                            >
                              <span
                                className={`mt-1.5 inline-block h-2.5 w-2.5 rounded-full ${
                                  isDark ? "bg-[#f5c451]" : "bg-[#7c3aed]"
                                }`}
                              />
                              <span>{content}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
