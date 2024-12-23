// variabili
let inputNumber = 1; 
let randomVariable = randomNumber(); 
let countInput = 0; 
let array = []; 

//! 1 accesso agli oggetti 
let domInput = document.getElementById('inputNumber'); 
let buttonGuess = document.getElementById('buttonPink'); 
let reset = document.getElementById('reset'); 
let form = document.getElementById('form'); 
let msg1 = document.getElementById('msg1'); 
let msg2 = document.getElementById('msg2'); 
let msg3 = document.getElementById('msg3'); 

//!2 funzioni 
function randomNumber(){
    const random = Math.floor(Math.random() *101 ); 
    return random; 
}

function feedback(){
    if(domInput.value == randomVariable){
        console.log('Congratulation');
        msg1.innerText = "Congratulation You Guess the number"; 
        msg1.style.backgroundColor = "#90EE90"; 
    
    } else if(domInput.value > 100) {
        console.log('Too High');
        msg1.innerText = "The number you selected is: Too High"; 
        msg1.style.backgroundColor = "	#ff7b7b"; 
        msg1.style.border = "2px solid red"; 
        msg1.style.borderRadius = "10px";
        msg1.style.padding = "1rem"; 
        buttonGuess.innerText = 'TRY AGAIN'; 

    } else if(domInput.value < 1){
        console.log('Too Low');
        msg1.innerText = 'The number you selected is: Too Low'; 
        msg1.style.border = "2px solid red"; 
        msg1.style.borderRadius = "10px";
        msg1.style.backgroundColor = "	#ff7b7b"; 
        msg1.style.padding = "1rem"; 
    } else {
        console.log('Try again');
        msg1.innerText = 'Try again'; 
        msg1.style.border = "2px solid yellow"; 
        msg1.style.borderRadius = "10px";
        msg1.style.padding = "1rem"; 
        msg1.style.backgroundColor = '#FFFF8F'; 
        buttonGuess.innerText = "TRY AGAIN"; 
    }
}

function style(){
    let counter = document.getElementById('counter'); 
    let list = document.getElementById('list'); 
    counter.innerHTML = countInput; 
    counter.style.color = ' #595cff'; 
    counter.style.border = "2px solid black"; 
    counter.style.borderRadius = "10px"
    counter.style.padding = "5px"; 
    counter.style.width = "3rem"; 
    counter.style.textAlign = "center"; 
    counter.style.margin = "auto"; 

    list.innerHTML = array; 
    list.style.minHeight = '2rem'; 
    list.style.color = ' #595cff'; 
    list.style.border = "2px solid black"; 
    list.style.borderRadius = "10px"
    list.style.padding = "5px"; 
    list.style.textAlign = "center"; 
    list.style.margin = "auto"; 
}


//!3 add events listeners 
buttonGuess.addEventListener('click', function stampa(e){
    e.preventDefault(); 
    let containerInput = domInput.value; 
    countInput =  inputNumber++; 
    array.push(domInput.value); 
    style();
    feedback(); 
    console.log(containerInput);
    console.log(array);
})

reset.addEventListener('click', function reset(e){
    e.preventDefault(); 
    form.reset(); 
    buttonPink.innerHTML = 'GUESS'; 
    msg1.innerHTML= "Random computer answer"; 
    msg1.style.backgroundColor = "white"; 
    msg1.style.border ='none'; 
    list.innerHTML = []; 
    array = []; 
    counter.innerHTML = ""; 
    counter.style.minHeight = "2rem"; 
} )



// 7 input validation - input number validation  - error message if the input is not correct 
// 8 restyling ? 
// 9 review the video to add some interesting features 
// 10 github 
// SINTESI DELLE FEATURES PIU IMPORTANTI E STUDIALE A MEMORIA. 