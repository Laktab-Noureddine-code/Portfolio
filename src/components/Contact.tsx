import { useState } from "react";
import { profileData } from "@/data/portfolio-data";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Github,
  ArrowUpRight,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission - you can integrate with EmailJS, Formspree, etc.
    const mailtoLink = `mailto:${profileData.email}?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socialLinks = [
    {
      name: "Email",
      href: `mailto:${profileData.email}`,
      icon: Mail,
      label: profileData.email,
    },
    {
      name: "LinkedIn",
      href: profileData.linkedin,
      icon: Linkedin,
      label: "Connect on LinkedIn",
    },
    {
      name: "GitHub",
      href: profileData.github,
      icon: Github,
      label: "View GitHub Profile",
    },
    {
      name: "Phone",
      href: `tel:${profileData.phone}`,
      icon: Phone,
      label: profileData.phone,
    },
  ];

  return (
    <section id="contact" className="bg-gray-50 dark:bg-[#0a0a0a] py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-violet-400 text-sm font-medium tracking-widest uppercase">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-4">
            Let's work <span className="gradient-text">together</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            I'm always open to exploring new opportunities and have exciting projects.
            Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white dark:bg-[#111] rounded-3xl p-8 border border-gray-200 dark:border-white/5 shadow-sm dark:shadow-none">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Send me a message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-700 text-white font-medium py-4 rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info & Social Links */}
          <div className="space-y-8">
            {/* Info Card */}
            <div className="bg-white dark:bg-[#111] rounded-3xl p-8 border border-gray-200 dark:border-white/5 shadow-sm dark:shadow-none">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-violet-100 dark:bg-violet-500/20 flex items-center justify-center">
                    <MapPin className="text-violet-600 dark:text-violet-400" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">Location</p>
                    <p className="text-gray-900 dark:text-white font-medium">
                      {profileData.location}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-violet-100 dark:bg-violet-500/20 flex items-center justify-center">
                    <Mail className="text-violet-600 dark:text-violet-400" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">Email</p>
                    <a
                      href={`mailto:${profileData.email}`}
                      className="text-gray-900 dark:text-white font-medium hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                    >
                      {profileData.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-violet-100 dark:bg-violet-500/20 flex items-center justify-center">
                    <Phone className="text-violet-600 dark:text-violet-400" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">Phone</p>
                    <a
                      href={`tel:${profileData.phone}`}
                      className="text-gray-900 dark:text-white font-medium hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                    >
                      {profileData.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white dark:bg-[#111] rounded-3xl p-8 border border-gray-200 dark:border-white/5 shadow-sm dark:shadow-none">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Connect with me
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 p-4 bg-gray-50 dark:bg-white/5 rounded-xl hover:bg-violet-50 dark:hover:bg-violet-500/20 border border-gray-200 dark:border-white/10 hover:border-violet-300 dark:hover:border-violet-500/30 transition-all"
                  >
                    <link.icon className="text-violet-600 dark:text-violet-400" size={24} />
                    <span className="text-gray-900 dark:text-white font-medium group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                      {link.name}
                    </span>
                    <ArrowUpRight
                      size={16}
                      className="ml-auto text-gray-400 group-hover:text-violet-600 dark:group-hover:text-violet-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
