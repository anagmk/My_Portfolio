import { useRef } from "react";
import { flushSync } from "react-dom";

export const AnimatedThemeToggler = ({ theme, onThemeChange, className = "" }) => {
  const buttonRef = useRef(null);
  const isDark = theme === "dark";

  const toggleTheme = () => {
    const nextTheme = isDark ? "light" : "dark";
    const button = buttonRef.current;

    const applyTheme = () => {
      document.documentElement.classList.toggle("dark", nextTheme === "dark");
      onThemeChange(nextTheme);
    };

    if (!button || typeof document.startViewTransition !== "function") {
      applyTheme();
      return;
    }

    const { left, top, width, height } = button.getBoundingClientRect();
    const x = left + width / 2;
    const y = top + height / 2;
    const radius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    );

    const transition = document.startViewTransition(() => {
      flushSync(applyTheme);
    });

    transition.ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${radius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 450,
          easing: "ease-in-out",
          pseudoElement: "::view-transition-new(root)",
        },
      );
    });
  };

  return (
    <button
      ref={buttonRef}
      type="button"
      onClick={toggleTheme}
      className={className}
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      title={`Switch to ${isDark ? "light" : "dark"} theme`}
    >
      {isDark ? (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="size-5">
          <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
          <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="size-5">
          <path d="M20.84 15.61A9 9 0 0 1 8.39 3.16 9 9 0 1 0 20.84 15.61Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
      )}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
};
