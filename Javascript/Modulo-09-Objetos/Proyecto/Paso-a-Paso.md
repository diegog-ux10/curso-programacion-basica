# Meal Maker

Un restaurante lo contrató para crear una función para su sitio web que les permita establecer una comida y un precio cada mañana para el especial de hoy. ¡Use su conocimiento de getters y setters para asegurarse de que cualquier persona que use la nueva función pueda generar una comida y un precio para el especial de hoy sin errores vergonzosos!

## Paso a Paso

### 1

Mantendremos la comida, el precio y sus respectivos getters y setters en un objeto llamado menu.

En app.js, cree un objeto de menú vacío.

### 2

El objeto del menú contendrá la comida y el precio del especial de hoy como propiedades y no deben modificarse directamente.

Dentro del objeto de menú, cree una propiedad _meal con un valor de una cadena vacía (''). Esto eventualmente mantendrá el nombre de la comida.

### 3

A continuación, agregue una propiedad _price con un valor de 0. Esto eventualmente tendrá el precio de la comida y tampoco debe modificarse directamente.

### 4

Sabemos que las propiedades que comienzan con _ no deben manipularse directamente. Pero solo para validar este conocimiento, ¡pruébelo!

Debajo del objeto de menú, manipule directamente las dos propiedades asignando a _meal un valor numérico y a _price un valor de cadena.

Luego, debajo de las nuevas asignaciones, console.log() el objeto menu para ver cómo sobreescribir estos valores directamente podría causar confusión para un visitante del sitio web.

### 5

Para reasignar de manera segura las dos propiedades del menú, podemos agregar setters para verificar los valores que se asignan.

Debajo de las propiedades, use la palabra clave set para crear un método de setter para _meal con mealToCheck como parámetro. Deje el cuerpo de la función vacío por ahora.

### 6 


En el cuerpo del método setter, cree una declaración if que verifique si mealToCheck es un string. Si es así, devuelva la propiedad _meal del objeto con mealToCheck asignado como valor.

### 7

Utilizando los mismos procedimientos anteriores, use la palabra clave set para crear un asignador de precios con priceToCheck como parámetro. Este método debe asegurarse de que el valor asociado con _price sea siempre un número.

### 8

Debajo del objeto de menu, establezca los valores de _meal y _price utilizando los métodos setters recién creados. Luego, console.log() el objeto de menú para verificar su funcionalidad.

### 9

Ahora es el momento de devolver de forma segura los valores de las propiedades _meal y _price en un formato legible. En lugar de acceder directamente a las propiedades, podemos usar un método getter que verifique de manera proactiva si una comida y un precio se han establecido correctamente, antes de devolver los valores.

Debajo de los configuradores, use la palabra clave get para crear un método todaysSpecial. Deje el cuerpo de la función vacío por ahora.

### 10

En el cuerpo del getter, cree una instrucción if…else para comprobar si existen valores de _meal y _price (o si son valores truthy). Si es así, devuelva una cadena que indique a los visitantes potenciales del sitio web cuál es el especial de hoy. Por ejemplo: "¡La oferta especial de hoy es espaguetis por $5!"

Si los valores de _meal y _price no existen (o son falsy), devuelva la cadena '¡La comida o el precio no se establecieron correctamente!'.

### 11

Finalmente, use el método getter para todaySpecial y haga console.log.