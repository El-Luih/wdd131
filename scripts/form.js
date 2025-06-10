const selectElement = document.querySelector("#product-selection");
const radioGroup = document.querySelector("#radio-group");
const radioButton = document.querySelectorAll('input[type="radio"]');
const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

let options = products.map(value => {
    return `<option value="${value.id}">${value.name}</option>`
});

selectElement.innerHTML += options.join('');

radioButton.forEach(function (radioButton) {
    radioButton.addEventListener('click', function () {
        radioGroup.classList.remove('required');
        radioGroup.classList.add('valid');
    }, { once: true });
});
