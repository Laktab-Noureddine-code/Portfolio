import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { profileData } from "../../data/portfolio-data";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  buttonHover,
  viewportSettings,
} from "../../lib/animations";

// Contact info item component
function ContactInfoItem({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <motion.div
      className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors"
      whileHover={{ x: 5 }}
    >
      <motion.div
        className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center"
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Icon size={20} className="text-emerald-400" />
      </motion.div>
      <div>
        <p className="text-sm text-gray-500">{label}</p>
        <p>{value}</p>
      </div>
    </motion.div>
  );

  if (href) {
    return <a href={href}>{content}</a>;
  }

  return content;
}

// Social button component
function SocialButton({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: typeof Github;
  label: string;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 bg-gray-800 hover:bg-emerald-500 rounded-xl flex items-center justify-center transition-colors"
      whileHover={{ scale: 1.1, y: -3 }}
      whileTap={{ scale: 0.95 }}
      aria-label={label}
    >
      <Icon size={20} />
    </motion.a>
  );
}

// Form input component
function FormInput({
  id,
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  required = true,
}: {
  id: string;
  label: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
}) {
  return (
    <motion.div variants={fadeInUp}>
      <label htmlFor={id} className="block text-sm text-gray-400 mb-2">
        {label}
      </label>
      <motion.input
        type={type}
        id={id}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl focus:outline-none focus:border-emerald-500 transition-colors text-white placeholder-gray-500"
        placeholder={placeholder}
        whileFocus={{ scale: 1.01 }}
      />
    </motion.div>
  );
}

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link
    const mailtoLink = `mailto:${profileData.email}?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `From: ${formData.name} (${formData.email})\n\n${formData.message}`
    )}`;
    
    window.location.href = mailtoLink;
    
    // Show success state briefly
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 2000);
  };

  return (
    <section id="contact" className="py-20 bg-dark text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={staggerContainer}
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <motion.div
              className="inline-flex items-center gap-2 mb-4"
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Mail size={32} className="text-emerald-400" />
            </motion.div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              I'm currently looking for a 2-month internship opportunity. Feel free
              to reach out if you have any questions or just want to say hi!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div variants={fadeInLeft}>
              <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>

              <motion.div
                className="space-y-4 mb-8"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.div variants={fadeInUp}>
                  <ContactInfoItem
                    icon={Mail}
                    label="Email"
                    value={profileData.email}
                    href={`mailto:${profileData.email}`}
                  />
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <ContactInfoItem
                    icon={Phone}
                    label="Phone"
                    value={profileData.phone}
                    href={`tel:${profileData.phone}`}
                  />
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <ContactInfoItem
                    icon={MapPin}
                    label="Location"
                    value={profileData.location}
                  />
                </motion.div>
              </motion.div>

              {/* Social Links */}
              <motion.div
                className="flex gap-4"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.div variants={fadeInUp}>
                  <SocialButton
                    href={profileData.github}
                    icon={Github}
                    label="GitHub"
                  />
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <SocialButton
                    href={profileData.linkedin}
                    icon={Linkedin}
                    label="LinkedIn"
                  />
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={fadeInRight}>
              <form onSubmit={handleSubmit} className="space-y-4">
                <motion.div
                  className="grid grid-cols-2 gap-4"
                  variants={staggerContainer}
                >
                  <FormInput
                    id="name"
                    label="Name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(value) =>
                      setFormData({ ...formData, name: value })
                    }
                  />
                  <FormInput
                    id="email"
                    label="Email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(value) =>
                      setFormData({ ...formData, email: value })
                    }
                  />
                </motion.div>

                <FormInput
                  id="subject"
                  label="Subject"
                  placeholder="Internship Opportunity"
                  value={formData.subject}
                  onChange={(value) =>
                    setFormData({ ...formData, subject: value })
                  }
                />

                <motion.div variants={fadeInUp}>
                  <label
                    htmlFor="message"
                    className="block text-sm text-gray-400 mb-2"
                  >
                    Message
                  </label>
                  <motion.textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl focus:outline-none focus:border-emerald-500 transition-colors text-white placeholder-gray-500 resize-none"
                    placeholder="Tell me about the opportunity..."
                    whileFocus={{ scale: 1.01 }}
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  className="w-full py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-xl transition-colors flex items-center justify-center gap-2"
                  variants={buttonHover}
                  initial="rest"
                  whileHover="hover"
                  whileTap="tap"
                  disabled={isSubmitted}
                >
                  {isSubmitted ? (
                    <>
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 500 }}
                      >
                        <CheckCircle size={18} />
                      </motion.span>
                      Message Sent!
                    </>
                  ) : (
                    <>
                      Send Message
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <Send size={18} />
                      </motion.span>
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
