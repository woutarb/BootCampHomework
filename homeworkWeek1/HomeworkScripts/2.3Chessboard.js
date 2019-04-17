let bindingSize = 8;
let board = '';

for (let verticalSize = 0; verticalSize < bindingSize; verticalSize++) {
    for (let horizontalSize = 0; horizontalSize < bindingSize; horizontalSize++) {
        if (verticalSize % 2 !== 0) {
            black = ' ';
            white = '#';
        } else {
            black = '#';
            white = ' ';
        }
        if (horizontalSize % 2 === 0) {
            board += white;
        } else {
            board += black;
        }
    }
    board += '\n';
}
console.log(board);
