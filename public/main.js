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

  const simInvoices = document.getElementById("sim-invoices");
  const simIa = document.getElementById("sim-ia");

  if (simInvoices && simIa) {
    const simInvoicesValue = document.getElementById("sim-invoices-value");
    const simIaValue = document.getElementById("sim-ia-value");
    const tankFill = document.getElementById("sim-tank-fill");
    const tankFace = document.getElementById("sim-tank-face");
    const planName = document.getElementById("sim-plan-name");
    const message = document.getElementById("sim-message");
    const cta = document.getElementById("sim-cta");

    const IA_POINT_COST = 2.5; // promedio entre tarea simple (1 punto) y compleja (3-5 puntos)

    const plans = [
      { name: "Gratis", capacity: 0, icon: "fa-store" },
      { name: "Starter", capacity: 70, icon: "fa-seedling" },
      { name: "Growth", capacity: 380, icon: "fa-chart-line" },
      { name: "Elite", capacity: 3600, icon: "fa-rocket" },
    ];

    // El slider va de 0 a 999 repartido por tramos, uno por plan de pago, cada
    // uno con su propia proporción del recorrido (no puntos): Starter 25%,
    // Growth 30%, Elite 45%. Así el plan con más capacidad tiene algo más de
    // espacio para explorar sin que los planes chicos queden aplastados en
    // una rayita, que es lo que pasa con una escala lineal de puntos.
    const SLIDER_MAX = 999;
    const ZONE_SHARES = [0.25, 0.3, 0.45];
    const ZONE_CEILINGS = [plans[1].capacity, plans[2].capacity, plans[3].capacity * 1.15];
    const ZONE_STARTS = [
      0,
      ZONE_SHARES[0] * SLIDER_MAX,
      (ZONE_SHARES[0] + ZONE_SHARES[1]) * SLIDER_MAX,
    ];

    const sliderToPoints = (sliderValue) => {
      const zoneIndex =
        sliderValue < ZONE_STARTS[1] ? 0 : sliderValue < ZONE_STARTS[2] ? 1 : 2;
      const zoneSize = ZONE_SHARES[zoneIndex] * SLIDER_MAX;
      const zoneProgress = (sliderValue - ZONE_STARTS[zoneIndex]) / zoneSize;
      const floorPoints = zoneIndex === 0 ? 0 : ZONE_CEILINGS[zoneIndex - 1];
      const ceilingPoints = ZONE_CEILINGS[zoneIndex];
      return Math.round(floorPoints + zoneProgress * (ceilingPoints - floorPoints));
    };

    const pickPlan = (points) => {
      if (points === 0) return plans[0];
      return plans.find((plan) => points <= plan.capacity) ?? null;
    };

    const messageFor = (points, plan) => {
      if (points === 0) {
        return "Mueve los controles para empezar a llenar el tanque 👆";
      }
      if (!plan) {
        return "¡Vaya volumen! Se sale hasta de Elite, hablemos 🚀";
      }
      if (plan.name === "Gratis") {
        return "Con eso ni siquiera necesitas un plan pago todavía ✨";
      }
      const ratio = points / plan.capacity;
      if (ratio > 0.85) {
        return `Justo al límite del plan ${plan.name} — te sobra poquito margen 😅`;
      }
      return `Te sobra capacidad de sobra en el plan ${plan.name} 🎉`;
    };

    const updateSimulator = () => {
      const invoices = sliderToPoints(Number(simInvoices.value));
      const iaTasks = Math.round(sliderToPoints(Number(simIa.value)) / IA_POINT_COST);
      const points = invoices + iaTasks * IA_POINT_COST;

      simInvoicesValue.textContent = String(invoices);
      simIaValue.textContent = String(iaTasks);

      const plan = pickPlan(points);
      // El tanque siempre muestra qué tan lleno queda EL PLAN QUE TE TOCA,
      // no una escala global — así Starter y Elite se ven igual de "llenables"
      // en vez de que Elite deje a los demás como una rayita invisible.
      const fillRatio = plan ? Math.min(points / (plan.capacity || 1), 1) : 1;
      const fillHeight = points > 0 ? Math.max(fillRatio * 100, 6) : 0;

      tankFill.style.height = `${fillHeight}%`;
      tankFill.classList.remove("sim-tank-warn", "sim-tank-over");
      tankFace.classList.remove("sim-tank-face-light");

      if (!plan) {
        tankFill.classList.add("sim-tank-over");
        tankFace.classList.add("sim-tank-face-light");
      } else if (fillRatio > 0.85 && plan.name !== "Gratis") {
        tankFill.classList.add("sim-tank-warn");
        if (fillHeight > 55) tankFace.classList.add("sim-tank-face-light");
      } else if (fillHeight > 55) {
        tankFace.classList.add("sim-tank-face-light");
      }

      planName.textContent = plan ? plan.name : "A medida";
      message.textContent = messageFor(points, plan);
      tankFace.innerHTML = `<i class="fas ${plan ? plan.icon : "fa-infinity"}" aria-hidden="true"></i>`;

      if (!plan || plan.name === "Gratis") {
        cta.textContent = plan ? "Empezar gratis" : "Hablar con ventas";
        cta.href = plan ? "https://web.rosivhub.com" : "https://wa.me/573000000000";
      } else {
        cta.textContent = `Elegir ${plan.name}`;
        cta.href = "https://web.rosivhub.com";
      }
    };

    [simInvoices, simIa].forEach((input) => {
      input.addEventListener("input", updateSimulator);
    });

    updateSimulator();
  }
});
