// ===== VARIABLES =====
let currentNumber = "";
let previousNumber = "";
let operation = null;
let expression = "";

// ===== DOM ELEMENTS =====
const expressionDisplay = document.getElementById("expression");
const resultDisplay = document.getElementById("display");
const acButton = document.getElementById("ac");
const cButton = document.getElementById("c");
const percentButton = document.getElementById("percent");
const numberButtons = document.querySelectorAll(".numbers");
const equalsButton = document.getElementById("equals");
const addButton = document.getElementById("add");
const subtractButton = document.getElementById("subtract");
const multiplyButton = document.getElementById("multiply");
const divideButton = document.getElementById("divide");
const decimalButton = document.getElementById("decimal");
const zeroButton = document.getElementById("zero");

// ===== FUNCTIONS =====
function updateDisplay() {
    if (currentNumber === "") {
        resultDisplay.textContent = "0";
    } else {
        resultDisplay.textContent = currentNumber;
    }
    
    if (expression === "") {
        expressionDisplay.textContent = "0";
    } else {
        expressionDisplay.textContent = expression;
    }
}

function calculate() {
    let result;
    const prev = parseFloat(previousNumber);
    const current = parseFloat(currentNumber);
    
    if (isNaN(prev) || isNaN(current)) return;
    
    switch (operation) {
        case "+":
            result = prev + current;
            break;
        case "-":
            result = prev - current;
            break;
        case "×":
            result = prev * current;
            break;
        case "÷":
            if (current === 0) {
                result = "Error";
            } else {
                result = prev / current;
            }
            break;
        default:
            return;
    }
    
    currentNumber = result.toString();
    expression = expression + " = " + currentNumber;
    operation = null;
    previousNumber = "";
    updateDisplay();
}

function setOperator(op, symbol) {
    if (currentNumber === "") return;
    if (previousNumber !== "") {
        calculate();
    }
    operation = op;
    previousNumber = currentNumber;
    expression = previousNumber + " " + symbol;
    currentNumber = "";
    updateDisplay();
}

// ===== NUMBER BUTTONS =====
numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const number = button.textContent;
        currentNumber = currentNumber + number;
        
        if (operation === null) {
            expression = currentNumber;
        } else {
            expression = previousNumber + " " + operation + " " + currentNumber;
        }
        
        updateDisplay();
    });
});

// ===== OPERATOR BUTTONS =====
addButton.addEventListener("click", () => setOperator("+", "+"));
subtractButton.addEventListener("click", () => setOperator("-", "-"));
multiplyButton.addEventListener("click", () => setOperator("×", "×"));
divideButton.addEventListener("click", () => setOperator("÷", "÷"));

// ===== DECIMAL BUTTON =====
decimalButton.addEventListener("click", () => {
    if (!currentNumber.includes(".")) {
        if (currentNumber === "") {
            currentNumber = "0.";
        } else {
            currentNumber = currentNumber + ".";
        }
        
        if (operation === null) {
            expression = currentNumber;
        } else {
            expression = previousNumber + " " + operation + " " + currentNumber;
        }
        
        updateDisplay();
    }
});

// ===== ZERO BUTTON =====
zeroButton.addEventListener("click", () => {
    if (currentNumber !== "0") {
        currentNumber = currentNumber + "0";
        
        if (operation === null) {
            expression = currentNumber;
        } else {
            expression = previousNumber + " " + operation + " " + currentNumber;
        }
        
        updateDisplay();
    }
});

// ===== EQUALS BUTTON =====
equalsButton.addEventListener("click", () => {
    if (previousNumber === "" || currentNumber === "") return;
    calculate();
});

// ===== AC BUTTON (All Clear) =====
acButton.addEventListener("click", () => {
    currentNumber = "";
    previousNumber = "";
    operation = null;
    expression = "";
    updateDisplay();
});

// ===== C BUTTON (Clear current) =====
cButton.addEventListener("click", () => {
    currentNumber = "";
    
    if (operation === null) {
        expression = "";
    } else {
        expression = previousNumber + " " + operation;
    }
    
    updateDisplay();
});

// ===== PERCENT BUTTON =====
percentButton.addEventListener("click", () => {
    if (currentNumber === "") return;
    currentNumber = (parseFloat(currentNumber) / 100).toString();
    
    if (operation === null) {
        expression = currentNumber;
    } else {
        expression = previousNumber + " " + operation + " " + currentNumber;
    }
    
    updateDisplay();
});

// ===== INITIAL DISPLAY =====
updateDisplay();