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
// const gridItems = document.querySelector('.grid-square');

gridContainer.addEventListener('mouseover', (e) => e.target.style.backgroundColor = 'purple');


// When clear button is clicked
// Remove existing grid with backgroundColor
// Create a toolDiv
const toolContainer = document.createElement('div');
toolContainer.className = 'tool-container';
mainContainer.insertAdjacentElement('afterend', toolContainer);

// Create a clearButton
const clearButton = document.createElement('button');
clearButton.className = 'clear-button';
clearButton.textContent = 'Clear';
toolContainer.appendChild(clearButton);
// Get the gridItems Div

// Get the gridSquare Div
const gridItems = document.querySelectorAll('.grid-square');
// Check the div that contain style with backgroundColor Attribute
// Remove all of them
clearButton.addEventListener('click', () => gridItems.forEach(grid => grid.removeAttribute('style')));







