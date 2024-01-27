// This file contains the code to manage the retrieving, editing, and storing of flashcards

/* 
When database storing is set up, follow this logic:
    1. If the player username is in the database, then place the flashcard data from the DB into the cards object
    2. If the username is not in the database, create a new Map to represent the cards

*/
// This Map stores the ID number of each card as a key and the Card object as its value
const cards = new Map();

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

const submitButton = document.querySelector("#submit-button");
submitButton.addEventListener("click", getAnswerText);

// Testing
addCard("What is UCI's Mascot name?", "Peter");
addCard("What year was UCI founded?", "1965");
addCard("What is 1 + 1?", "2");
console.log(cards);
console.log(`The last card's ID is ${Card.currentID - 1}`);