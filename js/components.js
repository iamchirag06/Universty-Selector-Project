// Use this script to load nav and footer into your pages

function loadComponent(selector, url, callback) {
  fetch(url)
    .then(response => response.text())
    .then(data => {
      document.querySelector(selector).innerHTML = data;
      if (callback) callback();
    });
}