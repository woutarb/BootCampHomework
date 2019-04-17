function range(start, end) {
    let outputArray = [];
    stepAmount = 1;
    if (start < end) {
        for (let counter = start; counter <= end; counter + stepAmount) {
            outputArray.push(counter)
        }
    } else {
        for (let counter = start; counter >= end; counter - stepAmount) {
            outputArray.push(counter)
        }
    }
    return outputArray;
}
