# Crear una variable: const

La palabra clave *const* también se introdujo en ES6 y es la abreviatura de la palabra constante. Al igual que con *var* y *let* permite almacenar cualquier valor en una variable *const*. Echa un vistazo al siguiente ejemplo:

~~~

const myName = 'Gilberto';
console.log(myName); // Output: Gilberto

~~~

Sin embargo, una variable *const* no se puede reasignar porque es constante. Si intenta reasignar una variable *const*, obtendrá un *TypeError*.

A las variables constantes se les debe asignar un valor cuando se declaran. Si intenta declarar una variable *const* sin un valor, obtendrá un *SyntaxError*.

Si está tratando de decidir entre qué palabra clave usar, let o const, piense si necesitará reasignar la variable más adelante. Si necesita reasignar la variable, use let; de lo contrario, use *const*.

## Ejercicios

### 1

Cree una variable const llamada entree y configúrela para que sea igual al string 'Enchiladas'.

### 2

Solo para verificar que haya guardado el valor de 'Enchiladas', imprima el valor de la variable entree en la consola.

### 3

Genial, veamos qué sucede si intentas reasignar una variable constante.

Pegue el siguiente código en la parte inferior de su programa.

~~~
entree = 'Tacos'
~~~

Este código arroja el siguiente error cuando ejecuta su código:

TypeError: Assignment to constant variable.