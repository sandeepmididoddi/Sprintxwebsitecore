document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            } else {
                entry.target.classList.remove('in-view');
            }
        });
    }, { threshold: 0.1 });

    animatedElements.forEach(element => {
        observer.observe(element);
    });

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    const readMoreButtons = document.querySelectorAll('.read-more-btn');
    
    readMoreButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const postItem = e.target.closest('.post-item');
            const expandableContent = postItem.querySelector('.expandable-content');
            
            // Toggle expanded state
            postItem.classList.toggle('expanded');
            
            // Toggle content display with a slight delay to ensure animation works
            if (postItem.classList.contains('expanded')) {
                expandableContent.style.display = 'block';
                button.querySelector('.arrow-icon').textContent = '▼';
                // Ensure content is visible
                expandableContent.style.opacity = '1';
                expandableContent.style.maxHeight = 'none';
            } else {
                expandableContent.style.display = 'none';
                button.querySelector('.arrow-icon').textContent = '▶';
            }
        });
    });

    const categoryItems = document.querySelectorAll('.category-item');
    const posts = document.querySelectorAll('.post-item');
    const featuredPost = document.querySelector('.featured-post');

    categoryItems.forEach(category => {
        category.addEventListener('click', (e) => {
            e.preventDefault();
            const categoryType = category.getAttribute('data-category');

            posts.forEach(post => {
                if (post.getAttribute('data-category') === categoryType || categoryType === 'All') {
                    post.style.display = 'block';
                } else {
                    post.style.display = 'none';
                }
            });

            if (featuredPost.getAttribute('data-category') === categoryType || categoryType === 'All') {
                featuredPost.style.display = 'block';
            } else {
                featuredPost.style.display = 'none';
            }
        });
    });

    // Newsletter subscription popup
    const newsletterForm = document.getElementById('newsletter-form');
    const newsletterPopup = document.getElementById('newsletter-popup');
    const closeBtn = document.querySelector('.close-btn');

    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        newsletterPopup.style.display = 'block';
    });

    closeBtn.addEventListener('click', () => {
        newsletterPopup.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === newsletterPopup) {
            newsletterPopup.style.display = 'none';
        }
    });

    // Handle close buttons
    document.querySelectorAll('.close-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const postItem = e.target.closest('.post-item');
            const expandableContent = postItem.querySelector('.expandable-content');
            
            // Reset expanded state
            postItem.classList.remove('expanded');
            expandableContent.style.display = 'none';
            
            // Reset read more button
            const readMoreBtn = postItem.querySelector('.read-more-btn');
            readMoreBtn.querySelector('.arrow-icon').textContent = '▶';
        });
    });

    // Optional: Add horizontal scroll with mouse wheel
    document.querySelector('.posts-slider').addEventListener('wheel', (e) => {
        if (e.deltaY !== 0) {
            e.preventDefault();
            e.currentTarget.scrollLeft += e.deltaY;
        }
    });
});
