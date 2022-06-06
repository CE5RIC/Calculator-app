// Add

function add(a, b) {
return a + b;
}


// Subtract

function subtract(a, b) {
    return a - b;
}


// Multiply

function multiply(a, b) {
    return a * b;
}


// Divide

function divide(a, b) {
return a / b;
}


// Operator

function operate(a, operator, b) {
if (operator === "+") {
    let added = add(a, b);
    return added;
} else if (operator === "-") {
    let subtracted = subtract(a, b);
    return subtracted;
} else if (operator === "*") {
    let multiplied = multiply(a, b);
    return multiplied;
} else if (operator === "/") {
    let divided = divide(a, b);
    return divided;
}
}










