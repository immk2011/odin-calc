let currentValue = '';
let previousValue = '';

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

    operators.forEach(op => this.addEventListener('click', function(e){
        handleOperator(e.target.textContent)

    }))
})

function handleNumber(num) {
    if(currentValue.length <= 6){
        currentValue += num;
    }
}

function handleOperator(op) {
    operators = op;

}

const add = function(num1, num2) {
    return num1 + num2;
}

const subtract = function(num1, num2) {
    return num1 - num2;
}

const multiply = function(num1, num2) {
    return num1 * num2;
}

const divide = function(num1, num2) {
    return num1 / num2;
}

const operate = function(operator, num1, num2) {
    switch(operator) {
        case '+':
            return add(num1, num2);
            break;
        case '-':
            return subtract(num1, num2);
            break;
        case '*':
            return multiply(num1, num2);
            break;
        case '/':
            return divide(num1, num2);
            break;
    }
}