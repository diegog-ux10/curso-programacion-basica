# Privacidad

Acceder y actualizar las propiedades es fundamental para trabajar con objetos. Sin embargo, hay casos en los que no queremos que otro código simplemente acceda y actualice las propiedades de un objeto. Cuando discutimos la privacidad en los objetos, la definimos como la idea de que solo ciertas propiedades deben ser mutables o capaces de cambiar de valor.

Ciertos lenguajes tienen privacidad incorporada para los objetos, pero JavaScript no tiene esta función. Más bien, los desarrolladores de JavaScript siguen convenciones de nomenclatura que indican a otros desarrolladores cómo interactuar con una propiedad. Una convención común es colocar un guión bajo _ antes del nombre de una propiedad para indicar que la propiedad no debe modificarse. Aquí hay un ejemplo del uso de _ para anteponer una propiedad.

~~~

const bankAccount = {
  _amount: 1000
}

~~~

En el ejemplo anterior, _amount no está destinado a ser manipulado directamente.

Aun así, todavía es posible reasignar _amount:

~~~

bankAccount._amount = 1000000;

~~~

En ejercicios posteriores, cubriremos el uso de métodos llamados getters y setters. Ambos métodos se utilizan para respetar la intención de las propiedades antepuestas o que comienzan con _. Los getters pueden devolver el valor de las propiedades internas y los setters pueden reasignar valores de propiedad de forma segura. Por ahora, veamos qué sucede si podemos cambiar propiedades que no tienen setters ni getters.

## Ejercicios

### 1

Debajo del objeto robot, reasigne la propiedad _energyLevel a 'high'.

### 2

Ahora eche un vistazo al nuevo método de .recharge() en robot. .recharge() agregará 30 a _energyLevel.

¿Qué pasará ahora que _energyLevel no es un número?

Llame a .recharge() en el robot para averiguarlo.

¡Observe que se imprime un mensaje raro en la consola! Esto se conoce como un efecto secundario de la coerción de tipos. No hay necesidad de preocuparse por lo que esto significa por ahora, pero es importante comprender que puede causar efectos secundarios no deseados al mutar objetos y sus propiedades.