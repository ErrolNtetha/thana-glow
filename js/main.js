const menuBtns = document.querySelectorAll('.menu-btn');
const sideMenuPanels = document.querySelectorAll('.side-menu-panel');

menuBtns.forEach((menuBtn, index) => {
    menuBtn.addEventListener('click', () => {
        sideMenuPanels[index].classList.toggle('open');
        menuBtn.classList.toggle('fa-bars');
        menuBtn.classList.toggle('fa-times');
    });
});

document.addEventListener('click', (e) => {
  sideMenuPanels.forEach((sideMenuPanel, index) => {
    const menuBtn = menuBtns[index];
    if (sideMenuPanel.classList.contains('open') && !sideMenuPanel.contains(e.target) && !menuBtn.contains(e.target)) {
      sideMenuPanel.classList.remove('open');
      menuBtn.classList.add('fa-bars');
      menuBtn.classList.remove('fa-times');
    }
  });
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
