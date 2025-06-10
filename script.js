let currentSlide = 0;

function changeSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    if (slides.length === 0) return;
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
    const modalBg = document.getElementById('modal');
    const modal = modalBg.querySelector('.modal');
    const slides = document.querySelectorAll('.slide');

    modalBg.addEventListener('click', (e) => {
    if (!modal.contains(e.target)) {
        modalBg.style.display = 'none';
        slides[currentSlide].classList.remove('active');
        currentSlide = 0;
        slides[currentSlide].classList.add('active');
    }
    });
});