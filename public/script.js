// Enhanced Global Interactivity Script
document.addEventListener('DOMContentLoaded', function () {
  // 1. Theme Handling
  const themeToggle = document.getElementById('themeBtn');
  const html = document.documentElement;
  const themeIcon = themeToggle ? themeToggle.querySelector('i') : null;

  function updateThemeIcon(theme) {
    if (!themeIcon) return;
    themeIcon.className = theme === 'dark' ? 'bi bi-sun-fill' : 'bi bi-moon-fill';
  }

  const savedTheme = localStorage.getItem('theme') || 'light';
  html.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = html.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      updateThemeIcon(newTheme);
    });
  }

  // 2. Custom Cursor (only for desktop)
  if (window.innerWidth > 992) {
    const cursor = document.createElement('div');
    const follower = document.createElement('div');
    cursor.className = 'cursor';
    follower.className = 'cursor-follower';
    document.body.appendChild(cursor);
    document.body.appendChild(follower);

    document.addEventListener('mousemove', (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
      setTimeout(() => {
        follower.style.left = e.clientX + 'px';
        follower.style.top = e.clientY + 'px';
      }, 50);
    });

    const activeElements = document.querySelectorAll('a, button, .card, .attr-card');
    activeElements.forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor.classList.add('active');
        follower.classList.add('active');
      });
      el.addEventListener('mouseleave', () => {
        cursor.classList.remove('active');
        follower.classList.remove('active');
      });
    });
  }

  // 3. Scroll Progress Bar
  const progressBar = document.createElement('div');
  progressBar.className = 'scroll-progress';
  document.body.appendChild(progressBar);

  window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    progressBar.style.width = scrolled + "%";
  });

  // 4. Mobile Menu Navigation
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.querySelector('nav ul');
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      const menuIcon = menuToggle.querySelector('i');
      if (menuIcon) {
        menuIcon.classList.toggle('bi-list');
        menuIcon.classList.toggle('bi-x');
      }
    });
  }

  // 5. Shared Typing Animation (for index page)
  const typingEl = document.getElementById('typing-text');
  if (typingEl) {
    const words = ["Frontend Developer", "Full Stack Developer", "Problem Solver"];
    let wordIdx = 0, charIdx = 0, isDeleting = false;
    
    function typeEffect() {
      const currentWord = words[wordIdx];
      if (isDeleting) {
        typingEl.textContent = currentWord.substring(0, charIdx - 1);
        charIdx--;
        if (charIdx === 0) { isDeleting = false; wordIdx = (wordIdx + 1) % words.length; }
      } else {
        typingEl.textContent = currentWord.substring(0, charIdx + 1);
        charIdx++;
        if (charIdx === currentWord.length) { isDeleting = true; setTimeout(typeEffect, 1500); return; }
      }
      setTimeout(typeEffect, isDeleting ? 50 : 120);
    }
    typeEffect();
  }

  // 6. Certificate Image Modal
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImg');
  const captionText = document.getElementById('modal-caption');
  const closeBtn = document.querySelector('.close-modal');
  const certificates = document.querySelectorAll('.certificates-grid .card img');

  if (modal && modalImg && certificates.length > 0) {
    certificates.forEach(img => {
      img.addEventListener('click', function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        if (captionText) captionText.innerHTML = this.alt;
        document.body.style.overflow = 'hidden'; // Prevent scroll
      });
    });

    if (closeBtn) {
      closeBtn.onclick = function () {
        modal.style.display = "none";
        document.body.style.overflow = 'auto';
      }
    }

    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
        document.body.style.overflow = 'auto';
      }
    }
  }
});
