let buttonGrid = document.querySelector('#buttonGrid');

// This builds the grid based on the input from the user
function fillGrid(gridSize) {
    let container = document.querySelector('#container');
    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

    for (let i = 0; i < gridSize * gridSize; i++) {
        let square = document.createElement('div');
        square.style.backgroundColor = 'blue';
        container.insertAdjacentElement('beforeend', square);
    }
    
}

fillGrid(16);

function changeGrid(input) {
    fillGrid(input);
}








