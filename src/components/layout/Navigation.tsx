import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlignLeft, X } from "lucide-react";
import { navLinks } from "../../data/portfolio-data";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="z-50 mx-auto flex w-full max-w-screen-lg items-center pt-9 font-mono px-6">
      {/* Logo */}
      <a
        className="text-lg font-black text-white duration-300 motion-reduce:transition-none mr-6"
        href="#home"
      >
        <img src="/logo.svg" className="w-16" />
      </a>

      {/* Desktop Navigation */}
      <div className="flex flex-grow justify-start">
        <div className="hidden gap-4 lg:inline-flex items-center">
          {navLinks
            .filter((link) => !link.download)
            .map((link) => (
              <a
                key={link.name}
                className="relative rounded-md px-2 py-1 transition-all hover:bg-white/10 hover:text-neutral-200 sm:px-3 sm:py-2 text-neutral-400"
                href={link.href}
              >
                {link.name}
              </a>
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

      {/* Right Side Controls */}
      <div className="flex items-center gap-2">
        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(true)}
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
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 z-40 lg:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-[320px] bg-[#161617] z-50 p-6 lg:hidden"
            >
              <div className="flex items-center justify-between mb-8">
                <a className="text-lg font-black text-white" href="#home">
                  NL
                  <span className="bg-gradient-to-r from-[#a2facf] to-[#64acff] bg-clip-text text-transparent">
                    .
                  </span>
                </a>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-md hover:bg-white/10"
                >
                  <X className="size-5 text-white" />
                </button>
              </div>

              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    className="px-4 py-3 rounded-md text-neutral-300 hover:bg-white/10 transition-colors"
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    {...(link.download ? { download: true } : {})}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
