let randomNumbers = [];

for (let a = 0; a < 15; a++){
    randomNumbers.push(Math.floor(Math.random() * 100));
}

randomNumbers.sort((x, y) => x - y);

let count = 0;

for (let num of randomNumbers){
    if (num > 25){
        count++;
    }
}

console.log("Sorted Array:", randomNumbers);

console.log("Count of Numbers greater than 25:", count);
