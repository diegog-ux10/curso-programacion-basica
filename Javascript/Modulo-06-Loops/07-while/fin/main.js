const cards = ['diamante', 'pica', 'corazón', 'trébol'];

// Escriba su código a continuación

let currentCard

while (currentCard !== 'pica') {
    currentCard = cards[Math.floor(Math.random() * 4)]
    console.log(currentCard)
}