
# Portfolio Revamp Plan — Happiness Adam

This is a full overhaul of structure, design tokens, copy, and section content. Below is what I'll build and how, so you can confirm before I touch code.

## Scope summary

- Replace the current dark amber/gold theme with a GitHub-dark engineered palette (#0D1117 base, #2563EB accent).
- Switch typography to Inter + JetBrains Mono (drop Space Grotesk display feel).
- Rebuild every page section with the exact copy and structure in your brief.
- Consolidate to a focused single-page experience with anchor sections, keeping multi-page routes only where they already add value (About long-form, Contact, Mentorship). Home becomes the hero + about + projects + skills + pinesstech + contact flow you described.
- Update SEO metadata to the new title/description (keep OG image + canonical work from prior turns).

## Design system changes (`src/index.css`, `tailwind.config.ts`)

- Tokens swapped to:
  - `--background` #0D1117, `--card` #161B22, `--border` #30363D
  - `--primary` #2563EB, `--accent` #6366F1, `--success` #10B981
  - `--foreground` #F0F6FC, `--muted-foreground` #8B949E
- Replace gradient/glow tokens with subtle border + 1px divider styles (no heavy shadows).
- Fonts: Inter (display + body), JetBrains Mono (code/pills). Remove Space Grotesk imports.
- Add `.dot-grid` utility for hero background (CSS radial-gradient dots, no image).
- Add `.tech-pill` utility (mono font, 1px border, rounded-md).

## Sections to build

All on `src/pages/Home.tsx` unless noted. Each is a new component under `src/components/sections/`.

1. **HeroSection** — rewritten: left column with name, title "Full-Stack Software Engineer & Backend Systems Builder", tagline "I build production-grade systems — not just websites.", primary CTA → Projects, secondary → Contact, GitHub/LinkedIn/X icon row. Right column: styled terminal/editor card with syntax-highlighted pseudo-code (window chrome dots, mono font, color-coded tokens). Dot-grid background.
2. **AboutSection** — rewritten with your verbatim identity paragraph + PinessTech paragraph. Right column = Quick Facts card (Role, Studio, Background, Focus, Availability, Based In). Tech logo strip (Python, TS, React, FastAPI, Supabase, MySQL) using simple inline SVG/devicons. CTA anchor → Projects.
3. **ProjectsSection** — "Selected Work" with 5 cards in 2-col grid using your exact template:
   - Eagle's Wings (with green ● LIVE badge, live + repo links)
   - FastAPI Auth Service (repo + muted highlight line)
   - Dexgen Electricals (repo; "Client deployment" if no live)
   - Health Quest (repo)
   - jechspace Booking Module (repo + collaboration note)
   Each card: tag row, title, description, mono stack pills, links. Hover = border shifts to accent.
4. **SkillsSection** — "Technical Skills" grid of grouped category cards (Languages, Backend, Frontend, Databases, DevOps, Tools). Inline pills, no progress bars.
5. **PinessTechSection** — split layout, brand text on left, simple wordmark on right.
6. **ContactSection** — rewritten "Let's Build Something". Left: form (Name, Email, "What are you building?" textarea, "Send Message"). Right: direct contact (email, GitHub, X @LadyPiness, LinkedIn) + availability signal block.
7. **Navbar** — simplified to About / Projects / Skills / Contact anchor links, scrollspy active-state highlight, transparent → solid on scroll, mobile drawer.
8. **Footer** — minimal: name, year, single line + socials.

## Content/routing decisions

- Keep `/about`, `/mentorship`, `/contact` routes but make Home the source of truth with anchor scroll. Update those subpages' copy to align with the new identity (no redesign of their structure unless needed for consistency).
- Remove decorative/generic copy: "passionate", "I love to code", any stock illustration usage.
- All five projects authored exactly per your spec.

## SEO

- `index.html` title → "Happiness Adam — Full-Stack Software Engineer & Backend Systems Builder"
- description → your provided string
- Keep OG image, canonical, twitter tags from prior work; update title/description to match.

## What I will NOT change

- Routing setup, PageLayout shell, existing OG image asset, ScrollToTop, build config.
- Mentorship page beyond a light copy refresh.
- Existing Supabase/Cloud wiring (none currently).

## Files touched

- Edit: `src/index.css`, `tailwind.config.ts`, `index.html`, `src/components/Navbar.tsx`, `src/components/sections/FooterSection.tsx`, `src/pages/Home.tsx`, `src/pages/About.tsx`, `src/pages/Contact.tsx`
- Create: `src/components/sections/HeroSection.tsx` (replace existing), `AboutSection.tsx` (replace), `ProjectsSection.tsx` (replace), `SkillsSection.tsx` (new), `PinessTechSection.tsx` (new), `ContactSection.tsx` (replace), `TerminalCard.tsx` (new), `TechPill.tsx` (new)
- Possibly remove: `TechStackSection.tsx`, `InsightsSection.tsx`, `CTASection.tsx`, `MentorshipSection.tsx` if no longer referenced (will verify before deleting).

Reply **approve** to build this, or tell me what to adjust (e.g. keep amber accent, keep multi-page Projects route, skip Skills rewrite, etc.).
