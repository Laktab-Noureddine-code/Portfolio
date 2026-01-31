import { motion } from "framer-motion";
import { Globe, Rocket } from "lucide-react";
import { profileData } from "../../data/portfolio-data";

export default function HeroSection() {
  // Always use dark theme images (light profile images that look good on dark background)
  const desktopImage = "/light_profile.webp";
  const mobileImage = "/light_center_profile.webp";

  return (
    <section id="home" className="mt-8 md:mt-10">
      <motion.div
        className="relative overflow-hidden rounded-3xl shadow-2xl border border-transparent"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Mobile Layout */}
        <div className="md:hidden flex flex-col">
          {/* Mobile Image with overlay text */}
          <div className="relative w-full aspect-[3/4]">
            <img
              alt="Noureddine Laktab - Full Stack Developer"
              className="object-cover w-full h-full"
              style={{ objectPosition: "center top" }}
              src={mobileImage}
              width={500}
              height={667}
              fetchPriority="high"
            />
            {/* Gradient Overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

            {/* Text overlay on image */}
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <motion.h2
                className="font-medium uppercase tracking-wider flex items-center text-xs text-white/90"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Globe className="mr-2" size={14} />
                About me
              </motion.h2>

              <motion.h1
                className="mt-2 text-2xl font-bold tracking-tight text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                hey, I'm {profileData.firstName}
                <span className="animate-wave inline-block ml-2">👋</span>
              </motion.h1>

              <motion.p
                className="mt-3 text-sm font-light leading-relaxed text-white/90"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {profileData.tagline}
              </motion.p>
            </div>
          </div>

          {/* Mission Card - Below image */}
          <div className="bg-dark p-5 pt-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="bg-neutral-900/95 backdrop-blur-md rounded-xl p-4 text-white border border-neutral-800">
                <h2 className="font-medium uppercase tracking-wider flex items-center text-xs">
                  <Rocket className="mr-2" size={14} />
                  My Mission
                </h2>
                <p className="mt-2 text-xs font-light leading-relaxed">
                  {profileData.bio}
                </p>
                <p className="mt-3 text-xs italic">
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
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
          </div>

          {/* Desktop Content */}
          <div className="relative z-10 flex flex-col justify-end h-full p-8 max-w-[60%]">
            <div className="text-white">
              <motion.h2
                className="font-medium uppercase tracking-wider flex items-center text-base text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Globe className="mr-2" size={18} />
                About me
              </motion.h2>

              <motion.h1
                className="mt-3 text-4xl lg:text-5xl font-bold tracking-tight text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                hey, I'm {profileData.firstName}
                <span className="animate-wave inline-block ml-2">👋</span>
              </motion.h1>

              <motion.p
                className="mt-4 text-lg font-light leading-relaxed text-white"
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
              <div className="bg-neutral-900/80 backdrop-blur-md rounded-2xl p-5 text-white border border-transparent">
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
