let userName= '';

userName ? console.log(`Hola, ${userName}!`) : console.log ('Hola! Extraño');

const userQuestion = 'Seré millonario algun dia?';

userName ? console.log(`${userName} preguntó: ${userQuestion}`) : console.log (`El usuario preguntó: ${userQuestion}`);

const randomNumber =  Math.floor(Math.random()*8);

let eightBall = '';

switch (randomNumber) {
  case 1 :
  eightBall = 'Sí';
  break;
  case 2 :
  eightBall = 'Definitivamente sí';
  break;
  case 3 :
  eightBall = 'No estoy seguro, intenta otra vez';
  break;
  case 4 :
  eightBall = 'No se puede predecir ahora';
  break;
  case 5 :
  eightBall = 'No cuentes con ello';
  break;
  case 6 :
  eightBall = 'Mis fuentes dicen que no';
  break;
  case 7 :
  eightBall = 'El pronostico no es tan bueno';
  break;
  case 8 :
  eightBall = 'Las señales apuntan a que sí';
  break;
  case 0 :
  eightBall = 'No';
  break;
}

console.log(`Hola Esfera Magica dice: ${eightBall}`);