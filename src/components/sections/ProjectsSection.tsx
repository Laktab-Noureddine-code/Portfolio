import { motion } from "framer-motion";
import { Link, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { projects } from "../../data/portfolio-data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ProjectsSection() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <section className="mb-6">
      <motion.h2
        id="projects"
        className="mb-2 scroll-mt-20 text-[1.7rem] font-[750] motion-reduce:transition-none"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Featured Projects
        <span className="bg-gradient-to-r from-[#a2facf] to-[#64acff] bg-clip-text text-transparent">
          .
        </span>
      </motion.h2>

      <motion.p
        className="text-neutral-300"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
      >
        Highlighting my latest work: full-stack development, AI integration, and
        DevOps automation.
      </motion.p>

      <div className="mt-6">
        {featuredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            className="mb-16 overflow-hidden duration-200 motion-reduce:transition-none"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            {/* Project Title */}
            <h3 className="mb-2 text-2xl font-bold tracking-[-0.03em]">
              {project.title}
            </h3>

            {/* Subtitle */}
            <p className="my-2 block text-sm font-normal leading-none text-neutral-500">
              {project.subtitle}
            </p>

            {/* Description */}
            <p className="mb-4 mt-2 text-neutral-400 md:w-3/4">
              {project.description}
            </p>

            {/* Project Image Slider */}
            <div className="mb-6 group relative">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                navigation={{
                  prevEl: `.swiper-button-prev-${project.id}`,
                  nextEl: `.swiper-button-next-${project.id}`,
                }}
                pagination={{
                  clickable: true,
                  dynamicBullets: true,
                }}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: true,
                  pauseOnMouseEnter: true,
                }}
                loop={project.images && project.images.length > 1}
                className="rounded-xl overflow-hidden"
              >
                {(project.images || [project.image]).map((img, imgIndex) => (
                  <SwiperSlide key={imgIndex}>
                    <img
                      alt={`${project.title} - ${project.subtitle} screenshot ${imgIndex + 1}`}
                      loading="lazy"
                      decoding="async"
                      className="h-full object-contain bg-neutral-800"
                      src={img}
                      width={1200}
                      height={675}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Custom Navigation Buttons */}
              {project.images && project.images.length > 1 && (
                <>
                  <button
                    className={`swiper-button-prev-${project.id} absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-neutral-900/90 backdrop-blur-sm shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-neutral-800 border border-neutral-700`}
                  >
                    <ChevronLeft className="w-5 h-5 text-white" />
                  </button>
                  <button
                    className={`swiper-button-next-${project.id} absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-neutral-900/90 backdrop-blur-sm shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-neutral-800 border border-neutral-700`}
                  >
                    <ChevronRight className="w-5 h-5 text-white" />
                  </button>
                </>
              )}
            </div>

            {/* Technology Badges */}
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <div
                  key={tech.name}
                  className="flex cursor-default items-center gap-2 rounded-md border border-neutral-800 bg-transparent px-2 py-1 font-mono text-sm font-medium text-neutral-400 duration-200 hover:border-neutral-700 hover:bg-white/5 motion-reduce:transition-none"
                >
                  <img
                    src={tech.icon}
                    alt={`${tech.name} technology icon`}
                    className="w-5 h-5"
                    width={20}
                    height={20}
                    loading="lazy"
                  />
                  {tech.name}
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="mt-6 flex flex-wrap gap-4">
              {project.live && project.live !== "#" && (
                <a
                  rel="noopener noreferrer"
                  className="group flex w-fit items-center rounded-md px-4 py-2 font-medium duration-200 motion-reduce:transition-none bg-blue-500 text-white hover:bg-blue-600"
                  href={project.live}
                  target="_blank"
                >
                  <Link className="mr-2 size-5 stroke-2" />
                  View Live
                  <ArrowRight className="ml-2 size-4 duration-200 group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0" />
                </a>
              )}

              {project.github && project.github !== "#" && (
                <a
                  rel="noopener noreferrer"
                  className="group flex w-fit items-center rounded-md px-4 py-2 font-medium duration-200 motion-reduce:transition-none bg-white/10 text-white hover:bg-white/15"
                  href={project.github}
                  target="_blank"
                >
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 size-5 fill-white"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.5103 0C5.59245 0 0 5.72914 0 12.8169C0 18.4825 3.58327 23.2783 8.55422 24.9757C9.17572 25.1033 9.40337 24.6999 9.40337 24.3606C9.40337 24.0634 9.38289 23.045 9.38289 21.9838C5.90281 22.7478 5.17812 20.4559 5.17812 20.4559C4.61885 18.9705 3.79018 18.5887 3.79018 18.5887C2.65116 17.8036 3.87315 17.8036 3.87315 17.8036C5.13663 17.8885 5.79961 19.1192 5.79961 19.1192C6.9179 21.0713 8.7199 20.5197 9.44486 20.1801C9.54831 19.3525 9.87993 18.7796 10.232 18.4614C7.45642 18.1642 4.53613 17.0609 4.53613 12.1377C4.53613 10.7372 5.03292 9.59137 5.8201 8.70022C5.6959 8.382 5.26083 7.06612 5.94455 5.30493C5.94455 5.30493 7.00087 4.96534 9.38263 6.62055C10.4023 6.33999 11.454 6.19727 12.5103 6.19607C13.5667 6.19607 14.6435 6.34477 15.6378 6.62055C18.0198 4.96534 19.0761 5.30493 19.0761 5.30493C19.7599 7.06612 19.3245 8.382 19.2003 8.70022C20.0083 9.59137 20.4846 10.7372 20.4846 12.1377C20.4846 17.0609 17.5643 18.1429 14.7679 18.4614C15.2237 18.8645 15.6171 19.6283 15.6171 20.8379C15.6171 22.5567 15.5966 23.9361 15.5966 24.3603C15.5966 24.6999 15.8245 25.1033 16.4457 24.9759C21.4167 23.278 24.9999 18.4825 24.9999 12.8169C25.0204 5.72914 19.4075 0 12.5103 0Z"
                    />
                  </svg>
                  View on Github
                  <ArrowRight className="ml-2 size-4 duration-200 group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0" />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* View More Link */}
      <motion.div
        className="-mt-10 mb-10 flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="mb-2 text-neutral-400">Want to see more?</p>
        <a
          className="group flex w-fit items-center rounded-md px-4 py-2 font-medium duration-200 motion-reduce:transition-none bg-white/10 text-white hover:bg-white/15"
          href={`https://github.com/Laktab-Noureddine-code?tab=repositories`}
          target="_blank"
        >
          More Projects
          <ArrowRight className="ml-2 size-4 duration-200 group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0" />
        </a>
      </motion.div>
    </section>
  );
}
