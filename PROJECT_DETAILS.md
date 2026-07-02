# Project Discovery Report: kisorniru.com

Generated from local code discovery of `/home/siddique/html/kisorniru.com`.

## Executive Summary

| Area | Finding |
| --- | --- |
| Project purpose | Static, interactive personal portfolio for Noor-A-Alam Siddique, positioned as a Backend Architect and Senior Software Engineer. |
| Likely users | Hiring managers, recruiters, CTOs/engineering directors, enterprise clients, and technical collaborators evaluating senior backend experience. |
| Business problem solved | Converts a resume/profile into a polished portfolio that highlights technical credibility, project case studies, leadership history, and direct contact paths. |
| Product type | Portfolio / professional personal website. |
| Runtime shape | Single-page React application served by Vite. No backend code is present in this repository. |

Main workflows supported:

1. Visitor reads hero summary and professional positioning.
2. Visitor navigates between About, Experience, Projects, Skills, and Contact sections using anchor links.
3. Visitor filters project case studies by category.
4. Visitor opens a project architecture modal for deeper inspection.
5. Visitor runs a local TableTap order-dispatch simulation inside the modal.
6. Visitor contacts the portfolio owner via email, phone, LinkedIn, GitHub, or resume download links.

## Evidence Map

| Evidence | Files |
| --- | --- |
| App entry point | `index.html`, `src/main.tsx`, `src/App.tsx` |
| Main UI and interactions | `src/App.tsx` |
| Portfolio content model and data | `src/data.ts` |
| Styling/theme | `src/index.css`, Tailwind classes in `src/App.tsx` |
| Build configuration | `package.json`, `vite.config.ts`, `tsconfig.json` |
| AI Studio metadata/env placeholders | `README.md`, `.env.example`, `metadata.json`, `assets/.aistudio/.gitignore` |
| Public assets | `public/profile.jpeg` |

## Business Domain Analysis

### Domain

Confirmed domain: **Portfolio / professional services marketing site**.

The content emphasizes senior backend architecture, microservices, fintech, marketplace, logistics, SaaS, AI/IoT, SQA roots, and global stakeholder collaboration. Those are portfolio subjects, not implemented business modules in this codebase.

### Core Business Processes

| Process | Description | Evidence |
| --- | --- | --- |
| Professional positioning | Hero presents name, role, experience metrics, and technical value proposition. | `src/App.tsx`, `src/data.ts` constants |
| Experience presentation | Timeline renders work history from structured data. | `WORK_HISTORY` in `src/data.ts`; rendered in `src/App.tsx` |
| Case study presentation | Projects are listed, categorized, filtered, and inspected in a modal. | `PORTFOLIO_PROJECTS` in `src/data.ts`; project UI in `src/App.tsx` |
| Skills presentation | Skill groups and proficiency bars present technical depth. | `SKILL_GROUPS` in `src/data.ts`; skills section in `src/App.tsx` |
| Contact conversion | Direct mail, telephone, LinkedIn, GitHub, and resume links replace backend form submission. | contact section in `src/App.tsx` |

### Primary Actors

| Actor | Goal |
| --- | --- |
| Recruiter / hiring manager | Quickly evaluate seniority, technical fit, and contact details. |
| CTO / engineering director | Inspect architecture-oriented project claims and scaling experience. |
| Enterprise client / stakeholder | Assess trust, communication, and project leadership history. |
| Site owner | Maintain portfolio content and positioning. |

### Business Rules

Confirmed rules in code:

| Rule | Implementation |
| --- | --- |
| Project categories are derived from project data and include an `All` option. | `categories = ['All', ...new Set(PORTFOLIO_PROJECTS.map(...))]` in `src/App.tsx` |
| Project filter changes visible project list. | `activeCategoryFilter` state and `filteredProjects` in `src/App.tsx` |
| Project details open only after selecting a project. | `selectedProject` state controls modal rendering. |
| TableTap simulation is available only for the TableTap project. | conditional `selectedProject.id === 'tabletap'` in `src/App.tsx` |
| No backend contact form is used. | contact section text states mail/phone client actions only. |
| Portrait falls back to placeholder on image load failure. | `portraitLoadFailed` state in `src/App.tsx` |

Inferred rules:

| Rule | Basis |
| --- | --- |
| Content updates should be made primarily in `src/data.ts`. | Most portfolio data is centralized there. |
| The site should remain lightweight and static. | No backend, router, API client, database, or form submission code exists. |

## Feature Inventory

| Feature | Purpose | Key files | Main database tables | Related APIs/pages |
| --- | --- | --- | --- | --- |
| Global header navigation | Provides sticky top navigation to portfolio sections. | `src/App.tsx` | None | Anchor links: `#about-section-point`, `#experience-section-point`, `#projects-section-point`, `#skills-section-point`, `#contact-section-point` |
| Side portfolio index | Desktop-friendly section navigation and resume link. | `src/App.tsx` | None | Same anchor links; `/resume.pdf` |
| Hero/profile section | Presents identity, positioning, metrics, CTAs, portrait. | `src/App.tsx`, `src/data.ts`, `public/profile.jpeg` | None | `#projects-section-point`, `#contact-section-point` |
| About/SQA section | Explains QA-rooted engineering philosophy with selectable pillars. | `src/App.tsx` | None | Local React state only |
| Experience timeline | Displays professional history and led projects. | `src/App.tsx`, `src/data.ts` | None | None |
| Project case study grid | Lists portfolio projects with category filter, stack, and metrics. | `src/App.tsx`, `src/data.ts` | None | None |
| Project architecture modal | Shows long description, components, flow, stats. | `src/App.tsx`, `src/data.ts` | None | None |
| TableTap dispatcher simulator | Demonstrates a staged order dispatch log using timers. | `src/App.tsx` | None | None |
| Skills matrix | Displays grouped skills with percentage bars. | `src/App.tsx`, `src/data.ts` | None | None |
| Contact gateway | Provides direct contact and social links. | `src/App.tsx`, `src/data.ts` | None | `mailto:`, `tel:`, GitHub, LinkedIn, `/resume.pdf` |
| Hidden portfolio strategy deck | Inert proposal/review slide UI wrapped in `{false && (...)}`. | `src/App.tsx` | None | Not reachable at runtime |

## Technology Stack

| Layer | Confirmed technology | Notes |
| --- | --- | --- |
| Backend framework | None | No server-side app code exists. |
| Frontend framework | React 19 + TypeScript | `react`, `react-dom`, TSX source. |
| Routing | Native anchor navigation | No React Router or route definitions. |
| Styling | Tailwind CSS v4 plus custom CSS variables | `@import "tailwindcss"` in `src/index.css`; Vite Tailwind plugin. |
| Animation | Motion for React | `motion/react` import; modal/slide animations. |
| Icons | Lucide React | Many icon imports in `src/App.tsx`. |
| Database | None | No migrations, schemas, ORM, SQL, or persistence layer. |
| Cache | None | Redis appears only in portfolio content descriptions. |
| Queue system | None | Queue/event references are portfolio case-study copy only. |
| Search engine | None | No search implementation. |
| Storage system | Static public assets | `public/profile.jpeg`; expected `/resume.pdf` is referenced but not present. |
| Build tool | Vite 6 | `vite.config.ts`, package scripts. |
| CI/CD | None found | No `.github`, pipeline, Docker, or deployment config found. |
| Testing | TypeScript compile check only | `npm run lint` runs `tsc --noEmit`; no unit/e2e framework found. |
| Monitoring/logging | None | No telemetry, logging SDK, or error reporting integration. |
| Third-party integrations | External links only | GitHub, LinkedIn, `mailto:`, `tel:`. Gemini API env is documented but unused in code. |

## Dependency Analysis

### NPM Packages

| Dependency | Why it exists |
| --- | --- |
| `react` | Core UI framework for component rendering and state. |
| `react-dom` | Mounts React app into `#root`. |
| `lucide-react` | Icon library for navigation, sections, CTAs, contact links, and visual labels. |
| `motion` | Animation primitives for hidden deck transitions and project modal animations. |
| `@vitejs/plugin-react` | Enables React support in Vite. |
| `@tailwindcss/vite` | Integrates Tailwind CSS v4 with Vite. |
| `tailwindcss` | Utility-first styling system used heavily through class names. |
| `typescript` | Type checking and TSX support. |
| `vite` | Development server, bundler, and production build command. |
| `@types/node` | Node typings for build config, especially `path` and config execution context. |

### Composer Packages

None. No `composer.json` exists.

### External SDKs / APIs

| Integration | Status |
| --- | --- |
| Gemini API | Mentioned in `.env.example`, `README.md`, and `metadata.json`, but no code imports or consumes Gemini. |
| GitHub | External profile link only. |
| LinkedIn | External profile link only. |
| Email/phone | Browser-native `mailto:` and `tel:` links only. |

## Architecture Analysis

### Architecture Style

Confirmed: **client-only single-page application**.

The app has a simple data-driven component architecture:

```text
index.html
  -> src/main.tsx
    -> <App />
      -> imports structured portfolio data from src/data.ts
      -> renders sections, filters, modal, contact links
      -> styles via Tailwind classes and src/index.css theme tokens
```

### Design Patterns

| Pattern | Evidence |
| --- | --- |
| Data-driven rendering | Projects, work history, skills, and strategy sections are arrays/objects in `src/data.ts` rendered with `.map()`. |
| Local component state | `useState` controls selected project, active category, SQA toggle, portrait fallback, and simulator state. |
| Conditional rendering | Hidden deck, live viewport, project modal, architecture detail blocks, and TableTap simulator. |
| Static content constants | Contact details, links, resume path, portrait path are exported constants from `src/data.ts`. |
| Progressive enhancement through animation | Motion wraps slide/modal transitions. |

### Service / Repository Pattern

Not present. There are no services, repositories, controllers, domain modules, or data access layers.

### Event-Driven / Background Processing

No real event-driven or background processing exists. The TableTap simulation uses `setTimeout` to append local log messages and change local UI state.

### Request Flow

For the deployed app:

```text
Browser requests site
  -> Static hosting serves index.html/assets
  -> Vite-built JS bundle loads
  -> React mounts App into #root
  -> App imports static data from src/data.ts
  -> User interactions update local React state
  -> Browser handles external link navigation / mailto / tel
```

## Database Analysis

No database exists in this codebase.

### Major Entities

Business-level entities represented in TypeScript only:

| Entity | Type/source | Fields |
| --- | --- | --- |
| Project | `Project` interface in `src/data.ts` | `id`, `title`, `description`, `longDescription`, `role`, `tech`, `category`, `stats`, optional `architecture` |
| Experience | `Experience` interface in `src/data.ts` | `id`, `company`, `role`, `period`, `location`, `type`, `description`, `projects` |
| SkillGroup | `SkillGroup` interface in `src/data.ts` | `category`, `skills` |
| Skill | inline object type | `name`, `level`, optional `info` |
| Strategy content | object literal | selling points, gaps, photo analysis, audience, colors, messages |

### Relationships

| Relationship | Type | Notes |
| --- | --- | --- |
| Experience -> Projects | Loose string references | `Experience.projects` contains project names, not IDs. |
| Project -> Stats | Embedded array | Stats belong only to their project object. |
| Project -> Architecture | Optional embedded object | Some projects include components/flow; others do not. |
| SkillGroup -> Skills | Embedded array | Skills belong to their group. |

### Business-Level ERD Summary

```text
PortfolioOwner
  has many ExperienceEntries
  has many PortfolioProjects
  has many SkillGroups
  has ContactProfile

ExperienceEntry
  references zero or more PortfolioProjects by display name

PortfolioProject
  has many ProjectStats
  optionally has ArchitectureSummary

SkillGroup
  has many Skills
```

Important caveat: this is a conceptual ERD. It is not backed by a database schema.

## API Analysis

No application API exists.

| API concern | Finding |
| --- | --- |
| Structure | None. |
| Authentication | None. |
| Response formats | None. |
| Versioning | None. |
| Consumed APIs | None found in source. |

The code does not call `fetch`, `axios`, GraphQL clients, SDK clients, or server actions.

## Frontend Analysis

| Area | Finding |
| --- | --- |
| UI framework | React with TSX. |
| Routing | In-page anchor links only. |
| State management | Local `useState`; no Redux, Zustand, Context, or URL state. |
| Reusable components | No separate component files; all UI is implemented inside `App.tsx`. |
| Layout | Sticky global header, two-column desktop shell with side nav and main content, responsive grids. |
| Styling | Tailwind utility classes, custom CSS variables in `src/index.css`. |
| Animation | Motion `AnimatePresence` and `motion.div` for transitions. |
| Accessibility notes | Semantic sections exist, but modal lacks explicit dialog role/focus trap; icon-only external links use `title`. |

### Main Sections

1. Global header.
2. Hidden strategy deck (`{false && (...)}`).
3. Live portfolio shell.
4. Sticky side navigation/status panel.
5. Hero/profile.
6. About/SQA philosophy.
7. Experience timeline.
8. Project case studies and modal.
9. Skills matrix.
10. Contact box.
11. Footer.

## Authentication & Authorization

No authentication or authorization is implemented.

| Concern | Finding |
| --- | --- |
| Login methods | None. |
| User roles | None. |
| Permissions | None. |
| Access control | None. |
| Protected routes | None. |

## Infrastructure & Deployment

| Concern | Finding |
| --- | --- |
| Docker | None found. |
| Deployment config | No explicit deployment configuration found. |
| Local dev | `npm install`, then `npm run dev`; dev server runs Vite on port `3000` with host `0.0.0.0`. |
| Build | `npm run build` -> `vite build`. |
| Preview | `npm run preview` -> `vite preview`. |
| Env requirements | `.env.example` documents `GEMINI_API_KEY` and `APP_URL`, but current source does not consume them. |
| Queues | None. |
| Cron jobs | None. |
| Caching strategy | Browser/static hosting only; no app-level cache. |
| AI Studio | README and metadata indicate the app originated from or is compatible with Google AI Studio. |

## Business Workflow Mapping

### Visitor Evaluation Flow

1. Visitor loads the site.
2. `index.html` mounts the React app through `src/main.tsx`.
3. `App.tsx` renders portfolio content from `src/data.ts`.
4. Visitor reads hero positioning, metrics, and CTAs.
5. Visitor navigates to About, Experience, Projects, Skills, or Contact through anchor links.

### Project Discovery Flow

1. Visitor reaches `#projects-section-point`.
2. App builds category filters from `PORTFOLIO_PROJECTS`.
3. Visitor clicks a category.
4. `activeCategoryFilter` updates.
5. `filteredProjects` recalculates and the visible project grid changes.
6. Visitor clicks `Inspect Live Architecture`.
7. `selectedProject` is set and the modal opens.
8. Modal displays long description, stats, and optional architecture components/flow.

### TableTap Simulation Flow

1. Visitor opens the TableTap project modal.
2. App conditionally displays the TableTap simulator.
3. Visitor clicks `Spark Live Order Dispatch Simulation`.
4. `simState` becomes `processing`; initial log messages render.
5. After 1.5 seconds, state changes to `routing`; routing log messages append.
6. After 3.2 seconds, state changes to `dispatched`; completion log messages append.
7. Visitor can reset the emulator when dispatch completes.

### Contact Flow

1. Visitor reaches the contact section.
2. Visitor selects email, phone, LinkedIn, GitHub, or resume.
3. Browser opens the relevant external URL, mail client, phone client, or static resume URL.
4. No form data is submitted to this app.

### Content Maintenance Flow

1. Developer updates identity/contact constants in `src/data.ts`.
2. Developer updates `PORTFOLIO_PROJECTS`, `WORK_HISTORY`, `SKILL_GROUPS`, or strategy content.
3. React renders updated content automatically through maps and constants.
4. Developer runs `npm run lint` and `npm run build`.

## Unknowns & Assumptions

### Confirmed Findings

| Finding | Evidence |
| --- | --- |
| This is a React/Vite/TypeScript single-page app. | `package.json`, `vite.config.ts`, `src/main.tsx` |
| Portfolio content is static and local. | `src/data.ts` |
| There is no backend code. | No server directories, controllers, API routes, Composer files, or backend package files found. |
| There is no database schema. | No migrations, ORM files, SQL, Prisma, Drizzle, or backend models found. |
| There are no automated tests beyond TypeScript compile checking. | `npm run lint` is `tsc --noEmit`; no test framework files found. |
| TypeScript check currently passes. | `npm run lint` completed successfully. |
| The project directory is not a Git repository. | `git status` returned `fatal: not a git repository`. |

### Inferred Findings

| Inference | Reason |
| --- | --- |
| The site is intended for professional lead generation and hiring conversion. | Copy repeatedly targets CTOs, hiring teams, enterprise clients, and contact opportunities. |
| The optimal editing surface is `src/data.ts` for content and `src/App.tsx` for layout/interaction. | Data and UI are separated only at this level. |
| Static hosting is sufficient. | No runtime server dependencies are required by the current code. |

### Areas Without Enough Evidence

| Area | Gap |
| --- | --- |
| Production deployment target | No Netlify/Vercel/Cloud Run/Docker/GitHub Actions config exists. |
| Analytics | No analytics provider or measurement code exists. |
| Real resume asset | App links to `/resume.pdf`, but no `public/resume.pdf` was found. |
| Portrait path consistency | Data points to `/profile.jpg`, but the existing asset is `public/profile.jpeg`; UI fallback text mentions `public/profile.jpeg`. |
| Gemini functionality | Env and metadata mention Gemini, but no source code uses it. |
| Exact content truth | Portfolio claims are static content and were not externally verified. |

## Architecture Diagram (Text Version)

Actual architecture:

```text
User Browser
  -> Static Host / Vite Preview
    -> index.html
      -> src/main.tsx
        -> React App
          -> App.tsx
            -> imports data from src/data.ts
            -> renders sections and local UI state
            -> uses Tailwind CSS + src/index.css variables
            -> uses Motion animations
            -> uses Lucide icons
          -> Static Assets
            -> public/profile.jpeg
            -> /resume.pdf referenced but missing
          -> External Browser Actions
            -> mailto:kisorniru@gmail.com
            -> tel:+880...
            -> GitHub profile
            -> LinkedIn profile
```

Requested enterprise-style layer view:

```text
User
  -> Browser Route /
    -> React Entry (src/main.tsx)
      -> App Component (src/App.tsx)
        -> Local State / Event Handlers
          -> Static Data Module (src/data.ts)
            -> In-memory arrays/constants

No Controllers
No Services
No Repositories
No Database
```

## Developer Onboarding Summary

### Learn First

1. `src/data.ts` - source of portfolio identity, projects, experience, skills, and strategy copy.
2. `src/App.tsx` - all rendering, state, interactions, modal logic, and contact links.
3. `src/index.css` - Tailwind import and custom theme variables.
4. `vite.config.ts` and `package.json` - build/dev configuration.

### Most Important Modules

| Module | Why it matters |
| --- | --- |
| `src/App.tsx` | Single largest file and complete UI implementation. |
| `src/data.ts` | Business/content source of truth. |
| `src/index.css` | Global theme and CSS custom properties. |
| `public/` | Static assets expected by the portfolio. |

### Riskiest Areas

| Risk | Impact |
| --- | --- |
| Monolithic `App.tsx` | Harder to maintain, test, and reason about as features grow. |
| Hidden unreachable deck code | Adds complexity and dummy state declarations despite not rendering. |
| Missing `/resume.pdf` | Resume links may 404 in production. |
| Portrait path mismatch | `/profile.jpg` is configured while only `profile.jpeg` exists, likely forcing placeholder fallback. |
| No route/test coverage | Regressions in interactive UI require manual testing. |
| No deployment config | Production behavior depends on undocumented hosting setup. |
| AI Studio env references unused | May confuse developers expecting Gemini integration. |

### Recommended First Refactor

1. Split `App.tsx` into components: `Header`, `SideNav`, `Hero`, `About`, `ExperienceTimeline`, `ProjectGrid`, `ProjectModal`, `SkillsMatrix`, `ContactSection`.
2. Fix asset path consistency: either rename `profile.jpeg` to `profile.jpg` or update `STR_PORT_IMAGE`.
3. Add `public/resume.pdf` or remove/disable resume download links until available.
4. Remove or isolate the hidden strategy deck code.
5. Add a basic smoke test or Playwright test for page load, project filtering, modal open/close, and contact links.

## Verification Performed

| Check | Result |
| --- | --- |
| File discovery | Completed with `rg --files` and `find`, excluding `node_modules`. |
| Source review | Reviewed `package.json`, `README.md`, `index.html`, `vite.config.ts`, `tsconfig.json`, `metadata.json`, `.env.example`, `src/main.tsx`, `src/index.css`, `src/data.ts`, `src/App.tsx`. |
| Dependency listing | `npm ls --depth=0` completed successfully. |
| TypeScript validation | `npm run lint` completed successfully. |
| Git status | Not available; directory is not a Git repository. |

