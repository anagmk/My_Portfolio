import { motion } from "motion/react";

const DownloadCVButton = ({ theme = "light" }) => {
  const isDark = theme === "dark";
  const buttonStyle = {
    backgroundColor: isDark ? "#ffffff" : "#000000",
    color: isDark ? "#000000" : "#ffffff",
    borderColor: isDark ? "rgba(255,255,255,0.15)" : "rgba(15,23,42,0.18)",
  };
  const iconColor = isDark ? "#000000" : "#ffffff";

  return (
    <motion.a
      href="/assets/anag-mk-cv.pdf"
      download
      whileHover={{ y: -5 }}
      whileTap={{ scale: 1.05 }}
      className="relative flex items-center justify-center gap-2 rounded-full border px-4 py-4 text-sm font-extralight transition-colors"
      style={buttonStyle}
    >
      Download CV
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 3v11m0 0l-4-4m4 4l4-4M5 18v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2" stroke={iconColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </svg>
    </motion.a>
  );
};

export default DownloadCVButton;
