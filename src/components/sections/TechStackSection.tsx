"use client";

import Image from "next/image";
import { m } from "framer-motion";
import { techStack } from "../../data/portfolio-data";

export default function TechStackSection() {
  return (
    <section className="my-6 mb-16">
      <m.h2
        id="tech"
        className="mb-2 scroll-mt-20 text-[1.7rem] font-[750] motion-reduce:transition-none"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Technologies I use
        <span className="bg-gradient-to-r from-gradient-from to-gradient-to bg-clip-text text-transparent">
          .
        </span>
      </m.h2>

      <m.p
        className="text-body"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
      >
        Over the years, I have worked with a variety of technologies. Here are
        some of the technologies I have experience with:
      </m.p>

      <m.div
        className="mt-4 flex flex-wrap gap-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        {techStack.map((tech, index) => {
          const TechWrapper = tech.link ? m.a : m.div;
          const linkProps = tech.link
            ? { href: tech.link, target: "_blank", rel: "noopener noreferrer" }
            : {};
          return (
            <TechWrapper
              key={tech.name}
              {...linkProps}
              className={`flex items-center gap-2 rounded-md border border-border bg-transparent px-2 py-1 font-mono font-medium text-muted duration-200 hover:border-border-strong hover:bg-hover motion-reduce:transition-none ${tech.link ? "cursor-pointer hover:text-foreground" : "cursor-default"}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * index }}
              whileHover={{ scale: 1.05 }}
            >
              <Image
                alt=""
                loading="lazy"
                width={20}
                height={20}
                className="size-5 rounded"
                src={tech.icon}
              />
              {tech.name}
            </TechWrapper>
          );
        })}
      </m.div>

      <m.p
        className="mt-4 text-center text-muted"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        ...and many more!
      </m.p>
    </section>
  );
}
