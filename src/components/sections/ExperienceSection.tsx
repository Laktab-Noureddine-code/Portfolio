"use client";

import { m } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { experience, education } from "../../data/portfolio-data";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  scaleUp,
  viewportSettings,
} from "../../lib/animations";

// Timeline item component
function TimelineItem({
  item,
  index,
}: {
  item: (typeof experience)[0];
  index: number;
}) {
  const isEven = index % 2 === 0;

  return (
    <m.div
      variants={isEven ? fadeInRight : fadeInLeft}
      className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
        isEven ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Timeline Dot */}
      <m.div
        className="absolute left-0 md:left-1/2 w-4 h-4 bg-emerald-500 rounded-full transform -translate-x-1/2 border-4 border-background shadow-sm z-10"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1, type: "spring", stiffness: 500 }}
        whileHover={{ scale: 1.5 }}
      />

      {/* Content Card */}
      <div
        className={`ml-8 md:ml-0 md:w-1/2 ${isEven ? "md:pr-12" : "md:pl-12"}`}
      >
        <m.div
          className="bg-surface-2 rounded-2xl p-6 shadow-sm border border-border"
          whileHover={{ scale: 1.02, y: -5 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-start justify-between mb-3">
            <div className="flex flex-wrap gap-2">
              <m.span
                className="text-xs font-medium text-emerald-700 dark:text-emerald-400 bg-emerald-500/15 px-2 py-1 rounded-full"
                whileHover={{ scale: 1.1 }}
              >
                {item.period}
              </m.span>
              {item.current && (
                <m.span
                  className="text-xs font-medium text-blue-700 dark:text-blue-400 bg-blue-500/15 px-2 py-1 rounded-full"
                  animate={{
                    boxShadow: [
                      "0 0 0 0 rgba(59, 130, 246, 0.4)",
                      "0 0 0 8px rgba(59, 130, 246, 0)",
                    ],
                  }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  Current
                </m.span>
              )}
            </div>
            <m.div whileHover={{ rotate: 15 }}>
              <Briefcase size={18} className="text-subtle" />
            </m.div>
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-1">
            {item.title}
          </h3>
          <p className="text-sm text-emerald-700 dark:text-emerald-400 mb-3">
            {item.subtitle}
          </p>
          <p className="text-muted text-sm">{item.description}</p>
        </m.div>
      </div>

      {/* Empty space for alternating layout */}
      <div className="hidden md:block md:w-1/2" />
    </m.div>
  );
}

// Education card component
function EducationCard({
  edu,
  index,
}: {
  edu: (typeof education)[0];
  index: number;
}) {
  return (
    <m.div
      variants={scaleUp}
      custom={index}
      whileHover={{ scale: 1.02, y: -5 }}
      transition={{ duration: 0.3 }}
      className="bg-surface-2 rounded-2xl p-6 shadow-sm border border-border"
    >
      <div>
        <div className="flex items-start justify-between mb-3">
          <m.span
            className="text-xs font-medium text-emerald-700 dark:text-emerald-400 bg-emerald-500/15 px-2 py-1 rounded-full"
            whileHover={{ scale: 1.1 }}
          >
            {edu.period}
          </m.span>
          {edu.current && (
            <m.span
              className="text-xs font-medium text-blue-700 dark:text-blue-400 bg-blue-500/15 px-2 py-1 rounded-full"
              animate={{
                boxShadow: [
                  "0 0 0 0 rgba(59, 130, 246, 0.4)",
                  "0 0 0 8px rgba(59, 130, 246, 0)",
                ],
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              Current
            </m.span>
          )}
        </div>
        <h4 className="font-semibold text-foreground mb-1">{edu.degree}</h4>
        <p className="text-sm text-emerald-700 dark:text-emerald-400 mb-2">
          {edu.institution}
        </p>
        <p className="text-muted text-sm">{edu.description}</p>
      </div>
    </m.div>
  );
}

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={staggerContainer}
        >
          {/* Section Header */}
          <m.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              My <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-muted">
              A timeline of my professional experiences and milestones
            </p>
          </m.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <m.div
              className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border-strong transform md:-translate-x-1/2"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              style={{ originY: 0 }}
            />

            {experience.map((item, index) => (
              <TimelineItem key={item.id} item={item} index={index} />
            ))}
          </div>

          {/* Education */}
          <m.div variants={fadeInUp} className="mt-16">
            <m.h3
              className="text-xl font-semibold text-foreground mb-8 text-center flex items-center justify-center gap-2"
              variants={fadeInUp}
            >
              <m.span
                whileHover={{ rotate: 15, scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <GraduationCap
                  size={24}
                  className="text-emerald-600 dark:text-emerald-500"
                />
              </m.span>
              Education
            </m.h3>
            <m.div
              className="grid md:grid-cols-2 gap-6"
              variants={staggerContainer}
            >
              {education.map((edu, index) => (
                <EducationCard key={edu.id} edu={edu} index={index} />
              ))}
            </m.div>
          </m.div>
        </m.div>
      </div>
    </section>
  );
}
