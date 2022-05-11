# Operadores de comparación

Al escribir declaraciones condicionales, a veces necesitamos usar diferentes tipos de operadores para comparar valores. Estos operadores se denominan operadores de comparación.

Aquí hay una lista de algunos operadores de comparación útiles y su sintaxis:

- Menor que: <
- Mayor que: >
- Menor o igual que: <=
- Mayor o igual que: >=
- es igual a: ===
- No es igual a: !==

Los operadores de comparación comparan el valor de la izquierda con el valor de la derecha. Por ejemplo:

10 < 12 // Evalúa a verdadero

Puede ser útil pensar en las declaraciones de comparación como preguntas. Cuando la respuesta es "sí", la declaración se evalúa como verdadera, y cuando la respuesta es "no", la declaración se evalúa como falsa. El código anterior estaría preguntando: ¿10 es menos que 12? ¡Sí! Entonces 10 < 12 se evalúa como verdadero.

También podemos usar operadores de comparación en diferentes tipos de datos como cadenas:

'manzanas' === 'naranjas' // falso

En el ejemplo anterior, usamos el operador de identidad (===) para verificar si la cadena 'manzanas' es la misma que la cadena 'naranjas'. Dado que las dos cadenas no son iguales, la declaración de comparación se evalúa como falsa.

Todas las declaraciones de comparación se evalúan como verdaderas o falsas y se componen de:

1. Dos valores que serán comparados.
2. Un operador que separa los valores y los compara en consecuencia (>, <, <=,>=,===,!==).

¡Practiquemos usando estos operadores de comparación!

## Ejercicios

### 1

Usando let, cree una variable llamada hungerLevel y establézcala en 7.

### 2

Escriba una sentencia if...else usando un operador de comparación. La condición debe verificar si hungerLevel es mayor que 7. Si es así, la declaración condicional debe registrar '¡Hora de comer!'. De lo contrario, debería registrar '¡Podemos comer más tarde!'.

Después de presionar Ejecutar, juegue con la condición ajustando la comparación del nivel de hambre usando diferentes operadores como <=,>=,> y <.
