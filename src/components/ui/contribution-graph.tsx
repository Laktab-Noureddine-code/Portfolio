import type { ContributionDay, ContributionLevel } from "../../lib/github";

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const GAP = 3;

function levelClass(level: ContributionLevel) {
  switch (level) {
    case 0:
      return "bg-border";
    case 1:
      return "bg-accent/25";
    case 2:
      return "bg-accent/50";
    case 3:
      return "bg-accent/75";
    default:
      return "bg-accent";
  }
}

function formatDate(date: string) {
  return new Date(`${date}T00:00:00Z`).toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

function buildWeeks(days: ContributionDay[]): (ContributionDay | null)[][] {
  const weeks: (ContributionDay | null)[][] = [];
  const leadingBlanks = new Date(`${days[0].date}T00:00:00Z`).getUTCDay();
  let week: (ContributionDay | null)[] = new Array(leadingBlanks).fill(null);

  for (const day of days) {
    week.push(day);
    if (week.length === 7) {
      weeks.push(week);
      week = [];
    }
  }
  if (week.length > 0) {
    while (week.length < 7) week.push(null);
    weeks.push(week);
  }
  return weeks;
}

function getMonthLabels(weeks: (ContributionDay | null)[][]) {
  const labels: { weekIndex: number; label: string }[] = [];
  let lastMonth = -1;

  weeks.forEach((week, weekIndex) => {
    const firstDay = week.find((day) => day !== null);
    if (!firstDay) return;
    const month = new Date(`${firstDay.date}T00:00:00Z`).getUTCMonth();
    if (month !== lastMonth) {
      labels.push({ weekIndex, label: MONTHS[month] });
      lastMonth = month;
    }
  });

  return labels;
}

export default function ContributionGraph({
  contributions,
  total,
}: {
  contributions: ContributionDay[];
  total: number;
}) {
  const weeks = buildWeeks(contributions);
  const monthLabels = getMonthLabels(weeks);
  const columns = `repeat(${weeks.length}, minmax(0, 1fr))`;

  return (
    <div>
      <div className="w-full">
        <div
          className="mb-1 grid text-[11px] text-muted"
          style={{ gridTemplateColumns: columns }}
        >
          {monthLabels.map(({ weekIndex, label }) => (
            <span
              key={`${weekIndex}-${label}`}
              className="col-span-4 whitespace-nowrap"
              style={{ gridColumnStart: weekIndex + 1 }}
            >
              {label}
            </span>
          ))}
        </div>

        <div
          className="grid grid-flow-col grid-rows-7"
          style={{ gridTemplateColumns: columns, gap: GAP }}
        >
          {weeks.map((week, weekIndex) =>
            week.map((day, dayIndex) => (
              <div
                key={`${weekIndex}-${dayIndex}`}
                className="group relative aspect-square"
              >
                {day && (
                  <>
                    <div
                      className={`size-full rounded-xs ${levelClass(day.level)}`}
                    />
                    <div className="pointer-events-none absolute -top-9 left-1/2 z-10 hidden w-max -translate-x-1/2 rounded-md border border-border bg-surface-2 px-2 py-1 text-[11px] shadow-lg group-hover:block">
                      <span className="font-medium text-foreground">
                        {day.count} contribution{day.count === 1 ? "" : "s"}
                      </span>
                      <span className="text-muted">
                        {" "}
                        on {formatDate(day.date)}
                      </span>
                    </div>
                  </>
                )}
              </div>
            )),
          )}
        </div>
      </div>

      <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-sm text-muted">
        <span>{total.toLocaleString()} contributions in the last year</span>
        <div className="flex items-center gap-1">
          <span>Less</span>
          {([0, 1, 2, 3, 4] as ContributionLevel[]).map((level) => (
            <div
              key={level}
              className={`size-[10px] rounded-xs ${levelClass(level)}`}
            />
          ))}
          <span>More</span>
        </div>
      </div>
    </div>
  );
}
