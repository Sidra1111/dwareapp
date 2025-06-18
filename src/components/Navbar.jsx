import React, { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="bg-[#031B4E] w-full">
      <div className="max-w-[1920px] mx-auto px-6 py-4 border-b border-white/20">
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/dd49a5134f8e33bf3893800d9f4e96f502ec3eb5?placeholderIfAbsent=true"
              alt="Logo"
              className="w-[80px] h-auto"
            />
          </div>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex gap-12 text-white text-xl font-medium items-center">
            {["home", "about-us", "services", "about", "contact"].map((id) => (
              <li
                key={id}
                className="hover:text-purple-300 cursor-pointer capitalize"
                onClick={() => scrollToSection(id)}
              >
                {id.replace("-", " ")}
              </li>
            ))}
          </ul>

          {/* Desktop Button */}
          <div className="hidden md:block">
            <button
              className="bg-white text-[#031B4E] font-semibold px-6 py-2 rounded-lg hover:bg-slate-200 transition-all text-sm"
              onClick={() => scrollToSection("contact")}
            >
              Get Started
            </button>
          </div>

          {/* Hamburger Menu Button - Only visible on mobile */}
          <div className="block md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="border border-white p-2 rounded-md"
              aria-label="Toggle Menu"
            >
              <div className="space-y-1">
                <span className="block w-8 h-1 bg-white rounded"></span>
                <span className="block w-8 h-1 bg-white rounded"></span>
                <span className="block w-8 h-1 bg-white rounded"></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 border-t border-white/20 pt-4">
            <ul className="flex flex-col gap-4 text-white text-base font-medium">
              {["home", "about-us", "services", "about", "contact"].map((id) => (
                <li
                  key={id}
                  className="hover:text-purple-300 cursor-pointer capitalize"
                  onClick={() => scrollToSection(id)}
                >
                  {id.replace("-", " ")}
                </li>
              ))}
            </ul>
            <div className="mt-4 pt-4 border-t border-white/20">
              <button
                className="bg-white text-[#031B4E] font-semibold px-4 py-2 rounded-lg hover:bg-slate-200 transition-all text-sm w-full"
                onClick={() => scrollToSection("contact")}
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
