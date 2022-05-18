# Parámetros y Argumentos

Hasta ahora, las funciones que hemos creado ejecutan una tarea sencilla. Sin embargo, algunas funciones pueden tomar informacion y usar esa informacion para realizar una tarea. Al declarar una función, podemos especificar sus parámetros. Los parámetros permiten que las funciones acepten datos o informacion y realicen una tarea usando esos datos. Usamos parámetros como marcadores de posición para la información que se pasará a la función cuando se llame.

Al llamar a una función que tiene parámetros, especificamos los valores entre paréntesis que siguen al nombre de la función. Los valores que se pasan a la función cuando se llama se llaman argumentos. Los argumentos se pueden pasar a la función como valores o variables.

## Ejercicios

### 1

La función sayThanks() funciona bien, pero agreguemos el nombre del cliente en el mensaje.

Agregue un parámetro llamado name a la declaración de función para sayThanks().

### 2

Con name como parámetro, se puede usar como una variable en el codigo dentro de la función sayThanks().

Usando el nombre y la concatenación de cadenas, cambie el mensaje de agradecimiento a lo siguiente:

'¡Gracias por su compra ' + nombre + '!.'

### 3

Un cliente llamado Carlos acaba de comprar algo en su tienda en línea. Llame a sayThanks() y pase 'Carlos' como argumento para enviar a Carlos un mensaje de agradecimiento personalizado.