const roll = document.getElementsByClassName("roll")[0];
const myImage = document.getElementById('myImage');
let roundScore = 0;

console.log(roll)

// Creates Dice Class

class dice {
    constructor(value, link){
        this._value = value;
        this._link = link;
    }
    get value(){
        return this._value;
    }
    get link(){
        return this._link;
    }
}

roll.addEventListener('click', () => {

let dice = Math.floor(Math.random() * 6) + 1;
let diceRoll = Math.floor(Math.random() * 6) + 1;
myImage.setAttribute("src", `img/dice${diceRoll}.png`);

// Displays the dice roll

let diceDOM = document.querySelector(".dice")
diceDOM.style.display = "block";
    
//Shows score 

let score = document.getElementById("score");
score.innerHTML = `Your current score is ${roundScore}.`;

// Updates the round score if the rolled numer is NOT a 1
// Sets win condition
// Makes game end if 1 is rolled

if (roundScore >= 20){
    // alert("You win!")
    // 
document.getElementById("win").innerHTML="You win!"
} 
    
else if (diceRoll !== 1){
        roundScore += diceRoll;
        console.log(roundScore)
}
    
else {
    // alert("You have lost the game!")
document.getElementById("lose").innerHTML="You have lost the game!"
}
});

