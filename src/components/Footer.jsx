import React from "react";
import { SITE } from "../data";

export default function Footer() {
  return (
    <footer className="text-center text-sm text-gray-400 py-8">
      © {new Date().getFullYear()} {SITE.name} — {SITE.role} • {SITE.location}
    </footer>
  );
}
