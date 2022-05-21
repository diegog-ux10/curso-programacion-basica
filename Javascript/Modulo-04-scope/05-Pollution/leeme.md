# Pollution

Puede parecer una gran idea hacer siempre accesibles sus variables, pero tener demasiadas variables globales puede causar problemas en un programa.

Cuando declara variables globales, van al espacio en la memoria global. El espacio de nombres globales permite que las variables sean accesibles desde cualquier parte del programa. Estas variables permanecen allí hasta que finaliza el programa, lo que significa que nuestro espacio de nombres global puede llenarse muy rápido.

Pollution es cuando tenemos demasiadas variables globales que existen en el espacio global, o cuando reutilizamos variables en diferentes alcances. Pollution dificulta el seguimiento de nuestras diferentes variables y nos genera posibles accidentes. Por ejemplo, las variables de alcance global pueden colisionar con otras variables que tienen un alcance más local, lo que provoca un comportamiento inesperado en nuestro código.

Veamos un ejemplo de Pollution en la práctica para que sepamos cómo evitarlo:

~~~

let num = 50;
 
const logNum = () => {
  num = 100; // Presta mucha atencion a esta linea de codigo.
  console.log(num);
};
 
logNum(); // Prints 100
console.log(num); // Prints 100

~~~

Nota lo siguiente:

- Tenemos una variable num.
- Dentro del cuerpo de la función de logNum(), queremos declarar una nueva variable pero olvidamos usar la palabra clave let.
- Cuando llamamos a logNum(), num se reasigna a 100.
- La reasignación dentro de logNum() afecta a la variable global num.

Aunque la reasignación está permitida y no obtendremos un error, si decidimos usar num más tarde, sin saberlo, usaremos el nuevo valor de num.

Si bien es importante saber qué es el alcance global, es una buena práctica no definir variables en el alcance global.

## Ejercicios

### 1

Veamos qué sucede si creamos una variable que sobrescribe una variable global.

Dentro de la función callMyNightSky(), en la primera línea del cuerpo de la función, asigne a la variable stars el valor 'Sirius':

stars = 'Sirius';

### 2

Fuera de la función, agregue otra declaración de console.log() para registrar stars en la consola.

Notarás que la variable global stars se reasignó a 'Sirio'. En otras palabras, cambiamos el valor de la variable global de stars pero no es fácil leer qué sucedió exactamente. Esta es una mala práctica en la mantenibilidad del código y podría afectar nuestro programa de maneras que no pretendemos.