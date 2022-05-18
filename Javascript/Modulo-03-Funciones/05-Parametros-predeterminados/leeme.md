# Parámetros predeterminados

Una de las características agregadas en ES6 es la capacidad de usar parámetros predeterminados. Los parámetros predeterminados permiten que los parámetros tengan un valor predeterminado en caso de que no se pase ningún argumento a la función o si el argumento no está definido cuando se llama.

Eche un vistazo al fragmento de código a continuación que usa un parámetro predeterminado:

~~~

function greeting (name = 'stranger') {
  console.log(`Hello, ${name}!`)
}
 
greeting('Nick') // Output: Hello, Nick!
greeting() // Output: Hello, stranger!

~~~
 
- En el ejemplo anterior, usamos el operador = para asignar al parámetro name un valor predeterminado de 'stranger'. ¡Esto es útil en caso de que alguna vez queramos incluir un saludo predeterminado no personalizado!

- Cuando el código llama a greeting('Nick'), se pasa el argumento 'Nick', esto anulará el parámetro predeterminado de 'stranger' para registrar '¡Hello, Nick!' a la consola

- Cuando no se pasa un argumento a saludo(), se usa el valor predeterminado de 'stranger' y '¡Hello, stranger!' se imprimirá en la consola.

Al usar un parámetro predeterminado, tenemos en cuenta las situaciones en las que no se pasa un argumento a una función que espera un argumento.

Practiquemos la creación de funciones que usan parámetros predeterminados.

## Ejercicios

### 1

La función makeShoppingList() crea una lista de compras basada en los elementos que se pasan a la función como argumentos.

Imagine que siempre compra leche, pan y huevos cada vez que va de compras. Para facilitar la creación de una lista de compras, asignemos valores predeterminados a los parámetros en makeShoppingList().

Cambie los parámetros de makeShoppingList() a parámetros predeterminados:

Asigne 'leche' como el valor predeterminado de item1.
Asigne 'pan' como el valor predeterminado de item2.
Asigne 'huevos' como el valor predeterminado de item3.