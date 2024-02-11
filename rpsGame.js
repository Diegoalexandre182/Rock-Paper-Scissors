// Start the game

    // Create the object with the game itens

    // Create a round time number counter

    // Create score count for the computer and for the player
    
    // Loop the round X times

        // Game starts one round

        // The computer roll the dice to choose one item

        // The player choose one item

        // Game checks the round winner

        // Winner receive 1 point to its score

    // Game checks the score point winner 

    // Show game winner message

// Asks to play again

function playGame(){

    const rpsItens = ["Rock", "Paper", "Scissors"]
    const roundCounter = 5
    const playerScore = 0
    const computerScore = 0

    for (let index = 0; index < roundCounter; index++) {
        playRound()
        
    }
    

}

function playRound(){
    
    // const playerChoice = prompt("type your choice:")
    const computerChoice = getComputerChoice()
    return console.log(computerChoice)

}

function getComputerChoice() {
    let randomNum = Math.random();
}
playGame()
