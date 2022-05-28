# Do...While

En algunos casos, desea que un fragmento de código se ejecute al menos una vez y luego se repita en función de una condición específica. Aquí es donde entra en juego la sentencia do...while.

Una declaración do...while dice que se debe hacer una tarea una vez y luego seguir haciéndola hasta que ya no se cumpla una condición específica. La sintaxis para una instrucción do...while se ve así:

~~~

let countString = '';
let i = 0;
 
do {
  countString = countString + i;
  i++;
} while (i < 5);
 
console.log(countString);

~~~

En este ejemplo, el bloque de código realiza cambios en la variable countString al agregarle la forma de cadena de la variable i. Primero, el bloque de código después de la palabra clave do se ejecuta una vez. Luego se evalúa la condición. Si la condición se evalúa como verdadera, el bloque se ejecutará nuevamente. El bucle se detiene cuando la condición se evalúa como falsa.

Tenga en cuenta que el ciclo while y do...while son diferentes. A diferencia del bucle while, do...while se ejecutará al menos una vez, ya sea que la condición se evalúe como verdadera o no.

~~~

const firstMessage = 'I will print!';
const secondMessage = 'I will not print!'; 
 
// A do while with a stopping condition that evaluates to false
do {
 console.log(firstMessage)
} while (true === false);
 
// A while loop with a stopping condition that evaluates to false
while (true === false){
  console.log(secondMessage)
};

~~~

## Ejercicios

### 1

Nos gustaría un programa para simular parte del proceso de horneado de pasteles. Dependiendo de la receta, se requiere una cantidad diferente de tazas de azúcar. Cree la variable cupsOfSugarNeeded y asígnele un valor numérico de su elección.

Las tazas de azúcar se deben agregar a la masa de una en una. Declare la variable cupsAdded y asígnele el valor 0.
 
## 3

Somos golosos, por lo que queremos agregar al menos una taza de azúcar a la masa, incluso si el valor de cupsOfSugarNeeded es 0.

Cree un ciclo do...while que incremente cupsAdded en uno mientras cupsAdded es menor que cupsOfSugarNeeded.

Para ayudarnos a visualizar el resultado en cada iteración del ciclo, agregue un archivo console.log dentro del bloque do...while y registre el valor de cupsAdded.