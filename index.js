
// Variables
const displayInput = document.getElementById('inputValue'); // Reference to the display element
const operators = ['-', '+', '%', '*', '/']; // Array of supported operators
let operations = []; // Array to store operations in the form of ['operand', 'operator', 'operand', ...]
let currValue = ''; // Current input value

// Functions and Operations
function handleInteractions(value) {
     // Determine the type of input value and call the appropriate function
    if (value === '%') {
        handlePercentage();
    } else if (value === 'sqrt') {
        handleSquareRoot();
    } else if (value === 'delete') {
        handleDelete();
    } else if (operators.includes(value)) {
        console.log('clicked operator: ', value);
        handleOperatorInput(value);
    } else {
        console.log('clicked numeric value: ', value);
        handleNumericInput(value);
    }
    // Update the user interface
    updateUI();
}

function handleNumericInput(value) {
    // Append numeric input value to the current input
    if (value === '.' && currValue.includes('.')) {
        return; // Prevent adding more than one decimal point
    }
    currValue += value;
}

function handleOperatorInput(value) {
    // Handle operator input by pushing the current value and the operator to the operations array
    if (!currValue) {
        return; // Avoid adding an operator without a preceding operand
    }

    operations.push(currValue);
    operations.push(value);
    currValue = '';
}

function handlePercentage() {
    // Convert the current value to a percentage
    if (!currValue) {
        return; // Avoid calculating percentage without a value
    }

    const percentage = parseFloat(currValue) / 100;
    currValue = percentage.toString();
}

function handleSquareRoot() {
    // Calculate the square root of the current value
    if (currValue < 0) {
        // Handle error for negative numbers if needed
        alert('Cannot calculate square root of a negative number');
        return;
    }

    const squareRoot = Math.sqrt(parseFloat(currValue));
    currValue = squareRoot.toString();
}

function handleDelete() {
    // Remove the last character from the current value
    currValue = currValue.slice(0, -1);
}

function handleEquals() {
    // Calculate the result of the operations array
    if (operations.length === 0) {
        return; // Avoid calculating without any operation
    }
    let total = operations[0];
    let prevOperator = null;
    if (!currValue) {
        operations.pop();
    } else {
        operations.push(currValue);
        currValue = '';
    }
    for (let i = 1; i < operations.length; i++) {
        if (i % 2 === 0) {
            // Numeric value
            total = eval(`${total} ${prevOperator} ${operations[i]}`);
        } else {
            // Operator value
            prevOperator = operations[i];
        }
    }
    operations = [];
    currValue = total.toFixed(4); // Limit the result to four decimal places
    updateUI();
}

function handleReset() {
    // Reset the calculator state
    currValue = '';
    operations = [];
    updateUI();
}

function updateUI() {
    // Update the display element with the current operations and input value
    const displayString = operations.join(' ') + currValue;
    displayInput.innerText = displayString.trim() ? displayString : '0'; // Display the result or '0' if no input
}
