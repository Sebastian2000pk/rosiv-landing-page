document.addEventListener("DOMContentLoaded", function () {
  // Mobile Menu Toggle with Enhanced Accessibility
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');
  const body = document.body;
  
  if (hamburger && navMenu) {
    // Set initial ARIA state
    hamburger.setAttribute('aria-expanded', 'false');
    
    hamburger.addEventListener('click', function(e) {
      e.stopPropagation();
      const isExpanded = hamburger.classList.contains('active');
      
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
      
      // Update ARIA state
      hamburger.setAttribute('aria-expanded', !isExpanded);
      
      // Prevent body scroll when menu is open
      if (navMenu.classList.contains('active')) {
        body.style.overflow = 'hidden';
        // Focus first menu item for keyboard navigation
        const firstMenuItem = navMenu.querySelector('.nav-link');
        if (firstMenuItem) firstMenuItem.focus();
      } else {
        body.style.overflow = '';
      }
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
      if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
        body.style.overflow = '';
      }
    });
    
    // Close menu when clicking on nav links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
        body.style.overflow = '';
      });
    });
    
    // Close menu on window resize to desktop
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
        body.style.overflow = '';
      }
    });
    
    // Enhanced keyboard navigation for menu
    navMenu.addEventListener('keydown', function(e) {
      const menuItems = Array.from(navMenu.querySelectorAll('.nav-link, .nav-cta'));
      const currentIndex = menuItems.indexOf(document.activeElement);
      
      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          const nextIndex = (currentIndex + 1) % menuItems.length;
          menuItems[nextIndex].focus();
          break;
        case 'ArrowUp':
          e.preventDefault();
          const prevIndex = currentIndex === 0 ? menuItems.length - 1 : currentIndex - 1;
          menuItems[prevIndex].focus();
          break;
        case 'Home':
          e.preventDefault();
          menuItems[0].focus();
          break;
        case 'End':
          e.preventDefault();
          menuItems[menuItems.length - 1].focus();
          break;
      }
    });
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        const targetPosition = target.offsetTop - navbarHeight - 20;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // Enhanced navbar background on scroll
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.backdropFilter = 'blur(15px)';
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
      } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
        navbar.style.boxShadow = 'none';
      }
    });
  }

  // Touch-friendly button interactions
  const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .pricing-btn, .nav-cta');
  buttons.forEach(button => {
    button.addEventListener('touchstart', function() {
      this.style.transform = 'scale(0.98)';
    });
    
    button.addEventListener('touchend', function() {
      this.style.transform = '';
    });
  });

  // Button event tracking
  const downloadButtons = document.querySelectorAll('[data-action="download"]');
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
      console.log("Download initiated");
    });
  });

  // Handle CTA button clicks
  ctaButtons.forEach(button => {
    button.addEventListener("click", function () {
      trackEvent("Button", "Click", "CTA - Empezar Gratis");
      console.log("CTA clicked");
    });
  });

  // Enhanced Intersection Observer for animations
  const observerOptions = {
    threshold: 0.05, // Reducido para activar antes
    rootMargin: '0px 0px 150px 0px' // Margen más grande para activar antes
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        entry.target.classList.add('animated');
      }
    });
  }, observerOptions);

  // Configuración especial para las tarjetas de precios (más agresiva)
  const pricingObserverOptions = {
    threshold: 0.02, // Muy bajo para activar muy temprano
    rootMargin: '0px 0px 250px 0px' // Margen aún más grande
  };

  const pricingObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        entry.target.classList.add('animated');
      }
    });
  }, pricingObserverOptions);

  // Observe feature cards with regular settings
  const featureCards = document.querySelectorAll('.feature-card');
  featureCards.forEach((element, index) => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = `opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.08}s, transform 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.08}s`;
    observer.observe(element);
  });

  // Observe pricing cards with more aggressive settings
  const pricingCards = document.querySelectorAll('.pricing-card');
  pricingCards.forEach((element, index) => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = `opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.08}s, transform 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.08}s`;
    pricingObserver.observe(element);
  });

  // Lazy loading for better performance
  const lazyElements = document.querySelectorAll('.hero-mockup, .feature-icon');
  const lazyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('loaded');
        lazyObserver.unobserve(entry.target);
      }
    });
  });

  lazyElements.forEach(element => {
    lazyObserver.observe(element);
  });

  // Enhanced keyboard navigation support
  document.addEventListener('keydown', function(e) {
    // Close menu with Escape key
    if (e.key === 'Escape' && navMenu && navMenu.classList.contains('active')) {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
      body.style.overflow = '';
      hamburger.focus(); // Return focus to hamburger button
    }
    
    // Skip to main content with Ctrl/Cmd + /
    if ((e.ctrlKey || e.metaKey) && e.key === '/') {
      e.preventDefault();
      const mainContent = document.querySelector('main') || document.querySelector('#features');
      if (mainContent) {
        mainContent.focus();
        mainContent.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });

  // Performance optimization: Debounced scroll handler
  let scrollTimeout;
  function debounce(func, wait) {
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(scrollTimeout);
        func(...args);
      };
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(later, wait);
    };
  }

  // Apply debounced scroll to navbar
  const debouncedNavbarScroll = debounce(() => {
    if (navbar) {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }
  }, 10);

  window.addEventListener('scroll', debouncedNavbarScroll);

  // Pricing Toggle Functionality
  const pricingToggle = document.getElementById('pricing-toggle');
  const monthlyAmounts = document.querySelectorAll('.amount.monthly');
  const yearlyAmounts = document.querySelectorAll('.amount.yearly');
  const monthlyPeriods = document.querySelectorAll('.period.monthly');
  const yearlyPeriods = document.querySelectorAll('.period.yearly');
  const savingsElements = document.querySelectorAll('.pricing-savings.yearly');
  
  if (pricingToggle) {
    pricingToggle.addEventListener('change', function() {
      const isYearly = this.checked;
      
      // Toggle amounts visibility
      monthlyAmounts.forEach(el => {
        el.classList.toggle('hidden', isYearly);
      });
      
      yearlyAmounts.forEach(el => {
        el.classList.toggle('hidden', !isYearly);
      });
      
      // Toggle periods visibility
      monthlyPeriods.forEach(el => {
        el.classList.toggle('hidden', isYearly);
      });
      
      yearlyPeriods.forEach(el => {
        el.classList.toggle('hidden', !isYearly);
      });
      
      // Toggle savings visibility
      savingsElements.forEach(el => {
        el.classList.toggle('hidden', !isYearly);
      });
      
      // Track the toggle event
      trackEvent("Pricing", "Toggle", isYearly ? "Yearly" : "Monthly");
    });
  }

  // Enhanced pricing button tracking
  const pricingButtons = document.querySelectorAll('.pricing-btn');
  pricingButtons.forEach(button => {
    button.addEventListener("click", function () {
      const planCard = this.closest('.pricing-card');
      const planName = planCard.querySelector('h3').textContent;
      const isYearly = pricingToggle && pricingToggle.checked;
      const billingType = isYearly ? "Yearly" : "Monthly";
      
      trackEvent("Button", "Click", `${planName} - ${billingType}`);
      
      // Different actions based on plan
      if (planCard.classList.contains('free')) {
        console.log("Free plan selected - initiate download");
        // Add download logic here
      } else if (planCard.classList.contains('pro')) {
        console.log("Pro plan trial started");
        // Add trial signup logic here
      } else if (planCard.classList.contains('enterprise')) {
        console.log("Enterprise contact initiated");
        // Add contact sales logic here
      }
    });
  });

  // FAQ interaction tracking
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach((item, index) => {
    item.addEventListener('click', function() {
      const question = this.querySelector('h4').textContent;
      trackEvent("FAQ", "Click", `Question ${index + 1}: ${question}`);
    });
  });
});
