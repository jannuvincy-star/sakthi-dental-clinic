document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav-links');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show');
      toggle.setAttribute('aria-expanded', String(nav.classList.contains('show')));
    });
  }

  document.querySelectorAll('.faq-question').forEach((button) => {
    button.addEventListener('click', () => {
      const item = button.closest('.faq-item');
      item.classList.toggle('open');
      button.setAttribute('aria-expanded', String(item.classList.contains('open')));
    });
  });

  const form = document.querySelector('#contactForm');
  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const name = form.elements.namedItem('name').value.trim();
      const email = form.elements.namedItem('email').value.trim();
      const phone = form.elements.namedItem('phone').value.trim();
      const error = document.querySelector('#formError');
      const success = document.querySelector('#formSuccess');

      error.textContent = '';
      error.style.display = 'none';
      success.style.display = 'none';

      if (!name || !email || !phone) {
        error.textContent = 'Please complete all required fields.';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        error.textContent = 'Please enter a valid email address.';
      } else if (!/^[+()\d\s-]{7,18}$/.test(phone)) {
        error.textContent = 'Please enter a valid phone number.';
      }

      if (error.textContent) {
        error.style.display = 'block';
        return;
      }

      success.style.display = 'block';
      form.reset();
    });
  }

  document.querySelectorAll('[data-year]').forEach((element) => {
    element.textContent = new Date().getFullYear();
  });
});
