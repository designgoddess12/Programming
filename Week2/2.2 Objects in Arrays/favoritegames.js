// objects in arrays
const gameArray = [
    { name: 'Uno' , numberOfPlayers: '2 or more' , rating: '1' , shortDescription: 'Be the first player to get rid of all their cards by matching cards by numbers and colors.' },
    { name: 'Rummikube' , numberOfPlayers: '2 or more' , rating: '2' , shortDescription: 'Players take turns forming sets and runs of tiles to get rid of all their tiles.' },
    { name: 'Legend of Zelda' , numberOfPlayers: '1' , rating: '3' , shortDescription: 'A native Nintendo game that centers around Link and Princess Zelda in the land of Hyrule.' },
];

// prompt
let userInput = prompt("I have 3 games in my collection. Pick a number between 1 and 3 and I'll tell you about that game");

// user input
userInput = Number(userInput);

// message to user
window.alert("You selected " + gameArray[userInput-1].name + ", which is a " + gameArray[userInput-1].numberOfPlayers + " player game. " + gameArray[userInput-1].shortDescription);

