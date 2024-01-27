
   

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

addCard('What is an apple', 'A fruit')

addCard('What is an apple2', 'A fruit2')

addCard('What is an apple3', 'A fruit3')


let cardData = JSON.stringify({user: 1, items: Array.from(cards.values()), cardCount: 0, cardsAnswered : 0});

console.log(cardData);



fetch('http://localhost:5000/backup-cards', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: cardData,
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
   