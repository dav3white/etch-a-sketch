// Code goes here
const grid = document.querySelector('#grid');
const gridsize = 64;
const cellsize = 1/Math.sqrt(gridsize);

for (i=1; i<=64; i++) {
    const cell = document.createElement('div');
    cell.id = i;
    cell.classList.add('cell');
/* Use this line to dynamically set width and height of cell   
cell.setAttribute("style", width) */
    cell.addEventListener('mouseenter', () => { changeColor(cell.id); });
    grid.appendChild(cell);
}

function changeColor(cell) {
    document.getElementById(cell).style.backgroundColor = "red";
}

