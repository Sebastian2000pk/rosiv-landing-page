document.addEventListener("DOMContentLoaded", function () {
  // Selecciona los botones por su clase o ID
  const downloadButton = document.querySelector(
    '.cta-button[data-action="download"]'
  );
  const pricingButtons = document.querySelectorAll(".pricing-data");

  // Función para enviar un evento a Google Analytics
  function trackEvent(category, action, label) {
    gtag("event", action, {
      event_category: category,
      event_label: label,
    });
  }

  // Manejar clics en el botón de descarga
  if (downloadButton) {
    downloadButton.addEventListener("click", function () {
      trackEvent("Button", "Click", "Descargar Ahora");
    });
  }

  // Manejar clics en los botones de precios
  pricingButtons.forEach((button) => {
    button.addEventListener("click", function () {
      trackEvent("Button", "Click", "Seleccionar Plan");
    });
  });
});
