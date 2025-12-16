document.addEventListener('DOMContentLoaded', () => {
    // --- 1. Mobile Menu Toggle Logic ---
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            menuToggle.classList.toggle('is-open'); 
        });

        // Close menu on link click (for mobile UX)
        const navLinks = mainNav.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                setTimeout(() => {
                    mainNav.classList.remove('active');
                    menuToggle.classList.remove('is-open'); 
                }, 100); 
            });
        });
    }

    // --- 2. Intersection Observer for Scroll Animations ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // The browser will automatically run the CSS animation
                // because the element is now visible.
                entry.target.style.opacity = 1;
                observer.unobserve(entry.target);
            }
        });
    }, {
        rootMargin: '0px',
        threshold: 0.1 // Start animation when 10% of element is visible
    });

    // Observe all elements marked for animation
    document.querySelectorAll('.animate-slide-up, .animate-fade-in, .animate-scale-up').forEach(el => {
        // Ensure initial opacity is set to 0 to enable the animation
        el.style.opacity = 0; 
        observer.observe(el);
    });
});


window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    const app = document.getElementById("app");

    if (loader) loader.style.display = "none";
    if (app) app.style.display = "block";
});
