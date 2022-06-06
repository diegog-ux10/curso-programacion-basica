# Introducción

A menudo no somos conscientes de la cantidad de suposiciones que hacemos cuando nos comunicamos en nuestros idiomas nativos. Si le decimos que "cuente hasta tres", esperaríamos que diga los números "uno", "dos" y "tres". Asumimos que sabría comenzar con "uno" y terminar con "tres". Con la programación, necesitamos ser más explícitos con nuestras instrucciones a la computadora. Así es como podríamos decirle a la computadora que "cuente hasta tres":

~~~

for (let i = 1; i <= 3; i++) {
  console.log(i);
}
~~~

Cuando hablamos con otros humanos, compartimos un vocabulario que proporciona formas rápidas de comunicar conceptos complicados. Cuando decimos la palabra "hornear", nos recuerda una subrutina familiar: precalentar un horno, poner algo en el horno durante un tiempo determinado y finalmente sacarlo. Esto nos permite abstraer muchos de los detalles y comunicar conceptos clave de manera más concisa. En lugar de enumerar todos esos detalles, podemos decir: "Horneamos un pastel" y aun así transmitirle todo ese significado.

En esta lección, aprenderemos cómo usar la "abstracción" en la programación escribiendo funciones. Además de permitirnos reutilizar nuestro código, las funciones ayudan a que los programas sean claros y legibles. Si encuentra countToThree() en un programa, es posible que pueda adivinar rápidamente qué hace la función sin tener que detenerse y leer el cuerpo de la función.

También vamos a aprender sobre una forma de agregar otro nivel de abstracción a nuestra programación: higher-order functions. Las funciones de orden superior son funciones que aceptan otras funciones como argumentos y/o devuelven funciones como salida. Esto nos permite construir abstracciones sobre otras abstracciones, al igual que "Organizamos una fiesta de cumpleaños" es una abstracción que puede construirse sobre la abstracción "Hicimos un pastel".