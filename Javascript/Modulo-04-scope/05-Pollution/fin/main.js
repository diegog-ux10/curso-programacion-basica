const satellite = 'La luna';
const galaxy = 'La vía láctea';
const stars = 'La Estrella del Norte';

function callMyNightSky () {
    stars = 'Sirius';
    return 'El Cielo Nocturno: ' + satellite + ', ' + stars + ', y ' + galaxy;
}

console.log (callMyNightSky());
console.log (stars);