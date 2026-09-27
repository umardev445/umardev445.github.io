import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const isoDate = '2026-09-27';
const displayDate = '27 September 2026';
const email = 'umarfarooq360official@gmail.com';
const phone = '+923421046878';
const whatsapp = 'https://wa.me/923421046878?text=Assalamu%20Alaikum!%20I%20would%20like%20to%20book%20a%20free%20Quran%20learning%20assessment.';
const heroImage = 'https://qurancrest.com/images/qurancrest-hero-learning.webp';

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  '@id': 'https://qurancrest.com/#academy',
  name: 'QuranCrest Academy',
  url: 'https://qurancrest.com',
  logo: 'https://qurancrest.com/logo.svg',
  description: 'A bilingual online Quran academy offering private classes for children and adults worldwide.',
  email,
  telephone: phone,
  areaServed: 'Worldwide',
  availableLanguage: ['English', 'Urdu']
};

const resourcePages = [
  {
    slug: 'quran-learning-level-check',
    fragment: 'quran-learning-level-check.html',
    eyebrow: 'Free browser-based learning tool',
    h1: 'Quran Learning Level Check',
    title: 'Quran Learning Level Check | Find the Right Starting Course',
    description: 'Use this private Quran learning level checker to identify a likely starting point in Qaida, reading, Tajweed or Hifz before a live assessment.',
    type: 'WebApplication'
  },
  {
    slug: 'weekly-quran-practice-planner',
    fragment: 'weekly-quran-practice-planner.html',
    eyebrow: 'Free printable planning tool',
    h1: 'Weekly Quran Practice Planner',
    title: 'Weekly Quran Practice Planner | Free Printable Tool',
    description: 'Build a realistic weekly Quran practice routine for Qaida, reading, Tajweed or Hifz with this free browser-based and printable planner.',
    type: 'WebApplication'
  },
  {
    slug: 'first-online-quran-lesson-checklist',
    fragment: 'first-online-quran-lesson-checklist.html',
    eyebrow: 'Practical setup guide for families',
    h1: 'First Online Quran Lesson Checklist',
    title: 'First Online Quran Lesson Checklist | Parents & Adults',
    description: 'Prepare the device, learning material, study space, safety details and learner information with this printable first Quran lesson checklist.',
    type: 'WebPage'
  },
  {
    slug: 'common-quran-reading-mistakes',
    fragment: 'common-quran-reading-mistakes.html',
    eyebrow: 'Beginner correction guide',
    h1: 'Common Quran Reading Mistakes',
    title: 'Common Quran Reading Mistakes | Beginner Correction Guide',
    description: 'Understand eight common Quran reading mistakes, practical correction steps, error tracking and questions to discuss with a live tutor.',
    type: 'Article'
  },
  {
    slug: 'hifz-revision-planner',
    fragment: 'hifz-revision-planner.html',
    eyebrow: 'Free memorization planning tool',
    h1: 'Hifz Revision Planner',
    title: 'Hifz Revision Planner | Sabaq, Sabaqi & Manzil Tool',
    description: 'Create a balanced Hifz revision framework for Sabaq, Sabaqi and Manzil, then adjust the actual portions with a Quran teacher.',
    type: 'WebApplication'
  }
];

function read(relative) {
  return fs.readFileSync(path.join(root, relative), 'utf8');
}

function write(relative, content) {
  const target = path.join(root, relative);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, content);
}

function englishHeader() {
  return `<a class="skip-link" href="#main-content">Skip to main content</a><header class="site-header" dir="ltr"><div class="announcement"><div class="shell announcement-inner"><span>One-to-one learning · Free assessment · No card required</span><a href="mailto:${email}">${email}</a></div></div><div class="shell nav-row"><a href="/" class="brand" aria-label="QuranCrest Academy home"><img src="/logo.svg" alt="QuranCrest Academy" width="238" height="54"></a><nav class="desktop-nav" aria-label="Primary navigation"><a href="/courses/">Courses</a><a href="/tutors/">Tutors</a><a href="/pricing/">Pricing</a><a href="/locations/">Locations</a><a href="/resources/">Resources</a><a href="/blog/">Blog</a><a href="/about/">About</a></nav><div class="nav-actions"><a href="/ur/" class="language-link" hreflang="ur-PK">اردو</a><a href="/free-assessment/" class="button nav-cta">Free assessment</a><button class="menu-trigger" aria-label="Open menu" aria-expanded="false" type="button">☰</button></div></div></header>`;
}

function urduHeader() {
  return `<a class="skip-link" href="#main-content">اصل مواد پر جائیں</a><header class="site-header" dir="rtl"><div class="announcement"><div class="shell announcement-inner"><span>انفرادی آن لائن تعلیم · مفت ابتدائی جائزہ · کارڈ کی ضرورت نہیں</span><a dir="ltr" href="mailto:${email}">${email}</a></div></div><div class="shell nav-row"><a href="/ur/" class="brand" aria-label="قرآن کرسٹ اکیڈمی اردو ہوم"><img src="/logo.svg" alt="قرآن کرسٹ اکیڈمی" width="238" height="54"></a><nav class="desktop-nav" aria-label="بنیادی رہنمائی"><a href="/ur/courses/">کورسز</a><a href="/tutors/">اساتذہ</a><a href="/pricing/">فیس</a><a href="/ur/resources/">رہنمائی</a><a href="/child-safety/">بچوں کا تحفظ</a><a href="/ur/contact/">رابطہ</a></nav><div class="nav-actions"><a href="/" class="language-link" hreflang="en">English</a><a href="/ur/contact/" class="button nav-cta">مفت جائزہ</a><button class="menu-trigger" aria-label="مینو کھولیں" aria-expanded="false" type="button">☰</button></div></div></header>`;
}

function englishFooter() {
  return `<footer class="site-footer"><div class="shell footer-grid"><div class="footer-brand"><a href="/"><img src="/logo-light.svg" alt="QuranCrest Academy" width="238" height="54"></a><p>Private online Quran learning for children and adults, with English and Urdu support for families worldwide.</p><div class="footer-contact"><a href="mailto:${email}">${email}</a><a href="${whatsapp}" target="_blank" rel="noreferrer">WhatsApp admissions</a></div></div><div><h2>Academy</h2><a href="/about/">About and standards</a><a href="/tutors/">Teaching team</a><a href="/pricing/">Monthly plans</a><a href="/locations/">Learning locations</a><a href="/free-assessment/">Free assessment</a><a href="/contact/">Contact</a></div><div><h2>Courses</h2><a href="/courses/noorani-qaida/">Noorani Qaida</a><a href="/courses/quran-reading/">Quran reading</a><a href="/courses/tajweed/">Tajweed</a><a href="/courses/quran-memorization/">Quran memorization</a><a href="/courses/quran-classes-for-kids/">Classes for kids</a></div><div><h2>Free resources</h2><a href="/resources/quran-learning-level-check/">Level checker</a><a href="/resources/weekly-quran-practice-planner/">Weekly practice planner</a><a href="/resources/first-online-quran-lesson-checklist/">First lesson checklist</a><a href="/resources/common-quran-reading-mistakes/">Reading mistakes guide</a><a href="/resources/hifz-revision-planner/">Hifz revision planner</a><a href="/blog/">Learning blog</a></div></div><div class="shell footer-bottom"><p>© 2026 QuranCrest Academy. All rights reserved.</p><div><a href="/privacy-policy/">Privacy & cookies</a><a href="/terms/">Terms</a><a href="/refund-policy/">Refunds</a></div></div></footer>`;
}

function urduFooter() {
  return `<footer class="site-footer" dir="rtl"><div class="shell footer-grid"><div class="footer-brand"><a href="/ur/"><img src="/logo-light.svg" alt="قرآن کرسٹ اکیڈمی" width="238" height="54"></a><p>بچوں اور بڑوں کے لیے انفرادی آن لائن قرآن تعلیم، اردو اور انگریزی معاونت کے ساتھ۔</p><div class="footer-contact"><a dir="ltr" href="mailto:${email}">${email}</a><a href="${whatsapp}" target="_blank" rel="noreferrer">واٹس ایپ داخلہ رابطہ</a></div></div><div><h2>اکیڈمی</h2><a href="/about/">تعارف اور معیار</a><a href="/tutors/">اساتذہ</a><a href="/pricing/">ماہانہ فیس</a><a href="/child-safety/">بچوں کا تحفظ</a><a href="/ur/contact/">رابطہ</a></div><div><h2>کورسز</h2><a href="/courses/noorani-qaida/">نورانی قاعدہ</a><a href="/courses/quran-reading/">قرآن ناظرہ</a><a href="/courses/tajweed/">تجوید</a><a href="/courses/quran-memorization/">حفظ قرآن</a><a href="/courses/quran-classes-for-kids/">بچوں کی کلاسز</a></div><div><h2>مفت رہنمائی</h2><a href="/ur/resources/">اردو وسائل</a><a href="/resources/quran-learning-level-check/">لیول چیکر</a><a href="/resources/weekly-quran-practice-planner/">ہفتہ وار پلانر</a><a href="/resources/first-online-quran-lesson-checklist/">پہلی کلاس چیک لسٹ</a><a href="/resources/hifz-revision-planner/">حفظ ریویژن پلانر</a><a href="/resources/masail/">تعلیمی سوالات</a></div></div><div class="shell footer-bottom"><p>© 2026 قرآن کرسٹ اکیڈمی۔ جملہ حقوق محفوظ ہیں۔</p><div><a href="/privacy-policy/">رازداری</a><a href="/terms/">شرائط</a><a href="/refund-policy/">رقم واپسی</a></div></div></footer>`;
}

function schemaTags(items) {
  return [orgSchema, ...items].map(item => `<script type="application/ld+json">${JSON.stringify(item)}</script>`).join('');
}

function head({ title, description, canonical, lang = 'en', type = 'website', schemas = [], alternate = '' }) {
  const locale = lang === 'ur-PK' ? 'ur_PK' : 'en_US';
  return `<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${title}</title><meta name="description" content="${description}"><meta name="author" content="QuranCrest Academy"><meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"><link rel="canonical" href="${canonical}">${alternate}<meta property="og:title" content="${title}"><meta property="og:description" content="${description}"><meta property="og:url" content="${canonical}"><meta property="og:type" content="${type === 'article' ? 'article' : 'website'}"><meta property="og:site_name" content="QuranCrest Academy"><meta property="og:locale" content="${locale}"><meta property="og:image" content="${heroImage}"><meta property="og:image:width" content="1584"><meta property="og:image:height" content="990"><meta property="og:image:alt" content="QuranCrest online Quran learning"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${title}"><meta name="twitter:description" content="${description}"><meta name="twitter:image" content="${heroImage}"><link rel="icon" href="/favicon.svg"><link rel="manifest" href="/manifest.webmanifest"><meta name="theme-color" content="#0b4d3b"><link rel="stylesheet" href="/assets/index-DUdv4bwh.css"><link rel="stylesheet" href="/assets/seo-refresh.css"><link rel="stylesheet" href="/assets/quality-tools.css">${schemaTags(schemas)}`;
}

function pageHero(eyebrow, title, description) {
  return `<section class="page-hero page-hero-compact"><div class="shell page-hero-inner"><p class="eyebrow light">${eyebrow}</p><h1>${title}</h1><p class="page-hero-copy">${description}</p></div></section>`;
}

function breadcrumbs(items, urdu = false) {
  return `<nav class="shell breadcrumbs" aria-label="${urdu ? 'صفحہ کی ترتیب' : 'Breadcrumb'}"><ol>${items.map((item, index) => `<li>${index < items.length - 1 ? `<a href="${item.href}">${item.name}</a><span aria-hidden="true">›</span>` : `<span aria-current="page">${item.name}</span>`}</li>`).join('')}</ol></nav>`;
}

function englishCta() {
  return `<section class="section section-deep"><div class="shell cta-panel"><div><p class="eyebrow light">A personal next step</p><h2>Confirm the starting level with a live assessment</h2><p>Share the learner's age, current reading ability, time zone and goal. QuranCrest will suggest a practical course after listening to the learner.</p></div><div class="hero-actions"><a class="button button-ivory" href="/free-assessment/">Book free assessment</a><a class="button button-ghost-light" href="${whatsapp}" target="_blank" rel="noreferrer">Ask on WhatsApp</a></div></div></section>`;
}

function standardLayout({ title, description, canonical, body, type = 'website', schemas = [], tool = false }) {
  return `<!doctype html><html lang="en"><head>${head({ title, description, canonical, type, schemas })}</head><body>${englishHeader()}<main id="main-content">${body}</main>${englishFooter()}<script src="/assets/static-site.js" defer></script>${tool ? '<script src="/assets/quality-tools.js" defer></script>' : ''}</body></html>`;
}

function urduLayout({ title, description, canonical, body, alternate }) {
  const webPage = { '@context': 'https://schema.org', '@type': 'WebPage', name: title, description, url: canonical, inLanguage: 'ur-PK' };
  return `<!doctype html><html lang="ur-PK" dir="rtl"><head>${head({ title, description, canonical, lang: 'ur-PK', schemas: [webPage], alternate })}</head><body>${urduHeader()}<main id="main-content" class="urdu-page">${body}</main>${urduFooter()}<script src="/assets/static-site.js" defer></script></body></html>`;
}

function faqSchema(faq) {
  return { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map(([question, answer]) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })) };
}

function generateResourcePages() {
  for (const page of resourcePages) {
    const canonical = `https://qurancrest.com/resources/${page.slug}/`;
    const fragment = read(`content/quality-pages/${page.fragment}`);
    const breadcrumbsHtml = breadcrumbs([{ name: 'Home', href: '/' }, { name: 'Resources', href: '/resources/' }, { name: page.h1 }]);
    const body = `${pageHero(page.eyebrow, page.h1, page.description)}${breadcrumbsHtml}${fragment}${englishCta()}`;
    const pageSchema = page.type === 'Article'
      ? { '@context': 'https://schema.org', '@type': 'Article', headline: page.h1, description: page.description, datePublished: isoDate, dateModified: isoDate, mainEntityOfPage: canonical, author: { '@type': 'Organization', name: 'QuranCrest Academy' }, publisher: { '@id': 'https://qurancrest.com/#academy' } }
      : { '@context': 'https://schema.org', '@type': page.type, name: page.h1, description: page.description, url: canonical, applicationCategory: page.type === 'WebApplication' ? 'EducationalApplication' : undefined, browserRequirements: page.type === 'WebApplication' ? 'Requires JavaScript for interactive results' : undefined };
    Object.keys(pageSchema).forEach(key => pageSchema[key] === undefined && delete pageSchema[key]);
    const crumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ name: 'Home', item: 'https://qurancrest.com/' }, { name: 'Resources', item: 'https://qurancrest.com/resources/' }, { name: page.h1, item: canonical }].map((item, index) => ({ '@type': 'ListItem', position: index + 1, ...item })) };
    write(`resources/${page.slug}/index.html`, standardLayout({ title: page.title, description: page.description, canonical, body, type: page.type === 'Article' ? 'article' : 'website', schemas: [pageSchema, crumbSchema], tool: page.type === 'WebApplication' || page.slug.includes('checklist') }));
  }
}

function generateResourceHub() {
  const cards = resourcePages.map(page => `<article class="guide-card"><p class="eyebrow">${page.type === 'WebApplication' ? 'Interactive tool' : 'Practical guide'}</p><h3><a href="/resources/${page.slug}/">${page.h1}</a></h3><p>${page.description}</p><a class="text-link" href="/resources/${page.slug}/">Open resource →</a></article>`).join('');
  const body = `${pageHero('Free Quran learning resources', 'Practical Quran Learning Tools and Guides', 'Use private browser-based planners, preparation checklists and detailed guides to make lessons and home practice more focused.')} ${breadcrumbs([{ name: 'Home', href: '/' }, { name: 'Resources' }])}<section class="section section-paper"><div class="shell"><div class="section-heading"><p class="eyebrow">Start with a useful action</p><h2>Five free resources for learners and parents</h2><p>Each resource answers a distinct learning need. Interactive answers remain in the browser unless you separately submit an assessment or contact form.</p></div><div class="guide-grid">${cards}</div></div></section><section class="section section-mist"><div class="shell article-shell"><div class="article-body"><h2>How to use these resources</h2><ol><li>Check the likely learning stage if the starting point is unclear.</li><li>Prepare the device and study space before the first lesson.</li><li>Build a repeatable practice routine around the teacher's latest correction.</li><li>Use the reading-mistakes guide to describe recurring difficulty clearly.</li><li>For Hifz, balance new work with recent and older revision under teacher supervision.</li></ol><h2>More learning material</h2><div class="resource-strip"><h3>Articles and educational questions</h3><p>Read the Quran learning blog for detailed course and parent guidance. The Masail page gives general educational answers and clearly identifies when a qualified scholar should be consulted.</p><div class="resource-links"><a href="/blog/">Browse the learning blog</a><a href="/resources/masail/">Read learning questions</a><a href="/ur/resources/">اردو رہنمائی</a></div></div></div></div></section>${englishCta()}`;
  const listSchema = { '@context': 'https://schema.org', '@type': 'ItemList', name: 'QuranCrest free learning resources', itemListElement: resourcePages.map((page, index) => ({ '@type': 'ListItem', position: index + 1, name: page.h1, url: `https://qurancrest.com/resources/${page.slug}/` })) };
  write('resources/index.html', standardLayout({ title: 'Free Quran Learning Tools & Guides | QuranCrest', description: 'Use five free Quran learning tools and guides for level checking, weekly practice, first-lesson preparation, reading correction and Hifz revision.', canonical: 'https://qurancrest.com/resources/', body, schemas: [listSchema] }));
}

function generateUrduPages() {
  const homeBody = `${pageHero('اردو میں واضح رہنمائی', 'گھر بیٹھے انفرادی آن لائن قرآن کلاسز', 'بچوں اور بڑوں کے لیے نورانی قاعدہ، ناظرہ، تجوید، حفظ اور اسلامیات کی براہ راست انفرادی کلاسز۔ آغاز سے پہلے طالب علم کی موجودہ سطح سنی جاتی ہے۔')}<section class="section section-paper"><div class="shell article-shell"><div class="answer-box"><strong>مختصر تعارف</strong><p>قرآن کرسٹ اکیڈمی میں ہر باقاعدہ کلاس ایک طالب علم اور ایک استاد کے درمیان ہوتی ہے۔ مفت ابتدائی جائزے میں عمر، موجودہ پڑھنے کی صلاحیت، مقصد، شہر، ٹائم زون اور استاد کی ترجیح پوچھی جاتی ہے۔ کارڈ کی ضرورت نہیں ہوتی۔</p></div><div class="article-body"><h2>تعلیم شروع کرنے کا طریقہ</h2><ol><li>رابطہ فارم یا واٹس ایپ پر طالب علم کی بنیادی معلومات بھیجیں۔</li><li>مختصر براہ راست جائزے میں حروف، جوڑ، روانی، تلفظ یا حفظ کی موجودہ حالت دیکھی جائے گی۔</li><li>مناسب کورس اور ممکنہ اوقات پر بات ہوگی؛ باقاعدہ وقت موجودہ دستیابی دیکھ کر لکھ کر طے کیا جائے گا۔</li><li>فیس دینے سے پہلے پلان، کرنسی، کلاس کی مدت، ہفتہ وار تعداد اور منسوخی کی شرائط کی تحریری تصدیق لیں۔</li></ol><h2>کن طالب علموں کے لیے؟</h2><div class="trust-facts"><div class="trust-fact"><strong>بالکل نئے طالب علم</strong><span>عربی حروف اور نورانی قاعدے سے مرحلہ وار آغاز۔</span></div><div class="trust-fact"><strong>قرآن پڑھنے والے</strong><span>روانی، عام غلطیوں، تلفظ اور متعلقہ تجویدی اصولوں پر توجہ۔</span></div><div class="trust-fact"><strong>حفظ کے طالب علم</strong><span>نئے سبق کے ساتھ سبقی اور منزل کے توازن کی نگرانی۔</span></div></div><h2>بچوں کے لیے والدین کی شمولیت</h2><p>چھوٹے بچے کی کلاس مشترکہ یا قابل نگرانی جگہ میں رکھیں۔ والدین کو استاد کا نام، وقت، منظور شدہ رابطہ ذریعہ اور ہفتہ وار مشق معلوم ہونی چاہیے۔ ادائیگی کی معلومات، شناختی دستاویز یا غیر متعلقہ ذاتی معلومات کلاس میں شیئر نہ کریں۔ مکمل تفصیل <a href="/child-safety/">بچوں کے تحفظ کے صفحے</a> پر موجود ہے۔</p><h2>آج ہی مفید تیاری کریں</h2><p>اردو وسائل کے صفحے پر کورس منتخب کرنے، پہلی کلاس تیار کرنے، ہفتہ وار مشق بنانے اور حفظ کی دہرائی منظم کرنے کی رہنمائی موجود ہے۔ انگریزی انٹرایکٹو ٹولز کے ساتھ ہر لنک کی اردو وضاحت دی گئی ہے۔</p><div class="resource-strip"><h3>اگلا قدم منتخب کریں</h3><div class="resource-links"><a href="/ur/courses/">اردو میں کورسز دیکھیں</a><a href="/ur/resources/">مفت وسائل استعمال کریں</a><a href="/ur/contact/">مفت جائزہ بک کریں</a></div></div></div></div></section>`;
  write('ur/index.html', urduLayout({ title: 'آن لائن قرآن کلاسز اردو | قرآن کرسٹ اکیڈمی', description: 'بچوں اور بڑوں کے لیے انفرادی آن لائن قرآن کلاسز، نورانی قاعدہ، ناظرہ، تجوید، حفظ اور اسلامیات، اردو معاونت اور مفت ابتدائی جائزے کے ساتھ۔', canonical: 'https://qurancrest.com/ur/', alternate: '<link rel="alternate" hreflang="en" href="https://qurancrest.com/"><link rel="alternate" hreflang="ur-PK" href="https://qurancrest.com/ur/"><link rel="alternate" hreflang="x-default" href="https://qurancrest.com/">', body: homeBody }));

  const coursesBody = `${pageHero('سطح کے مطابق راستہ', 'آن لائن قرآن کورسز', 'ہر کورس کی بنیاد طالب علم کی اصل صلاحیت اور مقصد ہے۔ صرف عمر یا پہلے پڑھے ہوئے صفحات کی تعداد سے لیول مقرر نہیں کیا جاتا۔')}${breadcrumbs([{ name: 'اردو ہوم', href: '/ur/' }, { name: 'کورسز' }], true)}<section class="section section-paper"><div class="shell article-shell"><div class="article-body"><h2>اپنے لیے مناسب کورس سمجھیں</h2><div class="guide-grid"><article class="guide-card"><h3><a href="/courses/noorani-qaida/">نورانی قاعدہ</a></h3><p>حروف، حرکات، جوڑ، سکون اور تشدید کی بنیاد بنانے والے نئے طالب علموں کے لیے۔</p></article><article class="guide-card"><h3><a href="/courses/quran-reading/">قرآن ناظرہ</a></h3><p>قرآن سے براہ راست پڑھنے، سطر پر نظر قائم رکھنے، روانی اور عام غلطیوں کی اصلاح کے لیے۔</p></article><article class="guide-card"><h3><a href="/courses/tajweed/">تجوید</a></h3><p>جو طالب علم پڑھ سکتے ہیں مگر مخارج اور متعلقہ قواعد کو تلاوت میں درست طور پر لگانا چاہتے ہیں۔</p></article><article class="guide-card"><h3><a href="/courses/quran-memorization/">حفظ قرآن</a></h3><p>استاد کی نگرانی میں نیا سبق، حالیہ دہرائی اور پرانی منزل کو متوازن رکھنے کے لیے۔</p></article><article class="guide-card"><h3><a href="/courses/quran-classes-for-kids/">بچوں کی کلاسز</a></h3><p>عمر، توجہ، موجودہ سطح اور خاندانی روٹین کے مطابق مختصر واضح اہداف کے ساتھ۔</p></article><article class="guide-card"><h3><a href="/courses/quran-classes-for-adults/">بڑوں کی کلاسز</a></h3><p>بالکل نئے، وقفے کے بعد واپس آنے والے یا مخصوص تلاوتی مسئلہ درست کرنے والے بالغ افراد کے لیے۔</p></article></div><h2>ابتدائی جائزے میں کیا دیکھا جاتا ہے؟</h2><ul class="check-list"><li>حروف اور آوازوں کی پہچان</li><li>حرکات، جوڑ اور سطر پر نظر رکھنے کی صلاحیت</li><li>غیر مانوس عبارت پڑھنے میں مدد کی مقدار</li><li>بار بار آنے والی تلفظ یا وقف کی مشکل</li><li>حفظ کی صورت میں نئے اور پرانے اسباق کی مضبوطی</li><li>زبان، ٹائم زون، استاد کی ترجیح اور قابل عمل ہفتہ وار وقت</li></ul><h2>کورس کی تصدیق سے پہلے پوچھیں</h2><p>کلاس کی مدت، ہفتے میں تعداد، وقت، استعمال ہونے والا مواد، مشق کا طریقہ، والدین کی اطلاع، فیس کی کرنسی، چھٹی، میک اپ اور منسوخی کی شرائط تحریری شکل میں معلوم کریں۔</p><div class="resource-strip"><h3>لیول کا ابتدائی اندازہ</h3><p>انگریزی میں موجود مفت لیول چیکر صرف ابتدائی رہنمائی دیتا ہے؛ حتمی کورس استاد کے براہ راست سننے کے بعد طے ہوگا۔</p><div class="resource-links"><a href="/resources/quran-learning-level-check/">لیول چیکر کھولیں</a><a href="/ur/contact/">براہ راست مفت جائزہ بک کریں</a></div></div></div></div></section>`;
  write('ur/courses/index.html', urduLayout({ title: 'آن لائن قرآن کورسز اردو | بچوں اور بڑوں کے لیے', description: 'نورانی قاعدہ، قرآن ناظرہ، تجوید، حفظ اور بچوں و بڑوں کے آن لائن قرآن کورسز کی واضح اردو رہنمائی اور مفت لیول جائزہ۔', canonical: 'https://qurancrest.com/ur/courses/', alternate: '<link rel="alternate" hreflang="en" href="https://qurancrest.com/courses/"><link rel="alternate" hreflang="ur-PK" href="https://qurancrest.com/ur/courses/">', body: coursesBody }));

  const resourcesBody = `${pageHero('گھر کی مشق اور کلاس کی تیاری', 'اردو قرآن لرننگ رہنمائی', 'یہ صفحہ والدین اور بالغ طالب علموں کو موجودہ مفت ٹولز اور عملی گائیڈز درست مقصد کے لیے استعمال کرنے میں مدد دیتا ہے۔')}${breadcrumbs([{ name: 'اردو ہوم', href: '/ur/' }, { name: 'وسائل' }], true)}<section class="section section-paper"><div class="shell article-shell"><div class="article-body"><h2>پانچ مفت عملی وسائل</h2><div class="guide-grid"><article class="guide-card"><h3><a href="/resources/quran-learning-level-check/">قرآن لرننگ لیول چیکر</a></h3><p>چند سوالات کے ذریعے اندازہ کریں کہ آغاز حروف، قاعدہ، ناظرہ، تجوید یا حفظ کی تیاری سے ہونا چاہیے۔ ٹول انگریزی میں ہے اور جواب براؤزر میں رہتا ہے۔</p></article><article class="guide-card"><h3><a href="/resources/weekly-quran-practice-planner/">ہفتہ وار مشق پلانر</a></h3><p>دستیاب دن اور منٹ منتخب کرکے مختصر روٹین بنائیں، پھر عام ہدف کی جگہ استاد کا دیا ہوا اصل سبق لکھیں۔</p></article><article class="guide-card"><h3><a href="/resources/first-online-quran-lesson-checklist/">پہلی آن لائن کلاس چیک لسٹ</a></h3><p>ڈیوائس، آواز، انٹرنیٹ، کتاب، پرسکون جگہ، بچے کی نگرانی اور استاد کو دی جانے والی ضروری معلومات پہلے سے تیار کریں۔</p></article><article class="guide-card"><h3><a href="/resources/common-quran-reading-mistakes/">عام پڑھنے کی غلطیاں</a></h3><p>ملتے جلتے حروف، حرکات، سکون، تشدید، جوڑ، سطر کھونے اور تیز پڑھنے جیسی مشکلات کو واضح الفاظ میں سمجھیں۔</p></article><article class="guide-card"><h3><a href="/resources/hifz-revision-planner/">حفظ ریویژن پلانر</a></h3><p>دستیاب وقت کو سبق، سبقی اور منزل میں تقسیم کرنے کا فریم ورک بنائیں؛ اصل مقدار استاد سن کر مقرر کرے گا۔</p></article></div><h2>روزانہ مشق کے چار اصول</h2><ol><li>استاد کی آخری اصلاح سے آغاز کریں۔</li><li>کم مقدار کو درست پڑھنا، زیادہ مقدار میں ایک غلطی دہرانے سے بہتر ہے۔</li><li>بار بار آنے والی ایک یا دو مشکلات نوٹ کریں اور اگلی کلاس میں پوچھیں۔</li><li>ایک دن رہ جائے تو اگلے دن غیر ضروری طور پر دوگنا بوجھ نہ ڈالیں؛ معمول پر واپس آئیں۔</li></ol><h2>دینی مسئلے اور تعلیمی سوال میں فرق</h2><p>کورس، مشق، کلاس کی تیاری اور مطالعے کی روٹین تعلیمی سوالات ہیں۔ کسی ذاتی شرعی حکم یا پیچیدہ فقہی مسئلے کے لیے مستند مقامی عالم یا مفتی سے مکمل صورت حال بیان کرکے رہنمائی لیں۔</p><div class="resource-strip"><h3>مزید پڑھیں</h3><div class="resource-links"><a href="/resources/masail/">تعلیمی سوالات</a><a href="/blog/">تفصیلی انگریزی مضامین</a><a href="/ur/courses/">کورسز کی اردو وضاحت</a></div></div></div></div></section>`;
  write('ur/resources/index.html', urduLayout({ title: 'اردو قرآن لرننگ وسائل | مفت پلانر اور گائیڈز', description: 'قرآن لیول، ہفتہ وار مشق، پہلی کلاس، عام پڑھنے کی غلطیوں اور حفظ کی دہرائی کے مفت ٹولز کی اردو وضاحت۔', canonical: 'https://qurancrest.com/ur/resources/', alternate: '<link rel="alternate" hreflang="en" href="https://qurancrest.com/resources/"><link rel="alternate" hreflang="ur-PK" href="https://qurancrest.com/ur/resources/">', body: resourcesBody }));

  const contactBody = `${pageHero('داخلہ اور ابتدائی رہنمائی', 'مفت قرآن لرننگ جائزہ بک کریں', 'طالب علم کی موجودہ سطح، شہر، مقامی وقت اور مقصد بتائیں۔ پیغام موصول ہونے کے بعد دستیابی دیکھ کر اگلا قدم بتایا جائے گا۔')}${breadcrumbs([{ name: 'اردو ہوم', href: '/ur/' }, { name: 'رابطہ' }], true)}<section class="section section-paper"><div class="shell article-shell"><div class="answer-box"><strong>فارم بھیجنے سے پہلے</strong><p>طالب علم کی عمر، موجودہ کتاب یا پڑھنے کی حالت، مطلوبہ کورس، شہر یا ٹائم زون، مناسب دن اور استاد کی ترجیح لکھیں۔ کارڈ کی معلومات یا شناختی دستاویز نہ بھیجیں۔</p></div><form class="tool-panel" action="https://formspree.io/f/mqerrdqj" method="post"><input type="hidden" name="_subject" value="QuranCrest Urdu assessment request"><input type="hidden" name="_next" value="https://qurancrest.com/thank-you/"><h2>رابطہ فارم</h2><div class="tool-grid"><div class="tool-field"><label for="ur-name">آپ کا نام</label><input id="ur-name" name="name" autocomplete="name" required></div><div class="tool-field"><label for="ur-email">ای میل</label><input id="ur-email" name="email" type="email" autocomplete="email" dir="ltr" required></div><div class="tool-field"><label for="ur-age">طالب علم کی عمر</label><input id="ur-age" name="learner_age" inputmode="numeric"></div><div class="tool-field"><label for="ur-city">شہر، ملک اور ٹائم زون</label><input id="ur-city" name="location_timezone" required></div><div class="tool-field"><label for="ur-level">موجودہ سطح</label><select id="ur-level" name="current_level"><option>بالکل نیا آغاز</option><option>حروف یا نورانی قاعدہ</option><option>قرآن ناظرہ</option><option>تجوید کی اصلاح</option><option>حفظ اور دہرائی</option><option>یقین نہیں</option></select></div><div class="tool-field"><label for="ur-tutor">استاد کی ترجیح</label><select id="ur-tutor" name="tutor_preference"><option>کوئی خاص ترجیح نہیں</option><option>خاتون استاد</option><option>مرد استاد</option></select></div></div><div class="tool-field"><label for="ur-message">مقصد، مناسب دن اور مقامی وقت</label><textarea id="ur-message" name="message" rows="6" required></textarea></div><div class="tool-actions"><button class="button button-primary" type="submit">درخواست بھیجیں</button><a class="button button-outline" href="${whatsapp}" target="_blank" rel="noreferrer">واٹس ایپ پر رابطہ کریں</a></div></form><div class="article-body"><h2>جواب میں کن باتوں کی تصدیق کریں؟</h2><ul class="check-list"><li>کون سا کورس اور ابتدائی سبق مناسب ہے</li><li>استاد کی دستیابی اور طے شدہ ٹائم زون</li><li>کلاس کی مدت اور ہفتہ وار تعداد</li><li>پلان کی کرنسی اور قابل ادائیگی رقم</li><li>چھٹی، میک اپ، منسوخی اور رقم واپسی کی شرائط</li><li>والدین اور استاد کے لیے منظور شدہ رابطہ طریقہ</li></ul><p>آپ براہ راست <a dir="ltr" href="mailto:${email}">${email}</a> پر بھی ای میل کر سکتے ہیں۔ حساس معلومات صرف اس وقت دیں جب واقعی ضروری ہوں اور منظور شدہ طریقہ واضح ہو۔</p></div></div></section>`;
  write('ur/contact/index.html', urduLayout({ title: 'اردو رابطہ اور مفت قرآن جائزہ | QuranCrest', description: 'اردو میں مفت آن لائن قرآن لرننگ جائزہ بک کریں اور طالب علم کی سطح، ٹائم زون، کورس اور استاد کی ترجیح بتائیں۔', canonical: 'https://qurancrest.com/ur/contact/', alternate: '<link rel="alternate" hreflang="en" href="https://qurancrest.com/contact/"><link rel="alternate" hreflang="ur-PK" href="https://qurancrest.com/ur/contact/">', body: contactBody }));
}

function generateCountryPages() {
  const usFaq = [
    ['Which US time zone should I send?', 'Send the learner’s city, state and current local time. Eastern, Central, Mountain and Pacific labels alone may still need clarification around daylight-saving changes.'],
    ['Can a child study after school?', 'You can request an after-school window in the child’s local time. A recurring slot is confirmed only after current tutor availability is checked.'],
    ['Can adults request an evening or weekend lesson?', 'Yes, adults can request suitable local-time windows. Availability depends on the course, tutor preference and current timetable.'],
    ['Are prices automatically charged in US dollars?', 'Do not assume the currency from this page. Confirm the currency, exact amount and payment method in writing before paying.'],
    ['Can we request a female Quran teacher?', 'Families may request a female tutor. The match is confirmed after the course, local time and current availability are reviewed.']
  ];
  const usDescription = 'Private online Quran classes for learners in the USA, with city-based time-zone planning, child and adult pathways, tutor requests and a free assessment.';
  const usBody = `${pageHero('Local-time planning across the United States', 'Online Quran Classes in the USA', usDescription)}${breadcrumbs([{ name: 'Home', href: '/' }, { name: 'Locations', href: '/locations/' }, { name: 'United States' }])}<section class="section section-paper"><div class="shell article-shell"><div class="answer-box"><strong>For US families</strong><p>QuranCrest offers live one-to-one classes online. Send the learner's city, state, current local time, level and preferred lesson window so admissions can check the right timetable rather than guessing from the country alone.</p></div><div class="article-body"><h2>Plan lessons around the learner's US routine</h2><p>A workable schedule begins with the family's real week. Parents can list school dismissal, sports, bedtime and the days an adult can help a younger child connect. Adult learners can list work shifts, commute patterns and the quietest available windows. This makes the request more useful than simply asking for “evening classes.”</p><p>The United States spans Eastern, Central, Mountain and Pacific time, with additional zones outside the contiguous states. Daylight-saving changes can also alter the difference between the learner and tutor. Always write the city and state, and confirm the displayed local time when the recurring slot is agreed.</p><h2>Choose a pathway by skill, not grade level</h2><h3>A child beginning with Arabic letters</h3><p>The teacher can listen for letter recognition, dots, short vowels and the ability to join simple patterns. <a href="/courses/noorani-qaida/">Noorani Qaida</a> may provide the first structured path. A parent should know the practice target and keep the class in an observable space.</p><h3>A learner who already opens the Mushaf</h3><p>Reading a familiar surah from memory does not always show independent reading. The assessment can include a short unfamiliar passage to check tracking, joining, hesitation and repeated pronunciation issues. <a href="/courses/quran-reading/">Guided reading</a> or <a href="/courses/tajweed/">Tajweed</a> can then be discussed.</p><h3>An adult returning after a break</h3><p>Adults do not need to hide a weak foundation. A private lesson allows the tutor to identify whether selected Qaida revision, regular Mushaf reading or one specific correction area is the useful starting point. The timetable should remain sustainable alongside work and family duties.</p><h2>Questions to settle before a US enrollment</h2><ul class="check-list"><li>The city, state, time zone and exact local lesson time</li><li>The course and first measurable learning target</li><li>Lesson duration and number of meetings each week</li><li>Male or female tutor request, if any</li><li>Plan currency, amount and payment method</li><li>Holiday, absence, make-up, cancellation and refund terms</li></ul><p>These details should be written in the enrollment confirmation. A country page cannot promise a specific slot or currency without checking the actual request.</p><h2>Prepare a child for the first online class</h2><p>Test the device, microphone and connection in the room that will be used. Place the Qaida or Mushaf within reach and tell the child that the first assessment is used to find a starting point, not to give a pass or fail result. For younger learners, a parent should know who the tutor is and remain reasonably available.</p><p>The <a href="/resources/first-online-quran-lesson-checklist/">first lesson checklist</a> covers the device, material, study space and safeguarding reminders. After the assessment, the <a href="/resources/weekly-quran-practice-planner/">weekly practice planner</a> can turn the tutor's assignment into a repeatable home routine.</p><h2>How progress can be discussed</h2><p>Useful progress is specific: the learner recognizes more joined forms, needs fewer prompts, repairs a recurring sound, keeps the place on a new line or recalls an older Hifz portion more reliably. Ask what the current focus is and what should be practised before the next lesson. Page count alone may hide repeated errors.</p><h2>USA scheduling and enrollment questions</h2><div class="faq-static">${usFaq.map(([q, a]) => `<details><summary>${q}</summary><p>${a}</p></details>`).join('')}</div><div class="resource-strip"><h3>Start with clear information</h3><div class="resource-links"><a href="/resources/quran-learning-level-check/">Use the level checker</a><a href="/pricing/">Review published plans</a><a href="/free-assessment/">Request a free assessment</a></div></div></div></div></section>${englishCta()}`;
  const usService = { '@context': 'https://schema.org', '@type': 'Service', name: 'Online Quran Classes in the USA', serviceType: 'Private online Quran education', provider: { '@id': 'https://qurancrest.com/#academy' }, areaServed: { '@type': 'Country', name: 'United States' }, url: 'https://qurancrest.com/online-quran-classes-usa/' };
  write('online-quran-classes-usa/index.html', standardLayout({ title: 'Online Quran Classes in the USA | Kids & Adults', description: usDescription, canonical: 'https://qurancrest.com/online-quran-classes-usa/', body: usBody, schemas: [usService, faqSchema(usFaq)] }));

  const auFaq = [
    ['What location details should Australian families send?', 'Send the city or suburb, state or territory and the preferred local-time window. This avoids treating Sydney, Brisbane, Adelaide, Darwin and Perth as one clock.'],
    ['How are daylight-saving changes handled?', 'Confirm the city and current local time whenever a recurring slot is arranged or clocks change. Rules and offsets are not identical across every state and territory.'],
    ['Can lessons fit school-term routines?', 'Families can request a window around school and family commitments. Current tutor availability must be checked before a regular timetable is promised.'],
    ['Does this page guarantee payment in Australian dollars?', 'No. Ask admissions to confirm the plan currency, exact amount and payment method in writing before payment.'],
    ['Are female tutors available for women and children?', 'A female tutor may be requested. Matching depends on the course, local-time window and current availability.']
  ];
  const auDescription = 'Private online Quran classes for learners in Australia, with state-aware time planning, kids and adult pathways, tutor requests and a free assessment.';
  const auBody = `${pageHero('State-aware lesson planning for Australia', 'Online Quran Classes in Australia', auDescription)}${breadcrumbs([{ name: 'Home', href: '/' }, { name: 'Locations', href: '/locations/' }, { name: 'Australia' }])}<section class="section section-paper"><div class="shell article-shell"><div class="answer-box"><strong>For Australian families</strong><p>Share the city or suburb, state or territory, and a preferred local-time window. Australia uses several time zones and daylight-saving arrangements, so a city-based request is needed before a recurring online lesson can be confirmed.</p></div><div class="article-body"><h2>Why the Australian city matters</h2><p>A request from Sydney or Melbourne cannot automatically be scheduled as though it came from Brisbane, Adelaide, Darwin or Perth. Even familiar abbreviations such as AEST, AEDT, ACST, ACDT and AWST can be entered incorrectly when seasons change. The clearest message includes the learner's city, current local time and acceptable days.</p><p>Families can also mention school-term commitments, weekend activities, bedtime and whether a parent needs to be nearby. Adult learners may prefer an early morning, lunch break or evening window. QuranCrest checks these preferences against current tutor availability before confirming the timetable.</p><h2>Learning plans for different Australian households</h2><h3>Young beginners</h3><p>A new learner may begin with letter shapes, dots, sounds and simple joining through <a href="/courses/noorani-qaida/">Noorani Qaida</a>. Short, focused turns and a clear home-practice target can help a child stay engaged. The parent should prepare the meeting link and know the agreed communication channel.</p><h3>School-age readers</h3><p>A child who has already studied may need guided Quran reading, a focused Tajweed correction or a better practice routine. The tutor should hear the child read rather than place them only by age or school year. Parents can ask which one or two skills should improve before the next review.</p><h3>Adults and women</h3><p>Adults can start from letters, return to the Mushaf after a break or work on repeated recitation problems. Women and families can request a female teacher; the academy confirms a match after checking the selected course and local-time window.</p><h2>Build a timetable that survives busy weeks</h2><p>An ambitious schedule may fail during school events, work changes or family travel. Start with a frequency the learner can attend and support with short practice. Write the local lesson time in the calendar and confirm how holidays, absences and timetable changes are handled before enrollment.</p><p>For home study, use the <a href="/resources/weekly-quran-practice-planner/">weekly Quran practice planner</a>. Hifz learners can use the separate <a href="/resources/hifz-revision-planner/">Sabaq, Sabaqi and Manzil planner</a> as a time framework while the teacher decides the actual passages.</p><h2>Payment and enrollment checks</h2><p>The published <a href="/pricing/">pricing page</a> helps families compare plans, but the enrollment message should still state the currency, amount, lesson length, weekly frequency and payment method. Ask for the holiday, make-up, cancellation and refund terms that apply to the chosen arrangement. Do not infer Australian-dollar billing only from this location page.</p><h2>Safe setup for an online lesson</h2><ul class="check-list"><li>Use a shared or observable room for a younger child.</li><li>Test audio and the exact device before class.</li><li>Keep the current Qaida, Mushaf and lesson note nearby.</li><li>Let the parent manage schedule and payment communication.</li><li>Do not share identification or unrelated private information during a lesson.</li><li>Use the published contact channel to report a concern promptly.</li></ul><h2>What to expect from the free assessment</h2><p>The teacher may listen to letter recognition, joined words, an unfamiliar Mushaf passage, a recurring pronunciation issue or a memorised portion. The purpose is to identify a useful first target. The result may be a full beginner course, selected foundation review, regular reading, Tajweed or a balanced Hifz plan.</p><h2>Australia scheduling and enrollment questions</h2><div class="faq-static">${auFaq.map(([q, a]) => `<details><summary>${q}</summary><p>${a}</p></details>`).join('')}</div><div class="resource-strip"><h3>Prepare before choosing a timetable</h3><div class="resource-links"><a href="/resources/first-online-quran-lesson-checklist/">Use the first lesson checklist</a><a href="/courses/">Compare courses</a><a href="/free-assessment/">Request a free assessment</a></div></div></div></div></section>${englishCta()}`;
  const auService = { '@context': 'https://schema.org', '@type': 'Service', name: 'Online Quran Classes in Australia', serviceType: 'Private online Quran education', provider: { '@id': 'https://qurancrest.com/#academy' }, areaServed: { '@type': 'Country', name: 'Australia' }, url: 'https://qurancrest.com/online-quran-classes-australia/' };
  write('online-quran-classes-australia/index.html', standardLayout({ title: 'Online Quran Classes in Australia | Kids & Adults', description: auDescription, canonical: 'https://qurancrest.com/online-quran-classes-australia/', body: auBody, schemas: [auService, faqSchema(auFaq)] }));
}

function insertBeforeMainEnd(relative, marker, section) {
  const target = path.join(root, relative);
  if (!fs.existsSync(target)) return;
  let html = fs.readFileSync(target, 'utf8');
  const start = `<!-- ${marker}:start -->`;
  const end = `<!-- ${marker}:end -->`;
  const wrapped = `${start}${section}${end}`;
  const existing = new RegExp(`${start.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}[\\s\\S]*?${end.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`);
  html = existing.test(html) ? html.replace(existing, wrapped) : html.replace('</main>', `${wrapped}</main>`);
  fs.writeFileSync(target, html);
}

function addInternalResources() {
  const homeSection = `<section class="section section-mist"><div class="shell"><div class="section-heading"><p class="eyebrow">Free practical tools</p><h2>Turn Quran learning advice into a clear next step</h2><p>Check the likely starting level, prepare the first lesson and build a weekly routine. These tools work in the browser and do not submit answers.</p></div><div class="guide-grid"><article class="guide-card"><h3><a href="/resources/quran-learning-level-check/">Quran learning level check</a></h3><p>Answer four skill questions and see a likely starting path before a live assessment.</p></article><article class="guide-card"><h3><a href="/resources/weekly-quran-practice-planner/">Weekly practice planner</a></h3><p>Create a repeatable plan around the tutor's actual correction and assigned portion.</p></article><article class="guide-card"><h3><a href="/resources/first-online-quran-lesson-checklist/">First lesson checklist</a></h3><p>Prepare audio, material, learner information and a safe, observable study space.</p></article></div><p style="margin-top:1.25rem"><a class="text-link" href="/resources/">View all free learning resources →</a></p></div></section>`;
  insertBeforeMainEnd('index.html', 'quality-home-tools', homeSection);

  const courseResources = {
    'courses/noorani-qaida/index.html': [['Check the likely starting level', '/resources/quran-learning-level-check/'], ['Understand common reading mistakes', '/resources/common-quran-reading-mistakes/']],
    'courses/quran-reading/index.html': [['Review common Quran reading mistakes', '/resources/common-quran-reading-mistakes/'], ['Build a weekly practice plan', '/resources/weekly-quran-practice-planner/']],
    'courses/tajweed/index.html': [['Use the reading correction guide', '/resources/common-quran-reading-mistakes/'], ['Plan focused weekly practice', '/resources/weekly-quran-practice-planner/']],
    'courses/quran-memorization/index.html': [['Build a Hifz revision framework', '/resources/hifz-revision-planner/'], ['Plan a sustainable practice week', '/resources/weekly-quran-practice-planner/']],
    'courses/quran-classes-for-kids/index.html': [['Prepare the first online lesson', '/resources/first-online-quran-lesson-checklist/'], ['Make a child-friendly practice plan', '/resources/weekly-quran-practice-planner/']],
    'courses/quran-classes-for-adults/index.html': [['Check the likely starting level', '/resources/quran-learning-level-check/'], ['Build a realistic practice routine', '/resources/weekly-quran-practice-planner/']],
    'courses/female-quran-teacher/index.html': [['Prepare a safe first lesson', '/resources/first-online-quran-lesson-checklist/'], ['Read the child-safety standards', '/child-safety/']],
    'courses/islamic-studies/index.html': [['Plan a consistent learning week', '/resources/weekly-quran-practice-planner/'], ['Browse Quran learning resources', '/resources/']]
  };
  for (const [relative, links] of Object.entries(courseResources)) {
    const section = `<section class="section section-mist"><div class="shell article-shell"><div class="resource-strip"><h2>Free resources for this learning path</h2><p>Use these practical pages before or between lessons. The tutor's live assessment and current assignment remain the final guide.</p><div class="resource-links">${links.map(([label, href]) => `<a href="${href}">${label}</a>`).join('')}</div></div></div></section>`;
    insertBeforeMainEnd(relative, 'quality-course-resources', section);
  }

  for (const dir of fs.readdirSync(path.join(root, 'blog'), { withFileTypes: true })) {
    if (!dir.isDirectory()) continue;
    const relative = `blog/${dir.name}/index.html`;
    const section = `<section class="section section-mist"><div class="shell article-shell"><div class="resource-strip"><h2>Use a free learning tool</h2><p>Move from general guidance to a personal routine while keeping the tutor's correction as the final reference.</p><div class="resource-links"><a href="/resources/quran-learning-level-check/">Check the likely starting level</a><a href="/resources/weekly-quran-practice-planner/">Build a weekly practice plan</a><a href="/resources/first-online-quran-lesson-checklist/">Prepare the first lesson</a></div></div></div></section>`;
    insertBeforeMainEnd(relative, 'quality-article-resources', section);
  }
}

function strengthenExistingPages() {
  insertBeforeMainEnd('about/index.html', 'quality-transparency', `<section class="section section-paper"><div class="shell article-shell"><div class="section-heading"><p class="eyebrow">Public information you can verify</p><h2>Who teaches and how enrollment works</h2></div><div class="trust-facts"><div class="trust-fact"><strong>Named founder</strong><span>Hafiz Umar Farooq is presented on this site as the founder, a Hafiz-e-Quran and digital learning coordinator.</span></div><div class="trust-fact"><strong>Published teaching profiles</strong><span>The tutor page lists the teaching team information currently supplied by QuranCrest.</span></div><div class="trust-fact"><strong>Assessment before placement</strong><span>The learner's reading is heard before a starting course and timetable are recommended.</span></div></div><div class="article-body"><h2>What QuranCrest does not ask you to assume</h2><p>The site does not use invented testimonials, guaranteed completion dates or a fixed result for every learner. Tutor availability, course placement and lesson times are confirmed for the actual request. Families should review the published tutor, pricing, child-safety and policy pages and request written enrollment details before payment.</p><div class="resource-links"><a href="/tutors/">Review the teaching team</a><a href="/pricing/">Review monthly plans</a><a href="/child-safety/">Read child-safety standards</a><a href="/contact/">Ask a specific question</a></div></div></div></section>`);
  insertBeforeMainEnd('child-safety/index.html', 'quality-safety-checklist', `<section class="section section-mist"><div class="shell article-shell"><div class="article-body"><h2>Parent checklist before the first class</h2><ul class="check-list"><li>Keep a younger learner in a shared or observable space.</li><li>Know the tutor's name, lesson time and approved contact channel.</li><li>Let the parent or guardian handle schedule and payment communication.</li><li>Do not send identity documents, card details or unrelated personal information in class.</li><li>Ask how recording is handled and do not record without the required agreement.</li><li>Report an uncomfortable message, boundary concern or safeguarding issue through the published academy contact promptly.</li></ul><h2>If a concern occurs</h2><ol><li>End or pause the interaction if immediate boundaries feel unclear.</li><li>Preserve the relevant message, date and lesson details without sharing them publicly.</li><li>Contact QuranCrest through the published email or contact form and identify the learner, tutor and time.</li><li>For an urgent risk, use the appropriate local emergency or child-protection service in the learner's country.</li></ol><p>Administrative questions, tutor preferences and routine schedule changes can use normal admissions channels. A safeguarding concern should be labelled clearly so it can be handled separately and promptly.</p><div class="resource-links"><a href="/resources/first-online-quran-lesson-checklist/">Use the first lesson checklist</a><a href="/contact/">Contact QuranCrest</a></div></div></div></section>`);
  insertBeforeMainEnd('pricing/index.html', 'quality-payment-checklist', `<section class="section section-paper"><div class="shell article-shell"><div class="article-body"><h2>Confirm these details before payment</h2><p>The published plan is a comparison starting point. Your written enrollment confirmation should identify the exact arrangement you are buying.</p><ul class="check-list"><li>Plan name, currency and total amount</li><li>Lesson duration and classes per week</li><li>Learner's city, time zone and confirmed local lesson time</li><li>Course and tutor match</li><li>Start date and payment method</li><li>Holiday, absence, make-up and cancellation rules</li><li>Refund terms that apply to the confirmed arrangement</li></ul><p>Do not infer a currency or available slot from a location page. Ask admissions to write each material term before you pay.</p></div></div></section>`);
  insertBeforeMainEnd('terms/index.html', 'quality-terms-clarity', `<section class="section section-mist"><div class="shell article-shell"><div class="article-body"><h2>Your enrollment confirmation</h2><p>Before payment, QuranCrest and the learner or guardian should have a written record of the selected plan, currency, amount, lesson duration, weekly frequency, time zone, recurring time, course, start date and the applicable absence, make-up, cancellation and refund terms. That specific written confirmation should be read together with these website terms.</p><p>If a material detail is missing or inconsistent, contact admissions and resolve it in writing before paying.</p></div></div></section>`);
  insertBeforeMainEnd('refund-policy/index.html', 'quality-refund-clarity', `<section class="section section-paper"><div class="shell article-shell"><div class="article-body"><h2>Keep the plan-specific terms in writing</h2><p>Before payment, confirm the currency, amount, start date, lesson schedule and the refund or cancellation terms attached to that arrangement. Keep the enrollment confirmation and payment record. If a request is needed, include the learner's name, plan, payment date and a concise explanation so the academy can identify the correct enrollment.</p><p>Do not rely on a country page or an informal message to infer a different refund condition.</p></div></div></section>`);
  insertBeforeMainEnd('resources/masail/index.html', 'quality-masail-scope', `<section class="section section-paper"><div class="shell article-shell"><div class="article-body"><h2>Questions this learning page can answer</h2><div class="faq-static"><details><summary>Should a hesitant reader always restart Noorani Qaida?</summary><p>No. A tutor should first check whether the difficulty comes from letter recognition, joining, tracking, unfamiliar text or confidence. Some learners need selected foundation review.</p></details><details><summary>Can a recording replace live correction?</summary><p>A recording can provide a model, but it cannot hear the learner's exact sound or identify a repeated pattern. Live listening remains useful.</p></details><details><summary>How should parents help without teaching a conflicting method?</summary><p>Prepare the routine, listen to the assigned portion and note repeated difficulty. Ask the tutor for the correct model when pronunciation is uncertain.</p></details><details><summary>When should a qualified scholar be consulted?</summary><p>Ask a qualified scholar or mufti when the question requires a personal religious ruling, depends on detailed circumstances or goes beyond general learning guidance.</p></details></div><div class="resource-strip"><h3>Practical learning tools</h3><div class="resource-links"><a href="/resources/quran-learning-level-check/">Level checker</a><a href="/resources/common-quran-reading-mistakes/">Reading mistakes guide</a><a href="/resources/hifz-revision-planner/">Hifz revision planner</a></div></div></div></div></section>`);

  const masailPath = path.join(root, 'resources/masail/index.html');
  if (fs.existsSync(masailPath)) {
    let html = fs.readFileSync(masailPath, 'utf8');
    html = html.replace(/Future Masail[^<.]*(?:\.|<\/p>)/gi, 'The page covers general Quran-learning questions and explains when a qualified scholar is needed.</p>');
    html = html.replace(/will grow[^<.]*(?:\.|<\/p>)/gi, 'provides practical learning guidance for current learners and families.</p>');
    fs.writeFileSync(masailPath, html);
  }
}

function expectedCanonical(relative) {
  if (relative === 'index.html') return 'https://qurancrest.com/';
  if (relative === '404.html') return 'https://qurancrest.com/404.html';
  return `https://qurancrest.com/${path.dirname(relative).split(path.sep).join('/')}/`;
}

function walkHtml(directory, files = []) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    if (['dist', 'node_modules', '.git', 'content', 'scripts'].includes(entry.name)) continue;
    const full = path.join(directory, entry.name);
    if (entry.isDirectory()) walkHtml(full, files);
    else if (entry.name.endsWith('.html')) files.push(full);
  }
  return files;
}

function upsertSitewideMetadata() {
  const files = walkHtml(root);
  const alternateMap = {
    'index.html': '<link rel="alternate" hreflang="en" href="https://qurancrest.com/"><link rel="alternate" hreflang="ur-PK" href="https://qurancrest.com/ur/"><link rel="alternate" hreflang="x-default" href="https://qurancrest.com/">',
    'courses/index.html': '<link rel="alternate" hreflang="en" href="https://qurancrest.com/courses/"><link rel="alternate" hreflang="ur-PK" href="https://qurancrest.com/ur/courses/">',
    'resources/index.html': '<link rel="alternate" hreflang="en" href="https://qurancrest.com/resources/"><link rel="alternate" hreflang="ur-PK" href="https://qurancrest.com/ur/resources/">',
    'contact/index.html': '<link rel="alternate" hreflang="en" href="https://qurancrest.com/contact/"><link rel="alternate" hreflang="ur-PK" href="https://qurancrest.com/ur/contact/">'
  };
  for (const file of files) {
    const relative = path.relative(root, file).split(path.sep).join('/');
    const isUrdu = relative.startsWith('ur/');
    const isNoIndex = relative === 'thank-you/index.html' || relative === '404.html';
    let html = fs.readFileSync(file, 'utf8');
    if (relative === '404.html') {
      html = html.replace(/<title>[\s\S]*?<\/title>/i, '<title>Page Not Found | QuranCrest Academy</title>');
      html = html.replace(/<meta\s+name="description"\s+content="[^"]*"\s*\/?\s*>/i, '<meta name="description" content="The requested QuranCrest page could not be found. Return home, browse Quran courses or open the free learning resources.">');
    }
    html = html.replace(/<html\b[^>]*>/i, `<html lang="${isUrdu ? 'ur-PK' : 'en'}"${isUrdu ? ' dir="rtl"' : ''}>`);
    html = html.replace(/<a class="skip-link"[^>]*>[\s\S]*?<\/a>/gi, '');
    html = html.replace(/<header class="site-header"[\s\S]*?<\/header>/i, isUrdu ? urduHeader() : englishHeader());
    html = html.replace(/<footer class="site-footer"[\s\S]*?<\/footer>/i, isUrdu ? urduFooter() : englishFooter());
    if (!html.includes('/assets/quality-tools.css')) html = html.replace('</head>', '<link rel="stylesheet" href="/assets/quality-tools.css"></head>');
    if (!html.includes('/assets/static-site.js')) html = html.replace('</body>', '<script src="/assets/static-site.js" defer></script></body>');
    html = html.replace(/<meta\s+(?:property|name)="(?:og:(?:title|description|url|type|site_name|locale|image(?::(?:width|height|alt))?)|twitter:(?:card|title|description|image))"[^>]*>/gi, '');
    html = html.replace(/<meta(?=[^>]*\bname="robots")[^>]*>/gi, '');
    html = html.replace(/<link\s+rel="canonical"[^>]*>/gi, '');
    html = html.replace(/<link\s+rel="alternate"[^>]*>/gi, '');
    const title = (html.match(/<title>([\s\S]*?)<\/title>/i) || [,'QuranCrest Academy'])[1].replace(/<[^>]+>/g, '').trim();
    const description = (html.match(/<meta\s+name="description"\s+content="([^"]*)"[^>]*>/i) || [,'Private online Quran learning for children and adults.'])[1];
    const canonical = expectedCanonical(relative);
    const social = `<meta name="robots" content="${isNoIndex ? 'noindex,follow' : 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1'}"><link rel="canonical" href="${canonical}">${alternateMap[relative] || ''}<meta property="og:title" content="${title}"><meta property="og:description" content="${description}"><meta property="og:url" content="${canonical}"><meta property="og:type" content="${relative.startsWith('blog/') || relative.includes('common-quran-reading-mistakes') ? 'article' : 'website'}"><meta property="og:site_name" content="QuranCrest Academy"><meta property="og:locale" content="${isUrdu ? 'ur_PK' : 'en_US'}"><meta property="og:image" content="${heroImage}"><meta property="og:image:width" content="1584"><meta property="og:image:height" content="990"><meta property="og:image:alt" content="QuranCrest online Quran learning"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${title}"><meta name="twitter:description" content="${description}"><meta name="twitter:image" content="${heroImage}">`;
    html = html.replace('</head>', `${social}</head>`);
    html = html.replaceAll('Updated 23 September 2026', `Updated ${displayDate}`);
    html = html.replaceAll('<strong>Last reviewed:</strong> 23 September 2026', `<strong>Last reviewed:</strong> ${displayDate}`);
    html = html.replaceAll('"dateModified":"2026-09-23"', `"dateModified":"${isoDate}"`);
    html = html.replaceAll('Educational review: QuranCrest faculty', 'Prepared from QuranCrest course and tutor information');
    html = html.replaceAll("Course pages and guides are checked against the academy's published teaching structure, tutor information, safeguarding standards and common learner questions.", "Course pages and guides are prepared from the academy's published teaching structure, tutor information, safeguarding standards and common learner questions.");
    html = html.replaceAll('Guides name the QuranCrest Editorial Team and state when educational review comes from QuranCrest faculty.', 'Guides identify the QuranCrest Editorial Team or QuranCrest Academy as the content source and distinguish general learning guidance from individual placement advice.');
    html = html.replace(/<div class="notice"><strong>AdSense implementation note<\/strong><p>[\s\S]*?<\/p><\/div>/gi, '');
    html = html.replace(/A growing Quran learning library/gi, 'Quran learning tools and practical guides');
    html = html.replace(/This section will grow[^<]*\.?/gi, 'This section provides practical guidance for learners and families.');
    fs.writeFileSync(file, html);
  }
  return files;
}

function writeSitemap(files) {
  const urls = files
    .map(file => path.relative(root, file).split(path.sep).join('/'))
    .filter(relative => relative.endsWith('/index.html') || relative === 'index.html')
    .filter(relative => !['thank-you/index.html'].includes(relative))
    .map(relative => ({ relative, url: expectedCanonical(relative) }))
    .sort((a, b) => a.url.localeCompare(b.url));
  const homeIndex = urls.findIndex(item => item.relative === 'index.html');
  if (homeIndex > 0) urls.unshift(...urls.splice(homeIndex, 1));
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map(({ relative, url }) => {
    const route = relative === 'index.html' ? '' : path.dirname(relative);
    const priority = route === '' ? '1.0' : ['courses', 'resources', 'blog', 'locations'].includes(route) ? '0.9' : /privacy-policy|terms|refund-policy/.test(route) ? '0.3' : '0.7';
    const frequency = route.startsWith('blog') || route.startsWith('resources') ? 'monthly' : 'yearly';
    return `  <url><loc>${url}</loc><lastmod>${isoDate}</lastmod><changefreq>${frequency}</changefreq><priority>${priority}</priority></url>`;
  }).join('\n')}\n</urlset>\n`;
  write('sitemap.xml', xml);
  return urls.length;
}

function syncDist(files) {
  const relativeFiles = new Set(files.map(file => path.relative(root, file).split(path.sep).join('/')));
  ['assets/quality-tools.css', 'assets/quality-tools.js', 'assets/static-site.js', 'assets/js/config.js', 'sitemap.xml', 'robots.txt'].forEach(item => relativeFiles.add(item));
  for (const relative of relativeFiles) {
    const source = path.join(root, relative);
    if (!fs.existsSync(source)) continue;
    const destination = path.join(root, 'dist', relative);
    fs.mkdirSync(path.dirname(destination), { recursive: true });
    fs.copyFileSync(source, destination);
  }
}

function updateConfig() {
  write('assets/js/config.js', `window.QURANCREST_CONFIG = {\n  brandName: "QuranCrest Academy",\n  websiteUrl: "https://qurancrest.com",\n  targetCountry: "Worldwide",\n  tagline: "Private online Quran learning for families worldwide",\n  whatsappNumber: "923421046878",\n  whatsappDefaultMessage: "Assalamu Alaikum! I would like to book a free Quran learning assessment.",\n  contactEmail: "${email}",\n  formEndpoint: "https://formspree.io/f/mqerrdqj",\n  contactFormEndpoint: "https://formspree.io/f/mqerrdqj",\n  gaMeasurementId: "",\n  googleAdsId: "",\n  googleAdsConversionLabel: ""\n};\n`);
}

generateResourcePages();
generateResourceHub();
generateUrduPages();
generateCountryPages();
addInternalResources();
strengthenExistingPages();
updateConfig();
const htmlFiles = upsertSitewideMetadata();
const sitemapCount = writeSitemap(htmlFiles);
syncDist(htmlFiles);

console.log(`Quality refresh complete: ${resourcePages.length} resource pages generated, ${htmlFiles.length} HTML files updated, ${sitemapCount} URLs in sitemap.`);
