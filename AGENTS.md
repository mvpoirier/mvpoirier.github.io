# AGENTS.md: Shared Rules for Every AI Agent

Every AI agent working in this repo reads this file first, whatever model or tool it is.

## The Project

**Mike's website** (https://mvpoirier.github.io/): GitHub Pages with Jekyll (Jekyll Now theme). The same repo also serves several **student apps**, each built and released by its own project:

| Paths | Owner |
|---|---|
| `physics-lab/`, `mvphysics/`, `revision-lab/` (redirects) | MVPhysics Lab (private repo `mvphysics-lab`) |
| `science-lab/` | MYPoirier Science Lab (private repo `science-lab`) |
| `mvplanner/` | MVPlanner (`mvplanner` repo) |
| Everything else: `_config.yml`, `_layouts/`, `_includes/`, `_sass/`, `_posts/`, `style.scss`, root pages, `images/`, `media/`, `404.md`, `CNAME` | The website itself |

A top-level folder not in this table: ask Mike who owns it before touching it.

**Owner:** Mike Poirier (teacher). He decides what goes in. Keep replies short and in plain language: Mike is a teacher, not a programmer.

## Roles

The **prompt decides the role, not the model**.

| Role | Does | Read next |
|---|---|---|
| **Builder** | Plans with Mike, changes the code, runs the checks, merges and releases. Writes reviewer briefs, keeps the queue and checks every reviewer finding. Only one builder at a time. | `CLAUDE.md` |
| **Branch builder** | Makes one small, self-contained fix on a `build/<topic>` branch and opens a pull request. Doesn't merge or release. | `CLAUDE.md`, section "Branch Builder" |
| **Reviewer** | Audits, playtests, reviews layouts and code, drafts ideas and content. Never changes the product. | `REVIEWER.md`, then `docs/review/QUEUE.md` |

## Checks

No test suite. For a website change, build locally if Jekyll is installed (`bundle exec jekyll serve`), or check the pull request carefully and the live pages after merging: the home page, `/physics-lab/`, `/science-lab/` and `/mvplanner/` must all still load.

## Mike's Hard Rules

- **Ask first, then wait for "go".** Before changing code, content, config, the repo or anything published: summarise the plan, ask for any last feedback, and start only after Mike says "start" or "go". Reading, research and review notes need no "go".
- **Ask questions as multiple-choice pop-ups** where your tool has them (recommended option first), not buried in a message.
- **Never paste, print, commit or ask for passwords, tokens, keys or access codes.** Everything in this repo is public.
- **Every push to `master` publishes to students.** Only the builder pushes or merges to `master`, after Mike's "go".
- **Each project touches only its own paths.** Never edit an app's folder from the website project, or another app's folder from an app project, even to fix an obvious bug: tell Mike instead.
- **Shared files need Mike's explicit OK** because they can break every app: `_config.yml` (especially `url`, `baseurl`, `permalink`, `include`, `exclude`, plugins), `CNAME`, `.nojekyll`, `404.md`, redirects, and site-wide layouts or includes that add scripts or styles. A domain change would wipe students' saved progress in every app.
- **Jekyll must leave the apps alone:** no front matter in app pages, and no app files or folders starting with `_` or `.`.
- **Never delete a public URL** students may have bookmarked: leave a redirect page.
- Stage only your own paths (never `git add -A` at the root), and never force-push.

## Branches and Files

- Reviewers: `review/NN-<topic>`, and write only in `docs/review/`.
- Branch builders: `build/<topic>`, finishing with a pull request.
- Agent docs (`AGENTS.md`, `REVIEWER.md`, `CLAUDE.md`, `GEMINI.md`, `docs/`) are excluded from the published site in `_config.yml`.
- Review work lives in `docs/review/`: `QUEUE.md`, the builder's `brief-NN-<name>.md`, and reviewers' `report-NN-<name>.md` or `draft-NN-<name>.md`.

## Your Role

Your prompt tells you your role. A reviewer follows REVIEWER.md. A builder follows CLAUDE.md (the Branch Builder section if you don't hold release secrets). With no role given, act as a reviewer.
