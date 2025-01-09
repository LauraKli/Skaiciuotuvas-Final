let display = document.getElementById('display');
let currentOperation = [];
let operatorSet = false;

function clearDisplay() {
    display.innerText = '';
    currentOperation = [];
    operatorSet = false;
}
function deleteLast() {
    let currentDisplay = display.innerText;
    display.innerText = currentDisplay.slice(0, -1);
    currentOperation.pop();
}
function appendNumber(number) {
    display.innerText += number;
    currentOperation.push(number);
    operatorSet = false;
}
function appendOperator(operator) {
    if (!operatorSet) {
        display.innerText += operator;
        currentOperation.push(operator);
        operatorSet = true;
    }
}
function calculate() {
    let result = 0;
    let currentNumber = '';
    let currentOperator = '+';

    for (let i = 0; i < currentOperation.length; i++) {
        let char = currentOperation[i];

        if (!isNaN(char) || char === '.') {
            currentNumber += char;
        } else {
            result = performCalculation(result, parseFloat(currentNumber), currentOperator);
            currentOperator = char;
            currentNumber = '';
        }
    }
    result = performCalculation(result, parseFloat(currentNumber), currentOperator);
    display.innerText = result;
}
function performCalculation(a, b, operator) {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        default:
            return b;
    }
}