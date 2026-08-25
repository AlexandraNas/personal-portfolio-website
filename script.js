// Contact form handler
// Submits to Formspree (formspree.io) without leaving the page.

window.addEventListener('load', function () {
  if (location.hash) {
    var target = document.querySelector(location.hash);
    if (target) {
      setTimeout(function () {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 60);
    }
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');

  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();

      if (form.action.indexOf('YOUR_FORM_ID') !== -1) {
        status.textContent = 'Contact form not set up yet: replace YOUR_FORM_ID in index.html with your Formspree endpoint.';
        status.className = 'form-status error';
        return;
      }

      const submitBtn = form.querySelector('button[type="submit"]');
      submitBtn.disabled = true;
      status.textContent = 'Sending...';
      status.className = 'form-status';

      fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      })
        .then(function (response) {
          if (response.ok) {
            status.textContent = "Thanks! Your message has been sent, I'll get back to you soon.";
            status.className = 'form-status success';
            form.reset();
          } else {
            status.textContent = 'Something went wrong sending that. Please try again or email me directly.';
            status.className = 'form-status error';
          }
        })
        .catch(function () {
          status.textContent = 'Something went wrong sending that. Please try again or email me directly.';
          status.className = 'form-status error';
        })
        .finally(function () {
          submitBtn.disabled = false;
        });
    });
  }

  // Mobile hamburger menu
  // Below 980px the nav links collapse into a dropdown toggled by this button.
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  if (navToggle && navLinks) {
    const closeMenu = function () {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
    };

    const openMenu = function () {
      navLinks.classList.add('open');
      navToggle.setAttribute('aria-expanded', 'true');
      navToggle.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    };

    navToggle.addEventListener('click', function () {
      if (navLinks.classList.contains('open')) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    // Close the menu once a link is tapped, so it doesn't stay open
    // after navigating to a new section or page.
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });
  }
});