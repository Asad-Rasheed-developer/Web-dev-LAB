// // Custom JavaScript for BeTuning Website

// document.addEventListener("DOMContentLoaded", function () {
//   // Remove loading screen
//   const loading = document.querySelector(".loading");
//   if (loading) {
//     loading.style.display = "none";
//   }

//   // Smooth scrolling for navigation links
//   const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
//   navLinks.forEach((link) => {
//     link.addEventListener("click", function (e) {
//       e.preventDefault();
//       const targetId = this.getAttribute("href");
//       const targetSection = document.querySelector(targetId);

//       if (targetSection) {
//         const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
//         window.scrollTo({
//           top: offsetTop,
//           behavior: "smooth",
//         });
//       }
//     });
//   });

//   // Navbar background change on scroll
//   const navbar = document.querySelector(".navbar");
//   window.addEventListener("scroll", function () {
//     if (window.scrollY > 100) {
//       navbar.style.backgroundColor = "rgba(0, 0, 0, 0.95)";
//     } else {
//       navbar.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
//     }
//   });

//   // Fade in animation on scroll
//   const observerOptions = {
//     threshold: 0.1,
//     rootMargin: "0px 0px -50px 0px",
//   };

//   const observer = new IntersectionObserver(function (entries) {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add("visible");
//       }
//     });
//   }, observerOptions);

//   // Observe elements for fade-in animation
//   const fadeElements = document.querySelectorAll(
//     ".about-content, .portfolio-item, .contact-content, .stats-section"
//   );
//   fadeElements.forEach((el) => {
//     el.classList.add("fade-in");
//     observer.observe(el);
//   });

//   // Portfolio item hover effects
//   const portfolioItems = document.querySelectorAll(".portfolio-item");
//   portfolioItems.forEach((item) => {
//     item.addEventListener("mouseenter", function () {
//       this.style.transform = "translateY(-10px) scale(1.02)";
//     });

//     item.addEventListener("mouseleave", function () {
//       this.style.transform = "translateY(0) scale(1)";
//     });
//   });

//   // Contact form handling
//   const contactForm = document.querySelector(".contact-form form");
//   if (contactForm) {
//     contactForm.addEventListener("submit", function (e) {
//       e.preventDefault();

//       // Get form data
//       const formData = new FormData(this);
//       const name = this.querySelector('input[type="text"]').value;
//       const email = this.querySelector('input[type="email"]').value;
//       const phone = this.querySelector('input[type="tel"]').value;
//       const message = this.querySelector("textarea").value;

//       // Simple validation
//       if (!name || !email || !message) {
//         alert("Please fill in all required fields.");
//         return;
//       }

//       // Email validation
//       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//       if (!emailRegex.test(email)) {
//         alert("Please enter a valid email address.");
//         return;
//       }

//       // Simulate form submission
//       const submitBtn = this.querySelector('button[type="submit"]');
//       const originalText = submitBtn.textContent;
//       submitBtn.textContent = "Sending...";
//       submitBtn.disabled = true;

//       setTimeout(() => {
//         alert("Thank you for your message! We will get back to you soon.");
//         this.reset();
//         submitBtn.textContent = originalText;
//         submitBtn.disabled = false;
//       }, 2000);
//     });
//   }

//   // Counter animation
//   const counterNumber = document.querySelector(".counter-number");
//   if (counterNumber) {
//     const targetNumber = parseInt(counterNumber.textContent);
//     let currentNumber = 0;
//     const increment = targetNumber / 100;

//     const counterObserver = new IntersectionObserver(
//       function (entries) {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const counterInterval = setInterval(() => {
//               currentNumber += increment;
//               if (currentNumber >= targetNumber) {
//                 currentNumber = targetNumber;
//                 clearInterval(counterInterval);
//               }
//               counterNumber.textContent = Math.floor(currentNumber);
//             }, 20);
//             counterObserver.unobserve(entry.target);
//           }
//         });
//       },
//       { threshold: 0.5 }
//     );

//     counterObserver.observe(counterNumber);
//   }

//   // Mobile menu close on link click
//   const navbarCollapse = document.querySelector(".navbar-collapse");
//   const navbarToggler = document.querySelector(".navbar-toggler");

//   navLinks.forEach((link) => {
//     link.addEventListener("click", function () {
//       if (navbarCollapse.classList.contains("show")) {
//         navbarToggler.click();
//       }
//     });
//   });

//   // Parallax effect for hero section
//   const heroSection = document.querySelector(".hero-section");
//   if (heroSection) {
//     window.addEventListener("scroll", function () {
//       const scrolled = window.pageYOffset;
//       const parallax = heroSection.querySelector(".hero-slide");
//       if (parallax) {
//         const speed = scrolled * 0.5;
//         parallax.style.transform = `translateY(${speed}px)`;
//       }
//     });
//   }

//   // Add loading animation
//   function showLoading() {
//     const loadingDiv = document.createElement("div");
//     loadingDiv.className = "loading";
//     loadingDiv.innerHTML = '<div class="spinner"></div>';
//     document.body.appendChild(loadingDiv);
//   }

//   // Initialize loading animation
//   showLoading();

//   // Hide loading after page load
//   window.addEventListener("load", function () {
//     const loading = document.querySelector(".loading");
//     if (loading) {
//       setTimeout(() => {
//         loading.style.opacity = "0";
//         setTimeout(() => {
//           loading.remove();
//         }, 500);
//       }, 1000);
//     }
//   });

//   // Add smooth transitions to all elements
//   const style = document.createElement("style");
//   style.textContent = `
//         * {
//             transition: all 0.3s ease;
//         }
//     `;
//   document.head.appendChild(style);

//   // Back to top button
//   const backToTopBtn = document.createElement("button");
//   backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
//   backToTopBtn.className = "back-to-top";
//   backToTopBtn.style.cssText = `
//         position: fixed;
//         bottom: 20px;
//         right: 20px;
//         width: 50px;
//         height: 50px;
//         border-radius: 50%;
//         background: linear-gradient(135deg, #007bff, #0056b3);
//         color: white;
//         border: none;
//         cursor: pointer;
//         display: none;
//         z-index: 1000;
//         box-shadow: 0 5px 15px rgba(0, 123, 255, 0.4);
//         transition: all 0.3s ease;
//     `;

//   document.body.appendChild(backToTopBtn);

//   // Show/hide back to top button
//   window.addEventListener("scroll", function () {
//     if (window.scrollY > 300) {
//       backToTopBtn.style.display = "block";
//     } else {
//       backToTopBtn.style.display = "none";
//     }
//   });

//   // Back to top functionality
//   backToTopBtn.addEventListener("click", function () {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   });

//   // Add hover effects to buttons
//   const buttons = document.querySelectorAll(".btn");
//   buttons.forEach((btn) => {
//     btn.addEventListener("mouseenter", function () {
//       this.style.transform = "translateY(-2px)";
//     });

//     btn.addEventListener("mouseleave", function () {
//       this.style.transform = "translateY(0)";
//     });
//   });

//   // Add typing effect to hero titles
//   function typeWriter(element, text, speed = 100) {
//     let i = 0;
//     element.innerHTML = "";

//     function type() {
//       if (i < text.length) {
//         element.innerHTML += text.charAt(i);
//         i++;
//         setTimeout(type, speed);
//       }
//     }

//     type();
//   }

//   // Initialize typing effect for first hero slide
//   const firstHeroTitle = document.querySelector(".hero-content h1");
//   if (firstHeroTitle) {
//     const originalText = firstHeroTitle.textContent;
//     setTimeout(() => {
//       typeWriter(firstHeroTitle, originalText, 50);
//     }, 1000);
//   }

//   // Add scroll progress indicator
//   const progressBar = document.createElement("div");
//   progressBar.style.cssText = `
//         position: fixed;
//         top: 0;
//         left: 0;
//         width: 0%;
//         height: 3px;
//         background: linear-gradient(90deg, #007bff, #0056b3);
//         z-index: 9999;
//         transition: width 0.1s ease;
//     `;
//   document.body.appendChild(progressBar);

//   window.addEventListener("scroll", function () {
//     const scrollTop = window.pageYOffset;
//     const docHeight = document.body.scrollHeight - window.innerHeight;
//     const scrollPercent = (scrollTop / docHeight) * 100;
//     progressBar.style.width = scrollPercent + "%";
//   });

//   // Initialize carousel with Bootstrap's native auto-play
//   const heroCarousel = document.querySelector("#heroCarousel");
//   if (heroCarousel) {
//     // Bootstrap will automatically initialize the carousel with data-bs-ride="carousel"
//     // No additional JavaScript needed - Bootstrap handles auto-play natively
//   }

//   console.log("BeTuning website loaded successfully!");
// });
