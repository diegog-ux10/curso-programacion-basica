# Esfera Magica

Has aprendido una poderosa herramienta en JavaScript: Es tan poderoso, de hecho, que puede usarse para adivinar la fortuna de alguien.

En este proyecto construiremos un *Esfera Magica* utilizando un flujo de control en JavaScript.

El usuario podrá ingresar una pregunta, luego nuestro programa generará una respuesta aleatoria.

## Paso a Paso

### 1 

En la primera línea del programa, defina una variable llamada userName que se establece en una cadena de caracteres vacía.

Si el usuario lo desea, puede ingresar su nombre entre comillas.

### 2

Debajo de esta variable, cree una expresión ternaria que decida qué hacer si el usuario ingresa un nombre o no. Si el usuario ingresa un nombre, como 'Jane', use la interpolación de cadenas para registrar ¡Hola, Jane! a la consola De lo contrario, simplemente inicie sesión ¡Hola!.

### 3

Cree una variable llamada userQuestion. El valor de la variable debe ser un string que sea la pregunta que el usuario quiere hacerle a la esfera magica.

### 4

Escriba un console.log() para imprimir la pregunta del usuario, indicando lo que se preguntó. ¡Puede incluir el nombre del usuario en el mensaje de console.log(), si lo deseas!

### 5

Necesitamos generar un número aleatorio entre 0 y 7.

Cree otra variable y asígnele el nombre randomNumber. Establézcalo igual a una expresion, que utilice dos métodos de Math (Math.floor() y Math.random()).

### 6

Cree una variable más llamada magicBall y configúrela como una cadena de caracteres vacía. Guardaremos un valor para esta variable en los próximos pasos, dependiendo del valor de randomNumber.

### 7

Necesitamos crear un flujo de control que tome el número aleatorio que hicimos en el paso 5, y luego asigne magicBall a una respuesta que devolvería una Esfera magica. Piense en utilizar sentencias if/else o switch. Aquí hay 8 frases de la esfera magica que nos gustaría guardar en la variable magicBall:

'Sí'
'Definitivamente sí'
'No estoy seguro, intenta otra vez'
'No se puede predecir ahora'
'No cuentes con ello'
'Mis fuentes dicen que no'
'El pronostico no es tan bueno'
'Las señales apuntan a que sí'

Si el randomNumber es 0, guarde una respuesta a la variable magicBall; si randomNumber es 1, guarde la siguiente respuesta, y así sucesivamente. Si te sientes creativo, ¡haz tus propias respuestas!

### 9

¡Ejecute su programa varias veces para ver resultados aleatorios en la consola!

Si quieres práctica extra:

Si comenzó con una declaración de switch, conviértala en declaraciones if/else.

Si comenzó con sentencias if/else, conviértalas en una sentencia switch.