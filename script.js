
const sketchContainer = document.querySelector("#sketchContainer");
createSketchGrid(10, sketchContainer);

function createSketchRow(gridSize = 10) {
    const resultRow = document.createElement("div");
    resultRow.classList.add("sketchRow");

    for(let i = 0; i < gridSize; i++){
        const newPixel = document.createElement("div");
        newPixel.classList.add("sketchPixel");
        resultRow.appendChild(newPixel);
    }

    return resultRow;
}

function createSketchGrid(gridSize = 10, container) {
    for(let i = 0; i < gridSize; i++){
        const newRow = createSketchRow(gridSize);
        container.appendChild(newRow);
    }
}