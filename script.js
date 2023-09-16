const grid = document.querySelector(".grid");

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

generateGrid(8);

cells = document.querySelectorAll(".cell");
cells.forEach((cell) => cell.addEventListener("mouseover", applyHover));