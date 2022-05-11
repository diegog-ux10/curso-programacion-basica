//Forecast today
const kelvin = 200;

//The value of Celsius
let celsius = kelvin - 273;

//The value of fahrenheit
let fahrenheit = celsius * (9/5) + 32;

//Eliminated the decimal to the result
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// Convert to Newton
let newton = celsius * (33 / 100);
 
// Round down
newton = Math.floor(newton);
 
console.log(`The temperature is ${newton} degrees Newton.`);