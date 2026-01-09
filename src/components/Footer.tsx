import { profileData } from "@/data/portfolio-data";
import { Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-[#0a0a0a] border-t border-gray-200 dark:border-white/5">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a
              href="#home"
              className="text-2xl font-bold text-gray-900 dark:text-white hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
            >
              {profileData.firstName}
              <span className="text-violet-500">.</span>
            </a>
            <p className="text-gray-500 text-sm mt-2">
              © {currentYear} {profileData.name}. All rights reserved.
            </p>
          </div>

          {/* Made with love */}
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <span>Made with</span>
            <Heart size={16} className="text-red-500 fill-red-500 animate-pulse" />
            <span>using React & TailwindCSS</span>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-gray-500 hover:text-violet-600 dark:hover:text-violet-400 transition-colors group"
          >
            <span className="text-sm">Back to top</span>
            <div className="w-10 h-10 rounded-full border border-gray-200 dark:border-white/10 flex items-center justify-center group-hover:border-violet-500 group-hover:bg-violet-50 dark:group-hover:bg-violet-500/10 transition-all">
              <ArrowUp size={18} className="group-hover:-translate-y-1 transition-transform" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
