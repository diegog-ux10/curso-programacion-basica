# Operador Ternario

En el espíritu de usar sintaxis abreviada, podemos usar un operador ternario para simplificar una declaración if...else.

Eche un vistazo al ejemplo de declaración if...else:

~~~

let isNightTime = true;
 
if (isNightTime) {
  console.log('Turn on the lights!');
} else {
  console.log('Turn off the lights!');
}

~~~

Podemos usar un operador ternario para realizar la misma funcionalidad:

isNightTime ? console.log('Turn on the lights!') : console.log('Turn off the lights!');

En el ejemplo anterior:

- La condición, isNightTime, se proporciona antes de ?.
- Dos expresiones siguen al ? y están separados por dos puntos :.
- Si la condición se evalúa como verdadera, se ejecuta la primera expresión.
- Si la condición se evalúa como falsa, se ejecuta la segunda expresión.

Al igual que las declaraciones if...else, los operadores ternarios se pueden usar para condiciones que se evalúan como verdaderas o falsas.

## Ejercicios

### 1

Refactorice, o edite, el primer bloque if...else para usar un operador ternario.

### 2

Refactorice el segundo bloque if...else para usar un operador ternario.

### 2

Refactorice el tercer bloque if...else para usar un operador ternario.