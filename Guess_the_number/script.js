let inputNumber = null;
let userName;
let minNum = 0;
let maxNum = 25;
let guessTimes;
let totalGuess = 5;

//asking the name
while (userName == undefined || userName == null || userName.lenght == 0){
    userName = prompt("Hello! What is your name?");
}

//giving a welcome message with the name included
alert("Welcome to the 'Guess the number' game, " + userName + "!");

//asking a minimum number (standard is 0)
let minNumPick = parseInt(prompt("What is the minimum number you would like to guess from? If you make no choice, it will be 0."));

//checking if its a number and it has a value bigger than 0
if (!isNaN(minNumPick) && minNumPick >= 0){
    minNum = minNumPick;
}

//asking a maximum number (standard is 25)
let maxNumPick = parseInt(prompt("Please choose the maximum number (bigger then " + minNum + ") to guess from. If you make no choice it will be 25."));

//checking of its a number
if (!isNaN(maxNumPick)) {
    maxNum = maxNumPick;
}

//if its a number checking if its bigger then minimum number, and if its not giving another prompt to ask
while (maxNum <= minNum){
    let maxNumPick = parseInt(prompt("What is your maximum number to guess from? (Higher than " + minNum + ")"));
    if (!isNaN(maxNumPick)){
        maxNum = maxNumPick;
    }
}

//wishing good luck and giving instructions
alert("You have 5 tries to guess! The number to guess is between " + minNum + " and " + maxNum + ". Good luck!"  );

//doing the maths and showing the result in console
inputNumber = Math.floor(Math.random() * (maxNum - minNum)) + minNum;
console.log("Pssst het nummer is: " + inputNumber);

//starting the game again if all the tries are used
while (guessTimes !== inputNumber){
    if (totalGuess < 1) {
        alert("You have used all your guesses and you lost the game! Let's start again! The number is still between " + minNum + " and " + maxNum + ".");
        totalGuess = 5;
        inputNumber = Math.floor(Math.random() * (maxNum - minNum)) + minNum;
    }
  
guessTimes = parseInt(prompt("What number you want to choose?")); 

while (isNaN(guessTimes)){
    guessTimes = parseInt(prompt("Please fill in NUMBER only! Try again"));
}

alert("You guessed: " + guessTimes);

if (guessTimes > inputNumber) {
    totalGuess--;
    if (totalGuess < 1) {
      alert("That was your last guess.");
    } else {
      alert(
        "Your number was too high. You have  " +
          totalGuess +
          " guesses left. Try again with a lower number:"
      );
    }
  } else if (guessTimes < inputNumber) {
    totalGuess--;
    if (totalGuess < 1) {
      alert("That was your last guess.");
    } else {
      alert(
        "Your number was too low. You have " +
          totalGuess +
          " guesses left. Try again with a higher number:"
      );
    }
  } else {
    alert("Good job, you guessed right! You won the game, the number was: " + guessTimes);
    alert(
      "The game is closing now, thanks for playing, " +
        userName +
        ", see you next time!"
    );
  
}
}
