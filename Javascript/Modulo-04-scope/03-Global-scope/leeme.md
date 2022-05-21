## Alcance global

El alcance es el contexto en el que se declaran nuestras variables. Podemos pensar que el alcance tiene relación con los bloques código en que están siendo declaradas o inicializadas, porque las variables pueden existir fuera o dentro de estos bloques.

En el caso de alcance global, las variables se declaran fuera de los bloques de código. Estas variables se denominan variables globales. Debido a que las variables globales no están vinculadas dentro de un bloque, cualquier código del programa puede acceder a ellas.

Veamos un ejemplo de alcance global:

~~~
const color = 'blue';
 
const returnSkyColor = () => {
  return color; // blue 
};
 
console.log(returnSkyColor()); // blue
~~~

Aunque la variable color se define fuera del bloque de codigo de la función, se puede acceder a ella dentro del ese bloque de codigo.

Trabajemos con variables globales para ver cómo se puede acceder a los datos desde cualquier lugar dentro de un programa.

## Ejercicios

### 1

En la parte superior de main.js, escribe tres variables globales:

1. Nombra la primera variable satellite y asígnale 'La Luna' como valor.
2. Nombra la segunda variable galaxy y asígnale 'La vía láctea' como valor.
3. Nombra la tercera variable stars y asígnale 'La Estrella del Norte' como valor.

### 2

Debajo de las variables creadas en el paso anterior, escribe una función llamada callMyNightSky. Dentro de la función, incluya una declaración de retorno como esta:

'El Cielo Nocturno: ' + satellite + ', ' + stars + ', y ' + galaxy;

### 3

Debajo de la función callMyNightSky(), use console.log() para registrar el valor de callMyNightSky() en la consola.

Notará que el bloque de la función callMyNightSky() puede acceder a las variables globales libremente ya que las variables están disponibles para todas las líneas de código en el archivo.