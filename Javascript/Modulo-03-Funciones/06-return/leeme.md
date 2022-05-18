# Return

Cuando se llama a una función, la computadora ejecutará el código de la función. Por defecto, ese valor resultante no está definido.

~~~

function rectangleArea(width, height) {
  let area = width * height;
}

~~~

console.log(rectangleArea(5, 7)) // Imprime undefined

En el ejemplo de código, declaramos nuestra función para calcular el área de un rectangulo con dos parametros: ancho y alto. Luego, se llama la funcion con los argumentos 5 y 7. Pero cuando fuimos a imprimir los resultados, obtuvimos undefined. ¿Escribimos mal nuestra función? ¡No! De hecho, la función funcionó bien y la computadora calculó el área como 35, pero no la capturamos. Entonces, ¿cómo podemos hacer eso? Con la palabra clave return!

Usamos la palabra return para poder sacar informacion necesario de una funcion que estemos llamando. Usamos la palabra clave return seguido del valor que deseamos devolver o sacar de la funcion. Como vimos anteriormente, si se omite esto, se devuelve undefined en su lugar.

Cuando se usa una declaración return en el cuerpo de una función, la ejecución de la función se detiene y el código que le sigue no se ejecutará.

La palabra clave return es poderosa porque permite que las funciones produzcan una salida. Luego podemos guardar la salida en una variable para su uso posterior.

## Ejercicios

### 1

Imagínese si necesitáramos pedir monitores para todos en una oficina y esta oficina estuviera convenientemente dispuesta en forma de cuadrícula. ¡Podríamos usar una función para ayudarnos a calcular la cantidad de monitores necesarios!

Declare una función monitorCount() que tenga dos parámetros. El primer parámetro son filas(rows) y el segundo parámetro son columnas(columns).

### 2

Calculemos el número de monitores multiplicando rows por columns y luego devolvamos el resultado.

En el cuerpo de la función que acaba de escribir, use la palabra clave return para devolver filas * columnas.

### 3

Ahora que la función está declarada, podemos calcular la cantidad de monitores necesarios. Digamos que la oficina tiene 5 filas y 4 columnas.

Declare una variable llamada numOfMonitors usando la palabra clave const y asigne a numOfMonitors el valor de llamar monitorCount() con los argumentos 5 y 4.

### 4

Para verificar que la función funcionó correctamente, imprimá numOfMonitors en la consola.