# Buen scoping

Dados los desafíos con las variables globales y Pollution, debemos seguir las mejores prácticas para definir el alcance de nuestras variables con la mayor precisión posible utilizando el alcance de bloque.

El alcance sus variables mejorará su código de varias maneras:

- Hará que su código sea más legible ya que los bloques organizarán su código en secciones discretas.
- ¡Hace que su código sea más comprensible ya que aclara qué variables están asociadas con diferentes partes del programa en lugar de tener que realizar un seguimiento de ellas línea tras línea!
- Es más fácil mantener su código, ya que su código será modular.
- Ahorrará memoria en su código porque dejará de existir una vez que el bloque termine de ejecutarse.

Aquí hay otro ejemplo de cómo usar el alcance del bloque, como se define dentro de un bloque if:

~~~

const logSkyColor = () => {
  const dusk = true;
  let color = 'blue'; 
  if (dusk) {
    let color = 'pink';
    console.log(color); // pink
  }
  console.log(color); // blue 
};
 
console.log(color); // ReferenceError
~~~

Aquí, notarás:

1. Creamos una variable anochecer dentro de la función logSkyColor().
2. Después de la instrucción if, definimos un nuevo bloque de código con las llaves {}. Aquí asignamos un nuevo valor a la variable color si la declaración if es verdadera.
3. Dentro del bloque if, la variable de color tiene el valor 'rosa', aunque fuera del bloque if, en el cuerpo de la función, la variable de color tiene el valor 'azul'.
4. Si bien usamos el alcance del bloque, todavía contaminamos nuestro espacio de nombres al reutilizar el mismo nombre de variable dos veces. Una mejor práctica sería cambiar el nombre de la variable dentro del bloque.

Block scope es una herramienta poderosa en JavaScript, ya que nos permite definir variables con precisión y no contaminar el espacio de nombres global. Si una variable no necesita existir fuera de un bloque, ¡no debería!