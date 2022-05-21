# Funciones de flecha

ES6 introdujo la sintaxis de función de flecha, una forma más corta de escribir funciones mediante el uso de la notación especial () =>.

Las funciones de flecha eliminan la necesidad de escribir la función de palabra clave cada vez que necesita crear una función. En su lugar, primero incluye los parámetros dentro de ( ) y luego agrega una flecha => que apunta al cuerpo de la función rodeado de { } así:

~~~

const rectangleArea = (width, height) => {
  let area = width * height;
  return area;
};

~~~

Es importante estar familiarizado con las múltiples formas de escribir funciones porque se encontrará con cada una de ellas al leer otro código JavaScript.

## Ejercicios

Cambie plantNeedsWater() para usar la sintaxis de la función de flecha.