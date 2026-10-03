export function initScrollReveal() {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
    // Fallback: reveal all elements immediately
    document.querySelectorAll('[data-reveal]').forEach((el) => {
      el.classList.add('is-revealed');
    });
    return () => {};
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      root: null,
      rootMargin: '0px 0px -6% 0px',
      threshold: 0.05,
    }
  );

  const observeAll = () => {
    document.querySelectorAll('[data-reveal]:not(.is-revealed)').forEach((el) => {
      observer.observe(el);
    });
  };

  observeAll();

  // Watch for dynamic DOM elements
  const mutationObserver = new MutationObserver(observeAll);
  mutationObserver.observe(document.body, { childList: true, subtree: true });

  return () => {
    observer.disconnect();
    mutationObserver.disconnect();
  };
}
