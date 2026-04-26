import React from "react";
import { motion } from "framer-motion";

export default function ProjectCard({ project, onOpen }) {
  return (
    <motion.div
      className="theme-card rounded-2xl overflow-hidden flex flex-col hover:-translate-y-1 transition-transform duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      {project.media && project.media[0] && (
        <div className="overflow-hidden">
          <img
            src={project.media[0].src}
            alt={project.title}
            className="h-48 w-full object-cover hover:scale-[1.03] transition-transform duration-300"
          />
        </div>
      )}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="text-base font-semibold mb-1.5">{project.title}</h3>
        <p className="text-sm leading-relaxed mb-5 flex-1" style={{ color: "var(--text-muted)" }}>
          {project.summary}
        </p>
        <button
          onClick={() => onOpen(project)}
          className="self-start text-xs font-semibold px-4 py-2 rounded-lg bg-gradient-to-r from-[var(--accent-from)] to-[var(--accent-to)] text-white hover:opacity-90 transition"
        >
          View Details →
        </button>
      </div>
    </motion.div>
  );
}
