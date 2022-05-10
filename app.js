// Create a webpage with a 16x16 grid of square divs

// Create a container Div to store grid-square div
const mainContainer = document.createElement('div');
mainContainer.className = 'main-container';
document.body.appendChild(mainContainer);

// Create gridContainer Div
const gridContainer = document.createElement('div');
gridContainer.className = 'grid-container';
mainContainer.appendChild(gridContainer);

// Create sliderContainer Div
const sliderContainer = document.createElement('div');
sliderContainer.className = 'slider-container';
mainContainer.insertAdjacentElement('afterbegin', sliderContainer);


// Create a div using JavaScript
function createGrids (value) {
    gridContainer.style.setProperty('--grid-rows', value);
    gridContainer.style.setProperty('--grid-cols', value);
    for (let i = 1; i <= (value * value); i++) {
        let gridSquares = document.createElement('div');
        gridSquares.className = 'grid-square';
        gridContainer.appendChild(gridSquares);
    }
} 

// Create sliderInput button
const sliderInput = document.createElement('input');

//Create a para to display slider value
const sliderValue = document.createElement('h3');

// sliderInput Fn
function setSliderInput () {
    sliderInput.type = 'range';
    sliderInput.min = '8';
    sliderInput.max = '64';
    sliderInput.value = '16';
    sliderContainer.append(sliderInput);
    sliderInput.insertAdjacentElement("afterend", sliderValue);
    sliderValue.textContent = `${sliderInput.value} x ${sliderInput.value}`;
}


// Intial Start Fn
function defaultValue () {
    setSliderInput();
    createGrids(sliderInput.value);
}

defaultValue();

// Clear Existing Grid when Slider Change
function clearGridSquare (){
    const gridSquare = document.querySelectorAll('.grid-square');
    gridSquare.forEach(grid => {
        grid.remove();
    });
}

// listenForSlider Fn
function listenForSlider () {
    sliderValue.textContent = `${sliderInput.value} x ${sliderInput.value}`;
    clearGridSquare();
    createGrids(sliderInput.value);
}

sliderInput.addEventListener('change', listenForSlider);

// Listen for mouseenter and hold any of the grid
// const gridItems = document.querySelector('.grid-square');

gridContainer.addEventListener('mouseover', (e) => e.target.style.backgroundColor = createRGB.value);

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

// Get the gridSquare Div
function gridItems () {
    const gridItems = document.querySelectorAll('.grid-square');
    gridItems.forEach(grid => grid.removeAttribute('style'))
}

clearButton.addEventListener('click', gridItems );
// Check the div that contain style with backgroundColor Attribute
// Remove all of them


// Create an RGB picker
const createLabel = document.createElement('label');
const createRGB = document.createElement('input');

// setRGB Attributes
createLabel.setAttribute('for', 'rgbPicker');
sliderContainer.insertAdjacentElement('beforeend', createLabel);
createRGB.setAttribute('type', 'color');
createRGB.setAttribute('value', '#A020F0');
createRGB.setAttribute ('id', 'rgbPicker');
createRGB.setAttribute('name', 'rgbPicker')
createLabel.textContent = 'RGB Color: '
sliderContainer.insertAdjacentElement("beforeend", createRGB);

// Create a Black and white button







