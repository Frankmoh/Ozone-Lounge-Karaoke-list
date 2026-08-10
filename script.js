// ========================================
// MODAL FUNCTIONALITY
// ========================================

const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const modalClose = document.querySelector('.modal-close');
const imageCards = document.querySelectorAll('.image-card');

// Open modal on image click
imageCards.forEach(card => {
    card.addEventListener('click', function() {
        const img = this.querySelector('.image-wrapper img');
        modalImage.src = img.src;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    });
});

// Close modal
modalClose.addEventListener('click', function() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto'; // Re-enable scrolling
});

// Close modal when clicking outside the image
modal.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && modal.classList.contains('active')) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// ========================================
// FILTER FUNCTIONALITY
// ========================================

const filterBtns = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.image-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        
        // Add active class to clicked button
        this.classList.add('active');
        
        // Add animation to gallery items
        galleryItems.forEach(item => {
            item.style.animation = 'none';
            setTimeout(() => {
                item.style.animation = 'fadeIn 0.6s ease-out';
            }, 10);
        });
    });
});

// ========================================
// SMOOTH SCROLL
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ========================================
// LAZY LOADING (for performance)
// ========================================

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target.querySelector('img');
                // Images are already loaded, but you can add custom logic here
                observer.unobserve(entry.target);
            }
        });
    });

    imageCards.forEach(card => imageObserver.observe(card));
}

// ========================================
// THEME SWITCHER (Optional)
// ========================================

function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-theme');
    localStorage.setItem('theme', body.classList.contains('dark-theme') ? 'dark' : 'light');
}

// Load saved theme on page load
window.addEventListener('load', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }
});

// ========================================
// CONSOLE WELCOME MESSAGE
// ========================================

console.log('%c🎤 Welcome to Ozone Lounge Karaoke! 🎤', 'color: #FF6B9D; font-size: 20px; font-weight: bold;');
console.log('%cEnjoy the beautiful UI and stunning hover effects!', 'color: #4A90E2; font-size: 14px;');
