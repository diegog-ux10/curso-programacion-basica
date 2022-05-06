# Interpolación de strings

En la versión ES6 de JavaScript, podemos insertar o interpolar variables en cadenas usando template literals. Vea el siguiente ejemplo en el que se usa un template literals para imprimir strings juntas:

~~~

const myPet = 'armadillo';
console.log(`I own a pet ${myPet}.`);
// Output: I own a pet armadillo.

~~~

Nota lo siguiente:

- Un template literals está envuelto por comillas inversas ` (ubica esta este signo en tu teclado).

- Dentro del template literals, verá un marcador de posición, ${myPet}. El valor de myPet se inserta en el template literals.

- Cuando interpolamos `I own a pet ${myPet}.`, el resultado que imprimimos es el string: 'I own a pet armadillo'.

Uno de los mayores beneficios del uso de template literals es la legibilidad del código. Usando template literals, puede saber más fácilmente cuál será la nueva string. Tampoco tiene que preocuparse por escapar de las comillas dobles o simples.

## Ejercicios

### 1

Cree una variable llamada myName y asígnele su nombre.

### 2

Cree una variable llamada myCity y asígnele el nombre de su ciudad favorita.

### 3

Use un solo literal de plantilla para interpolar sus variables en la siguiente oración. Usa console.log() para imprimir tu oración en la consola en el siguiente formato:

Mi nombre es NOMBRE. Mi ciudad favorita es CIUDAD.

Reemplace NOMBRE y CIUDAD en el string anterior interpolando los valores guardados en myName y myCity.