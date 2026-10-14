document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-print-guide]').forEach(button => {
    button.addEventListener('click', () => window.print());
  });
  let closedDetails = [];
  window.addEventListener('beforeprint', () => {
    closedDetails = [...document.querySelectorAll('.phase3-guide details:not([open])')];
    closedDetails.forEach(detail => { detail.open = true; });
  });
  window.addEventListener('afterprint', () => {
    closedDetails.forEach(detail => { detail.open = false; });
    closedDetails = [];
  });
});
