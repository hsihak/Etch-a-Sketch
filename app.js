// Create a webpage with a 16x16 grid of square divs

// Create a container Div to store grid-square div
const gridContainer = document.createElement('div');
gridContainer.className = 'grid-container';
document.body.appendChild(gridContainer);

// Create a div using JavaScript
function createGrids (rows, cols) {
    gridContainer.style.setProperty('--grid-rows', rows);
    gridContainer.style.setProperty('--grid-cols', cols);
    for (let i = 1; i <= (rows * cols); i++) {
        let gridSquares = document.createElement('div');
        gridSquares.className = 'grid-square';
        gridContainer.appendChild(gridSquares);
    }
} 

function requestUserData () {
    const userRows = prompt('Please enter rows', '16');
    const userCols = prompt ('Please enter columns', '16');
    createGrids(userRows, userCols);
}

requestUserData();






