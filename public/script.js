/**
 * Vijayalaxmi Portfolio - Unified Single Page Interactivity
 * Handles: SPA Navigation, Theme Toggle, Typing Animation, Modal, Scroll Progress
 */

document.addEventListener('DOMContentLoaded', function () {
  // --- 1. Theme Handling ---
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

  // --- 2. Mobile Menu Toggle ---
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      navMenu.classList.toggle('active');
      const menuIcon = menuToggle.querySelector('i');
      if (menuIcon) {
        menuIcon.classList.toggle('bi-list');
        menuIcon.classList.toggle('bi-x');
      }
    });

    // Close menu when clicking a link
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const menuIcon = menuToggle.querySelector('i');
        if (menuIcon) {
          menuIcon.classList.add('bi-list');
          menuIcon.classList.remove('bi-x');
        }
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
        navMenu.classList.remove('active');
        const menuIcon = menuToggle.querySelector('i');
        if (menuIcon) {
          menuIcon.classList.add('bi-list');
          menuIcon.classList.remove('bi-x');
        }
      }
    });
  }

  // --- 3. Smooth Scrolling & Active State ---
  const sections = document.querySelectorAll('section, header');
  const navLinks = document.querySelectorAll('.nav-link');

  function updateActiveLink() {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop - 120) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", updateActiveLink);

  // --- 4. Scroll Progress Bar ---
  const progressBar = document.querySelector('.scroll-progress');
  window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    if (progressBar) progressBar.style.width = scrolled + "%";
  });

  // --- 5. Typing Animation ---
  const typingEl = document.getElementById('typing-text');
  if (typingEl) {
    const words = [
      "Frontend Developer", 
      "Full Stack Developer", 
      "ML Enthusiast", 
      "Problem Solver"
    ];
    let wordIdx = 0, charIdx = 0, isDeleting = false;
    
    function typeEffect() {
      const currentWord = words[wordIdx];
      if (isDeleting) {
        typingEl.textContent = currentWord.substring(0, charIdx - 1);
        charIdx--;
        if (charIdx === 0) { 
            isDeleting = false; 
            wordIdx = (wordIdx + 1) % words.length; 
        }
      } else {
        typingEl.textContent = currentWord.substring(0, charIdx + 1);
        charIdx++;
        if (charIdx === currentWord.length) { 
            isDeleting = true; 
            setTimeout(typeEffect, 2000); 
            return; 
        }
      }
      setTimeout(typeEffect, isDeleting ? 60 : 100);
    }
    typeEffect();
  }

  // --- 6. Certificate Image Modal ---
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImg');
  const captionText = document.getElementById('modal-caption');
  const closeBtn = document.querySelector('.close-modal');
  const certCards = document.querySelectorAll('.cert-card');

  if (modal && modalImg && certCards.length > 0) {
    certCards.forEach(card => {
        const img = card.querySelector('img');
        const h3 = card.querySelector('h3');
        card.addEventListener('click', function () {
            modal.style.display = "block";
            modalImg.src = img.src;
            if (captionText) captionText.innerHTML = h3.textContent;
            document.body.style.overflow = 'hidden'; 
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

  // --- 7. Intersection Observer for fadeInUp Animations ---
  const observerOptions = {
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  document.querySelectorAll('.info-card, .project-card, .cert-card, .section-header').forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)";
    observer.observe(el);
  });
});
