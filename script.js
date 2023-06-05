
window.addEventListener('DOMContentLoaded', function () {
  var navToggle = document.querySelector('.nav-toggle');
  var navMenu = document.querySelector('.nav-menu');

  navToggle.addEventListener('change', function () {
    if (this.checked) {
      navMenu.style.opacity = '1';
      navMenu.style.pointerEvents = 'auto';
    } else {
      navMenu.style.opacity = '0';
      navMenu.style.pointerEvents = 'none';
    }
  });
});
