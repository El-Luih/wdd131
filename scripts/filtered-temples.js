const hamburguer = document.querySelector('#hamburguer');
const menu = document.querySelector('#nav-menu');
const album = document.querySelector("#album-grid");

const oldbutton = document.querySelector("#old-filter");
const newbutton = document.querySelector("#new-filter");
const largebutton = document.querySelector("#large-filter");
const smallbutton = document.querySelector("#small-filter");
const homebutton = document.querySelector("#home-button");


hamburguer.addEventListener('click', () => {
    hamburguer.classList.toggle('open');
    menu.classList.toggle('active');
});

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...
    {
        templeName: "Halifax Nova Scotia",
        location: "Nova Scotia, Canada",
        dedicated: "1999, November, 14",
        area: 10700,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/halifax-nova-scotia-temple/halifax-nova-scotia-temple-13326.jpg"
    },
    {
        templeName: "Rome Italy",
        location: "Rome, Italy",
        dedicated: "2019, March, 10",
        area: 41010,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-2642-main.jpg"
    },
    {
        templeName: "Paris France",
        location: "Paris, France",
        dedicated: "2017, May, 21",
        area: 44175,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/paris-france-temple/paris-france-temple-2056-main.jpg"
    },
    {
        templeName: "Abidjan Ivory Coast",
        location: "Abidjan, Cote d'Ivoire",
        dedicated: "2025, May, 25",
        area: 17362,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/abidjan-ivory-coast-temple/abidjan-ivory-coast-temple-58993-main.jpg"
    },
    {
        templeName: "London England",
        location: "England, United Kingdom",
        dedicated: "1958, September, 7",
        area: 42652,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/london-england-temple/london-england-temple-4243-main.jpg"
    },
];

function createTempleCard(temple) {
    return `<article class="card">
    <h2 class="card-header">${temple.templeName}</h2>
    <div class="card-content">
    <p>Location: ${temple.location}<br>
    Dedicated: ${temple.dedicated}<br>
    Size: ${temple.area} sq ft
    </p>
    </div>
    <img class="card-image" src="${temple.imageUrl}" alt="${temple.templeName} Temple" loading="lazy"/>
    </article>`;
};



function createTempleAlbum(temples) {
    return temples.map((temple) => createTempleCard(temple)).join("");
};

function filteredAlbumNew(temples) {
    const filteredAlbumNew = temples.filter((temple) => parseInt(temple.dedicated.substring(0, 4)) > 2000);
    return createTempleAlbum(filteredAlbumNew);
};

function filteredAlbumOld(temples) {
    const filteredAlbumOld = temples.filter((temple) => parseInt(temple.dedicated.substring(0, 4)) < 1900);
    return createTempleAlbum(filteredAlbumOld);
};

function filteredAlbumLarge(temples) {
    const filteredAlbumLarge = temples.filter((temple) => temple.area > 90000);
    return createTempleAlbum(filteredAlbumLarge);
};

function filteredAlbumSmall(temples) {
    const filteredAlbumSmall = temples.filter((temple) => temple.area < 10000);
    return createTempleAlbum(filteredAlbumSmall);
};

album.innerHTML = createTempleAlbum(temples);

oldbutton.addEventListener('click', () => {
    album.innerHTML = filteredAlbumOld(temples);
});

newbutton.addEventListener('click', () => {
    album.innerHTML = filteredAlbumNew(temples);
});

smallbutton.addEventListener('click', () => {
    album.innerHTML = filteredAlbumSmall(temples);
});

largebutton.addEventListener('click', () => {
    album.innerHTML = filteredAlbumLarge(temples);
});

homebutton.addEventListener('click', () => {
    album.innerHTML = createTempleAlbum(temples);
});