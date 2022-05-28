# El ciclo while

¡Lo estás haciendo genial! Vamos a enseñarte acerca de un tipo diferente de ciclo: el ciclo while. Para empezar, vamos a convertir un bucle for en un bucle while:

~~~

// A for loop that prints 1, 2, and 3
for (let counterOne = 1; counterOne < 4; counterOne++){
  console.log(counterOne);
}
 
// A while loop that prints 1, 2, and 3
let counterTwo = 1;
while (counterTwo < 4) {
  console.log(counterTwo);
  counterTwo++;
}

~~~

Analicemos lo que sucede con nuestra sintaxis de ciclo while:

- La variable counterTwo se declara antes del ciclo. Podemos acceder a él dentro de nuestro bucle while ya que está en el ámbito global.
- Comenzamos nuestro bucle con la palabra clave while seguido de nuestra condición de parada o condición de prueba. Esto se evaluará antes de cada ronda del ciclo. Mientras la condición se evalúa como verdadera, el bloque continuará ejecutándose. Una vez que se evalúe como falso, el bucle se detendrá.
- A continuación, tenemos el bloque de código de nuestro ciclo que imprime counterTwo en la consola e incrementa counterTwo.

¿Qué pasaría si no incrementáramos counterTwo dentro de nuestro bloque? Si no incluyéramos esto, counterTwo siempre tendría su valor inicial, 1. Eso significaría que la condición de prueba counterTwo < 4 siempre se evaluaría como verdadera y nuestro ciclo nunca dejaría de ejecutarse. Recuerda, esto se llama bucle infinito y es algo que siempre queremos evitar. Los bucles infinitos pueden consumir toda la potencia de procesamiento de su computadora y potencialmente congelar su computadora.

¡Entonces puede que se pregunte cuándo usar un bucle while! La sintaxis de un ciclo while es ideal cuando no sabemos de antemano cuántas veces debe ejecutarse el ciclo. Piense en comer como un ciclo de tiempo: cuando comienza a tomar bocados, no sabe el número exacto que necesitará para llenarse. Más bien comerás mientras tengas hambre. En situaciones en las que queremos que un bucle se ejecute un número indeterminado de veces, los bucles while son la mejor opción.

## Ejercicios

### 1

Debajo del array de cards, declare una variable, currentCard, con la palabra clave let pero no le asigne ningún valor.

### 2

Cree un ciclo while con una condición que verifique si currentCard no es igual a 'pica'.

Dentro del bloque de tu ciclo while, agrega la siguiente línea de código:

~~~

currentCard = cards[Math.floor(Math.random() * 4);

~~~

Math.floor(Math.random() * 4) nos dará un número aleatorio de 0 a 3. Usaremos este número como indice del array cards. asigné el valor de currentCard a un elemento aleatorio del array cards.

### 3

¡Impresionante! Su bucle se está ejecutando, pero no puede saberlo porque no genera nada. Agreguemos una instrucción console.log() a nuestro bloque while. Dentro del bloque, después de asignar a currentCard un nuevo valor, registre currentCard en la consola.

¡Por diversión, puede ejecutar su código varias veces y ver cómo cambia la salida!