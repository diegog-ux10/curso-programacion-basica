# Asignación de propiedad

Una vez que hemos definido un objeto, no estamos limitados a trabajar solo con las propiedades que escribimos. ¡Los objetos son mutables, lo que significa que podemos actualizarlos después de crearlos!

Podemos usar la notación de puntos, . , o la notación de corchetes, [] , y el operador de asignación, = para agregar nuevos pares clave-valor a un objeto o cambiar una propiedad existente.

Para ello escribimos el nombre de un objeto seguido de corchetes ([]) con el nombre de la propiedad como un string, despues se puede reasignar a un nuevo valor con el operador =.

Una de dos cosas puede suceder con la asignación de propiedad:

- Si la propiedad ya existe en el objeto, el valor que tenía antes se reemplazará con el valor recién asignado.

- Si no había ninguna propiedad con ese nombre, se agregará una nueva propiedad al objeto.

Es importante saber que aunque no podemos reasignar un objeto declarado con const, aún podemos mutarlo, lo que significa que podemos agregar nuevas propiedades y cambiar las propiedades que están allí.

~~~

const spaceship = {type: 'shuttle'};
spaceship = {type: 'alien'}; // TypeError: Assignment to constant variable.
spaceship.type = 'alien'; // Changes the value of the type property
spaceship.speed = 'Mach 5'; // Creates a new key of 'speed' with a value of 'Mach 5'

~~~

Puede eliminar una propiedad de un objeto con el operador de eliminación.

~~~

const spaceship = {
  'Fuel Type': 'Turbo Fuel',
  homePlanet: 'Earth',
  mission: 'Explore the universe' 
};
 
delete spaceship.mission;  // Removes the mission property

~~~

## Ejercicios

### 1

Reasignar la propiedad de color del objeto de spaceship para que tenga un valor de 'glorious gold'

### 2

Sin cambiar las líneas 1 a 6, agregue una propiedad numEngines con un valor numérico entre 1 y 10 al objeto spaceship.

### 3

Utilice el operador delete para eliminar la propiedad 'Secret Mission' del objeto spaceship.

