# Pasar por referencia

Los objetos se pasan por referencia. Esto significa que cuando pasamos una variable asignada a un objeto a una función como argumento, la computadora interpreta el nombre del parámetro como apuntando al espacio en la memoria que contiene ese objeto. Como resultado, las funciones que cambian las propiedades del objeto en realidad mutan el objeto de forma permanente (incluso cuando el objeto se asigna a una variable const).

~~~

const spaceship = {
  homePlanet : 'Earth',
  color : 'silver'
};
 
let paintIt = obj => {
  obj.color = 'glorious gold'
};
 
paintIt(spaceship);
 
spaceship.color // Returns 'glorious gold'

~~~
 
Nuestra función paintIt() cambió permanentemente el color de nuestro objeto spaceship. Pero tratar de reagsinar la variable no va a funcionar.

~~~

let spaceship = {
  homePlanet : 'Earth',
  color : 'red'
};

let tryReassignment = obj => {
  obj = {
    identified : false, 
    'transport type' : 'flying'
  }

  console.log(obj) // Prints {'identified': false, 'transport type': 'flying'}
 
};

tryReassignment(spaceship) // The attempt at reassignment does not work.

spaceship // Still returns {homePlanet : 'Earth', color : 'red'};
 
spaceship = {
  identified : false, 
  'transport type': 'flying'
}; // Regular reassignment still works.


~~~

Veamos lo que sucedió en el ejemplo del código:

- Declaramos este objeto spaceship con let. Esto nos permitió reasignarlo a un nuevo objeto con propiedades identified y transport type sin problemas.

- Cuando intentamos lo mismo con una función diseñada para reasignar el objeto que se le pasó, la reasignación no funcionó (aunque llamar a console.log() en el objeto produjo el resultado esperado).

- Cuando pasamos spaceship a esa función, obj se convirtió en una referencia a la ubicación de memoria del objeto spaceship, pero no a la variable spaceship. Esto se debe a que el parámetro obj de la función tryReassignment() es una variable por derecho propio. ¡El cuerpo de tryReassignment() no tiene ningún conocimiento de la variable spaceship!

- Cuando hicimos la reasignación en el cuerpo de tryReassignment(), la variable obj pasó a referirse a la ubicación de memoria del objeto {'identified': false, 'transport type': 'flying'}, mientras que la variable spaceship permaneció sin cambios de su valor anterior.

## Ejercicios

### 1

Escriba una función greenEnergy() que tenga un objeto como parámetro y establezca la propiedad 'Fuel Type' de ese objeto en 'avocado oil'.

### 2

Escriba una función de forma remotelyDisable() que tenga un objeto como parámetro y establezca (o reasigne) la propiedad disabled de ese objeto en true.

### 3

Llame a sus dos funciones con el objeto de la spaceship en el editor de código, luego console.log() el objeto spaceship para confirmar que esas propiedades se cambiaron/agregaron.