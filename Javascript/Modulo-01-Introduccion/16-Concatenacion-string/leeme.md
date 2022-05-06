# Concatenación de strings con variables

En ejercicios anteriores, asignamos strings a variables. Ahora, repasemos cómo conectar o concatenar strings en variables.

El operador + se puede usar para combinar dos valores de string incluso si esos valores se almacenan en variables:

~~~

let myPet = 'armadillo';
console.log('I own a pet ' + myPet + '.'); 
// Output: 'I own a pet armadillo.'

~~~

En el ejemplo anterior, asignamos el valor 'armadillo' a la variable myPet. En la segunda línea, el operador + se usa para combinar tres strings: 'I own a pet ', el valor guardado en myPet y '.'. Imprimimos el resultado de esta concatenación en la consola como:

I own a pet armadillo.

## Ejercicios

### 1

Cree una variable llamada favoriteAnimal y establézcala igual a su animal favorito.

### 2

Usa console.log() para imprimir 'Mi animal favorito: *ANIMAL*' en la consola. Use la concatenación de strings para que *ANIMAL* se reemplace con el valor en su variable de favoriteAnimal.