(() => {
  const updateBackgroundOpacity = () => {
    const fade = Math.min(window.scrollY / 180, 1);
    const overlay = 0.68 + fade * 0.32;
    document.body.style.setProperty("--ocean-overlay", overlay.toFixed(3));
  };

  window.addEventListener("scroll", updateBackgroundOpacity, { passive: true });
  updateBackgroundOpacity();
})();
