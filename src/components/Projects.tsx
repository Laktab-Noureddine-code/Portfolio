import { projects, profileData } from "@/data/portfolio-data";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-50 dark:bg-[#0a0a0a] py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-violet-400 text-sm font-medium tracking-widest uppercase">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            Highlighting my latest work — AI research, security innovation, and full-stack development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-white dark:bg-[#111] rounded-3xl overflow-hidden border border-gray-200 dark:border-white/5 shadow-sm dark:shadow-none transition-all duration-500 hover:border-violet-500/50 hover:shadow-xl dark:hover:shadow-violet-500/10 hover:scale-[1.02]"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 to-purple-600/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-violet-500/30 to-purple-600/30 backdrop-blur-xl border border-white/10 flex items-center justify-center">
                    <span className="text-5xl">
                      {project.id === 1 ? "🌐" : "📦"}
                    </span>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-white/90 dark:bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 bg-gray-900 dark:bg-white text-white dark:text-black px-6 py-3 rounded-full font-medium hover:bg-violet-600 dark:hover:bg-violet-500 dark:hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0"
                  >
                    <Github size={18} />
                    View Code
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center gap-2 bg-violet-600 text-white px-6 py-3 rounded-full font-medium hover:bg-violet-700 transition-all transform translate-y-4 group-hover:translate-y-0 delay-75"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-violet-400 text-sm font-medium">
                      {project.subtitle}
                    </span>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-1 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <ArrowUpRight className="text-gray-500 group-hover:text-violet-400 transition-colors" />
                </div>

                <p className="text-gray-500 dark:text-gray-400 mt-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-violet-50 dark:bg-violet-500/10 text-violet-600 dark:text-violet-400 text-sm rounded-full border border-violet-200 dark:border-violet-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <a
            href={profileData.github}
            className="inline-flex items-center gap-2 text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 font-medium group"
          >
            View all projects on GitHub
            <ArrowUpRight
              size={18}
              className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
