let raceNumber = Math.floor(Math.random() * 1000);

registerEarly = true

age = 18

if (registerEarly === true && age >= 18) {
    raceNumber += 1000
}

if (age >= 18 && registerEarly === true) {
    console.log(`Debes comenzar la carrera a las 9:30 am. Tu número será ${raceNumber}`)
} else if (age >= 18 && registerEarly === false) {
    console.log(`Debes comenzar la carrera a las 11:00 am. Tu número será ${raceNumber}`)
} else if (age < 18) {
    console.log(`Debes comenzar la carrera a las 12:30 pm. Tu número será ${raceNumber}`)
} else {
    console.log('Hubo un error en el registro, lo lamentamos')
}