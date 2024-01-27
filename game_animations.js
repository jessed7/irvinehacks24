document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("submit-button").addEventListener("click", function() {
        document.getElementById("answer").contentEditable = "false"
        checkCorrect();
        document.getElementById("overlay").style.width = "100%"
        
    });
});

function newPrompt() {
    var promptelt = document.getElementById("prompt").querySelector("p");
    var answerelt = document.getElementById("text");
    console.log(promptelt, answerelt);
    promptelt.innerHTML = "what's 1+1"; //new prompt
    answerelt.innerHTML = "2"; //new answer
    document.getElementById("overlay").style.width = "0";

}

function checkCorrect() {
    // if incorrect, play shake animation and damage player
    // if correct, damage slime
    if (document.getElementById("answer").value != "ants") {
        var container = document.getElementById("prompt");
        container.style.animation = "tilt-shaking 0.3s";
    }
}