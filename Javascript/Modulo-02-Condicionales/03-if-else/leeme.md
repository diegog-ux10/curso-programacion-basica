# Declaraciones If...Else

En el ejercicio anterior, usamos una instrucción if que verificaba una condición para decidir si ejecutar o no un bloque de código. En muchos casos, tendremos código que queremos ejecutar si nuestra condición se evalúa como falsa.

Si quisiéramos agregar algún comportamiento predeterminado a la declaración if, podemos agregar una declaración else para ejecutar un bloque de código cuando la condición se evalúe como falsa. Eche un vistazo a la inclusión de una declaración else:

if (false) {
  console.log('Este bloque de codigo no se ejecutará');
} else {
  console.log('Pero este bloque sí se ejecutará');
}

Una instrucción else debe combinarse con una instrucción if, y juntas se denominan instrucción if...else.

En el ejemplo anterior, la sentencia else:

- Utiliza la palabra clave else después del bloque de código de una instrucción if.
- Tiene un bloque de código que está envuelto por un conjunto de llaves {}.
- El código dentro del bloque de código de la declaración else se ejecutará cuando la condición de la declaración if se evalúe como falsa.
- Las declaraciones if...else nos permiten automatizar soluciones a preguntas de sí o no, también conocidas como decisiones binarias.

## Ejercicios

### 1

Agregue una sentencia else a la sentencia if existente. Dentro del bloque de código de la instrucción else, console.log() la cadena de caracteres 'Vamos a esperar'.