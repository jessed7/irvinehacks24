//const { set } = require("mongoose");

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("submit-button").addEventListener("click", function() {
        checkCorrect();
        document.getElementById("overlay").style.width = "100%"
        document.getElementById("text").style.visibility = "visible";
        continueGame();
    });
});

function continueGame() {
    var parent = document.getElementById("prompt-container");
    var continuebtn = document.createElement("button");
    continuebtn.id = "continue";
    continuebtn.innerHTML = "next";
    parent.appendChild(continuebtn);
    continuebtn.addEventListener("click", function() {
        newPrompt();
    });
}

function newPrompt() {
    // reminder to change prompts and answers to randomize those in the database
    var promptelt = document.getElementById("prompt").querySelector("p");
    var answerelt = document.getElementById("text");
    promptelt.innerHTML = "what's 1+1"; //new prompt
    answerelt.innerHTML = "2"; //new answer
    answerelt.style.visibility = "hidden";
    document.getElementById("overlay").style.width = "0";
    var continuebtn = document.getElementById("continue");
    document.getElementById("prompt-container").removeChild(continuebtn);

}

function checkCorrect() {
    // reminder to change comparison value to correct value stored in the database
    if (document.getElementById("answer").value != "ants") {
        var container = document.getElementById("prompt");
        container.style.animation = "tilt-shaking 0.3s";
    }
}