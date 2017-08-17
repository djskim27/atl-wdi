/*

Creating a page where every time the user hits the "Roll Dice" button, the screen randomly updates the two dice. Use the html and css code included in the starter code folder to get started.

1) Write down pseudocode for the following program.

2) Follow the steps below to write your code.
* generate a random number between 1 - 6 and store to a variable, random1
* generate a random number between 1 - 6 and store to a variable, random2
* combine 'dice-' and random1 to form the random class for the first die, firstDie
* combine 'dice-' and random2 to form the random class for the second die, secondDie
* get the first die by ID and update the class to firstDie (hint: document.getElementById)
* get the first die by ID and update the class to secondDie (hint:document.getElementById)

3) Check to see if the Dice Roll has been hit, if it has run the diceRoll function.

*/
var numbers = [1, 2, 3, 4, 5, 6];
//random number between 1-6 for random1
var random1 = numbers[Math.floor(Math.random()*numbers.length)];
//random number between 1-6 for random2
var random2 = numbers[Math.floor(Math.random()*numbers.length)];
//dice roll for first die
var firstDie = 'dice-' + random1;
//roll for second die
var secondDie = 'dice-' + random2;
//button activates dice roll

window.onload = function() {
    var rollButton = document.getElementById('roll-dice');
    rollButton.addEventListener('click',function(){
        document.getElementById('first-die').className = 'dice ' +firstDie;
    });
    rollButton.addEventListener('click',function(){
        document.getElementById('second-die').className = 'dice ' +secondDie;
    })
}
