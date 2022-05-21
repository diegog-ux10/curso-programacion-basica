//Funcion para verificar que la eleccion del usuario sea correcta
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'tijeras' || userInput === 'piedra' || userInput === 'papel' || userInput === 'bomba') {
      return userInput
    } else {
      console.log('Elige una opción correcta: piedra, papel o tijeras')
    }
  }

//Funcion para determinar un opcion aleatoria para la computadora
const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3)
    switch (randomNumber) {
        case 0:
            return 'tijeras';
        break;
        case 1:
            return 'piedra';
        break;
        case 2:
            return 'papel';
        break;
        default:
            return 'error!'
    }
}

//Funcion para determinar el ganador
function determineWinner (userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'Es un Empate!'
    }

    if (userChoice === 'piedra') {
        if(computerChoice === 'papel') {
            return 'Lo siento la computadora ganó'
        } else {
            return 'Felicidades, Ganaste!'
        }
    }
    
    if (userChoice === 'papel') {
        if (computerChoice === 'tijeras') {
            return 'Lo siento la computadora ganó'
        } else {
            return 'Felicidades, Ganaste!'
        }
    }
    
    if (userChoice === 'tijeras') {
        if (computerChoice === 'piedra') {
            return 'Lo siento la computadora ganó'
        } else {
            return 'Felicidades, Ganaste!'
        }
    }

    if (userChoice === 'bomba') {
        return 'Ganaste! pero explotaste todo el lugar'
    }
}

userInput = 'tijeras'

//Funcion para correr el juego
const playGame = function() {
    //Crear variables
    const userChoice = getUserChoice(userInput)
    const computerChoice = getComputerChoice()
    //Monstrar elecciones
    console.log(`Tu elegiste ${userChoice}`)
    console.log(`La computadora eligió ${computerChoice}`)
    //Resultado
    console.log(determineWinner(userChoice, computerChoice))
}

playGame()