# Arrays anidadas

Anteriormente mencionamos que los arreglos pueden almacenar otros arreglos. Cuando una matriz contiene otra matriz, se conoce como matriz anidada. Examina el siguiente ejemplo:

~~~

const nestedArr = [[1], [2, 3]];

~~~

Para acceder a los Arrays anidadas, podemos usar la notación de corchetes con el valor del índice, tal como lo hicimos para acceder a cualquier otro elemento:

~~~

const nestedArr = [[1], [2, 3]];
 
console.log(nestedArr[1]); // Output: [2, 3]

~~~
 

Tenga en cuenta que nestedArr[1] tomará el elemento en el índice 1, que es el array [2, 3]. Luego, si quisiéramos acceder a los elementos dentro de el array anidada, podemos encadenar o agregar más chorchetes con valores de índice.

~~~

const nestedArr = [[1], [2, 3]];
 
console.log(nestedArr[1]); // Output: [2, 3]
console.log(nestedArr[1][0]); // Output: 2

~~~
 
En la segunda declaración de console.log(), tenemos dos chorchetes encadenadoss a nestedArr. Sabemos que nestedArr[1] es el array [2, 3]. Luego, para tomar el primer elemento de esa array, usamos nestedArr[1][0] y obtenemos el valor de 2.

## Ejercicios

### 1

¡Hagamos un Array anidado! Cree una variable numberClusters. Asigne como su valor un Array con tres elementos de Array.

- El primer elemento del array debe contener los elementos 1 y 2 en ese orden.
- El segundo elemento del array debe contener los elementos 3 y 4 en ese orden.
- El tercer elemento del array debe contener los elementos 5 y 6 en ese orden.

### 2

¡Impresionante, hiciste un array anidado! Ahora declare una variable llamada target usando la palabra clave const y asígnela para acceder al numero 6 dentro de numberClusters.

