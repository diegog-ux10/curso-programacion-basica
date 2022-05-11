# Operadores logicos

Trabajar con condicionales significa que usaremos valores booleanos, verdaderos o falsos. En JavaScript, hay operadores que trabajan con valores booleanos conocidos como operadores lógicos. Podemos usar operadores lógicos para agregar una lógica más sofisticada a nuestros condicionales. Hay tres operadores lógicos:

- el operador and (&&)
- el operador or (||)
- el operador not (!)

Cuando usamos el operador &&, estamos comprobando que dos cosas son ciertas:

if (stopLight === 'green' && pedestrians === 0) {
  console.log('Go!');
} else {
  console.log('Stop');
}

Cuando se usa el operador &&, ambas condiciones deben evaluarse como verdaderas para que la condición completa se evalúe como verdadera y se ejecute. De lo contrario, si cualquiera de las condiciones es falsa, la condición  && se evaluará como falsa y se ejecutará el bloque else.

Si solo nos importa que cualquiera de las dos condiciones sea verdadera, podemos usar el operador ||:

if (day === 'Saturday' || day === 'Sunday') {
  console.log('Enjoy the weekend!');
} else {
  console.log('Do some work.');
}

Al usar el operador ||, solo una de las condiciones debe evaluarse como verdadera para que la declaración general se evalúe como verdadera. En el ejemplo de código anterior, si el día === 'Sábado' o el día === 'Domingo' se evalúa como verdadero, la condición if se evaluará como verdadero y su bloque de código se ejecutará. Si la primera condición en un || declaración se evalúa como verdadera, la segunda condición ni siquiera se comprobará. Solo si el día === 'Sábado' se evalúa como falso, se evaluará el día === 'Domingo'. 

En el código anterior, la declaración else se ejecutará solo si ambas comparaciones se evalúan como falsas.

Él !, o el operador not. invierte o niega el valor de un booleano:

let excited = true;
console.log(!excited); // Imprime false
 
let sleepy = false;
console.log(!sleepy); // Imprime true

Esencialmente, el ! El operador tomará un valor verdadero y devolverá falso, o tomará un valor falso y devolverá verdadero.

Los operadores lógicos a menudo se usan en declaraciones condicionales para agregar otra capa de lógica a nuestro código.

## Ejercicio

### 1

En main.js hay dos variables mood y tirednessLevel.

Vamos a crear una instrucción if...else que verifique si el estado de ánimo es 'somnoliento' y el nivel de cansancio (tirednessLevel) es mayor que 8.

Si ambas condiciones se evalúan como verdaderas, entonces imprime 'hora de dormir'. De lo contrario, debería imprimir 'todavía no es hora de acostarse'.