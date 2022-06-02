# Funciones como datos

Las funciones de JavaScript se comportan como cualquier otro tipo de datos en el lenguaje; podemos asignar funciones a variables y podemos reasignarlas a nuevas variables.

A continuación, tenemos un nombre de función molestamente largo que perjudica la legibilidad de cualquier código en el que se use. Nota: Si la sintaxis de la siguiente función no le resulta familiar, vuelva a realizar el ejercicio de funciones de flecha para refrescar sus conocimientos sobre la notación de flecha de ES6.

~~~

const announceThatIAmDoingImportantWork = () => {
    console.log("I’m doing very important work!");
};

~~~

Supongamos que esta función hace un trabajo importante y necesita ser llamada repetidamente. Para cambiar el nombre de esta función sin sacrificar el código fuente, podemos reasignar la función a una variable con un nombre adecuadamente corto:

~~~

const busy = announceThatIAmDoingImportantWork;
 
busy(); // This function call barely takes any space!

~~~
 
busy es una variable que contiene una referencia a nuestra función original. Si pudiéramos buscar la dirección en la memoria de busy y la dirección en la memoria de announceThatIAmDoingImportantWork, apuntarían al mismo lugar. Nuestra nueva función busy() se puede invocar con paréntesis como si ese fuera el nombre que originalmente le dimos a nuestra función.

Observe cómo asignamos announceThatIAmDoingImportantWork sin paréntesis como el valor de la variable busy. Queremos asignar el valor de la función en sí, no el valor que devuelve cuando se invoca.

En JavaScript, las funciones son objetos (ciudadanos) de primera clase. Esto significa que, al igual que otros objetos que haya encontrado, las funciones de JavaScript pueden tener propiedades y métodos.

Como las funciones son un tipo de objeto, tienen propiedades como .length y .name, y métodos como .toString(). Puede ver más sobre los métodos y propiedades de las funciones en la documentación.

https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Function

Las funciones son especiales porque podemos invocarlas, pero aún podemos tratarlas como cualquier otro tipo de datos. ¡Practiquemos un poco haciendo eso!

## Ejercicios

### 1

Hemos definido una función con un nombre muy largo: checkThatTwoPlusTwoEqualsFourAMillionTimes(). Esta función tarda mucho tiempo en ejecutarse. Comprueba si 2 + 2 = 4, ¡pero lo hace un millón de veces (solo para estar realmente seguro)!

Usando const, declare una variable con un nombre más corto, isTwoPlusTwo, con la que será más fácil trabajar. Asigne checkThatTwoPlusTwoEqualsFourAMillionTimes como su valor.

## 2

Invoque su función isTwoPlusTwo().

### 3

Hmmm, si olvidamos el nombre original de nuestra función. ¿Hay alguna manera de que podamos resolverlo?

Utiliza console.log para imprimir la propiedad name de isTwoPlusTwo.