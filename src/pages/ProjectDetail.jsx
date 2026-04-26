import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { PROJECTS } from "../data";
import { motion, AnimatePresence } from "framer-motion";

const CADViewer = React.lazy(() => import("../components/CADViewer"));

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.2 },
  }),
};

function SectionHeading({ children }) {
  return (
    <h3 className="text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: "var(--accent-from)" }}>
      {children}
    </h3>
  );
}

export default function ProjectDetail() {
  const { id } = useParams();
  const project = PROJECTS.find((p) => String(p.id) === id);
  const [selectedImage, setSelectedImage] = useState(null);

  if (!project) {
    return (
      <div className="text-center py-40">
        <h2 className="text-2xl font-semibold mb-6">Project not found</h2>
        <Link to="/projects" className="text-blue-400 hover:underline">
          ← Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <motion.section
      className="max-w-4xl mx-auto py-24 px-6"
      initial="hidden"
      animate="visible"
      variants={fadeUp}
    >
      {/* Back */}
      <Link
        to="/projects"
        className="inline-flex items-center gap-1.5 text-sm mb-10 hover:opacity-80 transition"
        style={{ color: "var(--text-muted)" }}
      >
        ← Back to Projects
      </Link>

      {/* Title */}
      <motion.div custom={0} variants={fadeUp} className="mb-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[var(--accent-from)] to-[var(--accent-to)]">
          {project.title}
        </h1>
        <p className="text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
          {project.summary}
        </p>
      </motion.div>

      {/* Tools */}
      {project.tools && (
        <motion.div custom={0.1} variants={fadeUp} className="mb-12">
          <SectionHeading>Tools & Techniques</SectionHeading>
          <p className="text-sm leading-relaxed whitespace-pre-line" style={{ color: "var(--text-muted)" }}>
            {project.tools}
          </p>
        </motion.div>
      )}

      {/* Overview */}
      {project.overview && (
        <motion.div custom={0.2} variants={fadeUp} className="space-y-16 mb-16">
          {project.overview.map((section, idx) => (
            <div
              key={idx}
              className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-center ${
                idx % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div>
                <SectionHeading>{section.title}</SectionHeading>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {section.text}
                </p>
              </div>

              {section.media && section.media.length > 0 && (
                <div className="space-y-3">
                  {section.media.map((m, i) => (
                    <div key={i} className="relative group rounded-xl overflow-hidden">
                      <img
                        src={m.src}
                        alt={m.caption}
                        className="object-cover w-full h-60 cursor-pointer group-hover:scale-[1.03] transition duration-300"
                        onClick={() => setSelectedImage(m.src)}
                      />
                      {m.caption && (
                        <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-xs p-2 opacity-0 group-hover:opacity-100 transition">
                          {m.caption}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </motion.div>
      )}

      {/* Responsibilities */}
      {project.responsibilities && (
        <motion.div custom={0.3} variants={fadeUp} className="mb-16">
          <SectionHeading>Key Responsibilities</SectionHeading>
          <div className="space-y-8">
            {project.responsibilities.map((r, i) => (
              <div
                key={i}
                className="border-l-2 pl-5"
                style={{ borderColor: "var(--accent-from)" }}
              >
                <h4 className="text-sm font-semibold mb-1.5">{r.title}</h4>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-muted)" }}>
                  {r.description}
                </p>
                {r.media && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {r.media.map((m, idx) => (
                      <div key={idx} className="relative group rounded-xl overflow-hidden">
                        <img
                          src={m.src}
                          alt={m.caption}
                          className="object-cover w-full h-44 cursor-pointer group-hover:scale-[1.03] transition duration-300"
                          onClick={() => setSelectedImage(m.src)}
                        />
                        {m.caption && (
                          <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-xs p-2 opacity-0 group-hover:opacity-100 transition">
                            {m.caption}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Learnings */}
      {project.learnings && (
        <motion.div custom={0.4} variants={fadeUp} className="mb-14">
          <SectionHeading>What I Learned</SectionHeading>
          <ul className="space-y-2">
            {project.learnings.map((l, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm" style={{ color: "var(--text-muted)" }}>
                <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: "var(--accent-from)" }}></span>
                {l}
              </li>
            ))}
          </ul>
        </motion.div>
      )}

      {/* Features */}
      {project.features && (
        <motion.div custom={0.5} variants={fadeUp} className="mb-14">
          <SectionHeading>Key Results & Highlights</SectionHeading>
          <ul className="space-y-2">
            {project.features.map((f, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm" style={{ color: "var(--text-muted)" }}>
                <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: "var(--accent-from)" }}></span>
                {f}
              </li>
            ))}
          </ul>
        </motion.div>
      )}

      {/* Docs & Links */}
      <motion.div custom={0.6} variants={fadeUp} className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <SectionHeading>Documents</SectionHeading>
          {project.docs?.length ? (
            <div className="space-y-1.5">
              {project.docs.map((doc, i) => (
                <a
                  key={i}
                  href={doc.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm hover:opacity-80 transition"
                  style={{ color: "var(--accent-from)" }}
                >
                  <span>📄</span> {doc.name}
                </a>
              ))}
            </div>
          ) : (
            <p className="text-sm" style={{ color: "var(--text-muted)" }}>No documents provided.</p>
          )}
        </div>

        <div>
          <SectionHeading>External Links</SectionHeading>
          {project.external?.length ? (
            <div className="space-y-1.5">
              {project.external.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm hover:opacity-80 transition"
                  style={{ color: "var(--accent-from)" }}
                >
                  <span>🔗</span> {link.name}
                </a>
              ))}
            </div>
          ) : (
            <p className="text-sm" style={{ color: "var(--text-muted)" }}>No external links available.</p>
          )}
        </div>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage}
              alt="Full view"
              className="max-w-[90vw] max-h-[90vh] rounded-xl shadow-2xl"
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.25 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
