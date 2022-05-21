# Bloques y Alcance

Antes de hablar más sobre el alcance, primero debemos hablar sobre los bloques.

Hemos visto bloques codigo ​​antes en funciones y sentencias if. Un bloque código es el código que se encuentra dentro de un conjunto de llaves {}. Los bloques nos ayudan a agrupar una o más declaraciones y sirven como un marcador estructural importante para nuestro código.

Un bloque de código podría ser una función, como esta:

~~~

const logSkyColor = () => {
  let color = 'blue'; 
  console.log(color); // blue 
}

~~~

Observa que el cuerpo de la función es en realidad un bloque de código.

Observa el bloque en una sentencia if:

~~~

if (dusk) {
  let color = 'pink';
  console.log(color); // pink
}
~~~

En los próximos ejercicios, veremos cómo los bloques de código definen el alcance de las variables.

## Ejercicios

### 1

En la parte superior de main.js, declare una variable const, denominada city igual a 'Nueva York'.

### 2

Debajo de la variable de la city, escribe una función llamada logCitySkyline.

### 3

Dentro del cuerpo de la función de logCitySkyline(), escriba otra variable usando let  y llamala skyscraper y establézcala igual a 'Empire State'.

### 4

Dentro de la función,  retorne el siguiente string:

'Las estrellas sobre el ' + skyscraper + ' en ' + city;

### 5

Debajo de la función logCitySkyline(), use console.log() para imprimier logCitySkyline() en la consola.

Notarás que la función logCitySkyline() puede acceder a ambas variables sin ningún problema.