// All the elements on the page we'll work with
let btn = document.querySelector('#btn');
let results = document.querySelector('#results');
let Message = document.querySelector('#Message');
let winMessage = document.querySelector('#winMessage');
let loseMessage = document.querySelector('#loseMessage');

btn.addEventListener('click', randomSelection);

function randomSelection() {

    // Which radio to the player choose
    let playerChoice = document.querySelector('input[name="choice"]:checked').value;

	
    // The computer randomly chooses one of 3 choices (Rock, Paper or Scissors)
    let sides = ['rock', 'paper','scissors'];
    let randon = sides[Math.floor(Math.random() * 3)];


    // Player wins if their choice matches the random value generated
    let win = playerChoice == randon;

    //get radio button value from user
    Message.innerHTML = randon;
	
    // Briefly hide and then show the results again
    // This way when the results are the same as the previous round
    // It doesn't look like nothing happens when the button is clicked
    results.style.display = 'none';
    setTimeout(function () {results.style.display = 'block'; }, 100);

    // Show the appropriate win or lose message
    if (win) {
        winMessage.style.display = 'block';	 //Element is rendered as a block-level element
        loseMessage.style.display = 'none';  //Element will not be displayed
    } else {
        winMessage.style.display = 'none';
        loseMessage.style.display = 'block';
    }
}

