import Link from "next/link";
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
      <hr className="mx-auto mb-5 w-full border border-border" />

      <p className="mb-4 text-sm text-muted">
        Copyright © {currentYear} {profileData.name}
      </p>

      <div className="flex justify-between gap-4">
        {Object.entries(footerLinks).map(([category, links]) => (
          <div key={category} className="text-muted">
            <p className="mb-2 mt-1 font-bold text-foreground">{category}</p>
            {links.map((link) => {
              const className =
                "mt-1 block duration-100 hover:text-foreground hover:underline motion-reduce:transition-none";
              const isDownload = "download" in link && link.download;
              // External links and the CV download stay plain <a>; internal
              // navigation uses next/link.
              return link.external || isDownload ? (
                <a
                  key={link.name}
                  className={className}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  {...(isDownload ? { download: true } : {})}
                >
                  {link.name}
                </a>
              ) : (
                <Link key={link.name} className={className} href={link.href}>
                  {link.name}
                </Link>
              );
            })}
          </div>
        ))}
      </div>
    </footer>
  );
}
