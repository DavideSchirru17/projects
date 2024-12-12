//!  Fetch quote from the API
// ! RESULT : CREATE A RANDOM QUOTE GENERATOR 

const arrayQuotes = [{quote:'" To live is the rarest thing in the world. Most people exist, that is all. "', author: '- Oscar Wilde'},
    {quote: '" That it will never come again is what makes life so sweet. "', author: '- Emily Dickinson'}, 
    {quote: '" It is never too late to be what you might have been. "', author: '- George Eliot'}, 
    {quote: '" To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. "', author: '- Ralph Waldo Emerson'}, 
    {quote: '" Pain is inevitable. Suffering is optional. "', author: '- Haruki Murakami'}
]; 

const quoteIdSection = document.getElementById('quote'); 
const authorIdSection = document.getElementById('author'); 
const buttonQuote = document.querySelector('button');  
const sountBtn = document.querySelector('.sound'); 
const copyBtn = document.querySelector('.copy'); 


buttonQuote.addEventListener('click', function(){ // function write quote DOM
          const randomIndex = Math.floor(Math.random() * arrayQuotes.length); 
          const randomQuote = arrayQuotes[randomIndex]; 
          quoteIdSection.innerHTML = randomQuote.quote; 
          authorIdSection.innerHTML = randomQuote.author; 
    }
)
 
sountBtn.addEventListener('click', function(){ // fx reading text and speach
  const quoteText = quoteIdSection.innerHTML; 
  const authorText = authorIdSection.innerHTML; 
  let utterance = new SpeechSynthesisUtterance(`${quoteText} by ${authorText}`); 
  speechSynthesis.speak(utterance); // window object speak reading method
})

copyBtn.addEventListener('click', ()=>{
  const quote = quoteIdSection.innerText; 
  const author = authorIdSection.innerText; 
  const fullText = `${quote} ${author}`; 
  navigator.clipboard.writeText(fullText); 
})
