# Repository Guidelines

## Project Structure & Module Organization

This repository is a React + Vite + TypeScript portfolio site. Main application code lives in `src/`.

- `src/App.tsx`: primary portfolio UI and interactive sections.
- `src/data.ts`: portfolio content, contact details, project data, skills, and asset paths.
- `src/main.tsx`: React entry point.
- `src/index.css`: Tailwind import, theme tokens, and global styles.
- `public/`: static assets served from the site root. Put `resume.pdf` and `profile.jpg` here.
- `assets/`: additional project assets, if needed.

There is currently no dedicated test directory.

## Build, Test, and Development Commands

Use npm scripts from `package.json`:

```bash
npm run dev
```

Starts the Vite dev server on port `3000`.

```bash
DISABLE_HMR=true npm run dev
```

Starts the dev server with file watching reduced, useful if the system watcher limit is reached.

```bash
npm run lint
```

Runs TypeScript checks with `tsc --noEmit`.

```bash
npm run build
```

Creates a production build in `dist/`.

## Coding Style & Naming Conventions

Use TypeScript and React function components. Keep edits simple and close to the existing structure. Prefer data changes in `src/data.ts` over hardcoding content in JSX.

Use two-space indentation in JSX/TSX. Component names should use `PascalCase`; variables, functions, and constants should use clear descriptive names. Existing exported portfolio constants use `STR_PORT_*`.

Styling is handled with Tailwind utility classes and theme tokens in `src/index.css`.

## Testing Guidelines

No unit test framework is configured yet. For now, validate changes with:

```bash
npm run lint
npm run build
```

When adding tests later, prefer colocated `*.test.ts` or `*.test.tsx` files and keep tests focused on behavior, rendering, and data-driven UI states.

## Commit & Pull Request Guidelines

No Git history is available in this working directory, so no existing commit convention can be inferred. Use concise conventional-style commits, for example:

```text
feat: add resume download link
fix: improve mobile navigation contrast
```

Pull requests should include a short summary, screenshots for visual changes, verification commands run, and any known limitations. Link related issues when available.

## Security & Configuration Tips

Do not commit private credentials or API keys. This site should remain frontend-only; prefer `mailto:`, phone, and external profile links over backend form handling unless a backend is explicitly introduced.
