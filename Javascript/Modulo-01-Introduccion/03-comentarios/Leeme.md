# Comentarios

La programación suele ser muy colaborativa. Además, nuestro propio código puede volverse difícil de entender rápidamente cuando volvemos a él, ¡a veces solo una hora después! Por estas razones, suele ser útil dejar notas en nuestro código para otros desarrolladores o para nosotros mismos.

Mientras escribimos *JavaScript*, podemos escribir comentarios en nuestro código que la computadora ignorará mientras se ejecuta nuestro programa. Estos comentarios existen solo para lectores humanos.

Los comentarios pueden explicar qué está haciendo el código, dejar instrucciones para los desarrolladores que usan el código o agregar otras anotaciones útiles.

Hay dos tipos de comentarios de código en JavaScript:

*Un comentario de una sola línea* comentará una sola línea y se denota con dos barras diagonales *//* que lo preceden.

~~~

// Imprime 5 en la consola
consola.log(5);
También puede usar un comentario de una sola línea para comentar después de una línea de código:

consola.log(5); // Imprime 5

~~~


*Un comentario de varias líneas* comentará varias líneas y se denota con /* para comenzar el comentario y */ para finalizar el comentario.

~~~

/*
esto esta todo comentado
consola.log(10);
¡Nada de esto va a funcionar!
consola.log(99);
*/

~~~

También puede usar esta sintaxis para comentar algo en medio de una línea de código:

~~~

console.log(/*¡IGNORADO!*/ 5); // Todavía solo imprime 5

~~~

## Ejercicios

Aplica los siguientes ejercicios en app.js:

---

### 1

Practiquemos agregando algunos comentarios de código. En app.js, le proporcionamos el comienzo del libro *Catch-22* de Joseph Heller. En la línea 1, escriba un comentario de una sola línea que diga *Línea de apertura*

### 2

Los comentarios de una sola línea son excelentes para agregar contexto a su código. Los comentarios de varias líneas suelen ser los más adecuados para evitar que se ejecute un bloque de código. Sin embargo, ambos tipos de comentarios se pueden utilizar para cualquier propósito.

Use un comentario de varias líneas para que las 6 declaraciones inferiores de console.log() estén todas comentadas.
