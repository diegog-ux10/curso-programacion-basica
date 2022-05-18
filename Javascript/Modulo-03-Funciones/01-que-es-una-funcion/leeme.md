# ¿Qué son las funciones?

Para calcular el área de un rectángulo, hay una secuencia de pasos:

1. Mide el ancho del rectángulo.
2. Mide la altura del rectángulo.
3. Multiplica el ancho por el alto del rectángulo.

Con la práctica, puedes calcular el área del rectángulo sin que te indiquen estos tres pasos cada vez que lo quieras hacer.

Podemos calcular el área de un rectángulo con el siguiente código:

~~~

const width = 10;
const height = 6;
const area =  width * height;
console.log(area); // Salida: 60

~~~

Imagina que te pidan calcular el área de tres rectángulos diferentes:

~~~

// Area del primer rectangulo
const width1 = 10;
const height1 = 6;
const area1 =  width1 * height1;
 
// Area del segundo rectangulo
const width2 = 4;
const height2 = 9;
const area2 =  width2 * height2;
 
// Area del tercero rectangulo
const width3 = 10;
const height3 = 10;
const area3 =  width3 * height3;

~~~

En programación, a menudo usamos código para realizar una tarea específica varias veces. En lugar de reescribir el mismo código, podemos agrupar un bloque de código y asociarlo con una tarea, luego podemos reutilizar ese bloque de código cada vez que necesitemos realizar la tarea nuevamente. Logramos esto creando una función. Una función es un bloque de código reutilizable que agrupa una secuencia de declaracions para realizar una tarea específica.

En este modulo, aprenderas cómo crear y usar funciones, y cómo se pueden usar para crear código más claro y conciso.