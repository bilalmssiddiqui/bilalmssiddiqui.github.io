import React from "react";
import { Link, NavLink } from "react-router-dom";
import { SITE } from "../data";
//import { useTheme } from "../context/ThemeContext";

//function SunIcon() {
//  return (
//    <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
//      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//      <circle cx="12" cy="12" r="5"/>
//      <line x1="12" y1="1"  x2="12" y2="3"/>
//      <line x1="12" y1="21" x2="12" y2="23"/>
//      <line x1="4.22" y1="4.22"  x2="5.64" y2="5.64"/>
//     <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
//      <line x1="1"  y1="12" x2="3"  y2="12"/>
//      <line x1="21" y1="12" x2="23" y2="12"/>
//      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
//      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
//    </svg>
//  );
//}

//function MoonIcon() {
//  return (
//    <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
//      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
//    </svg>
//  );
//}

const navLinkClass = ({ isActive }) =>
  isActive ? "nav-link-active text-sm" : "nav-link text-sm";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header
      className="fixed top-0 w-full z-40 backdrop-blur-md border-b"
      style={{ background: "var(--bg-nav)", borderColor: "var(--border)" }}
    >
      <nav className="max-w-6xl mx-auto px-6 md:px-0 py-4 flex items-center justify-between">
        <div className="text-sm font-semibold tracking-tight">
          <Link to="/" style={{ color: "var(--text)" }}>{SITE.name}</Link>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <NavLink to="/"         className={navLinkClass}>Home</NavLink>
          <NavLink to="/about"    className={navLinkClass}>About</NavLink>
          <NavLink to="/projects" className={navLinkClass}>Projects</NavLink>
          <NavLink to="/contact"  className={navLinkClass}>Contact</NavLink>

          {/*
          <a href={SITE.resume} download
            className="ml-2 inline-flex items-center px-4 py-1.5 rounded-full text-xs bg-gradient-to-r from-[var(--accent-from)] to-[var(--accent-to)] text-white font-medium">
            Resume
          </a>
          */}

          {/*<button
            onClick={toggleTheme}
            className="theme-toggle ml-1"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>
          */}
        </div>
      </nav>
    </header>
  );
}
