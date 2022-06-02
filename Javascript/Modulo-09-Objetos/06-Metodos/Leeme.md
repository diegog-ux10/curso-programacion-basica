# Métodos

Cuando los datos almacenados en un objeto son una función, lo llamamos método. Una propiedad es lo que tiene un objeto, mientras que un método es lo que hace un objeto.

¿Los métodos de objetos parecen familiares? ¡Eso es porque los has estado usando todo el tiempo! Por ejemplo, la consola es un objeto global de Javascript y .log() es un método en ese objeto. Math también es un objeto global de Javascript y .floor() es un método en él.

Podemos incluir métodos en nuestros objetos literales mediante la creación de pares clave-valor ordinarios separados por comas. La clave sirve como el nombre de nuestro método, mientras que el valor es una expresión de función anónima.

~~~

const alienShip = {
  invade: function () { 
    console.log('Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.')
  }
};

~~~

Con la nueva sintaxis del método introducida en ES6, podemos omitir los dos puntos y la palabra clave de función.

~~~

const alienShip = {
  invade () { 
    console.log('Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.')
  }
};

~~~

Los métodos de objeto se invocan agregando el nombre del objeto con el operador de punto seguido del nombre del método y paréntesis:

~~~

alienShip.invade(); // Prints 'Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.'

~~~

## Ejercicios

### 1

Debajo de la variable retireMessage en el editor de código, cree un objeto alienShip. Debe contener un método .retreat() que imprimirá el mensaje de retiro.

### 2

Agregue otro método a su objeto literal. Este método, .takeOff(), imprime el mensaje 'Spim... Borp... Glix... Blastoff!'.

### 3

Invoque sus dos métodos: primero .retreat() y luego .takeOff().