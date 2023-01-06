const quoteBank = [
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author : "Nelson Mandela"
    },
    {
        quote: "The way to get started is to quit talking and begin doing.",
        author : "Walt Disney"
    },
    {
        quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma - which is living with the results of other people's thinking. Don't let the noise of others' opinions drown out your own inner voice. And most important, have the courage to follow your heart and intuition. They somehow already know what you truly want to become. Everything else is secondary.",
        author : "Steve Jobs"
    },
    {
        quote: "If life were predictable it would cease to be life, and be without flavor.",
        author : "Eleanor Roosevelt"
    }
];

window.onload = function() {
    generateQuote();
    document.getElementById("new-quote").addEventListener("click", generateQuote);
}

function generateQuote() {
    let randomQuote = quoteBank[Math.floor(Math.random() * quoteBank.length)];
    document.getElementById("text").innerHTML = randomQuote.quote;
    document.getElementById("author").innerHTML = randomQuote.author;
}
