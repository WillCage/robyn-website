# TODO

## Goal
Build a modern, fast, single-page website for Robyn Pinks (Biokineticist & Personal Trainer) and deploy it to GitHub Pages.

## Tasks

### 1. Project Setup
- [x] Create `index.html` with semantic HTML structure
- [x] Create `styles.css` with modern, responsive design
- [x] Create `script.js` for interactivity (smooth scroll, form handling)
- [x] Create a `public/` directory for images, favicon, etc.
- [x] Set up `.github/workflows/deploy.yml` for GitHub Pages (static)

### 2. Content Sections (single-page layout)
- [x] **Header/Navigation** — sticky nav with logo ("Robyn Pinks Biokineticist") and anchor links to sections
- [x] **Hero Section** — Robyn's name, title, intro text, and a "Book Now" CTA button that scrolls to the contact form
- [x] **About Section** — short bio explaining who Robyn is
- [x] **Services Section** — cards for Biokineticist services and Personal Training at Fifth Gym (Stonehouse)
- [x] **Workplace Info** — details about Fifth Gym location in Stonehouse
- [x] **Contact / Book Now Form** — form with fields for name, email, phone, and message; "Book Now" submission
- [x] **Footer** — social media buttons (Facebook & Instagram), copyright

### 3. SEO
- [x] Add meta tags (title, description, Open Graph, Twitter Card)
- [x] Ensure semantic HTML (correct heading hierarchy, `<main>`, `<nav>`, `<section>`, `<footer>`)
- [x] Add structured data (JSON-LD) for local business
- [x] Optimise image `alt` text and file names
- [x] Add a `robots.txt` file

### 4. Design & Polish
- [x] Choose a cohesive colour palette and typography (modern, clean, professional — health/wellness theme)
- [x] Ensure fully responsive layout (mobile-first approach)
- [x] Add hover effects and subtle animations for buttons and cards
- [x] Ensure accessibility (proper contrast, alt text placeholders, semantic headings)

### 5. Deployment
- [x] Configure GitHub Actions workflow for static deployment
- [ ] Push to GitHub and verify GitHub Pages deploys correctly
- [ ] Test live site on desktop and mobile

## Notes
- Single-page, no frameworks — keep it lightweight (HTML/CSS/JS only)
- GitHub Pages deployment means no server-side processing; the "Book Now" form will use `mailto:` for simplicity
- Use UK English spelling and phrasing throughout all text
- No work hours on the site — she will discuss scheduling privately with contacts
- Placeholder text and images will be used where Robyn's actual content isn't available yet
- Social links for Facebook/Instagram will use placeholder URLs that can be updated later
- Remember to update the `mailto:` email address and social media URLs in `index.html` and `script.js` with Robyn's real details
