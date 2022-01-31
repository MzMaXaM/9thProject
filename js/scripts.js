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
  if(firstPlayer.name === '' ) firstPlayer.name = 'NoName1'
  if(secondPlayer.name === '' ) secondPlayer.name = 'NoName2'
  firstPlayerName.innerText = firstPlayer.name
  secondPlayerName.innerText = secondPlayer.name
  activePlayerName.innerText = firstPlayer.name

  gameBoard.style.display = 'grid'
  winnerFlag.style.display = 'none'
  btnStartGame.style.display = 'none'
  activePlayerMessage.style.display = 'block'
  if(restartTime) {
    restart()
  }
}

function restart(){
  for (const fieldList of fieldLists) {
    fieldList.innerText = ''
  }
  fieldsX = []
  fieldsO = []
  hitCount = 0
  playerTurn()
  winnerFlag.firstElementChild.textContent = 'You won, '
}

function playerTurn(){
  activePlayer === 1? activePlayer = 2:activePlayer = 1
  activePlayer === 1? activePlayerName.innerText = firstPlayer.name :
  activePlayerName.innerText = secondPlayer.name
  activePlayer === 1? fieldSymbol = 'X': fieldSymbol = 'O'
}

function isInIt(arr){
  for(let i = 0; i < winArrays.length; i++){
    let count = 0
    for(let val of arr){
      if (winArrays[i].includes(+val)) {
        count++
      }
    }
    if(count==3) return true
  }
  return false
}

function showTheWinner(who){
  gameBoard.style.display = 'none'
  btnStartGame.style.display = 'block'
  activePlayerMessage.style.display = 'none'
  winnerFlag.style.display = 'block'
  restartTime = true
  if (who>0){
    who==1?
    winnerName.innerText = firstPlayer.name:
    winnerName.innerText = secondPlayer.name
  } else {
    winnerFlag.firstElementChild.textContent = "It's a draw!"
    winnerName.innerText = ''
  }
}

function fieldClick(event){
  if(event.target.textContent) return

  hitCount++
  event.target.textContent = fieldSymbol
  event.target.dataset.symbol = fieldSymbol

  fieldSymbol==='X'?
  fieldsX.push(event.target.dataset.field):
  fieldsO.push(event.target.dataset.field)

  if(hitCount>4) {
    checkWhoWin()
  }

  playerTurn()
}

function checkWhoWin(){
  if (isInIt(fieldsX)) {
    showTheWinner(1)
    return
  }
  if (isInIt(fieldsO)) {
    showTheWinner(2)
    return
  }
  if (hitCount==9) showTheWinner(0)
}