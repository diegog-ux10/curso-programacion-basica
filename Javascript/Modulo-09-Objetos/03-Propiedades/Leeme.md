# Acceso a propiedades

Hay dos formas de acceder a la propiedad de un objeto. Exploremos la primera forma: el operador punto.

Hemos utilizado los puntos para acceder a las propiedades y métodos de objetos integrados e instancias de datos:

~~~

'hello'.length; // Returns 5

~~~

Escribimos el nombre del objeto, seguido del operador de punto y luego el nombre de la propiedad/clave (key):

~~~

let spaceship = {
  homePlanet: 'Earth',
  color: 'silver'
};

spaceship.homePlanet; // Returns 'Earth',
spaceship.color; // Returns 'silver',

~~~

Si intentamos acceder a una propiedad que no existe en ese objeto, se devolverá undefined.

~~~

spaceship.favoriteIcecream; // Returns undefined

~~~

¡Practiquemos un poco más usando el operador punto en un objeto!

## Ejercicios

### 1

Usemos el operador punto para acceder al valor de numCrew en el objeto spaceship en el editor de código. Cree una variable crewCount y asígnele la propiedad numCrew de spaceship.

### 2

De nuevo, usando el operador punto, cree una variable planetArray y asígnele la propiedad flightPath de spaceship.