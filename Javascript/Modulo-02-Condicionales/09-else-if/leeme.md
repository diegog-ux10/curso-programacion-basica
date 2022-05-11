# Declaraciones Else If

Podemos agregar más condiciones a nuestro if...else con una declaración else if. La instrucción else if permite más de dos resultados posibles. ¡Puede agregar tantas declaraciones como desee para hacer condicionales más complejos!

La sentencia else if siempre viene después de la sentencia if y antes de la sentencia else. La instrucción else if también acepta una condición. Echemos un vistazo a la sintaxis:

let stopLight = 'yellow';
 
if (stopLight === 'red') {
  console.log('Stop!');
} else if (stopLight === 'yellow') {
  console.log('Slow down.');
} else if (stopLight === 'green') {
  console.log('Go!');
} else {
  console.log('Caution, unknown!');
}

Las declaraciones else if le permiten tener múltiples resultados posibles. Las declaraciones if/else if/else se leen de arriba a abajo, por lo que la primera condición que se evalue como verdadera de arriba a abajo es el bloque que se ejecuta.

En el ejemplo anterior, dado que stopLight === 'red' se evalúa como falso y stopLight === 'yellow' se evalúa como verdadero, se ejecuta el código dentro de la primera instrucción else if. El resto de las condiciones no se evalúan. Si ninguna de las condiciones se evaluó como verdadera, entonces se habría ejecutado el código en la instrucción else.

## Ejercicios

### 1

Vamos a crear un programa que realice un seguimiento de la forma en que cambia el entorno con las estaciones.

¡Escriba una declaración condicional para que esto suceda!

En main.js ya existe una declaración if...else. Agreguemos una declaración else if que verifique si la temporada es igual a 'invierno'.

Dentro del bloque de código de la instrucción else if, agregue un console.log() que imprima el String '¡Es invierno! Todo está cubierto de nieve.'.

### 2

Agregue otra instrucción else if que verifique si la temporada es igual a 'otoño'.

Dentro del bloque de código de la instrucción else if que acaba de crear, agregue un console.log() que imprima el String '¡Es otoño! ¡Las hojas están cayendo!'.

### 3

Agregue una declaración final else if que verifique si la temporada es igual a 'verano'.

Dentro del bloque de código de la instrucción else if que acaba de crear, agregue un console.log() que imprima el String '¡Hace sol y calor porque es verano!'