(() => {
  const timeoutMs = 10000;
  const retryDelayMs = 5000;
  const retries = 3;

  async function checkAvailability(link) {
    for (let attempt = 0; attempt <= retries; attempt += 1) {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), timeoutMs);

      try {
        const response = await fetch(link.href, {
          mode: 'cors',
          cache: 'no-store',
          credentials: 'omit',
          signal: controller.signal,
        });
        if (!response.ok) {
          throw new Error(`Product returned HTTP ${response.status}`);
        }
        link.style.removeProperty('visibility');
        return;
      } catch {
        // Preserve the link's space to avoid moving surrounding content.
        link.style.visibility = 'hidden';
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
