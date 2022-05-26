const concept = ['arrays', 'pueden', 'ser', 'mutados'];

function changeArr(arr){
    arr[3] = 'MUTADO';
  }

changeArr(concept);

function removeElement (newArr) {
    newArr.pop();
  }
  
removeElement(concept);

console.log(concept);