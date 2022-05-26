# Actualizar elementos

En el ejercicio anterior, aprendió cómo acceder a los elementos dentro de un array o una cadena mediante el uso de un índice. Una vez que tenga acceso a un elemento en un array, puede actualizar su valor.

~~~

let seasons = ['Winter', 'Spring', 'Summer', 'Fall'];
 
seasons[3] = 'Autumn';
console.log(seasons); 
//Output: ['Winter', 'Spring', 'Summer', 'Autumn']

~~~

En el ejemplo anterior, el array seasons contenía los nombres de las cuatro estaciones.

Sin embargo, decidimos que preferíamos decir 'Autumn' en lugar de 'Fall'.

La línea, seasons[3] = 'Autumn'; le dice a nuestro programa que cambie el elemento en el índice 3 de el array de seasons para que sea 'Autumn' en lugar de lo que ya estaba allí.

## Ejercicios

### 1

Cambie el segundo elemento de groceryList a 'aguacates'.