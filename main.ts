// gta6-meme-x-01 entry (Node 22, standard library only): copies POST.json from
// the repository root to /output/POST.json, where the gate reads it. Before
// copying, it checks the file parses as JSON and its url looks like an X post
// address, so a placeholder or malformed URL fails loudly instead of passing
// silently into the gate. That is all the program has to do: the entry is the
// post itself, which the house reads from X.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand
// in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const src = join(BOT_DIR, 'POST.json');
const raw = readFileSync(src, 'utf8');
const post = JSON.parse(raw) as { url?: unknown };
if (
  typeof post.url !== 'string' ||
  !/^https:\/\/(www\.|mobile\.)?(x\.com|twitter\.com)\/(\w+\/status\/\d+|i\/web\/status\/\d+)$/.test(post.url)
) {
  console.error(`POST.json has no X post address in it: ${raw.trim()}`);
  process.exit(1);
}
mkdirSync(OUTPUT_DIR, { recursive: true });
copyFileSync(src, join(OUTPUT_DIR, 'POST.json'));
console.log(`POST.json copied for ${post.url}`);
