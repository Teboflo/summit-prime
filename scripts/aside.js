const menu = document.querySelector('.menu-desplegable');
const openButton = document.querySelector('.despliega-menu'), closeButton = document.querySelector('.close');

openButton.addEventListener('click', () => {
    menu.style.display = 'flex';
});

closeButton.addEventListener('click', () => {
    menu.style.display = 'none';
});