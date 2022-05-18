# Funciones auxiliares

También podemos usar el valor de return de una función dentro de otra función. Estas funciones que se llaman dentro de otra función a menudo se denominan funciones auxiliares. Dado que cada función está realizando una tarea específica, hace que nuestro código sea más fácil de leer y depurar si es necesario.

Si quisiéramos definir una función que convierta la temperatura de Celsius a Fahrenheit, podríamos escribir dos funciones como:

~~~

function multiplyByNineFifths(number) {
  return number * (9/5);
};
 
function getFahrenheit(celsius) {
  return multiplyByNineFifths(celsius) + 32;
};
 
getFahrenheit(15); // Returns 59

~~~

1. Se llama a getFahrenheit() y se pasa 15 como argumento.

2. El bloque de código dentro de getFahrenheit() llama a multiplyByNineFifths() y pasa 15 como argumento.

3. multiplyByNineFifths() toma el argumento de 15 para el parámetro de number.

4. El bloque de código dentro de la función multiplyByNineFifths() multiplica 15 por (9/5), lo que da como resultado 27.

5. 27 vuelve a la llamada de función en getFahrenheit().

6. getFahrenheit() continúa ejecutándose. Suma 32 a 27, que se evalúa a 59.

7. Finalmente, 59 se devuelve a la llamada de función getFahrenheit(15).

Podemos usar funciones para separar pequeños fragmentos de lógica o tareas, y luego usarlos cuando lo necesitemos. Escribir funciones auxiliares puede ayudar a tomar tareas grandes y difíciles y dividirlas en tareas más pequeñas y manejables.

## Ejercicios

### 1

En el ejercicio anterior, creamos una función para encontrar la cantidad de monitores a pedir para una oficina. Ahora escribamos otra función que use la función monitorCount para calcular el precio.

Debajo monitorCount Cree una declaración de función llamada costOfMonitors que tenga dos parámetros, el primer parámetro son filas y el segundo parámetro son columnas. Deje el cuerpo de la función vacío por ahora.

### 2

Es hora de agregar algo de código al cuerpo de la función de costOfMonitors para calcular el costo total.

Agregue una declaración de devolución que devuelva el valor de llamar a monitorCount(filas, columnas) multiplicado por 200.

### 3

Deberíamos guardar el costo en una variable.

Declare una variable llamada totalCost usando la palabra clave const. Asigne a totalCost el valor de llamar a costOfMonitors() con los argumentos 5 y 4 respectivamente.

### 4

Para verificar que la función funcionó correctamente, imprima totalCost en la consola.