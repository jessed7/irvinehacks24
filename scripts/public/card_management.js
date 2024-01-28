// This file contains the code to manage the retrieving, editing, and storing of flashcards

/* 
When database storing is set up, follow this logic:
    1. If the player username is in the database, then place the flashcard data from the DB into the cards object
    2. If the username is not in the database, create a new Map to represent the cards

*/
// This Map stores the ID number of each card as a key and the Card object as its value
const cards = new Map();

document.addEventListener("DOMContentLoaded", function() {
    if (document.title === "Main") {
        addExistingCards(cards);
        let isEmpty;
        document.getElementById("addflashcard").addEventListener("click", function() {
            const emptyImg = document.querySelector(".emptyImg");
            if (emptyImg !== null) {
                document.getElementById("flashcards").removeChild(emptyImg);
            }
        });
        checkEmpty();
    }
    else if (document.title === "Game") {
        const submitButton = document.querySelector("#submit-button");
        submitButton.addEventListener("click", getAnswerText);
    }

});

// This class will represent each card
class Card {
    static currentID = 0; // When DB is implemented, save this number to be imported whenever data is imported
    constructor(id, prompt, answer) {
        this.id = id;
        this.prompt = prompt;
        this.answer = answer;
        this.numRight = 0;
        this.numWrong = 0;
    }
}

function addCard(prompt, answer) {
    // Based on a given prompt and answer, add a new Card to the cards map with an approiate ID number
    const cardID = Card.currentID++;
    cards.set(cardID, new Card(cardID, prompt, answer));
}

function deleteCard(cardID) {
    // Given the ID of a card, remove the card from the cards map
    cards.delete(cardID);
}

function editCard(cardID, prompt, answer) {
    // Given the ID of the card, the new prompt, and the new answer, update the card with new information
    const card = cards.get(cardID);
    card.prompt = prompt;
    card.answer = answer;
}

// Before starting the battle portion of the game, save the current card set into the database for the player

function setPrompt(cardID) {
    // Based on the ID of a card, set the prompt box's text to the card's prompt
    const card = cards.get(cardID);
    const promptText = document.querySelector("#prompt p");
    promptText.innerHTML = card.prompt;
}

function getAnswerText() {
    // Returns the text currently in the answer text box
    console.log(`The value of the answer box is: ${document.querySelector("#answer").value}`);
    return document.querySelector("#answer").value;
}


// Formerly flashcards.js


function checkEmpty() {
    // isEmpty = document.getElementById("flashcards").innerHTML === '';
    isEmpty = !document.getElementById("flashcards").innerHTML.includes("prompt"); // If there are no cards, the word "prompt" will not appear
    if (isEmpty) {
        var imagediv = document.createElement("div");
        var image = document.createElement('img');
        image.src = "...";
        imagediv.appendChild(image);
        imagediv.style.display = "flex";
        imagediv.style.alignItems = "center";
        imagediv.style.justifyContent = "center";
        imagediv.style.width = "100%"
        flashcards.appendChild(imagediv);

        imagediv.classList.toggle("emptyImg");
    }
}

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

        if (isEdit) {
            console.log(`ID of this card: ${cardID}`);
            console.log(typeof(cardID));
            editCard(parseInt(cardID), document.querySelector(`#promptinpt${cardID}`).innerHTML, document.querySelector(`#answerinpt${cardID}`).innerHTML);
        }
        isEdit = !isEdit;
    });
}

function addDeleteEventListener(button) {
    button.addEventListener("click", function() {
        var flashcards = document.getElementById("flashcards");
        var cardSpan = button.closest("span");
        flashcards.removeChild(cardSpan);
        deleteCard(parseInt(button.closest("span").id));

        checkEmpty();
    });
}



function addCardToScreen(id = -1, prompt="enter prompt", answer="enter answer") {
    // Adds a card to the display
    // Negative 1 signifies a new card
    console.log(id)
    let cardID;
    if (id === -1) {
        cardID = Card.currentID; // CHANGE THIS TO BE THE CARD ID NUMBER IN CARD CLASS AND DO NOT INCREMENT IN FINAL BC CARD CLASS WILL DO THAT
        addCard(prompt, answer);
    }
    else {
        cardID = id;
    }

    // reminder to change span ids, promptinpts, and answerinpt ids
    var newCardHTML = 

    `<div class="col" style="text-align: left; padding: 0; padding-right: 5px;">
        <p id="promptinpt${cardID}" type="text" style="width: 100%; border: none; border-radius: 10px; background-color: white; padding: 7px;">${prompt}</p>
    </div>
    <div class="col" style="text-align: left; padding: 0; padding-left: 5px;">
        <p id="answerinpt${cardID}" type="text" style="width: 100%; border: none; border-radius: 10px; background-color: white; padding: 7px;">${answer}</p>
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
    appendspan.id = cardID;

    var flashcards = document.getElementById("flashcards");
    flashcards.appendChild(appendspan);

    var editbtn = appendspan.querySelector("#editbtn");
    addEditEventListener(editbtn);

    var deletebtn = appendspan.querySelector("#deletebtn");
    addDeleteEventListener(deletebtn);

    flashcards.scrollTop = flashcards.scrollHeight;
}

function newCard() {
    addCardToScreen();

    // Add code for saving cards to the card list
    
}

function addExistingCards(currentCards) {
    // This function will display all of the existing cards in the player's set
    // Remember to add code for keeping track of player's current new card ID number
    for (let i = 0; i < cards.size; i++) {
        const card = cards.get(i);
        addCardToScreen(card.id, card.prompt, card.answer);
    }
}

// End of flashcards.js

// Testing
addCard("What is UCI's Mascot name?", "Peter");
addCard("What year was UCI founded?", "1965");
addCard("What is 1 + 1?", "2");
console.log(cards);
console.log(`The last card's ID is ${Card.currentID - 1}`);