const diegosFollowers = ['Jose', 'Juan', 'Sofia', 'Andres', 'Jean']

const davidsFollowers = ['Camila', 'Jean', 'Alejandra', 'Sofia']

const mutualFollowers  = []

for (let i = 0; i < diegosFollowers.length ; i++) {
    for (let j = 0; j < davidsFollowers.length ; j++) {
        if (diegosFollowers[i] === davidsFollowers[j]) {
            mutualFollowers.push(diegosFollowers[i])
        }
    }
}

console.log(mutualFollowers)

