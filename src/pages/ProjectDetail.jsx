import React, { useState, Suspense } from "react";
import { useParams, Link } from "react-router-dom";
import { PROJECTS } from "../data";
import { motion, AnimatePresence } from "framer-motion";

const CADViewer = React.lazy(() => import("../components/CADViewer"));

export default function ProjectDetail() {
  const { id } = useParams();
  const project = PROJECTS.find((p) => String(p.id) === id);
  const [selectedImage, setSelectedImage] = useState(null);

  if (!project) {
    return (
      <div className="text-center text-gray-400 py-40">
        <h2 className="text-3xl font-semibold mb-6">Project not found</h2>
        <Link
          to="/projects"
          className="text-blue-500 hover:underline text-lg font-medium"
        >
          ← Back to Projects
        </Link>
      </div>
    );
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.2 },
    }),
  };

  return (
    <motion.section
      className="max-w-6xl mx-auto py-20 px-6 text-white"
      initial="hidden"
      animate="visible"
      variants={fadeUp}
    >
      {/* Back Button */}
      <Link
        to="/projects"
        className="text-blue-400 hover:text-blue-300 font-medium inline-block mb-8"
      >
        ← Back to Projects
      </Link>

      {/* Project Header */}
      <motion.div custom={0} variants={fadeUp} className="mb-12">
        <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[var(--accent-from)] to-[var(--accent-to)]">
          {project.title}
        </h1>
        <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">
          {project.summary}
        </p>
      </motion.div>

      {/* Tools Used */}
      {project.tools && (
        <motion.div custom={0.1} variants={fadeUp} className="mb-16">
          <h3 className="text-3xl font-semibold mb-4 text-blue-400">
            Tools & Techniques:
          </h3>
          <p className="text-gray-300 leading-relaxed whitespace-pre-line">
            {project.tools}
          </p>
        </motion.div>
      )}

      {/* Overview Sections */}
      {project.overview && (
        <motion.div
          custom={0.2}
          variants={fadeUp}
          className="space-y-20 mb-20"
        >
          {project.overview.map((section, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-center ${
                idx % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div>
                <h3 className="text-3xl font-semibold mb-3 text-blue-400">
                  {section.title}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  {section.text}
                </p>
              </div>

              {section.media && section.media.length > 0 && (
                <div className="space-y-4">
                  {section.media.map((m, i) => (
                    <div key={i} className="relative group">
                      <img
                        src={m.src}
                        alt={m.caption}
                        className="rounded-xl object-cover w-full h-64 cursor-pointer group-hover:scale-[1.03] transition duration-300"
                        onClick={() => setSelectedImage(m.src)}
                      />
                      {m.caption && (
                        <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-gray-200 text-sm p-2 opacity-0 group-hover:opacity-100 transition">
                          {m.caption}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* Responsibilities */}
      {project.responsibilities && (
        <motion.div custom={0.3} variants={fadeUp} className="mb-20">
          <h3 className="text-3xl font-semibold mb-6 text-blue-400">
            Key Responsibilities:
          </h3>
          <div className="space-y-10">
            {project.responsibilities.map((r, i) => (
              <div key={i} className="border-l-4 border-blue-500 pl-6">
                <h4 className="text-xl font-semibold mb-2 text-gray-200">
                  {r.title}
                </h4>
                <p className="text-gray-300 leading-relaxed mb-4">
                  {r.description}
                </p>
                {r.media && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {r.media.map((m, idx) => (
                      <div key={idx} className="relative group">
                        <img
                          src={m.src}
                          alt={m.caption}
                          className="rounded-xl object-cover w-full h-48 cursor-pointer group-hover:scale-[1.03] transition duration-300"
                          onClick={() => setSelectedImage(m.src)}
                        />
                        {m.caption && (
                          <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-gray-200 text-xs p-2 opacity-0 group-hover:opacity-100 transition">
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

      {/* What I Learned */}
      {project.learnings && (
        <motion.div custom={0.4} variants={fadeUp} className="mb-16">
          <h3 className="text-3xl font-semibold mb-4 text-blue-400">
            What I Learned:
          </h3>
          <ul className="list-disc clean-list text-gray-300 space-y-3 pl-6">
            {project.learnings.map((l, i) => (
              <li key={i}>{l}</li>
            ))}
          </ul>
        </motion.div>
      )}

      {/* Key Highlights */}
      {project.features && (
        <motion.div custom={0.5} variants={fadeUp} className="mb-16">
          <h3 className="text-3xl font-semibold mb-4 text-blue-400">
            Key Results & Highlights:
          </h3>
          <ul className="list-disc clean-list text-gray-300 space-y-2 pl-6">
            {project.features.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </motion.div>
      )}

      {/* Documents & External Links */}
      <motion.div
        custom={0.7}
        variants={fadeUp}
        className="grid grid-cols-1 md:grid-cols-2 gap-10"
      >
        <div>
          <h4 className="text-2xl font-semibold mb-3 text-blue-400">
            Documents
          </h4>
          {project.docs?.length ? (
            project.docs.map((doc, i) => (
              <a
                key={i}
                href={doc.url}
                target="_blank"
                rel="noreferrer"
                className="block text-blue-400 hover:underline mb-1"
              >
                📄 {doc.name}
              </a>
            ))
          ) : (
            <p className="text-gray-500">No documents provided.</p>
          )}
        </div>

        <div>
          <h4 className="text-2xl font-semibold mb-3 text-blue-400">
            External Links
          </h4>
          {project.external?.length ? (
            project.external.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="block text-blue-400 hover:underline mb-1"
              >
                🔗 {link.name}
              </a>
            ))
          ) : (
            <p className="text-gray-500">No external links available.</p>
          )}
        </div>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage}
              alt="Full view"
              className="max-w-[90vw] max-h-[90vh] rounded-xl shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
