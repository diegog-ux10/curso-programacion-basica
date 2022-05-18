# Funciones Expresivas

Otra forma de declarar una función es usar una funcion expresiva. Para declarar una función dentro de una expresión, podemos usar la palabra clave function. En una funcion expresiva, el nombre de la función generalmente se omite. Una función sin nombre se llama función anónima. Una funcion expresiva a menudo se almacena en una variable para hacer referencia a ella.

Para declarar una funcion expresiva:

1. Declare una variable para que el nombre de la variable sea el nombre o identificador de su función. Desde el lanzamiento de ES6, es una práctica común usar const como palabra clave para declarar la variable.

2. Asigne como valor de esa variable una función anónima creada usando la palabra clave function seguida de un conjunto de paréntesis con posibles parámetros. Luego, un conjunto de llaves que contienen el cuerpo de la función.

3. Para invocar una funcion expresiva, escriba el nombre de la variable en la que se almacena la función seguido de paréntesis que encierran los argumentos que se pasan a la función.

variableName(argumento1, argumento2)

A diferencia de las funciones normales, las funciones expresivas se compilan diferente, por lo que no se pueden llamar antes de declararlas.

Definamos una nueva función usando una funcion expresiva.

## Ejercicios

### 1

Digamos que tenemos una planta que necesitamos regar una vez a la semana los miércoles. Podríamos definir funcion expresiva que nos ayude a verificar el día de la semana y si la planta necesita ser regada:

1. Cree una variable llamada plantNeedsWater utilizando la palabra clave const variable.

2. Asigne una función anónima que tome un parámetro day para plantNeedsWater.

### 2

Ahora necesitamos agregar algo de código al cuerpo de la función de plantNeedsWater():

En el cuerpo de la función, agregue un condicional if que verifique day === 'Miércoles'.

Si el condicional es verdadero, dentro del bloque de código if, use la palabra clave return para devolver true.

### 3

En los días que no son 'Miércoles', plantNeedsWater() debería devolver false:

Agregue una declaración else después de la declaración if.
Dentro de la declaración else use la palabra clave return para devolver false.

### 4

Llame a plantNeedsWater() y pase 'Martes' como argumento.

### 5

Comprobemos que plantNeedsWater() devolvió el valor esperado.

Imprima plantNeedsWater('Martes') en la consola. Si funcionó correctamente, debería ver false registrado en la consola.