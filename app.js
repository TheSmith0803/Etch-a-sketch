//the two main windows
const c  = document.querySelector("#container");
const opt = document.querySelector("#options");

const body = document.querySelector("body");
const grid = document.querySelectorAll(".grid-item");

const sizeBtn = document.querySelector("#size-button");
const colorBtn = document.querySelector("#color-button");
const clearBtn = document.querySelector("#clear");

//change size of grid here
sizeBtn.addEventListener("click", () => {

});

//change color of brush
colorBtn.addEventListener("click", () => {

});

// function to make the grid
const makeGrid = () => {
    for (i = 0; i < 16; i++) {
        for (j = 0; j < 16; j++) {
            const row = document.createElement("div");
            const size = 400 / 
            row.setAttribute("class", ".grid-item");
            c.appendChild(row);
            row.textContent = `${i}, ${j}`
        }
    }
};

makeGrid();




//function to clear the grid
const clearGrid = () => {
    c.removeChild("");
};
