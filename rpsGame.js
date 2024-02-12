// Start the game

    // Create the object with the game itens

    // Create a round times counter

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

    function getComputerChoice() {
        let randomNum = Math.random() * 3;
        randomNum = Math.floor(randomNum);
        let computerChoice = rpsItens[randomNum]
        return computerChoice
    }

    function getPlayerChoice(){
        let playerChoice = ""
       
        while (true) {
            playerChoice = prompt("Choose one: (Rock, Paper or Scissors)")

            if (playerChoice.length <= 3) {
                alert("[!] type again")
                
            }else {

                let char0 = playerChoice[0].toUpperCase()
                playerChoice = playerChoice.toLowerCase()
                playerChoice = playerChoice.replace(playerChoice.charAt(0), char0)

                if (!rpsItens.includes(playerChoice)) {

                    alert("[!] type again")
                                     
                } else{

                    return playerChoice

                }
            }

        }
        
    }

    for (let index = 0; index < roundCounter; index++) {
        playRound(getPlayerChoice(), getComputerChoice())
        
    }
    

    function playRound(player, computer){

        console.log(`jogador ${player}, pc ${computer}`)
        winnerIs(player, computer)

        
        
        
    }
    
    function winnerIs(player, computer){
        
        if(player == "Rock" ){
            if (computer == "Paper") {
                console.log("Paper beats Rock [Pc +1 Point]")
            }else if (computer == "Scissors") {
                console.log("Rock beats Scissors [Player +1 Point]")               
            }else if(computer == "Rock"){
                console.log("Draw")
            }
            
        }

        if (player == "Paper") {
            if (computer == "Paper") {
                console.log("Draw")
            }else if (computer == "Scissors") {
                console.log("Scissors beats Paper [Pc +1 Point]")               
            }else if(computer == "Rock"){
                console.log("Paper beats Rock [Player +1 Point]")
            }
            
        }

        if (player == "Scissors") {
            if (computer == "Paper") {
                console.log("Scissors beats Paper [Player +1 Point]")
            }else if (computer == "Scissors") {
                console.log("Draw")               
            }else if(computer == "Rock"){
                console.log("Rock beats Scissors [Pc +1 Point]")
            }
        }
    }

}


playGame()
