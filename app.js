// Create a webpage with a 16x16 grid of square divs

// Create titlePage h1
const titlePage = document.createElement('h1');

// Create a container Div to store grid-square div
const mainContainer = document.createElement('div');

// Create gridContainer Div
const gridContainer = document.createElement('div');

// Create sliderContainer Div
const sliderContainer = document.createElement('div');

// Create an RGB picker
const createLabel = document.createElement('label');
const createRGB = document.createElement('input');

// Create RGB (Rainbow) button
const makeRGBButton = document.createElement('button');

// set RGB container
const rgbContainer = document.createElement('div');

// Create sliderInput button
const sliderInput = document.createElement('input');

//Create an H3 to display slider value
const sliderValue = document.createElement('h3');

// Create a clearButton
const clearButton = document.createElement('button');

// Create footer 
const footer = document.createElement('footer');

// Set RGB Button
function setRBGButton () {
    makeRGBButton.setAttribute('id', 'randomRGB');
    makeRGBButton.textContent = 'Rainbow';
    sliderContainer.insertAdjacentElement('beforeend', makeRGBButton);    
}

// set RGB (Rainbow) button
function makeRandomRGB () {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    gridContainer.addEventListener('mouseover', (e) => e.target.style.backgroundColor = 'rgb(' + r +',' + g + ',' + b + ')');
}

// Callback Function for Rainbow Button
function callRandomRGB () {
    gridContainer.addEventListener('mouseover', makeRandomRGB);
}

makeRGBButton.addEventListener('click', callRandomRGB);

// sliderInput Fn
function setSliderInput () {
    sliderInput.type = 'range';
    sliderInput.min = '8';
    sliderInput.max = '64';
    sliderInput.value = '16';
    sliderContainer.insertAdjacentElement('afterbegin', sliderInput);
    sliderInput.insertAdjacentElement("afterend", sliderValue);
    sliderValue.textContent = `${sliderInput.value} x ${sliderInput.value}`;
}

// setRGB Attributes
function setRGB() {
    createLabel.setAttribute('for', 'rgbPicker');
    createRGB.setAttribute('type', 'color');
    createRGB.setAttribute('value', '#A020F0');
    createRGB.setAttribute ('id', 'rgbPicker');
    createRGB.setAttribute('name', 'rgbPicker');
    createLabel.textContent = 'RGB Color: ';
    rgbContainer.setAttribute('class', 'rgb-container');
    sliderContainer.insertAdjacentElement('beforeend', rgbContainer);
    rgbContainer.insertAdjacentElement("beforeend", createRGB);
    rgbContainer.insertAdjacentElement('afterbegin', createLabel);
}

// Create random RGB color
function createRGBButton () {
    makeRGBButton.setAttribute('id', 'randomRGB');
    makeRGBButton.textContent = 'Rainbow';
    sliderContainer.insertAdjacentElement('beforeend', makeRGBButton);
}

// Assign Containers Attribute and insert it to the DOM
function setContainersAttribute () {
    mainContainer.className = 'main-container';
    document.body.appendChild(mainContainer);
    gridContainer.className = 'grid-container';
    mainContainer.appendChild(gridContainer);
    sliderContainer.className = 'slider-container';
    mainContainer.insertAdjacentElement('afterbegin', sliderContainer);
}

// Set titlePage h1 Fn
function setTitlePage () {
    titlePage.textContent = 'MAGIC Etch a Sketch SCREEN';
    mainContainer.insertAdjacentElement('afterbegin', titlePage);
}

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

// Set Footer note Fn
function setFooter () {
    const footerPara = document.createElement('p');
    footerPara.textContent = 'The Odin Project © Made with ❤️ by Hangsihak Sin';
    footer.appendChild(footerPara);
    document.body.insertAdjacentElement('beforeend', footer);
}

// Intial Start Fn with Immediately Invoked function expression (IIFE)
const defaultValue = (function () {
    setTitlePage();
    setContainersAttribute();
    setSliderInput();
    setRGB();
    createGrids(sliderInput.value);
    createRGBButton();
    setFooter();
}) ();

// Clear Existing Grid when Slider Change
function clearGridSquare (){
    const gridSquare = document.querySelectorAll('.grid-square');
    gridSquare.forEach(grid => grid.remove());
}

// listenForSlider Fn
function listenForSlider () {
    sliderValue.textContent = `${sliderInput.value} x ${sliderInput.value}`;
    clearGridSquare();
    createGrids(sliderInput.value);
}

sliderInput.addEventListener('change', listenForSlider);

// generateRGB Fn
gridContainer.addEventListener('mouseover', (e) => e.target.style.backgroundColor = createRGB.value);

// Get the gridSquare Div
// Check the div that contain style with backgroundColor Attribute
// Remove all of them
function gridItems () {
    const gridItems = document.querySelectorAll('.grid-square');
    gridItems.forEach(grid => grid.removeAttribute('style'));
    createRGB.value = '#A020F0';
}

// Create a toolDiv
const toolContainer = document.createElement('div');
toolContainer.className = 'tool-container';
mainContainer.insertAdjacentElement('afterend', toolContainer);

// Assign class and text content to Clear Button
clearButton.className = 'clear-button';
clearButton.textContent = 'Clear';
toolContainer.appendChild(clearButton);

// Click on RGB color
// get the picked color
// gridContainer will change to the picked color
clearButton.addEventListener('click', gridItems );
createRGB.addEventListener('change', () => {
    gridContainer.addEventListener('mouseover', e => e.target.style.backgroundColor = createRGB.value);
    gridContainer.removeEventListener('mouseover', makeRandomRGB);
});

