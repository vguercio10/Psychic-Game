// Variables-----------------------------------

var wins = 0
var loses = 0
var guesssofar = []
var guessremaining = 10
var computerguess = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var computerchoice = computerguess[Math.floor(Math.random() * computerguess.length)]

// Variables that show in HTML
// var winsText = document.getElementById("wins-text");
// var losesText = document.getElementById("loses-text");
// var userguessText = document.getElementById("userguess-text");
// var guessremainingText = document.getElementById("guessremaining-text");
// var userchoiceText = document.getElementById("userchoice-text");


// Begin Game ---------------------------------
 document.onkeyup = function(event) {
    guesssofar.push(event.key);    
    var userguess = event.key;
    var userlower = userguess.toLowerCase();
// When user wins------------------------------
if (userlower === computerchoice) {
    wins++; 
    guesssofar = [];
    guessremaining = 10;
    console.log(wins);
}

// When user loses-----------------------------
else
    guessremaining--;
    
    console.log(loses);


 if (guessremaining === 0) {
     loses++;
     guessremaining = 10;
     guesssofar = [];
 }

 var HTML=
 "<p>wins: " + wins + "</p>" +
 "<p>losses: " + loses + "</p>" +
 "<p>guesses remaining: " + guessremaining + "</p>" +
 "<p>guesses so far: " + guesssofar + "</p>" ;

 document.querySelector("#game").innerHTML = HTML;


//  Display the user and computer, guesses, wins, loses. 
// winsText.textContent = "Wins: " + wins;
// losesText.textContent= "Loses: " + loses;
// userguessText.textContent= " Your guesses so far: " + userlower;
// guessremainingText.textContent= "Number of guesses remaining: " + guessremaining;
// userchoiceText.textContent= "You chose: " + guesssofar;

 }
