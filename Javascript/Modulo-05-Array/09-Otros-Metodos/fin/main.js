const groceryList = ['Jugo de Naranja', 'Bananas', 'Cafe', 'Arroz', 'Pasta', 'Aceite de Coco', 'Queso'];

groceryList.shift();

// console.log(groceryList);

groceryList.unshift('Palomitas de Maiz');

// console.log(groceryList);

console.log(groceryList.slice(2, 4));

// console.log(groceryList);

const pastaIndex = groceryList.indexOf('Pasta');

console.log(pastaIndex);