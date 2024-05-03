function playGame(){

    const rpsItens = ["Rock", "Paper", "Scissors"]
    const roundCounter = 5
    let playerScore = 0
    let computerScore = 0

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
                alert("[EMPTY] try again")
                
            }else {

                let char0 = playerChoice[0].toUpperCase()
                playerChoice = playerChoice.toLowerCase()
                playerChoice = playerChoice.replace(playerChoice.charAt(0), char0)

                if (!rpsItens.includes(playerChoice)) {

                    alert("[TYPO] try again")
                                     
                } else{

                    return playerChoice

                }

            }

        }
        
    }

    function winnerIs(player, computer){
        
        if(player == "Rock" ){
            if (computer == "Paper") {
                console.log("Paper beats Rock [Pc +1 Point]")
                computerScore ++
            }else if (computer == "Scissors") {
                console.log("Rock beats Scissors [Player +1 Point]")  
                playerScore ++             
            }else if(computer == "Rock"){
                console.log("it's a tie!")
            }
            
        }

        if (player == "Paper") {
            if (computer == "Paper") {
                console.log("it's a tie!")
            }else if (computer == "Scissors") {
                console.log("Scissors beats Paper [Pc +1 Point]") 
                computerScore ++              
            }else if(computer == "Rock"){
                console.log("Paper beats Rock [Player +1 Point]")
                playerScore ++ 
            }
            
        }
        
        if (player == "Scissors") {
            if (computer == "Paper") {
                console.log("Scissors beats Paper [Player +1 Point]")
                playerScore ++ 
            }else if (computer == "Scissors") {
                console.log("it's a tie!")               
            }else if(computer == "Rock"){
                console.log("Rock beats Scissors [Pc +1 Point]")
                computerScore ++
            }

        }
    }
    
    function playRound(player, computer){
        
        console.log(`player ${player}, pc ${computer}`)
        winnerIs(player, computer)
         
    }
    
    
    for (let index = 0; index < roundCounter; index++) {
        playRound(getPlayerChoice(), getComputerChoice())
        
    }
    
    if(playerScore > computerScore){
        console.log("Player Wins")
    }else if(computerScore > playerScore){
        console.log("Computer wins")
    }else if(computerScore == playerScore){
        console.log("it's a tie!")
    }
    console.log(`scoreboard player ${playerScore} vs pc ${computerScore}`)
}
playGame()
