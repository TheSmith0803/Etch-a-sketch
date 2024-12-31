//the two main windows
const c  = document.querySelector("#container");
const opt = document.querySelector("#options");

const body = document.querySelector("body");
const grid = document.querySelectorAll("#grid-item");

//buttons
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
let makeGrid = (row, col) => {
    for (i = 0; i < row; i++) {
        for (j = 0; j < col; j++) {
            const size = 400 / row; //constant value to represent pixel size of container
            const div = document.createElement("div");
            div.setAttribute("id", "grid-item");
            div.style.width = size + "px";
            div.style.height = size + "px";

            c.appendChild(div);
        }
    }
};

makeGrid(16, 16);





//function to clear the grid
const clearGrid = () => {
    c.removeChild("");
};
