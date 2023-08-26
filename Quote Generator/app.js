
const URL = "https://api.quotable.io/random";
const quote = document.getElementById("quote");
const author = document.getElementById("author");
const btn = document.querySelector(".btn");
const btn2 = document.querySelector(".btn2");

async function getQuote(URL){
    const response = await fetch(URL);
    const data = await response.json();

    quote.innerHTML = data.content;
    author.innerHTML = data.author;
}
getQuote(URL);
btn.addEventListener("click", () => {
    getQuote(URL);
});

btn2.addEventListener("click", () => {
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + "----by " + author.innerHTML, "Twwet Window", "width = 600, height = 300");
});
