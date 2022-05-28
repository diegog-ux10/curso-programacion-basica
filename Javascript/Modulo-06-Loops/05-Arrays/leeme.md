# Bucle a través de Arrays

Los bucles for son muy útiles para iterar sobre estructuras de datos. Por ejemplo, podemos usar un bucle for para realizar la misma operación en cada elemento de un arrays. Las Arrays contienen listas de datos, como nombres de clientes o información de productos. Imagina que tenemos una tienda y queremos aumentar el precio de todos los productos de nuestro catálogo. Eso podría ser una gran cantidad de código repetitivo, pero al usar un ciclo for para iterar a través del array, podríamos realizar esta tarea fácilmente.

Para recorrer cada elemento de un arrays, un bucle for debe usar la propiedad .length del array en su condición de parada.

Consulte el siguiente ejemplo para ver cómo los bucles iteran en las Arrays:

~~~

const animals = ['Oso grizzly', 'Perezoso', 'León marino'];
for (let i = 0; i < animals.length; i++){
  console.log(animals[i]);
}

~~~

Este ejemplo le daría el siguiente resultado:

~~~

Oso grizzly
Perezoso
León marino

~~~

En el ciclo anterior, hemos nombrado a nuestra variable iteradora i. Esta es una convención de nomenclatura de variables que verá en muchos bucles. Cuando usamos i para iterar a través de Arrays, podemos pensar que es una forma abreviada de la palabra índice. Observe cómo nuestra condición de parada comprueba que i es menor que animals.length. Recuerde que los arreglos tienen índice cero, el índice del último elemento de un arreglo es equivalente a la longitud de ese arreglo menos 1.S

Con for loops, es más fácil para nosotros trabajar con elementos en arreglos.

## Ejercicios

### 1

Escriba un ciclo for que itere a través de nuestro array de vacationSpots usando i como la variable iteradora.

Dentro del bloque del ciclo for, usa console.log() para registrar cada elemento en la matriz de vacationSpots después de la cadena 'Me encantaría visitar'. Por ejemplo, la primera ronda del ciclo debería imprimir 'Me encantaría visitar LUGAR' en la consola.