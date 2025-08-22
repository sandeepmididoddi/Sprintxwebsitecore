document.addEventListener('DOMContentLoaded', function() {
    // Create intersection observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    // Observe all foundation cards and stats
    document.querySelectorAll('.foundation-card, .impact-stat').forEach(el => {
        observer.observe(el);
    });
});
