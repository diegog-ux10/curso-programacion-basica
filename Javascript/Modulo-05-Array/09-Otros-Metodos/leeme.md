# Más métodos de Arrays

Hay muchos más métodos de Array además de .push() y .pop(). Puede leer acerca de todos los métodos de Array que
 existen en la [documentación de Array de Mozilla Developer Network (MDN).](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array)

.pop() y .push() mutan el Array en que se llaman. Sin embargo, hay ocasiones en las que no queremos mutar el Array original y podemos usar métodos de Array que no mutan. Asegúrese de consultar MDN para comprender el comportamiento del método que está utilizando.

Algunos métodos de arrays que están disponibles para los desarrolladores de JavaScript incluyen: .join(), .slice(), .splice(), .shift(), .unshift() y .concat(), entre muchos otros. El uso de estos métodos integrados facilita la realización de algunas tareas comunes cuando se trabaja con arrays.

A continuación, exploraremos algunos métodos que aún no hemos aprendido. Usaremos estos métodos para editar una Lista de Compras. A medida que complete los pasos, puede consultar la documentación de MDN para saber qué hace cada método.

## Ejercicios

### 1

Utilice el método .shift() para eliminar el primer elemento el array de groceryList.

Imprima groceryList en la consola.

### 2

Bajo el código agregado en el paso 1, use el método .unshift() para agregar 'palomitas de maíz' al comienzo de su groceryList.

Después de llamar a .unshift() en groceryList, Imprima la groceryList en la consola.

Es posible que desee eliminar la instrucción console.log() del paso anterior.

### 3

Tienes prisa y decides pedirle a un amigo que te ayude con tus compras. Quiere que recoja las 'Bananas', el 'Cafe' y el 'Arroz'.

Bajo el código que agregó para el paso 2, use .slice() para proporcionarle a su amigo una lista de estas tres cosas.

Imprima esta parte de la lista en la consola.

### 4

Después de llamar a .slice() en la groceryList, Imprima la groceryList en la consola una vez más.

Tenga en cuenta que el array de groceryList todavía contiene los mismos elementos que tenía en el Paso 2. ¡Eso significa que .slice() no está mutando! Puedes confirmarlo en el enlace del paso anterior.

### 5

Encontremos el índice de un elemento particular en la groceryList usando .indexOf().

Llame a .indexOf() en la groceryList para encontrar el índice del elemento 'Pasta' y guarde el valor devuelto en una variable const llamada pastaIndex.

Luego imprima pastaIndex en la consola.