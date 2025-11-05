import React from "react";
import { Link, NavLink } from "react-router-dom";
import { SITE } from "../data";

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-40 backdrop-blur-md bg-black/30 border-b border-black/30">
      <nav className="max-w-6xl mx-auto px-6 md:px-0 py-4 flex items-center justify-between">
        <div className="text-lg font-semibold tracking-tight">
          <Link to="/">{SITE.name}</Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <NavLink to="/" className={({isActive}) => isActive ? "text-white font-medium" : "text-gray-300 hover:text-white"}>Home</NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? "text-white font-medium" : "text-gray-300 hover:text-white"}>About</NavLink>
          <NavLink to="/projects" className={({isActive}) => isActive ? "text-white font-medium" : "text-gray-300 hover:text-white"}>Projects</NavLink>
          <NavLink to="/contact" className={({isActive}) => isActive ? "text-white font-medium" : "text-gray-300 hover:text-white"}>Contact</NavLink>
          {/*
          <a href={SITE.resume} download className="ml-4 inline-flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-[var(--accent-from)] to-[var(--accent-to)] text-black font-medium shadow-sm">
            Resume
          </a>
          */}
        </div>
      </nav>
    </header>
  );
}
