import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ABOUT,
  EXPERIENCE,
  EDUCATION,
  HOBBIES_EXTENDED,
  VOLUNTEERING,
} from "../data";

export default function About() {
  const [selected, setSelected] = useState(null);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.15 },
    }),
  };

  return (
    <section className="max-w-6xl mx-auto py-20 px-6 text-white">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center gap-10 mb-20">
        <motion.div
          className="w-48 h-48 rounded-full overflow-hidden shadow-xl border-2 border-gray-700"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <img
            src={ABOUT.profileImage}
            alt="profile"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0.2}>
          <h2 className="text-4xl font-bold mb-3">About Me</h2>
          <p className="text-gray-300 mb-4 leading-relaxed">{ABOUT.summary}</p>
          <ul className="list-disc list-inside text-white-300 mt-2 space-y-1">
            {ABOUT.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Experience Timeline */}
      <motion.div className="mt-20" initial="hidden" whileInView="visible" variants={fadeUp}>
        <h3 className="text-2xl font-semibold mb-10 text-blue-400">Experience</h3>
        <div className="relative border-l border-gray-700 ml-6">
          {EXPERIENCE.map((exp, i) => (
            <motion.div key={exp.id} custom={i} variants={fadeUp} className="mb-10 ml-6">
              <div className="absolute w-3 h-3 bg-gradient-to-r from-[var(--accent-from)] to-[var(--accent-to)] rounded-full -left-1.5 mt-1.5"></div>
              <div className="flex justify-between flex-wrap items-center">
                <div>
                  <h4 className="text-lg font-semibold">{exp.title}</h4>
                  <p className="text-gray-400 italic">
                    {exp.org} • {exp.location}
                  </p>
                </div>
                <span className="text-sm text-gray-500">{exp.period}</span>
              </div>
              {exp.points && exp.points.length > 0 && (
                <ul className="list-disc list-inside text-white-300 mt-2 space-y-1">
                  {exp.points.map((p, idx) => (
                    <li key={idx}>{p}</li>
                  ))}
                </ul>
              )}
              {exp.media && exp.media.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
                  {exp.media.map((m, idx) =>
                    m.type === "image" ? (
                      <img
                        key={idx}
                        src={m.src}
                        alt={m.caption}
                        className="rounded-md cursor-pointer hover:scale-[1.03] transition"
                        onClick={() => setSelected(m)}
                      />
                    ) : (
                      <a
                        key={idx}
                        href={m.url}
                        className="text-blue-400 underline"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {m.caption}
                      </a>
                    )
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Education Timeline */}
      <motion.div className="mt-20" initial="hidden" whileInView="visible" variants={fadeUp}>
        <h3 className="text-2xl font-semibold mb-10 text-blue-400">Education</h3>
        <div className="relative border-l border-gray-700 ml-6">
          {EDUCATION.map((edu, i) => (
            <motion.div key={edu.id} custom={i} variants={fadeUp} className="mb-10 ml-6">
              <div className="absolute w-3 h-3 bg-gradient-to-r from-[var(--accent-from)] to-[var(--accent-to)] rounded-full -left-1.5 mt-1.5"></div>
              <div className="flex justify-between items-center flex-wrap">
                <div>
                  <h4 className="text-lg font-semibold">{edu.title}</h4>
                  <p className="text-gray-400 italic">
                    {edu.org} • {edu.location}
                  </p>
                </div>
                <span className="text-sm text-gray-500">{edu.period}</span>
              </div>
              {edu.points && edu.points.length > 0 && (
                <ul className="list-disc list-inside text-white-300 mt-2 space-y-1">
                  {edu.points.map((p, idx) => (
                    <li key={idx}>{p}</li>
                  ))}
                </ul>
              )}
              {edu.media && edu.media.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
                  {edu.media.map((m, idx) =>
                    m.type === "image" ? (
                      <img
                        key={idx}
                        src={m.src}
                        alt={m.caption}
                        className="rounded-md cursor-pointer hover:scale-[1.03] transition"
                        onClick={() => setSelected(m)}
                      />
                    ) : (
                      <a
                        key={idx}
                        href={m.url}
                        className="text-blue-400 underline"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {m.caption}
                      </a>
                    )
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Hobbies & Interests */}
      <motion.div className="mt-20" initial="hidden" whileInView="visible" variants={fadeUp}>
        <h3 className="text-2xl font-semibold mb-10 text-blue-400">Hobbies & Interests</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {HOBBIES_EXTENDED.map((h, i) => (
            <motion.div key={h.id} custom={i} variants={fadeUp} className="p-6 bg-gray-800 rounded-xl shadow-lg">
              <h4 className="text-xl font-semibold mb-2">{h.name}</h4>
              <p className="text-gray-300 mb-3">{h.description}</p>
              {h.media && h.media.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {h.media.map((m, idx) =>
                    m.type === "image" ? (
                      <img
                        key={idx}
                        src={m.src}
                        alt={m.caption}
                        className="rounded-md cursor-pointer hover:scale-[1.03] transition"
                        onClick={() => setSelected(m)}
                      />
                    ) : (
                      <a
                        key={idx}
                        href={m.url}
                        className="text-blue-400 underline"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {m.caption}
                      </a>
                    )
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Volunteering / Social Work */}
      <motion.div className="mt-20" initial="hidden" whileInView="visible" variants={fadeUp}>
        <h3 className="text-2xl font-semibold mb-10 text-blue-400">Volunteering & Social Work</h3>
        <div className="relative border-l border-gray-700 ml-6">
          {VOLUNTEERING.map((vol, i) => (
            <motion.div key={vol.id} custom={i} variants={fadeUp} className="mb-10 ml-6">
              <div className="absolute w-3 h-3 bg-gradient-to-r from-[var(--accent-from)] to-[var(--accent-to)] rounded-full -left-1.5 mt-1.5"></div>
              <div className="flex justify-between items-center flex-wrap">
                <div>
                  <h4 className="text-lg font-semibold">{vol.title}</h4>
                  <p className="text-gray-400 italic">{vol.org} • {vol.location}</p>
                </div>
                <span className="text-sm text-gray-500">{vol.period}</span>
              </div>

              {/* Render points or description */}
              {vol.points && vol.points.length > 0 ? (
                <ul className="list-disc list-inside text-white-300 mt-2 space-y-1">
                  {vol.points.map((p, idx) => (
                    <li key={idx}>{p}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-300 mt-2">{vol.description}</p>
              )}

              {/* Media */}
              {vol.media && vol.media.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
                  {vol.media.map((m, idx) =>
                    m.type === "image" ? (
                      <img
                        key={idx}
                        src={m.src}
                        alt={m.caption}
                        className="rounded-md cursor-pointer hover:scale-[1.03] transition"
                        onClick={() => setSelected(m)}
                      />
                    ) : (
                      <a
                        key={idx}
                        href={m.url}
                        className="text-blue-400 underline"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {m.caption}
                      </a>
                    )
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Lightbox Viewer */}
      {selected && selected.type === "image" && (
        <div
          onClick={() => setSelected(null)}
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={selected.src}
              alt={selected.caption}
              className="max-w-[90vw] max-h-[85vh] rounded-xl shadow-2xl"
            />
            <p className="text-gray-300 text-center mt-4">{selected.caption}</p>
          </motion.div>
        </div>
      )}
    </section>
  );
}
