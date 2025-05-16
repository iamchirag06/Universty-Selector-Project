document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('applyForm');
  const successMsg = form.querySelector('.form-success');
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    let valid = true;
    form.querySelectorAll('input, select').forEach(input => {
      if (!input.value.trim()) {
        input.style.borderColor = "#e74c3c";
        valid = false;
      } else {
        input.style.borderColor = "#ccc";
      }
    });
    if (valid) {
      successMsg.style.display = "block";
      form.reset();
      setTimeout(() => successMsg.style.display = "none", 5000);
    }
  });
});