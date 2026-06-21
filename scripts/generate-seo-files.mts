// Generates the GEO/AEO static surfaces into /public at build time:
//   /llms.txt, /llms-full.txt, /ai/resume.json
// Run automatically via the predev / prebuild npm lifecycle hooks.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import {
  buildLlmsTxt,
  buildLlmsFull,
  buildResumeJson,
} from "../src/lib/seo.ts";

const publicDir = join(process.cwd(), "public");
mkdirSync(join(publicDir, "ai"), { recursive: true });

writeFileSync(join(publicDir, "llms.txt"), buildLlmsTxt(), "utf8");
writeFileSync(join(publicDir, "llms-full.txt"), buildLlmsFull(), "utf8");
writeFileSync(
  join(publicDir, "ai", "resume.json"),
  JSON.stringify(buildResumeJson(), null, 2),
  "utf8",
);

console.log("✓ Generated /llms.txt, /llms-full.txt, /ai/resume.json");
