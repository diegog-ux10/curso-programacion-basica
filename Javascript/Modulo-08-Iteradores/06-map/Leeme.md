# El método .map()

El segundo iterador que vamos a cubrir es .map(). Cuando se llama a .map() en un array, toma un argumento de una función callback y devuelve un nuevo array. Eche un vistazo a un ejemplo de llamar a .map():

~~~

const numbers = [1, 2, 3, 4, 5]; 
 
const bigNumbers = numbers.map(number => {
  return number * 10;
});

~~~

.map() funciona de manera similar a .forEach(): la principal diferencia es que .map() devuelve un nuevo array.

En el ejemplo anterior:

- numbers es un array de numeros.
- bigNumbers almacenará el valor de retorno de llamar a .map() en numbers.
- numbers.map iterará a través de cada elemento en la array de numbers y pasará el elemento a la función callback.
- El callback number * 10 es el código que deseamos ejecutar en cada elemento de la array. Esto guardará cada valor del array de numbers, multiplicado por 10, en una nueva array.
- Si echamos un vistazo a los numbers y bigNumbers:

~~~

console.log(numbers); // Output: [1, 2, 3, 4, 5]
console.log(bigNumbers); // Output: [10, 20, 30, 40, 50]

~~~

Tenga en cuenta que los elementos de los numbers no se modificaron y bigNumbers es una nueva array

## Ejercicios

### 1

Agregue su código debajo del array de animals y antes de la línea console.log(secretMessage.join(''));

Use .map() para crear una nueva array que contenga el primer carácter de cada cadena en la array de animals. Guarde la nueva array en una variable const denominada secretMessage.

### 2

Use .map() para dividir todos los números en bigNumbers por 100. Guarde los valores devueltos en una variable declarada con const llamada smallNumbers.