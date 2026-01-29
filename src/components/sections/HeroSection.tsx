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
        className="relative overflow-hidden rounded-3xl shadow-lg dark:shadow-2xl aspect-square md:aspect-[16/9] border border-black/5 dark:border-transparent"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Background Image - Mobile (center images) */}
        <div className="absolute inset-0 z-0 md:hidden">
          <img
            alt="Background"
            className="object-cover w-full h-full"
            style={{ objectPosition: "center center" }}
            src={mobileImage}
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/70 to-white/20 dark:from-black/80 dark:via-black/60 dark:to-transparent" />
        </div>

        {/* Background Image - Desktop */}
        <div className="absolute inset-0 z-0 hidden md:block">
          <img
            alt="Background"
            className="object-cover w-full h-full"
            style={{ objectPosition: "85% center" }}
            src={desktopImage}
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 to-white/20 dark:from-black/80 dark:via-black/60 dark:to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-end h-full p-6 sm:p-8 md:max-w-[55%]">
          <div className="text-neutral-800 dark:text-white">
            {/* About Me Label */}
            <motion.h2
              className="font-medium uppercase tracking-wider flex items-center text-sm sm:text-base text-neutral-700 dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Globe className="mr-2" size={18} />
              About me
            </motion.h2>

            {/* Main Greeting */}
            <motion.h1
              className="mt-2 sm:mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              hey, I'm {profileData.firstName}
              <span className="animate-wave inline-block ml-2">👋</span>
            </motion.h1>

            {/* Bio */}
            <motion.p
              className="mt-3 sm:mt-4 text-base sm:text-lg font-light leading-relaxed text-neutral-700 dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {profileData.tagline}
            </motion.p>
          </div>
          {/* Mission Card */}
          <motion.div
            className="mt-4 md:mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="bg-white/90 dark:bg-neutral-900/80 backdrop-blur-md rounded-2xl p-4 sm:p-5 text-neutral-800 dark:text-white border border-neutral-200 dark:border-transparent">
              <h2 className="font-medium uppercase tracking-wider flex items-center text-sm">
                <Rocket className="mr-2" size={16} />
                My Mission
              </h2>
              <p className="mt-2 sm:mt-3 text-sm sm:text-base font-light leading-relaxed">
                {profileData.bio}
              </p>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base italic">
                Keep moving, don't settle. 🚀
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
