"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { FaGithub, FaLinkedin, FaWhatsapp, FaWeixin } from "react-icons/fa";
import { MdOutlineWbSunny, MdOutlineNightlight } from "react-icons/md"; // 主题切换图标
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  { title: "About", path: "#about" },
  { title: "Projects", path: "#projects" },
  { title: "Contact", path: "#contact" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true); // 默认深色模式

  // 主题切换 & 默认黑色模式
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
      setDarkMode(savedTheme === "dark");
    } else {
      document.documentElement.classList.add("dark"); // 默认黑色主题
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = darkMode ? "light" : "dark";
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", !darkMode);
    localStorage.setItem("theme", newTheme);
  };

  return (
<nav className="fixed mx-auto top-0 left-0 right-0 z-50 
                bg-[var(--background-color)] 
                border border-transparent
                rounded-xl 
                shadow-md
                backdrop-blur-lg 
                bg-opacity-80 
                transition-colors duration-300">
  <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">

    {/* 左侧导航链接 */}
    <div className="hidden md:flex space-x-8">
      {navLinks.map((link, index) => (
        <NavLink
          key={index}
          href={link.path}
          title={link.title}
          className="nav-link-style !text-[var(--text-color)]"
        />
      ))}
    </div>

    {/* Logo 居中 */}
    <div className="absolute left-1/2 transform -translate-x-1/2">
      <Link
        href={"/"}
        className="text-2xl md:text-5xl text-[var(--text-color)] font-serif italic"
      >
        Jay
      </Link>
    </div>

    {/* 右侧图标 */}
    <div className="flex space-x-4 items-center">
      <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
        <FaGithub className="icon-style hover:text-gray-400" />
      </a>
      <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="icon-style hover:text-gray-400" />
      </a>
      <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp className="icon-style hover:text-gray-400" />
      </a>
      <a href="#" title="WeChat QR Code">
        <FaWeixin className="icon-style hover:text-gray-400" />
      </a>

      {/* 主题切换按钮 */}
      <button onClick={toggleTheme}>
        {darkMode ? (
          <MdOutlineWbSunny className="icon-style hover:bg-yellow-400" />
        ) : (
          <MdOutlineNightlight className="icon-style hover:bg-blue-400" />
        )}
      </button>
    </div>

    {/* 移动端菜单按钮 */}
    <div className="mobile-menu block md:hidden">
      {!navbarOpen ? (
        <button
          onClick={() => setNavbarOpen(true)}
          className="flex items-center px-3 py-2 border rounded border-gray-500 text-[var(--text-color)] hover:text-[var(--text-color)]"
        >
          <Bars3Icon className="h-5 w-5" />
        </button>
      ) : (
        <button
          onClick={() => setNavbarOpen(false)}
          className="flex items-center px-3 py-2 border rounded border-gray-500 text-[var(--text-color)] hover:text-[var(--text-color)]"
        >
          <XMarkIcon className="h-5 w-5" />
        </button>
      )}
    </div>
  </div>

  {/* 移动端菜单 */}
  {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
</nav>

  );
};

export default Navbar;
