const currentYear = document.querySelector("#currentyear");
const pageId = document.querySelector('meta[name="page-id"]')?.content;
const links = document.querySelectorAll('#nav-list li');
const hamburger = document.querySelector('#ham-menu');
const menu = document.querySelector('#nav-menu');
const header = document.querySelector('header');
const navList = document.querySelector('#nav-list');

const currentDate = new Date();

currentYear.innerHTML = `${currentDate.getFullYear()}`;

links.forEach(link => {
    const anchor = link.querySelector('a');
    if (anchor && anchor.getAttribute('id') === pageId) {
        anchor.classList.add('aesthetic');
    }
});

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    menu.classList.toggle('hide');
    header.classList.toggle('hide');
    navList.classList.toggle('hide');
});

