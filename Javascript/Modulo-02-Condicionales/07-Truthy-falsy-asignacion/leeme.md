# Asignación

¡Las evaluaciones truthy y falsy abren un mundo de posibilidades abreviadas!

Digamos que tiene un sitio web y desea tomar el nombre de usuario para hacer un saludo personalizado. A veces, el usuario no tiene una cuenta, lo que hace que la variable del nombre de usuario sea falsy. El siguiente código verifica si el nombre de usuario está definido y asigna una cadena predeterminada si no lo está:

let username = '';
let defaultName;
 
if (username) {
  defaultName = username;
} else {
  defaultName = 'Stranger';
}
 
console.log(defaultName); // Imprime: Stranger

Si combina su conocimiento de los operadores lógicos, puede usar una abreviatura para el código anterior. En una condición booleana, JavaScript asigna el valor verdadero a una variable si usa el || operador en su asignación:

let username = '';
let defaultName = username || 'Stranger';
 
console.log(defaultName); // Prints: Stranger 

 Gracias al operador || las declaraciones verifican primero la condición de la izquierda. A la variable defaultName se le asignará el valor de nombre de usuario si es truthy, o se le asignará el valor de 'stanger' si el nombre de usuario es falsy. Este concepto también se conoce como short-circuit evaluation.

 ## Ejercicios

 ### 1

Usemos la evaluación de short-circuit para asignar un valor a writingUtensil. No edite la variable tool todavía, volveremos a tool en el siguiente paso.

Asigne a writingUtensil el valor de tool y, si la variable tool es falsy, asigne un valor predeterminado de 'Lá piz'.

### 2

Observe que el texto "El Lápiz es mas poderoso que la espada." se registró en la consola. Lo que significa que el valor de writingUtensil es 'Lápiz'.

¿Qué pasa si reasignamos el valor de tool a 'Bolígrafo'? Veamos qué sucede con el valor de writingUtensil.