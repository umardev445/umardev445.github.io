# QuranCrest Academy Website

Static, mobile-friendly website for [qurancrest.com](https://qurancrest.com), with English and Urdu pages, one-to-one Quran course information, policies, location guides, blog articles and practical learning tools.

## What is included

- 41 indexable URLs in `sitemap.xml`
- Eight detailed course pages
- Seven long-form learning articles
- Five practical resource pages with browser-based tools or checklists
- Full Urdu home, courses, resources and contact pages
- Distinct USA and Australia location guides
- About, tutor, pricing, child-safety, privacy, terms, refund and contact pages
- A noindex thank-you page and noindex custom 404 page

## New free resources

1. `/resources/quran-learning-level-check/`
2. `/resources/weekly-quran-practice-planner/`
3. `/resources/first-online-quran-lesson-checklist/`
4. `/resources/common-quran-reading-mistakes/`
5. `/resources/hifz-revision-planner/`

The interactive answers are calculated in the visitor's browser. They are not submitted unless the visitor separately uses a contact or assessment form.

## Main folders

```text
qurancrest/
├── assets/                     # CSS, JavaScript and site images
├── blog/                       # Learning articles
├── content/quality-pages/      # Source fragments for the five resources
├── courses/                    # Course landing pages
├── dist/                       # Ready-to-upload website
├── resources/                  # Resource hub, tools and guides
├── scripts/                    # Reproducible site refresh scripts
├── ur/                         # Urdu pages
├── index.html                  # Homepage
├── sitemap.xml                 # 41 indexable URLs
└── package.json                # Local preview, checks and build commands
```

## Local preview and build

Node.js is the only runtime needed.

```bash
npm run check
npm run build
npm run dev
```

Open `http://localhost:3000` after starting the preview server.

`npm run build` first regenerates the existing SEO articles and location index, then applies the quality refresh. It also copies every updated public page and asset into `dist/`.

## Business configuration

`assets/js/config.js` contains the live website URL, contact email, WhatsApp number, Formspree endpoint and optional tracking fields. The Google Analytics and Google Ads values are empty until real account IDs are available. Do not enter guessed IDs.

Forms currently use:

- `https://formspree.io/f/mqerrdqj`
- `umarfarooq360official@gmail.com`
- WhatsApp number `923421046878`

Test the form destination from the live domain after deployment.

## Deployment

Upload the **contents** of `dist/` to the hosting public root. Do not upload the `dist` folder as a nested website directory.

After deployment:

1. Open the homepage, one course, one resource tool, the Urdu contact page and the 404 page.
2. Submit one test assessment and confirm the Formspree message arrives.
3. Submit `https://qurancrest.com/sitemap.xml` in Google Search Console.
4. Request indexing for the homepage and resource hub after the live crawl sees the changes.

## AdSense setup

The package does not contain a guessed `ads.txt` publisher ID or placeholder ad unit. Add `ads.txt` and the AdSense code only from the approved AdSense account. The privacy page already explains cookies, advertising technologies and consent choices in visitor-facing language.

Content quality, navigation and technical SEO have been strengthened, but AdSense approval remains Google's decision and cannot be guaranteed by code changes.
