// Mobile nav toggle
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  navToggle.classList.toggle("active");
});

// Close mobile nav when a link is clicked
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    navToggle.classList.remove("active");
  });
});

// Scroll fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, observerOptions);

// Add fade-in class to sections and cards
document
  .querySelectorAll(".content-card, .timeline-item, .grid-card, .section-title")
  .forEach((el) => {
    el.classList.add("fade-in");
    observer.observe(el);
  });

// Nav background on scroll
const nav = document.getElementById("nav");
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > 100) {
    nav.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.05)";
  } else {
    nav.style.boxShadow = "none";
  }

  lastScroll = currentScroll;
});
