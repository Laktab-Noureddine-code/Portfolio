import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog — Noureddine Laktab | Web Development, React, Laravel, SEO",
  description:
    "Upcoming articles by Noureddine Laktab on full-stack web development with React and Laravel, DevOps, and ranking in search and AI engines (SEO, AEO, GEO).",
  alternates: { canonical: "https://laktab.dev/blog" },
};

export default function BlogPage() {
  return (
    <main className="relative min-h-screen">
      <div className="noise pointer-events-none fixed inset-0 z-50" />
      <div className="mx-auto flex min-h-screen max-w-screen-md flex-col items-center justify-center px-6 text-center font-mono">
        <span className="mb-4 rounded-full border border-border bg-surface px-4 py-1 text-xs uppercase tracking-widest text-muted">
          Coming soon
        </span>

        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          The Blog is on its way
          <span className="bg-gradient-to-r from-gradient-from to-gradient-to bg-clip-text text-transparent">
            .
          </span>
        </h1>

        <p className="mt-5 max-w-xl text-body">
          I&apos;m writing in-depth, hands-on articles on full-stack web
          development with React and Laravel, DevOps, and how to rank in both
          search engines and AI answer engines (SEO, AEO &amp; GEO).
        </p>

        <p className="mt-3 text-sm text-muted">
          Check back soon — the first posts are in progress.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-md border border-border bg-surface px-4 py-2 text-sm text-body transition-colors hover:bg-surface-3 hover:text-foreground"
        >
          <ArrowLeft className="size-4" />
          Back to portfolio
        </Link>
      </div>
    </main>
  );
}
