// Functions for the basic math operators

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


// Operator (Function which takes an operator and 2 numbers and then calls one of the above functions on the numbers)

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



// Event listeners that call the function input when a number gets clicked

document.getElementById('0').addEventListener('click', input);
document.getElementById("1").addEventListener('click', input);
document.getElementById('2').addEventListener('click', input);
document.getElementById('3').addEventListener('click', input);
document.getElementById('4').addEventListener('click', input);
document.getElementById('5').addEventListener('click', input);
document.getElementById('6').addEventListener('click', input);
document.getElementById('7').addEventListener('click', input);
document.getElementById('8').addEventListener('click', input);
document.getElementById('9').addEventListener('click', input);
document.getElementById('+').addEventListener('click', input);
document.getElementById('-').addEventListener('click', input);
document.getElementById('*').addEventListener('click', input);
document.getElementById('/').addEventListener('click', input);
document.getElementById('.').addEventListener('click', input);




// 

function input(getElementById) {
console.log(getElementById.target.innerText);
let chosenNumber = document.getElementById("display").innerText = getElementById.target.innerText;

console.log(chosenNumber);

}




























