import React, { useState } from "react";
import { X, Menu } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Education", href: "#education" },
    { name: "Certificates", href: "#certificates" },
    { name: "About Me", href: "#about" },
    { name: "Skills", href: "#experience" },
    { name: "Projects", href: "#projects" },
  ];

  const scrollToSection = (href) => {
    setIsMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <header className="relative z-50 px-6 py-7">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        {/* Logo */}
        <div className="text-white text-3xl font-black">
          PORTFOLIO <span className="text-primary">.</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          <ul className="flex gap-8">
            {menuItems.map((itm) => (
              <li key={itm.name}>
                <button
                  onClick={() => scrollToSection(itm.href)}
                  className="text-gray-300 hover:text-white transition"
                >
                  {itm.name}
                </button>
              </li>
            ))}
          </ul>

          <button
            onClick={() => scrollToSection("#contact")}
            className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-lg"
          >
            Contact Me
          </button>
        </nav>

        {/* Mobile Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/60 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-[#111827] z-50 transition-transform duration-300 md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } p-8`}
      >
        <button
          className="text-white mb-10"
          onClick={() => setIsMenuOpen(false)}
        >
          <X size={32} />
        </button>

        <ul className="flex flex-col gap-6">
          {menuItems.map((item) => (
            <li key={item.name}>
              <button
                onClick={() => scrollToSection(item.href)}
                className="text-white text-xl hover:text-primary"
              >
                {item.name}
              </button>
            </li>
          ))}

          <li className="pt-6">
            <button
              onClick={() => scrollToSection("#contact")}
              className="w-full bg-primary text-white py-4 rounded-xl font-bold"
            >
              Contact Me
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}