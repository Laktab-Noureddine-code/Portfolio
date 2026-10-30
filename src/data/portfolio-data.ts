export const profileData = {
  name: "Noureddine Laktab",
  firstName: "Noureddine",
  lastName: "Laktab",
  role: "Full Stack Web Developer - React / Laravel",
  tagline: "designing and building complete business applications.",
  status: "Seeking an internship to apply technical expertise",
  location: "Casablanca, Maroc",
  email: "noureddine.laktab15@gmail.com",
  linkedin: "https://linkedin.com/in/noureddine-laktab",
  phone: "+212 606271812",
  github: "https://github.com/Laktab-Noureddine-code",
  bio: "I am a Full Stack Web Developer specialized in React and Laravel. Currently seeking an internship to contribute to production-oriented projects.",
  accentColor: "#27f9b0",
};

export const techStack = [
  { name: "Java", icon: "/tech/java.svg", link: "https://www.java.com/" },
  {
    name: "Spring Boot",
    icon: "/tech/spring.svg",
    link: "https://spring.io/projects/spring-boot",
  },
  { name: "PHP", icon: "/tech/php.svg", link: "https://www.php.net/" },
  { name: "Laravel", icon: "/tech/laravel.svg", link: "https://laravel.com/" },
  {
    name: "Javascript",
    icon: "/tech/js.svg",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "Typescript",
    icon: "/tech/typescript.svg",
    link: "https://www.typescriptlang.org/",
  },
  { name: "Angular", icon: "/tech/angular.svg", link: "https://angular.dev/" },
  { name: "Flutter", icon: "/tech/flutter.svg", link: "https://flutter.dev/" },
  { name: "Figma", icon: "/tech/figma.svg", link: "https://www.figma.com/" },
  { name: "NextJs", icon: "/tech/nextjs.svg", link: "https://nextjs.org/" },
  { name: "React", icon: "/tech/react.svg", link: "https://react.dev/" },
  {
    name: "TailwindCSS",
    icon: "/tech/tailwind.svg",
    link: "https://tailwindcss.com/",
  },
  { name: "Docker", icon: "/tech/docker.svg", link: "https://www.docker.com/" },
  { name: "MySQL", icon: "/tech/mysql.svg", link: "https://www.mysql.com/" },
  {
    name: "MongoDB",
    icon: "/tech/mongo.svg",
    link: "https://www.mongodb.com/",
  },
  { name: "Git", icon: "/tech/git.svg", link: "https://git-scm.com/" },
  { name: "Vercel", icon: "/tech/vercel.svg", link: "https://vercel.com/" },
];

export const projects = [
  {
    id: 6,
    title: "EFact",
    subtitle: "E-Invoicing API & SDK for Morocco - Itzenata",
    description:
      "A Stripe-like compliance API that lets any SaaS or ERP issue electronic invoices that comply with Morocco's DGI 2026 mandate in a few lines of code. Generates UBL 2.1 XML, applies XAdES signatures, tracks each invoice's submission status in real time, and ships with a developer sandbox, API keys, audit logs and full documentation.",
    tech: [
      {
        name: "Next.js",
        icon: "/tech/nextjs.svg",
        link: "https://nextjs.org/",
      },
      {
        name: "TypeScript",
        icon: "/tech/typescript.svg",
        link: "https://www.typescriptlang.org/",
      },
      {
        name: "Spring Boot",
        icon: "/tech/spring.svg",
        link: "https://spring.io/projects/spring-boot",
      },
      {
        name: "PostgreSQL",
        icon: "/tech/postgresql.svg",
        link: "https://www.postgresql.org/",
      },
      {
        name: "TailwindCSS",
        icon: "/tech/tailwind.svg",
        link: "https://tailwindcss.com/",
      },
      {
        name: "Docker",
        icon: "/tech/docker.svg",
        link: "https://www.docker.com/",
      },
    ],
    image: "/projects/efact/efact1.webp",
    images: [
      "/projects/efact/efact1.webp",
      "/projects/efact/efact2.webp",
      "/projects/efact/efact3.webp",
      "/projects/efact/efact4.webp",
      "/projects/efact/efact5.webp",
      "/projects/efact/efact6.webp",
      "/projects/efact/efact7.webp",
      "/projects/efact/efact8.webp",
    ],
    logo: "/projects/efact/logo.svg",
    github: "#",
    live: "https://efact.ma/",
    featured: true,
  },
  {
    id: 7,
    title: "RepoTruss",
    subtitle: "Developer Technology Discovery Platform",
    description:
      "An independent tech publication to discover, compare and connect developer technologies. Tracks trending open-source repositories, compares frameworks and AI tools side by side, and publishes practical guides. Fully static, with instant client-side search.",
    tech: [
      { name: "Astro", icon: "/tech/astro.svg", link: "https://astro.build/" },
      {
        name: "TypeScript",
        icon: "/tech/typescript.svg",
        link: "https://www.typescriptlang.org/",
      },
      {
        name: "TailwindCSS",
        icon: "/tech/tailwind.svg",
        link: "https://tailwindcss.com/",
      },
      {
        name: "Cloudflare",
        icon: "/tech/cloudflare.svg",
        link: "https://workers.cloudflare.com/",
      },
    ],
    image: "/projects/repotruss/repotruss1.webp",
    images: [
      "/projects/repotruss/repotruss1.webp",
      "/projects/repotruss/repotruss2.webp",
      "/projects/repotruss/repotruss3.webp",
      "/projects/repotruss/repotruss4.webp",
      "/projects/repotruss/repotruss5.webp",
    ],
    logo: "/projects/repotruss/logo.webp",
    github: "#",
    live: "https://repotruss.com/",
    featured: true,
  },
  {
    id: 8,
    title: "FluentSide",
    subtitle: "AI Language Coach for ChatGPT",
    description:
      "Turns everyday ChatGPT conversations into language progress. A ChatGPT connector (MCP server with OAuth) records the corrections ChatGPT makes to your writing, and a private dashboard shows recurring mistakes, honest progress and a daily plan of curated lessons.",
    tech: [
      {
        name: "Next.js",
        icon: "/tech/nextjs.svg",
        link: "https://nextjs.org/",
      },
      {
        name: "TypeScript",
        icon: "/tech/typescript.svg",
        link: "https://www.typescriptlang.org/",
      },
      {
        name: "PostgreSQL",
        icon: "/tech/postgresql.svg",
        link: "https://www.postgresql.org/",
      },
      {
        name: "TailwindCSS",
        icon: "/tech/tailwind.svg",
        link: "https://tailwindcss.com/",
      },
      {
        name: "Cloudflare",
        icon: "/tech/cloudflare.svg",
        link: "https://workers.cloudflare.com/",
      },
    ],
    image: "/projects/fluentside/fluentside1.webp",
    images: [
      "/projects/fluentside/fluentside1.webp",
      "/projects/fluentside/fluentside2.webp",
      "/projects/fluentside/fluentside3.webp",
      "/projects/fluentside/fluentside4.webp",
      "/projects/fluentside/fluentside5.webp",
      "/projects/fluentside/fluentside6.webp",
    ],
    logo: "/projects/fluentside/logo.webp",
    github: "#",
    live: "https://fluentside.com/",
    featured: true,
  },
  {
    id: 1,
    title: "3ssila-ai",
    subtitle: "AI-Powered Translation & Summarization",
    description:
      "A translation and text summarization tool leveraging AI APIs. Features intelligent language detection, multi-language support, and context-aware summarization capabilities.",
    tech: [
      {
        name: "FastAPI",
        icon: "/tech/FastAPI.svg",
        link: "https://fastapi.tiangolo.com/",
      },
      { name: "Vue.js", icon: "/tech/vue.svg", link: "https://vuejs.org/" },
      {
        name: "SQLite",
        icon: "/tech/sqlite.svg",
        link: "https://www.sqlite.org/",
      },
      {
        name: "TailwindCSS",
        icon: "/tech/tailwind.svg",
        link: "https://tailwindcss.com/",
      },
      { name: "Vercel", icon: "/tech/vercel.svg", link: "https://vercel.com/" },
      {
        name: "docker",
        icon: "/tech/docker.svg",
        link: "https://www.docker.com/",
      },
    ],
    image: "/projects/3ssila/3ssila1.webp",
    images: [
      "/projects/3ssila/3ssila1.webp",
      "/projects/3ssila/3ssila2.webp",
      "/projects/3ssila/3ssila3.webp",
      "/projects/3ssila/3ssila4.webp",
      "/projects/3ssila/3ssila5.webp",
    ],
    logo: "/projects/3ssila/logo.webp",
    github: "https://github.com/Laktab-Noureddine-code/3ssila-ai",
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
      {
        name: "Laravel",
        icon: "/tech/laravel.svg",
        link: "https://laravel.com/",
      },
      { name: "React", icon: "/tech/react.svg", link: "https://react.dev/" },
      {
        name: "Docker",
        icon: "/tech/docker.svg",
        link: "https://www.docker.com/",
      },
      { name: "Git", icon: "/tech/git.svg", link: "https://git-scm.com/" },
      {
        name: "MySQL",
        icon: "/tech/mysql.svg",
        link: "https://www.mysql.com/",
      },
    ],
    image: "/projects/mn/mn1.webp",
    images: [
      "/projects/mn/mn1.webp",
      "/projects/mn/mn2.webp",
      "/projects/mn/mn3.webp",
      "/projects/mn/mn4.webp",
      "/projects/mn/mn5.webp",
      "/projects/mn/mn6.webp",
      "/projects/mn/mn7.webp",
      "/projects/mn/mn8.webp",
      "/projects/mn/mn9.webp",
      "/projects/mn/mn10.webp",
      "/projects/mn/mn11.webp",
    ],
    logo: "/projects/mn/logo.webp",
    github: "https://github.com/Laktab-Noureddine-code/social-blog",
    live: "#",
    featured: true,
  },
  {
    id: 3,
    title: "IT Material Management System",
    subtitle: "Jet Contractors - Internship Project",
    description:
      "An internship project handling full hardware inventory management, intelligent assignment systems, and PDF generation. Includes an analytical dashboard for stock visualization.",
    tech: [
      {
        name: "Laravel 11",
        icon: "/tech/laravel.svg",
        link: "https://laravel.com/",
      },
      {
        name: "MySQL",
        icon: "/tech/mysql.svg",
        link: "https://www.mysql.com/",
      },
      {
        name: "TailwindCSS",
        icon: "/tech/tailwind.svg",
        link: "https://tailwindcss.com/",
      },
      { name: "jQuery", icon: "/tech/jquery.svg", link: "https://jquery.com/" },
    ],
    image: "/projects/it/it1.webp",
    images: [
      "/projects/it/it1.webp",
      "/projects/it/it2.webp",
      "/projects/it/it3.webp",
      "/projects/it/it4.webp",
      "/projects/it/it5.webp",
    ],
    logo: "/projects/it/logo.webp",
    github: "#",
    live: "#",
    featured: true,
    isPrivate: true,
  },
  {
    id: 4,
    title: "LakPics",
    subtitle: "High-Quality Stock Photo Search",
    description:
      "A responsive and dynamic web application for searching and discovering millions of high-quality stock photos and videos. Built with Next.js App Router and features real-time search, masonry grid layouts, infinite scrolling, and category filtering.",
    tech: [
      {
        name: "Next.js",
        icon: "/tech/nextjs.svg",
        link: "https://nextjs.org/",
      },
      { name: "React", icon: "/tech/react.svg", link: "https://react.dev/" },
      {
        name: "TypeScript",
        icon: "/tech/typescript.svg",
        link: "https://www.typescriptlang.org/",
      },
      {
        name: "TailwindCSS",
        icon: "/tech/tailwind.svg",
        link: "https://tailwindcss.com/",
      },
      { name: "Vercel", icon: "/tech/vercel.svg", link: "https://vercel.com/" },
    ],
    image: "/projects/lakpics/lakpics1.webp",
    images: [
      "/projects/lakpics/lakpics1.webp",
      "/projects/lakpics/lakpics2.webp",
      "/projects/lakpics/lakpics3.webp",
    ],
    logo: "/projects/lakpics/logo.svg",
    github: "https://github.com/Laktab-Noureddine-code/LakPics",
    live: "https://lak-pics.vercel.app/",
    featured: true,
  },
  {
    id: 5,
    title: "My Todos App",
    subtitle: "Flutter Mobile Application",
    description:
      "A beautiful, responsive, and easy-to-use Todo application built with Flutter. Features an intuitive UI, cross-platform native support, and seamless task management.",
    tech: [
      { name: "Dart", icon: "/tech/dart.svg", link: "https://dart.dev/" },
      {
        name: "Flutter",
        icon: "/tech/flutter.svg",
        link: "https://flutter.dev/",
      },
      {
        name: "SQLite",
        icon: "/tech/sqlite.svg",
        link: "https://www.sqlite.org/",
      },
    ],
    image: "/projects/todo/todo1.webp",
    images: [
      "/projects/todo/todo1.webp",
      "/projects/todo/todo2.webp",
      "/projects/todo/todo3.webp",
    ],
    logo: "/projects/todo/logo.svg",
    github: "https://github.com/Laktab-Noureddine-code/my-todos",
    live: "#",
    featured: true,
    isMobile: true,
  },
];

export const experience = [
  {
    id: 1,
    title: "Full Stack Developer Intern",
    subtitle: "Jet Contractors",
    period: "Feb 2025 - Apr 2025",
    description:
      "Developed an IT Material Management System for tracking hardware inventory with real-time monitoring and PDF generation.",
    current: false,
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
  { name: "Resume", href: "/NOUREDDINE_LAKTAB_CV.pdf", download: true },
];
