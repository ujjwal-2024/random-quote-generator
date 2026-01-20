// Array of quotes
const quotesArray = [
    "The best way to get started is to quit talking and begin doing. – Walt Disney",
    "Don't let yesterday take up too much of today. – Will Rogers",
    "It's not whether you get knocked down, it's whether you get up. – Vince Lombardi",
    "If you are working on something exciting, it will keep you motivated. – Unknown",
    "Success is not in what you have, but who you are. – Bo Bennett",
    "The harder you work for something, the greater you'll feel when you achieve it. – Unknown",
    "Dream bigger. Do bigger. – Unknown",
    "Don't watch the clock; do what it does. Keep going. – Sam Levenson"
];

// Select elements
const button = document.querySelector("button");
const quoteText = document.querySelector("h1");

// Add click event
button.addEventListener("click", () => {
    const index = Math.floor(Math.random() * quotesArray.length); // use array length
    quoteText.textContent = quotesArray[index]; // show random quote
});
