// Single source of truth for GEO/AEO machine-readable surfaces:
// JSON-LD structured data, /llms.txt, /llms-full.txt, and /ai/resume.json.
// Everything here is built from real portfolio data — never invent metrics.

import {
  profileData,
  techStack,
  projects,
  experience,
  education,
} from "../data/portfolio-data";

export const siteUrl = "https://laktab.dev";

const skills = techStack.map((t) => t.name);

// ---------------------------------------------------------------------------
// JSON-LD (@graph): ProfilePage + Person + WebSite + project SoftwareSourceCode
// ---------------------------------------------------------------------------
export function buildJsonLd() {
  const person = {
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    name: profileData.name,
    givenName: profileData.firstName,
    familyName: profileData.lastName,
    jobTitle: "Full-Stack Web Developer",
    description: profileData.bio,
    url: siteUrl,
    image: `${siteUrl}/profile-og.png`,
    email: profileData.email,
    telephone: profileData.phone,
    nationality: "Moroccan",
    knowsLanguage: ["ar", "fr", "en"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Casablanca",
      addressCountry: "MA",
    },
    knowsAbout: skills,
    alumniOf: education.map((e) => ({
      "@type": "EducationalOrganization",
      name: e.institution,
    })),
    sameAs: [profileData.github, profileData.linkedin],
    seeks: {
      "@type": "Demand",
      name: "Software development internship",
    },
  };

  const projectNodes = projects.map((p) => ({
    "@type": "SoftwareSourceCode",
    name: p.title,
    description: p.description,
    about: p.subtitle,
    author: { "@id": `${siteUrl}/#person` },
    programmingLanguage: p.tech.map((t) => t.name),
    ...(p.github && p.github !== "#" ? { codeRepository: p.github } : {}),
    ...(p.live && p.live !== "#" ? { url: p.live } : {}),
  }));

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Noureddine Laktab — Portfolio",
        inLanguage: "en",
        publisher: { "@id": `${siteUrl}/#person` },
      },
      {
        "@type": "ProfilePage",
        "@id": `${siteUrl}/#profilepage`,
        url: siteUrl,
        name: `${profileData.name} — Full-Stack Web Developer`,
        isPartOf: { "@id": `${siteUrl}/#website` },
        mainEntity: { "@id": `${siteUrl}/#person` },
        dateModified: new Date().toISOString(),
      },
      person,
      ...projectNodes,
    ],
  };
}

// ---------------------------------------------------------------------------
// /llms.txt — concise markdown directory (answer-first)
// ---------------------------------------------------------------------------
export function buildLlmsTxt() {
  return `# ${profileData.name} — Full-Stack Web Developer

> ${profileData.name} is a full-stack web developer based in ${profileData.location}, specializing in React and Laravel. Currently a Systems Engineering & Web Technologies student ${profileData.status.toLowerCase()}.

## Summary
- Role: Full-Stack Web Developer (React / Laravel)
- Location: ${profileData.location}
- Availability: ${profileData.status}
- Languages: Arabic, French, English

## Core skills
${skills.map((s) => `- ${s}`).join("\n")}

## Key pages
- [Portfolio home](${siteUrl})
- [Full profile (markdown)](${siteUrl}/llms-full.txt)
- [Machine-readable resume (JSON)](${siteUrl}/ai/resume.json)
- [CV (PDF)](${siteUrl}/CV_LAKTAB.pdf)

## Projects
${projects.map((p) => `- ${p.title} — ${p.subtitle}`).join("\n")}

## Profiles
- GitHub: ${profileData.github}
- LinkedIn: ${profileData.linkedin}
`;
}

// ---------------------------------------------------------------------------
// /llms-full.txt — full concatenated markdown of the whole portfolio
// ---------------------------------------------------------------------------
export function buildLlmsFull() {
  const projectsMd = projects
    .map((p) => {
      const stack = p.tech.map((t) => t.name).join(", ");
      const links = [
        p.live && p.live !== "#" ? `Live: ${p.live}` : null,
        p.github && p.github !== "#" ? `Source: ${p.github}` : null,
        p.isPrivate ? "Source: private/confidential" : null,
      ]
        .filter(Boolean)
        .join(" · ");
      return `### ${p.title} — ${p.subtitle}
${p.description}
- Stack: ${stack}${links ? `\n- ${links}` : ""}`;
    })
    .join("\n\n");

  const eduMd = education
    .map((e) => `- ${e.degree}, ${e.institution} (${e.period})`)
    .join("\n");

  const expMd = experience
    .map((e) => `- ${e.title}, ${e.subtitle} (${e.period}): ${e.description}`)
    .join("\n");

  return `# ${profileData.name} — Full-Stack Web Developer

> ${profileData.bio}

## Profile
- Name: ${profileData.name}
- Role: Full-Stack Web Developer (React / Laravel)
- Location: ${profileData.location}
- Availability: ${profileData.status}
- Languages: Arabic (native), French, English
- Email: ${profileData.email}
- GitHub: ${profileData.github}
- LinkedIn: ${profileData.linkedin}

## Technical skills
${skills.map((s) => `- ${s}`).join("\n")}

## Projects
${projectsMd}

## Experience
${expMd}

## Education
${eduMd}

<!-- TODO (owner): per the GEO playbook, add quantifiable, TRUE metrics to each
project above (e.g. real load-time, query, or user numbers). Do not invent. -->
`;
}

// ---------------------------------------------------------------------------
// /ai/resume.json — structured resume for autonomous agents
// ---------------------------------------------------------------------------
export function buildResumeJson() {
  return {
    name: profileData.name,
    title: "Full-Stack Web Developer (React / Laravel)",
    location: profileData.location,
    availability: profileData.status,
    languages: ["Arabic", "French", "English"],
    contact: {
      email: profileData.email,
      github: profileData.github,
      linkedin: profileData.linkedin,
      website: siteUrl,
    },
    skills,
    projects: projects.map((p) => ({
      name: p.title,
      summary: p.subtitle,
      description: p.description,
      stack: p.tech.map((t) => t.name),
      repository: p.github && p.github !== "#" ? p.github : null,
      live: p.live && p.live !== "#" ? p.live : null,
      private: Boolean(p.isPrivate),
    })),
    experience: experience.map((e) => ({
      role: e.title,
      company: e.subtitle,
      period: e.period,
      description: e.description,
    })),
    education: education.map((e) => ({
      degree: e.degree,
      institution: e.institution,
      period: e.period,
    })),
    generatedAt: new Date().toISOString(),
  };
}
