let buttonGrid = document.querySelector('#buttonGrid');



// This builds the grid based on the input from the user
function fillGrid(gridSize) {
    let container = document.querySelector('#container');
    let black = document.querySelector('#black');
    let white = document.querySelector('#white');
    let random = document.querySelector('#random');

    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    

    for (let i = 0; i < gridSize * gridSize; i++) {
        let square = document.createElement('div');
        square.style.backgroundColor = 'blue';
        container.insertAdjacentElement('beforeend', square);

        black.addEventListener('click', function(e) {
            square.addEventListener('mouseover', function(e) {
                square.style.backgroundColor = 'black';
            })
        });

        white.addEventListener('click', function(e) {
            square.addEventListener('mouseover', function(e) {
                square.style.backgroundColor = 'white';
            })
        });
        
        let randomColorNumber = Math.floor(Math.random() * 1677215);
        randomColorNumber.toString(16);
        let randomColor = '#' + randomColorNumber;

        random.addEventListener('click', function(e) {
            square.addEventListener('mouseover', function(e) {
                square.style.backgroundColor = randomColor;
            })
        });

        
        
        
    }
    
}


fillGrid(16);

function changeGrid(input) {
    if (input > 2 && input < 100) {
        fillGrid(input);
        
    }
    else if (input <= 2) {
        console.log('Not enough squares!');
    }
    else if (input > 100) {
        console.log('Too many squares!');
    }
    
    
}








