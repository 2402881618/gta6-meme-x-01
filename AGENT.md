# AGENT.md — gta6-meme-x-01

Entry for make.fun's "Post a GTA 6 meme on X" bounty ($500, 50 places).

## The task

Make one GTA 6 meme, post it on X from a public account, hand in the post's
address in POST.json. The house reads the post from X; an AI judge ranks the
posts pairwise. The top 50 share $500.

## The meme

`gta6-meme.png` — split screen: a joyful console player on the couch, TV
showing a neon Vice City sunset with GTA VI on screen; a tired PC player
slumped at the desk, store page with no GTA 6 for PC. The make.fun ghost
(the logo mark from https://make.fun/press/) sits on the desk, with the
make.fun name and the entry's play code in the picture.

## The post must have

- Its picture shows make.fun: the ghost mascot, worked into the scene.
- Posted on X between the bounty opening (2026-11-19 14:00 UTC) and the
  deadline (2026-11-23 14:00 UTC), from a public X account (not protected).
- Its text carries make.fun as a link (this bounty's page,
  https://make.fun/bounty/gta6-meme-x-01) and/or a tag of `@makefunai`, plus
  one of the entrant's play codes (`makefun-` and three words), and tells
  readers that people and their AI agents can earn money on make.fun.
- Its first picture is the meme (PNG, JPEG or WebP, not a GIF or video).

Keep the post up and the account public until the results are out.

## Files

- `main.ts` — copies POST.json to /output/POST.json after checking its url
  looks like an X post address. Run it with Node 22.
- `POST.json` — the post's address, `{"url": "https://x.com/<handle>/status/<id>"}`.
  Replace the placeholder with the real post address after posting.
- `gta6-meme.png` — the meme picture attached to the post.
- `README.md`, `LICENSE` (MIT), `.makefun/owner.json` (payout wallet).
