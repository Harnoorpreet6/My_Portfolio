// modules/carousel.js
export function carousel() {
  const items = document.querySelectorAll('.project-slide');
  const prevButton = document.querySelector('#prevProject');
  const nextButton = document.querySelector('#nextProject');

  if (!prevButton || !nextButton || items.length === 0) return;

  let currentIndex = 0;
  let isAnimating = false;

  function slideTo(newIndex, direction) {
    if (isAnimating || newIndex === currentIndex) return;
    isAnimating = true;

    const current = items[currentIndex];
    const next = items[newIndex];

    next.classList.add('active');
    next.style.transition = 'none';
    next.style.transform = `translateX(${direction === 'next' ? '100%' : '-100%'})`;
    next.style.opacity = '1';
    next.style.pointerEvents = 'auto';

    next.offsetHeight; // force reflow

    next.style.transition = 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out';
    next.style.transform = 'translateX(0)';

    current.style.transition = 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out';
    current.style.transform = `translateX(${direction === 'next' ? '-100%' : '100%'})`;
    current.style.opacity = '0';
    current.style.pointerEvents = 'none';

    next.addEventListener('transitionend', function onTransitionEnd() {
      current.classList.remove('active');
      current.style.transition = '';
      current.style.transform = 'translateX(100%)';
      isAnimating = false;
      next.removeEventListener('transitionend', onTransitionEnd);
    });

    currentIndex = newIndex;
  }

  prevButton.addEventListener('click', () => {
    const newIndex = (currentIndex - 1 + items.length) % items.length;
    slideTo(newIndex, 'prev');
  });

  nextButton.addEventListener('click', () => {
    const newIndex = (currentIndex + 1) % items.length;
    slideTo(newIndex, 'next');
  });
}
