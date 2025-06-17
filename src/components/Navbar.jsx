import React from "react";

const Navbar = () => {
  return (
    <div className="bg-[#031B4E] w-full">
      <div className="max-w-[1920px] mx-auto px-10 py-4 border-b border-white/20 max-md:px-5">
        <div className="flex justify-between items-center flex-wrap gap-6 w-full max-w-[1240px] mx-auto">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/dd49a5134f8e33bf3893800d9f4e96f502ec3eb5?placeholderIfAbsent=true"
              alt="Logo"
              className="w-[88px] h-auto"
            />
          </div>

          {/* Nav Links */}
          <ul className="flex flex-wrap gap-6 text-white text-base font-medium">
            <li className="hover:text-purple-300 cursor-pointer">Home</li>
            <li className="hover:text-purple-300 cursor-pointer">About Us</li>
            <li className="hover:text-purple-300 cursor-pointer">Services</li>
            <li className="hover:text-purple-300 cursor-pointer">About</li>
            <li className="hover:text-purple-300 cursor-pointer">Contact</li>
          </ul>

          {/* CTA Button */}
          <div>
            <button className="bg-white text-[#031B4E] font-semibold px-6 py-2 rounded-lg hover:bg-slate-200 transition-all">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
