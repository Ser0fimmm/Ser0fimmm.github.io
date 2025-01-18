let playerchoise = 0;
let computerchoise;
let wins = 0;
let plays = 0;
function rock() {
    playerchoise = 1;
    computerchoise = Math.floor(Math.random() * (4 - 1) + 1);
    console.log(computerchoise);
}
function paper() {
    playerchoise = 2;
    computerchoise = Math.floor(Math.random() * (4 - 1) + 1);
    console.log(computerchoise);
}
function sissors() {
    playerchoise = 3;
    computerchoise = Math.floor(Math.random() * (4 - 1) + 1);
    console.log(computerchoise);
}
function play() {
    plays++;
    switch(playerchoise) {
        case 1:  
          document.getElementById("yourchoise").textContent = "your choise: rock"
          break
        case 2:  
          document.getElementById("yourchoise").textContent = "your choise: paper"
          break
        case 3:
            document.getElementById("yourchoise").textContent = "your choise: sissors"
            break
        default:
          break
      }
      switch(computerchoise) {
        case 1:  
          document.getElementById("compchoise").textContent = "computer's choise: rock"
          break
        case 2:  
          document.getElementById("compchoise").textContent = "computer's choise: paper"
          break
        case 3:
            document.getElementById("compchoise").textContent = "computer's choise: sissors"
            break
        default:
          break
      }
    if (playerchoise == computerchoise) {
        document.getElementById("playres").textContent = "draw";
        console.log("==")
    }
    else if (playerchoise == 1, computerchoise == 3) {
        document.getElementById("playres").textContent = "you win";
        wins++;
        console.log("1,3");
    }
    else if (playerchoise == 2, computerchoise == 1) {
        document.getElementById("playres").textContent = "you win";
        wins++;
        console.log("2,1");
    }
    else if (playerchoise == 3, computerchoise == 2) {
        document.getElementById("playres").textContent = "you win";
        wins++;
        console.log("3,2");
    }
    else if (playerchoise == 1, computerchoise == 2) {
        document.getElementById("playres").textContent = "computer win";
        console.log("1,2");
    }
    else if (playerchoise == 2, computerchoise == 3) {
        document.getElementById("playres").textContent = "computer win";
        console.log("2,3");
    }
    else if (playerchoise == 3, computerchoise == 1) {
        document.getElementById("playres").textContent = "computer win";
        console.log("3,1");
    }
    document.getElementById("plays").textContent = `plays: ${plays}`;
    document.getElementById("wins").textContent = `wins: ${wins}`;
    document.getElementById("winrate").textContent = `winrate: ${100 * (wins / plays)}%`;
}