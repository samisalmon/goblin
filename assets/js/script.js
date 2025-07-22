
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navbar = document.getElementById('navbar');
    if (menuToggle && navbar) {
      menuToggle.addEventListener('click', function() {
        navbar.classList.toggle('active');
      });
    }
  });
  