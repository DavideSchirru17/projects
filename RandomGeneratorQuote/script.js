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
const soundBtn = document.querySelector('.sound'); 
const copyBtn = document.querySelector('.copy'); 

let lastQuoteIndex = -1;

buttonQuote.addEventListener('click', function(){ // function write on the DOM a quote 
 let randomIndex = Math.floor(Math.random() * arrayQuotes.length);

  if (randomIndex === lastQuoteIndex) {
      randomIndex = (randomIndex + 1) % arrayQuotes.length;
  }
  
   const randomQuote = arrayQuotes[randomIndex]; 
   quoteIdSection.innerHTML = randomQuote.quote; 
   authorIdSection.innerHTML = randomQuote.author; 
    }
)
 
soundBtn.addEventListener('click', function(){ // fx reading text from the DOM and convert it to speech 
  const quoteText = quoteIdSection.innerHTML; 
  const authorText = authorIdSection.innerHTML; 
  let utterance = new SpeechSynthesisUtterance(`${quoteText} by ${authorText}`); 
  speechSynthesis.speak(utterance); // window object speak reading method
})

copyBtn.addEventListener('click', ()=>{ // fx copy from the quote 
  const quote = quoteIdSection.innerText; 
  const author = authorIdSection.innerText; 
  const fullText = `${quote} ${author}`; 
  navigator.clipboard.writeText(fullText); 
})