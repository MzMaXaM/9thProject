let playerEdit = 0

const btnPlayer1Edit = document.getElementById('player1EditBtn')
const btnPlayer2Edit = document.getElementById('player2EditBtn')
const btnCancelForm = document.getElementById('cancelForm')
const btnConfirmForm = document.getElementById('confirmForm')//
const btnStartGame = document.getElementById('startGame')

const form = document.querySelector('form')
const backdrop = document.getElementById('backdrop')
const asideForm = document.querySelector('aside')
const errorMsg = document.getElementById('errorMessage')
const playerNameInput = document.getElementById('playerNameInput')

const firstPlayer = {
  name:'',
  symbol:'X',
  key:1
}
const secondPlayer = {
  name:'',
  symbol:'O',
  key:2
}

let firstPlayerName = document.querySelector('#firstPlayerField h3')
let secondPlayerName = document.querySelector('#secondPlayerField h3')

btnPlayer1Edit.addEventListener('click', showForm)
btnPlayer2Edit.addEventListener('click', showForm)
btnCancelForm.addEventListener('click', hideForm)
backdrop.addEventListener('click', hideForm)
form.addEventListener('submit', savePlayerName)
