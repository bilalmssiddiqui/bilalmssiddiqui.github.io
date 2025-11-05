import React from "react";
import { motion } from "framer-motion";

export default function ProjectCard({ project, onOpen }) {
  return (
    <motion.div
      className="bg-gray-800 rounded-2xl p-5 shadow-lg flex flex-col justify-between hover:shadow-xl transition hover:-translate-y-1"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {project.media && project.media[0] && (
        <img
          src={project.media[0].src}
          alt={project.title}
          className="rounded-xl mb-4 h-48 w-full object-cover"
        />
      )}
      <div>
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-400 text-sm mb-4 leading-relaxed">
          {project.summary}
        </p>
      </div>
      <button
        onClick={() => onOpen(project)}
        className="mt-auto bg-gradient-to-r from-[var(--accent-from)] to-[var(--accent-to)] text-white font-medium py-2 px-4 rounded-lg hover:opacity-90 transition self-start"
      >
        View Details
      </button>
    </motion.div>
  );
}
