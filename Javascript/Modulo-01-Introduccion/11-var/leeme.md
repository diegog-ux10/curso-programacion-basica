# Crear una variable: var

Se introdujeron muchos cambios en la versión ES6 de JavaScript en 2015. Uno de los cambios más importantes fueron dos nuevas palabras clave, *let* y *const*, para crear o declarar variables. Antes de ES6, los programadores solo podían usar la palabra clave *var* para declarar variables.

~~~

var miNombre = 'Arya';
consola.log (miNombre);
// Salida: Arya

~~~

Consideremos el ejemplo anterior:

1. var, abreviatura de variable, es una palabra clave de JavaScript que crea o declara una nueva variable.

2. myName es el nombre de la variable. Usar mayúsculas de esta manera es una convención estándar en JavaScript llamada camel casing. En camel casing, agrupas las palabras en una, la primera palabra está en minúsculas, luego cada palabra que sigue tendrá su primera letra en mayúsculas. (por ejemplo, camelCaseEverything).

3. *=* es el operador de asignación. Asigna el valor ('Arya') a la variable (miNombre).

4. 'Arya' es el valor asignado (=) a la variable myName. También puede decir que la variable myName se inicializa con un valor de 'Arya'.

5. Después de declarar la variable, el string 'Arya' se imprime en la consola haciendo referencia al nombre de la variable: consola.log (myName).

Hay algunas reglas generales para nombrar variables:

- Los nombres de variables no pueden comenzar con números.

- Los nombres de las variables distinguen entre mayúsculas y minúsculas, por lo que myName y myname serían variables diferentes. Es mala practica utilizar esto para diferenciar dos variables.

- Los nombres de las variables no pueden ser iguales a las palabras clave. Para obtener una lista completa de palabras clave, es decir, las palabras reservadas por JavaScript, consulte la documentación de palabras clave de MDN.

https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Lexical_grammar

En los siguientes ejercicios, aprenderemos por qué let y const de ES6 son las palabras clave variables preferidas por muchos programadores. Debido a que todavía hay una tonelada de código escrito antes de ES6, es útil familiarizarse con la palabra clave var.

Si desea obtener más información sobre var y las peculiaridades asociadas con él, consulte la documentación de var de MDN.

https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/var

## Ejercicios

### 1

Declare una variable llamada favoriteFood usando la palabra clave *var* y asígnele el string 'pizza'.

### 2

Declare una variable llamada numOfSlices utilizando la palabra clave var y asígnele el número 8.

### 3

Debajo de la variable numOfSlices, use console.log() para imprimir el valor guardado en FavoriteFood.

En la siguiente línea, use console.log() para imprimir el valor guardado en numOfSlices.