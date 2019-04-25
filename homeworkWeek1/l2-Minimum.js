function min(first, second) {
    if (first < second) {
        return first;
    } else if (second < first) {
        return second;
    } else {
        return 'equal!';
    }
}


console.log(min(0, 10));
console.log(min(0, -10));
