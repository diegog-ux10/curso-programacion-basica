# Objetos anidados

En el mundo real, los objetos a menudo están anidados: ¡un objeto puede tener otro objeto como propiedad que a su vez podría tener una propiedad que es un Array de incluso más objetos!

En nuestro objeto de spaceship, queremos un objeto de tripulación. Este contendrá a todos los miembros de la tripulación que realizan un trabajo importante en la nave. Cada uno de esos miembros de la tripulación son objetos en sí mismos. Tienen propiedades como nombre y grado, y cada uno tiene métodos únicos basados ​​en sus funciones. También podemos anidar otros objetos en la spaceship, como un telescopio, o anidar detalles sobre las computadoras de la spaceship dentro de un objeto nanoelectronics principal.

~~~

const spaceship = {
     telescope: {
        yearBuilt: 2018,
        model: '91031-XLT',
        focalLength: 2032 
     },
    crew: {
        captain: { 
            name: 'Sandra', 
            degree: 'Computer Engineering', 
            encourageTeam() { console.log('We got this!') } 
         }
    },
    engine: {
        model: 'Nimbus2000'
     },
     nanoelectronics: {
         computer: {
            terabytes: 100,
            monitors: 'HD'
         },
        'back-up': {
           battery: 'Lithium',
           terabytes: 50
         }
    }
};

~~~

Podemos encadenar operadores para acceder a propiedades anidadas. Tendremos que prestar atención a qué operador tiene sentido usar en cada capa. Puede ser útil fingir que eres la computadora y evaluar cada expresión de izquierda a derecha para que cada operación comience a sentirse un poco más manejable.

~~~

spaceship.nanoelectronics['back-up'].battery; // Returns 'Lithium'

~~~

En el código anterior:

- Primero, la computadora evalúa spaceship.nanoelectronics, lo que da como resultado un objeto que contiene los objetos back-up y computer.

- Accedimos al objeto back-up agregando ['back-up'].

- El objeto back-up tiene una propiedad battery, a la que se accede con .battery que devolvió el valor almacenado allí: 'Lithium'

## Ejercicios

### 1

Cree una variable capFave y asígnele la comida favorita del capitán (el elemento en el índice 0 de su array 'favorite foods'). Asegúrese de usar la notación de corchetes y puntos para obtener el valor de la comida a través del acceso anidado (¡no se limite a copiar el valor en la variable!)

### 2

En este momento, la propiedad passengers tiene un valor null. En su lugar, asigne a su valor un Array de objetos. Estos objetos deben representar a los pasajeros de la nave espacial como objetos individuales. Cree al menos un objeto pasajero en el array que tenga al menos un par clave-valor.

### 3

Cree una variable firstPassenger y asigne el primer pasajero como su valor (el elemento en el índice 0 del array spaceship.passengers que acaba de crear). Asegúrese de usar la notación de corchetes y puntos para obtener el objeto del pasajero a través del acceso anidado (¡no solo copie el objeto en la variable!)