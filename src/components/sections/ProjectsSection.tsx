"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Link,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Eye,
  X,
  ImageIcon,
  Monitor,
  Wifi,
  Battery,
  Signal,
} from "lucide-react";
import { projects } from "../../data/portfolio-data";

type LightboxState = {
  isOpen: boolean;
  images: string[];
  currentIndex: number;
};

type Tech = {
  name: string;
  icon: string;
  link?: string;
};

type Project = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  tech: Tech[];
  image: string;
  images?: string[];
  logo?: string;
  github?: string;
  live?: string;
  featured?: boolean;
  isPrivate?: boolean;
  isMobile?: boolean;
};

export default function ProjectsSection() {
  const featuredProjects = (projects as Project[]).filter((p) => p.featured);
  const [lightbox, setLightbox] = useState<LightboxState>({
    isOpen: false,
    images: [],
    currentIndex: 0,
  });

  const openLightbox = (images: string[], index: number) => {
    setLightbox({ isOpen: true, images, currentIndex: index });
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightbox({ ...lightbox, isOpen: false });
    document.body.style.overflow = "auto";
  };

  return (
    <section className="mb-6 relative">
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

      <div className="mt-12">
        {featuredProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            openLightbox={openLightbox}
          />
        ))}
      </div>

      {/* View More Link */}
      <motion.div
        className="mb-10 flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="mb-2 text-neutral-400">Want to see more?</p>
        <a
          className="group flex w-fit items-center rounded-md px-4 py-2 font-medium duration-200 motion-reduce:transition-none bg-white/10 text-white hover:bg-white/15"
          href={`https://github.com/Laktab-Noureddine-code?tab=repositories`}
          target="_blank"
          rel="noopener noreferrer"
        >
          More Projects
          <ArrowRight className="ml-2 size-4 duration-200 group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0" />
        </a>
      </motion.div>

      <AnimatePresence>
        {lightbox.isOpen && (
          <Lightbox state={lightbox} onClose={closeLightbox} />
        )}
      </AnimatePresence>
    </section>
  );
}

const ProjectCard = ({
  project,
  index,
  openLightbox,
}: {
  project: Project;
  index: number;
  openLightbox: (images: string[], index: number) => void;
}) => {
  const images = project.images || [project.image];
  const [activeImgIndex, setActiveImgIndex] = useState(0);

  return (
    <motion.div
      className="mb-24 flex flex-col xl:flex-row gap-8 lg:gap-14 items-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      {/* Left Column: Image Gallery */}
      <div className="w-full xl:w-[55%] flex flex-col gap-4">
        {/* Main Image Container */}
        <div
          className={`relative group overflow-hidden bg-neutral-900 shadow-2xl cursor-pointer flex flex-col ${
            project.isMobile
              ? "rounded-[2.5rem] w-full max-w-[280px] sm:max-w-[320px] mx-auto border-[8px] border-neutral-800 aspect-[9/19]"
              : "rounded-xl w-full border border-neutral-800"
          }`}
          onClick={() => openLightbox(images, activeImgIndex)}
        >
          {/* Top Bar simulating a device */}
          <div
            className={`flex items-center justify-between px-4 bg-neutral-900 border-neutral-800 ${project.isMobile ? "py-3 pb-2 z-10" : "py-3 border-b"}`}
          >
            {project.isMobile ? (
              <>
                <div className="flex-1 flex justify-start pl-1">
                  <span className="text-[11px] font-semibold text-neutral-300">
                    9:41
                  </span>
                </div>
                {/* Dynamic Island Mockup */}
                <div className="w-20 sm:w-24 h-6 bg-black rounded-full flex items-center justify-end px-2 border border-neutral-800 shadow-inner">
                  <div className="w-2 h-2 rounded-full bg-neutral-800/80 mr-1.5 opacity-60"></div>
                </div>
                <div className="flex-1 flex items-center justify-end gap-1.5 pr-1 text-neutral-400">
                  <Signal className="w-3.5 h-3.5" />
                  <Wifi className="w-3.5 h-3.5" />
                  <Battery className="w-4 h-4" />
                </div>
              </>
            ) : (
              <>
                <div className="flex-1 flex gap-2 justify-start items-center">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="text-xs text-neutral-500 font-mono tracking-wider bg-neutral-950 px-4 py-1.5 rounded-full flex-shrink-0">
                  preview
                </div>
                <div className="flex-1 flex items-center justify-end">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-neutral-400 bg-neutral-800/80 px-2.5 py-1.5 rounded-md">
                    <Monitor className="w-3.5 h-3.5" /> Web
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Active Image */}
          <div
            className={`relative w-full flex-grow flex items-center justify-center bg-neutral-950 p-0 overflow-hidden ${project.isMobile ? "aspect-[9/16] max-h-[70vh]" : "aspect-video"}`}
          >
            <Image
              src={images[activeImgIndex]}
              alt={`${project.title} screenshot ${activeImgIndex + 1}`}
              fill
              sizes="(max-width: 1280px) 100vw, 55vw"
              className={`transition-transform duration-500 group-hover:scale-[1.02] ${
                project.isMobile ? "object-cover" : "object-contain sm:p-2"
              }`}
            />
            {/* Hover Overlay: Click to view */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center z-10 backdrop-blur-sm">
              <Eye className="w-12 h-12 text-white mb-3 drop-shadow-lg" />
              <span className="bg-black/80 text-white font-medium tracking-wide px-4 py-2 rounded-lg border border-neutral-700/50">
                Click to view
              </span>
            </div>

            {/* Photos Badge */}
            {images.length > 1 && (
              <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-medium text-neutral-300 border border-neutral-700 shadow-xl pointer-events-none">
                <ImageIcon className="w-3.5 h-3.5" />
                {images.length} photos
              </div>
            )}
          </div>
        </div>

        {/* Thumbnails Row */}
        {images.length > 1 && (
          <div className="flex gap-3 overflow-x-auto pb-4 pt-1 snap-x scrollbar-thin scrollbar-thumb-neutral-700 scrollbar-track-transparent">
            {images.map((img: string, idx: number) => (
              <button
                key={idx}
                onClick={() => setActiveImgIndex(idx)}
                className={`relative flex-shrink-0 w-28 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 snap-center ${
                  activeImgIndex === idx
                    ? "border-blue-500 opacity-100 shadow-[0_0_15px_rgba(59,130,246,0.3)] scale-105"
                    : "border-neutral-800 opacity-50 hover:opacity-100 hover:border-neutral-600"
                }`}
              >
                <Image
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  fill
                  sizes="112px"
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Right Column: Info */}
      <div className="w-full xl:w-[45%] flex flex-col">
        <div className="flex items-start gap-4 mb-3">
          {project.logo && (
            <div className="flex-shrink-0 mt-1 p-2 bg-neutral-900/80 rounded-xl border border-neutral-800 shadow-sm">
              <Image
                src={project.logo}
                alt={`${project.title} logo`}
                width={40}
                height={40}
                className="w-10 h-10 object-contain"
                loading="lazy"
              />
            </div>
          )}
          <h3 className="text-3xl lg:text-4xl font-bold tracking-tight leading-tight">
            {project.title}
          </h3>
        </div>

        {/* Subtitle */}
        <p className="text-blue-400 font-mono text-sm mb-6 mt-1">
          {project.subtitle}
        </p>

        <p className="text-neutral-400 leading-relaxed text-base lg:text-lg mb-8 max-w-2xl">
          {project.description}
        </p>

        {/* tech stack */}
        <div className="mb-10">
          <h4 className="text-xs font-bold tracking-widest text-neutral-500 uppercase mb-4">
            Technologies
          </h4>
          <div className="flex flex-wrap gap-2.5">
            {project.tech.map((tech) => {
              const TechWrapper = tech.link ? "a" : "div";
              const linkProps = tech.link
                ? {
                    href: tech.link,
                    target: "_blank",
                    rel: "noopener noreferrer",
                  }
                : {};
              return (
                <TechWrapper
                  key={tech.name}
                  {...linkProps}
                  className={`flex items-center gap-2 rounded-md border border-neutral-800 bg-neutral-900/60 px-3 py-1.5 text-sm font-medium text-neutral-300 transition-colors hover:bg-neutral-800 ${tech.link ? "cursor-pointer hover:border-neutral-600 shadow-sm hover:text-white" : ""}`}
                >
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    width={16}
                    height={16}
                    className="w-4 h-4 opacity-80"
                  />
                  {tech.name}
                </TechWrapper>
              );
            })}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 mt-auto">
          {project.isPrivate ? (
            <div className="flex items-center justify-center rounded-lg px-5 py-2.5 font-medium bg-neutral-900/40 text-neutral-500 border border-neutral-800/50 cursor-not-allowed select-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 w-4 h-4 opacity-70"
              >
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              Confidential Project (Source Unavailable)
            </div>
          ) : (
            <>
              {project.live && project.live !== "#" && (
                <a
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center rounded-lg px-5 py-2.5 font-medium transition-all duration-300 bg-neutral-100 text-neutral-900 hover:bg-white shadow-lg"
                  href={project.live}
                  target="_blank"
                >
                  <Link className="mr-2 w-5 h-5 stroke-2" />
                  Visit Site
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              )}

              {project.github && project.github !== "#" && (
                <a
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center rounded-lg px-5 py-2.5 font-medium transition-all duration-300 bg-neutral-900 text-white hover:bg-neutral-800 border border-neutral-700"
                  href={project.github}
                  target="_blank"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 w-5 h-5 fill-white"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.5103 0C5.59245 0 0 5.72914 0 12.8169C0 18.4825 3.58327 23.2783 8.55422 24.9757C9.17572 25.1033 9.40337 24.6999 9.40337 24.3606C9.40337 24.0634 9.38289 23.045 9.38289 21.9838C5.90281 22.7478 5.17812 20.4559 5.17812 20.4559C4.61885 18.9705 3.79018 18.5887 3.79018 18.5887C2.65116 17.8036 3.87315 17.8036 3.87315 17.8036C5.13663 17.8885 5.79961 19.1192 5.79961 19.1192C6.9179 21.0713 8.7199 20.5197 9.44486 20.1801C9.54831 19.3525 9.87993 18.7796 10.232 18.4614C7.45642 18.1642 4.53613 17.0609 4.53613 12.1377C4.53613 10.7372 5.03292 9.59137 5.8201 8.70022C5.6959 8.382 5.26083 7.06612 5.94455 5.30493C5.94455 5.30493 7.00087 4.96534 9.38263 6.62055C10.4023 6.33999 11.454 6.19727 12.5103 6.19607C13.5667 6.19607 14.6435 6.34477 15.6378 6.62055C18.0198 4.96534 19.0761 5.30493 19.0761 5.30493C19.7599 7.06612 19.3245 8.382 19.2003 8.70022C20.0083 9.59137 20.4846 10.7372 20.4846 12.1377C20.4846 17.0609 17.5643 18.1429 14.7679 18.4614C15.2237 18.8645 15.6171 19.6283 15.6171 20.8379C15.6171 22.5567 15.5966 23.9361 15.5966 24.3603C15.5966 24.6999 15.8245 25.1033 16.4457 24.9759C21.4167 23.278 24.9999 18.4825 24.9999 12.8169C25.0204 5.72914 19.4075 0 12.5103 0Z"
                    />
                  </svg>
                  View on Github
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              )}
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Lightbox = ({
  state,
  onClose,
}: {
  state: LightboxState;
  onClose: () => void;
}) => {
  const [currentIndex, setCurrentIndex] = useState(state.currentIndex);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) =>
      prev === state.images.length - 1 ? 0 : prev + 1,
    );
  };
  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) =>
      prev === 0 ? state.images.length - 1 : prev - 1,
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md"
      onClick={onClose}
    >
      {/* Controls Container to avoid hover interference with image */}
      <div className="absolute inset-0 pointer-events-none z-[110]">
        <button
          className="absolute top-6 right-6 text-neutral-400 hover:text-white transition-colors bg-neutral-900/60 hover:bg-neutral-800 p-2 rounded-full pointer-events-auto backdrop-blur-sm border border-neutral-700"
          onClick={onClose}
        >
          <X className="w-6 h-6" />
        </button>

        {state.images.length > 1 && (
          <>
            <button
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 text-neutral-300 hover:text-white transition-all p-3 rounded-full bg-neutral-900/60 hover:bg-neutral-800 pointer-events-auto backdrop-blur-sm border border-neutral-700 hover:scale-110 group"
              onClick={handlePrev}
            >
              <ChevronLeft className="w-8 h-8 group-hover:-translate-x-1 transition-transform" />
            </button>
            <button
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 text-neutral-300 hover:text-white transition-all p-3 rounded-full bg-neutral-900/60 hover:bg-neutral-800 pointer-events-auto backdrop-blur-sm border border-neutral-700 hover:scale-110 group"
              onClick={handleNext}
            >
              <ChevronRight className="w-8 h-8 group-hover:translate-x-1 transition-transform" />
            </button>
          </>
        )}
      </div>

      <div className="w-full h-full max-w-[95vw] max-h-[95vh] flex items-center justify-center p-4">
        {/* Fullscreen modal image: framer-animated, dynamic dimensions, opened
            only on click — intentionally a motion.img, not next/image. */}
        <motion.img
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
          src={state.images[currentIndex]}
          alt={`Fullscreen view ${currentIndex + 1}`}
          className="max-w-full max-h-full object-contain rounded-lg drop-shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        />
      </div>

      {state.images.length > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-[110] bg-neutral-900/80 px-4 py-2 rounded-full backdrop-blur-md border border-neutral-800">
          {state.images.map((_, i) => (
            <button
              key={i}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex(i);
              }}
              className={`w-2.5 h-2.5 rounded-full transition-all ${i === currentIndex ? "bg-white scale-125" : "bg-neutral-600 hover:bg-neutral-400"}`}
            />
          ))}
        </div>
      )}
    </motion.div>
  );
};
