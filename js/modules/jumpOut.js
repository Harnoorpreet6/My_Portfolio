export function jumpOut() {
  const cardContainer = document.querySelector('#details-card-container');
  const detailsCards = document.querySelectorAll('.details_card');

  function togglePopOut(e) {
    const card = e.currentTarget;

    detailsCards.forEach(c => {
      if (c !== card && c.classList.contains('popped_card')) {
        c.classList.remove('popped_card');
      }
    });

    card.classList.toggle('popped_card');
  }

  detailsCards.forEach(card => card.addEventListener('click', togglePopOut));
}
