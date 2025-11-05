import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectModal({ project, onClose }) {
  const [selectedImage, setSelectedImage] = useState(null);

  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-80 z-50 flex justify-center items-center overflow-y-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="bg-gray-900 rounded-2xl max-w-5xl w-full m-8 p-6 relative shadow-2xl">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-300 hover:text-white text-xl"
          >
            ✕
          </button>

          <motion.h2
            className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[var(--accent-from)] to-[var(--accent-to)]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {project.title}
          </motion.h2>

          <p className="text-gray-300 mb-8">{project.summary}</p>

          {/* Media Gallery */}
          {project.media && (
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6"
              initial="hidden"
              whileInView="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.1 } },
              }}
            >
              {project.media.map((m, i) => (
                <motion.img
                  key={i}
                  src={m.src}
                  alt={m.caption}
                  className="rounded-lg cursor-pointer hover:scale-[1.03] transition"
                  onClick={() => setSelectedImage(m.src)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                />
              ))}
            </motion.div>
          )}

          {/* Features */}
          {project.features && (
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2 text-blue-400">
                Key Features
              </h3>
              <ul className="list-disc clean-list text-gray-300 space-y-1">
                {project.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Docs and Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div>
              <h4 className="text-lg font-semibold mb-2 text-blue-400">
                Documents
              </h4>
              {project.docs?.length ? (
                project.docs.map((d, i) => (
                  <a
                    key={i}
                    href={d.url}
                    className="block text-blue-400 hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    📄 {d.name}
                  </a>
                ))
              ) : (
                <p className="text-gray-500 text-sm">No documents added.</p>
              )}
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2 text-blue-400">
                External Links
              </h4>
              {project.external?.length ? (
                project.external.map((l, i) => (
                  <a
                    key={i}
                    href={l.url}
                    className="block text-blue-400 hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    🔗 {l.name}
                  </a>
                ))
              ) : (
                <p className="text-gray-500 text-sm">No external links.</p>
              )}
            </div>
          </div>
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-[60]"
            onClick={() => setSelectedImage(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <img
              src={selectedImage}
              alt="Full view"
              className="max-h-[90vh] max-w-[90vw] rounded-xl shadow-2xl"
            />
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
