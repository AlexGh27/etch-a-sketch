const container = document.querySelector('#container');

let rows = 16;
let columns = 16;

function drawSquare(columns, rows) {

    let square = document.createElement('div');
    square.classList = 'grid-square';
    container.appendChild('square');
    square.setAttribute('style', 'height: 100px; width: 100px; outline: thin solid')
                
    
}

function drawGrid(columns, rows) {
    for (let i = 0; i < columns; i++) {
        for (let i = 0; i < rows; i++) {
            drawSquare(columns, rows);
        }
    }
}

drawGrid(columns, rows);


}