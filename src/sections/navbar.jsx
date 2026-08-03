import { useState } from "react";

function Navigation() {
  return (
    <ul className="nav-ul">
      <li className="nav-li">
        <a href="/" className="nav-link">
          Home
        </a>
      </li>
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
            My App
          </a>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setTheme("dark")}
              className={`rounded-full border px-3 py-1 text-xs transition ${
                theme === "dark"
                  ? "bg-white text-black border-white"
                  : "bg-transparent text-white border-white/40"
              }`}
            >
              Dark
            </button>
            <button
              type="button"
              onClick={() => setTheme("light")}
              className={`rounded-full border px-3 py-1 text-xs transition ${
                theme === "light"
                  ? "bg-white text-black border-white"
                  : "bg-transparent text-white border-white/40"
              }`}
            >
              Light
            </button>
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
