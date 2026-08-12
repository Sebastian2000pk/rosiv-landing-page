document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      const isOpen = navMenu.classList.toggle("active");
      hamburger.classList.toggle("active", isOpen);
      hamburger.setAttribute("aria-expanded", String(isOpen));
    });

    navMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        hamburger.classList.remove("active");
        hamburger.setAttribute("aria-expanded", "false");
      });
    });
  }

  const navbar = document.querySelector(".navbar");
  if (navbar) {
    const onScroll = () => {
      navbar.classList.toggle("scrolled", window.scrollY > 10);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  const year = document.getElementById("year");
  if (year) {
    year.textContent = String(new Date().getFullYear());
  }

  const track = document.getElementById("pricing-track");
  const prevBtn = document.getElementById("pricing-prev");
  const nextBtn = document.getElementById("pricing-next");
  const dots = document.querySelectorAll("#pricing-dots .carousel-dot");

  if (track && dots.length) {
    const cards = Array.from(track.children);

    const scrollToCard = (index) => {
      cards[index].scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    };

    const setActiveDot = (index) => {
      dots.forEach((dot, i) => {
        const isActive = i === index;
        dot.classList.toggle("active", isActive);
        dot.setAttribute("aria-selected", String(isActive));
      });
    };

    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => scrollToCard(index));
    });

    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        const current = cards.findIndex((c) => c.classList.contains("in-view"));
        scrollToCard(Math.max(0, (current === -1 ? 0 : current) - 1));
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        const current = cards.findIndex((c) => c.classList.contains("in-view"));
        scrollToCard(Math.min(cards.length - 1, (current === -1 ? 0 : current) + 1));
      });
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = cards.indexOf(entry.target);
          entry.target.classList.toggle("in-view", entry.isIntersecting);
          if (entry.isIntersecting && entry.intersectionRatio > 0.6) {
            setActiveDot(index);
          }
        });
      },
      { root: track, threshold: [0.6] }
    );

    cards.forEach((card) => observer.observe(card));
  }
});
