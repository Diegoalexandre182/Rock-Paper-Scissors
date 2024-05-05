const gameRound = document.querySelector('.gameRound')
const iconGame = document.querySelectorAll('.iconGame')
const gameRoundSelec = document.querySelector('.gameRoundSelec')
const comBtn = document.querySelector('.comBtn')
const btnStart = document.querySelector('.btnStart')
const playerScore = document.querySelector('.playerScore')
const comScore = document.querySelector('.comScore')
const numRound = gameRoundSelec.value


const rock = document.querySelector('.rock')
const paper = document.querySelector('.paper')
const scissors = document.querySelector('.scissors')
const rpsItens = ["Rock", "Paper", "Scissors"]

btnStart.addEventListener('click', displayGameRound) // Starts de game

comBtn.addEventListener('click', ()=> getGameRound())

gameRoundSelec.addEventListener('keydown',(evekey)=>{
if(evekey.key === 'Enter'){
    evekey.preventDefault()
    getGameRound()
}})

const statusGameUpt = txtStatus=>{
    document.querySelector('.statusGame').textContent = txtStatus
}

function displayGameRound(){
    statusGameUpt('Choose how many rounds below')
    gameRound.style.display = 'flex'
    gameRoundSelec.focus()
}

function getGameRound(){
    if(numRound <= 0){
        statusGameUpt('Please enter a valid round number')
        gameRoundSelec.style.border = "5px solid red"
        gameRoundSelec.focus()
        return
    }
    gameRound.style.display = 'none'   
    displayIconBar()
    return numRound
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
    return computerChoice
}

function getPlayerChoice(){

    let playerChoice = ''
    while(true){
    rock.addEventListener('click', ()=>{
    playerChoice = 'Rock'
    document.querySelector('.playerPick').innerHTML = rock.innerHTML
    statusGameUpt('player choose Rock')
    
})
    paper.addEventListener('click', ()=>{
    playerChoice = 'Paper'
    document.querySelector('.playerPick').innerHTML = paper.innerHTML

    
})
    scissors.addEventListener('click', ()=>{
    playerChoice = 'Scissors'
    document.querySelector('.playerPick').innerHTML = scissors.innerHTML

    
})
    }
}






