import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white border-t py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
        <p className="mb-4 md:mb-0">&copy; {new Date().getFullYear()} Dware. All rights reserved.</p>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-900 transition">Privacy Policy</a>
          <a href="#" className="hover:text-gray-900 transition">Terms of Service</a>
          <a href="#" className="hover:text-gray-900 transition">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
