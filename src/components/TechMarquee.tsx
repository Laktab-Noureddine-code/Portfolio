import { allTechForMarquee } from "@/data/portfolio-data";

const TechMarquee = () => {
  // Double the array for seamless loop
  const marqueeItems = [...allTechForMarquee, ...allTechForMarquee];

  return (
    <section className="bg-gray-50 dark:bg-[#0a0a0a] py-8 overflow-hidden border-y border-gray-200 dark:border-white/5">
      <div className="relative">
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 dark:from-[#0a0a0a] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 dark:from-[#0a0a0a] to-transparent z-10" />

        {/* Marquee container */}
        <div className="flex animate-marquee">
          {marqueeItems.map((tech, index) => (
            <div
              key={`${tech}-${index}`}
              className="flex items-center gap-4 mx-8 shrink-0"
            >
              <span className="text-gray-700 dark:text-white/80 font-medium text-lg md:text-xl whitespace-nowrap">
                {tech}
              </span>
              <span className="text-violet-500 text-2xl">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechMarquee;
