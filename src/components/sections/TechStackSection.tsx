import { motion } from "framer-motion";
import { techStack } from "../../data/portfolio-data";

export default function TechStackSection() {
  return (
    <section className="my-6 mb-16">
      <motion.h2
        id="tech"
        className="mb-2 scroll-mt-20 text-[1.7rem] font-[750] motion-reduce:transition-none"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Technologies I use
        <span className="bg-gradient-to-r from-[#6310ff] to-[#1491ff] bg-clip-text text-transparent dark:from-[#a2facf] dark:to-[#64acff]">
          .
        </span>
      </motion.h2>

      <motion.p
        className="text-neutral-800 dark:text-neutral-300"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
      >
        Over the years, I have worked with a variety of technologies. Here are
        some of the technologies I have experience with:
      </motion.p>

      <motion.div
        className="mt-4 flex flex-wrap gap-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        {techStack.map((tech, index) => (
          <motion.div
            key={tech.name}
            className="flex cursor-default items-center gap-2 rounded-md border border-neutral-200 bg-white px-2 py-1 font-mono font-medium text-neutral-800 duration-200 hover:bg-neutral-50 motion-reduce:transition-none dark:border-neutral-800 dark:bg-transparent dark:text-neutral-400 dark:hover:border-neutral-700 dark:hover:bg-white/5"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 * index }}
            whileHover={{ scale: 1.05 }}
          >
            <img
              alt={`${tech.name} logo`}
              loading="lazy"
              width="20"
              height="20"
              className="size-5 rounded"
              src={tech.icon}
            />
            {tech.name}
          </motion.div>
        ))}
      </motion.div>

      <motion.p
        className="mt-4 text-center text-neutral-800 dark:text-neutral-400"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        ...and many more!
      </motion.p>
    </section>
  );
}
