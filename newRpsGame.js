const btnStart = document.querySelector('.btnStart').addEventListener('click',()=>{
    const statusGame = document.querySelector('.statusGame')
    statusGame.textContent = 'Choose how many rounds below.'

    const gameRound = document.querySelector('.gameRound')
    gameRound.style.display = 'flex'
    gameRound.firstElementChild.focus()
})