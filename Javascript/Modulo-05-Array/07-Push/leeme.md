# El método .push()

Aprendamos sobre algunos métodos de JavaScript integrados que facilitan el trabajo con arrays. Estos métodos se utilizan específicamente en arrays para hacer que las tareas comunes, como agregar y eliminar elementos, sean más sencillas.

Un método, .push() nos permite agregar elementos al final de una matriz. Aquí hay un ejemplo de cómo se usa esto:

~~~

const itemTracker = ['item 0', 'item 1', 'item 2'];
 
itemTracker.push('item 3', 'item 4');
 
console.log(itemTracker); 
// Output: ['item 0', 'item 1', 'item 2', 'item 3', 'item 4'];

~~~

Entonces, ¿cómo funciona .push()?

- Accedemos al método push usando la notación de puntos, conectando push a itemTracker con un punto.
- Entonces lo llamamos como una función. Eso es porque .push() es una función que JavaScript nos permite usar directamente en un array.
- .push() puede tomar un solo argumento o múltiples argumentos separados por comas. En este caso, estamos agregando dos elementos: 'item 3' y 'item 4' a itemTracker.
- Tenga en cuenta que .push() cambia, o muta, itemTracker. También puede ver .push() referido como un método de 
Array destructivo ya que cambia el Array inicial.

Si está buscando un método que mute un array agregándole elementos, ¡entonces .push()-  es el método para usted!

## Ejercicios

### 1

Agregue dos elementos al array chores usando .push().

### 2

Use console.log para imprimir el array chores para asegurarse de que se agregaron sus elementos.