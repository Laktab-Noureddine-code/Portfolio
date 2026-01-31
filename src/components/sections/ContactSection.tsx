import { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  Send,
  AtSign,
  ArrowRight,
  Loader2,
  CheckCircle,
  XCircle,
} from "lucide-react";
import { profileData } from "../../data/portfolio-data";
import emailjs from "@emailjs/browser";

// EmailJS credentials
const EMAILJS_SERVICE_ID = "service_btav8bo";
const EMAILJS_TEMPLATE_ID = "template_i3qw6sw";
const EMAILJS_PUBLIC_KEY = "omkybeoZ5KgYPt0j6";

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current!,
        EMAILJS_PUBLIC_KEY,
      );
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      // Reset status after 3 seconds
      setTimeout(() => setStatus("idle"), 3000);
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  const characterCount = formData.message.length;
  const maxCharacters = 500;

  return (
    <section className="mb-12">
      <motion.h2
        id="contact"
        className="mb-2 scroll-mt-20 text-[1.7rem] font-[750] text-white motion-reduce:transition-none"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Contact me
        <span className="bg-gradient-to-r from-[#a2facf] to-[#64acff] bg-clip-text text-transparent">
          .
        </span>
      </motion.h2>

      <motion.p
        className="text-neutral-300"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
      >
        I'm always eager to explore new opportunities and take on exciting
        projects. If you have a project in mind, or just want to say hi, feel
        free to send me a message.
      </motion.p>

      {/* Contact Form */}
      <motion.div
        className="my-6 flex w-full rounded-md border border-neutral-800 bg-[#161617] p-5"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        <form
          ref={formRef}
          className="relative flex w-full flex-col items-center justify-center"
          onSubmit={handleSubmit}
        >
          <div className="block w-full items-center justify-center gap-4 text-left md:flex">
            {/* Name Field */}
            <label
              htmlFor="name"
              className="w-full text-left text-sm font-bold tracking-wide text-neutral-300"
            >
              Name
              <span
                aria-hidden="true"
                className="cursor-help text-red-500"
                title="Required"
              >
                *
              </span>
              <input
                id="name"
                className="border-neutral-800 text-white focus:border-neutral-700 my-2 w-full rounded-lg border p-2 font-normal outline-0 duration-200 bg-transparent"
                type="text"
                placeholder="Your Name"
                name="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />
            </label>

            {/* Email Field */}
            <label
              htmlFor="email"
              className="w-full text-left text-sm font-bold tracking-wide text-neutral-300"
            >
              Email
              <span
                aria-hidden="true"
                className="cursor-help text-red-500"
                title="Required"
              >
                *
              </span>
              <input
                id="email"
                className="border-neutral-800 text-white focus:border-neutral-700 my-2 w-full rounded-lg border p-2 font-normal outline-0 duration-200 bg-transparent"
                type="email"
                placeholder="name@domain.com"
                name="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
            </label>
          </div>

          {/* Message Field */}
          <div className="mt-2 flex w-full flex-col items-center justify-center gap-1.5">
            <label
              htmlFor="message"
              className="w-full text-left text-sm font-bold tracking-wide text-neutral-300"
            >
              Message
              <span
                aria-hidden="true"
                className="cursor-help text-red-500"
                title="Required"
              >
                *
              </span>
              <textarea
                name="message"
                id="message"
                className="border-neutral-800 text-white focus:border-neutral-700 mt-2 max-h-40 min-h-24 w-full rounded-lg border p-2 font-normal outline-0 duration-200 bg-transparent"
                placeholder="Hello there, I would like to ask you about..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    message: e.target.value.slice(0, maxCharacters),
                  })
                }
                required
              />
            </label>
            <span className="text-neutral-300 ml-auto text-xs opacity-50">
              {characterCount}/{maxCharacters} characters
            </span>
          </div>

          {/* Submit Button */}
          <button
            className="group flex w-fit items-center rounded-md px-4 py-2 font-medium duration-200 disabled:cursor-not-allowed disabled:opacity-50 motion-reduce:transition-none bg-white/10 text-white hover:bg-white/15 ml-auto mt-4"
            type="submit"
            disabled={
              status === "loading" ||
              !formData.name ||
              !formData.email ||
              !formData.message
            }
          >
            {status === "loading" && (
              <>
                <Loader2 className="mr-2 size-4 animate-spin" />
                Sending...
              </>
            )}
            {status === "success" && (
              <>
                <CheckCircle className="mr-2 size-4 text-green-500" />
                Sent!
              </>
            )}
            {status === "error" && (
              <>
                <XCircle className="mr-2 size-4 text-red-500" />
                Failed
              </>
            )}
            {status === "idle" && (
              <>
                <Send className="mr-2 size-4" />
                Send
              </>
            )}
          </button>
        </form>
      </motion.div>

      {/* Alternative Contact Methods */}
      <motion.p
        className="text-neutral-300"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        Or contact me with...
      </motion.p>

      <motion.div
        className="mt-4 flex flex-wrap gap-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
      >
        {/* Email */}
        <a
          className="group flex w-fit items-center rounded-md px-4 py-2 font-medium duration-200 motion-reduce:transition-none border border-neutral-800 bg-[#161617] text-white hover:border-neutral-700 hover:bg-[#202021] gap-2"
          href={`mailto:${profileData.email}`}
        >
          <AtSign className="size-5" />
          Email
          <ArrowRight className="ml-2 size-4 duration-200 group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0" />
        </a>

        {/* LinkedIn */}
        <a
          className="group flex w-fit items-center rounded-md px-4 py-2 font-medium duration-200 motion-reduce:transition-none border border-neutral-800 bg-[#161617] text-white hover:border-neutral-700 hover:bg-[#202021] gap-2"
          href={profileData.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            className="size-5 fill-[#0A66C2]"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
          LinkedIn
          <ArrowRight className="ml-2 size-4 duration-200 group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0" />
        </a>

        {/* GitHub */}
        <a
          className="group flex w-fit items-center rounded-md px-4 py-2 font-medium duration-200 motion-reduce:transition-none border border-neutral-800 bg-[#161617] text-white hover:border-neutral-700 hover:bg-[#202021] gap-2"
          href={profileData.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            className="size-5 fill-white"
            viewBox="0 0 25 25"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.5103 0C5.59245 0 0 5.72914 0 12.8169C0 18.4825 3.58327 23.2783 8.55422 24.9757C9.17572 25.1033 9.40337 24.6999 9.40337 24.3606C9.40337 24.0634 9.38289 23.045 9.38289 21.9838C5.90281 22.7478 5.17812 20.4559 5.17812 20.4559C4.61885 18.9705 3.79018 18.5887 3.79018 18.5887C2.65116 17.8036 3.87315 17.8036 3.87315 17.8036C5.13663 17.8885 5.79961 19.1192 5.79961 19.1192C6.9179 21.0713 8.7199 20.5197 9.44486 20.1801C9.54831 19.3525 9.87993 18.7796 10.232 18.4614C7.45642 18.1642 4.53613 17.0609 4.53613 12.1377C4.53613 10.7372 5.03292 9.59137 5.8201 8.70022C5.6959 8.382 5.26083 7.06612 5.94455 5.30493C5.94455 5.30493 7.00087 4.96534 9.38263 6.62055C10.4023 6.33999 11.454 6.19727 12.5103 6.19607C13.5667 6.19607 14.6435 6.34477 15.6378 6.62055C18.0198 4.96534 19.0761 5.30493 19.0761 5.30493C19.7599 7.06612 19.3245 8.382 19.2003 8.70022C20.0083 9.59137 20.4846 10.7372 20.4846 12.1377C20.4846 17.0609 17.5643 18.1429 14.7679 18.4614C15.2237 18.8645 15.6171 19.6283 15.6171 20.8379C15.6171 22.5567 15.5966 23.9361 15.5966 24.3603C15.5966 24.6999 15.8245 25.1033 16.4457 24.9759C21.4167 23.278 24.9999 18.4825 24.9999 12.8169C25.0204 5.72914 19.4075 0 12.5103 0Z"
            />
          </svg>
          GitHub
          <ArrowRight className="ml-2 size-4 duration-200 group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0" />
        </a>
      </motion.div>
    </section>
  );
}
