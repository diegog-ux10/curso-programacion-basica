# Healthy Recipes


¡Usando los selectores de CSS, le darás un nuevo estilo a un sitio web de recetas!

## Paso a Paso

### 1

Antes de comenzar, eche un vistazo a la estructura del sitio en **index.html**. y Enlaza la el archivo con **style.css**.

Comience por hacer la imagen en la parte superior de la página un poco más pequeña. Vaya a **style.css** y escriba un selector de CSS para la etiqueta **img**.

Dentro de sus llaves, escribe:

~~~

height: 150px;

~~~

### 2

El tamaño de fuente de la descripción de la receta debe ser más grande. En **style.css**, escriba un selector de CSS para la clase **.description**.

Dentro de sus llaves, agregue el siguiente CSS:

~~~

font-size: 20px;

~~~

### 3

A continuación, vamos a diseñar el tiempo de cocción. El elemento en la línea 15 de index.html tiene un atributo **id**. Navegue a style.css y agregue un selector de ID de tiempo de cocción.

Dentro de sus llaves, escribe:

~~~

font-weight: bold;

~~~

### 4

Ahora, cambiemos las viñetas de la lista de ingredientes a cuadrados en lugar de círculos. Comience escribiendo un selector para los elementos **li** dentro del elemento **.ingredients**.

Luego, escribe esto dentro de sus llaves:

~~~

list-style: square;

~~~

### 5

A continuación, hagamos que el tiempo de cada paso de preparación aparezca en gris. En **style.css**, escriba un selector para **p** elementos que también tengan una clase de **.time**.

Luego, dentro de las llaves de este selector, escribe:

~~~

color: gray;

~~~

### 6

En la parte inferior de la página, hay un enlace a la receta completa. Hagamos que el enlace tenga un color diferente.

Observe que en index.html, en la línea 42, hay un elemento p con una clase de **.citation**, luego un elemento a dentro de él con una clase de enlace externo. Navegue a **style.css** y escriba un selector usando la clase de enlace externo.

Luego, agregue este código dentro de las llaves del selector:

~~~

color: SeaGreen;

~~~

### 7

Finalmente, hagamos la fuente Helvetica en lugar de la Times New Roman predeterminada. En lugar de escribir varios selectores para aplicar la propiedad de familia de fuentes, escriba un selector que aplique un atributo de familia de fuentes a todo el texto a la vez.

El selector debe apuntar a los elementos **h1**, **h2**, **p** y **li**.

Para cambiar su fuente, incluya esta línea de código dentro de las llaves:

~~~

font-family: Helvetica;

~~~