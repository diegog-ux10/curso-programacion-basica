# El método .forEach()

El primer método de iteración que vamos a aprender es .forEach(). .forEach() ejecutará el mismo código para cada elemento de una array.

Diagrama en foreach.png(imagen en esta carpeta) describe las partes de un iterador de array, incluido el identificador de array, la sección que es el iterador y la función de devolución.

El código anterior registrará una lista bien formateada de las compras en la consola. Exploremos la sintaxis de invocar .forEach().

- groceries.forEach() llama al método forEach en la array de groceries.
- .forEach() toma un argumento de la función de devolución. Recuerde, una función de devolución es una función que se pasa como argumento a otra función.
- .forEach() recorre la array y ejecuta la función de devolución para cada elemento. Durante cada ejecución, el elemento actual se pasa como argumento a la función de devolución.
- El valor devuelto por .forEach() siempre será indefinido.

Otra forma de pasar una devolución para .forEach() es usar la sintaxis de la función de flecha.

~~~

groceries.forEach(groceryItem => console.log(groceryItem));

~~~

También podemos definir una función de antemano para usarla como función de devolución de llamada.

~~~

function printGrocery(element){
  console.log(element);
}
 
groceries.forEach(printGrocery);

~~~
 
El ejemplo anterior usa una declaración de función, pero también puede usar una expresión de función o una función de flecha.

Los tres fragmentos de código hacen lo mismo. En cada método de iteración de array, podemos usar cualquiera de los tres ejemplos para proporcionar una función de devolución de llamada como argumento para el iterador. Es bueno estar al tanto de las diferentes formas de pasar funciones de devolución de llamada como argumentos en los iteradores porque los desarrolladores tienen diferentes preferencias estilísticas. No obstante, debido a la fuerte adopción de ES6, utilizaremos la sintaxis de la función de flecha en los ejercicios posteriores.

## Ejercicios

### 1

Iterar sobre la matriz de fruits para registrar 'Quiero comer...' más el nombre de cada fruta en la consola. Por ejemplo, quiero comer un mango.

Puede utilizar cualquier forma de devolución de llamada que prefiera.