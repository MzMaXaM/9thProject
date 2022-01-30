let playerEdit = 0
let activePlayer = 1
let fieldSymbol = 'X'
let activePlayerName = document.getElementById('activePlayerName')

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
const gameBoard = document.getElementById('gameBoard')
const activePlayerMessage = document.getElementById('activePlayerMessage')

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

const fieldLists = document.querySelectorAll('#gameBoard li')

btnPlayer1Edit.addEventListener('click', showForm)
btnPlayer2Edit.addEventListener('click', showForm)
btnCancelForm.addEventListener('click', hideForm)
backdrop.addEventListener('click', hideForm)
form.addEventListener('submit', savePlayerName)
btnStartGame.addEventListener('click', startNewGame)

for (const fieldList of fieldLists) {
  fieldList.addEventListener('click', fieldClick)
}