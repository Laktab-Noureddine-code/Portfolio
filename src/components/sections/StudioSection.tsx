import { motion } from "framer-motion";
import { Code, Laptop, Palette } from "lucide-react";

export default function StudioSection() {
  return (
    <motion.div
      className="mt-8 md:mt-0"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="p-6 sm:p-8 rounded-3xl bg-[#111111] backdrop-blur-sm text-white border border-[#333] shadow-2xl flex flex-col h-full">
        {/* Header */}
        <div className="text-white uppercase tracking-wider flex gap-2 items-center text-sm sm:text-base">
          <span className="bg-[#FF3B00] p-1.5 rounded-md">
            <Code color="#FFFFFF" size={20} />
          </span>
          My Studio
        </div>

        {/* Description */}
        <div className="mt-4 flex-grow">
          <p className="text-base sm:text-lg tracking-wide leading-relaxed mb-4 text-neutral-200">
            Welcome! This portfolio showcases my journey as a Full Stack
            Developer & DevOps Enthusiast. Discover my projects, skills, and
            passion for building scalable applications.
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
            <Laptop className="text-[#FF3B00] mb-2" size={24} />
            <h3 className="font-semibold text-white text-base mb-1">
              Web Development
            </h3>
            <p className="text-sm text-gray-400">
              Building high-performance websites with Spring Boot, Laravel,
              React, and Angular.
            </p>
          </div>

          {/* DevOps Card */}
          <div className="bg-[#1a1a1a] border border-[#333] rounded-2xl p-4 flex flex-col items-start">
            <Palette className="text-[#FF3B00] mb-2" size={24} />
            <h3 className="font-semibold text-white text-base mb-1">
              DevOps & Cloud
            </h3>
            <p className="text-sm text-gray-400">
              Automating deployments with Docker, Ansible, and cloud
              infrastructure.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
