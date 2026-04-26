import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ABOUT,
  EXPERIENCE,
  EDUCATION,
  HOBBIES_EXTENDED,
  VOLUNTEERING,
} from "../data";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.15 },
  }),
};

const imageClasses =
  "w-full aspect-[4/3] sm:aspect-[16/9] object-cover rounded-xl shadow-md hover:shadow-xl cursor-pointer hover:scale-[1.03] transition-transform duration-300 ease-in-out";

function MediaGrid({ items, onSelect }) {
  if (!items || items.length === 0) return null;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3">
      {items.map((m, idx) => {
        if (m.type === "image") {
          return (
            <img
              key={idx}
              src={m.src}
              alt={m.caption}
              className={imageClasses}
              onClick={() => onSelect(m)}
            />
          );
        }
        return (
          <a
            key={idx}
            href={m.url}
            className="text-blue-400 underline"
            target="_blank"
            rel="noreferrer"
          >
            {m.caption}
          </a>
        );
      })}
    </div>
  );
}

function TimelineItem({ item, index, onSelect }) {
  return (
    <div className="mb-10 ml-6">
      <div className="absolute w-3 h-3 bg-gradient-to-r from-[var(--accent-from)] to-[var(--accent-to)] rounded-full -left-1.5 mt-1.5"></div>
      <div className="flex justify-between flex-wrap items-center">
        <div>
          <h4 className="text-lg font-semibold">{item.title}</h4>
          <p className="text-gray-400 italic">
            {item.org} • {item.location}
          </p>
        </div>
        <span className="text-sm text-gray-500">{item.period}</span>
      </div>

      {item.points && item.points.length > 0 && (
        <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
          {item.points.map((p, idx) => (
            <li key={idx}>{p}</li>
          ))}
        </ul>
      )}

      {(!item.points || item.points.length === 0) && item.description && (
        <p className="text-gray-300 mt-2">{item.description}</p>
      )}

      <MediaGrid items={item.media} onSelect={onSelect} />
    </div>
  );
}

export default function About() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="max-w-6xl mx-auto py-20 px-6 text-white">

      {/* ---------- Header ---------- */}
      <motion.div
        className="mb-20"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <h2 className="text-4xl font-bold mb-3">About Me</h2>
        <p className="text-gray-300 mb-4 leading-relaxed">{ABOUT.summary}</p>
        <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
          {ABOUT.bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </motion.div>

      {/* ---------- Experience Timeline ---------- */}
      <motion.div
        className="mt-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <h3 className="text-2xl font-semibold mb-10 text-blue-400">Experience</h3>
        <div className="relative border-l border-gray-700 ml-6">
          {EXPERIENCE.map((exp, i) => (
            <TimelineItem key={exp.id} item={exp} index={i} onSelect={setSelected} />
          ))}
        </div>
      </motion.div>

      {/* ---------- Education Timeline ---------- */}
      <motion.div
        className="mt-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <h3 className="text-2xl font-semibold mb-10 text-blue-400">Education</h3>
        <div className="relative border-l border-gray-700 ml-6">
          {EDUCATION.map((edu, i) => (
            <TimelineItem key={edu.id} item={edu} index={i} onSelect={setSelected} />
          ))}
        </div>
      </motion.div>

      {/* ---------- Hobbies & Interests ---------- */}
      <motion.div
        className="mt-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <h3 className="text-2xl font-semibold mb-10 text-blue-400">Hobbies & Interests</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {HOBBIES_EXTENDED.map((h, i) => (
            <motion.div
              key={h.id}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-6 bg-gray-800 rounded-xl shadow-lg"
            >
              <h4 className="text-xl font-semibold mb-2">{h.name}</h4>
              <p className="text-gray-300 mb-3">{h.description}</p>
              <MediaGrid items={h.media} onSelect={setSelected} />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ---------- Volunteering ---------- */}
      <motion.div
        className="mt-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <h3 className="text-2xl font-semibold mb-10 text-blue-400">
          Volunteering & Social Work
        </h3>
        <div className="relative border-l border-gray-700 ml-6">
          {VOLUNTEERING.map((vol, i) => (
            <TimelineItem key={vol.id} item={vol} index={i} onSelect={setSelected} />
          ))}
        </div>
      </motion.div>

      {/* ---------- Lightbox ---------- */}
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