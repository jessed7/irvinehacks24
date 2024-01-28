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

addCard("What is an apple", "A fruit");

addCard("What is an apple2", "A fruit2");

addCard("What is an apple3", "A fruit3");

async function updateCardData(user, cards, cardCount, cardsAnswered) {
  let cardData = JSON.stringify({
    user: user,
    items: Array.from(cards.values()),
    cardCount: cardCount,
    cardsAnswered: cardsAnswered,
  });

  fetch("http://localhost:5000/backup-cards", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: cardData,
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error:", error));
}

async function getUserData(userID) {
  //this function will query to the back end and get the map of all the user data given a userID

  //creating the URL
  const endpoint = "http://localhost:5000/get-user-cards";
  const queryParams = {
    user: userID,
  };
  const queryString = new URLSearchParams(queryParams).toString();
  const url = `${endpoint}?${queryString}`;

  //this will get the user data from the server based on the given userID, that should be a string, and
  //then it will get the json file and return a map of all the data
  const response = await fetch(url).catch((error) =>
    console.error("Error:", error)
  );
  const data = await response.json();
  const userData = new Map(Object.entries(data));
  return userData;
}
