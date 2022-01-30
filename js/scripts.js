function showForm(event){
  backdrop.style.display = 'block'
  asideForm.style.display = 'block'
  playerEdit = +event.target.dataset.playerid

}

function hideForm(){
  backdrop.style.display = 'none'
  asideForm.style.display = 'none'
  errorMsg.innerText = ''
  playerEdit = 0
  playerNameInput.value = ''
}

function savePlayerName(event){
  event.preventDefault()
  const formData = new FormData(event.target)
  const enteredPlayerName = formData.get('username').trim()

  if(!enteredPlayerName){
    errorMsg.innerText = 'Enter a NickName please.'
    return
  }

  if(playerEdit > 0){
    if(playerEdit === 1) {
      firstPlayer.name = enteredPlayerName
      firstPlayerName.innerText = firstPlayer.name
    }else {
      secondPlayer.name = enteredPlayerName
      secondPlayerName.innerText = secondPlayer.name
    }
  }

  hideForm()
}


function startNewGame(){
  // if(firstPlayer.name === '' || secondPlayer.name === ''){
  //   return
  // }
  if(firstPlayer.name === '' ) firstPlayer.name = 'NoName1'
  if(secondPlayer.name === '' ) secondPlayer.name = 'NoName2'
  firstPlayerName.innerText = firstPlayer.name
  secondPlayerName.innerText = secondPlayer.name
  activePlayerName.innerText = firstPlayer.name

  gameBoard.style.display = 'grid'

  btnStartGame.style.display = 'none'
  activePlayerMessage.style.display = 'block'
}

function playerTurn(){
  activePlayer === 1? activePlayer = 2:activePlayer = 1
  activePlayer === 1? activePlayerName.innerText = firstPlayer.name :
  activePlayerName.innerText = secondPlayer.name
  activePlayer === 1? fieldSymbol = 'X': fieldSymbol = 'O'
}
function fieldClick(event){
  if(event.target.textContent) return
  event.target.textContent = fieldSymbol
  playerTurn()
}