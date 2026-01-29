import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { profileData, education } from "../../data/portfolio-data";

export default function AboutSection() {
  // Calculate years of coding
  const startYear = 2023;
  const currentYear = new Date().getFullYear();
  const yearsOfCoding = currentYear - startYear;

  return (
    <section className="mb-16 mt-6">
      <motion.h2
        id="about"
        className="mb-2 scroll-mt-20 text-[1.7rem] font-[750] motion-reduce:transition-none"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        About me
        <span className="bg-gradient-to-r from-[#6310ff] to-[#1491ff] bg-clip-text text-transparent dark:from-[#a2facf] dark:to-[#64acff]">
          .
        </span>
      </motion.h2>

      <motion.div
        className="prose prose-neutral dark:text-neutral-300"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
      >
        <span>
          I have been coding for over {yearsOfCoding} years, building full-stack
          applications and learning DevOps practices.
        </span>
        <p>
          Currently pursuing a {education[0]?.degree} at{" "}
          {education[0]?.institution}.
        </p>
        <span>{profileData.bio}</span>
      </motion.div>

      {/* CTA Buttons */}
      <motion.div
        className="mt-6 flex flex-row flex-wrap gap-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        <a
          rel="noopener noreferrer"
          className="group flex w-fit items-center rounded-md px-4 py-2 font-medium duration-200 motion-reduce:transition-none bg-blue-500 text-white hover:bg-blue-600"
          href={profileData.github}
          target="_blank"
        >
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2 size-5 fill-white stroke-2"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.5103 0C5.59245 0 0 5.72914 0 12.8169C0 18.4825 3.58327 23.2783 8.55422 24.9757C9.17572 25.1033 9.40337 24.6999 9.40337 24.3606C9.40337 24.0634 9.38289 23.045 9.38289 21.9838C5.90281 22.7478 5.17812 20.4559 5.17812 20.4559C4.61885 18.9705 3.79018 18.5887 3.79018 18.5887C2.65116 17.8036 3.87315 17.8036 3.87315 17.8036C5.13663 17.8885 5.79961 19.1192 5.79961 19.1192C6.9179 21.0713 8.7199 20.5197 9.44486 20.1801C9.54831 19.3525 9.87993 18.7796 10.232 18.4614C7.45642 18.1642 4.53613 17.0609 4.53613 12.1377C4.53613 10.7372 5.03292 9.59137 5.8201 8.70022C5.6959 8.382 5.26083 7.06612 5.94455 5.30493C5.94455 5.30493 7.00087 4.96534 9.38263 6.62055C10.4023 6.33999 11.454 6.19727 12.5103 6.19607C13.5667 6.19607 14.6435 6.34477 15.6378 6.62055C18.0198 4.96534 19.0761 5.30493 19.0761 5.30493C19.7599 7.06612 19.3245 8.382 19.2003 8.70022C20.0083 9.59137 20.4846 10.7372 20.4846 12.1377C20.4846 17.0609 17.5643 18.1429 14.7679 18.4614C15.2237 18.8645 15.6171 19.6283 15.6171 20.8379C15.6171 22.5567 15.5966 23.9361 15.5966 24.3603C15.5966 24.6999 15.8245 25.1033 16.4457 24.9759C21.4167 23.278 24.9999 18.4825 24.9999 12.8169C25.0204 5.72914 19.4075 0 12.5103 0Z"
            />
          </svg>
          View my Github
          <ArrowRight className="ml-2 size-4 duration-200 group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0" />
        </a>

        <a
          className="group flex w-fit items-center rounded-md px-4 py-2 font-medium duration-200 motion-reduce:transition-none bg-neutral-200 text-neutral-800 hover:bg-neutral-300 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
          href="#contact"
        >
          Contact me
          <ArrowRight className="ml-2 size-4 duration-200 group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0" />
        </a>
      </motion.div>
    </section>
  );
}
