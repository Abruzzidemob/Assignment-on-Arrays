// Step 1: Create an empty array called randomNumbers
let randomNumbers = [];

// Step 2: Generate 20 random numbers and store them in randomNumbers
for (let i = 0; i < 20; i++) {
    // Generate a random number between 0 and 100 (you can adjust the range as needed)
    let randomNum = Math.floor(Math.random() * 101);
    randomNumbers.push(randomNum);
}

// Step 3: Create two more empty arrays, evenNumbers and oddNumbers
let evenNumbers = [];
let oddNumbers = [];

// Step 4: Check if each number is even or odd and add to respective arrays
for (let num of randomNumbers) {
    if (num % 2 === 0) {
        evenNumbers.push(num);
    } else {
        oddNumbers.push(num);
    }
}

// Step 5: Display the evenNumbers and oddNumbers arrays in the console
console.log('Random Numbers:', randomNumbers);
console.log('Even Numbers:', evenNumbers);
console.log('Odd Numbers:', oddNumbers);
