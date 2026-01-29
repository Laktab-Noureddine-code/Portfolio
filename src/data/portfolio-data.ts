export const profileData = {
  name: "Noureddine Laktab",
  firstName: "Noureddine",
  lastName: "Laktab",
  role: "Full Stack Web Developer - React / Laravel",
  tagline:
    "Specialized in React and Laravel. Passionate about designing and building complete business applications.",
  status: "Seeking an internship to apply technical expertise",
  location: "Casablanca, Maroc",
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
  { name: "Git", icon: "/tech/git.svg" },
  { name: "Vercel", icon: "/tech/vercel.svg" },
];

export const projects = [
  {
    id: 1,
    title: "3sila-ai",
    subtitle: "AI-Powered Translation & Summarization",
    description:
      "A translation and text summarization tool leveraging AI APIs. Features intelligent language detection, multi-language support, and context-aware summarization capabilities.",
    tech: [
      { name: "FastAPI", icon: "/tech/FastAPI.svg" },
      { name: "Vue.js", icon: "/tech/vue.svg" },
      { name: "SQLite", icon: "/tech/sqlite.svg" },
      { name: "TailwindCSS", icon: "/tech/tailwind.svg" },
      { name: "Vercel", icon: "/tech/vercel.svg" },
      { name: "docker", icon: "/tech/docker.svg" },
    ],
    image: "/projects/3ssila/3ssila1.png",
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
    tech: [
      { name: "Laravel", icon: "/tech/laravel.svg" },
      { name: "React", icon: "/tech/react.svg" },
      { name: "Docker", icon: "/tech/docker.svg" },
      { name: "Git", icon: "/tech/git.svg" },
      { name: "MySQL", icon: "/tech/mysql.svg" },
    ],
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
    tech: [
      { name: "Laravel 11", icon: "/tech/laravel.svg" },
      { name: "MySQL", icon: "/tech/mysql.svg" },
      { name: "TailwindCSS", icon: "/tech/tailwind.svg" },
      { name: "jQuery", icon: "/tech/jquery.svg" },
    ],
    image: "/projects/material-management.png",
    images: [
      "/projects/it/it1.png",
      "/projects/it/it2.png",
      "/projects/it/it3.png",
      "/projects/it/it4.png",
      "/projects/it/it5.png",
    ],
    github: "https://github.com/Laktab-Noureddine-code/jet-contractors",
    live: "#",
    featured: true,
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
  { name: "Resume", href: "/CV_LAKTAB.pdf", download: true },
  { name: "Contact", href: "#contact" },
];
