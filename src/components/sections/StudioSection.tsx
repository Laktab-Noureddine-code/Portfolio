import { motion } from "framer-motion";
import { Code, Database, Laptop } from "lucide-react";
import { profileData } from "../../data/portfolio-data";

export default function StudioSection() {
  return (
    <motion.section
      className="mt-8 md:mt-0"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      aria-labelledby="studio-heading"
    >
      <div className="p-6 sm:p-8 rounded-3xl bg-[#111111] backdrop-blur-sm text-white border border-[#333] shadow-2xl flex flex-col h-full">
        {/* Header */}
        <h2
          id="studio-heading"
          className="text-white uppercase tracking-wider flex gap-2 items-center text-sm sm:text-base font-medium"
        >
          <span
            style={{ backgroundColor: profileData.accentColor }}
            className="p-1.5 rounded-md"
          >
            <Code color="#FFFFFF" size={20} />
          </span>
          My Studio
        </h2>

        {/* Description */}
        <div className="mt-4 flex-grow">
          <p className="text-base sm:text-lg tracking-wide leading-relaxed mb-4 text-neutral-200">
            Welcome! This portfolio showcases my journey as a Full Stack
            Developer. Discover my projects, skills, and passion for building
            scalable applications.
          </p>
        </div>

        {/* Download CV Button */}
        <a
          href="/CV_LAKTAB.pdf"
          download
          className="text-sm mt-3 bg-[#1a1a1a] border border-[#333] px-5 py-2 rounded-full hover:bg-[#111111A0] transition-all duration-300 w-fit text-white"
        >
          Download CV
        </a>

        {/* Service Cards */}
        <motion.div
          className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          {/* Web Development Card */}
          <div className="bg-[#1a1a1a] border border-[#333] rounded-2xl p-4 flex flex-col items-start">
            <Laptop
              style={{ color: profileData.accentColor }}
              className="mb-2"
              size={24}
            />
            <h3 className="font-semibold text-white text-base mb-1">
              Web Development
            </h3>
            <p className="text-sm text-gray-400">
              Building high-performance websites with Spring Boot, Laravel,
              React, and Angular.
            </p>
          </div>

          {/* Database & API Card */}
          <div className="bg-[#1a1a1a] border border-[#333] rounded-2xl p-4 flex flex-col items-start">
            <Database
              style={{ color: profileData.accentColor }}
              className="mb-2"
              size={24}
            />
            <h3 className="font-semibold text-white text-base mb-1">
              Database & API Design
            </h3>
            <p className="text-sm text-gray-400">
              Designing efficient database schemas and RESTful APIs for scalable
              applications.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
