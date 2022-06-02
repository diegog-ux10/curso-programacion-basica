const addTwo = num => {
    return num + 2;
  }
  
const checkConsistentOutput = (func, val) => {
    const checkA = val + 2;
    const checkB = func(val);
    if (checkA === checkB) {
        func(val)
    } else {
        return 'Resultados Inconsistentes'
    }
}

console.log(checkConsistentOutput(addTwo, 2));