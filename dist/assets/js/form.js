/**
 * QuranCrest Academy - Form Handling & Assessment Booking
 * =======================================================
 * Accessible form processing, client validation, and conversion tracking.
 */

document.addEventListener('DOMContentLoaded', () => {
  initAssessmentForms();
  initContactForms();
});

function initAssessmentForms() {
  const forms = document.querySelectorAll('.js-assessment-form');

  forms.forEach(form => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const statusBox = form.querySelector('.form-status') || document.getElementById('form-status-message');
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalBtnText = submitBtn ? submitBtn.innerHTML : 'Submit';

      // Reset previous error states
      clearErrors(form);
      if (statusBox) {
        statusBox.className = 'form-status';
        statusBox.textContent = '';
      }

      // Collect data
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());

      // Validation
      const errors = validateAssessmentData(data);

      if (errors.length > 0) {
        showErrors(form, errors, statusBox);
        return;
      }

      // Show submitting state
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `
          <span class="spinner" aria-hidden="true"></span>
          <span>Processing Assessment Request...</span>
        `;
      }

      const config = window.QURANCREST_CONFIG || {};
      const endpoint = config.formEndpoint;

      // A static deployment needs either a real form endpoint or WhatsApp.
      // Never show a false success message when neither has been configured.
      if (!isConfiguredValue(endpoint)) {
        const whatsappUrl = buildAssessmentWhatsAppUrl(data, config);

        if (whatsappUrl) {
          saveAssessmentSummary(data);
          trackConversion('assessment_whatsapp_started', data);
          window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

          if (statusBox) {
            statusBox.className = 'form-status success';
            statusBox.textContent = 'WhatsApp has opened with your assessment details. Please send the prepared message to complete your request.';
          }
        } else if (statusBox) {
          statusBox.className = 'form-status error';
          statusBox.textContent = 'Online booking is not available yet. Please contact QuranCrest Academy by email for assistance.';
        }

        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalBtnText;
        }
        return;
      }

      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(data)
        });

        if (!response.ok) {
          throw new Error(`Assessment endpoint returned ${response.status}`);
        }

        // Fire Google Ads conversion event stub if configured
        trackConversion('assessment_submitted', data);

        // Save submitted details in sessionStorage for thank-you page customization
        saveAssessmentSummary(data);

        // Redirect to thank-you page
        window.location.href = '/thank-you/';

      } catch (err) {
        console.error('Submission error:', err);
        if (statusBox) {
          statusBox.className = 'form-status error';
          statusBox.textContent = 'An error occurred while submitting your request. Please try again or contact us directly on WhatsApp.';
        }
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalBtnText;
        }
      }
    });
  });
}

function validateAssessmentData(data) {
  const errors = [];

  if (!data.student_name || data.student_name.trim().length < 2) {
    errors.push({ field: 'student_name', message: 'Please enter the student\'s name.' });
  }

  if (!data.parent_name || data.parent_name.trim().length < 2) {
    errors.push({ field: 'parent_name', message: 'Please enter the parent or adult contact name.' });
  }

  if (!data.phone || data.phone.trim().length < 7) {
    errors.push({ field: 'phone', message: 'Please enter a valid phone or WhatsApp number.' });
  }

  if (!data.email || !data.email.includes('@') || !data.email.includes('.')) {
    errors.push({ field: 'email', message: 'Please enter a valid email address.' });
  }

  if (!data.student_age) {
    errors.push({ field: 'student_age', message: 'Please select the student\'s age category.' });
  }

  return errors;
}

function initContactForms() {
  const contactForms = document.querySelectorAll('.js-contact-form');

  contactForms.forEach(form => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const statusBox = form.querySelector('.form-status');
      const submitBtn = form.querySelector('button[type="submit"]');

      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());

      if (!data.name || !data.email || !data.message) {
        if (statusBox) {
          statusBox.className = 'form-status error';
          statusBox.textContent = 'Please fill in all required fields.';
        }
        return;
      }

      if (submitBtn) submitBtn.disabled = true;

      const config = window.QURANCREST_CONFIG || {};
      const endpoint = config.contactFormEndpoint;

      if (!isConfiguredValue(endpoint)) {
        if (statusBox) {
          statusBox.className = 'form-status error';
          statusBox.textContent = `Online contact submission is not available yet. Please email ${config.contactEmail || 'QuranCrest Academy'} directly.`;
        }
        if (submitBtn) submitBtn.disabled = false;
        return;
      }

      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(data)
        });

        if (!response.ok) {
          throw new Error(`Contact endpoint returned ${response.status}`);
        }

        if (statusBox) {
          statusBox.className = 'form-status success';
          statusBox.textContent = 'Thank you! Your message has been received. Our team will reply as soon as possible.';
        }

        form.reset();
      } catch (error) {
        console.error('Contact submission error:', error);
        if (statusBox) {
          statusBox.className = 'form-status error';
          statusBox.textContent = 'We could not send your message. Please try again or contact us directly by email.';
        }
      }

      if (submitBtn) submitBtn.disabled = false;
    });
  });
}

function isConfiguredValue(value) {
  return Boolean(value && !String(value).includes('REPLACE_WITH'));
}

function buildAssessmentWhatsAppUrl(data, config) {
  if (!isConfiguredValue(config.whatsappNumber)) return null;

  const number = String(config.whatsappNumber).replace(/[^0-9]/g, '');
  if (!number) return null;

  const message = [
    'Assalamu Alaikum! I would like to book a free Quran assessment.',
    `Student: ${data.student_name || 'Not provided'}`,
    `Parent/Adult: ${data.parent_name || 'Not provided'}`,
    `Age group: ${data.student_age || 'Not selected'}`,
    `Program: ${data.program || 'Not selected'}`,
    `Tutor preference: ${data.tutor_preference || 'No preference'}`,
    `Time zone: ${data.time_zone || data.timezone || 'Not selected'}`,
    `Preferred time: ${data.preferred_time || 'Not selected'}`
  ].join('\n');

  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

function saveAssessmentSummary(data) {
  try {
    sessionStorage.setItem('qurancrest_last_assessment', JSON.stringify({
      studentName: data.student_name || 'Student',
      parentName: data.parent_name || 'Parent',
      program: data.program || 'General Quran Assessment',
      submittedAt: new Date().toISOString()
    }));
  } catch (error) {
    console.warn('Session storage write skipped');
  }
}

function clearErrors(form) {
  const invalidFields = form.querySelectorAll('.is-invalid');
  invalidFields.forEach(el => el.classList.remove('is-invalid'));

  const errorMsgs = form.querySelectorAll('.field-error-msg');
  errorMsgs.forEach(el => el.remove());
}

function showErrors(form, errors, statusBox) {
  errors.forEach(err => {
    const input = form.querySelector(`[name="${err.field}"]`);
    if (input) {
      input.classList.add('is-invalid');
      const msg = document.createElement('span');
      msg.className = 'field-error-msg';
      msg.textContent = err.message;
      if (input.parentNode) {
        input.parentNode.appendChild(msg);
      }
    }
  });

  if (statusBox) {
    statusBox.className = 'form-status error';
    statusBox.textContent = 'Please correct the highlighted fields above.';
  }

  // Focus first invalid input
  const firstInvalid = form.querySelector('.is-invalid');
  if (firstInvalid) {
    firstInvalid.focus();
  }
}

function trackConversion(eventName, data) {
  const config = window.QURANCREST_CONFIG || {};
  
  // Google Analytics 4 event
  if (window.gtag && config.gaMeasurementId && !config.gaMeasurementId.includes('REPLACE')) {
    window.gtag('event', eventName, {
      event_category: 'Engagement',
      event_label: data.program || 'Assessment'
    });
  }

  // Google Ads Conversion Event
  if (window.gtag && config.googleAdsId && !config.googleAdsId.includes('REPLACE')) {
    window.gtag('event', 'conversion', {
      'send_to': `${config.googleAdsId}/${config.googleAdsConversionLabel || ''}`
    });
  }
}
