//!  Fetch quote from the API
// ! RESULT : CREATE A RANDOM QUOTE GENERATOR 

const arrayQuotes = [{quote:'To live is the rarest thing in the world. Most people exist, that is all.', author: 'Oscar Wilde'},
    {quote: 'That it will never come again is what makes life so sweet.', author: 'Emily Dickinson'}, 
    {quote: 'It is never too late to be what you might have been.', author: 'George Eliot'}, 
    {quote: 'To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.', author: 'Ralph Waldo Emerson'}, 
    {quote: 'Pain is inevitable. Suffering is optional.', author: 'Haruki Murakami'}
]; 

const buttonQuote = document.querySelector('button');  
const quoteIdSection = document.getElementById('quote'); 
const authorIdSection = document.getElementById('author'); 

buttonQuote.addEventListener('click', function(){
          const randomIndex = Math.floor(Math.random() * arrayQuotes.length); 
          const randomQuote = arrayQuotes[randomIndex]; 
          quoteIdSection.innerHTML = randomQuote.quote; 
          authorIdSection.innerHTML = randomQuote.author; 
    }
)

// icons 
// twitter https://x.com/?lang=en



// displayQuote(); 
// displayAuthor(); 
// function displayQuote(){
//     for(let i = 0 ; i < arrayQuotes.length;  i++){
//         console.log([i + 1], arrayQuotes[i].quote);

//     }
// }
// function displayAuthor(){
//     for(let i = 0 ; i < arrayQuotes.length;  i++){
//         console.log([i + 1], arrayQuotes[i].author);
//     }
// }