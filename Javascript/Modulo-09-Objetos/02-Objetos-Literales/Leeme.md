# Creación de objetos literales

Los objetos se pueden asignar a variables como cualquier tipo de JavaScript. Usamos llaves, {}, para designar un objeto literal:

let nave espacial = {}; // la nave espacial es un objeto vacío
Rellenamos un objeto con datos desordenados. Estos datos se organizan en pares key-value (clave y valor). Un key es como un nombre de variable que apunta a una ubicación en la memoria que contiene un value (valor).

El valor de una clave puede ser de cualquier tipo de datos, incluidas funciones u otros objetos.

Hacemos un par clave-valor escribiendo el nombre de la clave, o identificador, seguido de dos puntos y luego el valor. Separamos cada par clave-valor en un objeto literal con una coma (,). Las claves son strings, pero cuando tenemos una clave que no tiene caracteres especiales, JavaScript nos permite omitir las comillas:

~~~

// Un objeto literal con dos pares de key-value

let spaceship = {
  'Fuel Type': 'diesel',
  color: 'silver'
};

~~~


El objeto spaceship tiene dos propiedades Fuel Type y color. Fuel Type tiene comillas porque contiene un carácter de espacio.

¡Hagamos algunos objetos!

## Ejercicios

### 1

La nave espacial (spaceship) que tenemos hasta ahora se ve bien pero, desafortunadamente, no es muy rápida en viajes hiperespaciales debido a que tiene una fuente de combustible inferior. Cree un nuevo objeto de nave espacial llamado fasterShip con el mismo color que spaceship pero con un Tipo de combustible 'Turbo Fuel'.