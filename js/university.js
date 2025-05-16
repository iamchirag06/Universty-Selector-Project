// Navigation hamburger for mobile
document.addEventListener('DOMContentLoaded', () => {
  // Hamburger menu for mobile
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  // Dropdown select handlers
  const stateSelect = document.getElementById('state-select');
  const citySelect = document.getElementById('city-select');

  if (stateSelect) {
    stateSelect.addEventListener('change', function () {
      if (this.value && this.value !== '#') {
        window.location.hash = this.value;
      }
    });
  }

  if (citySelect) {
    citySelect.addEventListener('change', function () {
      if (this.value && this.value !== '#') {
        window.location.hash = this.value;
      }
    });
  }

  // Add functionality to "Apply Now" buttons
  document.querySelectorAll('.apply button').forEach(button => {
    button.addEventListener('click', () => {
      // You could replace this with a modal or redirect if you have an application portal
      alert('Application process started! Redirecting you to the application portal...');
    });
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Back to top button
  const backToTop = document.getElementById('backToTop');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTop.style.display = 'block';
    } else {
      backToTop.style.display = 'none';
    }
  });
  backToTop.addEventListener('click', () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  });
});