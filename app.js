// Create a webpage with a 16x16 grid of square divs

// Create a container Div to store grid-square div
const mainContainer = document.createElement('div');
mainContainer.className = 'main-container';
document.body.appendChild(mainContainer);

const gridContainer = document.createElement('div');
gridContainer.className = 'grid-container';
mainContainer.appendChild(gridContainer);

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

// Listen for mouseenter and hold any of the grid
const gridItems = document.querySelector('.grid-square');

gridContainer.addEventListener('mouseover', (e) => e.target.style.backgroundColor = 'purple');







