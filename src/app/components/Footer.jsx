import React from "react";

const Footer = () => {
  return (
    <footer className="footer relative w-full z-10 bg-[var(--background-color)] border border-transparent rounded-xl shadow-md backdrop-blur-lg bg-opacity-80 transition-colors duration-300 ">
      <div className="container p-6 flex justify-between">
        <span className="text-2xl md:text-1xl text-[var(--text-color)] font-serif italic">Jay Chen</span>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;