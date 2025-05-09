const currentYear = document.querySelector("#currentyear");
const lastMod = document.querySelector("#lastModified");

const currentDate = new Date();

currentYear.innerHTML = `${currentDate.getFullYear()}`;
lastMod.innerHTML = `Last Modification: ${document.lastModified}`;