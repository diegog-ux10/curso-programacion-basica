# Declaración if (si)

A menudo realizamos una tarea en función de una condición. Por ejemplo, si hace buen tiempo hoy, saldremos afuera. Si suena el despertador, lo apagaremos. Si estamos cansados, nos iremos a dormir.

En programación, también podemos realizar una tarea basada en una condición usando una declaración if:

~~~

if (true) {
  console.log('This message will print!'); 
}
// Prints: This message will print!

~~~

Observe que en el ejemplo anterior, tenemos una declaración if. La instrucción if se compone de:

La palabra clave if seguida de un conjunto de paréntesis () seguida de un bloque de código, indicada por un conjunto de llaves {}.

Dentro de los paréntesis (), se proporciona una condición que se evalúa como verdadera o falsa.
Si la condición se evalúa como verdadera, el código dentro de las llaves {} se ejecuta.

Si la condición se evalúa como falsa, el bloque no se ejecutará.

Hagamos una sentencia if.

## Ejercicios

### 1

Usando la palabra clave let, declare una variable llamada *sale*. Asígnale el valor *true*.

### 2

Ahora cree una declaración if. Proporcione como condición la variable *sale*.

Dentro del bloque de código de la instrucción if, console.log() el string '¡Es hora de comprar!'.

### 3

Observe que el código dentro de la instrucción if se ejecutó, ya que '¡Es hora de comprar!' se registró en la consola.

Debajo de la declaración de la variable sale, pero antes de la declaración if, reasigne sale a falso. Ejecute su código y observe lo que sucede, cambiaremos este comportamiento en el próximo ejercicio.