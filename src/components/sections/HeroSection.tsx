"use client";

import Image from "next/image";
import { m } from "framer-motion";
import { Globe, Rocket } from "lucide-react";
import { profileData } from "../../data/portfolio-data";

export default function HeroSection() {
  // Always use dark theme images (light profile images that look good on dark background)
  const desktopImage = "/light_profile.webp";
  const mobileImage = "/light_center_profile.webp";
  const desktopBlur =
    "data:image/webp;base64,UklGRpgAAABXRUJQVlA4WAoAAAAQAAAACwAABgAAQUxQSDgAAAABYFNbe5O0tRrKGAVNSwJW2oYJnHCY0MFJj4aImADQh0qCsUn3xJreCZ22CZ8u0qPnn9KjOyG1H1ZQOCA6AAAA0AEAnQEqDAAHAAOAWiWcAALtCh8gd+AA/nGkYg7qJ+7itYhtaPAX0cvfZh8NG11G2Mepcabiex6AAA==";
  const mobileBlur =
    "data:image/webp;base64,UklGRtgAAABXRUJQVlA4WAoAAAAQAAAACwAADgAAQUxQSFoAAAABcFtr25rEVtABvMoE3oahqKiszwJ0jEDHEpTU7v5gsQ0iYgKEVqUsrDCGbon8gGWJ/oSF8q8D4PxTptATSgvIS6w1zNQfbXQFOPZNIdhRuvUnVCwOVeZUfQFWUDggWAAAAFACAJ0BKgwADwADgFollAJ0fwATup8igJRYAAD+2V9p+hJbeIb87EQ/98DrMXEg7tuERnH1GRjiEhkmNyi4WvzmLjdNXkOSSq+kYhGgJZJ6T5Gi3oWYAAA=";

  return (
    <section id="home" className="mt-4 md:mt-6">
      {/* Plain div (not animated): keeps the LCP hero image painted on first
          render instead of waiting for framer-motion to fade it in. */}
      <div className="relative overflow-hidden rounded-3xl shadow-2xl border border-transparent">
        {/* Mobile Layout */}
        <div className="md:hidden flex flex-col" aria-hidden="true">
          {/* Mobile Image with overlay text */}
          <div className="relative w-full aspect-[3/4]">
            <Image
              alt="Noureddine Laktab - Full-Stack Web Developer specializing in React and Laravel"
              className="object-cover"
              style={{ objectPosition: "center top" }}
              src={mobileImage}
              fill
              sizes="100vw"
              priority
              placeholder="blur"
              blurDataURL={mobileBlur}
            />
            {/* Gradient Overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

            {/* Text overlay on image */}
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <m.span
                className="font-medium uppercase tracking-wider flex items-center text-xs text-white/90"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Globe className="mr-2" size={14} />
                About me
              </m.span>

              <m.p
                className="mt-2 text-2xl font-bold tracking-tight text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                hey, I'm {profileData.firstName}
                <span className="animate-wave inline-block ml-2">👋</span>
              </m.p>

              <m.p
                className="mt-3 text-sm font-light leading-relaxed text-white/90"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {profileData.tagline}
              </m.p>
            </div>
          </div>

          {/* Mission Card - Below image */}
          <div className="bg-dark p-5 pt-4">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="bg-neutral-900/95 backdrop-blur-md rounded-xl p-4 text-white border border-neutral-800">
                <span className="font-medium uppercase tracking-wider flex items-center text-xs">
                  <Rocket className="mr-2" size={14} />
                  My Mission
                </span>
                <p className="mt-2 text-xs font-light leading-relaxed">
                  {profileData.bio}
                </p>
                <p className="mt-3 text-xs italic">
                  Keep moving, don't settle. 🚀
                </p>
              </div>
            </m.div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:block relative aspect-[16/9]">
          {/* Desktop Image */}
          <div className="absolute inset-0 z-0">
            <Image
              alt="Noureddine Laktab - Full-Stack Web Developer specializing in React and Laravel"
              className="object-cover"
              style={{ objectPosition: "85% center" }}
              src={desktopImage}
              fill
              sizes="(max-width: 1024px) 100vw, 1024px"
              priority
              placeholder="blur"
              blurDataURL={desktopBlur}
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
          </div>

          {/* Desktop Content */}
          <div className="relative z-10 flex flex-col justify-center h-full py-6 px-8 max-w-[60%]">
            <div className="text-white">
              <m.span
                className="font-medium uppercase tracking-wider inline-flex items-center text-base text-white mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Globe className="mr-2" size={18} />
                About me
              </m.span>

              <m.h1
                className="mt-3 text-4xl lg:text-5xl font-bold tracking-tight text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                hey, I'm {profileData.firstName}
                <span className="animate-wave inline-block ml-2">👋</span>
                <span className="block text-2xl lg:text-3xl font-medium mt-2 text-white/90">
                  Full-Stack Web Developer – React & Laravel
                </span>
              </m.h1>

              <m.p
                className="mt-4 text-lg font-light leading-relaxed text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {profileData.tagline}
              </m.p>
            </div>

            {/* Mission Card */}
            <m.div
              className="mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="bg-neutral-900/80 backdrop-blur-md rounded-2xl p-5 text-white border border-transparent">
                <span className="font-medium uppercase tracking-wider flex items-center text-sm">
                  <Rocket className="mr-2" size={16} />
                  My Mission
                </span>
                <p className="mt-3 text-base font-light leading-relaxed">
                  {profileData.bio}
                </p>
                <p className="mt-4 text-base italic">
                  Keep moving, don't settle. 🚀
                </p>
              </div>
            </m.div>
          </div>
        </div>
      </div>

      {/* Screen-reader only H1 for mobile (since aria-hidden hides mobile visual content) */}
      <h1 className="sr-only md:hidden">
        {profileData.name} – Full-Stack Web Developer – React & Laravel
      </h1>
    </section>
  );
}
