const gameRound = document.querySelector('.gameRound')
const iconGame = document.querySelectorAll('.iconGame')
const gameRoundSelec = document.querySelector('.gameRoundSelec')
const comBtn = document.querySelector('.comBtn')
const btnStart = document.querySelector('.btnStart')
const playerScore = document.querySelector('.playerScore')
const comScore = document.querySelector('.comScore')
const rock = document.querySelector('.rock')
const paper = document.querySelector('.paper')
const scissors = document.querySelector('.scissors')
const rpsItens = ["Rock", "Paper", "Scissors"]
let playerChoice = ''
let playerPoint = 0
let comPoint = 0
let roundCounter = 0

btnStart.addEventListener('click', displayGameRound) // Starts de game

comBtn.addEventListener('click', ()=> getGameRound())

gameRoundSelec.addEventListener('keydown',(evekey)=>{ // 
if(evekey.key === 'Enter'){
    evekey.preventDefault()
    getGameRound()
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

function getGameRound(){ 
    const numRound = gameRoundSelec.value

    if(numRound <= 0){
        statusGameUpt('Please enter a valid round number')
        gameRoundSelec.style.border = "5px solid red"
        gameRoundSelec.focus()
        return
    }
    gameRound.style.display = 'none'   
    displayIconBar()

}

function displayIconBar(){
    
    statusGameUpt('Choose one...')
    
    iconGame.forEach(element => {
        element.style.display = 'flex'
    })
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

iconGame.forEach(element => {
    element.addEventListener('click', (act)=>{
        if(act.target.innerText == rock.innerText){
            playerChoice = 'Rock'
            document.querySelector('.playerPick').innerHTML = rock.innerHTML
            statusGameUpt('player choose Rock')
        }
        if(act.target.innerText == paper.innerText){
            playerChoice = 'Paper'
            document.querySelector('.playerPick').innerHTML = paper.innerHTML
            statusGameUpt('player choose Paper')
        }
        if(act.target.innerText == scissors.innerText){
            playerChoice = 'Scissors'
            document.querySelector('.playerPick').innerHTML = scissors.innerHTML
            statusGameUpt('player choose Scissors')
        }
        roundCounter++
        console.log(roundCounter)
        winnerIs(playerChoice, getComputerChoice())
        
    })
})

function winnerIs(playerChoice, computerChoice){
        
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
}


