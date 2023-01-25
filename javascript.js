const button = document.getElementById('squares');
button.addEventListener('click', setSquares);

function setSquares() {
    removeChildElements();
    var numsquares = Math.pow(window.prompt("Enter number of squares on each side (<100)"), 2);
    const grid = document.querySelector('#grid');
    console.log('numsquares: ' + numsquares);
    const cellsize = (960*1/Math.sqrt(numsquares))-2;
    console.log('Cell Size: ' + cellsize);
    for (i=1; i<=numsquares; i++) {
        const cell = document.createElement('div');
        cell.id = i;
        cell.setAttribute("style", "width:"+cellsize+"px;height:"+cellsize+"px");
        cell.classList.add('cell');
        cell.addEventListener('mouseenter', () => { changeColor(cell.id); });
        grid.appendChild(cell);
    }
}

function changeColor(cell) {
    document.getElementById(cell).style.backgroundColor = "red";
}

function removeChildElements() {
    var childElements = document.getElementById("grid");
    var delChild = childElements.lastChild;
    while (delChild) {
     childElements.removeChild(delChild);
     delChild = childElements.lastChild;
     }
}
