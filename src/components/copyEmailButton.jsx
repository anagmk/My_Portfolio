import React from "react";
import { AnimatePresence, motion } from "motion/react";

const CopyEmailButton = ({ theme = "light" }) => {
  const [copied, setCopied] = React.useState(false);
  const email = "anagmk40@gmail.com";
  const isDark = theme === "dark";
  const buttonStyle = {
    backgroundColor: isDark ? "#ffffff" : "#000000",
    color: isDark ? "#000000" : "#ffffff",
    borderColor: isDark ? "rgba(255,255,255,0.15)" : "rgba(15,23,42,0.18)",
  };
  const iconColor = isDark ? "#000000" : "#ffffff";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <motion.button
      whileHover={{ y: -5 }}
      whileTap={{ scale: 1.05 }}
      onClick={copyToClipboard}
      className="realtive px-4 py-4 text-sm text-center rounded-full font-extralight cursor-pointer overflow-hidden border transition-colors"
      style={buttonStyle}
    >
      <AnimatePresence mode="wait">
        {copied ? (
          <motion.p
            className="flex items-center justify-center gap-2"
            style={{ color: isDark ? "#000000" : "#111827" }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.1, ease: "easeInOut" }}
            key="copied"
          >
            Email has copied!
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <g stroke={iconColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                <path d="M7 9.667A2.667 2.667 0 0 1 9.667 7h8.666A2.667 2.667 0 0 1 21 9.667v8.666A2.667 2.667 0 0 1 18.333 21H9.667A2.667 2.667 0 0 1 7 18.333z" />
                <path d="M4.012 16.737A2 2 0 0 1 3 15V5c0-1.1.9-2 2-2h10c.75 0 1.158.385 1.5 1M11 14l2 2l4-4" />
              </g>
            </svg>
          </motion.p>
        ) : (
          <motion.p
            className="flex items-center justify-center gap-2"
            style={{ color: isDark ? "#000000" : "#ffffff" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
            key="copy"
          >
            Copy Email Address
            <svg width="20" height="20" viewBox="0 0 512 512" fill="none" aria-hidden="true">
              <rect width="336" height="336" x="128" y="128" stroke={iconColor} strokeLinejoin="round" strokeWidth="32" rx="57" ry="57" />
              <path stroke={iconColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="m383.5 128l.5-24a56.16 56.16 0 0 0-56-56H112a64.19 64.19 0 0 0-64 64v216a56.16 56.16 0 0 0 56 56h24" />
            </svg>
          </motion.p>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default CopyEmailButton;
