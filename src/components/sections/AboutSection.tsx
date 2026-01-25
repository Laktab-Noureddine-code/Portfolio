import { motion } from "framer-motion";
import { MapPin, Mail, Phone } from "lucide-react";
import { profileData, techStack } from "../../data/portfolio-data";
import {
  fadeInUp,
  staggerContainer,
  viewportSettings,
} from "../../lib/animations";

// Tech category configuration
// Tech badge component
function TechBadge({ tech, index }: { tech: { name: string; icon: string }; index: number }) {
  return (
    <motion.div
      variants={fadeInUp}
      custom={index}
      whileHover={{ scale: 1.05, y: -5 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm hover:shadow-md transition-all cursor-default"
    >
      <div className="w-6 h-6 flex items-center justify-center shrink-0">
        <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain" />
      </div>
      <span className="text-sm font-medium text-gray-700">{tech.name}</span>
    </motion.div>
  );
}

// ... inside AboutSection
// replaced categories and TechCard definitions with TechBadge above

// Contact info item
function ContactItem({
  icon: Icon,
  text,
  href,
}: {
  icon: typeof MapPin;
  text: string;
  href?: string;
}) {
  const content = (
    <motion.div
      className="flex items-center gap-2 text-gray-600"
      whileHover={{ scale: 1.05, x: 5 }}
    >
      <Icon size={18} className="text-emerald-500" />
      <span>{text}</span>
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} className="hover:text-emerald-600 transition-colors">
        {content}
      </a>
    );
  }

  return content;
}

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={staggerContainer}
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <motion.h2
              className="text-3xl sm:text-4xl font-bold text-dark mb-4"
              whileInView={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              About <span className="gradient-text">Me</span>
            </motion.h2>
            <motion.p
              className="text-gray-600 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              {profileData.bio}
            </motion.p>
          </motion.div>

          {/* Tech Stack */}
          <motion.div variants={fadeInUp} className="mb-16">
            <motion.h3
              className="text-2xl font-bold text-dark mb-2 text-center"
              variants={fadeInUp}
            >
              Technologies I use.
            </motion.h3>
            <motion.p 
              className="text-gray-600 text-center mb-8 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Over the years, I have worked with a variety of technologies. Here are some of the technologies I have experience with:
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto"
              variants={staggerContainer}
            >
              {techStack.map((tech, index) => (
                <TechBadge key={tech.name} tech={tech} index={index} />
              ))}
            </motion.div>
          </motion.div>

          {/* Location & Contact Info */}
          <motion.div
            variants={fadeInUp}
            className="mt-12 flex flex-wrap justify-center gap-6"
          >
            <ContactItem icon={MapPin} text={profileData.location} />
            <ContactItem
              icon={Mail}
              text={profileData.email}
              href={`mailto:${profileData.email}`}
            />
            <ContactItem
              icon={Phone}
              text={profileData.phone}
              href={`tel:${profileData.phone}`}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
