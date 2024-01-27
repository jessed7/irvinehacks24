document.addEventListener("DOMContentLoaded", function() {
});

function addEditEventListener(button) {
    var isEdit = false;
    button.addEventListener("click", function() {
        var cardID = button.closest("span").id;
        button.innerHTML = isEdit ? "&#128393;" : "&#10003;";
        var edibleprompt = document.getElementById(`promptinpt${cardID}`);
        var edibleanswer = document.getElementById(`answerinpt${cardID}`);
        if (isEdit) {
            edibleprompt.contentEditable = 'false';
            edibleanswer.contentEditable = 'false';
            edibleprompt.ariaDisabled = true;
            edibleanswer.ariaDisabled = true;
        } else {
            edibleprompt.contentEditable = 'true';
            edibleanswer.contentEditable = 'true';
            edibleprompt.ariaDisabled = false;
            edibleanswer.ariaDisabled = false;
        }

        isEdit = !isEdit;
    });
}

function addDeleteEventListener(button) {
    button.addEventListener("click", function() {
        var flashcards = document.getElementById("flashcards");
        var cardSpan = button.closest("span");
        flashcards.removeChild(cardSpan);
    });
}

function newCard() {
    // reminder to change span ids, promptinpts, and answerinpt ids
    var newCardHTML = 

    `<div class="col" style="text-align: left; padding: 0;">
        <p id="promptinpt2" type="text" style="width: 100%; border: none; border-radius: 10px; background-color: white; padding: 7px;">enter prompt</p>
    </div>
    <div class="col-1" style="width: fit-content;">
        <h3 style="color: gainsboro;">|</h3>
    </div>
    <div class="col" style="text-align: left; padding: 0;">
        <p id="answerinpt2" type="text" style="width: 100%; border: none; border-radius: 10px; background-color: white; padding: 7px;">enter answer</p>
    </div>
    <div class="col-1" style="padding: 0; width: fit-content; padding-left: 10px;">
        <button id="editbtn" type="button" style="border: none; padding: 7px; background-color: gainsboro;">&#128393;</button>
    </div>
    <div class="col-1" style="padding: 0; width: fit-content;">
        <button id="deletebtn" type="button" style="border: none; padding: 7px; background-color: gainsboro;"> 
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
            </svg>
        </button>
    </div>`

    var appendspan = document.createElement("span");
    appendspan.style.display = "flex";
    appendspan.style.paddingTop = "12px";
    appendspan.style.paddingBottom = "12px";
    appendspan.innerHTML += newCardHTML;
    appendspan.id = "2";

    var flashcards = document.getElementById("flashcards");
    flashcards.appendChild(appendspan);

    var editbtn = appendspan.querySelector("#editbtn");
    addEditEventListener(editbtn);

    var deletebtn = appendspan.querySelector("#deletebtn");
    addDeleteEventListener(deletebtn);
    
}