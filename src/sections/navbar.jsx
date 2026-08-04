import { useState } from "react";
import { AnimatedThemeToggler } from "../components/themeChange";

function Navigation() {
  return (
    <ul className="nav-ul">
      <li className="nav-li">
        <a href="#about" className="nav-link">
          About
        </a>
      </li>
      <li className="nav-li">
        <a href="#projects" className="nav-link">
          Works
        </a>
      </li>
      <li className="nav-li">
        <a href="#contact" className="nav-link">
          Contact
        </a>
      </li>
    </ul>
  );
}

const Navbar = ({ theme, setTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed inset-x-0 z-50 w-full backdrop-blur-lg bg bg-primary/40 px-10">
      <div className="mx-auto container py-4">
        <div className="flex justify-between items-center gap-4">
          <a
            href="/"
            className="text-xl font-bold transition-colors text-neutral-400 hover:text-white"
          >
          ANAG
          </a>

          <div className="flex items-center gap-2">
            <AnimatedThemeToggler
              theme={theme}
              onThemeChange={setTheme}
              className="flex size-10 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white transition hover:scale-105 hover:bg-white/20"
            />
          </div>

          <button
            className="w-10 h-10 bg-primary hover:bg-primary-hover text-white rounded flex items-center justify-center sm:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          >
            <img
              src={isOpen ? "/assets/close.svg" : "/assets/menu.svg"}
              alt={isOpen ? "close menu" : "open menu"}
              className="w-6 h-6"
            />
          </button>
          <nav className="hidden sm:flex">
            <Navigation />
          </nav>
        </div>
        <div
          className={`sm:hidden overflow-hidden transition-[max-height,opacity,transform,margin] duration-300 ease-out ${
            isOpen
              ? "max-h-80 mt-4 opacity-100 translate-y-0"
              : "max-h-0 mt-0 opacity-0 -translate-y-2"
          }`}
          aria-hidden={!isOpen}
        >
          <Navigation />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
