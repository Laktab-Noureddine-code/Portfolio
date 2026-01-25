import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { profileData } from "../../data/portfolio-data";
import { fadeInUp, viewportSettings } from "../../lib/animations";

export default function Footer() {
  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={viewportSettings}
      variants={fadeInUp}
      className="py-8 bg-dark-secondary text-gray-400 border-t border-gray-800"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.p
            className="text-sm"
            whileHover={{ scale: 1.02 }}
          >
            © {new Date().getFullYear()} {profileData.name}. All rights reserved.
          </motion.p>
          <motion.p
            className="text-sm flex items-center gap-1"
            whileHover={{ scale: 1.02 }}
          >
            Built with{" "}
            <motion.span
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <Heart size={14} className="text-emerald-500 fill-emerald-500" />
            </motion.span>{" "}
            using React & Tailwind CSS
          </motion.p>
        </div>
      </div>
    </motion.footer>
  );
}
