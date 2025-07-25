document.addEventListener("DOMContentLoaded", function () {
  // Mobile Menu Toggle
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');
  
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', function() {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });
    
    // Close menu when clicking on nav links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Navbar background on scroll
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
      } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
      }
    });
  }

  // Button event tracking
  const downloadButtons = document.querySelectorAll('[data-action="download"]');
  const pricingButtons = document.querySelectorAll('.pricing-btn');
  const ctaButtons = document.querySelectorAll('.nav-cta');

  // Function to send event to Google Analytics
  function trackEvent(category, action, label) {
    if (typeof gtag !== 'undefined') {
      gtag("event", action, {
        event_category: category,
        event_label: label,
      });
    }
  }

  // Handle download button clicks
  downloadButtons.forEach(button => {
    button.addEventListener("click", function () {
      trackEvent("Button", "Click", "Descargar Gratis");
      // Here you can add actual download logic
      console.log("Download initiated");
    });
  });

  // Handle pricing button clicks
  pricingButtons.forEach(button => {
    button.addEventListener("click", function () {
      const planName = this.closest('.pricing-card').querySelector('h3').textContent;
      trackEvent("Button", "Click", `Seleccionar Plan - ${planName}`);
      console.log(`Plan selected: ${planName}`);
    });
  });

  // Handle CTA button clicks
  ctaButtons.forEach(button => {
    button.addEventListener("click", function () {
      trackEvent("Button", "Click", "CTA - Empezar Gratis");
      console.log("CTA clicked");
    });
  });

  // Intersection Observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe feature cards for animation
  const featureCards = document.querySelectorAll('.feature-card, .pricing-card');
  featureCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
  });
});
