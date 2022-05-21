# Alcance de bloque

El siguiente contexto que cubriremos es el alcance del bloque. Cuando una variable se define dentro de un bloque, solo es accesible para el código dentro de las llaves {}. Decimos que la variable tiene alcance de bloque porque solo es accesible para las líneas de código dentro de ese bloque.

Las variables que se declaran con alcance de bloque se conocen como variables locales porque solo están disponibles para el código que forma parte del mismo bloque.

El alcance del bloque funciona así:

~~~

const logSkyColor = () => {
  let color = 'blue'; 
  console.log(color); // blue 
};
 
logSkyColor(); // blue 
console.log(color); // ReferenceError

~~~

1. Definimos una función logSkyColor().
2. Dentro de la función, la variable color solo está disponible dentro de las llaves de la función.
3. Si intentamos registrar la misma variable fuera de la función, arroja un error.

## Ejercicios

### 1

En main.js, defina una función logVisibleLightWaves().

### 2

Dentro de la función logVisibleLightWaves(), usando const, crea una variable lightWaves y establécela igual a 'Moonlight'.

### 3

Dentro de la función logVisibleLightWaves(), debajo de la variable lightWaves, agregue una instrucción console.log() que registrará el valor de la variable lightWaves cuando se ejecute la función.

### 4

Llame a la función logVisibleLightWaves().

### 5

Debajo, registre el valor de lightWaves en la consola desde fuera de la función.

Notarás que registra un ReferenceError ya que la variable está vinculada al alcance del bloque de la función.