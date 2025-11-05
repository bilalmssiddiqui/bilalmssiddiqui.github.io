import React from "react";
import { motion } from "framer-motion";
import { PROJECTS } from "../data";
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <section className="max-w-6xl mx-auto py-20 px-6 text-white">
      <motion.h2
        className="text-4xl font-bold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-[var(--accent-from)] to-[var(--accent-to)]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.id}
            className="bg-gray-800 rounded-2xl p-5 shadow-lg flex flex-col justify-between hover:shadow-xl transition hover:-translate-y-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            {project.media && project.media[0] && (
              <img
                src={project.media[0].src}
                alt={project.title}
                className="rounded-xl mb-4 h-48 w-full object-cover"
              />
            )}

            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                {project.summary}
              </p>
            </div>

            <Link
              to={`/projects/${project.id}`}
              className="mt-auto bg-gradient-to-r from-[var(--accent-from)] to-[var(--accent-to)] text-white font-medium py-2 px-4 rounded-lg hover:opacity-90 transition self-start"
            >
              View Details
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
