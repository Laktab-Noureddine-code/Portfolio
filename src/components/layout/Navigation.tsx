"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { m, AnimatePresence } from "framer-motion";
import { AlignLeft, X } from "lucide-react";
import { navLinks } from "../../data/portfolio-data";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="z-50 mx-auto  flex justify-between w-full max-w-screen-2xl items-center pt-9 font-mono px-6">
      {/* Logo */}
      <Link
        className="text-lg font-black  text-white duration-300 motion-reduce:transition-none mr-6"
        href="#home"
        aria-label="Noureddine Laktab — home"
      >
        <Image
          src="/logo.svg"
          alt=""
          width={48}
          height={48}
          className="w-12"
          priority
        />
      </Link>

      {/* Desktop Navigation */}
      <div className="flex justify-start">
        <div className="hidden gap-4 lg:inline-flex items-center">
          {navLinks
            .filter((link) => !link.download)
            .map((link) => (
              <Link
                key={link.name}
                className="relative rounded-md px-2 py-1 transition-all hover:bg-white/10 hover:text-neutral-200 sm:px-3 sm:py-2 text-neutral-400"
                href={link.href}
              >
                {link.name}
              </Link>
            ))}
          {navLinks
            .filter((link) => link.download)
            .map((link) => (
              <a
                key={link.name}
                className="relative rounded-md px-2 py-1 transition-all hover:bg-white/10 hover:text-neutral-200 sm:px-3 sm:py-2 text-neutral-400"
                href={link.href}
                download
              >
                {link.name}
              </a>
            ))}
        </div>
      </div>
      <Link
        className="hidden lg:inline-flex relative rounded-md px-2 py-1 transition-all hover:bg-white/10 hover:text-neutral-200 sm:px-3 sm:py-2 text-neutral-400"
        href="#contact"
      >
        Contact
      </Link>

      {/* Right Side Controls */}
      <div className="flex items-center gap-2">
        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open navigation menu"
          className="group flex items-center rounded-md px-4 py-2 font-medium duration-200 motion-reduce:transition-none size-10 justify-center border-0 !bg-transparent !outline-none hover:!bg-white/15 lg:hidden"
        >
          <AlignLeft className="size-5 shrink-0 text-neutral-100" />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 z-40 lg:hidden"
            />

            {/* Menu Panel */}
            <m.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-[320px] bg-[#161617] z-50 p-6 lg:hidden"
            >
              <div className="flex items-center justify-between mb-8">
                <Link
                  className="text-lg font-black text-white"
                  href="#home"
                  aria-label="Noureddine Laktab — home"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Image
                    src="/logo.svg"
                    alt=""
                    width={64}
                    height={64}
                    className="w-16"
                  />
                </Link>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close navigation menu"
                  className="p-2 rounded-md hover:bg-white/10"
                >
                  <X className="size-5 text-white" />
                </button>
              </div>

              <div className="flex flex-col gap-2">
                {navLinks.map((link) =>
                  link.download ? (
                    <a
                      key={link.name}
                      className="px-4 py-3 rounded-md text-neutral-300 hover:bg-white/10 transition-colors"
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      download
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      key={link.name}
                      className="px-4 py-3 rounded-md text-neutral-300 hover:bg-white/10 transition-colors"
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ),
                )}
                <Link
                  className="px-4 py-3 rounded-md text-neutral-300 hover:bg-white/10 transition-colors mt-2 border-t border-neutral-800 pt-5"
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </m.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
