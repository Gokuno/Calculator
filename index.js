
//Variables
const displayInput = document.getElementById('inputValue')
const operators = ['-', '+', '%', '*', '/']
let operations = []
let currValue = ''
//Functions and Operations

function handleInteractions(value) {
    if(operators.includes(value)) {
        console.log('clicked operator: ', value)
        handleOperatorInput(value)
    } else {
        console.log('clicked numeric value: ', value)
        handleNumericInput(value)
    }
    updateUI()
}

function handleNumericInput(value) {
    if(value === '.' && currValue.includes('.')) {return}
    currValue += value
}

function handleOperatorInput(value) {
    if(!currValue) {
        return 
    }
    operations.push(currValue)
    operations.push(value)
    currValue =''
    
}

function handleEquals() {
    if(operations.length === 0) {return}
    let total = operations[0]
    let prevOperator = null
    if(!currValue) {
        operations.pop()
    } else {
        operations.push(currValue)
        currValue = ''
    }
    for(i = 1; i < operations.length; i++) {
        if(i % 2 === 0) {
            //Numeric value
            total = eval(`${total} ${prevOperator} ${operations[i]}`)
        } else {
            //Operator value
            prevOperator = operations[i]
        } 
    }
    operations = []
    currValue = total.toFixed(4)
    updateUI()
}

function handleReset() {
    currValue = ''
    operations = []
    updateUI()
}

function updateUI() {
    const displayString = operations.join(' ') + currValue
    displayInput.innerText = displayString.trim() ? displayString : '0'
}

