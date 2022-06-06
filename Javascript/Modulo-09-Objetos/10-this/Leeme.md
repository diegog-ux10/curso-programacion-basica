# La palabra clave this

Los objetos son colecciones de datos y funcionalidad relacionados. Almacenamos esa funcionalidad en métodos en nuestros objetos:

~~~

const goat = {
  dietType: 'herbivore',
  makeSound() {
    console.log('baaa');
  }
};

~~~

En nuestro objeto goat tenemos un método .makeSound(). Podemos invocar el método .makeSound() en goat.

~~~

goat.makeSound(); // Prints baaa

~~~

Genial, tenemos un objeto goat que puede imprimir baaa en la consola. Todo parece estar funcionando bien. ¿Qué pasaría si quisiéramos agregar un nuevo método a nuestro objeto goat llamado .diet() que imprima el tipo de dieta de la cabra(goat)?

~~~

const goat = {
  dietType: 'herbivore',
  makeSound() {
    console.log('baaa');
  },
  diet() {
    console.log(dietType);
  }
};
goat.diet(); 
// Output will be "ReferenceError: dietType is not defined"

~~~

Eso es extraño, ¿por qué dietType no está definido a pesar de que es una propiedad de goat? Eso es porque dentro del alcance del método .diet(), no tenemos acceso automáticamente a otras propiedades del objeto goat.

Aquí es donde la palabra clave *this* viene al rescate. Si cambiamos el método .diet() para usar this, ¡el .diet() funciona! :

~~~

cconst goat = {
  dietType: 'herbivore',
  makeSound() {
    console.log('baaa');
  },
  diet() {
    console.log(this.dietType);
  }
};
 
goat.diet(); 
// Output: herbivore

~~~

La palabra clave this hace referencia al objeto que llama que proporciona acceso a las propiedades del objeto que llama. En el ejemplo anterior, el objeto que llama es goat y al usar esto estamos accediendo al objeto goat en sí, y luego a la propiedad dietType de goat usando la notación de punto de propiedad.

Pongámonos cómodos usando la palabra clave this en un método.

## Ejercicios

### 1

Dentro del objeto robot, agregue un método llamado provideInfo. Dentro del cuerpo de provideInfo(), devuelve la siguiente cadena mediante interpolación:

Soy MODEL y mi nivel de energía actual es ENERGYLEVEL.

Reemplace 'MODEL' y 'ENERGYLEVEL' con el modelo del objeto que llama y la propiedad energyLevel. Recuerde, para obtener acceso a las propiedades del objeto que llama dentro de un método, ¡debe usar la palabra clave this!

### 2

Ahora para comprobar que .provideInfo() tiene acceso a las propiedades internas del robot. Registre el resultado de llamar al método .provideInfo() en el robot a la consola.