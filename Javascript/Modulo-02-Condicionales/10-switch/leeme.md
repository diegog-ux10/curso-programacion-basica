# La palabra clave switch

las declaraciones if else son una gran herramienta si necesitamos verificar múltiples condiciones. En la programación, a menudo nos encontramos con la necesidad de verificar múltiples valores y manejar cada uno de ellos de manera diferente. Por ejemplo:

~~~

let groceryItem = 'papaya';
 
if (groceryItem === 'tomato') {
  console.log('Tomatoes are $0.49');
} else if (groceryItem === 'papaya'){
  console.log('Papayas are $1.29');
} else {
  console.log('Invalid item');
}

~~~

En el código anterior, tenemos una serie de condiciones que buscan un valor que coincida con una variable groceryItem. Nuestro código funciona bien, ¡pero imagina si tuviéramos que verificar 100 valores diferentes! ¡Tener que escribir tantas otras declaraciones suena dolorso!

Una declaración switch proporciona una sintaxis alternativa que es más fácil de leer y escribir. Una declaración de switch se ve así:

~~~

let groceryItem = 'papaya';
 
switch (groceryItem) {
  case 'tomato':
    console.log('Tomatoes are $0.49');
    break;
  case 'lime':
    console.log('Limes are $1.49');
    break;
  case 'papaya':
    console.log('Papayas are $1.29');
    break;
  default:
    console.log('Invalid item');
    break;
}

// Imprime 'Papayas are $1.29'

~~~

- La palabra clave switch inicia la sentencia y va seguida de (...), que contiene el valor que comparará a cada caso. En el ejemplo, el valor o la expresión de la declaración de switch es groceryItem.

- Dentro del bloque, { ... }, hay varios casos. La palabra clave case verifica si la expresión coincide con el valor especificado que viene después. El valor que sigue al primer caso es 'tomate'. Si el valor de GrooveItem fuera igual a 'tomate', se ejecutaría el console.log() de ese caso.

- El valor de GrooveItem es 'papaya', por lo que se ejecuta el tercer caso: Papayas are $1.29.

- La palabra clave break le dice a la computadora que salga del bloque y no ejecute más código ni verifique ningún otro caso dentro del bloque de código. Nota: Sin la palabra clave break, se ejecutará el primer caso coincidente, pero también lo harán todos los casos subsiguientes, independientemente de si coincide o no, incluido el default. Este comportamiento es diferente de las declaraciones condicionales if/else que ejecutan solo un bloque de código.

Al final de cada declaración de switch, hay una declaración default. Si ninguno de los casos es verdadero, se ejecutará el código de la instrucción default.

## Ejercicios

### 1

Escribamos una declaración de switch para decidir qué medalla otorgar a un atleta.

atletaFinalPosition ya está definido en la parte superior de main.js. Así que comience escribiendo una declaración de switch con atletaFinalPosition como su expresión a evaluar.

### 2

Dentro de la instrucción switch, agregue tres casos:

1. El primer caso verifica el valor 'primer lugar'. Si el valor de la expresión coincide con el valor del caso, entonces con console.log() imprima la cadena de caracteres '¡Te ganaste una Medalla de Oro!'

2. El segundo caso verifica el valor 'segundo lugar'. Si el valor de la expresión coincide con el valor del caso, entonces con console.log() imprime la cadena de caracteres "¡Te ganaste una Medalla de Plata!"

3. El tercer caso verifica el valor 'tercer lugar'. Si el valor de la expresión coincide con el valor del caso, entonces con console.log() imprime la cadena de caracteres '¡Te ganaste una Medalla de Bronce!'

*Recuerde agregar un break después de cada console.log().*