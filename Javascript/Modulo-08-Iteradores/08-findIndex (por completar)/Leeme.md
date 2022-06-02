# El método .findIndex()

A veces queremos encontrar la ubicación de un elemento en un array. ¡Ahí es donde entra en juego el método .findIndex()! Llamar a .findIndex() en un array devolverá el índice del primer elemento que se evalúa como verdadero en la función callback.

~~~

const jumbledNums = [123, 25, 78, 5, 9]; 
 
const lessThanTen = jumbledNums.findIndex(num => {
  return num < 10;
});

~~~

- jumbledNums es un array que contiene elementos que son números.
- const lessThanTen = declara una nueva variable que almacena el número de índice devuelto al invocar .findIndex().
- La función callback es una función de flecha que tiene un solo parámetro, num. Cada elemento de la matriz jumbledNums se pasará a esta función como argumento.
- num < 10; es la condición con la que se comprueban los elementos. .findIndex() devolverá el primer elemento que se evalúa como verdadero para esa condición.

Echemos un vistazo a lo que lessThanTen evalúa:

~~~

console.log(lessThanTen); // Output: 3 

~~~

Si comprobamos qué elemento tiene índice de 3:

~~~

console.log(jumbledNums[3]); // Output: 5

~~~

Genial, el elemento en el índice 3 es el número 5. Esto tiene sentido ya que 5 es el primer elemento que es menor que 10.

Si no hay un solo elemento en la matriz que satisfaga la condición en el callback, entonces .findIndex() devolverá -1.

~~~

const greaterThan1000 = jumbledNums.findIndex(num => {
  return num > 1000;
});
 
console.log(greaterThan1000); // Output: -1

~~~

