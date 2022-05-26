## Accediendo a Elementos

Cada elemento de un Array tiene una posición numerada conocida como su índice. Podemos acceder a elementos individuales usando su índice, que es similar a hacer referencia a un elemento en una lista según la posición del elemento.

Los Arrays en JavaScript están indexadas desde cero, lo que significa que las posiciones comienzan a contar desde 0 en lugar de desde 1. Por lo tanto, el primer elemento de un Array estará en la posición 0. Veamos cómo podemos acceder a un elemento de un Array.

~~~

let cities = ['New York', 'Beijing', 'Paris']

console.log(cities[0])

~~~

- cities es un Array que tiene tres elementos.
- Estamos usando corchetes [] con el índice después del nombre de el array para acceder al elemento.
- cities[0] accederá al elemento en el índice 0 en el array cities.

También puede acceder a caracteres individuales en una cadena de caracteres usando corchetes y el índice. Por ejemplo, puedes escribir:

~~~

const hola = 'Hola Mundo';
consola.log(hola[6]);

// Salida: M

~~~

La consola mostrará M ya que es el carácter que está en el índice 6.

## Ejercicios

### 1

Los elementos individuales en arrays también se pueden almacenar en variables.

Cree una variable denominada listItem y establézcala igual que el primer elemento del array famososfamousSayings utilizando corchetes ([]).

Luego use console.log() para imprimir la variable listItem en la consola.