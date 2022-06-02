# El método .filter()

Otro método iterador útil es .filter(). Al igual que .map(), .filter() devuelve un nuevo array. Sin embargo, .filter() devuelve un Array de elementos después de filtrar ciertos elementos del Array original. La función callback para el método .filter() debería devolver verdadero o falso según el elemento que se le pase. Los elementos que hacen que la función callback devuelva verdadero se agregan a la nuevo array. Echa un vistazo al siguiente ejemplo:

~~~

const words = ['chair', 'music', 'pillow', 'brick', 'pen', 'door']; 
 
const shortWords = words.filter(word => {
  return word.length < 6;
});

~~~

- Words es un Array que contiene elementos de cadena.
- Const shortWords = declara una nueva variable que almacenará el Array que creé al invocar .filter().
- La función callback es una función de flecha que tiene un solo parámetro, word. Cada elemento de la Array de palabras se pasará a esta función como un argumento.
- word.length < 6; es la condición en la función callback. Cualquier palabra del Array de palabras que tenga menos de 6 caracteres se agregará al Array de shortWords.

Comprobemos también los valores de las palabras y las palabras cortas:

~~~

console.log(words); // Output: ['chair', 'music', 'pillow', 'brick', 'pen', 'door']; 
console.log(shortWords); // Output: ['chair', 'music', 'brick', 'pen', 'door']

~~~

Observe cómo words no mutó o cambió, y shortWords es una nuevo array.

## Ejercicios

### 1

Llame al método .filter() en randomNumbers para devolver valores menores a 250. Guárdelos en una nueva matriz llamada smallNumbers, declarada con const.

### 2

Ahora trabajemos con un array de strings. Invoque .filter() en el array favoriteWords para devolver elementos que tengan más de 7 caracteres. Guarde el nuevo array en una variable const denominada longFavoriteWords.