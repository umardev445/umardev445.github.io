# QuranCrest Academy Website

A production-ready, mobile-first, high-converting static website for **QuranCrest Academy** — offering live one-to-one online Quran classes for kids, adults, and families across the United States.

---

## 📁 Directory Structure

```text
qurancrest/
├── index.html                       # Primary Homepage & Conversion Funnel
├── online-quran-classes-usa/
│   └── index.html                   # Dedicated USA Landing Page for Google Search Ads
├── courses/
│   └── index.html                   # Detailed Quran Courses & Curriculum Breakdown
├── pricing/
│   └── index.html                   # Transparent Monthly Fee Plans ($29 - $79/mo)
├── free-assessment/
│   └── index.html                   # Dedicated Free Assessment Booking Page
├── about/
│   └── index.html                   # About QuranCrest Academy & Educational Mission
├── contact/
│   └── index.html                   # Contact Page with WhatsApp & Email Support
├── thank-you/
│   └── index.html                   # Post-Submission Conversion Confirmation Page
├── privacy-policy/
│   └── index.html                   # Privacy Policy & COPPA Child Privacy Standards
├── terms/
│   └── index.html                   # Terms of Service & Attendance Guidelines
├── refund-policy/
│   └── index.html                   # Refund & Monthly Cancellation Policy
├── child-safety/
│   └── index.html                   # Child Safety & Parent Monitoring Standards
├── assets/
│   ├── css/
│   │   └── styles.css               # Master Mobile-First Stylesheet (Tailwind-compatible variables)
│   ├── js/
│   │   ├── config.js                # Central Editable Business Configuration
│   │   ├── main.js                  # Navigation, Drawer, Accordion & Dynamic WhatsApp links
│   │   └── form.js                  # Form validation, submission handling & GA4/Ads conversions
│   ├── images/
│   │   ├── logo.svg                 # QuranCrest SVG Brand Logo
│   │   ├── hero-illustration.svg    # Virtual Classroom & US Timezone SVG Illustration
│   │   └── learning-path.svg        # Step-by-Step Learning Pathway SVG Diagram
│   └── icons/
├── robots.txt                       # Search Engine Crawling Instructions
├── sitemap.xml                      # Complete XML Sitemap
├── manifest.webmanifest             # Web Application Manifest
├── favicon.svg                      # Brand Favicon Icon
├── 404.html                         # Custom 404 Error Page
├── _headers                         # Cloudflare Pages Security & Cache Headers
├── _redirects                       # Cloudflare Pages Clean Redirect Rules
├── server.mjs                       # Dependency-free Local Preview Server
└── README.md                        # Documentation & Deployment Instructions
```

---

## ⚙️ How to Update Business Settings

All customizable business variables are located in **`assets/js/config.js`**:

```javascript
window.QURANCREST_CONFIG = {
  brandName: "QuranCrest Academy",
  websiteUrl: "https://qurancrest.com",
  targetCountry: "United States",
  
  // Update with live WhatsApp phone number (with country code, no symbols)
  whatsappNumber: "+15550192834", 
  
  // Support Email
  contactEmail: "info@qurancrest.com",
  
  // Form Endpoint (e.g., Formspree URL)
  formEndpoint: "https://formspree.io/f/YOUR_FORM_ID", 
  contactFormEndpoint: "https://formspree.io/f/YOUR_CONTACT_FORM_ID",
  
  // Google Analytics & Google Ads Conversion IDs
  gaMeasurementId: "G-XXXXXXXXXX",
  googleAdsId: "AW-XXXXXXXXX",
  googleAdsConversionLabel: "XXXXXXXXXXXX"
};
```

When updated in `assets/js/config.js`, all WhatsApp buttons, form actions, and tracking tags automatically adapt across every page on the website.

---

## 🚀 Local Development

To run locally with Node.js:

```bash
# Start local server on port 3000
npm run dev
```

Open your browser at `http://localhost:3000`. You can also open any `.html` file directly in your browser.

---

## ☁️ Deploying to Cloudflare Pages & Custom Domain

1. Push this codebase to a **GitHub Repository**.
2. Log into your **Cloudflare Dashboard** and navigate to **Workers & Pages**.
3. Click **Create Application** &rarr; **Pages** &rarr; **Connect to Git**.
4. Select your `qurancrest` repository.
5. Set Build settings:
   - **Framework preset:** None (Static HTML)
   - **Build command:** *(leave blank)*
   - **Build output directory:** `.`
6. Click **Save and Deploy**.
7. Under **Custom Domains**, add `qurancrest.com`. Cloudflare will automatically provision SSL certificates.

---

## 🔒 Security & Performance Features

- **WCAG 2.2 AA Accessibility:** Includes skip links, keyboard-navigable FAQ accordions, high color contrast, visible focus outlines, and screen-reader status regions.
- **Fast System Fonts:** Utilizes standard system UI font stack (`Inter, system-ui, sans-serif`) with zero render-blocking external font requests.
- **Pure SVGs:** Vector logo, hero graphic, and pathway diagrams generated locally in clean code.
- **Premium Mobile UI:** Responsive hero, touch-friendly navigation, refined cards, single mobile CTA bar, and a circular floating WhatsApp control.
- **Lightweight Motion:** CSS and IntersectionObserver-based reveals with full `prefers-reduced-motion` support.

> Before publishing, replace every `REPLACE_WITH_...` value in `assets/js/config.js`. Forms intentionally do not report a successful lead unless a real endpoint or WhatsApp number is configured.
