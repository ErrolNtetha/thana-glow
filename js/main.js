const menuBtn = document.getElementById('menuBtn');
const sideMenu = document.getElementById('sideMenu');

menuBtn.addEventListener('click', () => {
    sideMenu.classList.toggle('open');
});

// menuBtn.addEventListener('click', () => {
//   sideMenu.classList.toggle('open');
//   menuBtn.classList.toggle('fa-bars');
//   menuBtn.classList.toggle('fa-times');
// });

document.addEventListener('click', (e) => {
  if (!sideMenu.contains(e.target) && !menuBtn.contains(e.target)) {
    sideMenu.classList.remove('open');
    menuBtn.classList.add('fa-bars');
    menuBtn.classList.remove('fa-times');
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.fade-in-section');

  if (!sections) {
    return;
  }

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  sections.forEach(section => {
    observer.observe(section);
  });

  // Scrolling Header Logic
  const scrollingHeader = document.getElementById('scrolling-header');
  if (scrollingHeader) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 150) { // Show after scrolling 150px
        scrollingHeader.classList.add('visible');
      } else {
        scrollingHeader.classList.remove('visible');
      }
    });
  }
});
