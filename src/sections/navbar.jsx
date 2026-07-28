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
        <a href="/about" className="nav-link">
          About
        </a>
      </li>
      <li className="nav-li">
        <a href="/works" className="nav-link">
          Works
        </a>
      </li>
      <li className="nav-li">
        <a href="/contact" className="nav-link">
          Contact
        </a>
      </li>
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg bg-primary/40">
      <div className="mx-auto container py-4">
        <div className="flex justify-between items-center">
          <a
            href="/"
            className="text-xl font-bold transition-colors text-neutral-400 hover:text-white"
          >
            My App
          </a>
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
              : "max-h-0 mt-0 opacity-0 -translate-y-2 pointer-events-none"
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
