const fruits = ['mango', 'papaya', 'piña', 'manzana'];

// Con funcion Anonima
fruits.forEach(function(fruit) {
    console.log(`Quiero comer ${fruit}`)
})

// Con funcion de Flecha
fruits.forEach(fruit => console.log(`Quiero comer ${fruit}`));

// Con Funcion Separada
function printFruit(fruit){
  console.log(`Quiero comer ${fruit}`);
}

fruits.forEach(printFruit);
