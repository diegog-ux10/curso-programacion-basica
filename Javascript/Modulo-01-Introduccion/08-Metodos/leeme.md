# Métodos

Recuerda que los métodos son acciones que podemos realizar. Los tipos de datos tienen acceso a métodos específicos que nos permiten manejar instancias de ese tipo de datos. JavaScript proporciona una serie de métodos de cadena.

Llamamos, o usamos, estos métodos agregando una instancia con:

un punto (dot operator)

el nombre del método

paréntesis de apertura y cierre

ej: 'example string'.methodName()

¿Esa sintaxis parece un poco familiar? Cuando usamos console.log (), estamos llamando al método .log() en el objeto de la console. ¡Veamos console.log () y algunos métodos de strings reales en acción!

~~~

console.log('hola'.toUpperCase()); // Imprime 'HOLA'
console.log ('Hola'.startsWith (' H ')); // Imprime true

~~~

Veamos cada una de las líneas anteriores:

En la primera línea, se llama al método .toUpperCase() en la instancia de string 'hola'. El resultado se registra en la consola. Este método devuelve una string en mayúsculas: 'HOLA'.

En la segunda línea, se llama al método .startsWith() en la instancia de string 'Hola'. Este método también acepta el carácter 'H' como argumento entre los paréntesis. Dado que la string 'Hola' comienza con la letra 'H', el método devuelve el valor booleano true.

Puede encontrar una lista de métodos de string integrados en la documentación de JavaScript. Los desarrolladores utilizan la documentación como herramienta de referencia. Describe las palabras clave, los métodos y la sintaxis de JavaScript.

https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String

## Ejercicios

### 1

Use el método .toUpperCase() para registrar la cadena '7even' en la consola en todas las letras mayúsculas.

### 2

En la segunda declaración de console.log() en app.js, tenemos un string ' Remove whitespace ' que tiene espacios antes y después de las palabras 'Remove whitespace'.

Si examinamos la documentación de strings de JavaScript, encontramos varios métodos de string integrados que cumplen un objetivo diferente. El único método que nos parece ideal es .trim().

Utilice el método para eliminar los espacios en blanco al principio y al final del string en la segunda instrucción console.log ().