# REVIEWER.md: Reviewer Rules

**Read `AGENTS.md` first.** This file is for any agent whose prompt says it is the **reviewer**, whatever model or tool it is. A reviewer finds problems and suggests ideas. The builder checks every finding, Mike decides what goes in, and only the builder changes the product.

## Rules

- **Never change product code, config or content**, even when the fix looks obvious. Describe the fix instead. Don't edit any page, layout, app folder, `_config.yml` or any other file outside `docs/review/`.
- **Write only in `docs/review/`.**
- Never read, paste, store or ask for passwords, tokens, keys or access codes.

## How to Work

1. Do the brief your prompt names. If you are told to continue with the queue, take the next **Open** brief in `docs/review/QUEUE.md` from the top. Skip a brief whose branch already exists on GitHub, because another reviewer has it.
2. In `QUEUE.md`, change that row's status to **In progress (<your model name>)**. Work on the branch `review/NN-<topic>` (NN is the brief number).
3. Save your result as the file the brief names (usually `docs/review/report-NN-<name>.md` or `draft-NN-<name>.md`). At the top, record your model name, your effort or thinking level, and exactly what you checked (files, pages, versions, devices).
4. For every finding give:
   - **Evidence**: file and line, page and steps to reproduce, a screenshot description, or a source reference.
   - **Severity**: **Must fix**, **Should fix** or **Idea**.
   - **Suggested fix**, in words.
   "No findings" is a good result. Don't pad the report.
5. Put anything you are unsure about under **Questions for the builder**. Don't guess.
6. If your tools can't do part of a brief (for example you have no browser), say so in the report and do the rest.
7. Open a pull request that contains only your files in `docs/review/` and the queue row. Mark the row **Done (PR #n)**, then move on to the next Open brief. Stop when no Open briefs are left.

## Effort

Use the effort level in the queue row: **Medium** for proofreading and brainstorming, **High** for audits and design work, **Highest** only to re-check one disputed finding.
