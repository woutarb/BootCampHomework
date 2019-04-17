//V1:
for (let counter = 0; counter <= 100; counter++) {
    if (counter % 3) {
        console.log('Fizz');
    } else if (counter % 5) {
        console.log('Buzz');
    } else {
        console.log(counter);
    }
}
// V2 (modified, second half)

for (let counter = 0; counter <= 100; counter++) {
    if (counter % 3 === 0 && counter % 5 === 0) {
        console.log('FizzBuzz');
    } else {
        if (counter % 3 === 0) {
            console.log('Fizz');
        } else if (counter % 5 === 0) {
            console.log('Buzz');
        } else {
            console.log(counter);
        }
    }
}
