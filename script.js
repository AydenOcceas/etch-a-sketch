
const sketchContainer = document.querySelector("#sketchContainer");
createSketchGrid(16, sketchContainer);

function createSketchRow(gridSize = 10) {
    const resultRow = document.createElement("div");
    resultRow.classList.add("sketchRow");

    for(let i = 0; i < gridSize; i++){
        const newPixel = document.createElement("div");
        newPixel.classList.add("sketchPixel");
        resultRow.appendChild(newPixel);

        newPixel.addEventListener("mouseenter", (e) => {
            e.target.style.backgroundColor = "black"
        });
    }

    return resultRow;
}

function createSketchGrid(gridSize = 10, container) {
    for(let i = 0; i < gridSize; i++){
        const newRow = createSketchRow(gridSize);
        container.appendChild(newRow);
    }
}

function resetSketchGrid(gridSize, container) {
    //clears the grid of pixels or I guess technically rows of pixels
    while(container.lastElementChild) {
        container.removeChild(container.lastElementChild);
    }
    createSketchGrid(gridSize, container);
}



const resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", () => {
    let newGridSize = prompt("Please input size of new grid", 16);

    //handling for large number and falsy values
    if(!+newGridSize || newGridSize > 100) newGridSize = 16;

    resetSketchGrid(+newGridSize, sketchContainer);
});