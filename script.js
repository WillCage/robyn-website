/* ============================================
   Robyn Pinks Biokineticist — JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {

    // --- Mobile navigation toggle ---
    const navToggle = document.querySelector('.nav__toggle');
    const navMenu = document.querySelector('.nav__menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function () {
            const isOpen = navMenu.classList.toggle('is-open');
            navToggle.setAttribute('aria-expanded', String(isOpen));
        });

        // Close menu when a nav link is clicked
        navMenu.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                navMenu.classList.remove('is-open');
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function (e) {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('is-open');
                navToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // --- Current year in footer ---
    const yearEl = document.getElementById('year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    // --- Contact form: build mailto body from form data ---
    var form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            var name = document.getElementById('name').value.trim();
            var email = document.getElementById('email').value.trim();
            var phone = document.getElementById('phone').value.trim();
            var service = document.getElementById('service').value;
            var message = document.getElementById('message').value.trim();

            if (!name || !email || !message) {
                alert('Please fill in all required fields.');
                return;
            }

            var subject = encodeURIComponent('Booking Enquiry — Robyn Pinks Website');
            var body = [
                'Name: ' + name,
                'Email: ' + email,
                'Phone: ' + (phone || 'Not provided'),
                'Service: ' + (service || 'Not specified'),
                '',
                message
            ].join('\n');

            window.location.href = 'mailto:mrkpinks@gmail.com?subject=' + subject + '&body=' + encodeURIComponent(body);
        });
    }

    // --- Close mobile nav on Escape ---
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && navMenu && navMenu.classList.contains('is-open')) {
            navMenu.classList.remove('is-open');
            navToggle.setAttribute('aria-expanded', 'false');
            navToggle.focus();
        }
    });

    // --- Header scroll effect ---
    var header = document.querySelector('.site-header');
    var lastScroll = 0;

    window.addEventListener('scroll', function () {
        var currentScroll = window.pageYOffset;

        if (currentScroll > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    }, { passive: true });

    // --- Scroll-triggered fade-in animations ---
    var fadeElements = document.querySelectorAll(
        '.credential, .service-card, .contact__info-card, .contact__form, .workplace__visual, .about__decorative, .quote-section__quote, .cta-banner__content'
    );

    if ('IntersectionObserver' in window) {
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        });

        fadeElements.forEach(function (el, index) {
            el.classList.add('fade-in');
            // Stagger the animations slightly
            el.style.transitionDelay = (index % 4) * 0.1 + 's';
            observer.observe(el);
        });
    } else {
        // Fallback: show everything immediately
        fadeElements.forEach(function (el) {
            el.classList.add('visible');
        });
    }

    // --- Smooth scroll polyfill for anchor links ---
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            var targetId = this.getAttribute('href');
            if (targetId === '#') return;

            var target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                var headerHeight = document.querySelector('.site-header').offsetHeight;
                var targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

});
