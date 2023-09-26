const api_url = 'https://api.quotable.io/random';
const quote = document.getElementById('quote');
const author = document.getElementById('author');

async function getRandomQuote() {
    const response = await fetch(api_url);
    var data = await response.json();
    console.log(data);
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
}

getRandomQuote();

function post(){
    window.open("https://twitter.com/intent/tweet?text="+ "'"+quote.innerHTML+"'" + " -" + author.innerHTML,
    "Post Window",
    "width=600",
    "height=300")
}