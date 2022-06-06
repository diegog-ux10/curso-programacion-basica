# Funciones de flecha y this

Vimos en el ejercicio anterior que para un método, el objeto que llama es el objeto al que pertenece el método. Si usamos la palabra clave this en un método, entonces el valor de this es el objeto que llama. Sin embargo, se vuelve un poco más complicado cuando comenzamos a usar funciones de flecha para los métodos. Eche un vistazo al siguiente ejemplo:

~~~

const goat = {
  dietType: 'herbivore',
  makeSound() {
    console.log('baaa');
  },
  diet: () => {
    console.log(this.dietType);
  }
};
 
goat.diet(); // Prints undefined

~~~

En el comentario, puede ver que la goat.diet() se registraría sin definir. ¿Entonces qué pasó? Tenga en cuenta que el método .diet() se define mediante una función de flecha.

Las funciones de flecha inherentemente unen, o atan, un valor ya definido a la función en sí que NO es el objeto que llama. En el fragmento de código anterior, el valor de this es el objeto global, o un objeto que existe en el ámbito global, que no tiene una propiedad dietType y, por lo tanto, devuelve undefined.

Para leer más sobre las funciones de flecha o el objeto global, consulte la documentación de MDN sobre el objeto global y las funciones de flecha.

https://developer.mozilla.org/en-US/docs/Glossary/Global_object

¡La conclusión del ejemplo anterior es evitar el uso de funciones de flecha cuando se usa this en un método!

## Ejercicios

### 1

Actualmente, el método .checkEnergy() no produce la salida correcta porque usa la sintaxis de la función de flecha.

Refactorice, o cambie, el método para usar una expresión de función. Puede escribir la función utilizando el formato abreviado.

Después de refactorizar el método, observe que .checkEnergy() tiene acceso a las demás propiedades internas del objeto robot.