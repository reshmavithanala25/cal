let display = document.getElementById("display");
let firstNumber = "";
let secondNumber = "";
let operator = "";
let shouldResetDisplay = false;

function appendNumber(number) {
    if (display.value === "0" || shouldResetDisplay) {
        display.value = number;
        shouldResetDisplay = false;
    } else {
        display.value += number;
    }
}

function setOperator(op) {
    if (operator !== "") calculate();
    firstNumber = display.value;
    operator = op;
    shouldResetDisplay = true;
}

function calculate() {
    if (operator === "" || shouldResetDisplay) return;

    secondNumber = display.value;
    let result;

    let num1 = parseFloat(firstNumber);
    let num2 = parseFloat(secondNumber);

    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num2 === 0 ? "Error" : num1 / num2;
            break;
        default:
            return;
    }

    display.value = result;
    operator = "";
    shouldResetDisplay = true;
}

function clearDisplay() {
    display.value = "";
    firstNumber = "";
    secondNumber = "";
    operator = "";
    shouldResetDisplay = false;
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}