// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button"); // Returns all the button elements found into an Array and we can itterate through it
   
    for (let button of buttons) { // Used to sycle through Array and gives each element a variable of "button"
        button.addEventListener("click", function() { // Add Event listner to each button, once button is click the code will run
            if (this.getAttribute("data-type") === "submit") {  // if the data-type in HTML is submit, it will use the next message
                alert("You clicked Submit");
            }else { //if not it will use the next code
                let gameType = this.getAttribute("data-Type")// gets atribute from HTML and names it game type
                alert(`You clicked ${gameType}`);

                }
            })
            
        }
    });

    /**
     * The main game "loop" called when the script is first loaded
     * and after the user answers has been processed
     */
function runGame() {
    // Creates random numbers
    let num1 = Math.floor(Math.random() *25)+1;
    let num2 =Math.floor(Math.random() *25)+1;
}

function checkAnswer() {

}



function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {
    
}