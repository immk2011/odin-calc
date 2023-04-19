let currentValue = '';
let previousValue = '';
let answer = '';

document.addEventListener("DOMContentLoaded", function(){
    let clear = document.querySelector('#clear');
    let equals = document.querySelector('#equal');

    let numbers = document.querySelectorAll('.number.gray');
    let operators = document.querySelectorAll('.number.operator');

    let display = document.querySelector('#inputbar.screen');

    numbers.forEach(number => number.addEventListener('click', function(e){
        handleNumber(e.target.textContent)
        display.textContent = currentValue;
    }))

    operators.forEach(op => op.addEventListener('click', function(e){
        handleOperator(e.target.textContent)
        display.textContent = currentValue;
    }))

    clear.addEventListener('click', function(){
        display.textContent = '';
        currentValue = '';
        answer = '';
        previousValue = '';
    })

    equals.addEventListener('click', function(){
        operate();
        display.textContent = answer;
        currentValue = answer;
    })
})

function handleNumber(num) {
    if(currentValue.length <= 5){
        currentValue += num;
    }
}

function handleOperator(op) {
    operators = op;
    previousValue = currentValue;
    currentValue = '';
}


const operate = function() {
   previousValue = Number(previousValue);
   currentValue = Number(currentValue);

    switch(operators) {
        case '+':
            answer = previousValue += currentValue;
            break;
        case '-':
            answer = previousValue -= currentValue;
            break;
        case '*':
            answer = previousValue *= currentValue;
            break;
        case '/':
            answer = previousValue /= currentValue;
            break;
    }
}