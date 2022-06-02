# Bucle a través de objetos

Los bucles son herramientas de programación que repiten un bloque de código hasta que se cumple una condición. Aprendimos a iterar a través de arrays utilizando su indexación numérica, ¡pero los pares clave-valor en los objetos no están ordenados! JavaScript nos ha dado una solución alternativa para iterar a través de objetos con la sintaxis for...in.

for...in ejecutará un bloque de código dado para cada propiedad en un objeto.

~~~

let spaceship = {
  crew: {
    captain: { 
      name: 'Lily', 
      degree: 'Computer Engineering', 
      cheerTeam() { console.log('You got this!') } 
    },
    'chief officer': { 
      name: 'Dan', 
      degree: 'Aerospace Engineering', 
      agree() { console.log('I agree, captain!') } 
    },
    medic: { 
      name: 'Clementine', 
      degree: 'Physics', 
      announce() { console.log(`Jets on!`) } },
    translator: {
      name: 'Shauna', 
      degree: 'Conservation Science', 
      powerFuel() { console.log('The tank is full!') } 
    }
  }
}; 
 
// for...in
for (let crewMember in spaceship.crew) {
  console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`);
}

~~~

Nuestro for...in iterará a través de cada elemento del objeto spaceship.crew. En cada iteración, la variable crewMember se establece en una de las claves de spaceship.crew, lo que nos permite registrar una lista de funciones y nombres de los miembros de la tripulación.

## Ejercicios

### 1

Usando for...in, itere a través del objeto spaceship.crew en el editor de código y console.log() una lista de cargos y nombres de la tripulación en el siguiente formato: '[función del miembro de la tripulación]: [nombre del miembro de la tripulación]', por ejemplo, 'director general: Dan'.

### 2

Usando for...in, itere a través del objeto spaceship.crew en el editor de código y console.log() una lista de nombres y grados de la tripulación en el siguiente formato: '[nombre del miembro de la tripulación]: [grado del miembro de la tripulación]', es decir, 'Lily: Ingeniería Informática'.