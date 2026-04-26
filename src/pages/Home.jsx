import React from "react";
import { SITE } from "../data";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import HeroImage from "../assets/hero.jpg";

export default function Home() {
  return (
    <section className="min-h-[85vh] flex items-center justify-center px-6 md:px-16">
      <div className="max-w-4xl w-full text-center">

        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-xs uppercase tracking-widest mb-5 font-medium"
          style={{ color: "var(--accent-from)" }}
        >
          
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-5xl md:text-7xl font-bold mb-5 bg-clip-text text-transparent bg-gradient-to-r from-[var(--accent-from)] to-[var(--accent-to)]"
        >
          {SITE.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
          className="text-lg md:text-xl mb-10"
          style={{ color: "var(--text-muted)" }}
        >
          {SITE.role}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="flex gap-3 justify-center mb-16"
        >
          <Link
            to="/projects"
            className="px-6 py-2.5 rounded-full text-sm font-medium bg-gradient-to-r from-[var(--accent-from)] to-[var(--accent-to)] text-white hover:opacity-90 transition"
          >
            View Projects
          </Link>
          <Link
            to="/about"
            className="px-6 py-2.5 rounded-full text-sm font-medium border transition hover:opacity-80"
            style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}
          >
            About Me
          </Link>
          {/*
          <a
            href={SITE.resume}
            download
            className="px-6 py-2.5 rounded-full text-sm font-medium border transition hover:opacity-80"
            style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}
          >
            Resume
          </a>
          */}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="rounded-2xl overflow-hidden"
          style={{ boxShadow: "var(--shadow)", border: "1px solid var(--border)" }}
        >
          <img
            src={HeroImage}
            alt="hero"
            className="w-full h-auto object-cover"
          />
        </motion.div>

      </div>
    </section>
  );
}
