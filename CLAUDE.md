# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Static marketing site for **Safari Integrated Business Solutions** (POS, hotel PMS, event management, USALI ERP for hospitality). Plain HTML + vanilla JS, no build step, no package.json, no tests, no linter.

## Running locally

```bash
node server.js            # http://localhost:3000 (PORT env var overrides; falls back to PORT+1 if busy)
python -m http.server 3000  # alternative
```

Opening `index.html` directly in a browser also works. The project lives under Laragon (`d:\laragon\www\...`), so it may also be served by Laragon's web server. `server.js` is only a zero-dependency static file server.

## Deployment

Pushing to `main` auto-deploys to the production VPS (safaribs.com, behind Cloudflare) via [.github/workflows/deploy.yml](.github/workflows/deploy.yml): rsync over SSH as the `deploy` user into `/var/www/safaribs-site` (hardcoded in the workflow), excluding dev-only files (`server.js`, docs, `.github`). Needs repo secrets `SSH_HOST`, `SSH_USER`, `SSH_PRIVATE_KEY`, optional `SSH_PORT`. Can also be run manually from the Actions tab.

## Architecture

- **Two pages, shared assets:** `index.html` (home) and `about.html` both load the same `styles.css` and `app.js`. The header, mobile drawer, footer, floating widgets and `tailwind.config` block are **duplicated in each HTML file** — any change to shared chrome (nav links, logo, brand name, contact info) must be made in both files. On `about.html`, nav anchors are prefixed with `index.html#...`.
- **Styling:** Tailwind via the Play CDN (`cdn.tailwindcss.com`) configured by an inline `tailwind.config` script in each page's `<head>`, which defines the `safari` color scale (brand olive `#6A760C`) and fonts (Plus Jakarta Sans, JetBrains Mono). `styles.css` holds only what Tailwind utilities can't: range sliders, `<dialog>`/toast animations, scrollbars, etc. Icons are Lucide from unpkg (`<i data-lucide="...">`, rendered by `lucide.createIcons()`); call `lucide.createIcons()` again after injecting new icon markup.
- **`app.js`:** a single `DOMContentLoaded` handler calls one `setupXxx()` function per feature (mobile menu, hero console, integration simulator, ROI calculator, USALI explorer, FAQ, demo forms, network/offline simulation, suite carousel, unified contact widget, draggable demo button). Each setup function looks up its elements by ID and **returns early if they're missing**, which is how one script serves both pages — keep that guard when adding features. Content data for interactive widgets (`consoleViews`, `usaliData`) lives as JS objects in `app.js`, and JS often rewrites element `className` strings with Tailwind classes directly.
- **No backend:** demo/lead forms are simulated client-side (generated `SAF-2026-XXXX` reference + toast via `showToast()`); the contact widget opens WhatsApp (`wa.me`) links. The draggable demo widget persists its position in `localStorage` (`safari_demo_btn_pos`).
- **Disabled sections are commented out, not deleted** (e.g. the hero interactive console in `index.html`, with re-enable instructions in the comment). Follow the same convention when asked to hide content; the matching JS (`setupHeroConsole`) stays and no-ops.

## Conventions

- Brand name is "Safari Integrated Business Solutions"; logo files are in `assets/`.
- Commit messages are short imperative sentences describing the visible change (see `git log`).
