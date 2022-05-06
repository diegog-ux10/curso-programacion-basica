# typeof

Mientras escribe código, puede ser útil realizar un seguimiento de los tipos de datos de las variables en su programa. Si necesita verificar el tipo de datos del valor de una variable, puede usar el operador typeof.

El operador typeof comprueba el valor a su derecha y devuelve un string del tipo de dato.

const unknown1 = 'foo';
console.log(typeof unknown1); // Output: string
 
const unknown2 = 10;
console.log(typeof unknown2); // Output: number
 
const unknown3 = true; 
console.log(typeof unknown3); // Output: boolean

Analicemos el primer ejemplo. Dado que el valor unknown1 es 'foo', un string, typeof unknown1 devolverá 'string'.

## Ejercicio

### 1

Usa console.log() para imprimir el typeof de newVariable.

### 2

Genial, ahora veamos qué sucede si reasignamos la variable. Debajo de la instrucción console.log(), asigne a newVariable = 1.

### 3

Dado que asignó este nuevo valor a newVariable, ¡tiene un nuevo tipo de dato! En la línea debajo de su reasignación, use console.log() para imprimir typeof newVariable nuevamente.

