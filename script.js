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
    return Number((ans).toFixed(10));
};

let newNum = true;
let operandOne = false;
let displayValue = 0;
let operator = false;
let operatorTime = true;
let decimal = false;

const numberButtons = document.querySelectorAll('.num-button')
const operatorButtons = document.querySelectorAll('.op-button')
const display = document.querySelector("#calc-display");
const equalButton = document.querySelector('#eq');
const acButton = document.querySelector('#AC');
const cButton = document.querySelector('#C');
const decButton = document.querySelector('#dec');

function reset() {
    newNum = true;
    operandOne = false;
    operandTwo = false;
    operator = false;
    operatorTime = true;
    decimal = false;
    operatorButtons.forEach(button => { button.classList.remove('op-active') });
}

function updateDisplay(value) {
    if (newNum) {
        displayValue = value;
        newNum = false;
        operatorButtons.forEach(button => { button.classList.remove('op-active') });
    }
    else {
        if (display.innerHTML.length < 13 && displayValue != 0) {
            displayValue += value;
        }
    }
    display.innerHTML = displayValue;
}

numberButtons.forEach(function (currentBtn) {
    currentBtn.addEventListener('click', function () {
        updateDisplay(currentBtn.id);
        operatorTime = true;
    });
})

operatorButtons.forEach(function (currentBtn) {
    currentBtn.addEventListener('click', function () {
        if (operatorTime) {
            if (operator) {
                operandTwo = parseFloat(display.innerHTML);
                let answer = operate(operator, operandOne, operandTwo);
                display.innerHTML = answer;
                operandOne = answer;
            }
            currentBtn.classList.add('op-active');
            newNum = true;
            operandOne = parseFloat(display.innerHTML);
            operator = currentBtn.id;
            operatorTime = false;
        };
    });
})

equalButton.addEventListener('click', function () {
    operandTwo = parseFloat(display.innerHTML);
    let answer = operandOne || operandOne === 0 ? operate(operator, operandOne, operandTwo) : operandTwo;
    if (answer.toString().length > 13) {
        answer = answer.toExponential(7);
    };
    display.innerHTML = answer;
    reset();
})

acButton.addEventListener('click', function () {
    display.innerHTML = 0;
    reset();
})

cButton.addEventListener('click', function () {
    display.innerHTML = 0;
    newNum = true;
})

decButton.addEventListener('click', function () {
})