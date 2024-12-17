
// Header shadow on scroll
function headerShadow() {
    const navHeader = document.getElementById("header");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
        navHeader.style.height = "70px";
        navHeader.style.lineHeight = "70px";
    } else {
        navHeader.style.boxShadow = "none";
        navHeader.style.height = "90px";
        navHeader.style.lineHeight = "90px";
    }
}

window.addEventListener('scroll', headerShadow);
window.addEventListener('load', headerShadow);

// Mobile Menu Functionality
function initializeMobileMenu() {
    const menuBtn = document.querySelector('.nav-menu-btn');
    const menuIcon = menuBtn?.querySelector('i');
    const navMenu = document.querySelector('.nav-menu');

    if (!menuBtn || !menuIcon || !navMenu) return;

    // Function to update menu button visibility
    function setMenuButtonVisibility() {
        if (window.innerWidth <= 1024) {
            menuBtn.style.display = 'flex';
        } else {
            menuBtn.style.display = 'none';
            navMenu.classList.remove('active');
            menuIcon.classList.add('uil-bars');
            menuIcon.classList.remove('uil-times');
            document.body.style.overflow = '';
        }
    }

    // Function to toggle the menu
    function toggleMenu(event) {
        event.stopPropagation();
        navMenu.classList.toggle('active');
        menuIcon.classList.toggle('uil-bars');
        menuIcon.classList.toggle('uil-times');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    }

    menuBtn.addEventListener('click', toggleMenu);

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) toggleMenu(new Event('click'));
        });
    });

    document.addEventListener('click', (e) => {
        if (navMenu.classList.contains('active') &&
            !navMenu.contains(e.target) &&
            !menuBtn.contains(e.target)) {
            toggleMenu(new Event('click'));
        }
    });

    window.addEventListener('resize', setMenuButtonVisibility);
    setMenuButtonVisibility();
}

document.addEventListener('DOMContentLoaded', initializeMobileMenu);

// Theme Toggle
document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle-btn');

    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });

    function updateThemeIcon(theme) {
        themeToggleBtn.className = theme === 'light' ? 'uil uil-moon' : 'uil uil-sun';
    }
});

// Education Slider Functionality
function initializeEducationSlider() {
    const prevBtn = document.querySelector('.education-slider .prev');
    const nextBtn = document.querySelector('.education-slider .next');
    const cards = document.querySelectorAll('.education-card');
    let currentIndex = 0;

    function updateCards() {
        cards.forEach((card, index) => {
            card.classList.remove('active');
            if (index === currentIndex) {
                card.classList.add('active');
            }
        });
    }

    function showNext() {
        currentIndex = (currentIndex + 1) % cards.length;
        updateCards();
    }

    function showPrev() {
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
        updateCards();
    }

    if (prevBtn) prevBtn.addEventListener('click', showPrev);
    if (nextBtn) nextBtn.addEventListener('click', showNext);
}

document.addEventListener('DOMContentLoaded', initializeEducationSlider);

// Typing Effect
document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector(".typedText")) {
        var typingEffect = new Typed(".typedText", {
            strings: ["Backend Developer", "Frontend Developer", "Fullstack Developer"],
            loop: true,
            typeSpeed: 100,
            backSpeed: 89,
            backDelay: 2000
        });
    }
});

// Scroll Reveal Animations
document.addEventListener('DOMContentLoaded', () => {
    console.log('Initializing ScrollReveal...');

    const sr = ScrollReveal({
        origin: 'top',
        distance: '60px',
        duration: 1000,
        reset: false
    });

    sr.reveal('.featured-text', { origin: 'left' });
    sr.reveal('.featured-name', { delay: 100 });
    sr.reveal('.featured-text-info', { delay: 200 });
    sr.reveal('.featured-text-btn', { delay: 200 });
    sr.reveal('.social-icons', { delay: 200 });
    sr.reveal('.featured-image', { origin: 'right', delay: 300 });

    sr.reveal('.top-header', {});
    sr.reveal('.about-content-side', { origin: 'left', delay: 100 });
    sr.reveal('.about-image-wrapper', { origin: 'right', delay: 100 });
    sr.reveal('.education-slider', {});
    sr.reveal('.project-card', { interval: 200 });
    sr.reveal('.skills-container', { interval: 200 });
    sr.reveal('.contact-info', { origin: 'left', delay: 100 });
    sr.reveal('.form-control', { origin: 'right', delay: 100 });

    console.log('ScrollReveal initialized');
});