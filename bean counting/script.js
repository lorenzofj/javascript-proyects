const countChar = (string, char) =>{
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] == char) {
            count++;
        }
    }
    return count;
}

const countBs = (string) => countChar(string, "B");

console.log(countBs("This function is counting the ammount of 'B' letters in the string"));
console.log(countChar("ABCDEA", "A"));
