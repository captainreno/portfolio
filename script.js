/**
 * Portfolio Interaction Logic
 */

document.addEventListener('DOMContentLoaded', () => {

    /* =========================================
       1. NAVBAR SCROLL EFFECT
       ========================================= */
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    /* =========================================
       2. MOBILE MENU TOGGLE
       ========================================= */
    const menuToggle = document.getElementById('mobile-menu');
    const navLinksList = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-item');
    const icon = menuToggle.querySelector('i');

    const toggleMenu = () => {
        navLinksList.classList.toggle('active');
        
        if (navLinksList.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-xmark');
            document.body.style.overflow = 'hidden'; // Prevent scrolling when menu open
        } else {
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
            document.body.style.overflow = '';
        }
    };

    menuToggle.addEventListener('click', toggleMenu);

    // Close menu when clicking a link
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (navLinksList.classList.contains('active')) {
                toggleMenu();
            }
        });
    });

    /* =========================================
       3. SCROLL REVEAL ANIMATIONS
       ========================================= */
    const revealElements = document.querySelectorAll('.reveal-up');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 100; // Trigger earlier

        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;

            if (elementTop < windowHeight - elementVisible) {
                element.classList.add('active');
            }
        });
    };

    // Initial check on load
    revealOnScroll();

    // Check on scroll
    window.addEventListener('scroll', revealOnScroll);

    /* =========================================
       4. SMOOTH SCROLLING (Fallback/Enhancement)
       ========================================= */
    // Native CSS scroll-behavior: smooth handles most of it, 
    // but this ensures correct offset for fixed header across all browsers
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });
});
