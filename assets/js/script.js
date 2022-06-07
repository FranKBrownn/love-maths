 document.addEventListener("DOMContentLoaded", function(){
     let buttons = document.getElementsByTagName("button");

    for (let button of buttons){
        button.addEventListener("click" , function(){
            if (this.getAttribute("data-type") === "submit") {
                checkAwnser();
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
    } else{
        alert(`unknown game type : ${gameType}`)
        throw `unknown game type : ${gameType}. Aborting!` ;
    }
}
function checkAwnser(){
    let userAnswer = parseInt(document.getElementById("anwser-box").value);
    let calculatedAnwser = calculateCorrectAnwser();
    let isCorrect = userAnswer === calculatedAnwser[0];

    if (isCorrect){
        alert("hey! you got it right! :D");
    } else {
    alert(`Awwww.... you answered ${userAnswer}. the correct answer was ${calculateCorrectAnwser[0]}!`)
    }
    

    runGame(calculatedAnwser[1]);
}

function calculateCorrectAnwser() {
    let operand1 = parseInt(document.getElementById("operand1").innerText);
    let operand2 = parseInt(document.getElementById("operand2").innerText);
    let operator = (document.getElementById("operator").innerText);

    if(operator === "+") {
        return [operand1 + operand2 , "addition"]
    } else {
        alert(`umimplemented operator ${operator}`);
        throw `umimplemented operator ${operator}. Aborting `
    }
    
}
function incrementScore(){

}
function incrementWrongAwnser(){

}
function displayAdditionQuestion(operand1, operand2){

    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "+";
}
function displaySubtractionQuestion(){

}
function displayDivisionQuestion(){

}

function displayMultiplyQuestion(){

}