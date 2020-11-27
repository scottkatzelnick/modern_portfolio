// Select DOM Items
const menuButton = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

// Burger Menu Click Event
menuButton.addEventListener('click', () => {
  menuButton.classList.toggle('close');
  menu.classList.toggle('show');
  menuNav.classList.toggle('show');
  menuBranding.classList.toggle('show');
  navItems.forEach((item) => {
    item.classList.toggle('show');
  });
});

// Read User Browser For CSS Compatability Issues
document.documentElement.setAttribute('data-browser', navigator.userAgent);

// Formspree.io AJAX form submission with user status message
window.addEventListener('DOMContentLoaded', function () {
  var form = document.querySelector('#contact-form');
  var message = document.querySelector('.submit-msg');

  function success() {
    form.reset();
    message.classList.add('display-msg');
    message.innerHTML = 'Thanks! Message Sent!';
    setTimeout(function () {
      message.innerHTML = '';
      message.classList.remove('display-msg');
    }, 8000);
  }

  function error() {
    message.classList.add('display-error');
    message.innerHTML =
      'Oops, your form submission hit a snag! Please try again.';
    setTimeout(function () {
      message.innerHTML = '';
      message.classList.remove('display-error');
    }, 8000);
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader('Accept', 'application/json');
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}
