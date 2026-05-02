/**
 * =================================================================
 * VIP Smart Gateway - Main JavaScript Module
 * Annaba Digital Portal
 * Professional Build 2026
 * =================================================================
 */

// ========== MODULE: ICONS & INITIALIZATION ==========

/**
 * Initialize all Lucide icons on page load
 */
function initializeIcons() {
    lucide.createIcons();
}

// ========== MODULE: HEADER GLASSMORPHISM ==========

/**
 * Handle header glassmorphic effect on scroll
 */
function initializeHeaderScroll() {
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            header.classList.add('is-scrolled');
        } else {
            header.classList.remove('is-scrolled');
        }
    });
}

// ========== MODULE: MOBILE MENU TOGGLE ==========

/**
 * Setup mobile menu toggle functionality
 */
function initializeMobileMenu() {
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    let isMenuOpen = false;

    menuBtn.addEventListener('click', () => {
        isMenuOpen = !isMenuOpen;
        
        if(isMenuOpen) {
            mobileMenu.classList.remove('max-h-0', 'opacity-0');
            mobileMenu.classList.add('max-h-96', 'opacity-100');
            menuBtn.innerHTML = '<i data-lucide="x" class="w-6 h-6"></i>';
        } else {
            mobileMenu.classList.add('max-h-0', 'opacity-0');
            mobileMenu.classList.remove('max-h-96', 'opacity-100');
            menuBtn.innerHTML = '<i data-lucide="menu" class="w-6 h-6"></i>';
        }
        
        lucide.createIcons();
    });
}

// ========== MODULE: BENTO CARD SPOTLIGHT ==========

/**
 * Create magic mouse spotlight effect on bento cards
 * Follows mouse position and creates a radial glow
 */
function initializeBentoSpotlight() {
    const bentoGrid = document.getElementById("bento-grid");
    const cards = document.querySelectorAll(".bento-card");

    if (!bentoGrid) return;

    bentoGrid.onmousemove = e => {
        for(const card of cards) {
            const rect = card.getBoundingClientRect(),
                  x = e.clientX - rect.left,
                  y = e.clientY - rect.top;
            card.style.setProperty("--mouse-x", `${x}px`);
            card.style.setProperty("--mouse-y", `${y}px`);
        }
    };
}

// ========== MODULE: SCROLL REVEAL ANIMATIONS ==========

/**
 * Initialize Intersection Observer for scroll-triggered animations
 * Adds 'in-view' class to trigger CSS transitions
 */
function initializeScrollReveal() {
    const observerOptions = { 
        threshold: 0.15, 
        rootMargin: "0px 0px -50px 0px" 
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal-up').forEach(el => observer.observe(el));
}

// ========== MODULE: FORM HANDLERS ==========

/**
 * Handle idea form submission with SweetAlert2
 */
function initializeIdeaForm() {
    const ideaForm = document.getElementById('ideaForm');
    
    if (ideaForm) {
        ideaForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            Swal.fire({
                title: 'مبادرة رائعة!',
                text: 'تم استلام مبادرتك وسيتم عرضها للتصويت قريباً.',
                icon: 'success',
                confirmButtonText: 'ممتاز',
                confirmButtonColor: '#2563eb',
                background: '#ffffff',
                customClass: { popup: 'rounded-3xl' }
            });
            
            this.reset();
        });
    }
}

/**
 * Handle subscription form submission
 */
function initializeSubscribeForm() {
    const subscribeForm = document.getElementById('subscribeForm');
    
    if (subscribeForm) {
        subscribeForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            Swal.fire({
                title: 'تم الاشتراك',
                text: 'أهلاً بك في نشرة عنابة الذكية!',
                icon: 'success',
                confirmButtonText: 'إغلاق',
                confirmButtonColor: '#2563eb',
                customClass: { popup: 'rounded-3xl' }
            });
            
            this.reset();
        });
    }
}

// ========== APPLICATION BOOTSTRAP ==========

/**
 * Initialize all components on DOM ready
 */
document.addEventListener('DOMContentLoaded', function() {
    initializeIcons();
    initializeHeaderScroll();
    initializeMobileMenu();
    initializeBentoSpotlight();
    initializeScrollReveal();
    initializeIdeaForm();
    initializeSubscribeForm();
    
    console.log('✓ VIP Smart Gateway initialized successfully');
});
