"use client";

import Image from "next/image";
import { m } from "framer-motion";
import { Globe, Rocket } from "lucide-react";
import { profileData } from "../../data/portfolio-data";

export default function HeroSection() {
  const profileImage = "/profile.svg";

  return (
    <section id="home" className="mt-4 md:mt-6">
      {/* Plain div (not animated): keeps the LCP hero image painted on first
          render instead of waiting for framer-motion to fade it in. */}
      <div className="relative overflow-hidden rounded-3xl shadow-2xl border border-border">
        {/* Mobile Layout */}
        <div className="md:hidden flex flex-col" aria-hidden="true">
          {/* Mobile Image with overlay text */}
          <div className="relative w-full aspect-[3/4]">
            <Image
              alt="Noureddine Laktab - Full-Stack Web Developer specializing in React and Laravel"
              className="object-cover"
              style={{ objectPosition: "center top" }}
              src={profileImage}
              fill
              sizes="calc(100vw - 48px)"
              priority
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
          <div className="bg-sunken p-5 pt-4">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="bg-surface/95 backdrop-blur-md rounded-xl p-4 text-foreground border border-border">
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
        <div className="hidden md:flex aspect-video bg-sunken">
          {/* Desktop Content */}
          <div className="relative z-10 flex flex-col justify-center flex-1 min-w-0 py-6 px-8">
            <div className="text-foreground">
              <m.span
                className="font-medium uppercase tracking-wider inline-flex items-center text-base text-foreground mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Globe className="mr-2" size={18} />
                About me
              </m.span>

              <m.h1
                className="mt-3 text-4xl lg:text-5xl font-bold tracking-tight text-foreground"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                hey, I'm {profileData.firstName}
                <span className="animate-wave inline-block ml-2">👋</span>
                <span className="block text-2xl lg:text-3xl font-medium mt-2 text-body">
                  Full-Stack Web Developer – React & Laravel
                </span>
              </m.h1>

              <m.p
                className="mt-4 text-lg font-light leading-relaxed text-body"
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
              <div className="bg-surface/80 backdrop-blur-md rounded-2xl p-5 text-foreground border border-border">
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

          {/* Desktop Image: full height, right-aligned, cropped ~20% off the bottom for a bigger look */}
          <div className="relative h-full aspect-[814.5/868.8] shrink-0">
            <Image
              alt="Noureddine Laktab - Full-Stack Web Developer specializing in React and Laravel"
              className="object-cover object-top"
              src={profileImage}
              fill
              sizes="(max-width: 1024px) 45vw, 460px"
              priority
            />
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
