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
      firstPlayerName.innerText = enteredPlayerName
      firstPlayer.name = enteredPlayerName
    }else {
      secondPlayerName.innerText = enteredPlayerName
      secondPlayer.name = enteredPlayerName
    }
  }

  hideForm()
}