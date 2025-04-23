let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.querySelectorAll(".slide");
    let dots = document.querySelectorAll(".dot");
    
    if (!slides.length) return; // Eğer slayt yoksa fonksiyondan çık
    
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    if (dots.length > 0) {
        dots[slideIndex-1].className += " active";
    }
}

// Mobil Menü Toggle
document.addEventListener('DOMContentLoaded', function() {
    // Form gönderme işlemi
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Mesajınız gönderildi! En kısa sürede size dönüş yapacağız.');
            contactForm.reset();
        });
    }
    
    // Blog filtreleme
    const categoryFilters = document.querySelectorAll('.category-filter');
    if (categoryFilters.length > 0) {
        categoryFilters.forEach(filter => {
            filter.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Aktif filtre sınıfını kaldır
                document.querySelector('.category-filter.active').classList.remove('active');
                
                // Tıklanan filtreye aktif sınıfı ekle
                this.classList.add('active');
                
                // Gerçek bir uygulamada burada AJAX ile filtreleme yapılabilir
                // Şimdilik sadece UI güncellemesi yapıyoruz
                const filterValue = this.textContent;
                console.log(`Filtreleniyor: ${filterValue}`);
            });
        });
    }
    
    // Arama işlevi
    const searchBox = document.querySelector('.search-box');
    if (searchBox) {
        const searchButton = searchBox.querySelector('button');
        searchButton.addEventListener('click', function() {
            const searchValue = searchBox.querySelector('input').value;
            if (searchValue.trim() !== '') {
                console.log(`Aranıyor: ${searchValue}`);
                // Gerçek bir uygulamada burada arama işlevi yer alacak
                alert(`"${searchValue}" için arama sonuçları getiriliyor...`);
            }
        });
        
        // Enter tuşu ile arama
        searchBox.querySelector('input').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchButton.click();
            }
        });
    }
    
    // Sayfalama işlevi
    const pageLinks = document.querySelectorAll('.page-link, .page-nav');
    if (pageLinks.length > 0) {
        pageLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Aktif sayfa sınıfını kaldır
                const activePage = document.querySelector('.page-link.active');
                if (activePage) {
                    activePage.classList.remove('active');
                }
                
                // Tıklanan sayfaya aktif sınıfı ekle (sadece sayfa bağlantıları için)
                if (this.classList.contains('page-link')) {
                    this.classList.add('active');
                }
                
                // Gerçek bir uygulamada burada AJAX ile sayfa değişimi yapılabilir
                console.log(`Sayfa değişiyor...`);
            });
        });
    }
});

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
  const navbarToggle = document.getElementById('navbar-toggle');
  const navbarMenu = document.getElementById('navbar-menu');
  
  if (navbarToggle && navbarMenu) {
    navbarToggle.addEventListener('click', function() {
      navbarMenu.classList.toggle('active');
      navbarToggle.setAttribute(
        'aria-expanded', 
        navbarToggle.getAttribute('aria-expanded') === 'true' ? 'false' : 'true'
      );
    });
  }
  
  // Close menu when clicking outside
  document.addEventListener('click', function(event) {
    if (navbarMenu && navbarMenu.classList.contains('active')) {
      if (!navbarMenu.contains(event.target) && !navbarToggle.contains(event.target)) {
        navbarMenu.classList.remove('active');
        navbarToggle.setAttribute('aria-expanded', 'false');
      }
    }
  });
  
  // Close menu when window is resized to desktop
  window.addEventListener('resize', function() {
    if (window.innerWidth > 768 && navbarMenu && navbarMenu.classList.contains('active')) {
      navbarMenu.classList.remove('active');
      navbarToggle.setAttribute('aria-expanded', 'false');
    }
  });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    if (this.getAttribute('href') !== '#') {
      e.preventDefault();
      
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80, // Account for fixed header
          behavior: 'smooth'
        });
      }
    }
  });
});

// Add animation to elements when they come into view
const animateOnScroll = function() {
  const elements = document.querySelectorAll('.card, .service-icon, .testimonial');
  
  elements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;
    
    if (elementTop < window.innerHeight - elementVisible) {
      element.classList.add('animate-fade-in');
    }
  });
};

// Add animation class
document.addEventListener('DOMContentLoaded', function() {
  // Add the CSS for animation
  const style = document.createElement('style');
  style.textContent = `
    @keyframes fadeIn {
      0% { opacity: 0; transform: translateY(20px); }
      100% { opacity: 1; transform: translateY(0); }
    }
    
    .animate-fade-in {
      animation: fadeIn 0.6s ease-out forwards;
    }
    
    .card, .service-icon, .testimonial {
      opacity: 0;
    }
  `;
  document.head.appendChild(style);
  
  // Run once on load
  animateOnScroll();
  
  // Run on scroll
  window.addEventListener('scroll', animateOnScroll);
});

// AMA Mühendislik - Apple Inspired JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href') !== '#') {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Subtle fade-in animations for content sections
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        });
    }, observerOptions);
    
    document.querySelectorAll('.service-card, .blog-card, .card, section').forEach(el => {
        el.classList.add('fade-in');
        appearOnScroll.observe(el);
    });
    
    // Subtle parallax effect for header
    if (document.querySelector('.page-header')) {
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            const header = document.querySelector('.page-header');
            const headerContent = header.querySelector('h1, p');
            
            if (headerContent) {
                headerContent.style.transform = `translateY(${scrolled * 0.1}px)`;
                headerContent.style.opacity = 1 - (scrolled * 0.003);
            }
        });
    }
    
    // Image loading animation
    document.querySelectorAll('img').forEach(img => {
        img.classList.add('image-fade');
        
        img.addEventListener('load', () => {
            img.classList.add('loaded');
        });
        
        if (img.complete) {
            img.classList.add('loaded');
        }
    });
    
    // Hero section text reveal animation
    if (document.querySelector('.hero-subtitle')) {
        const heroSubtitle = document.querySelector('.hero-subtitle');
        heroSubtitle.style.opacity = '0';
        heroSubtitle.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            heroSubtitle.style.transition = 'opacity 1s ease, transform 1s ease';
            heroSubtitle.style.opacity = '1';
            heroSubtitle.style.transform = 'translateY(0)';
        }, 500);
    }
    
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('navbar-scrolled');
            } else {
                navbar.classList.remove('navbar-scrolled');
            }
        });
    }
    
    // Button hover effect
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transition = 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease';
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transition = 'transform 0.5s cubic-bezier(0.25, 0.1, 0.25, 1), box-shadow 0.3s ease';
        });
    });
});

// Add CSS for the subtle animations
const style = document.createElement('style');
style.textContent = `
    /* Fade In Animation */
    .fade-in {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.8s ease-out, transform 0.8s cubic-bezier(0.19, 1, 0.22, 1);
    }
    
    .appear {
        opacity: 1;
        transform: translateY(0);
    }
    
    /* Image Loading Animation */
    .image-fade {
        opacity: 0;
        transition: opacity 1s ease;
        will-change: opacity;
    }
    
    .loaded {
        opacity: 1;
    }
    
    /* Navbar Scroll Effect */
    .navbar {
        transition: background-color 0.3s ease, box-shadow 0.3s ease;
    }
    
    .navbar-scrolled {
        background-color: rgba(255, 255, 255, 0.98) !important;
        box-shadow: 0 1px 20px rgba(0, 0, 0, 0.1);
    }
    
    /* Elegant Link Hover Effect */
    .nav-links a {
        transition: color 0.3s ease;
    }
    
    /* Button animations */
    .btn {
        transition: transform 0.5s cubic-bezier(0.25, 0.1, 0.25, 1), 
                   box-shadow 0.3s ease,
                   background-color 0.3s ease;
        will-change: transform;
    }
    
    /* Service Card Hover Effects */
    .service-card {
        transition: transform 0.6s cubic-bezier(0.19, 1, 0.22, 1),
                   box-shadow 0.5s ease;
    }
    
    .service-card .service-icon {
        transition: background-color 0.4s ease;
    }
    
    .service-card .service-icon i {
        transition: color 0.4s ease;
    }
`;

document.head.appendChild(style);
