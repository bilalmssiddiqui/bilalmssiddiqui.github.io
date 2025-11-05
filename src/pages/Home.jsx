import React from "react";
import { SITE, ABOUT } from "../data";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import HeroImage from "../assets/hero.jpg"; // relative import

export default function Home() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center text-center px-6 md:px-16">
      <div className="max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[var(--accent-from)] to-[var(--accent-to)]"
        >
          {SITE.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-gray-300 text-lg md:text-xl mb-8"
        >
          {SITE.role} 
        </motion.p>

        <div className="flex gap-4 justify-center mb-12">
          {/*
          <a
            href={SITE.resume}
            download
            className="px-6 py-3 rounded-full bg-gradient-to-r from-[var(--accent-from)] to-[var(--accent-to)] text-black font-medium"
          >
            Download Resume
          </a>
          */}
          <Link
            to="/projects"
            className="px-6 py-3 rounded-full border border-gray-700"
          >
            View Projects
          </Link>
        </div>

        <div className="rounded-xl overflow-hidden shadow-soft">
          <img src={HeroImage} alt="hero" className="w-full h-auto object-cover rounded-xl" />
        </div>
      </div>
    </section>
  );
}
