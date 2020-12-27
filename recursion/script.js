function isEven(number) {
    if (typeof number === 'number') { //This can be also compared with isNan().
        if (number == 0) {
            return true;
        }
        else if (number == 1) {
            return false;
        }
        else if (number < 0) {
            return isEven(-number);
        }
        else {
            return isEven(number - 2);
        }
    }
    else{
        return 'The parameter must be a valid number.'
    }

}

console.log('The first number is 15');
console.log(isEven(15));
console.log('The second number is 6');
console.log(isEven(6));
console.log('The third number is -1');
console.log(isEven(-1));
console.log('The fourth number is hello there');
console.log(isEven('hello there'));