import type { ContributionData } from "../../lib/github";
import { profileData } from "../../data/portfolio-data";
import ContributionSkyline from "../ui/contribution-skyline";

export default function GithubActivitySection({
  data,
}: {
  data: ContributionData | null;
}) {
  if (!data) return null;

  return (
    <section className="my-6 mb-16">
      <h2 id="github" className="mb-2 scroll-mt-20 text-[1.7rem] font-[750]">
        GitHub Activity
        <span className="bg-gradient-to-r from-gradient-from to-gradient-to bg-clip-text text-transparent">
          .
        </span>
      </h2>

      <p className="text-body">
        A snapshot of my coding activity on{" "}
        <a
          href={profileData.github}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-foreground underline decoration-subtle underline-offset-2 hover:decoration-foreground"
        >
          GitHub
        </a>
        .
      </p>

      <div className="mt-4">
        <ContributionSkyline data={data.contributions} />
      </div>
    </section>
  );
}
