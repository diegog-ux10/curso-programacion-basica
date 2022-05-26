# Piedra, papel o tijera

Piedra, papel o tijera es un juego clásico de dos jugadores. Cada jugador elige: piedra, papel o tijera. Los elementos se comparan y el jugador que elige el elemento más poderoso gana.

Los posibles resultados son:

1. Roca destruye tijeras.
2. Tijeras cortan papel.
3. El papel cubre la roca.

Si hay un empate, entonces el juego termina en empate.
Nuestro código dividirá el juego en cuatro partes:

1. Obtener la elección del usuario.
2. Obtener la elección de la computadora.
3. Compare las dos opciones y determine un ganador.
4. Mostrar los resultados.

## Paso a Paso

### 1

El usuario debería poder elegir 'piedra', 'papel' o 'tijeras' cuando comience el juego.

Usando la sintaxis de función de flecha, cree una función llamada getUserChoice que tome un solo parámetro *userInput*.

### 2

Dado que un usuario puede pasar un argumento, como "Piedra" o "piedra" es decir, con o sin mayúsculas. Dentro del cuerpo de la función: Comience utilizando el metodo de los strings toLowerCase() para hacer que la opción del usuario esté en minúsculas.

### 3

Al obtener la elección del usuario, también debe asegurarse de que el usuario haya escrito una opción válida: "piedra", "papel" o "tijeras".

Dentro de getUserChoice(), escriba una instrucción if/else que asegure que la entrada del usuario sea 'piedra', 'papel' o 'tijeras'. Si es así, devuelva la entrada de usuario. De lo contrario, use console.log para imprimir un mensaje de error en la consola.

### 4

Pruebe la función llamándola con argumentos válidos y no válidos e imprimiendo los resultados en la consola.

Puede eliminar esto cuando sepa que su función funciona.

### 5

Ahora necesitamos que la computadora elija una opción.

Cree una nueva función llamada getComputerChoice sin parámetros. Dentro de su bloque, utilice Math.random() y Math.floor() para obtener un número entero entre 0 y 2. Luego, según el número, devuelva 'piedra', 'papel' o 'tijeras'.

### 6

Pruebe la función llamándola varias veces e imprimiendo los resultados en la consola.

Puede eliminar esto cuando sepa que su función funciona.

### 7

Ahora es el momento de determinar un ganador.

Cree una función llamada determineWinner que tome dos parámetros llamados userChoice y computerChoice. Esta función comparará las dos opciones jugadas y luego regresará si el jugador ganó, perdió o empató.

Abordemos primero la condición de empate. Dentro de la función determineWinner(), escriba una declaración if que verifique si el parámetro userChoice es igual al parámetro computerChoice. Si es así, devuelva una cadena de que el juego fue un empate.

### 8

Si el juego no es un empate, deberá determinar un ganador.

Comience escribiendo una declaración if que verifique si la elección del usuario es 'piedra'. Dentro del bloque de esa sentencia if, escribe otra sentencia if/else. El if/else interno debe verificar si computerChoice es 'papel'. Si es así, devuelva un mensaje de que la computadora ganó. Si no, devuelve un mensaje de que el usuario ganó.

### 9

A continuación, escriba otra instrucción if para si la elección del usuario es 'papel'.

Dentro de esta instrucción if, computerChoice debe ser 'tijeras' o 'piedra'. Escriba la lógica que devolverá un ganador.

### 10

A continuación, escriba otra instrucción if para si la elección del usuario es 'tijeras'.

Dentro de esta declaración if, computerChoice debe ser 'piedra' o 'papel'. Escriba la lógica que devolverá un ganador.

### 11

¡No olvides probar tu función!

### 12

Todo está configurado. Ahora necesitas iniciar el juego y registrar los resultados.

Cree una función llamada playGame.

Dentro de la función playGame(), crea una variable llamada userChoice establecida igual al resultado de llamar a getUserChoice(), pasando ya sea 'piedra', 'papel' o 'tijeras' como argumento.

Cree otra variable llamada computerChoice y establézcala igual al resultado de llamar a getComputerChoice().

En ambas variables, use console.log para imprimirlas en la consola.

### 13

Finalmente, determinemos quién ganó.

Dentro de la función playGame(), llame a la función determineWinner(). Pase las variables userChoice y computerChoice como sus argumentos. Asegúrate de poner esta llamada de función dentro de una instrucción console.log() para que puedas ver el resultado.

Luego, para iniciar el juego, llame a la función playGame() en la última línea de su programa.

### 14

Mejora este juego agregando un código secreto. Si un usuario escribe 'bomba' como su elección, entonces asegúrese de que gane, pase lo que pase.