if (!localStorage.getItem('stars')) {
    localStorage.setItem('stars', JSON.stringify([
    {
        starName: "R136a1",
        constelation: "Dorado",
        distance: 163000,
        type: "Blue Hypergiant",
        age: 1.02,
        mass: 291,
        availability: true,
        imageFile: "r136a1.jpg",
    },
    {
        starName: "Betelgeuse",
        constelation: "Orion",
        distance: 642.5,
        type: "Red Supergiant",
        age: 8.0,
        mass: 20,
        availability: true,
        imageFile: "betelgeuse.jpg",
    },
    {
        starName: "Sirius A",
        constelation: "Canis Major",
        distance: 8.6,
        type: "Main Sequence",
        age: 0.242,
        mass: 2.02,
        availability: true,
        imageFile: "sirius_a.jpg",
    },
    {
        starName: "VY Canis Majoris",
        constelation: "Canis Major",
        distance: 3900,
        type: "Red Hypergiant",
        age: 8.2,
        mass: 17,
        availability: true,
        imageFile: "vy_canis_majoris.jpg",
    },
    {
        starName: "UY Scuti",
        constelation: "Scutum",
        distance: 9500,
        type: "Red Supergiant",
        age: 10,
        mass: 7,
        availability: true,
        imageFile: "uy_scuti.jpg",
    },
    {
        starName: "Rigel",
        constelation: "Orion",
        distance: 860,
        type: "Blue Supergiant",
        age: 8,
        mass: 21,
        availability: true,
        imageFile: "rigel.jpg",
    },
    {
        starName: "Aldebaran",
        constelation: "Taurus",
        distance: 65,
        type: "Red Giant",
        age: 6.6,
        mass: 0.86,
        availability: true,
        imageFile: "aldebaran.jpg",
    },
    {
        starName: "Antares",
        constelation: "Scorpius",
        distance: 550,
        type: "Red Supergiant",
        age: 12,
        mass: 12,
        availability: true,
        imageFile: "antares.jpg",
    },
    {
        starName: "Polaris",
        constelation: "Ursa Minor",
        distance: 433,
        type: "Supergiant",
        age: 70,
        mass: 5.4,
        availability: true,
        imageFile: "polaris.jpg",
    },
    {
        starName: "Deneb",
        constelation: "Cygnus",
        distance: 2600,
        type: "Blue-White Supergiant",
        age: 10,
        mass: 19,
        availability: true,
        imageFile: "deneb.jpg",
    },
    {
        starName: "Arcturus",
        constelation: "Boötes",
        distance: 36.7,
        type: "Red Giant",
        age: 7.1,
        mass: 0.88,
        availability: true,
        imageFile: "arcturus.jpg",
    },
    {
        starName: "Vega",
        constelation: "Lyra",
        distance: 25,
        type: "Main Sequence",
        age: 0.455,
        mass: 2.1,
        availability: true,
        imageFile: "vega.jpg",
    },
    {
        starName: "Altair",
        constelation: "Aquila",
        distance: 16.7,
        type: "Main Sequence",
        age: 1.2,
        mass: 0.99,
        availability: true,
        imageFile: "altair.jpg",
    },
    {
        starName: "Procyon",
        constelation: "Canis Minor",
        distance: 11.46,
        type: "Main Sequence",
        age: 1.87,
        mass: 1.5,
        availability: true,
        imageFile: "procyon.jpg",
    },
    {
        starName: "Capella",
        constelation: "Auriga",
        distance: 42.2,
        type: "Giant",
        age: 0.59,
        mass: 2.6,
        availability: true,
        imageFile: "capella.jpg",
    },
    {
        starName: "Spica",
        constelation: "Virgo",
        distance: 250,
        type: "Blue Giant",
        age: 12.5,
        mass: 10.25,
        availability: true,
        imageFile: "spica.jpg",
    },
    {
        starName: "Fomalhaut",
        constelation: "Piscis Austrinus",
        distance: 25.1,
        type: "Main Sequence",
        age: 0.44,
        mass: 1.92,
        availability: true,
        imageFile: "fomalhaut.jpg",
    },
    {
        starName: "Mimosa",
        constelation: "Crux",
        distance: 350,
        type: "Blue Giant",
        age: 11,
        mass: 16,
        availability: true,
        imageFile: "mimosa.jpg",
    },
    {
        starName: "Alnilam",
        constelation: "Orion",
        distance: 2000,
        type: "Blue Supergiant",
        age: 5.7,
        mass: 40,
        availability: true,
        imageFile: "alnilam.jpg",
    },
    {
        starName: "Canopus",
        constelation: "Carina",
        distance: 310,
        type: "Supergiant",
        age: 10,
        mass: 8.0,
        availability: true,
        imageFile: "canopus.jpg",
    }
    ]));
}
const stars = JSON.parse(localStorage.getItem('stars'));


function getUnavailableStars() {
    return JSON.parse(localStorage.getItem('unavailableStars') || '[]');
}


function setUnavailableStars(arr) {
    localStorage.setItem('unavailableStars', JSON.stringify(arr));
}

document.addEventListener('DOMContentLoaded', () => {
    const starSelect = document.getElementById('star-select');
    const form = document.getElementById('contact-sale-form');


    function populateStarSelect() {
        const unavailable = getUnavailableStars();
        starSelect.innerHTML = `<option value="">Select a star...</option>`;
        stars.forEach(star => {
            if (star.availability && !unavailable.includes(star.starName)) {
                starSelect.innerHTML += `<option value="${star.starName}">${star.starName}</option>`;
            }
        });
    }


    function autofillStar() {
        const params = new URLSearchParams(window.location.search);
        const starName = params.get('star');
        if (starName) {
            starSelect.value = starName;
        }
    }


    form.addEventListener('submit', function(e) {
        const selectedStar = starSelect.value;
        if (selectedStar) {
            let unavailable = getUnavailableStars();
            if (!unavailable.includes(selectedStar)) {
                unavailable.push(selectedStar);
                setUnavailableStars(unavailable);
            }
            const idx = stars.findIndex(s => s.starName === selectedStar);
            if (idx !== -1) {
                stars[idx].availability = false;
                localStorage.setItem('stars', JSON.stringify(stars));
        }
        }
    });

    populateStarSelect();
    autofillStar();
});