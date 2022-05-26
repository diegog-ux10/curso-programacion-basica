# Arrays y Funciones

A lo largo de la lección, repasamos que los arrays son mutables o modificables. Bueno, ¿qué sucede si tratamos de cambiar una matriz dentro de una función? ¿La matriz mantiene el cambio después de la llamada a la función?

Eche un vistazo al siguiente ejemplo en el que llamamos a .push() en un arrays dentro de una función. Recuerde, el método .push() muta o cambia un arrays:

~~~

const flowers = ['peony', 'daffodil', 'marigold'];
 
function addFlower(arr) {
  arr.push('lily');
}
 
addFlower(flowers);
 
console.log(flowers); // Output: ['peony', 'daffodil', 'marigold', 'lily']

~~~

Repasemos lo que sucedió en el ejemplo:

- El arreglo de flowers que tiene 3 elementos.
- La función addFlower() tiene un parámetro de arr usa .push() para agregar un elemento 'lily' en arr.
- Llamamos a addFlower() con un argumento de flowers que ejecutará el código dentro de addFlower.
- ¡Comprobamos el valor de las flowers y ahora incluye el elemento 'lily'! ¡El array fue mutado!

Entonces, cuando pasas un array a una función, si el array se muta dentro de la función, ese cambio también se mantendrá fuera de la función.

## Ejercicios

### 1

En main.js, hay un array concept. También hay una función changeArr que asignará al elemento en el índice 3 de un array a 'MUTATED'. La función changeArr fue llamada con un argumento de concept.

Debajo de la llamada de función, imprima concept en la consola para verificar si esta reasignación mutó el array.

### 2

Verifiquemos dos veces qué sucede si mutamos un array usando un método incorporado dentro de una función.

Bajo la instrucción console.log(), defina otra función llamada removeElement que tome un parámetro de newArr. Dentro del cuerpo de la función, llame a .pop() en newArr.

### 3

Llame a removeElement() con concept como argumento.

### 4

Después de llamar a removeElement(concept), verifica el valor de concept imprimiendo en consola.

¡Observe que en ambos casos, el cambio del array se mantuvo fuera de la función!