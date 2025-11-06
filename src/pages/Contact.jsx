import React from "react";
import { SITE } from "../data";

export default function Contact() {
  return (
    <section className="max-w-3xl mx-auto py-20 px-8 text-white">
      <h2 className="text-3xl font-semibold mb-4">Contact</h2>
      <p className="text-gray-300 mb-6">Email: <a className="text-blue-400" href={`mailto:${SITE.email}`}>{SITE.email}</a></p>
      {/*<p className="text-gray-300">I’m open to collaboration, internships, and research discussions.</p>*/}
    </section>
  );
}
