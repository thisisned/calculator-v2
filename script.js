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
let operand = 0;

const display = document.querySelector("#calc-display");

function updateDisplay(value) {
    if (newNum) {
        operand = value;
        newNum = false;
    }
    else {
        operand += value;
    }
    display.innerHTML = operand;
}

const numberButtons = document.querySelectorAll('.num-button')

numberButtons.forEach(function (currentBtn) {
    currentBtn.addEventListener('click', function () {
        updateDisplay(currentBtn.id);
        console.log(operand);
    });
})