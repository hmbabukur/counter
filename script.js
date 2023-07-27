//VARIABLES//
const displayOutput = document.querySelector('.displayer');
const btnIncrement = document.querySelector('.increment');
const btnDecrement = document.querySelector('.decrement');
const btnReset = document.querySelector('.reset');

displayOutput.textContent = 0;

let count = 0;

btnIncrement.addEventListener('click', function (){
    count = count + 1;
    displayOutput.textContent = count;

    if (count >  1)  {
        btnDecrement.disabled = false;
    }
});

btnDecrement.addEventListener('click', function (){
    count = count - 1;
    displayOutput.textContent = count;

    if (count < 1)  {
        btnDecrement.disabled = true;
    }
});

btnReset.addEventListener('click', function (){
    count = 0;
    displayOutput.textContent = count;
});

