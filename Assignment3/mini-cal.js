function calculate(num1, num2, operation){
    if (typeof num1 !== 'number' || typeof num2 !== 'number'){
        alert('please enter valid numbers');
        return;
    }
    if (typeof operation !== 'string'){
        alert('please enter a valid operation');
        return;
    }

// Performing Maths Operations Using a switch statement
let result;
switch (operation){
    case 'Add': result = num1 + num2;
    break;
    case 'Subtract': result = num1 - num2;
    break;
    case 'Multiply': result = num1 * num2;
    break;
    case 'Divide':
        if (num2 !== 0){
            result = num1 / num2;
        }else {
            alert('cannot divide by zero');
            return;
        }
    break;
    case 'Modulus': result = num1 % num2;
    break;
    default:
    alert('Please enter a valid operation');
    return;
}

// Returning the result 
return result;
}

// Getting user inputs using prompts
let num1 = parseFloat(prompt('Enter first number'));

let num2 = parseFloat(prompt('Enter second number'));

let operation = prompt('Enter operation (Add, Subtract, Divide, Modulus)');

// Calling the Calculate function and display the result
let result = calculate(num1, num2, operation);
alert('Result:' + result);