var randomBomb = Math.floor(Math.random()*8)
var randomTreasure = Math.floor(Math.random()*8)
var turnCount = 0

function treasure(id){
    // alert(id)
    turnCount = turnCount + 1
    document.getElementById("clicksCount").innerHTML=turnCount
    if (randomBomb === id){
        // document.getElementById(id).innerHTML="&#x2620"
        document.getElementById("outcome").innerHTML="YOU LOSE!!!"
        document.getElementById("lose").src="http://www.mbites.ph/wp-content/uploads/2019/05/MBITES_octupusgirl2-810x455.jpg"
        document.getElementById("gameboard").innerHTML=""
        alert("You lose!")
        // window.location.reload()
    } else if (randomTreasure === id){
        document.getElementById("outcome").innerHTML="YOU WIN!!!"
        document.getElementById("win").src="https://smallworldbiggirl.files.wordpress.com/2012/03/sarcastic-thumbs-up.jpg"
        document.getElementById("gameboard").innerHTML=""
        document.getElementById("lose").src=""
        alert("You win!")
    } else if (turnCount === 5){
        alert("Time ran out")
        window.location.reload()
    } else { document.getElementById(id).innerHTML="&#x1f332"
        }
}
