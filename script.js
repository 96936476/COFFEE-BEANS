// Add click highlight effect to cards
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('click', () => {
        // Remove highlight from all
        cards.forEach(c => c.classList.remove('active'));
        // Highlight clicked card
        card.classList.add('active');
    });
});