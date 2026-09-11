import { getGithubContributions } from "../../lib/github";
import { profileData } from "../../data/portfolio-data";
import ContributionGraph from "../ui/contribution-graph";

export default async function GithubActivitySection() {
  const username = profileData.github.split("/").filter(Boolean).pop();
  const data = username ? await getGithubContributions(username) : null;

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

      <div className="mt-4 rounded-xl border border-border bg-surface p-4">
        <ContributionGraph
          contributions={data.contributions}
          total={data.total}
        />
      </div>
    </section>
  );
}
