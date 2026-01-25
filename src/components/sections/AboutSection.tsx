import { motion } from "framer-motion";
import { Code2, Server, Database, Cloud, MapPin, Mail, Phone } from "lucide-react";
import { profileData, techStack } from "../../data/portfolio-data";
import {
  fadeInUp,
  staggerContainer,
  scaleUp,
  viewportSettings,
} from "../../lib/animations";

// Tech category configuration
const categories = [
  { key: "backend", label: "Backend", icon: Server, color: "emerald" },
  { key: "frontend", label: "Frontend", icon: Code2, color: "blue" },
  { key: "devops", label: "DevOps", icon: Cloud, color: "purple" },
  { key: "database", label: "Database", icon: Database, color: "orange" },
] as const;

// Tech card component
function TechCard({
  category,
  index,
}: {
  category: (typeof categories)[number];
  index: number;
}) {
  const { key, label, icon: Icon } = category;
  const techs = techStack[key as keyof typeof techStack] || [];

  return (
    <motion.div
      variants={fadeInUp}
      custom={index}
      whileHover={{ scale: 1.02, y: -5 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow"
    >
      <div>
        <div className="flex items-center gap-3 mb-4">
          <motion.div
            className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center"
            whileHover={{ rotate: 10, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Icon size={20} className="text-emerald-600" />
          </motion.div>
          <h4 className="font-semibold text-dark">{label}</h4>
        </div>
        <motion.div
          className="flex flex-wrap gap-2"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {techs.map((tech, techIndex) => (
            <motion.span
              key={tech.name}
              variants={scaleUp}
              custom={techIndex}
              whileHover={{ scale: 1.1, y: -2 }}
              className="px-3 py-1.5 bg-emerald-50 text-emerald-700 text-sm font-medium rounded-full border border-emerald-100 cursor-default"
            >
              {tech.name}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

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
    <section id="about" className="py-20 bg-light">
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
          <motion.div variants={fadeInUp}>
            <motion.h3
              className="text-xl font-semibold text-dark mb-8 text-center"
              variants={fadeInUp}
            >
              Tech Stack
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((category, index) => (
                <TechCard key={category.key} category={category} index={index} />
              ))}
            </div>
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
