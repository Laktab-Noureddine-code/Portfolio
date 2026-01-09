import { education } from "@/data/portfolio-data";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="bg-white dark:bg-[#0a0a0a] py-24 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-violet-400 text-sm font-medium tracking-widest uppercase">
            Background
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-4">
            Education & <span className="gradient-text">Training</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500 via-purple-500 to-transparent" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {education.map((item) => (
              <div key={item.id} className="relative pl-20">
                {/* Timeline Dot */}
                <div className="absolute left-6 top-2 w-5 h-5 rounded-full bg-white dark:bg-[#0a0a0a] border-4 border-violet-500 z-10">
                  {item.current && (
                    <div className="absolute inset-0 rounded-full bg-violet-500 animate-ping opacity-75" />
                  )}
                </div>

                {/* Content Card */}
                <div className="bg-gray-50 dark:bg-[#111] rounded-2xl p-6 border border-gray-200 dark:border-white/5 shadow-sm dark:shadow-none transition-all duration-500 hover:border-violet-500/50 hover:shadow-lg dark:hover:shadow-violet-500/10">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500/20 to-purple-600/20 flex items-center justify-center shrink-0">
                        <GraduationCap className="text-violet-400" size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {item.degree}
                        </h3>
                        <div className="flex items-center gap-2 text-gray-400 mt-1">
                          <MapPin size={14} />
                          <span className="text-sm">{item.institution}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-violet-400">
                      <Calendar size={16} />
                      <span className="text-sm font-medium">{item.period}</span>
                      {item.current && (
                        <span className="ml-2 px-2 py-1 bg-violet-500/20 text-violet-400 text-xs rounded-full">
                          Current
                        </span>
                      )}
                    </div>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400 mt-4 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
