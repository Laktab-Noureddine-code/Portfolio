export const profileData = {
  name: "Noureddine Laktab",
  firstName: "Noureddine",
  lastName: "Laktab",
  role: "Full Stack Developer & DevOps Enthusiast",
  tagline: "Bridging the gap between code and deployment. Specializing in Spring Boot, Angular, and Cloud Infrastructure.",
  status: "Currently seeking a 2-month internship",
  location: "Bouznika, Maroc",
  email: "noureddine.laktab15@gmail.com",
  linkedin: "https://linkedin.com/in/noureddine-laktab",
  phone: "+212 606271812",
  github: "https://github.com/noureddine-laktab",
  bio: "I am a Computer Science student passionate about building scalable applications and automating their deployment. I focus on the intersection of Software Engineering and DevOps.",
};

export const techStack = {
  backend: [
    { name: "Java (Spring Boot)", icon: "🍃" },
    { name: "PHP (Laravel)", icon: "🔴" },
  ],
  frontend: [
    { name: "Angular", icon: "🅰️" },
    { name: "React", icon: "⚛️" },
  ],
  devops: [
    { name: "Docker", icon: "🐳" },
    { name: "Ansible", icon: "🔧" },
    { name: "OpenShift", icon: "🔴" },
    { name: "VMware", icon: "💻" },
  ],
  database: [
    { name: "Oracle DB", icon: "🔶" },
    { name: "MySQL", icon: "🐬" },
    { name: "MongoDB", icon: "🍃" },
  ],
};

export const allTechForMarquee = [
  "Spring Boot",
  "Angular",
  "React",
  "Docker",
  "Laravel",
  "Oracle DB",
  "Ansible",
  "OpenShift",
  "VMware",
  "MongoDB",
  "MySQL",
  "Git",
];

export const experience = [
  {
    id: 1,
    title: "Final Year Student",
    subtitle: "Preparing for Exams & Internship Search",
    period: "Jan 2026 - Present",
    description: "Actively preparing for final exams while seeking a 2-month internship opportunity to apply my Full Stack and DevOps skills in a professional environment.",
    current: true,
  },
  {
    id: 2,
    title: "Darek Kitchen - University Project",
    subtitle: "Technical Study & Ansible Deployment",
    period: "Dec 2025",
    description: "Led the technical architecture study and implemented automated deployment pipelines using Ansible for a salad ordering platform.",
    current: false,
  },
  {
    id: 3,
    title: "DevOps & Cloud Self-Study",
    subtitle: "Docker, Kubernetes, Oracle Cloud",
    period: "Late 2025",
    description: "Intensive self-study period focusing on containerization with Docker, orchestration with Kubernetes, and cloud infrastructure on Oracle Cloud.",
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
    image: "/projects/3sila-ai.png",
    github: "https://github.com/noureddine-laktab/3sila-ai",
    live: "#",
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
    github: "https://github.com/noureddine-laktab/social-blog",
    live: "#",
    featured: true,
  },
  {
    id: 3,
    title: "Darek Kitchen",
    subtitle: "Salad Ordering Platform",
    description:
      "A salad ordering platform featuring automated deployment pipelines. Built with the MERN stack and deployed using Ansible automation for consistent and reliable deployments.",
    tech: ["MERN Stack", "Ansible", "Automation"],
    image: "/projects/darek-kitchen.png",
    github: "https://github.com/noureddine-laktab/darek-kitchen",
    live: "#",
    featured: true,
  },
  {
    id: 4,
    title: "Professional Social Network",
    subtitle: "PFF - Plateforme Finale de Formation",
    description:
      "A comprehensive social platform with profile management, groups, pages, and real-time messaging. Features a rich blog editor with social interactions (likes, comments).",
    tech: ["Laravel 11", "React.js", "TailwindCSS"],
    image: "/projects/social-network.png",
    github: "#",
    live: "#",
    featured: false,
  },
  {
    id: 5,
    title: "IT Material Management System",
    subtitle: "Jet Contractors - Internship Project",
    description:
      "An internship project handling full hardware inventory tracking with real-time monitoring, intelligent assignment systems, and PDF generation. Includes an analytical dashboard.",
    tech: ["Laravel 11", "MySQL", "TailwindCSS", "jQuery"],
    image: "/projects/material-management.png",
    github: "#",
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
