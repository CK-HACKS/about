// Animated sections on scroll
function revealSections() {
  const sections = document.querySelectorAll('.animated-section');
  const trigger = window.innerHeight * 0.88;
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < trigger) {
      section.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', revealSections);
window.addEventListener('DOMContentLoaded', revealSections);

// Optionally, you can use anime.js for more advanced animations
// Example: Animate logo on load
if (window.anime) {
  anime({
    targets: '.animated-logo',
    scale: [0.8, 1.05, 1],
    rotate: [-18, 6, 0],
    duration: 1200,
    easing: 'easeInOutExpo'
  });
  anime({
    targets: '.glitch',
    opacity: [0,1],
    translateY: [-60,0],
    duration: 1700,
    easing: 'easeOutElastic(1, .8)'
  });
}