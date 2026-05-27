# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
cp .env.sample .env   # first-time setup
yarn install

yarn dev              # development server
yarn build            # production build
yarn start            # run production build

yarn lint             # ESLint check
yarn lint-fix         # ESLint + Prettier via lint-staged
yarn format           # Prettier over src/**
```

There are no tests in this project.

## Tech Stack

| Layer | Library | Version |
|---|---|---|
| Framework | Next.js (App Router) | 15 |
| UI | React | 19 |
| Language | TypeScript (strict) | — |
| Styling | styled-components | v6 |
| Primitives | Radix UI | (per-package) |
| Server state | TanStack Query | v5 |
| Client state | Zustand | v5 |
| HTTP | Axios (singleton) | — |

**Radix UI usage rule**: Radix primitives are used only where accessibility is non-trivial to implement manually. All visual styling is done with styled-components — never with Radix's className props or Tailwind.

| Component | Radix package |
|---|---|
| `FilterPills` | `@radix-ui/react-toggle-group` |
| `Carousel` | `@radix-ui/react-scroll-area` |

All other components are built with plain styled-components. Do not add Radix packages beyond this list without discussion.

## Folder Structure

```
src/
├── app/                          # Next.js App Router pages
│   ├── layout.tsx                # Root layout (providers)
│   ├── page.tsx                  # / (Home)
│   ├── page.styled.ts
│   ├── our-team/
│   │   ├── page.tsx
│   │   └── page.styled.ts
│   ├── events/
│   │   ├── page.tsx
│   │   ├── page.styled.ts
│   │   ├── past/
│   │   └── [id]/
│   ├── research/                 # NEW route
│   │   ├── page.tsx
│   │   └── page.styled.ts
│   └── news/                     # NEW route
│       ├── page.tsx
│       └── page.styled.ts
│
├── components/
│   ├── common/                   # Design system — 14 reusable components
│   │   ├── Button/
│   │   │   ├── index.tsx
│   │   │   └── index.styled.ts
│   │   ├── Badge/
│   │   ├── Card/
│   │   ├── InfoBox/
│   │   ├── HeroSection/
│   │   ├── TeamMemberCard/
│   │   ├── EventCard/
│   │   ├── NewsListItem/
│   │   ├── TimelineItem/
│   │   ├── FilterPills/          # Radix ToggleGroup
│   │   ├── Pagination/
│   │   └── Carousel/             # Radix ScrollArea
│   │
│   ├── layout/                   # App shell
│   │   ├── Header/
│   │   │   ├── index.tsx
│   │   │   └── index.styled.ts
│   │   ├── Footer/
│   │   ├── MainLayout/
│   │   └── SideMenu/
│   │
│   └── Modal/                    # Modal stack (Zustand-driven)
│       ├── GlobalModal/
│       └── DialogModal/
│
├── assets/
│   ├── data/                     # Static JSON (events.json, team.json)
│   ├── fonts/                    # PretendardVariable.woff2
│   └── common/                   # SVG icons, logos
│
├── styles/
│   ├── theme.ts                  # Single source of truth for all design tokens
│   ├── GlobalStyle.ts            # CSS reset + font + base rules
│   └── styled.d.ts               # TypeScript theme type augmentation
│
├── store/                        # Zustand stores
│   ├── useModalStore.ts
│   └── useSideBarStore.ts
│
├── hooks/                        # Custom React hooks
│   └── useAxiosInterceptor.tsx
│
├── lib/
│   ├── react-query/              # TanStack Query setup
│   └── styled-components/        # SSR registry + client wrapper
│
├── apis/
│   └── http.ts                   # Axios singleton (HttpClient)
│
└── utils/                        # Pure utility functions
```

**Naming rules**:
- Component folders: `PascalCase/` with `index.tsx` + `index.styled.ts`
- Page files: `page.tsx` + `page.styled.ts` (Next.js convention)
- Everything else: `camelCase.ts`

## Styling

### Theme (`src/styles/theme.ts`)

All design tokens live here. **No raw hex strings anywhere outside this file.**

```ts
colors: {
  // Brand
  primary: '#4F2C1D',       // Brown — primary buttons, active states
  gold:    '#F2A900',       // Gold — hover underlines, accents

  // Material Design surface
  surface:      '#f9f9ff',
  onSurface:    '#141b2b',
  surfaceVariant: '#FBF6EC', // Cream — hero background

  // Blue palette (info/link)
  blue: '#1c4684',

  // Neutral
  border:   '#E5E7EB',
  darkBg:   '#141b2b',      // Footer background
}
```

Access via `${({ theme }) => theme.colors.primary}` in styled-components or `useTheme()` in components.

### Styled-components conventions

- Every component co-locates styles in `index.styled.ts`, imported as:
  ```ts
  import * as S from './index.styled';
  ```
- Pages use `page.styled.ts` with the same `* as S` import pattern.
- Prefer `theme` props over local CSS variables. Never use inline `style={}` for design tokens.
- Transient props (styled-components only, not passed to DOM): prefix with `$` — e.g., `$isActive`, `$variant`.

### Radix UI + styled-components pattern

Wrap Radix primitives with `styled()` — do not use Radix's `className` prop directly:

```ts
// index.styled.ts
import * as ToggleGroup from '@radix-ui/react-toggle-group';

export const Root = styled(ToggleGroup.Root)`...`;
export const Item = styled(ToggleGroup.Item)`...`;
```

## Architecture

### Provider stack

`layout.tsx` → `StyledComponentsRegistry` (SSR style flushing) → `StyledComponentsWrapper` (client boundary):

```
ThemeProvider (styled-components)
  └── ReactQueryProvider (PersistQueryClientProvider, localStorage persister)
        ├── GlobalStyle
        ├── GlobalModal (Zustand-driven modal stack)
        └── MainLayout (Header + SideMenu + children + Footer)
```

`useAxiosInterceptor` is called inside `StyledComponentsWrapper` to wire up Axios interceptors for the singleton `http` client (`src/apis/http.ts`). Errors are forwarded to Sentry and trigger a `DialogModal` via the modal store.

### State management

- **Zustand** (`src/store/`): `useModalStore` (component-keyed modal stack), `useSideBarStore` (mobile nav open/close).
- **TanStack Query**: `staleTime: Infinity`, no retry, 24 h `gcTime`, persisted to `localStorage`. Server-side prefetching uses `getQueryClient` (React `cache()`) + `Hydrate` boundary (`hydrate.client.tsx`).

### Routing

| Route | Description |
|---|---|
| `/` | Home — hero, org description, events preview, team carousel, news & research |
| `/our-team` | Executive Board + Development Team cards |
| `/events` | Upcoming events (anchor tab) + Past events timeline |
| `/events/past` | Past events list |
| `/events/[id]` | Event detail |
| `/research` | Research articles grid + category filter (NEW) |
| `/news` | News board table + pagination (NEW) |

### Static data

Event and team data live in `src/assets/data/` as JSON files and are imported directly — there is currently no runtime API for these.

### Modal pattern

Open a modal by calling `openModal(MODAL_TYPES.dialog, props)` from the `useModal` hook. New modal types must be added to the `MODAL_TYPES` map in `src/components/Modal/GlobalModal/index.tsx` as dynamically-imported components.

### API client

`src/apis/http.ts` exports a singleton `HttpClient` wrapping Axios. Set `API_URL` in `.env` to point at the backend. Interceptors are registered in `useAxiosInterceptor` and ejected on unmount.

## Git workflow

- Branch from `main`: `feat/...`, `fix/...`, `hotfix/...`
- Commit format: `type(scope): message` (Conventional Commits, English)
- Pre-commit hook runs lint-staged (ESLint + Prettier) via Husky
