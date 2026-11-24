(() => {
  const timeoutMs = 10000;
  const retryDelayMs = 5000;
  const retries = 3;

  async function checkAvailability(link) {
    for (let attempt = 0; attempt <= retries; attempt += 1) {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), timeoutMs);

      try {
        // Opaque responses still confirm reachability without requiring CORS.
        await fetch(link.href, {
          mode: 'no-cors',
          cache: 'no-store',
          credentials: 'omit',
          signal: controller.signal,
        });
        link.style.removeProperty('display');
        return;
      } catch {
        // Inline display overrides the project link styles while unavailable.
        link.style.display = 'none';
      } finally {
        clearTimeout(timeout);
      }

      if (attempt < retries) {
        await new Promise((resolve) => setTimeout(resolve, retryDelayMs));
      }
    }
  }

  document.querySelectorAll('[data-check-availability]').forEach(checkAvailability);
})();
