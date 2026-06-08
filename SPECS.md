# Robyn Pinks Biokineticist — Project Specifications

## Project Overview

A modern, fast, single-page website for **Robyn Pinks**, a Biokineticist and Personal Trainer based in Stonehouse, South Africa. The site showcases her services, where she works, and provides a contact form so potential clients can "Book Now". It is hosted on **GitHub Pages**.

### Key Facts
- **Client**: Robyn Pinks (Biokineticist & Personal Trainer)
- **Affiliation**: Works at Fifth Gym in Stonehouse
- **Socials**: Facebook and Instagram (placeholder URLs — update with real ones)
- **Language**: UK English spelling and phrasing throughout
- **No work hours** on the site — she discusses scheduling privately with contacts
- **Contact form**: Uses `mailto:` to open the user's email client (no server-side processing)

---

## File Structure

```
robyn-website/
├── index.html                    # Single-page site, all sections
├── styles.css                    # All styles, responsive design
├── script.js                     # Mobile nav toggle, form mailto handler
├── robots.txt                    # SEO — allows all crawlers
├── sitemap.xml                   # SEO — lists single page
├── SPECS.md                      # This document
├── public/
│   ├── robyn-portrait.svg        # Placeholder portrait (replace with real photo)
│   ├── og-image.svg              # Open Graph preview image (1200×630)
│   ├── favicon-32x32.svg         # Favicon 32×32
│   └── favicon-16x16.svg         # Favicon 16×16
└── .github/
    └── workflows/
        └── deploy.yml            # GitHub Actions — deploys on push to main
```

---

## Tech Stack

- **No frameworks** — plain HTML5, CSS3, vanilla JavaScript
- **Static deployment** via GitHub Pages (Actions-based)
- **Form handling** via `mailto:` (client-side, opens email client)
- **No build step**

---

## Design System

### Colour Palette

| Role | Hex | Usage |
|---|---|---|
| **Primary** | `#A7B8A2` | Section dividers, form focus states, footer top border |
| **Primary dark** | `#8A9F86` | Subtitles, location text |
| **Primary light** | `#C3D2BE` | Hero image outline |
| **Accent** | `#D98A96` | "Book Now" buttons, nav CTA, section title underlines, logo accent word |
| **Accent hover** | `#C97C86` | Button/nav CTA hover states |
| **Text** | `#2B2B2B` | Headings, body text |
| **Text light** | `#6B6F76` | Descriptions, secondary text |
| **Background** | `#FAFAF8` | Body background (warm white) |
| **Background alt** | `#F2F3F1` | Section alternates (off-white) |
| **Background dark** | `#3A3A3A` | Footer background |

### Typography

- Font: `Segoe UI`, `system-ui`, `-apple-system`, sans-serif
- No external font imports (uses system fonts for speed)

### Spacing & Layout

- Container max width: `1100px`
- Mobile-first responsive breakpoints: `768px` (tablet), `480px` (mobile)
- Header: fixed at top, 60px tall, white with slight backdrop blur

### Design Principles

- Sage green is the **primary** (structure, credibility)
- Rose pink is the **accent only** (CTAs, highlights) — never a background
- Warm white/off-white backgrounds for a clean, clinical health feel
- Subtle shadows, rounded corners (6px–20px), smooth transitions (0.3s ease)

---

## Content Sections (in order)

### 1. Header / Navigation (sticky)
- Logo: "Robyn Pinks **Biokineticist**" — "Biokineticist" in pink, links to `#hero`
- Menu links: About, Services, Workplace, Contact
- Social icons: Facebook and Instagram (circle icons, match nav hover style)
- "Book Now" CTA button (pink, links to `#contact`)
- Mobile: hamburger menu (slides in from right)

### 2. Hero Section (`#hero`)
- Left: Name "Robyn Pinks" (large), subtitle "Biokineticist & Personal Trainer" (sage green), description paragraph, "Book Now" button
- Right: Circular portrait image with sage outline
- Background: subtle gradient from off-white to warm white
- `min-height: 90vh`

### 3. About (`#about`)
- Centre-aligned text, max-width 700px
- Three paragraphs: introduction, approach, Fifth Gym mention
- Section title with pink underline accent

### 4. Services (`#services`)
- Four service cards in a responsive grid:
  1. **Biokinetics** — exercise prescriptions for rehab, chronic conditions
  2. **Personal Training** — one-on-one sessions for fitness goals
  3. **Injury Recovery** — guided recovery post-injury/surgery
  4. **Health Assessments** — movement and fitness assessments
- Cards have emoji icons, white background, subtle border, lift on hover

### 5. Workplace (`#workplace`)
- Centre-aligned text, max-width 700px
- Title: "Fifth Gym"
- Location: "Stonehouse"
- Description paragraph about the gym
- Note: directs users to contact form for appointments (no hours listed)

### 6. Contact / Book Now (`#contact`)
- Form with fields: Full Name, Email, Phone (optional), Service Interested In (dropdown), Message
- Fields: name, email, phone, service, message
- Dropdown options: Biokinetics, Personal Training, Injury Recovery, Health Assessment, Other
- Submit: builds a `mailto:` link with form data and opens email client
- All text labels in UK English

### 7. Footer
- Copyright: `© [current year] Robyn Pinks Biokineticist. All rights reserved.`
- Social icons **removed** from footer (moved to nav bar)

---

## SEO

### Meta Tags
- `title`: "Robyn Pinks Biokineticist | Biokinetics & Personal Training in Stonehouse"
- `description`: meta description with relevant keywords
- `keywords`: biokineticist, personal trainer, Stonehouse, rehabilitation, injury recovery, fitness, Robyn Pinks, Fifth Gym
- `author`: Robyn Pinks
- `robots`: index, follow
- `og:title`, `og:description`, `og:type`, `og:url`, `og:image`, `og:locale`
- `twitter:card` (summary_large_image), `twitter:title`, `twitter:description`, `twitter:image`
- `canonical` URL

### Structured Data (JSON-LD)
- `@type`: `LocalBusiness`
- Name, description, URL, telephone, address (Stonehouse, ZA)
- `sameAs`: Facebook and Instagram URLs
- `serviceType`: Biokinetics, Personal Training, Rehabilitation, Injury Recovery
- `areaServed`: Stonehouse and surrounding areas

### Other SEO
- `robots.txt` allowing all crawlers
- `sitemap.xml` with single URL entry
- Semantic HTML: `<main>`, `<nav>`, `<section>`, `<footer>`, correct heading hierarchy (h1→h2→h3)
- Image `alt` text on all images
- `lang="en-GB"` on `<html>`

---

## JavaScript Features

1. **Mobile navigation toggle** — opens/closes hamburger menu, closes on link click, closes on Escape key, closes when clicking outside
2. **Form handler** — intercepts form submit, builds `mailto:` URL from form fields, opens email client
3. **Footer year** — dynamically sets current year via `#year` element
4. **Smooth scroll** — via CSS `scroll-behaviour: smooth` with `scroll-padding-top: 70px`

---

## Deployment

- **Platform**: GitHub Pages (static, Actions-based)
- **Trigger**: push to `main` branch or manual dispatch
- **Workflow**: `.github/workflows/deploy.yml` — checks out code, uploads as Pages artifact, deploys
- **No build step** required

---

## Known / Placeholder Items (needs updating)

| Item | Current Value | Should Be |
|---|---|---|
| Email address | `your-email@example.com` (in HTML `mailto:` and JS) | Robyn's real email |
| Facebook URL | `https://www.facebook.com/robyn-pinks` | Real Facebook page URL |
| Instagram URL | `https://www.instagram.com/robyn-pinks` | Real Instagram profile URL |
| Portrait image | `public/robyn-portrait.svg` (placeholder) | Real photo (JPG/PNG, 400×400) |
| OG image | `public/og-image.svg` (placeholder) | Real social preview image (1200×630) |
| Canonical URL | `https://robyn-pinks.co.za` | Real domain once live |
| Telephone (JSON-LD) | `+27-00-000-0000` | Real phone number |

---

## TODO Status

All development tasks are complete (see `TODO.md` for full task list with checkmarks). Remaining work is content updates and deployment.
