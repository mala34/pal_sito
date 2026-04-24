# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Static website for **Persone al Lavoro** (PAL) by **Lapsy S.r.l.** at `personeallavoro.it`. Platform for personnel management, attendance tracking, construction site badges, and AI-powered multilingual communication. Currently in early stage ("Sito in costruzione").

## Company info

- **Company**: Lapsy S.r.l. — P.IVA IT03447571203
- **Email**: info@lapsy.me
- **Phone**: +393480407500
- **Sede Legale**: Via P.A. Orlandi, 11/1/B, 40139 Bologna, Italy
- **Sede Operativa**: Piazza Sergio Finocchi, 3, 41017 Spilamberto (MO), Italy
- **Production URL**: https://personeallavoro.it

## Commands

```sh
npm run dev       # dev server on localhost:4321
npm run build     # production build to ./dist/
npm run preview   # preview production build locally
```

## Architecture

- **Astro 6** SSG with file-based routing (`src/pages/` → routes)
- **Tailwind CSS v4** via Vite plugin (`@tailwindcss/vite`) — no `tailwind.config.js` needed; global import in `src/styles/global.css` using `@import "tailwindcss"`
- **TypeScript** strict mode (extends `astro/tsconfigs/strict`)
- **Node** >= 22.12.0, ES modules only

## Page rendering flow

`src/pages/*.astro` → imports `src/layouts/Layout.astro` (provides HTML shell, meta tags, global CSS, `<slot />`) → page content renders inside the slot.

Layout accepts optional `title` and `description` props with defaults. HTML lang is set to `it`.

## Conventions

- Content language: Italian. Code/comments: English.
- Styling: prefer Tailwind utility classes. Scoped `<style>` blocks allowed for complex component-specific styles.
- Props: defined as TypeScript interfaces in Astro frontmatter, destructured from `Astro.props`.
- Site URL configured in `astro.config.mjs`.

## Content page layout (MUST follow)

All content/service pages and all `[slug].astro` detail templates **must** follow the same layout pattern. Reference `src/pages/corsi/[slug].astro` as the canonical template.

### Static content pages
- **Container**: `<main class="max-w-4xl mx-auto px-4 pt-28 pb-16">`
- **Title**: `<h1 class="text-4xl font-[Inter,sans-serif] font-bold text-[#444] mb-6">`
- **Image**: `<img ... class="w-full rounded-xl mb-8" />` right after h1
- **Body text**: `<p class="text-lg text-gray-600 leading-relaxed mb-6">`, bold uses `<strong class="text-[#444]">`
- **Section headings**: `<h2 class="text-2xl font-[Inter,sans-serif] font-bold text-[#444] mb-4">`

### Dynamic post detail pages ([slug].astro templates)
- **Container**: `<article class="max-w-4xl mx-auto px-4 pt-28 pb-16">`
- **Title**: `<h1 class="text-4xl font-[Inter,sans-serif] font-bold text-[#444] mb-3">`
- **Image**: `class="w-full rounded-xl mb-8"`
- **Description**: `<p class="text-lg text-gray-600 leading-relaxed mb-8">`
- **Prose**: `prose prose-gray max-w-none prose-headings:text-[#444] prose-headings:font-[Inter,sans-serif] prose-a:text-[#FF6600] prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-700`

### Shared rules
- **Contact links**: always clickable `mailto:` / `tel:`, icon + text, `hover:text-[#FF6600] transition-colors`
- **No hero sections** with gradient blobs — those are only for the homepage
- **Colors**: primary orange `#FF6600`, hover `#e65c00`, text `#444`, body `text-gray-600`, muted `text-gray-400`
- **Fonts**: Inter for everything (variable weight 400-800 via Google Fonts)
- **Icons**: Heroicons inline SVG, outline (stroke) for actions, solid (fill) for decorative
- **Border radius**: always `rounded-xl` (never `rounded-lg`)