# Colapso de margen

Como ha visto, el padding es un espacio agregado dentro del borde de un elemento, mientras que el margen es un espacio agregado fuera del borde de un elemento. Una diferencia adicional es que los márgenes superior e inferior, también llamados márgenes verticales, colapsan, mientras que el padding superior e inferior no lo hace.

Los márgenes horizontales (izquierdo y derecho), como el padding, siempre se muestran y se suman. Por ejemplo, si dos divs con ids #div-one y #div-two están uno al lado del otro, estarán tan separados como la suma de sus márgenes adyacentes.

~~~

#img-one {
  margin-right: 20px;
}
 
#img-two {
  margin-left: 20px;
}

~~~

En este ejemplo, el espacio entre los bordes #img-one y #img-two es de 40 píxeles. El margen derecho de #img-one (20 px) y el margen izquierdo de #img-two (20 px) se suman para hacer un margen total de 40 píxeles.

A diferencia de los márgenes horizontales, los márgenes verticales no se suman. En cambio, el mayor de los dos márgenes verticales establece la distancia entre los elementos adyacentes.

~~~

#img-one {
  margin-bottom: 30px;
}
 
#img-two {
  margin-top: 20px;
}

~~~

En este ejemplo, el margen vertical entre los elementos #img-one y #img-two es de 30 píxeles. Aunque la suma de los márgenes es de 50 píxeles, el margen se contrae, por lo que el espaciado solo depende del margen inferior #img-one.

Puede ser útil pensar en el colapso de los márgenes verticales como una persona de baja estatura que intenta empujar a una persona más alta. La persona alta tiene brazos más largos y puede empujar fácilmente a la persona baja, mientras que la persona con brazos cortos no puede alcanzar a la persona con brazos largos.