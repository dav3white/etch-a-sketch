const button = document.getElementById('clear').addEventListener('click', buildGrid);
const gridSize = 400;

function buildGrid() {
    var slider = document.getElementById("sideLength");
    var sideLength = Math.pow(slider.value, 2); // Side length in squares
    resetGrid();
    const grid = document.querySelector('#grid');
    grid.setAttribute("style", `width:${gridSize}px;height:${gridSize}px`);
    const cellSize = (gridSize/Math.sqrt(sideLength))-2;
    for (i=1; i<=sideLength; i++) {
        const cell = document.createElement('div');
        cell.id = i;
        cell.setAttribute("style", `width:${cellSize}px;height:${cellSize}px`);
        cell.classList.add('cell');
        cell.addEventListener('mouseenter', () => { changeColor(cell.id); });
        grid.appendChild(cell);
    }
}

function changeColor(cell) {
    document.getElementById(cell).style.backgroundColor = "red";
}

function resetGrid() {
    var grid = document.getElementById("grid");
    var elementToRemove = grid.lastChild;
    while (elementToRemove) {
     grid.removeChild(elementToRemove);
     elementToRemove = grid.lastChild;
     }
}

