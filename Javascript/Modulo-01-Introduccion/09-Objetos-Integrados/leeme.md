# Objetos integrados

Además de la consola, hay otros objetos integrados en JavaScript. Más adelante, construirá sus propios objetos, pero por ahora estos objetos "integrados" están llenos de funcionalidades útiles.

Por ejemplo, si desea realizar operaciones matemáticas más complejas que la aritmética, JavaScript tiene el objeto Math integrado.

¡Lo mejor de los objetos es que tienen métodos! Llamemos al método .random() desde el objeto Math incorporado:

~~~
console.log(Math.random()); // Imprime un número aleatorio entre 0 y 1
~~~

En el ejemplo anterior, llamamos al método .random(): agregando el nombre del objeto con el operador de punto, el nombre del método y los paréntesis de apertura y cierre. Este método devuelve un número aleatorio entre 0 y 1.

Para generar un número aleatorio entre 0 y 50, podríamos multiplicar este resultado por 50, así:

~~~
Math.random() * 50;
~~~

El ejemplo anterior probablemente se evaluará como un decimal. Para asegurarnos de que la respuesta sea un número entero, podemos aprovechar otro método matemático útil llamado Math.floor().

Math.floor () toma un número decimal y lo redondea hacia abajo al número entero más cercano. Puede usar Math.floor () para redondear un número aleatorio como este:

~~~
Math.floor(Math.random() * 50);
~~~

En este caso:

- Math.random genera un número aleatorio entre 0 y 1.
- Luego multiplicamos ese número por 50, así que ahora tenemos un número entre 0 y 50.
- Luego, Math.floor () redondea el número al número entero más cercano.

Si quisiera ver el número impreso en la terminal, aún necesitaría usar una instrucción console.log():

~~~
console.log(Math.floor(Math.random() * 50)); // Imprime un numero aleatorio entre 1 y 50.
~~~

Para ver todas las propiedades y métodos del objeto Math, consulte la documentación aquí.

https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math

## Ejercicios

### 1

Dentro de un console.log(), cree un número aleatorio con Math.random(), luego multiplíquelo por 100.

### 2

Ahora, use Math.floor() para hacer que la salida sea un número entero.

Dentro del archivo console.log() que escribió en el último paso, coloque el código Math.random() * 100 existente entre paréntesis de Math.floor().

### 3

Use la siguiente documentación para buscar un método del objeto integrado Number que determine si un número es entero:

https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Number

Luego imprima el resultado en Consola.

