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
