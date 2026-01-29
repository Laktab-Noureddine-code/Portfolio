import { motion } from "framer-motion";
import { Globe, Rocket } from "lucide-react";
import { profileData } from "../../data/portfolio-data";
import { useTheme } from "../../context/ThemeContext";

export default function HeroSection() {
  const { theme } = useTheme();

  // Dark theme -> show light images, Light theme -> show dark images
  const desktopImage =
    theme === "dark" ? "/light_profile.webp" : "/dark_profile.webp";
  const mobileImage =
    theme === "dark"
      ? "/light_center_profile.webp"
      : "/dark_center_profile.webp";

  return (
    <section id="home" className="mt-8 md:mt-10">
      <motion.div
        className="relative overflow-hidden rounded-3xl shadow-lg dark:shadow-2xl border border-black/5 dark:border-transparent"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Mobile Layout */}
        <div className="md:hidden">
          {/* Mobile Image */}
          <div className="relative aspect-square">
            <img
              alt="Noureddine Laktab - Full Stack Developer"
              className="object-cover w-full h-full"
              style={{ objectPosition: "center top" }}
              src={mobileImage}
              width={500}
              height={500}
              fetchPriority="high"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/30 to-transparent dark:from-black/95 dark:via-black/30 dark:to-transparent" />
          </div>

          {/* Mobile Content - Overlays bottom of image */}
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <div className="text-neutral-800 dark:text-white">
              <motion.h2
                className="font-medium uppercase tracking-wider flex items-center text-xs text-neutral-800 dark:text-white/90"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Globe className="mr-2" size={14} />
                About me
              </motion.h2>

              <motion.h1
                className="mt-1 text-2xl font-bold tracking-tight text-neutral-900 dark:text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                hey, I'm {profileData.firstName}
                <span className="animate-wave inline-block ml-2">👋</span>
              </motion.h1>

              <motion.p
                className="mt-2 text-sm font-light leading-relaxed text-neutral-800 dark:text-white/90"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {profileData.tagline}
              </motion.p>
            </div>

            {/* Mission Card */}
            <motion.div
              className="mt-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md rounded-xl p-3 text-neutral-800 dark:text-white border border-neutral-200 dark:border-neutral-800">
                <h2 className="font-medium uppercase tracking-wider flex items-center text-xs">
                  <Rocket className="mr-2" size={14} />
                  My Mission
                </h2>
                <p className="mt-1.5 text-xs font-light leading-relaxed">
                  {profileData.bio}
                </p>
                <p className="mt-2 text-xs italic">
                  Keep moving, don't settle. 🚀
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:block relative aspect-[16/9]">
          {/* Desktop Image */}
          <div className="absolute inset-0 z-0">
            <img
              alt="Noureddine Laktab - Full Stack Developer"
              className="object-cover w-full h-full"
              style={{ objectPosition: "85% center" }}
              src={desktopImage}
              width={1200}
              height={675}
              fetchPriority="high"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/40 to-transparent dark:from-black/80 dark:via-black/40 dark:to-transparent" />
          </div>

          {/* Desktop Content */}
          <div className="relative z-10 flex flex-col justify-end h-full p-8 max-w-[60%]">
            <div className="text-neutral-800 dark:text-white">
              <motion.h2
                className="font-medium uppercase tracking-wider flex items-center text-base text-neutral-800 dark:text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Globe className="mr-2" size={18} />
                About me
              </motion.h2>

              <motion.h1
                className="mt-3 text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                hey, I'm {profileData.firstName}
                <span className="animate-wave inline-block ml-2">👋</span>
              </motion.h1>

              <motion.p
                className="mt-4 text-lg font-light leading-relaxed text-neutral-800 dark:text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {profileData.tagline}
              </motion.p>
            </div>

            {/* Mission Card */}
            <motion.div
              className="mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="bg-white/90 dark:bg-neutral-900/80 backdrop-blur-md rounded-2xl p-5 text-neutral-800 dark:text-white border border-neutral-200 dark:border-transparent">
                <h2 className="font-medium uppercase tracking-wider flex items-center text-sm">
                  <Rocket className="mr-2" size={16} />
                  My Mission
                </h2>
                <p className="mt-3 text-base font-light leading-relaxed">
                  {profileData.bio}
                </p>
                <p className="mt-4 text-base italic">
                  Keep moving, don't settle. 🚀
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
