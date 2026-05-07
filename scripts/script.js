const leftButton = document.querySelector('#left-arrow-button');
const rightButton = document.querySelector('#right-arrow-button');
const slider = document.querySelector('.slide-deck');
const cards = document.querySelectorAll('.slide');

let cardCount = cards.length;
let clickCounter = 0;
let currentPosition = 0;
let originalPosition = 0;
let deslizamiento = 0;

if (window.innerWidth > 768) {
    currentPosition = 88;
    originalPosition = 88;
    deslizamiento = 25;
} else {
    currentPosition = 88;
    originalPosition = 88;
    deslizamiento = 25;
}


function updateSlider() {
    // 1. Movemos el contenedor
    slider.style.transform = `translateX(${currentPosition}%)`;

    // 2. Gestionamos el escalado de las tarjetas
    cards.forEach((card, index) => {
        // Si el índice de la tarjeta coincide con nuestro clickCounter, la resaltamos
        if (index === clickCounter) {
            card.classList.add('active');
        } else {
            card.classList.remove('active');
        }
    });
}

rightButton.addEventListener('click', () => {
    clickCounter++;
    if (clickCounter >= cardCount) {
        currentPosition = originalPosition;
        clickCounter = 0;
    } else {
        currentPosition -= deslizamiento;
    }

    updateSlider();
});

leftButton.addEventListener('click', () => {
    if (clickCounter <= 0) {
        currentPosition = originalPosition;
        clickCounter = 0;
    } else {
        clickCounter--;
        currentPosition += deslizamiento;
    }

    updateSlider();
});

// Llamada inicial para activar la primera tarjeta al cargar
updateSlider();


// PARALLAX;

const problemaSec = document.querySelector('.problema-section');
const problema = document.querySelectorAll('.problema');

window.addEventListener('scroll', () => {
    if (window.innerWidth > 1024) {
        let sectionPosition = problemaSec.offsetTop - 100;
        let scrollRelative = window.scrollY;
        if (scrollRelative >= sectionPosition) {
            let scrollActual = scrollRelative - sectionPosition;
            let moveOne = scrollActual * 0.3;
            let moveTwo = scrollActual * 0.5;
            let moveThree = scrollActual * 0.8;
            problema[0].style.transform = `translateX(${moveOne}px)`;
            problema[1].style.transform = `translateX(${moveTwo}px)`;
            problema[2].style.transform = `translateX(${moveThree}px)`;
        }
    }
});

const serviceSec = document.querySelector('.services-section');
const serCu = document.querySelectorAll('.service');

window.addEventListener('scroll', () => {
    if (window.innerWidth > 1024) {
        let topService = serviceSec.offsetTop;
        let scrollRelative = window.scrollY;
        if (scrollRelative >= topService) {
            let scrollActual = scrollRelative - topService;
            let xMoveOne = scrollActual * -0.2;
            let xMoveTwo = scrollActual * 0.2;
            serCu[0].style.transform = `translateX(${xMoveOne}px)`;
            serCu[1].style.transform = `translateX(${xMoveTwo}px)`;
        }
    }
});