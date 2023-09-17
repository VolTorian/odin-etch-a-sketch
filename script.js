const grid = document.querySelector(".grid");
const reset = document.querySelector(".reset");
const modeButtons = document.querySelectorAll(".mode");

let currentMode = "solid";

reset.addEventListener("click", resetGrid);
modeButtons.forEach((button) => button.addEventListener("click", changeMode));

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
    if (currentMode === "solid") {
        this.style.backgroundColor = "";
        this.style.borderColor = "";
    }
    else if (currentMode === "rainbow") {
        let red = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);
        this.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        this.style.borderColor = `rgb(${red}, ${green}, ${blue})`;
    }
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

function changeMode() {
    if (this.textContent === "Solid") {
        console.log("selected solid brush");
        currentMode = "solid";
    }
    else if (this.textContent === "Rainbow") {
        console.log("selected rainbow brush");
        currentMode = "rainbow";
    }
}

generateGrid(8);
cells = document.querySelectorAll(".cell");
cells.forEach((cell) => cell.addEventListener("mouseover", applyHover));
