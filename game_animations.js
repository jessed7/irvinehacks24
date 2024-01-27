document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("submit-button").addEventListener("click", function() {
        document.getElementById("overlay").style.width = "100%"
        checkCorrect();
    });
});

function newPrompt() {
    var promptelt = document.getElementById("prompt").querySelector("p");
    var answerelt = document.getElementById("text");
    console.log(promptelt, answerelt);
    promptelt.innerHTML = "what's 1+1"; //new prompt
    answerelt.innerHTML = "2"; //new answer

}

function checkCorrect() {
    // if incorrect, play shake animation and clear prompt and text html and damage player
    // if correct, clear prompt and text html and damage slime
    //document.getElementById("text").innerHTML === "getAnswerText()"
    var container = document.getElementById("prompt");
    container.style.animation = "tilt-shaking 0.5s"
}