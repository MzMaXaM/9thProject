function showForm(){
  backdrop.style.display = 'block'
  asideForm.style.display = 'block'
}

function hideForm(){
  backdrop.style.display = 'none'
  asideForm.style.display = 'none'
}

function savePlayerName(event){
  event.preventDefault()
  const formData = new FormData(event.target)
  const enteredPlayerName = formData.get('username').trim()
  console.log(enteredPlayerName)
}