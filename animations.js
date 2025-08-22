/*Humburger menu*/
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileDropdowns = document.querySelectorAll('.mobile-dropdown');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Handle mobile dropdowns
    mobileDropdowns.forEach(dropdown => {
        const link = dropdown.querySelector('a');
        link.addEventListener('click', (e) => {
            e.preventDefault();
            dropdown.classList.toggle('active');
            
            // Close other dropdowns
            mobileDropdowns.forEach(other => {
                if (other !== dropdown) {
                    other.classList.remove('active');
                }
            });
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!mobileMenu.contains(e.target) && !hamburger.contains(e.target)) {
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Handle window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 968) {
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const landingPage = document.querySelector('.landing-page');
    
    function createParticle() {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDuration = Math.random() * 2 + 1 + 's';
        landingPage.appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, 3000);
    }
    
    setInterval(createParticle, 200);
});


// Animate elements on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight - 100) {
            element.classList.add('show');
        }
    });
}

// Animate counters
function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = target / 200;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(animateCounters, 1);
        } else {
            counter.innerText = target;
        }
    });
}

// Run animations on scroll
window.addEventListener('scroll', animateOnScroll);

// Run counter animation when the metrics section is in view
const metricsSection = document.querySelector('.metrics');
const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
        animateCounters();
    }
});

if (metricsSection) {
    observer.observe(metricsSection);
}

// Initial animation on page load
animateOnScroll();





// Text animation
document.addEventListener('DOMContentLoaded', () => {
    // Animated text rotation
    const animatedTexts = document.querySelectorAll('.animated-text');
    
    animatedTexts.forEach(element => {
        const textArray = JSON.parse(element.getAttribute('data-text-array'));
        let currentIndex = 0;
        
        const updateText = () => {
            element.style.opacity = '0';
            setTimeout(() => {
                element.textContent = textArray[currentIndex];
                element.style.opacity = '1';
                currentIndex = (currentIndex + 1) % textArray.length;
            }, 500);
        };

        // Initial text
        element.textContent = textArray[0];
        
        // Start rotation
        setInterval(updateText, 3000);
    });

    // Add hover listeners for interactive animations
    const heroTexts = document.querySelectorAll('.hero p, .highlight');
    
    heroTexts.forEach(text => {
        text.addEventListener('mouseover', () => {
            text.style.transform = 'scale(1.05)';
            text.style.transition = 'transform 0.3s ease';
        });

        text.addEventListener('mouseout', () => {
            text.style.transform = 'scale(1)';
        });
    });

    // Add parallax effect on mouse move
    const hero = document.querySelector('.hero');
    
    hero.addEventListener('mousemove', (e) => {
        const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
        const moveY = (e.clientY - window.innerHeight / 2) * 0.01;

        heroTexts.forEach(text => {
            text.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const highlight = document.querySelector('.highlight');
    
    // Add rotation effect on hover
    highlight.addEventListener('mouseover', () => {
        highlight.style.transform = 'perspective(1000px) rotateX(10deg)';
        highlight.style.transition = 'transform 0.3s ease';
    });

    highlight.addEventListener('mouseout', () => {
        highlight.style.transform = 'perspective(1000px) rotateX(0deg)';
    });

    // Add click interaction
    highlight.addEventListener('click', () => {
        highlight.style.animation = 'none';
        highlight.offsetHeight; // Trigger reflow
        highlight.style.animation = 'gradient-animation 15s ease infinite';
        
        // Add temporary intense blur
        const blurElement = highlight.querySelector('::before');
        if (blurElement) {
            blurElement.style.filter = 'blur(20px)';
            setTimeout(() => {
                blurElement.style.filter = 'blur(8px)';
            }, 300);
        }
    });
});

// Scroll animations for landing page
document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add visible class to trigger animations
                entry.target.classList.add('visible');
                
                // Animate stats when they come into view
                if (entry.target.classList.contains('landing-stats')) {
                    const stats = entry.target.querySelectorAll('.animate-stat');
                    stats.forEach((stat, index) => {
                        setTimeout(() => {
                            stat.style.opacity = '1';
                            stat.style.transform = 'scale(1)';
                        }, index * 200);
                    });
                }
            }
        });
    }, observerOptions);

    // Observe elements
    const elementsToAnimate = document.querySelectorAll('.landing-page .container, .animate-text, .landing-stats');
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });

    // Rotating text animation
    const rotatingText = document.getElementById('rotating-text');
    const words = ['SprintX', 'Innovation', 'Future', 'Success'];
    let currentIndex = 0;

    setInterval(() => {
        rotatingText.style.opacity = '0';
        setTimeout(() => {
            rotatingText.textContent = words[currentIndex];
            rotatingText.style.opacity = '1';
            currentIndex = (currentIndex + 1) % words.length;
        }, 500);
    }, 3000);
});

document.addEventListener('DOMContentLoaded', () => {
    const landingContent = document.querySelector('.landing-content');
    const stats = document.querySelectorAll('.stat');

    // 3D tilt effect on mouse move
    landingContent.addEventListener('mousemove', (e) => {
        const rect = landingContent.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const moveX = (x - centerX) / 20;
        const moveY = (y - centerY) / 20;

        landingContent.style.transform = 
            `perspective(1000px) rotateX(${-moveY}deg) rotateY(${moveX}deg)`;
    });

    // Reset transform on mouse leave
    landingContent.addEventListener('mouseleave', () => {
        landingContent.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    });

    // Stats hover effect
    stats.forEach(stat => {
        stat.addEventListener('mousemove', (e) => {
            const rect = stat.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const moveX = (x - centerX) / 10;
            const moveY = (y - centerY) / 10;

            stat.style.transform = 
                `perspective(1000px) rotateX(${-moveY}deg) rotateY(${moveX}deg) translateZ(20px)`;
        });

        stat.addEventListener('mouseleave', () => {
            stat.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
        });
    });

    // Scroll animation
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                if (entry.target.classList.contains('stat')) {
                    entry.target.style.transform = 'translateY(0) rotateX(0)';
                    entry.target.style.opacity = '1';
                }
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-stat, .landing-content').forEach(element => {
        observer.observe(element);
    });
});





// Create floating particles
function createParticles() {
    const particlesContainer = document.querySelector('.landing-page');
    const particleCount = 20;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random size
        const size = Math.random() * 20 + 10;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Random position
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        
        // Random animation delay
        particle.style.animationDelay = `${Math.random() * 2}s`;
        
        particlesContainer.appendChild(particle);
        
        // Remove particle after animation
        setTimeout(() => {
            particle.remove();
        }, 3000);
    }
}

// Create new particles periodically
setInterval(createParticles, 2000);

// Add mouse movement effect
document.querySelector('.landing-page').addEventListener('mousemove', (e) => {
    const particles = document.querySelectorAll('.particle');
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    particles.forEach(particle => {
        const rect = particle.getBoundingClientRect();
        const particleX = rect.left + rect.width / 2;
        const particleY = rect.top + rect.height / 2;

        const deltaX = mouseX - particleX;
        const deltaY = mouseY - particleY;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

        if (distance < 200) {
            const moveX = deltaX / distance * 20;
            const moveY = deltaY / distance * 20;
            particle.style.transform = `translate(${moveX}px, ${moveY}px)`;
        }
    });
});




// Add this to your existing animations.js file
document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe elements with animation classes
    document.querySelectorAll('.animate-scale, .animate-stat').forEach(el => {
        observer.observe(el);
    });
});



