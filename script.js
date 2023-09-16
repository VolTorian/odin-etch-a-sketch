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

function generateCell(size) {

}

generateGrid(8);