const hamburguer = document.querySelector('#hamburguer');
const menu = document.querySelector('#nav-menu');

hamburguer.addEventListener('click', () => {
    hamburguer.classList.toggle('open');
    menu.classList.toggle('active');
});
