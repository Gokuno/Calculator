# Responsive Web Calculator

A simple and responsive calculator built with HTML, CSS, and JavaScript. This app supports basic arithmetic operations, square roots, and percentage calculations.

## Features

- Basic arithmetic operations: Addition, Subtraction, Multiplication, and Division.
- Supports square root and percentage calculations.
- User-friendly interface with a responsive design.

## Technologies Used

- HTML
- CSS
- JavaScript

## File Structure

/calculator-app │ 
  ├── index.html # Main HTML file 
  ├── index.js # JavaScript functionality 
  └── styles.css # Styles for the calculator

## How to Use

1. **Clone the repository:**
   ```bash 
   git clone <[repository-url](https://github.com/Gokuno/Calculator/)>
## Code Explanation
- index.html
This file contains the structure of the calculator, including the display and buttons for input.

- index.js
Handles the calculator's functionality:

handleInteractions(value): Determines the type of input (numeric, operator, etc.) and processes it.
handleNumericInput(value): Appends numeric input to the current value.
handleOperatorInput(value): Processes operator inputs and manages operations.
handlePercentage(): Converts the current value to a percentage.
handleSquareRoot(): Calculates the square root of the current value.
handleDelete(): Deletes the last character of the current value.
handleEquals(): Evaluates the expression and displays the result.
handleReset(): Resets the calculator state.
updateUI(): Updates the display with the current operations and input value.
- styles.css
Styles the calculator's layout, including colors, fonts, and button appearances.

## Contributing
Contributions are welcome! Please feel free to open issues or submit pull requests.
