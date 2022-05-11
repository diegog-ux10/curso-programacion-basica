# Verdadero y falso

Consideremos cómo se evalúan los tipos de datos no booleanos, como cadenas de caracteres o números, cuando se colocan dentro de una condición.

A veces, querrá verificar si existe una variable y no necesariamente querrá que sea igual a un valor específico; solo verificará si a la variable se le ha asignado un valor.

Aquí hay un ejemplo:

let myVariable = 'I Exist!';
 
if (myVariable) {
   console.log(myVariable)
} else {
   console.log('The variable does not exist.')
}

El bloque de código en la instrucción if se ejecutará porque myVariable tiene un valor truthy; aunque el valor de myVariable no es explícitamente el valor true, cuando se usa en un contexto booleano o condicional, se evalúa como verdadero porque se le ha asignado un valor que no es false.

Entonces, ¿cuando los valores son falsos o se evalúan como falsos en una condición? La lista de valores falsos incluye:

- 0
- Strings vacios como "" o ''
- null que representa cuando no hay valor en absoluto
- undefined que representa cuando una variable declarada carece de un valor
- NaN, o Not a Number

He aquí un ejemplo con números:

~~~

let numberOfApples = 0;
 
if (numberOfApples){
   console.log('Let us eat apples!');
} else {
   console.log('No apples left!');
}
 
// Imprime 'No apples left!'

~~~

La condición se evalúa como falsa porque el valor de numberOfApples es 0. Dado que 0 es un valor falsy, se ejecutará el bloque de código en la instrucción else.

## Ejercicios

### 1

Cambie el valor de wordCount para que sea truthy. Este valor debe seguir siendo un número.

Después de realizar este cambio y ejecutar su código, 'Genial! haz comenzado' deberia imprimirse en la consola.

### 2

Cambie el valor de favoritePhrase para que siga siendo una cadena pero falsy.

Después de realizar este cambio y ejecutar su código, 'Esta cadena definitivamente está vacía'. debe imprimirse en consola.