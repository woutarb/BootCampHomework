function countBS(string) {
    let bCounter = 0;
    for (let loopCounter = 0; loopCounter < string.length; loopCounter++) {
        if (string[loopCounter] === 'B') {
            bCounter++;
        }
    }
    return bCounter;
}

function countChar(string, toCountChar) {
    let letterCounter = 0;
    for (let loopCounter = 0; loopCounter < string.length; loopCounter++) {
        if (string[loopCounter] === toCountChar) {
            letterCounter++;
        }
    }
    return letterCounter;
}

console.log(countBS("BBC"));
console.log(countChar("kakkerlak", "k"));
