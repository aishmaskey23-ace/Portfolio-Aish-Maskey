# Aish Maskey — Portfolio

A personal portfolio site built with React + Vite. Clean, professional
black-and-white layout with a light/dark mode toggle: a sticky top navbar, a
hero with your photo and CV download, and sections for About, Skills,
Projects, Experience, Education, and Contact — plus a working contact form
that emails you directly.

## Run it locally

1. Install [Node.js](https://nodejs.org) (18 or newer).
2. Open this folder in VS Code, then open a terminal (``Terminal > New Terminal``).
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the dev server:
   ```bash
   npm run dev
   ```
5. Open the URL it prints (usually `http://localhost:5173`).

## Build for deployment

```bash
npm run build
```

This outputs a static, production-ready site into `dist/`. Deployed on
Vercel by importing this repo — Vite is detected automatically.

## Project structure

```
index.html                 Vite entry HTML — favicon, Open Graph / link-preview tags
public/
  AISH_MASKEY_CV.pdf         Downloadable CV (linked from the hero)
  favicon.ico, favicon.svg, apple-touch-icon.png
  og-image.png                Link-preview image (LinkedIn/WhatsApp/Facebook)
  projects/                    Screenshot for each project and each mini project
src/
  main.jsx                  React root
  App.jsx                    Page layout — wires up theme + scroll-reveal, composes all sections
  index.css                  All styles: theme tokens, animations, responsive breakpoints
  data/content.js             Nav items, rotating roles, project list, skills, social links
  data/techIcons.js            Maps a technology name (e.g. "HTML5") to its logo
  hooks/
    useScrollSpy.js            Tracks which section is on screen (nav highlighting)
    useRoleCycle.js             Rotates the hero's role text
    useTheme.js                 Dark/light mode state, persisted to localStorage
    useScrollReveal.js          Fades sections in as they scroll into view
  utils/nav.js                 Smooth-scroll + ctrl/cmd-click link handling
  assets/profile.jpg            Your photo (upscaled + sharpened)
  assets/tech/                  Technology logos (SVG) used in Skills and project tags
  components/
    Navbar.jsx                  Sticky top nav, mobile menu, theme toggle
    ThemeToggle.jsx              The dark/light mode switch button
    SocialIcon.jsx                GitHub / LinkedIn / Facebook / Instagram / mail / phone /
                                  location glyphs, each in its brand color
    TechLabel.jsx                 Technology name with its logo (used by Skills + Projects)
    Hero.jsx                     Name, rotating role, photo, CTA buttons (incl. Download CV)
    About.jsx, Skills.jsx, Projects.jsx, Experience.jsx,
    Education.jsx, Contact.jsx
    Footer.jsx                    Social icons, quick links, contact, copyright + tagline
```

## What's new in this update

- **Project screenshots** — each project (and each app inside "Web
  Development Mini Projects") can show a preview image. Clicking it opens
  the live demo or demo video. Images live in `public/projects/`.
- **Working contact form** — the Contact form sends messages straight to
  your email via Formspree, instead of opening the visitor's mail app.
- **Download CV button** — a button in the hero downloads
  `public/AISH_MASKEY_CV.pdf`.
- **Favicon + link preview** — a browser-tab icon and a custom preview
  card (image, title, description) show up when the link is shared on
  LinkedIn, WhatsApp or Facebook.
- **Icons in the Contact section** — Email, Phone, Location, LinkedIn,
  GitHub, Facebook and Instagram each show their icon next to the label.
- **Brand-color social icons** — GitHub, LinkedIn, Facebook and Instagram
  use their real brand colors instead of a single flat color; GitHub
  switches between white/black to stay visible in both themes.
- **Per-app project links** — "Web Development Mini Projects" lists each
  app (Expense Tracker, Tic Tac Toe, To-Do List) with its own GitHub and
  Vercel links, instead of one link for the whole card.
- **Ace Grihaa in Experience** — added as a Founder role, with links to
  its Instagram and Facebook pages.
- **Footer tagline** — "Believe in yourself, Keep grinding." on the right
  side of the copyright line.

### Earlier updates

- **Technology logos** — HTML5, CSS3, JavaScript, React, MySQL, PHP, Kotlin,
  Figma, Git, GitHub, VS Code, Chrome and Android Studio show their logo
  next to the name in Skills and on project tags. Logos are bundled locally
  in `src/assets/tech/` (MIT-licensed [Devicon](https://devicon.dev) set),
  so they work offline.
- **Cleaner section headings** — no "01 — About" / "02 — Skills" labels;
  each section has just its heading.
- **No dead links** — "Source" / "Live demo" only appear once a project has
  a real URL.
- **Dark/light mode toggle** — a sun/moon button in the navbar flips the
  color scheme, remembered via `localStorage`, defaulting to the OS
  preference on first visit.
- **Animations** — hero fade/slide-in, scroll-reveal per section, card
  hover-lift, smooth nav underline (respects `prefers-reduced-motion`).
- **Fully responsive** — breakpoints at 900 / 760 / 480 / 340px.
- **Sharper photo** — `src/assets/profile.jpg` upscaled and sharpened for
  retina screens.
- **Footer with social icons + quick links** — icon buttons for GitHub,
  LinkedIn, Facebook, Instagram, email; a "Quick Links" column that
  smooth-scrolls to each section.

## Things to customize

- **Project links**: in `src/data/content.js`, add `source`, `demo` and/or
  `video` to any project and the matching button appears automatically
  ("Source code", "Live demo", "Demo video"):
  ```js
  {
    title: 'JobTrack — Job Application Tracker',
    // ...
    image: '/projects/jobtrack.png',
    source: 'https://github.com/your-username/jobtrack',
    demo: 'https://your-app.vercel.app',
   
  }
  ```
- **A project made of several small apps** (like "Web Development Mini
  Projects"): use an `items` list instead. Each item gets its own image and
  its own links; a row stays hidden until it has at least one link:
  ```js
  items: [
    { name: 'Tic Tac Toe', image: '/projects/tic-tac-toe.png', source: 'https://github.com/you/tic-tac-toe', demo: 'https://tic-tac-toe.vercel.app' },
  ],
  ```
- **Adding a new logo**: drop the SVG into `src/assets/tech/`, then add one
  line to the rules list in `src/data/techIcons.js`.
- **Updating your CV**: replace `public/AISH_MASKEY_CV.pdf` with a new file
  of the exact same name — no code changes needed.
- **Contact form**: the Formspree endpoint is set in
  `src/components/Contact.jsx` (`FORM_ENDPOINT`). Messages go to whatever
  email that Formspree form is configured with.
- **Link preview**: `og:url` and `og:image` in `index.html` must use your
  real deployed domain, not a placeholder, or previews won't load.
- **Content**: all text lives in `src/data/content.js` and the individual
  component files — edit there rather than in `index.css`.
- **Colors**: dark theme tokens are under `:root` in `src/index.css`; light
  theme tokens are under `:root[data-theme="light"]` right below it.
- **Rotating role text**: edit the `ROLES` array in `src/data/content.js`.
- **Social links**: edit the `SOCIAL_LINKS` array in `src/data/content.js`.
