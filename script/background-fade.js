(() => {
  const updateBackgroundOpacity = () => {
    const fade = Math.min(window.scrollY / 180, 1);
    const overlay = 0.50 + fade * 0.50;
    document.body.style.setProperty("--ocean-overlay", overlay.toFixed(3));
  };

  window.addEventListener("scroll", updateBackgroundOpacity, { passive: true });
  updateBackgroundOpacity();
})();
