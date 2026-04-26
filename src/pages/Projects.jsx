import React from "react";
import { motion } from "framer-motion";
import { PROJECTS } from "../data";
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <section className="max-w-6xl mx-auto py-24 px-6">

      <motion.div
        className="mb-14 text-center"
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-xs uppercase tracking-widest mb-3 font-medium" style={{ color: "var(--accent-from)" }}>
          
        </p>
        <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[var(--accent-from)] to-[var(--accent-to)]">
          Projects
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.id}
            className="theme-card rounded-2xl overflow-hidden flex flex-col hover:-translate-y-1 transition-transform duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
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
              <Link
                to={`/projects/${project.id}`}
                className="self-start text-xs font-semibold px-4 py-2 rounded-lg bg-gradient-to-r from-[var(--accent-from)] to-[var(--accent-to)] text-white hover:opacity-90 transition"
              >
                View Details →
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
