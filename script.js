const grid = document.querySelector(".grid");
const reset = document.querySelector(".reset");
reset.addEventListener("click", resetGrid)

function generateGrid(size) {
    for (let i = 0; i < size; i++) {
        const row = document.createElement("div");
        row.classList.add("row");

        for (let j = 0; j < size; j++) {
            const cell = document.createElement(("div"));
            cell.classList.add("cell");
            row.appendChild(cell);
        }
        grid.appendChild(row);
    }
}

function applyHover() {
    this.classList.add("hover");
}

function clearGrid() {
    let childCount = grid.childElementCount;

    for (let i = 0; i < childCount; i++) {
        grid.removeChild(grid.lastChild);
    }
}

function resetGrid() {
    let input;
    let size;

    while (!Number.isInteger(input)) {
        input = parseInt(prompt("Enter a grid size, between 1 and 100:"));
    }

    size = Math.max(1, Math.min(100, input));
    clearGrid();
    generateGrid(size);
    cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => cell.addEventListener("mouseover", applyHover));
}

generateGrid(8);
cells = document.querySelectorAll(".cell");
cells.forEach((cell) => cell.addEventListener("mouseover", applyHover));
