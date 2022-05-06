# Concatenación de Strings

¡Los operadores no son solo para números! Cuando se usa un operador + en dos strings, agrega la string derecha a la string izquierda:

~~~
console.log('hi' + 'ya'); // Imprime 'hiya'
console.log('wo' + 'ah'); // Imprime 'woah'
console.log('I love to ' + 'code.') // Imprime 'I love to code.'
~~~

Este proceso de agregar un string a otro se llama concatenación. Observe en el tercer ejemplo que teníamos que asegurarnos de incluir un espacio al final del primer string. La computadora unirá las strings exactamente, así que necesitábamos asegurarnos de incluir el espacio que queríamos entre los dos strings.

~~~
console.log('front ' + 'space'); 
// imprime 'front space'
console.log('back' + ' space'); 
// imprime 'back space'
console.log('no' + 'space'); 
// imprime 'nospace'
console.log('middle' + ' ' + 'space'); 
// imprime 'middle space'
~~~

Al igual que con las matemáticas normales, podemos combinar o encadenar nuestras operaciones para obtener un resultado final:

~~~
console.log('One' + ', ' + 'two' + ', ' + 'three!'); 
// Prints 'One, two, three!'
~~~

## Ejercicios

### 1

Dentro de una instrucción console.log(), concatene las dos cadenas 'Hola' y 'Mundo'.

Nota: debe concatenar las dos cadenas exactamente (sin introducir ningún carácter adicional).
