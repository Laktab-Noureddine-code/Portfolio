import { motion } from "framer-motion";
import { Github, ExternalLink, Code2, Folder } from "lucide-react";
import { projects, profileData } from "../../data/portfolio-data";
import {
  fadeInUp,
  staggerContainer,
  scaleUp,
  viewportSettings,
} from "../../lib/animations";

// Project card component
function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  return (
    <motion.div
      variants={scaleUp}
      custom={index}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100"
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
    >
      {/* Project Image Placeholder */}
      <div className="relative h-48 bg-linear-to-br from-emerald-100 to-emerald-50 overflow-hidden">
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            animate={{
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Folder size={48} className="text-emerald-300" />
          </motion.div>
        </motion.div>

        {/* Hover Overlay */}
        <motion.div
          className="absolute inset-0 bg-dark/80 flex items-center justify-center gap-4"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {project.github !== "#" && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-dark hover:bg-emerald-500 hover:text-white transition-colors"
              initial={{ scale: 0, y: 20 }}
              whileHover={{ scale: 1.1 }}
              whileInView={{ scale: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Github size={20} />
            </motion.a>
          )}
          {project.live !== "#" && (
            <motion.a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-dark hover:bg-emerald-500 hover:text-white transition-colors"
              initial={{ scale: 0, y: 20 }}
              whileHover={{ scale: 1.1 }}
              whileInView={{ scale: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <ExternalLink size={20} />
            </motion.a>
          )}
        </motion.div>

        {/* Featured Badge */}
        {project.featured && (
          <motion.div
            className="absolute top-4 right-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="px-3 py-1 bg-emerald-500 text-white text-xs font-medium rounded-full">
              Featured
            </span>
          </motion.div>
        )}
      </div>

      {/* Project Info */}
      <div className="p-6">
        <motion.h3
          className="text-xl font-semibold text-dark mb-1 group-hover:text-emerald-600 transition-colors"
          layoutId={`project-title-${project.id}`}
        >
          {project.title}
        </motion.h3>
        <p className="text-sm text-emerald-600 mb-3">{project.subtitle}</p>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Tech Tags */}
        <motion.div
          className="flex flex-wrap gap-2"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {project.tech.map((tech, techIndex) => (
            <motion.span
              key={tech}
              variants={fadeInUp}
              custom={techIndex}
              whileHover={{ scale: 1.1, y: -2 }}
              className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-medium rounded-full border border-emerald-100 cursor-default"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="py-20 bg-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={staggerContainer}
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <motion.div
              className="inline-flex items-center gap-2 mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <Code2 size={32} className="text-emerald-500" />
            </motion.div>
            <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A selection of projects that showcase my skills in full-stack
              development and DevOps
            </p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
          >
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>

          {/* View All Projects Link */}
          <motion.div variants={fadeInUp} className="text-center mt-12">
            <motion.a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium transition-colors group"
              whileHover={{ x: 5 }}
            >
              View all projects on GitHub
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ExternalLink size={18} />
              </motion.span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
