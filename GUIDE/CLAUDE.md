# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
```bash
npm run dev          # Start development server (http://localhost:3000)
npm run build        # Build production application
npm run start        # Start production server
npm run lint         # Run ESLint checks
npm run lint:fix     # Auto-fix ESLint issues
npm run type-check   # Run TypeScript compiler checks without emitting
```

### Initialization
```bash
./init              # Run full project initialization (deps, typecheck, lint, build)
```

## Architecture

### Next.js App Router Structure
This is a Next.js 15 project using App Router with the following routing:
- `src/app/page.tsx` → `/` (homepage)
- `src/app/(pages)/about/page.tsx` → `/about`
- `src/app/(pages)/career/page.tsx` → `/career`
- `src/app/(pages)/cooperation/page.tsx` → `/cooperation`
- `src/app/(pages)/projects/page.tsx` → `/projects`

Route groups `(pages)` share a common layout with Navigation component.

### Component Organization
Components are organized by function, not feature:

**Sections** (`src/components/sections/`):
- `hero/` - Hero sections for different pages (HeroHome, HeroAbout, HeroCareer, HeroCooperation)
- `content/` - Main content sections (AboutSection, ProcessSection)
- `common/` - Shared sections (FooterSection, AllFooterSection)
- Root level - Other page sections (ImageSection, ProjectsSection, StatsSection, etc.)

**UI Components** (`src/components/ui/`):
- Base UI components (Button, Card, Navigation, GridDebugger)
- All components use centralized exports via `index.ts`

### Design System
The project uses a comprehensive design system with:

**Typography**:
- PP Supply Mono: Body text and UI elements (mono-xs, mono-m, mono-l)
- Figtree: Headings and large text (fig-m, fig-l, fig-xl, fig-xxl, fig-xxl-bold)
- All fonts are responsive using clamp() functions

**Colors**:
- Primary: `accent` (#FDE10D), `light` (#F4F5F6), `dark` (#1D1F23)
- Grays: `gray-light` (#CAD3D7), `gray-mid` (#879AA4), `gray-dark` (#3E485A)

**Grid System**:
- 12-column grid with 20px gaps
- Column-based max-width utilities (col-1 through col-12)
- Responsive breakpoints with mobile-first approach

### Styling Architecture
- **Tailwind CSS**: Primary styling system with extensive custom configuration
- **Design System CSS**: Additional helper classes in `src/assets/styles/design-system.css`
- **Responsive**: All typography and spacing use clamp() for fluid responsiveness
- **Gradients**: Pre-defined gradients (gradient-light, gradient-dark, gradient-full)

### Path Aliases
```typescript
"@/*": ["./src/*"],
"@/components/*": ["./src/components/*"],
"@/lib/*": ["./src/lib/*"],
"@/utils/*": ["./src/utils/*"],
"@/types/*": ["./src/types/*"],
"@/constants/*": ["./src/constants/*"],
"@/hooks/*": ["./src/hooks/*"],
"@/assets/*": ["./src/assets/*"]
```

### Key Libraries
- **UI**: Radix UI primitives with shadcn/ui patterns
- **Styling**: Tailwind CSS with clsx/tailwind-merge utilities
- **Animations**: GSAP
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Inter, Figtree) with next/font optimization

### Performance Optimizations
- Standalone output for containerized deployments
- Package import optimization for major libraries
- Image optimization with WebP/AVIF formats
- Console removal in production builds
- Security headers (X-Frame-Options, X-Content-Type-Options, Referrer-Policy)

### Development Notes
- All components default to Server Components (Next.js App Router)
- Images should be placed in organized subdirectories under `public/images/`
- Use the `cn()` utility from `@/lib/utils` for conditional Tailwind classes
- Grid debugging available via `GridDebugger` component
- Project language: Polish (metadata, content)