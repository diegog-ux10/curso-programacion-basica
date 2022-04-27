# Box Model: Border-Box

Afortunadamente, podemos restablecer todo el box model y especificar uno nuevo: border-box.

~~~
* {
  box-sizing: border-box;
}
~~~

El código del ejemplo anterior restablece el box model a border-box para todos los elementos HTML. Este nuevo box model evita los problemas dimensionales que existen en el box model anterior que aprendiste.

En este box model, la altura y el ancho de la caja permanecerán fijos. El grosor del borde y el padding se incluirán dentro de la caja, lo que significa que las dimensiones generales de la caja no cambian.

~~~
<h1>Hola Mundo</h1>

 
* {
  box-sizing: border-box;
}
 
h1 {
  border: 1px solid black;
  height: 200px;
  width: 300px;
  padding: 10px;
}
~~~

En el ejemplo anterior, la altura del cuadro permanecería en 200 píxeles y el ancho permanecería en 300 píxeles. El grosor del borde y el relleno permanecerían completamente dentro de la caja.