# Día de la carrera

¡La carrera anual de 7even está a la vuelta de la esquina! Este año tenemos muchos participantes. Te han contratado para escribir un programa que inscribirá a los corredores para la carrera y les dará instrucciones de el día de la carrera.

Así es como funciona nuestro registro. Hay corredores adultos (mayores de 18 años) y corredores jóvenes (menores de 18 años). Pueden registrarse temprano o tarde. A los corredores se les asigna un número de carrera y una hora de inicio en función de su edad y hora de inscripción.

Números para la carrera:

- Los adultos que se registren temprano reciben un número de carrera igual o superior a 1000.

Todos los demás reciben un número por debajo de 1000.
Hora de inicio:

1. Los adultos inscritos corren a las 9:30 a. m. o a las 11:00 a. m.

    - Los adultos que se regristraron temprano corren a las 9:30 am.

    - Los adultos que se registraron tarde corren a las 11:00 am.

2. Los jóvenes que se inscriban corren a las 12:30 pm.(independientemente de la inscripción).

## Paso a Paso

### 1

Los números de carrera se asignan al azar. Ve el codigo que hemos proporcionado en la parte superior del archivo raceDay.js.

### 2

Cree una variable que indique si un corredor se registró temprano o no.

Establézcalo igual a un valor booleano. Cambiará esto más adelante a medida que pruebe diferentes condiciones de corredores.

### 3

Cree una variable para la edad del corredor y configúrela como un número.

Cambiará esto más adelante a medida que pruebe diferentes condiciones de corredores.

### 4

Cree una declaración de flujo de control que verifique si el corredor es un adulto Y se registró temprano.

Agregue 1000 a su número de carrera si esto es cierto.

### 5

Cree una declaración de flujo de control separada, debajo de la primera (comenzando con if nuevamente). Esta declaración verificará la edad y el tiempo de registro para determinar la hora de la carrera.

Para los corredores mayores de 18 años que se registraron temprano, imprima en la consola una declaración diciéndoles que correrán a las 9:30 am. Incluya su número de carrera.

### 6

“Los adultos que se registraron tarde corren a las 11:00 am”

Como ya verificamos los primeros adultos, podemos escribir una declaración como esta: else if: si el corredor tiene más de 18 años Y no se registró temprano, correrá a las 11:00 a.m.

Dentro de eso, registre una cadena en la consola diciéndoles que competirán a las 11:00 am. Incluya su número de carrera.

### 7

“Los jóvenes que se registraron corren a las 12:30 p. m. (independientemente de la hora de registro)”

Para las personas menores de 18 años, registre una declaración en la consola diciéndoles que competirán a las 12:30 p.m. Incluya su número de carrera.

### 8


Ingrese diferentes combinaciones de valores para las dos variables que creó y ejecute su código varias veces. ¡Verifique que las declaraciones correctas se están imprimiendo en la consola!