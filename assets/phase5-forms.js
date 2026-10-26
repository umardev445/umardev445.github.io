// Keep native form submission available when JavaScript is disabled.
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('form[action="https://formspree.io/f/mqerrdqj"]').forEach(form => {
    const status = document.createElement('p');
    status.className = 'form-status';
    status.setAttribute('role', 'status');
    status.setAttribute('aria-live', 'polite');
    status.tabIndex = -1;
    form.appendChild(status);
    const urdu = document.documentElement.lang.toLowerCase().startsWith('ur');
    form.addEventListener('submit', async event => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      const button = form.querySelector('button[type="submit"]');
      if (button?.disabled) return;
      if (button) button.disabled = true;
      form.setAttribute('aria-busy', 'true');
      status.classList.remove('error');
      status.textContent = urdu ? 'درخواست بھیجی جا رہی ہے…' : 'Sending your request…';
      try {
        const response = await fetch(form.action, {
          method: 'POST',
          headers: {Accept: 'application/json'},
          body: new FormData(form)
        });
        if (!response.ok) throw new Error(`Form endpoint returned ${response.status}`);
        window.location.assign('/thank-you/');
      } catch (error) {
        status.textContent = urdu
          ? 'درخواست نہیں بھیجی جا سکی۔ دوبارہ کوشش کریں یا ای میل/واٹس ایپ پر رابطہ کریں۔'
          : 'We could not send your request. Please try again or contact admissions by email or WhatsApp.';
        status.classList.add('error');
        status.focus();
      } finally {
        form.removeAttribute('aria-busy');
        if (button) button.disabled = false;
      }
    });
  });
});
