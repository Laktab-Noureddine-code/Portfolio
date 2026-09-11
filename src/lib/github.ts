export type ContributionLevel = 0 | 1 | 2 | 3 | 4;

export type ContributionDay = {
  date: string;
  count: number;
  level: ContributionLevel;
};

export type ContributionData = {
  total: number;
  contributions: ContributionDay[];
};

const DAY_CELL_RE = /data-date="(\d{4}-\d{2}-\d{2})"[^>]*data-level="([0-4])"/g;
const TOOLTIP_RE = /(?:(\d[\d,]*) contributions?|No contributions) on/g;
const TOTAL_RE =
  /js-contribution-activity-description"[^>]*>\s*([\d,]+)\s*\n?\s*contributions?/;

export async function getGithubContributions(
  username: string,
): Promise<ContributionData | null> {
  try {
    const res = await fetch(
      `https://github.com/users/${username}/contributions`,
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (compatible; PortfolioContributionGraph/1.0)",
        },
        next: { revalidate: 3600 },
      },
    );
    if (!res.ok) return null;

    const html = await res.text();

    const totalMatch = html.match(TOTAL_RE);
    const total = totalMatch ? Number(totalMatch[1].replace(/,/g, "")) : 0;

    const dates: { date: string; level: ContributionLevel }[] = [];
    for (const match of html.matchAll(DAY_CELL_RE)) {
      dates.push({
        date: match[1],
        level: Number(match[2]) as ContributionLevel,
      });
    }

    const counts: number[] = [];
    for (const match of html.matchAll(TOOLTIP_RE)) {
      counts.push(match[1] ? Number(match[1].replace(/,/g, "")) : 0);
    }

    if (dates.length === 0) return null;

    const contributions: ContributionDay[] = dates
      .map((day, i) => ({
        date: day.date,
        level: day.level,
        count: counts[i] ?? (day.level > 0 ? 1 : 0),
      }))
      .sort((a, b) => a.date.localeCompare(b.date));

    return { total, contributions };
  } catch {
    return null;
  }
}
