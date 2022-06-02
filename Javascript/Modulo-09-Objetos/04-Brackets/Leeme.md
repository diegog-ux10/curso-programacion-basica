# Notación de corchetes

La segunda forma de acceder al valor de una clave(key) es usando la notación de corchetes, [ ].

Ha utilizado la notación de corchetes al indexar una matriz:

~~~

['A', 'B', 'C'][0]; // Devuelve 'A'

~~~

Para usar la notación de corchetes para acceder a la propiedad de un objeto, pasamos el nombre de la propiedad (clave/key) como una cadena.


Debemos usar la notación de corchetes al acceder a propiedades que tienen números, espacios o caracteres especiales. Sin la notación de paréntesis en estas situaciones, nuestro código generaría un error.

~~~

let spaceship = {
  'Fuel Type': 'Turbo Fuel',
  'Active Duty': true,
  homePlanet: 'Earth',
  numCrew: 5
};
spaceship['Active Duty'];   // Returns true
spaceship['Fuel Type'];   // Returns  'Turbo Fuel'
spaceship['numCrew'];   // Returns 5
spaceship['!!!!!!!!!!!!!!!'];   // Returns undefined

~~~

Con la notación de corchetes, también puede usar una variable dentro de los corchetes para seleccionar las claves de un objeto. Esto puede ser especialmente útil cuando se trabaja con funciones:

~~~

let returnAnyProp = (objectName, propName) => objectName[propName];
 
returnAnyProp(spaceship, 'homePlanet'); // Returns 'Earth'

~~~

Si intentáramos escribir nuestra función returnAnyProp() con notación de puntos (objectName.propName), la computadora buscaría una clave de 'propName' en nuestro objeto y no el valor del parámetro propName.

¡Practiquemos un poco usando la notación de corchetes para acceder a las propiedades!

## Ejercicios

### 1

Usemos la notación de corchetes para acceder al valor de 'Active Mission' desde el objeto de spaceship en el editor de código. Cree una variable isActive y asígnele la propiedad 'Active Mission' de la nave espacial.

### 2

Usando la notación de paréntesis y la variable propName, console.log() el valor de la propiedad 'Active Mission'.