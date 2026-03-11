// Theme Handling
function initTheme() {
  const themeToggle = document.querySelector('.theme-toggle');
  const html = document.documentElement;
  const icon = themeToggle ? themeToggle.querySelector('i') : null;

  // Check saved theme
  const savedTheme = localStorage.getItem('theme') || 'dark';
  html.setAttribute('data-theme', savedTheme);
  updateIcon(savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = html.getAttribute('data-theme');
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';

      html.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      updateIcon(newTheme);
    });
  }

  function updateIcon(theme) {
    if (!icon) return;
    if (theme === 'light') {
      icon.className = 'bi bi-moon-fill'; // Show moon icon in light mode (to switch to dark)
    } else {
      icon.className = 'bi bi-sun-fill'; // Show sun icon in dark mode (to switch to light)
    }
  }
}

// Portfolio Interactive Features

// Typing Animation
function typeWriter(element, text, speed = 100) {
  let i = 0;
  element.innerHTML = '';

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }

  type();
}

// Initialize all features when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
  // Initialize Theme
  initTheme();

  // Initialize typing animation
  const typingElement = document.querySelector('.typing-text');
  if (typingElement) {
    const text = typingElement.textContent;
    typeWriter(typingElement, text, 100);
  }

  // Add scroll animations
  document.querySelectorAll('.project-card, .certificate-card, .skill-card').forEach(el => {
    el.classList.add('scroll-animate');
  });
});
