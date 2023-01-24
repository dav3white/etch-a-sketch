// Code goes here
const grid = document.querySelector('#grid');

for (i=1; i<=64; i++) {
    const cell = document.createElement('div');
    cell.id = i;
    cell.classList.add('cell');
    grid.appendChild(cell);
}