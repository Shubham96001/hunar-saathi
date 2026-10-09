/* Hunar Saathi Global Navigation & Interactive Enhancements */
document.addEventListener('DOMContentLoaded', () => {
  // Highlight active page link
  const currentPath = window.location.pathname;
  document.querySelectorAll('.nav-links a, .doc-nav-item').forEach(link => {
    const href = link.getAttribute('href');
    if (href && (currentPath.endsWith(href) || (href === '../index.html' && currentPath.endsWith('index.html')))) {
      link.classList.add('active');
    }
  });

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId.length > 1) {
        e.preventDefault();
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });
});
