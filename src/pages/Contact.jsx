import React from "react";
import { SITE } from "../data";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12 },
  }),
};

function ContactLink({ href, label, value, icon }) {
  return (
    <motion.a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className="theme-card flex items-center gap-4 p-5 rounded-xl hover:opacity-80 transition-opacity duration-200"
      variants={fadeUp}
      whileHover={{ y: -2 }}
    >
      <div
        className="w-10 h-10 rounded-lg flex items-center justify-center text-lg flex-shrink-0"
        style={{ background: "var(--bg)", border: "1px solid var(--border)" }}
      >
        {icon}
      </div>
      <div>
        <p className="text-xs uppercase tracking-widest mb-0.5 font-medium" style={{ color: "var(--text-muted)" }}>
          {label}
        </p>
        <p className="text-sm font-medium" style={{ color: "var(--accent-from)" }}>
          {value}
        </p>
      </div>
    </motion.a>
  );
}

export default function Contact() {
  return (
    <section className="max-w-2xl mx-auto py-24 px-6">
      <motion.div initial="hidden" animate="visible" variants={fadeUp}>
        <p className="text-xs uppercase tracking-widest mb-3 font-medium" style={{ color: "var(--accent-from)" }}>
          Get in Touch
        </p>
        <h2 className="text-4xl font-bold mb-3">Contact</h2>
        <p className="text-sm leading-relaxed mb-10" style={{ color: "var(--text-muted)" }}>
          I'm open to collaboration, internships, and research discussions. Feel free to reach out.
        </p>
      </motion.div>

      <motion.div
        className="flex flex-col gap-4"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        <ContactLink
          href={`mailto:${SITE.email}`}
          label="Email"
          value={SITE.email}
          icon="✉️"
        />

        {SITE.linkedin && (
          <ContactLink
            href={SITE.linkedin}
            label="LinkedIn"
            value={SITE.linkedin.replace("https://", "").replace("www.", "")}
            icon="💼"
          />
        )}
      </motion.div>
    </section>
  );
}
