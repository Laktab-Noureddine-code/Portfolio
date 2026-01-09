export const profileData = {
  name: "Noureddine Laktab",
  firstName: "Noureddine",
  lastName: "Laktab",
  role: "Full Stack Developer",
  location: "Bouznika, Maroc",
  email: "noureddine.laktab15@gmail.com",
  linkedin: "https://linkedin.com/in/noureddine-laktab",
  phone: "+212 606271812",
  github: "https://github.com/noureddine-laktab",
  bio: "Passionate Full Stack developer dedicated to creating modern, high-performance, and secure solutions. Curious, rigorous, and always seeking improvement, I apply my technical skills to innovative projects. I specialize in both backend logic and frontend interactivity.",
};

export const techStack = {
  frontend: [
    { name: "React.js", icon: "⚛️" },
    { name: "Tailwind CSS", icon: "🎨" },
    { name: "Angular", icon: "🅰️" },
    { name: "TypeScript", icon: "📘" },
    { name: "JavaScript", icon: "🟨" },
    { name: "Figma", icon: "🎯" },
  ],
  backend: [
    { name: "Laravel", icon: "🔴" },
    { name: "Spring Boot", icon: "🍃" },
    { name: "Python", icon: "🐍" },
  ],
  database: [
    { name: "MySQL", icon: "🐬" },
    { name: "MongoDB", icon: "🍃" },
    { name: "Oracle", icon: "🔶" },
  ],
  tools: [
    { name: "Docker", icon: "🐳" },
    { name: "Git", icon: "📦" },
    { name: "GitHub", icon: "🐙" },
    { name: "SonarQube", icon: "🔍" },
  ],
};

export const allTechForMarquee = [
  "React.js",
  "Laravel",
  "TypeScript",
  "Docker",
  "Tailwind CSS",
  "Spring Boot",
  "MySQL",
  "MongoDB",
  "Angular",
  "Python",
  "Git",
  "Figma",
];

export const projects = [
  {
    id: 1,
    title: "Professional Social Network",
    subtitle: "PFF - Plateforme Finale de Formation",
    description:
      "A comprehensive social platform with profile management, groups, pages, and real-time messaging. Features a rich blog editor with social interactions (likes, comments).",
    tech: ["Laravel 11", "React.js", "TailwindCSS"],
    image: "/projects/social-network.png",
    github: "#",
    live: "#",
    featured: true,
  },
  {
    id: 2,
    title: "IT Material Management System",
    subtitle: "Jet Contractors - Internship Project",
    description:
      "An internship project handling full hardware inventory tracking with real-time monitoring, intelligent assignment systems, and PDF generation. Includes an analytical dashboard.",
    tech: ["Laravel 11", "MySQL", "TailwindCSS", "jQuery"],
    image: "/projects/material-management.png",
    github: "#",
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
    description: "Advanced studies in systems engineering and modern web technologies.",
    current: true,
  },
  {
    id: 2,
    degree: "Specialized Technician in Web Development Full-Stack",
    institution: "ISTA Bouznika",
    period: "2023 - 2025",
    description: "Comprehensive training in full-stack web development, covering both frontend and backend technologies.",
    current: false,
  },
];

export const interests = [
  { name: "UI/UX Design", icon: "🎨" },
  { name: "Bodybuilding", icon: "💪" },
  { name: "Surf", icon: "🏄" },
  { name: "Football", icon: "⚽" },
];

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Resume", href: "/resume.pdf", download: true },
  { name: "Contact", href: "#contact" },
];
