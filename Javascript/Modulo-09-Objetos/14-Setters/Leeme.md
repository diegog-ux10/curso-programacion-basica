# Setters

Junto con los métodos getter, también podemos crear métodos setter que reasignan valores de propiedades existentes dentro de un objeto. Veamos un ejemplo de un método setter:

~~~

const person = {
  _age: 37,
  set age(newAge){
    if (typeof newAge === 'number'){
      this._age = newAge;
    } else {
      console.log('You must assign a number to age');
    }
  }
};\

~~~

Observe que en el ejemplo anterior:

- Podemos realizar una verificación de qué valor se asigna a this._age.
- Cuando usamos el método setter, solo los valores que son números reasignarán this._age
Hay diferentes salidas según los valores que se usen para reasignar this._age.
Luego, para usar el método setter:

~~~

person.age = 40;
console.log(person._age); // Logs: 40
person.age = '40'; // Logs: You must assign a number to age

~~~

Los métodos setters como age no necesitan llamarse con un conjunto de paréntesis. Sintácticamente, parece que estamos reasignando el valor de una propiedad.

Al igual que los métodos getter, existen ventajas similares al usar métodos setter que incluyen verificar la entrada, realizar acciones en las propiedades y mostrar una intención clara de cómo se supone que se debe usar el objeto. No obstante, incluso con un método setter, todavía es posible reasignar propiedades directamente. Por ejemplo, en el ejemplo anterior, aún podemos configurar ._age directamente:

~~~
person._age = 'forty-five'
console.log(person._age); // Prints forty-five

~~~

## Ejercicios

### 1

Actualmente, en robot hay un método getter para numOfSensors pero no un método setter. ¿Qué pasa si necesitamos agregar o quitar algunos sensores? Solucionemos ese problema.

Agregue un método setter llamado numOfSensors usando la palabra clave set. Proporcione un parámetro de num. Deje el cuerpo de la función vacío por ahora.

### 2

Hay un par de cosas que debemos hacer en el método setter:

- Agregue una verificación para ver si num es un número usando el operador typeof.
- num también debe ser mayor o igual a 0.
- Si se cumplen ambas condiciones, procede a reasignar this._numOfSensors a num.

### 3

Ahora agregue un else que registre 'Pasa un número mayor o igual a 0' a la consola.

### 4

Utilice el método setter numOfSensors en el robot para asignar _numOfSensors a 100.

### 5


Para comprobar que el método setter funcionó, console.log() robot.numOfSensors.