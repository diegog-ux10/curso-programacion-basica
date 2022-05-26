# El método .pop()

Otro método de Arrays es .pop(), que elimina el último elemento de una matriz.

~~~

const newItemTracker = ['item 0', 'item 1', 'item 2'];
 
const removed = newItemTracker.pop();
 
console.log(newItemTracker); 
// Output: [ 'item 0', 'item 1' ]
console.log(removed);
// Output: item 2

~~~

En el ejemplo anterior: utilizamos .pop() en el array newItemTracker y eliminó item 2 del final.
- .pop() no toma ningún argumento, simplemente elimina el último elemento de newItemTracker.
- .pop() devuelve el valor del último elemento. En el ejemplo, almacenamos el valor devuelto en una variable eliminada para usarla más adelante.
- .pop() es un método que muta el array inicial.

Cuando necesite mutar una matriz eliminando el último elemento, use .pop().

## Ejercicios

### 1

Utilice el método .pop() para eliminar el último elemento de las chores.

### 2

En una línea después de llamar a chores.pop(), imprima chores en la consola para asegurarse de que funcionó.