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
  "w-full aspect-[4/3] sm:aspect-[16/9] object-cover rounded-xl cursor-pointer hover:scale-[1.03] transition-transform duration-300 ease-in-out";

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
            className="text-blue-400 underline text-sm"
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

function TimelineItem({ item, onSelect }) {
  return (
    <div className="mb-10 ml-6">
      <div className="absolute w-2.5 h-2.5 rounded-full -left-[5px] mt-2 bg-gradient-to-r from-[var(--accent-from)] to-[var(--accent-to)]"></div>
      <div className="flex justify-between flex-wrap items-start gap-2">
        <div>
          <h4 className="text-base font-semibold leading-snug">{item.title}</h4>
          <p className="italic text-sm mt-0.5" style={{ color: "var(--text-muted)" }}>
            {item.org} • {item.location}
          </p>
        </div>
        <span className="text-xs mt-0.5 shrink-0" style={{ color: "var(--text-muted)" }}>
          {item.period}
        </span>
      </div>

      {item.points && item.points.length > 0 && (
        <ul className="mt-2 space-y-1.5 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
          {item.points.map((p, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: "var(--accent-from)" }}></span>
              {p}
            </li>
          ))}
        </ul>
      )}

      {(!item.points || item.points.length === 0) && item.description && (
        <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
          {item.description}
        </p>
      )}

      <MediaGrid items={item.media} onSelect={onSelect} />
    </div>
  );
}

function SectionHeading({ children }) {
  return (
    <h3
      className="text-xs font-semibold uppercase mb-8 tracking-widest"
      style={{ color: "var(--accent-from)" }}
    >
      {children}
    </h3>
  );
}

export default function About() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="max-w-4xl mx-auto py-24 px-6">

      {/* Header */}
      <motion.div className="mb-20" initial="hidden" animate="visible" variants={fadeUp}>
        <h2 className="text-4xl font-bold mb-4">About Me</h2>
        <p className="leading-relaxed text-base mb-5" style={{ color: "var(--text-muted)" }}>
          {ABOUT.summary}
        </p>
        <ul className="space-y-2">
          {ABOUT.bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm" style={{ color: "var(--text-muted)" }}>
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-gradient-to-r from-[var(--accent-from)] to-[var(--accent-to)]"></span>
              {b}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Divider */}
      <div className="h-px mb-20" style={{ background: "var(--border)" }}></div>

      {/* Experience */}
      <motion.div className="mt-0" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        <SectionHeading>Experience</SectionHeading>
        <div className="relative border-l ml-3" style={{ borderColor: "var(--border)" }}>
          {EXPERIENCE.map((exp, i) => (
            <TimelineItem key={exp.id} item={exp} index={i} onSelect={setSelected} />
          ))}
        </div>
      </motion.div>

      {/* Education */}
      <motion.div className="mt-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        <SectionHeading>Education</SectionHeading>
        <div className="relative border-l ml-3" style={{ borderColor: "var(--border)" }}>
          {EDUCATION.map((edu, i) => (
            <TimelineItem key={edu.id} item={edu} index={i} onSelect={setSelected} />
          ))}
        </div>
      </motion.div>

      {/* Hobbies */}
      <motion.div className="mt-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        <SectionHeading>Hobbies & Interests</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {HOBBIES_EXTENDED.map((h, i) => (
            <motion.div
              key={h.id}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="theme-card rounded-xl p-5"
            >
              <h4 className="text-sm font-semibold mb-1.5">{h.name}</h4>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                {h.description}
              </p>
              <MediaGrid items={h.media} onSelect={setSelected} />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Volunteering */}
      <motion.div className="mt-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        <SectionHeading>Volunteering & Social Work</SectionHeading>
        <div className="relative border-l ml-3" style={{ borderColor: "var(--border)" }}>
          {VOLUNTEERING.map((vol, i) => (
            <TimelineItem key={vol.id} item={vol} index={i} onSelect={setSelected} />
          ))}
        </div>
      </motion.div>

      {/* Lightbox */}
      {selected && selected.type === "image" && (
        <div
          onClick={() => setSelected(null)}
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 backdrop-blur-sm"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25 }}
            className="text-center"
          >
            <img
              src={selected.src}
              alt={selected.caption}
              className="max-w-[90vw] max-h-[82vh] rounded-xl shadow-2xl"
            />
            {selected.caption && (
              <p className="text-sm mt-3" style={{ color: "var(--text-muted)" }}>
                {selected.caption}
              </p>
            )}
          </motion.div>
        </div>
      )}
    </section>
  );
}
