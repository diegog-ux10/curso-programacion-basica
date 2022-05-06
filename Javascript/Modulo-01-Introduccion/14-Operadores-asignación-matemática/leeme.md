# Operadores de asignación matemática

Consideremos cómo podemos usar variables y operadores matemáticos para calcular nuevos valores y asignarlos a una variable. Mira el ejemplo a continuación:

~~~

let ​​w = 4;
w = w + 1;
 
console.log(w); // Salida: 5

~~~

En el ejemplo anterior, creamos la variable w con el número 4 asignado. La siguiente línea, w = w + 1, aumenta el valor de w de 4 a 5.

Otra forma en que podríamos haber reasignado w después de realizar alguna operación matemática en él es usar operadores de asignación matemática incorporados. Podríamos reescribir el código anterior para que sea:

~~~

let w = 4;
w += 1;
 
console.log(w); // Output: 5

~~~

En el segundo ejemplo, usamos el operador de asignación += para reasignar w. Estamos realizando la operación matemática del primer operador + usando el número a la derecha, luego reasignando w al valor calculado.

También tenemos acceso a otros operadores de asignación matemática: -=, *= y /= que funcionan de manera similar.

~~~

let x = 20;
x -= 5; // Can be written as x = x - 5
console.log(x); // Output: 15
 
let y = 50;
y *= 2; // Can be written as y = y * 2
console.log(y); // Output: 100
 
let z = 8;
z /= 2; // Can be written as z = z / 2
console.log(z); // Output: 4

~~~

¡Practiquemos usando estos operadores de asignación matemática!

## Ejercicios

### 1

Utilice el operador de asignación matemática += para aumentar el valor almacenado en levelUp en 5.

### 2

Utilice el operador de asignación matemática -= para disminuir el valor almacenado en powerLevel en 100.

### 3

Utilice el operador de asignación matemática *= para multiplicar el valor almacenado en multiplyMe por 11.

### 4

Utilice el operador de asignación matemática /= para dividir el valor almacenado en quarterMe por 4.