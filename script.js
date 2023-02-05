// Basic calculation functions

const add = function (a, b) {
    return a + b;
};

const subtract = function (a, b) {
    return a - b;
};

const multiply = function (a, b) {
    return a * b;
};

const divide = function (a, b) {
    return a / b;
};

function operate(op, a, b) {
    switch (op) {
        case "add":
            return add(a, b);
            break;
        case "subtract":
            return subtract(a, b);
            break;
        case "divide":
            return divide(a, b);
            break;
        case "multiply":
            return multiply(a, b);
            break;
        default:
            break;
    }
};

let newNum = true;
let operandOne = 0;
let operandTwo = 0;
let displayValue = 0;
let operator = "";

const display = document.querySelector("#calc-display");

function updateDisplay(value) {
    if (newNum) {
        displayValue = value;
        newNum = false;
    }
    else {
        displayValue += value;
    }
    display.innerHTML = displayValue;
}

const numberButtons = document.querySelectorAll('.num-button')

numberButtons.forEach(function (currentBtn) {
    currentBtn.addEventListener('click', function () {
        updateDisplay(currentBtn.id);
    });
})

const operatorButtons = document.querySelectorAll('.op-button')

operatorButtons.forEach(function (currentBtn) {
    currentBtn.addEventListener('click', function () {
        currentBtn.classList.toggle('op-active');
        newNum = true;
        operandOne = parseInt(display.innerHTML);
        operator = currentBtn.id;
    });
})

const equalButton = document.querySelector('#eq');

equalButton.addEventListener('click', function () {
    operandTwo = parseInt(display.innerHTML);
    let answer = operate(operator, operandOne, operandTwo);
    display.innerHTML = answer;
    operatorButtons.forEach((button) => { button.classList.remove('op-active') });
})
