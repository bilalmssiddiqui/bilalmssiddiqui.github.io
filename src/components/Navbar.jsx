import React from "react";
import { Link, NavLink } from "react-router-dom";
import { SITE } from "../data";

const navLinkClass = ({ isActive }) =>
  isActive ? "nav-link-active text-sm" : "nav-link text-sm";

export default function Navbar() {
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
        </div>
      </nav>
    </header>
  );
}
