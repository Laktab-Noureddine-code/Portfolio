import { profileData, techStack, interests } from "@/data/portfolio-data";
import { MapPin, Sparkles } from "lucide-react";

const About = () => {
  const categories = [
    { title: "Frontend", items: techStack.frontend, color: "from-blue-500 to-cyan-500" },
    { title: "Backend", items: techStack.backend, color: "from-violet-500 to-purple-500" },
    { title: "Database", items: techStack.database, color: "from-green-500 to-emerald-500" },
    { title: "Tools", items: techStack.tools, color: "from-orange-500 to-amber-500" },
  ];

  return (
    <section id="about" className="bg-white dark:bg-[#0a0a0a] py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-violet-400 text-sm font-medium tracking-widest uppercase">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-4">
            Passionate about creating
            <span className="gradient-text"> digital experiences</span>
          </h2>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Bio Card - Large */}
          <div className="lg:col-span-2 bg-gray-50 dark:bg-[#111] rounded-3xl p-8 border border-gray-200 dark:border-white/5 shadow-sm dark:shadow-none transition-all duration-500 hover:border-violet-500/50 hover:shadow-lg dark:hover:shadow-violet-500/10">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-3xl">
                👨‍💻
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{profileData.name}</h3>
                <p className="text-violet-400 font-medium">{profileData.role}</p>
                <div className="flex items-center gap-2 text-gray-400 mt-1">
                  <MapPin size={14} />
                  <span className="text-sm">{profileData.location}</span>
                </div>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">{profileData.bio}</p>
          </div>

          {/* Quick Stats Card */}
          <div className="bg-gray-50 dark:bg-[#111] rounded-3xl p-8 border border-gray-200 dark:border-white/5 shadow-sm dark:shadow-none transition-all duration-500 hover:border-violet-500/50 hover:shadow-lg dark:hover:shadow-violet-500/10">
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="text-violet-600 dark:text-violet-400" size={24} />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Quick Facts</h3>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-white/5">
                <span className="text-gray-500 dark:text-gray-400">Experience</span>
                <span className="text-gray-900 dark:text-white font-semibold">2+ Years</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-white/5">
                <span className="text-gray-500 dark:text-gray-400">Projects</span>
                <span className="text-gray-900 dark:text-white font-semibold">10+</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-gray-500 dark:text-gray-400">Technologies</span>
                <span className="text-gray-900 dark:text-white font-semibold">15+</span>
              </div>
            </div>
          </div>

          {/* Tech Stack Cards */}
          {categories.map((category) => (
            <div
              key={category.title}
              className="bg-gray-50 dark:bg-[#111] rounded-3xl p-6 border border-gray-200 dark:border-white/5 shadow-sm dark:shadow-none transition-all duration-500 hover:border-violet-500/50 hover:shadow-lg dark:hover:shadow-violet-500/10"
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.color}`}
                />
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span
                    key={item.name}
                    className="px-3 py-2 bg-white dark:bg-white/5 rounded-xl text-sm text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-white/10 hover:bg-violet-50 dark:hover:bg-violet-500/20 hover:text-violet-600 dark:hover:text-violet-300 hover:border-violet-300 dark:hover:border-violet-500/30 transition-all cursor-default"
                  >
                    {item.icon} {item.name}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* Interests Card */}
          <div className="bg-gray-50 dark:bg-[#111] rounded-3xl p-6 border border-gray-200 dark:border-white/5 shadow-sm dark:shadow-none transition-all duration-500 hover:border-violet-500/50 hover:shadow-lg dark:hover:shadow-violet-500/10">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-5">Interests & Hobbies</h3>
            <div className="grid grid-cols-2 gap-3">
              {interests.map((interest) => (
                <div
                  key={interest.name}
                  className="flex items-center gap-3 p-3 bg-white dark:bg-white/5 rounded-xl border border-gray-200 dark:border-white/10 hover:bg-violet-50 dark:hover:bg-violet-500/10 hover:border-violet-300 dark:hover:border-violet-500/30 transition-colors"
                >
                  <span className="text-2xl">{interest.icon}</span>
                  <span className="text-gray-600 dark:text-gray-300 text-sm">{interest.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
