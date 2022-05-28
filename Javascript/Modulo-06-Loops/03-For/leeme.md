# El bucle For

En lugar de escribir el mismo código una y otra vez, los bucles nos permiten decirle a las computadoras que repitan un bloque de código determinado por sí solo. Una forma de dar a las computadoras estas instrucciones es con un bucle for.

El bucle for típico incluye una variable iteradora que suele aparecer en las tres expresiones. La variable iteradora se inicializa, se compara con la stopping condition y se le asigna un nuevo valor en cada iteración del ciclo. Las variables iteradoras pueden tener cualquier nombre, pero se recomienda utilizar un nombre de variable descriptivo.

Un bucle for contiene tres expresiones separadas por ; dentro de los paréntesis:

1. Una inicialización. Inicia el ciclo y también se puede usar para declarar la variable iteradora.
2. Una condición de parada (stopping condition) es la condición con la que se evalúa la variable  iteradora; si la condición se evalúa como verdadera, el bloque de código se ejecutará, y si se evalúa como falsa, el código se detendrá.
3. se utiliza una declaración de iteración para actualizar la variable del iteradora en cada ciclo.

La sintaxis del bucle for se ve así:

~~~

for (let counter = 0; counter < 4; counter++) {
  console.log(counter);
}

~~~

En este ejemplo, la salida sería la siguiente:

~~~

0
1
2
3

~~~

Desglosemos el ejemplo:

- La inicialización es counter = 0, por lo que el ciclo comenzará a contar en 0.
- La condición de parada es counter < 4, lo que significa que el bucle se ejecutará siempre que la variable del iterador, counter, sea inferior a 4.
- La instrucción de iteración es counter++. Esto significa que después de cada bucle, el valor del counter aumentará en 1. Para la primera iteración, el counter será igual a 0, para la segunda iteración, el counter será igual a 1, y así sucesivamente.
- El bloque de código está dentro de las llaves, console.log(counter), se ejecutará hasta que la condición se evalúe como falsa. La condición será falsa cuando el counter sea mayor o igual a 4; el punto en el que la condición se vuelve falsa a veces se denomina condición de parada.
- Este bucle for hace posible escribir 0, 1, 2 y 3 mediante programación.

### Ejercicio

## 1

¡Ahora, haz el tuyo propio! Cree un programa que recorra del 5 al 10 y registre cada número en la consola.