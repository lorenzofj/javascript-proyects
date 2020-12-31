const range = (start, end, step) => {
    let myArray = [];
    if (step === undefined) {
        for (let i = start; i <= end; i++) {
            myArray.push(i);
        }
    }
    else if (step > 0) {
        for (let i = start; i <= end; i += step) {
            myArray.push(i);
        }
    }
    else {
        for (let i = start; i >= end; i += step) {
            myArray.push(i);
        }
    }

    return myArray;
}

let sumArray = [1, 2, 3, 4, 5];

function sum(array) {
    let sum = 0;
    for (let value of array) {
        sum += value;
    }
    return sum;
}

console.log(range(1, 10));
console.log(range(1, 10, 2));
console.log(range(10, 1, -2));
console.log(sum(sumArray));

