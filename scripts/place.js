const temperatureCell = document.querySelector("#temp-cell");
const windSpeedCell = document.querySelector("#wind-cell");
const windChillCell = document.querySelector("#chill-cell");

let temperature = 9;
let windSpeed = 14;

temperatureCell.innerHTML = `${temperature} °C`;
windSpeedCell.innerHTML = `${windSpeed} km/h`;

if (temperature <= 10 && windSpeed > 4.8) {
    let windChill = calculatWindChill(temperature, windSpeed);
    windChillCell.innerHTML = `${windChill.toFixed(2)}°C`
} else {
    windChillCell.innerHTML = `N/A`
}

function calculatWindChill(temperature, windSpeed) {
    const windChill = 13.12 + 0.6215 * temperature - 11.37 * windSpeed ** 0.16 + 0.3965 * temperature * windSpeed ** 0.16;
    return windChill;
}