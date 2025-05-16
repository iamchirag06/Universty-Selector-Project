// Handle state selection and city selection with redirection
const stateSelect = document.querySelector('select[onchange="window.location.href=this.value"]');
const citySelect = document.querySelector('select[name="links"]');

if (stateSelect) {
  stateSelect.addEventListener('change', function () {
    if (this.value !== '#') {
      window.location.href = this.value;
    }
  });
}

if (citySelect) {
  citySelect.addEventListener('change', function () {
    if (this.value !== '#') {
      window.location.href = this.value;
    }
  });
}

// Add a default option to dropdowns if empty
function addDefaultOption(selectElement, defaultText) {
  if (selectElement && selectElement.options.length === 0) {
    const defaultOption = document.createElement('option');
    defaultOption.value = '#';
    defaultOption.textContent = defaultText || 'Select';
    selectElement.appendChild(defaultOption);
  }
}

addDefaultOption(stateSelect, 'Select States:');
addDefaultOption(citySelect, 'Select Cities:');

// Add functionality to "Apply Now" buttons
document.querySelectorAll('.apply button').forEach(button => {
  button.addEventListener('click', () => {
    alert('Application process started! Redirecting you to the application portal...');
  });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});