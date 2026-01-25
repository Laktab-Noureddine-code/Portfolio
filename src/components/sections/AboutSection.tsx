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
function TechBadge({
  tech,
  index,
}: {
  tech: { name: string; icon: string };
  index: number;
}) {
  return (
    <motion.div
      variants={fadeInUp}
      custom={index}
      whileHover={{ scale: 1.05, y: -5 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm hover:shadow-md transition-all cursor-default"
    >
      <div className="w-6 h-6 flex items-center justify-center shrink-0">
        <img
          src={tech.icon}
          alt={tech.name}
          className="w-full h-full object-contain"
        />
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
    <section id="about" className="py-20 bg-gray-50/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left Column: Content */}
          <motion.div
            className="w-full lg:w-1/2 order-2 lg:order-1"
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={staggerContainer}
          >
            {/* Section Header */}
            <motion.div variants={fadeInUp} className="mb-8 text-left">
              <motion.h2
                className="text-3xl sm:text-4xl font-bold text-dark mb-6"
                whileInView={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                About <span className="gradient-text">Me</span>
              </motion.h2>
              <motion.p
                className="text-gray-600 text-lg leading-relaxed mb-8"
                variants={fadeInUp}
              >
                {profileData.bio}
              </motion.p>
            </motion.div>

            {/* Tech Stack */}
            <motion.div variants={fadeInUp} className="mb-10">
              <motion.h3
                className="text-xl font-bold text-dark mb-4"
                variants={fadeInUp}
              >
                Technologies I use
              </motion.h3>
              <motion.p className="text-gray-600 mb-6" variants={fadeInUp}>
                Over the years, I have worked with a variety of technologies.
                Here are some of the technologies I have experience with:
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-2 justify-start"
                variants={staggerContainer}
              >
                {techStack.map((tech, index) => (
                  <TechBadge key={tech.name} tech={tech} index={index} />
                ))}
              </motion.div>
            </motion.div>

            {/* Location & Contact Info */}
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-6">
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

          {/* Right Column: Image */}
          <motion.div
            className="w-full lg:w-5/12 order-1 lg:order-2 flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={viewportSettings}
          >
            <div className="relative w-full max-w-md lg:max-w-full">
              {/* Decorative elements could be added here */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white p-2">
                <img
                  src="/profile.webp"
                  alt="Noureddine Laktab"
                  className="w-full h-auto rounded-2xl object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
