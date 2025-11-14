// Typing effect for hero tagline
const text = "Computer Science Student | Software Developer";
let i = 0;
function typeEffect() {
  if (i < text.length) {
    document.getElementById("typing-text").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, 50);
  }
}
window.onload = typeEffect;

// Fade-in on scroll
const faders = document.querySelectorAll('.fade-in');
const options = { threshold: 0.3 };
const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    appearOnScroll.unobserve(entry.target);
  });
}, options);
faders.forEach(fader => appearOnScroll.observe(fader));

// Back to top button
const backToTop = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
  if (window.scrollY > 400) backToTop.style.display = 'block';
  else backToTop.style.display = 'none';
});
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
