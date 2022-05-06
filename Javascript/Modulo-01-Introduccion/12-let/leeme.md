# Crear una variable: let

Como se mencionó en el ejercicio anterior, la palabra clave *let* se introdujo en ES6. La palabra clave *let* indica que la variable se puede reasignar a un valor diferente. 

Echa un vistazo al ejemplo:

~~~

let meal = 'Enchiladas';
console.log(meal); // Output: Enchiladas
meal = 'Burrito';
console.log(meal); // Output: Burrito

~~~

Otro concepto que debemos tener en cuenta al usar *let* (e incluso var) es que podemos declarar una variable sin asignarle un valor. En tal caso, la variable se inicializará automáticamente con un valor de indefinido:

~~~

let price;
console.log(price); // Output: undefined
price = 350;
console.log(price); // Output: 350

~~~

En el ejemplo anterior:

- Si no asignamos un valor a una variable declarada usando la palabra clave let, automáticamente tiene un valor de undefined.

- Podemos reasignar el valor de la variable.

## Ejercicios

### 1

Cree una variable let llamada changeMe y establézcala igual al valor booleano true.

### 2

Después de que se declare changeMe, establezca el valor de changeMe para que sea el valor booleano false.

Para verificar si changeMe fue reasignado, imprima el valor guardado en changeMe en la consola.