// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button"); // Returns all the button elements found into an Array and we can itterate through it
   
    for (let button of buttons) { // Used to sycle through Array and gives each element a variable of "button"
        button.addEventListener("click", function() { // Add Event listner to each button, once button is click the code will run
            if (this.getAttribute("data-type") === "submit") {  // if the data-type in HTML is submit, it will use the next message
                checkAnswer();
            }else { //if not it will use the next code
                let gameType = this.getAttribute("data-Type")// gets atribute from HTML and names it game type
                runGame(gameType);// runs the "runGame function"

                }
            })
            
        }
        runGame("addition"); // runs game as soon as page is loaded
    });

    

    /**
     * The main game "loop" called when the script is first loaded
     * and after the user answers has been processed
     */
function runGame(gameType) { // game type is being passed into function
    // Creates random numbers
    let num1 = Math.floor(Math.random() *25)+1;
    let num2 =Math.floor(Math.random() *25)+1;

    if (gameType ==="addition") {// if addion button pressed the run the displayAddiionQuestion with the 2 random numbers
        displayAdditionQuestion(num1, num2)
    }else{
        alert(`Unknown game type: ${gameType}`) // returns error message
        throw`unknown game type: ${gameType}. Aborting`; // stops game from running and prints to console for debugging

    }
}

/**
 * Checks the answer agaisnt the first element in
 * the returning calculateCorrectAnswer array
 */
function checkAnswer() {
    
    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];
    
    if(isCorrect) {
        alert("hey! you got it right! :D")
        incrementScore();
    }else{
        alert(`awwww you answerd ${userAnswer}. The correct answer was ${calculatedAnswer[0]}!`);
        incrementWrongAnswer();
    }

    runGame(calculatedAnswer[1]) //Runs the same game again
    }


/**
 * gets the operands (the numbers) and the operator (plus, minus etc)
 * directly from the dom and return the correct answer
 */

function calculateCorrectAnswer() {
    //let operand1: Creates operand 1 variable
    //parseint: used for parsing a string and returning an integer value.
    //(document.getElementById("operand2"): This accesses an element with the ID "operand1" in the HTML document. The getElementById method is used to find elements by their unique IDs.
    //innerText : retrieves the combined text content of an element, including any child elements.

    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById("operator").innerText;

    if (operator === "+") {
        return [operand1 + operand2, "addition"];
    } else {
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}. Aborting!`;
    }
}

/**
 * get the current score from th DOM and increments it by 1
 */
function incrementScore() {
    let oldScore = parseInt(document.getElementById("score").innerText); // creates a variable called old score from scire section in HTML Score is already set to 0 as a string
    document.getElementById("score").innerText = ++oldScore; // increments the score by 1

}

/**
 * get the current tally of incorrect answers
 */
function incrementWrongAnswer() {
    let oldScore = parseInt(document.getElementById("incorrect").innerText); // creates a variable called old score from scire section in HTML Score is already set to 0 as a string
    document.getElementById("incorrect").innerText = ++oldScore; // increments the score by 1
}

function displayAdditionQuestion(operand1, operand2) { // arguments are operand 1 and 2 these are the default number 0 diplayed on the question
        document.getElementById("operand1").textContent = operand1; // the id in HTML is operan1, this converts i
        document.getElementById("operand2").textContent = operand2;
        document.getElementById("operator").textContent = "+"; // grabs the operator id and assigns it the + sign 

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {
    
}