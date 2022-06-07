 document.addEventListener("DOMContentLoaded", function(){
     let buttons = document.getElementsByTagName("button");

    for (let button of buttons){
        button.addEventListener("click" , function(){
            if(this.getAttribute("data-type") === "submit") {
                alert("you clicked submit!")
            }
            else {
                let gameType = this.getAttribute("data-type")
                alert(`you click ${gameType}`)
            }
        })

    }
})

function runGame(){

}
function checkAwnser(){

}
function calculateCorrectAwnser() {
    
}
function incrementScore(){

}
function incrementWrongAwnser(){

}
function displayAdditionQuestion(){

}
function displaySubtractionQuestion(){

}
function displayDivisionQuestion(){

}

function displayMultiplyQuestion(){

}