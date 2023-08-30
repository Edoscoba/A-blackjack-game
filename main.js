
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message_el");
let sumEl = document.querySelector("#sum-el");
let cardEl = document.querySelector("#cards-el");


let player = {
 name : prompt(),
chips : 100
}

let playerEl = document.querySelector("#player-el")
playerEl.textContent = player.name + ": $" + player.chips 

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
let secondCard = getRandomCard()
cards = [firstCard, secondCard]
 sum = firstCard + secondCard;
renderGame()
}

function renderGame() {
    if (sum <= 20) {
    message = "do you want to draw a new card"
} else if (sum === 21) {
   message = "wohoo! you've got a blackjack"
   hasBlackJack = true
   player.chips += 50
} else {
   message ="Oops you're out of the game!"
    isAlive = false
}

messageEl.textContent = message
sumEl.textContent = "sum: "+ sum
cardEl.textContent = "cards: "
for (let index = 0; index < cards.length; index++) {
   cardEl.textContent += cards[index] + ""
    
}
    
}

function newCard() {
    if (isAlive===true && hasBlackJack===false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
    
}

function getRandomCard() {
    let randomNumber = Math.floor(Math.random()*13) + 1
    if (randomNumber>10) 
        return 10
        else if (randomNumber===1) 
        return 11
    else
    return randomNumber
    
}
