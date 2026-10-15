(() => {
  const updateBackgroundOpacity = () => {
    const fade = Math.min(window.scrollY / 180, 1);
    const overlay = 0.50 + fade * 0.50;
    document.body.style.setProperty("--ocean-overlay", overlay.toFixed(3));
    document.body.style.setProperty("--role-shadow", (0.42 * (1 - fade)).toFixed(3));
  };

  window.addEventListener("scroll", updateBackgroundOpacity, { passive: true });
  updateBackgroundOpacity();
})();
