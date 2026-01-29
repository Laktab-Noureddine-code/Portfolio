export const profileData = {
  name: "Noureddine Laktab",
  firstName: "Noureddine",
  lastName: "Laktab",
  role: "Full Stack Web Developer - React / Laravel",
  tagline:
    "Specialized in React and Laravel. Passionate about designing and building complete business applications.",
  status: "Seeking an internship to apply technical expertise",
  location: "Bouznika, Maroc",
  email: "noureddine.laktab15@gmail.com",
  linkedin: "https://linkedin.com/in/noureddine-laktab",
  phone: "+212 606271812",
  github: "https://github.com/Laktab-Noureddine-code",
  bio: "I am a Full Stack Web Developer specialized in React and Laravel. I am passionate about designing complete business applications and am currently looking for an internship to contribute effectively to production-oriented projects.",
};

export const techStack = [
  { name: "Java", icon: "/tech/java.svg" },
  { name: "Spring Boot", icon: "/tech/spring.svg" },
  { name: "PHP", icon: "/tech/php.svg" },
  { name: "Laravel", icon: "/tech/laravel.svg" },
  { name: "Javascript", icon: "/tech/js.svg" },
  { name: "Typescript", icon: "/tech/typescript.svg" },
  { name: "Angular", icon: "/tech/angular.svg" },
  { name: "React", icon: "/tech/react.svg" },
  { name: "TailwindCSS", icon: "/tech/tailwind.svg" },
  { name: "Docker", icon: "/tech/docker.svg" },
  { name: "MySQL", icon: "/tech/mysql.svg" },
  { name: "MongoDB", icon: "/tech/mongo.svg" },
  { name: "Oracle DB", icon: "/tech/oracle.svg" },
  { name: "Git", icon: "/tech/git.svg" },
  { name: "Vercel", icon: "/tech/vercel.svg" },
];

export const experience = [
  {
    id: 1,
    title: "Final Year Student",
    subtitle: "Preparing for Exams & Internship Search",
    period: "Jan 2026 - Present",
    description:
      "Actively preparing for final exams while seeking a 2-month internship opportunity to apply my Full Stack and DevOps skills in a professional environment.",
    current: true,
  },
  {
    id: 2,
    title: "DevOps & Cloud Self-Study",
    subtitle: "Docker, Kubernetes, Oracle Cloud",
    period: "Late 2025",
    description:
      "Intensive self-study period focusing on containerization with Docker, orchestration with Kubernetes, and cloud infrastructure on Oracle Cloud.",
    current: false,
  },
];

export const projects = [
  {
    id: 1,
    title: "3sila-ai",
    subtitle: "AI-Powered Translation & Summarization",
    description:
      "A translation and text summarization tool leveraging AI APIs. Features intelligent language detection, multi-language support, and context-aware summarization capabilities.",
    tech: ["AI Integration", "API", "Full Stack"],
    image: "/projects/3ssila/3sila1.png",
    images: [
      "/projects/3ssila/3ssila1.png",
      "/projects/3ssila/3ssila2.png",
      "/projects/3ssila/3ssila3.png",
      "/projects/3ssila/3ssila4.png",
      "/projects/3ssila/3ssila5.png",
    ],
    github: "https://github.com/Laktab-Noureddine-code/3sila-ai",
    live: "https://www.3ssila-ai.tech/",
    featured: true,
  },
  {
    id: 2,
    title: "Social Blog App",
    subtitle: "Full-Stack Blogging Platform",
    description:
      "A full-stack blogging platform featuring a decoupled architecture with Laravel backend and React frontend. Includes user authentication, post management, and social interactions.",
    tech: ["Laravel", "React", "Docker", "Git"],
    image: "/projects/social-blog.png",
    images: [
      "/projects/mn/mn1.jpg",
      "/projects/mn/mn2.jpg",
      "/projects/mn/mn3.jpg",
      "/projects/mn/mn4.jpg",
      "/projects/mn/mn5.jpg",
      "/projects/mn/mn6.jpg",
      "/projects/mn/mn7.jpg",
      "/projects/mn/mn8.jpg",
      "/projects/mn/mn9.jpg",
      "/projects/mn/mn10.jpg",
      "/projects/mn/mn11.jpg",
    ],
    github: "https://github.com/Laktab-Noureddine-code/social-blog",
    live: "#",
    featured: true,
  },
  {
    id: 3,
    title: "IT Material Management System",
    subtitle: "Jet Contractors - Internship Project",
    description:
      "An internship project handling full hardware inventory tracking with real-time monitoring, intelligent assignment systems, and PDF generation. Includes an analytical dashboard.",
    tech: ["Laravel 11", "MySQL", "TailwindCSS", "jQuery"],
    image: "/projects/material-management.png",
    images: [
      "/projects/material-management.png",
      "/projects/material-management.png",
      "/projects/material-management.png",
    ],
    github: "https://github.com/Laktab-Noureddine-code/material-management",
    live: "#",
    featured: false,
  },
];

export const education = [
  {
    id: 1,
    degree: "Licence in Systems Engineering & Web Technologies",
    institution: "EST Sidi Bennour",
    period: "2025 - 2026",
    description:
      "Advanced studies in systems engineering and modern web technologies.",
    current: true,
  },
  {
    id: 2,
    degree: "Specialized Technician in Web Development Full-Stack",
    institution: "ISTA Bouznika",
    period: "2023 - 2025",
    description:
      "Comprehensive training in full-stack web development, covering both frontend and backend technologies.",
    current: false,
  },
];

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Resume", href: "/resume.pdf", download: true },
  { name: "Contact", href: "#contact" },
];
