// Variables-----------------------------------

var wins = 0
var loses = 0
var guesssofar = []
var guessesremaining = 10
var computerguess = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    var computerchoice = computerguess[Math.floor(Math.random() * computerguess.length)];

// Begin Game ---------------------------------
 document.onkeyup = function(event) {
    guesssofar.push(event.key)    
    var userguess = event.key;
    var userlower = userguess.toLowerCase();
// When user wins------------------------------
if (userlower === computerchoice) {
    wins++; 
    console.log(wins);
}

// When user loses-----------------------------
else (userlower !== computerchoice)
    guessesremaining--;
    console.log(loses);


 if (guessesremaining === 0) {
     loses++;
     guessesremaining = 10;
     guesssofar = [];
 }

//  Display the user and computer, guesses, wins, loses. 
winstext.textContent = "Wins: " + wins;
losestext.textContent= "Loses: " + loses;
userguessText.textContent= " Your guesses so far: " + userlower;
guessesremainingText.textContent= "Number of guesses remaining: " + guessesremaining;
userchoiceText.textContent= "You chose: " + guesssofar;

 }
