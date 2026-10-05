import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Test Page | Noureddine Laktab",
  description: "Test page with Canva link",
};

export default function TestPage() {
  const canvaLink = "https://canva.link/07j84l98sj190l2";

  return (
    <main className="relative min-h-screen">
      <div className="noise pointer-events-none fixed inset-0 z-50" />
      <div className="mx-auto flex min-h-screen max-w-screen-md flex-col items-center justify-center px-6 text-center font-mono">
        <span className="mb-4 rounded-full border border-border bg-surface px-4 py-1 text-xs uppercase tracking-widest text-muted">
          Test Page
        </span>

        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Canva Presentation / Design
          <span className="bg-gradient-to-r from-gradient-from to-gradient-to bg-clip-text text-transparent">
            .
          </span>
        </h1>

        <p className="mt-4 max-w-lg text-body text-sm sm:text-base">
          Click below to open the Canva design link:
        </p>

        <div className="mt-6 flex flex-col items-center gap-3">
          <a
            href={canvaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-accent bg-accent/10 px-6 py-3 font-medium text-foreground transition-all hover:bg-accent/20 hover:scale-[1.02]"
          >
            <ExternalLink className="size-4 text-accent" />
            <span>Open Canva Link</span>
          </a>

          <a
            href={canvaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="break-all text-xs text-muted underline underline-offset-4 hover:text-foreground"
          >
            {canvaLink}
          </a>
        </div>

        <Link
          href="/"
          className="mt-10 inline-flex items-center gap-2 rounded-md border border-border bg-surface px-4 py-2 text-sm text-body transition-colors hover:bg-surface-3 hover:text-foreground"
        >
          <ArrowLeft className="size-4" />
          Back to home
        </Link>
      </div>
    </main>
  );
}
