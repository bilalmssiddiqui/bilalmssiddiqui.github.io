import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectModal({ project, onClose }) {
  const [selectedImage, setSelectedImage] = useState(null);

  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/75 z-50 flex justify-center items-start overflow-y-auto backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={(e) => e.target === e.currentTarget && onClose()}
      >
        <div
          className="theme-card rounded-2xl max-w-4xl w-full m-8 p-7 relative"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-full text-sm hover:opacity-80 transition"
            style={{ color: "var(--text-muted)", background: "var(--bg)", border: "1px solid var(--border)" }}
            aria-label="Close"
          >
            ✕
          </button>

          {/* Title */}
          <motion.h2
            className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-[var(--accent-from)] to-[var(--accent-to)] pr-10"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
          >
            {project.title}
          </motion.h2>

          <p className="text-sm leading-relaxed mb-7" style={{ color: "var(--text-muted)" }}>
            {project.summary}
          </p>

          {/* Media Gallery */}
          {project.media && project.media.length > 0 && (
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-7"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.08 } },
              }}
            >
              {project.media.map((m, i) => (
                <motion.div
                  key={i}
                  className="rounded-xl overflow-hidden cursor-pointer"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  onClick={() => setSelectedImage(m.src)}
                >
                  <img
                    src={m.src}
                    alt={m.caption}
                    className="w-full h-36 object-cover hover:scale-[1.04] transition-transform duration-300"
                  />
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Features */}
          {project.features && (
            <div className="mb-7">
              <h3 className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--accent-from)" }}>
                Key Features
              </h3>
              <ul className="space-y-2">
                {project.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm" style={{ color: "var(--text-muted)" }}>
                    <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: "var(--accent-from)" }}></span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Docs & Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-5" style={{ borderTop: "1px solid var(--border)" }}>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--accent-from)" }}>
                Documents
              </h4>
              {project.docs?.length ? (
                <div className="space-y-1.5">
                  {project.docs.map((d, i) => (
                    <a
                      key={i}
                      href={d.url}
                      className="flex items-center gap-2 text-sm hover:opacity-80 transition"
                      style={{ color: "var(--accent-from)" }}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>📄</span> {d.name}
                    </a>
                  ))}
                </div>
              ) : (
                <p className="text-xs" style={{ color: "var(--text-muted)" }}>No documents added.</p>
              )}
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--accent-from)" }}>
                External Links
              </h4>
              {project.external?.length ? (
                <div className="space-y-1.5">
                  {project.external.map((l, i) => (
                    <a
                      key={i}
                      href={l.url}
                      className="flex items-center gap-2 text-sm hover:opacity-80 transition"
                      style={{ color: "var(--accent-from)" }}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>🔗</span> {l.name}
                    </a>
                  ))}
                </div>
              ) : (
                <p className="text-xs" style={{ color: "var(--text-muted)" }}>No external links.</p>
              )}
            </div>
          </div>
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 bg-black/90 flex items-center justify-center z-[60] backdrop-blur-sm"
              onClick={() => setSelectedImage(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.img
                src={selectedImage}
                alt="Full view"
                className="max-h-[90vh] max-w-[90vw] rounded-xl shadow-2xl"
                initial={{ scale: 0.92, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.25 }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
}
