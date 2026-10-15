"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import {
  HexagonPattern,
  hexAt,
  hexCenter,
  hexPoints,
} from "../ui/hexagon-pattern";

const RADIUS = 40;
// Pattern origin offset; must match the x/y passed to HexagonPattern.
const OFFSET = -1;
// How long a hexagon takes to fade after the pointer leaves it.
const FADE_MS = 700;

const MASK =
  "[mask-image:radial-gradient(ellipse_at_center,white_30%,transparent_80%)]";

// Filled hexagons scattered over the navbar + hero backdrop ([col, row]).
const HERO_HEXAGONS: Array<[number, number]> = [
  [4, 3],
  [5, 3],
  [6, 4],
  [9, 7],
  [10, 7],
  [11, 8],
  [14, 2],
  [15, 5],
  [17, 9],
  [18, 9],
  [20, 3],
  [21, 4],
  [23, 7],
  [25, 2],
  [26, 6],
  [27, 6],
  [8, 10],
  [12, 1],
  [19, 11],
  [29, 4],
];

type Cell = { key: string; col: number; row: number; fading: boolean };

export default function HeroBackdrop({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cells, setCells] = useState<Cell[]>([]);
  const currentKey = useRef<string | null>(null);
  const timers = useRef(new Set<ReturnType<typeof setTimeout>>());

  useEffect(() => {
    const pending = timers.current;
    return () => pending.forEach(clearTimeout);
  }, []);

  // Mark the previously hovered cell as fading, then drop it once faded.
  const releaseCurrent = useCallback(() => {
    const key = currentKey.current;
    if (!key) return;
    currentKey.current = null;
    setCells((prev) =>
      prev.map((c) => (c.key === key ? { ...c, fading: true } : c)),
    );
    const timer = setTimeout(() => {
      timers.current.delete(timer);
      setCells((prev) => prev.filter((c) => !(c.key === key && c.fading)));
    }, FADE_MS);
    timers.current.add(timer);
  }, []);

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (e.pointerType !== "mouse") return;
      const rect = e.currentTarget.getBoundingClientRect();
      const [col, row] = hexAt(
        e.clientX - rect.left - OFFSET,
        e.clientY - rect.top - OFFSET,
        RADIUS,
        "horizontal",
        0,
      );
      const key = `${col}-${row}`;
      if (key === currentKey.current) return;
      releaseCurrent();
      currentKey.current = key;
      setCells((prev) => [
        ...prev.filter((c) => c.key !== key),
        { key, col, row, fading: false },
      ]);
    },
    [releaseCurrent],
  );

  return (
    <div
      className="relative overflow-hidden"
      onPointerMove={handlePointerMove}
      onPointerLeave={releaseCurrent}
    >
      <HexagonPattern
        radius={RADIUS}
        x={OFFSET}
        y={OFFSET}
        hexagons={HERO_HEXAGONS}
        className={cn("fill-foreground/[0.06] stroke-foreground/10", MASK)}
      />
      <svg
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-0 h-full w-full",
          MASK,
        )}
      >
        <svg className="overflow-visible" x={OFFSET} y={OFFSET}>
          {cells.map(({ key, col, row, fading }) => {
            const [cx, cy] = hexCenter(col, row, RADIUS, "horizontal", 0);
            return (
              <polygon
                key={key}
                points={hexPoints(cx, cy, RADIUS - 1, "horizontal")}
                className={cn(
                  "fill-foreground/15 transition-opacity ease-out motion-reduce:transition-none",
                  fading ? "opacity-0" : "opacity-100",
                )}
                style={{ transitionDuration: `${FADE_MS}ms` }}
              />
            );
          })}
        </svg>
      </svg>
      {children}
    </div>
  );
}
