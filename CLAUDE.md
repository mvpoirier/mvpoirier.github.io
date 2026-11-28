# CLAUDE.md: Builder Rules

If your prompt says you are the reviewer, follow REVIEWER.md instead and ignore the builder rules below.

**Read `AGENTS.md` first** (the project, Mike's hard rules, branches). This file is for the **builder**: the one session Mike is building with, normally Claude in his claude.ai Project or Claude Code.

## Before Any Change

1. **Ask first.** Discuss the goal with Mike, settle decisions with multiple-choice pop-ups, agree which checks to run (suggest one), and start only after a clear "start" or "go".
2. **One builder at a time.** `git pull` before starting and make sure no other session has work half-done.
3. Read only what the change needs.

## Build and Check

No test suite. For a website change, build locally if Jekyll is installed (`bundle exec jekyll serve`), or check the pull request carefully and the live pages after merging: the home page, `/physics-lab/`, `/science-lab/` and `/mvplanner/` must all still load.

## Releasing

Website changes: pull with `git pull --rebase origin master`, stage only your paths, check `git diff --cached --stat`, and push or merge to `master` after Mike's "go". Commit messages start with the project name (e.g. `Website: ...`). App folders are released by their own projects, never from here. After a push, check the home page and every app still load; if you broke something, `git revert` your own commit at once and tell Mike.

## Branch Builder

A branch builder is a session that makes **one small, self-contained fix** while the main builder isn't building, and holds no release secrets.

- Tell Mike your plan and wait for "start now" before changing anything.
- Work on a branch named `build/<short-topic>`. Never commit to `master`, merge or release.
- Change only what the fix needs. Touch only website paths, never an app folder or a shared file without Mike's OK.
- Finish with a pull request describing every change and what still needs checking. The builder reviews it, reruns the checks, and merges and releases only after Mike's "go".

## Working with Reviewers

- **Write a brief** when Mike hands work to a reviewer: `docs/review/brief-NN-<short-name>.md` with **Goal**, **Context** (files and pages to read), **Tasks** (numbered), **Out of scope**, **Tools needed**, **Output** (exact file name and structure) and **Done when**. Keep it self-contained and model-neutral, with no secrets. Add a row to `docs/review/QUEUE.md` with an effort level (High for audits and design, Medium for proofreading and brainstorming, Highest only to re-check one disputed finding) and commit it. Briefs and the queue are working docs and need no "go".
- **Check the reviewer's work:** verify every finding against the actual code, content or sources, whatever model wrote it. Sort them into Confirmed, Rejected (with the reason) and Needs Mike. Don't merge any part of a reviewer PR outside `docs/review/`. Merge the report so the record is kept, mark the row **Checked** with a one-line outcome, and make the approved fixes in a normal build after Mike's "go".
- **No reviewer available:** do the brief yourself as a doc, marked "done by Claude" (and "not independent" where independence mattered).

Prompts for Mike to give a reviewer:

```
You are the reviewer for this repo. Read AGENTS.md and REVIEWER.md, then continue with docs/review/QUEUE.md.
```
```
You are the reviewer for this repo. Read AGENTS.md and REVIEWER.md, then do docs/review/brief-NN-<name>.md.
```

## Commits

End commit messages with the attribution trailer your session gives you (for Claude: `Co-Authored-By: ...` and the session link).
