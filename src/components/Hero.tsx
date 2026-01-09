import { ArrowDown, Eye, Mail } from "lucide-react";
import { profileData } from "@/data/portfolio-data";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-[#fafafa] dark:bg-[#0a0a0a] overflow-hidden flex items-center justify-center"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, black 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative w-full max-w-[1400px] mx-auto px-4 py-20">
        {/* Hello Badge */}
        <div className="absolute top-32 left-1/2 md:left-[55%] transform -translate-x-1/2 md:translate-x-0 z-30">
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-full px-4 py-2 flex items-center gap-2 animate-bounce">
            <span className="text-2xl">👋</span>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-200">Hello!</span>
          </div>
        </div>

        {/* Main content container */}
        <div className="relative flex flex-col items-center justify-center min-h-[70vh]">
          {/* Top Text - FULL STACK */}
          <div className="relative z-10 w-full text-center">
            <h1
              className="font-black text-[12vw] md:text-[14vw] lg:text-[180px] leading-[0.85] tracking-[-0.02em] text-black dark:text-white"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              FULL STACK
            </h1>
          </div>

          {/* Portrait Image - Centered and overlapping */}
          <div className="relative z-20 -my-8 md:-my-16">
            <div className="relative">
              {/* Image container */}
              <div className="w-[280px] h-[350px] md:w-[350px] md:h-[450px] lg:w-[400px] lg:h-[520px] relative">
                {/* Placeholder - Replace with your transparent PNG */}
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=520&fit=crop&crop=face"
                  alt={profileData.name}
                  className="w-full h-full object-cover object-top grayscale"
                  style={{
                    maskImage: "linear-gradient(to bottom, black 85%, transparent 100%)",
                    WebkitMaskImage: "linear-gradient(to bottom, black 85%, transparent 100%)",
                  }}
                />
              </div>

              {/* Decorative arrow */}
              <div className="absolute top-1/4 -right-8 md:-right-12 transform rotate-45">
                <div className="w-12 h-12 md:w-16 md:h-16 border-2 border-black dark:border-white rounded-full flex items-center justify-center">
                  <ArrowDown className="w-5 h-5 md:w-6 md:h-6 text-black dark:text-white -rotate-45" />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Text - DEVELOPER */}
          <div className="relative z-10 w-full text-center">
            <h1
              className="font-black text-[12vw] md:text-[14vw] lg:text-[180px] leading-[0.85] tracking-[-0.02em] text-outline text-black dark:text-white"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              DEVELOPER
            </h1>
          </div>

          {/* Subtitle */}
          <p className="mt-8 text-gray-600 dark:text-gray-400 text-center text-sm md:text-base max-w-md">
            my name is <span className="font-semibold text-black dark:text-white">{profileData.name}</span> and I am a freelance
          </p>

          {/* Location badge */}
          <div className="mt-4 flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
            <span>📍</span>
            <span>based in {profileData.location}</span>
          </div>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#projects"
              className="group flex items-center justify-center gap-2 bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-full font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-all hover:scale-105"
            >
              <Eye size={18} />
              View Projects
            </a>
            <a
              href="#contact"
              className="group flex items-center justify-center gap-2 bg-white dark:bg-transparent text-black dark:text-white border-2 border-black dark:border-white px-8 py-4 rounded-full font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all hover:scale-105"
            >
              <Mail size={18} />
              Contact Me
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 dark:text-gray-500">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-6 h-10 border-2 border-gray-300 dark:border-gray-600 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
