# Declaraciones de funciones

En JavaScript, hay muchas formas de crear una función. Una forma de crear una función es usando una declaración de función. Al igual que una declaración de variable vincula un valor a un nombre de variable, una declaración de función vincula una función a un nombre o un identificador. Eche un vistazo a la anatomía de una declaración de función en el archivo declaracion.png.

El Diagrama de la imagen (declaracion.png) muestra la sintaxis de una declaración de función

Una declaración de función consta de:

La palabra clave de función.
El nombre de la función, o su identificador, seguido de paréntesis.
El cuerpo de una función, o el bloque de instrucciones necesario para realizar una tarea específica, encerrado entre llaves de la función, { }.
Una declaración de función es una función que está vinculada a un identificador o nombre. En el siguiente ejercicio, veremos cómo ejecutar el código dentro del cuerpo de la función.

También debemos tener en cuenta la función de elevación en JavaScript que permite el acceso a las declaraciones de funciones antes de que se definan.

Eche un vistazo al ejemplo de elevación:

saludarMundo(); // Salida: ¡Hola, Mundo!
 
function saludarMundo() {
  console.log('¡Hola, mundo!');
}
¡Observe cómo hoisting permitió llamar a greetingWorld() antes de que se definiera la función GreetWorld()! Dado que la elevación no se considera una buena práctica, simplemente queremos que esté al tanto de esta característica.

Si desea leer más sobre la elevación, consulte la documentación de MDN sobre la elevación.