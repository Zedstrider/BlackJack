let cards = []
let sum=0

let hasBlackJack=false
let isAlive=false
let message=" "
let messageEl=document.getElementById("message-el")
let sumEl=document.querySelector("#sum-el")
let cardsEl=document.querySelector("#cards-el")
let player={
     Name:"Per",
     Chips: 145
}
let playerEl=document.getElementById("player-el")
playerEl.textContent=player.Name + ": $"+ player.Chips
function getRandomCard(){
    let num=Math.floor(Math.random()*13)+1
    if(num===1)
        return 11
    else if(num>10)
        return 10
    else
        return num
}
function renderGame(){
    sumEl.textContent="Sum: "+sum
    cardsEl.textContent="Cards: "
    for(let i=0;i<cards.length;i++)
    {
        cardsEl.textContent+=cards[i]+" "
    }
if(sum<21)
{
    message="Do you want to draw a new card?"
}

else if(sum===21)
{
   message= "You have Blackjack!"
    hasBlackJack=true
}
else{
   message = "You lost!"
    isAlive=false
}

messageEl.textContent=message
}
function startGame()
{
    let firstCard=getRandomCard()
    let secondCard=getRandomCard()
    cards = [firstCard,secondCard]
    sum=firstCard+secondCard
    isAlive=true
    renderGame()
}
function newCard(){
    if(isAlive === true && hasBlackJack === false)
    {
    console.log("Drawing out a new Card")
    let card=getRandomCard()
    cards.push(card)
    sum+=card
    renderGame()
    }
}