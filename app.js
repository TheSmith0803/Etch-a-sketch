//the two main windows
const c  = document.querySelector("#container");
const opt = document.querySelector("#options");

const body = document.querySelector("body");
const grid = document.querySelectorAll("#grid-item");

//buttons
const sizeBtn = document.querySelector("#size-button");
const colorBtn = document.querySelector("#color-button");
const clearBtn = document.querySelector("#clear");

//EVENT LISTENERS FOR BUTTONS

//hover event

//change size of grid here
sizeBtn.addEventListener("click", () => {
    let size = prompt("Please input a number from 1 to 99");
    if (size < 1 || size > 99) {
        alert("Please only enter a number between 1 and 99");
    }
    else if (Number.isInteger(size)) {
        alert("Please no characters or decimal numbers!");
    } else {
        makeGrid(size, size);
    }
});

//change color of brush
colorBtn.addEventListener("click", () => {

});

//FUNCTIONS FOR FUNCTIONALITY

let resizeGrid = () => {

};

// function to make the grid
let makeGrid = (row, col) => {
    c.innerHTML = ''; //clear the divs in the etch-a-sketch container
    for (i = 0; i < row; i++) {
        for (j = 0; j < col; j++) {
            const size = 1000 / row; //constant value to represent pixel size of container
            const div = document.createElement("div");
            div.setAttribute("id", "grid-item");
            div.style.width = size + "px";
            div.style.height = size + "px";

            c.appendChild(div);
        }
    }
};

makeGrid(16, 16);
