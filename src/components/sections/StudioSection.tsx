"use client";

import { m } from "framer-motion";
import { Code, Database, Laptop } from "lucide-react";

export default function StudioSection() {
  return (
    <m.section
      className="mt-8 md:mt-0"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      aria-labelledby="studio-heading"
    >
      <div className="p-6 sm:p-8 rounded-3xl bg-surface backdrop-blur-sm text-foreground border border-border shadow-2xl flex flex-col h-full">
        {/* Header */}
        <h2
          id="studio-heading"
          className="text-foreground uppercase tracking-wider flex gap-2 items-center text-sm sm:text-base font-medium"
        >
          <span className="bg-accent text-accent-foreground p-1.5 rounded-md">
            <Code size={20} />
          </span>
          My Studio
        </h2>

        {/* Description */}
        <div className="mt-4 flex-grow">
          <p className="text-base sm:text-lg tracking-wide leading-relaxed mb-4 text-body">
            Welcome! This portfolio showcases my journey as a Full Stack
            Developer. Discover my projects, skills, and passion for building
            scalable applications.
          </p>
        </div>

        {/* Download CV Button */}
        <a
          href="/NOUREDDINE_LAKTAB_CV.pdf"
          download
          className="text-sm mt-3 bg-surface-2 border border-border px-5 py-2 rounded-full hover:bg-surface-3 transition-all duration-300 w-fit text-foreground"
        >
          Download CV
        </a>

        {/* Service Cards */}
        <m.div
          className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          {/* Web Development Card */}
          <div className="bg-surface-2 border border-border rounded-2xl p-4 flex flex-col items-start">
            <Laptop className="text-accent mb-2" size={24} />
            <h3 className="font-semibold text-foreground text-base mb-1">
              Web Development
            </h3>
            <p className="text-sm text-muted">
              Building high-performance websites with Spring Boot, Laravel,
              React, and Angular.
            </p>
          </div>

          {/* Database & API Card */}
          <div className="bg-surface-2 border border-border rounded-2xl p-4 flex flex-col items-start">
            <Database className="text-accent mb-2" size={24} />
            <h3 className="font-semibold text-foreground text-base mb-1">
              Database & API Design
            </h3>
            <p className="text-sm text-muted">
              Designing efficient database schemas and RESTful APIs for scalable
              applications.
            </p>
          </div>
        </m.div>
      </div>
    </m.section>
  );
}
