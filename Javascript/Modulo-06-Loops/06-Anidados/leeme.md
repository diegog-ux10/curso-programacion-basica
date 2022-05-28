# Bucles anidados

Cuando tenemos un bucle ejecutándose dentro de otro bucle, lo llamamos bucle anidado. Un uso para un bucle for anidado es comparar los elementos en dos Arrays. Para cada ronda del bucle for externo, el bucle for interno se ejecutará por completo.

Veamos un ejemplo de un bucle for anidado:

~~~

const myArray = [6, 19, 20];
const yourArray = [19, 81, 2];
for (let i = 0; i < myArray.length; i++) {
  for (let j = 0; j < yourArray.length; j++) {
    if (myArray[i] === yourArray[j]) {
      console.log('Both arrays have the number: ' + yourArray[j]);
    }
  }
}

~~~



Pensemos en lo que sucede en el bucle anidado de nuestro ejemplo. Para cada elemento del array de bucle externo, myArray, el bucle interno se ejecutará en su totalidad comparando el elemento actual del array externa, myArray[i], con cada elemento del array interna, yourArray[j]. Cuando encuentra una coincidencia, imprime una cadena en la consola.

¡Ahora es tu turno de escribir un bucle anidado!

Nota: para salir de un bucle infinito en un ejercicio, actualice la página y luego corrija el código para su bucle o bucles.

## Ejercicio

### 1

¡Imagínate que eres un programador importante para una plataforma de redes sociales! Se le ha asignado la tarea de construir un prototipo para un programa de seguidores mutuos. Necesitará dos Arryas de "amigos" de dos usuarios para poder extraer los nombres de los seguidores que existen en ambas listas. Cree una variable llamada diegosFollowers y configúrela como un array con 5 strings que representen los nombres de los amigos de Diego.

### 2

Cree una variable llamada davidsFollowers y configúrela como un array con 4 strings que representen los nombres de los amigos de David. Haga que dos de estos sean iguales a dos de los amigos en el array diegosFollowers.


### 3

Cree una tercera variable llamada mutualFollowers y configúrela en un array vacía.

### 4

Cree un ciclo anidado que itere a través de los dos arrays con diegosFollowers como loop principal y davidsFollowers como el ciclo interno. Si el elemento actual del ciclo principal es el mismo que el elemento actual del ciclo interno, inserte ese elemento en mutualFollowers.