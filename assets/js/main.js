/**
 * QuranCrest Academy - Main UI & Interaction Engine
 * =================================================
 * Pure Vanilla JavaScript for high speed, accessibility, and reliability.
 */

document.documentElement.classList.add('js');

document.addEventListener('DOMContentLoaded', () => {
  const config = window.QURANCREST_CONFIG || {};

  // 1. Render Floating Circular WhatsApp Button
  initFloatingWhatsAppButton();

  // 2. Initialize WhatsApp Dynamic Links
  initWhatsAppLinks(config);

  // 3. Initialize Navigation & Mobile Hamburger Menu
  initNavigation();

  // 4. Initialize FAQ Accordions
  initAccordions();

  // 5. Highlight Active Page Link
  highlightActiveLink();

  // 6. Dynamic Year for Copyright
  updateCopyrightYear();

  // 7. Premium header state and lightweight scroll reveal
  initScrolledHeader();
  initScrollReveals();

  // 8. One-time, non-distracting WhatsApp attention cue
  initWhatsAppAttention();
});

/**
 * Adds a subtle elevated header state after the first few pixels of scroll.
 */
function initScrolledHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  let ticking = false;
  const updateHeader = () => {
    header.classList.toggle('is-scrolled', window.scrollY > 12);
    ticking = false;
  };

  updateHeader();
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(updateHeader);
      ticking = true;
    }
  }, { passive: true });
}

/**
 * Reveals important content once, using only opacity and transform.
 * The website remains fully visible when IntersectionObserver is unavailable.
 */
function initScrollReveals() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (!('IntersectionObserver' in window)) return;

  const groups = document.querySelectorAll(
    '.section-header, .card, .step-card, .feature-box, .pricing-card, .pathway-container, .faq-item, .form-card'
  );

  groups.forEach((item, index) => {
    item.classList.add('reveal-ready');
    item.style.setProperty('--reveal-delay', `${Math.min((index % 5) * 55, 220)}ms`);
  });

  const observer = new IntersectionObserver((entries, revealObserver) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    });
  }, {
    rootMargin: '0px 0px -8% 0px',
    threshold: 0.08
  });

  groups.forEach(item => observer.observe(item));
}

/**
 * Runs one gentle ring animation and then leaves the control completely still.
 */
function initWhatsAppAttention() {
  const button = document.getElementById('whatsapp-float');
  if (!button || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  window.setTimeout(() => {
    button.classList.add('is-ready');
    window.setTimeout(() => button.classList.remove('is-ready'), 1400);
  }, 1100);
}

/**
 * Ensures the circular floating WhatsApp button exists on all pages
 */
function initFloatingWhatsAppButton() {
  if (document.getElementById('whatsapp-float')) return;

  const floatBtn = document.createElement('a');
  floatBtn.id = 'whatsapp-float';
  floatBtn.className = 'whatsapp-float js-whatsapp-btn';
  floatBtn.href = '#';
  floatBtn.setAttribute('data-whatsapp-msg', "Assalamu Alaikum! I would like to inquire about Quran classes for my family.");
  floatBtn.setAttribute('aria-label', "Chat with us on WhatsApp");
  
  floatBtn.innerHTML = `
    <svg class="whatsapp-float-icon" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.031 2c-5.517 0-9.993 4.476-9.993 9.993 0 1.763.459 3.483 1.332 5.006l-1.417 5.178 5.299-1.39c1.472.803 3.136 1.226 4.779 1.226 5.517 0 9.993-4.476 9.993-9.993 0-5.517-4.476-9.993-9.993-9.993zm5.834 14.175c-.244.688-1.226 1.282-1.996 1.442-.533.111-1.227.2-3.571-.77-2.997-1.24-4.93-4.29-5.08-4.489-.15-.198-1.222-1.626-1.222-3.1 0-1.474.773-2.2 1.047-2.5.274-.3.598-.375.798-.375.2 0 .399.002.573.01.187.008.437-.071.685.525.25.599.848 2.072.923 2.222.075.15.125.324.025.524-.099.2-.149.324-.299.499-.15.175-.315.391-.45.525-.15.15-.306.315-.132.614.175.299.778 1.285 1.671 2.081 1.147 1.022 2.115 1.339 2.414 1.489.299.15.474.125.649-.075.175-.2.749-.873.948-1.172.2-.299.399-.25.673-.15s1.746.823 2.045.973c.299.15.499.225.574.35.074.125.074.723-.17 1.411z"/>
    </svg>
  `;
  
  document.body.appendChild(floatBtn);
}

/**
 * Helper to build WhatsApp wa.me URL
 */
function buildWhatsAppUrl(customMessage) {
  const config = window.QURANCREST_CONFIG || {};
  let num = config.whatsappNumber || '';
  // Clean phone number
  num = num.replace(/[^0-9]/g, '');
  
  const msg = customMessage || config.whatsappDefaultMessage || "Assalamu Alaikum! I'm interested in QuranCrest Academy classes.";
  
  if (!num || num === 'REPLACE_WITH_WHATSAPP_NUMBER') {
    // Graceful fallback for preview mode
    return '#';
  }
  return `https://wa.me/${num}?text=${encodeURIComponent(msg)}`;
}

/**
 * Attaches WhatsApp wa.me link handlers to all WhatsApp buttons
 */
function initWhatsAppLinks(config) {
  const waButtons = document.querySelectorAll('.js-whatsapp-btn, [href*="wa.me"], [data-whatsapp]');
  
  waButtons.forEach(btn => {
    const customMsg = btn.getAttribute('data-whatsapp-msg');
    const url = buildWhatsAppUrl(customMsg);
    
    btn.setAttribute('href', url);
    if (url.startsWith('https://')) {
      btn.setAttribute('target', '_blank');
      btn.setAttribute('rel', 'noopener noreferrer');
    } else {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        alert('WhatsApp Number Placeholder:\nIn production, this button connects directly to WhatsApp using the number configured in assets/js/config.js (whatsappNumber).');
      });
    }
  });
}

/**
 * Mobile Navigation Drawer & Hamburger Menu
 */
function initNavigation() {
  const toggleBtn = document.getElementById('menu-toggle');
  const navDrawer = document.getElementById('primary-nav');
  const backdrop = document.getElementById('nav-backdrop');

  if (!toggleBtn || !navDrawer) return;

  function openMenu() {
    toggleBtn.setAttribute('aria-expanded', 'true');
    toggleBtn.classList.add('is-active');
    navDrawer.classList.add('is-open');
    if (backdrop) backdrop.classList.add('is-visible');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    toggleBtn.setAttribute('aria-expanded', 'false');
    toggleBtn.classList.remove('is-active');
    navDrawer.classList.remove('is-open');
    if (backdrop) backdrop.classList.remove('is-visible');
    document.body.style.overflow = '';
  }

  toggleBtn.addEventListener('click', () => {
    const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    if (isExpanded) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  if (backdrop) {
    backdrop.addEventListener('click', closeMenu);
  }

  // Close when clicking any nav link
  const navLinks = navDrawer.querySelectorAll('a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  // Close on Escape key press
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && toggleBtn.getAttribute('aria-expanded') === 'true') {
      closeMenu();
      toggleBtn.focus();
    }
  });
}

/**
 * Accessible FAQ Accordions
 */
function initAccordions() {
  const accordionButtons = document.querySelectorAll('.faq-accordion-trigger');

  accordionButtons.forEach(button => {
    button.addEventListener('click', () => {
      const isExpanded = button.getAttribute('aria-expanded') === 'true';
      const panelId = button.getAttribute('aria-controls');
      const panel = document.getElementById(panelId);

      // Close other accordions in the same group if needed, or allow multi-expand
      button.setAttribute('aria-expanded', isExpanded ? 'false' : 'true');
      
      if (panel) {
        if (!isExpanded) {
          panel.removeAttribute('hidden');
          panel.style.maxHeight = panel.scrollHeight + 'px';
        } else {
          panel.style.maxHeight = '0px';
          setTimeout(() => {
            if (button.getAttribute('aria-expanded') === 'false') {
              panel.setAttribute('hidden', '');
            }
          }, 250);
        }
      }
    });
  });
}

/**
 * Highlight active link in header nav based on path
 */
function highlightActiveLink() {
  const currentPath = window.location.pathname.replace(/\/$/, '') || '/';
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    const linkPath = link.getAttribute('href')?.replace(/\/$/, '') || '/';
    if (linkPath === currentPath || (linkPath !== '/' && currentPath.startsWith(linkPath))) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    } else {
      link.classList.remove('active');
      link.removeAttribute('aria-current');
    }
  });
}

/**
 * Update copyright year in footer
 */
function updateCopyrightYear() {
  const yearSpan = document.getElementById('copyright-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
}
