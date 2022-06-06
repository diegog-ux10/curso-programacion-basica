# Getters

Los getters son métodos que obtienen y devuelven las propiedades internas de un objeto. ¡Pero pueden hacer más que simplemente recuperar el valor de una propiedad! Echemos un vistazo a un método getter:

~~~

const person = {
  _firstName: 'John',
  _lastName: 'Doe',
  get fullName() {
    if (this._firstName && this._lastName){
      return `${this._firstName} ${this._lastName}`;
    } else {
      return 'Missing a first name or a last name.';
    }
  }
}
 
// To call the getter method: 
person.fullName; // 'John Doe'

~~~

Observe que en el método getter anterior:

- Usamos la palabra clave get seguida de una función.
- Usamos un condicional if...else para verificar si tanto _firstName como _lastName existen (asegurándonos de que ambos devuelvan valores verdaderos) y luego devuelvan un valor diferente dependiendo del resultado.
- Podemos acceder a las propiedades internas del objeto que llama usando esto. En fullName, estamos accediendo tanto a this._firstName como a this._lastName.
- En la última línea llamamos fullName en person. En general, no es necesario llamar a los métodos getter con un conjunto de paréntesis. Sintácticamente, parece que estamos accediendo a una propiedad.

Ahora que hemos repasado la sintaxis, analicemos algunas ventajas notables de usar métodos getter:

1. Los getters pueden realizar una acción en los datos al obtener una propiedad.
2. Los getters pueden devolver diferentes valores usando condicionales.
3. En un getter, podemos acceder a las propiedades del objeto que llama usando this.
4. La funcionalidad de nuestro código es más fácil de entender para otros desarrolladores.

Otra cosa a tener en cuenta cuando se usan métodos getter (y setter) es que las propiedades no pueden compartir el mismo nombre que la función getter/setter. Si lo hacemos, llamar al método dará como resultado un error de pila de llamadas infinito. Una solución consiste en agregar un guión bajo antes del nombre de la propiedad, como hicimos en el ejemplo anterior.

Genial, ¡vamos a utilizar get!

## Ejercicios

### 1

En robot, cree un método getter llamado energyLevel utilizando la palabra clave get. Deje el cuerpo de la función en blanco por ahora.

### 2

Dentro del método getter, agregue una declaración if para verificar si this._energyLevel es un número usando el operador typeof. Si esa condición es cierta, devuelve 'Mi nivel de energía actual es ENERGYLEVEL'. Reemplace ENERGYLEVEL con el valor de this._energyLevel.

Asegúrese de devolver la cadena y no registrarla en la consola.

### 3

Si this._energyLevel no es un número, podría ser que la propiedad _energyLevel se haya alterado. Agreguemos una declaración predeterminada para cuando surja tal escenario.

Agregue una instrucción else que devuelva 'Mal funcionamiento del sistema: no se puede obtener el nivel de energía'.

### 4

Imprime el resultado de llamar al método getter *energyLevel* de *robot* en la consola.

¡Observe que el método devolverá una respuesta formateada en lugar de solo acceder a una propiedad!