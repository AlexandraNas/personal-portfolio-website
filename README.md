# Alexandra's Portfolio

Personal portfolio website — built to showcase my projects and skills as a BSc (Hons) Computing student.

**Live site:** [add your link here once deployed]

## Built with

- HTML
- CSS
- JavaScript

## Structure

```
alexandra-portfolio/
├── index.html              # homepage
├── style.css                # shared styles (nav, buttons, footer, homepage sections)
├── case-study.css           # styles for the project case-study pages
├── script.js                 # contact form + mobile menu logic
└── projects/
    ├── nhs-patient-database.html
    ├── beauty-ecommerce.html
    └── images/                # screenshots used on the case-study pages
```

## Running locally

No build step needed — just open `index.html` in a browser.

Or serve it locally:

```
python3 -m http.server
```

then visit `http://localhost:8000`.

## Deploying (GitHub Pages)

1. Push this folder to a GitHub repo.
2. Go to **Settings → Pages**.
3. Under "Build and deployment", set Source to **Deploy from a branch**, pick `main` and `/ (root)`.
4. Your site will be live at `https://<username>.github.io/<repo-name>/`.

## Features

- Responsive layout with a mobile hamburger menu
- Individual case-study pages for each project (problem, approach, challenges, results)
