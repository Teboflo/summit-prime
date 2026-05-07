const answerBoton = document.querySelectorAll('.acordeon');
const lineSepa = document.querySelector('.separate-ways-ooh');
const baseHeight = 500;
const growthPerItem = 75;

answerBoton.forEach(boton => {
    boton.addEventListener('click', function () {
        boton.classList.toggle('is-open');
        const answer = this.nextElementSibling;

        if (answer.classList.contains('more')) {
            answer.classList.remove('more');
        } else {
            answer.classList.add('more');
        }

        if (window.innerWidth > 768) {
            const openedCount = document.querySelectorAll('.more').length;
            const newHeight = baseHeight + (openedCount * growthPerItem);
            lineSepa.style.height = `${newHeight}px`;
        }
    });
});
