# Idioma de Ballenas

Tome una frase como "trementina y tortugas" y tradúzcala a su equivalente de "Idiona de Ballenas": "UUEEIEEAUUEE".

Hay algunas reglas simples para traducir texto al lenguaje de las ballenas:

- No hay consonantes. Solo vowels.
- Las u y las e son muy largas, por lo que debemos duplicarlas en nuestro programa.

Una vez que hemos convertido el texto al lenguaje de las ballenas, el resultado se canta lentamente, como es costumbre en el océano.

Para lograr esta traducción, podemos usar nuestro conocimiento de bucles. ¡Empecemos!

## Paso a Paso

### 1

Cree una variable llamada input que sea igual a cualquier frase que desee. Esta variable contendrá el texto que desea traducir a "Idioma de Ballenas".

### 2

Las ballenas solo hablan con las vocales “a”, “e”, “i”, “o” y “u”. Usando estas letras minúsculas, cree un array llamado vowels. Este array no se actualizará, así que asegúrese de elegir la palabra clave adecuada.

Nota: El uso de esta array será más evidente en los siguientes pasos.

### 3

Cree una variable llamada resultArray y configúrela igual a una array vacía: []. Esto servirá como un lugar para almacenar las vocales del strings que se va a traducir.

### 4

Cree un ciclo para iterar a través de cada letra del texto de la variable de input. En un paso posterior, compararemos cada letra con nuestra array de vowels.

### 5

Aprovecha de Comentar tu código.

### 6

Cree un bucle for anidado dentro del bucle for que acaba de escribir. Haga que el ciclo interno itere a través de la array de vowels cada vez que se ejecuta el ciclo externo.

Esto le permitirá comparar cada letra de entrada con todos los elementos de las vowels durante cada iteración.

### 8

Las ballenas solo usan vocales en su idioma.

Dentro del segundo bucle for, escribe un bloque de código que compare la letra de input con cada letra del array de vowels.

Nota: utiliza un if para hacer esta verificación.

### 9

Las ballenas duplican las e y las u en su idioma.

Si la primera condicion se cumple. Anida otra evaluacion que verifique si la letra es *e* o *u*. Si esto es verdadero entonces inserte dos veces la letra en resultArray.

### 10

Agregue una declaracion else que inserte una vez la letra en el resultArray si es cualquier otra vocal.

### 12

En la parte inferior del programa, imprima resultArray en la consola.

### 13

Actualmente, resultArray genera un array de caracteres. Para producir un lenguaje de ballenas adecuado, queremos poner en mayúsculas los elementos de la array y unirlos como una sola cadena.

Utiliza un metodo de los arrays que unan todos los elementos en una sola cadena de caracteres. Ademas utilice un metodo de los string que transforme esta cadena de caracteres a mayusculas.

Toda esta expresion guardela en una variable llamada resultString

### 14

Ejecute el programa