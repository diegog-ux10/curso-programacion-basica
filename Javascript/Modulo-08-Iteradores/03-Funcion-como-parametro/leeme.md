# Funciones como parámetros

Como sabe, un parámetro es un marcador de posición para los datos que se pasan a una función. Dado que las funciones pueden comportarse como cualquier otro tipo de datos en JavaScript, puede que no le sorprenda saber que las funciones pueden aceptar otras funciones como parámetros. Una función de orden superior es una función que acepta funciones como parámetros o devuelve una función o ambas cosas. A las funciones que se pasan como parametros las llamamos callback functions. Callback functions se invocan durante la ejecución de la función de orden superior.

Cuando invocamos una función de orden superior y pasamos otra función como argumento, no invocamos la función de argumento. Invocarlo se evaluaría como pasar el valor de retorno de esa función. Con las fCallback functions, pasamos la función en sí escribiendo el nombre de la función sin paréntesis:

~~~

const higherOrderFunc = param => {
  param();
  return `I just invoked ${param.name} as a callback function!`
}
 
const anotherFunc = () => {
  return 'I\'m being invoked by the higher-order function!';
}
 
higherOrderFunc(anotherFunc);

~~~

1. Escribimos una función de orden superior highOrderFunc que acepta un solo parámetro, param. Dentro del cuerpo, se invoca a param usando paréntesis. Y finalmente, se devuelve una cadena que nos dice el nombre de la función de devolución de llamada que se pasó.

2. Debajo de la función de orden superior, tenemos otra función llamada anotherFunc. Esta función aspira a ser llamada dentro de la función de orden superior.

3. Por último, invocamos highOrderFunc(), pasando anotherFunc como su argumento, cumpliendo así sus sueños de ser llamado por la función de orden superior.

~~~

higherOrderFunc(() => {
  for (let i = 0; i <= 10; i++){
    console.log(i);
  }
});

~~~


En este ejemplo, invocamos a highOrderFunc() con una función anónima (una función sin nombre) que cuenta hasta 10. ¡Las funciones anónimas también pueden ser argumentos!

Practiquemos un poco escribiendo funciones de orden superior.

## Ejercicios

### 1

Aquí tenemos una función, addTwo(), que suma 2 a lo que se le pasa. Debajo de eso, hemos creado lo que será una función de orden superior, checkConsistentOutput(). El propósito de la función de orden superior será verificar el trabajo de addTwo(). ¡Empecemos!

Para comenzar, dentro del cuerpo de checkConsistentOutput(), declara dos variables: checkA y checkB:

- checkA almacena la suma val más 2.
- checkB almacena la invocación func, con val como argumento.

### 2

Luego, debajo de las variables, escriba una declaración condicional que verifique si el valor de checkA es igual al valor de checkB. Si es verdadero, devuelve el resultado de la func con val como argumento. Si es falso, devuelve la cadena 'resultados inconsistentes'.

### 3

Finalmente, usando console.log(), registre la invocación de checkConsistentOutput() con dos argumentos: la función addTwo() y cualquier número.