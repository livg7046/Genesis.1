function startGame() {
    var startingBet = document.getElementById("startingBet").value;
    document.getElementById("startingBetDisplayed").innerText = startingBet;
    if (startingBet == 0) 
        alert("You have no more money! Try again")

    else {
        var gameMoney = parseFloat(startingBet);
        var highestAmountWon = 0;
        var totalRolls = 0;
        var rollAtHighest = 0;
        while (gameMoney > 0){
            var dice1 = rollDice();
            var dice2 = rollDice();
            var totalDice = dice1 + dice2;
            
            if (totalDice == 7) {
                gameMoney = gameMoney + 4
                if (highestAmountWon < gameMoney) {
                    highestAmountWon = gameMoney;
                    rollAtHighest = totalRolls;
                }
            } else {
                gameMoney = gameMoney - 1
            }
            totalRolls ++;
        } 
        if (gameMoney == 0) {
            document.getElementById("message").innerText = "Game Over Man! Game Over!";
            document.getElementById("totalRolls").innerText = totalRolls;
            document.getElementById("highestWon").innerText = highestAmountWon;
      
        }
    }
}

function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

