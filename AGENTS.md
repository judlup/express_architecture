## Express Architecture — Agent Guide

Purpose: Help AI coding agents become productive quickly with this Docusaurus documentation repo.

Quick Start
- Working directory: docs/
- Dev server: `npm start` (run in `docs/`) — opens site at http://localhost:3000
- Build: `npm build` (from `docs/`) — produces `build/`
- Serve built site: `npm serve`
- Node: >= 18.0

Key Context & Files
- Read research framing first: [docs/context/DSR.md](docs/context/DSR.md)
- Site config: [docs/docusaurus.config.ts](docs/docusaurus.config.ts)
- Navigation: [docs/sidebars.ts](docs/sidebars.ts)
- Core content: [docs/docs/artefactos/](docs/docs/artefactos/)
- Spanish-first content: default locale is `es`

Conventions & Notes for Agents
- Link, don't embed: prefer linking to documentation rather than copying it.
- Language: content is primarily Spanish; keep tone academic + accessible.
- Frontmatter: use `title`, optional `sidebar_label`, and `sidebar_position` to control navigation.

Known Issues
- Duplicate folders: `docs/docs/artefactos/` and `docs/docs/artefacts/` contain overlapping/duplicate content — prefer `artefactos/` (used in sidebars). Consider consolidating.

Where to Start When Assigned Work
1. Read [docs/context/DSR.md](docs/context/DSR.md) for research framing and tone.
2. Run `npm start` in `docs/` to preview changes locally.
3. Use `docs/sidebars.ts` to understand or change navigation ordering.

Suggested Next Agent Customizations
- Create a small skill to validate frontmatter (check `title`, `sidebar_label`, `sidebar_position`).
- Add a linting hook to warn about duplicate `artefactos/` vs `artefacts/` content.
