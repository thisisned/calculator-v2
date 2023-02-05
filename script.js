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
    let ans;
    switch (op) {
        case "add":
            ans = add(a, b);
            break;
        case "subtract":
            ans = subtract(a, b);
            break;
        case "divide":
            ans = divide(a, b);
            break;
        case "multiply":
            ans = multiply(a, b);
            break;
        default:
            break;
    }
    return Number((ans).toFixed(12));
};

let newNum = true;
let operandOne = 0;
let operandTwo = 0;
let displayValue = 0;
let operator = "";

const numberButtons = document.querySelectorAll('.num-button')
const operatorButtons = document.querySelectorAll('.op-button')
const display = document.querySelector("#calc-display");
const equalButton = document.querySelector('#eq');

function updateDisplay(value) {
    if (newNum) {
        displayValue = value;
        newNum = false;
        operatorButtons.forEach((button) => { button.classList.remove('op-active') });
    }
    else {
        displayValue += value;
    }
    display.innerHTML = displayValue;
}

numberButtons.forEach(function (currentBtn) {
    currentBtn.addEventListener('click', function () {
        updateDisplay(currentBtn.id);
    });
})

operatorButtons.forEach(function (currentBtn) {
    currentBtn.addEventListener('click', function () {
        currentBtn.classList.toggle('op-active');
        newNum = true;
        operandOne = parseInt(display.innerHTML);
        operator = currentBtn.id;
    });
})

equalButton.addEventListener('click', function () {
    operandTwo = parseInt(display.innerHTML);
    let answer = operate(operator, operandOne, operandTwo);
    display.innerHTML = answer;
    operatorButtons.forEach((button) => { button.classList.remove('op-active') });
    newNum = true;
})