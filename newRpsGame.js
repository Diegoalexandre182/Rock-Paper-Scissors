const gameRound = document.querySelector('.gameRound')
const iconGame = document.querySelectorAll('.iconGame')
const gameRoundSelec = document.querySelector('.gameRoundSelec')
const comBtn = document.querySelector('.comBtn')
const btnStart = document.querySelector('.btnStart')
const btnReset = document.querySelector('.btnReset')
const playerScore = document.querySelector('.playerScore')
const comScore = document.querySelector('.comScore')
const rock = document.querySelector('.rock')
const paper = document.querySelector('.paper')
const scissors = document.querySelector('.scissors')
const rpsItens = ["Rock", "Paper", "Scissors"]
let playerChoice = ''
let playerPoint = 0
let comPoint = 0


btnStart.addEventListener('click', displayGameRound) // Starts de game

btnReset.addEventListener('click', function() {
window.location.reload()} )

comBtn.addEventListener('click', ()=> toggleGameRound())

gameRoundSelec.addEventListener('keydown',(evekey)=>{ // 
if(evekey.key === 'Enter'){
    evekey.preventDefault()
    toggleGameRound()
}})

const statusGameUpt = txtStatus=>{ //Updates game status text
    document.querySelector('.statusGame').textContent = txtStatus
}

function displayGameRound(){ //Displays input round
    btnStart.disabled = true
    statusGameUpt('Choose how many rounds below')
    gameRound.style.display = 'flex'
    gameRoundSelec.focus()
}

function toggleGameRound(){ 

    const numRound = gameRoundSelec.value

    if(gameRoundSelec.value <= 0){
        statusGameUpt('Please enter a valid round number')
        gameRoundSelec.style.border = "5px solid red"
        gameRoundSelec.style.outline = 'none'
        gameRoundSelec.focus()
        return
    }
    gameRound.style.display = 'none'   
    startGame(numRound)
}


function getPlayerChoice(act){
    
    if(act.innerText == rock.innerText){
        playerChoice = 'Rock'
        document.querySelector('.playerPick').innerHTML = rock.innerHTML
        statusGameUpt('player choose Rock')
    }
    if(act.innerText == paper.innerText){
        playerChoice = 'Paper'
        document.querySelector('.playerPick').innerHTML = paper.innerHTML
        statusGameUpt('player choose Paper')
    }
    if(act.innerText == scissors.innerText){
        playerChoice = 'Scissors'
        document.querySelector('.playerPick').innerHTML = scissors.innerHTML
        statusGameUpt('player choose Scissors')
    }
    
    return playerChoice
}

function getComputerChoice() {
    
    let randomNum = Math.random() * 3;
    randomNum = Math.floor(randomNum);
    let computerChoice = rpsItens[randomNum]
    
    if(computerChoice == 'Rock') {  
        document.querySelector('.comPick').innerHTML = rock.innerHTML
    }   
    if(computerChoice == 'Paper') {  
        document.querySelector('.comPick').innerHTML = paper.innerHTML
    }   
    if(computerChoice == 'Scissors') {  
        document.querySelector('.comPick').innerHTML = scissors.innerHTML
    }   
    return computerChoice
}

function getRoundPoint(playerChoice, computerChoice){
    
    if(playerChoice == "Rock" ){
        if (computerChoice == "Paper") {
            statusGameUpt("Paper beats Rock")
            comPoint ++
            document.querySelector('.playerPick').style.border = '4px solid rgb(211, 89, 89)'           
            document.querySelector('.comPick').style.border = '4px solid rgb(128, 233, 128)'           
        }
        if (computerChoice == "Scissors") {
            statusGameUpt("Rock beats Scissors")
            playerPoint ++  
            document.querySelector('.playerPick').style.border = '4px solid rgb(128, 233, 128)'           
            document.querySelector('.comPick').style.border = '4px solid rgb(211, 89, 89)'           
        }
        if(computerChoice == "Rock"){
            statusGameUpt("Draw")
            document.querySelector('.comPick').style.border = 'none'
            document.querySelector('.playerPick').style.border = 'none'
        }
    }
    
    if (playerChoice == "Paper") {
        if (computerChoice == "Paper") {
            statusGameUpt("Draw")
            document.querySelector('.comPick').style.border = 'none'
            document.querySelector('.playerPick').style.border = 'none'
        }
        if (computerChoice == "Scissors") {
            statusGameUpt("Scissors beats Paper")
            comPoint ++   
            document.querySelector('.playerPick').style.border = '4px solid rgb(211, 89, 89)'           
            document.querySelector('.comPick').style.border = '4px solid rgb(128, 233, 128)'            
        }
        if(computerChoice == "Rock"){
            statusGameUpt("Paper beats Rock")
            playerPoint ++ 
            document.querySelector('.playerPick').style.border = '4px solid rgb(128, 233, 128)'           
            document.querySelector('.comPick').style.border = '4px solid rgb(211, 89, 89)' 
        }
    }
    
    if (playerChoice == "Scissors") {
        if (computerChoice == "Paper") {
            statusGameUpt("Scissors beats Paper")
            playerPoint ++ 
            document.querySelector('.playerPick').style.border = '4px solid rgb(128, 233, 128)'           
            document.querySelector('.comPick').style.border = '4px solid rgb(211, 89, 89)' 
        }
        if (computerChoice == "Scissors") {
            statusGameUpt("Draw")
            document.querySelector('.comPick').style.border = 'none'
            document.querySelector('.playerPick').style.border = 'none'           
        }
        if(computerChoice == "Rock"){
            statusGameUpt("Rock beats Scissors")
            comPoint ++
            document.querySelector('.playerPick').style.border = '4px solid rgb(211, 89, 89)'           
            document.querySelector('.comPick').style.border = '4px solid rgb(128, 233, 128)' 
        }
    } 
    return [playerPoint, comPoint]
}

function startGame(numRound){
    
    statusGameUpt('Choose one...')
    let roundCounter = 0
    
    iconGame.forEach(element => {
        element.style.display = 'flex'
        element.addEventListener('click', (e) => winnerIs(getRoundPoint(getPlayerChoice(e.target), getComputerChoice())))
        
    })
    
    function winnerIs(array){
        roundCounter++
        document.querySelector('.roundTracker').innerText = `Round ${roundCounter} of ${numRound}`
        document.querySelector('.playerScore').innerText = array[0]
        document.querySelector('.comScore').innerText = array[1]

        if (roundCounter >= Number(numRound)) {
            iconGame.forEach(element => {
                element.style.display = 'none'
            })   

            if(playerPoint > comPoint){
                statusGameUpt("Player Wins")         
            }

            if(comPoint > playerPoint){
                statusGameUpt("Computer wins")
            }

            if(comPoint == playerPoint){
                statusGameUpt("Draw Game !")
            }
        }
    }
}123

