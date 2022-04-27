# ¿Por qué cambiar el modelo de caja?

Este modulo se centró en los aspectos más importantes del modelo de caja: dimensiones de la caja, bordes, padding y margen.

El modelo de caja, sin embargo, tiene una limitación incómoda con respecto a las dimensiones de la caja. Esta limitación se ilustra mejor con un ejemplo.

~~~
<h1>Hola mundo</h1>

h1 {
  borde: 1px negro sólido;
  altura: 200px;
  ancho: 300px;
  padding: 10px;
}
~~~

En el ejemplo anterior, el cuadro de un elemento de encabezado tiene bordes sólidos, negros y de 1 píxel de grosor. La altura del cuadro es de 200 píxeles, mientras que el ancho del cuadro es de 300 píxeles. También se ha establecido un padding de 10 píxeles en los cuatro lados del contenido de la caja.

Lamentablemente, con el modelo de caja actual, el grosor del borde y el padding afectarán las dimensiones de la caja.

Los 10 píxeles de padding aumentan la altura del cuadro a 220 píxeles y el ancho a 320 píxeles. A continuación, el borde de 1 píxel de grosor aumenta la altura a 222 píxeles y el ancho a 322 píxeles.

En este modelo de caja, el grosor del borde y el padding se agregan a las dimensiones generales de la caja. Esto hace que sea difícil dimensionar con precisión una caja. Con el tiempo, esto también puede hacer que todo el contenido de una página web sea difícil de posicionar y administrar.

Ahora, aprenderá cómo usar una técnica diferente que evita este problema por completo.