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