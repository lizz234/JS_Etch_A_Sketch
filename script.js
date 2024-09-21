const gridContainer = document.querySelector("#grid-container");
const gridSizeInput = document.querySelector('#gridSize');
const generateGridBtn = document.querySelector('#generateGrid');

var isDrawing = false;
function createGrid(size){

    gridContainer.innerHTML = '';
    
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        let gridCell = document.createElement('div');
        gridCell.classList.add('gridCell');
        gridCell.addEventListener("mousedown", (e) => {
            isDrawing = true; 
            hoverFunction(e);
        });
        gridCell.addEventListener("mousemove", hoverFunction);
        gridCell.addEventListener("mouseup", () => {
            isDrawing = false
        });

        gridContainer.appendChild(gridCell);
    }

    generateGridBtn.addEventListener('click', () => {
        const gridSize = parseInt(gridSizeInput.value); 
        if (gridSize > 0 && gridSize <= 100) {
          createGrid(gridSize); 
        } else {
          alert('Please enter a grid size between 1 and 100');
        }
    });
}

function hoverFunction(e){
    if (isDrawing) {
        e.target.style.backgroundColor = "#" + randomNumber();
    }
}

function randomNumber() {
    return Math.floor(100000 + Math.random() * 900000);
}

createGrid(16);


