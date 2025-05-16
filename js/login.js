document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  const username = document.getElementById('username');
  const password = document.getElementById('password');
  const errorMsg = document.querySelector('.error-msg');

  form.addEventListener('submit', function(event) {
    if (!username.value.trim() || !password.value.trim()) {
      errorMsg.textContent = "Both fields are required!";
      errorMsg.style.display = "block";
      event.preventDefault();
      return;
    }
    errorMsg.style.display = "none";
  });

  [username, password].forEach(input => {
    input.addEventListener('input', () => {
      if (errorMsg.style.display !== "none") {
        errorMsg.style.display = "none";
      }
    });
  });
});