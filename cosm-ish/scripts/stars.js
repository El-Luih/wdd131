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

document.addEventListener('DOMContentLoaded', () => {
    const catalogSection = document.getElementById('star-cards');

    function getUnavailableStars() {
    return JSON.parse(localStorage.getItem('unavailableStars') || '[]');
    }

    function getUnique(arr, key) {
        return [...new Set(arr.map(item => item[key]))];
    }


    function populateFilters(stars) {
        const nameValue = document.getElementById('filter-name').value;
        const typeValue = document.getElementById('filter-type').value;
        const constValue = document.getElementById('filter-constellation').value;


        const nameSelect = document.getElementById('filter-name');
        nameSelect.innerHTML = `<option value="">All</option>` +
            getUnique(stars, 'starName').map(n => `<option value="${n}">${n}</option>`).join('');
        nameSelect.value = nameValue;


        const typeSelect = document.getElementById('filter-type');
        typeSelect.innerHTML = `<option value="">All</option>` +
            getUnique(stars, 'type').map(t => `<option value="${t}">${t}</option>`).join('');
        typeSelect.value = typeValue;


        const constSelect = document.getElementById('filter-constellation');
        constSelect.innerHTML = `<option value="">All</option>` +
            getUnique(stars, 'constelation').map(c => `<option value="${c}">${c}</option>`).join('');
        constSelect.value = constValue;
    }
    function getFilters() {
        return {
            name: document.getElementById('filter-name').value,
            type: document.getElementById('filter-type').value,
            distance: document.getElementById('filter-distance').value,
            constellation: document.getElementById('filter-constellation').value,
            age: document.getElementById('filter-age').value,
            mass: document.getElementById('filter-mass').value,
            availability: document.getElementById('filter-availability').value
        };
    }

    function filterStars(stars, filters) {
        return stars.filter(star => {
            if (filters.name && star.starName !== filters.name) return false;
            if (filters.type && star.type !== filters.type) return false;
            if (filters.distance === "far" && !(star.distance > 10)) return false;
            if (filters.distance === "very-far" && !(star.distance > 1000)) return false;
            if (filters.distance === "cant-see" && !(star.distance > 100000)) return false;
            if (filters.constellation && star.constelation !== filters.constellation) return false;
            if (filters.age === "young" && !(star.age < 1)) return false;
            if (filters.age === "old" && !(star.age > 5)) return false;
            if (filters.age === "extremely-old" && !(star.age > 10)) return false;
            if (filters.mass === "small" && !(star.mass < 1)) return false;
            if (filters.mass === "average" && !(star.mass > 1)) return false;
            if (filters.mass === "big" && !(star.mass > 10)) return false;
            if (filters.mass === "super-big" && !(star.mass > 50)) return false;
            if (filters.mass === "hyper-giants" && !(star.mass > 100)) return false;
            if (filters.availability === "available" && !star.availability) return false;
            if (getUnavailableStars().includes(star.starName)) return false;
            return true;
            
        });
    }

    function renderCards(stars) {
        if (!catalogSection) return;
        if (!stars.length) {
            catalogSection.innerHTML = `<p>No stars match your filters.</p>`;
            return;
        }
        catalogSection.innerHTML = stars.map(star => `
            <article class="star-card">
                <h2 class="card-header">${star.starName}</h2>
                <div class="card-content">
                    <p>
                        Constellation: ${star.constelation}<br>
                        Type: ${star.type}<br>
                        Distance: ${star.distance} LY<br>
                        Age: ${star.age} Myr<br>
                        Mass: ${star.mass} M☉<br>
                        <strong class="${star.availability ? '' : 'sold-out'}">
                            ${star.availability ? "For Sale" : "SOLD OUT"}
                        </strong>
                    </p>
                </div>
                <img class="card-image" src="images/${star.imageFile}" alt="${star.starName}" loading="lazy"/>
                ${star.availability ? `<a href="contact-sale.html?star=${encodeURIComponent(star.starName)}" class="button">Get It!</a>` : ""}
            </article>
        `).join('');
    }

    function updateCatalog() {
        const filters = getFilters();
        const filteredStars = filterStars(stars, filters);
        populateFilters(stars);
        renderCards(filteredStars);
    }

    populateFilters(stars);
    renderCards(stars);

    [
        'filter-name',
        'filter-type',
        'filter-distance',
        'filter-constellation',
        'filter-age',
        'filter-mass',
        'filter-availability'
    ].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.addEventListener('change', updateCatalog);
    });
});