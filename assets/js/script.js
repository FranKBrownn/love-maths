 document.addEventListener("DOMContentLoaded", function(){
     let buttons = document.getElementsByTagName("button");

    for (let button of buttons){
        button.addEventListener("click" , function(){
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            }
            else {
                let gameType = this.getAttribute("data-type")
                runGame(gameType)
            }
        })

    }
    runGame("addition");
})

function runGame(gameType){
    let num1 = Math.floor(Math.random() * 25) + 1
    let num2 = Math.floor(Math.random() * 25) + 1

    if (gameType === "addition"){
        displayAdditionQuestion(num1, num2);
    } 
    else if (gameType === "multiply"){

        displayMultiplyQuestion(num1, num2)

    } 
    else if (gameType === "subtract")

    displaySubtractionQuestion(num1, num2)
    else{
        alert(`unknown game type : ${gameType}`)
        throw `unknown game type : ${gameType}. Aborting!` ;
    }
}
function checkAnswer(){
    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if (isCorrect){
        alert("hey! you got it right! :D");
        incrementScore();
    } else {
    alert(`Awwww.... you answered ${userAnswer}. the correct answer was ${calculatedAnswer[0]}!`)
    incrementWrongAnswer();
    }
    

    runGame(calculatedAnswer[1]);
}

function calculateCorrectAnswer() {
    let operand1 = parseInt(document.getElementById("operand1").innerText);
    let operand2 = parseInt(document.getElementById("operand2").innerText);
    let operator = (document.getElementById("operator").innerText);

    if(operator === "+") {
        return [operand1 + operand2 , "addition"]
    } 
    else if (operator === "x"){
        return [operand1 * operand2 , "multiply"]
    } 
    else if (operator === "-"){
        return [operand1 - operand2 , "subtract"]
    }

    else {
        alert(`umimplemented operator ${operator}`);
        throw `umimplemented operator ${operator}. Aborting `
    }
    
}

function incrementScore(){
 oldScore = parseInt(document.getElementById("score").innerText);
 document.getElementById("score").innerText = ++oldScore;
}

function incrementWrongAnswer(){
    oldScore = parseInt(document.getElementById("incorrect").innerText);
 document.getElementById("incorrect").innerText = ++oldScore;
}

function displayAdditionQuestion(operand1, operand2){

    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "+";
}
function displaySubtractionQuestion(operand1, operand2){
    document.getElementById("operand1").textContent = operand1 > operand2 ? operand1 : operand2;
    document.getElementById("operand2").textContent = operand1 > operand2 ? operand2 : operand1;
    document.getElementById("operator").textContent = "-";
}
function displayDivisionQuestion(){

    
}

function displayMultiplyQuestion(operand1, operand2){

    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "x";

}