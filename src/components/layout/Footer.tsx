import { profileData, navLinks } from "../../data/portfolio-data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    "Important Links": navLinks
      .filter((link) => !link.download)
      .map((link) => ({
        name: link.name,
        href: link.href,
        external: false,
      })),
    Social: [
      { name: "Github", href: profileData.github, external: true },
      { name: "LinkedIn", href: profileData.linkedin, external: true },
    ],
    Other: [
      {
        name: "Resume",
        href: "/CV_LAKTAB.pdf",
        external: false,
        download: true,
      },
      { name: "Contact", href: "#contact", external: false },
    ],
  };

  return (
    <footer className="mx-auto w-full max-w-screen-md pb-12">
      <hr className="mx-auto mb-5 w-full border border-neutral-800" />

      <p className="mb-4 text-sm text-neutral-300 opacity-50">
        Copyright © {currentYear} {profileData.name}
      </p>

      <div className="flex justify-between gap-4">
        {Object.entries(footerLinks).map(([category, links]) => (
          <div key={category} className="text-neutral-400">
            <p className="mb-2 mt-1 font-bold text-white">{category}</p>
            {links.map((link) => (
              <a
                key={link.name}
                target={link.external ? "_blank" : "_self"}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="mt-1 block duration-100 hover:text-neutral-300 hover:underline motion-reduce:transition-none"
                href={link.href}
                {...("download" in link && link.download
                  ? { download: true }
                  : {})}
              >
                {link.name}
              </a>
            ))}
          </div>
        ))}
      </div>
    </footer>
  );
}
