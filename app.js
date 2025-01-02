//the two main windows
const c  = document.querySelector("#container");
const opt = document.querySelector("#options");
const body = document.querySelector("body");

//buttons
const sizeBtn = document.querySelector("#size-button");
const colorBtn = document.querySelector("#color-button");
const clearBtn = document.querySelector("#clear");
const randColorBtn = document.querySelector("#rand-color");

let color = "black";
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
        brush();
    }
});

//change color of brush
colorBtn.addEventListener("click", () => {
    const color_c = document.querySelector("#color-container");
    //add logic here to add buttons that enable user to select a specific color
    rgbNums = [];
    for (let i = 0; i < 3; i++) {
        colorNum = Math.floor(Math.random() * 256);
        rgbNums.push(colorNum);
    }

    color = `rgb(${rgbNums[0]}, ${rgbNums[1]}, ${rgbNums[2]})`;
    console.log(rgbNums);
});

//button to clear the current grid
clearBtn.addEventListener("click", () => {
    let grid = document.querySelectorAll(".grid-item");
    for (let i = 0; i < grid.length; i++) {
        grid[i].style["background-color"] = "#fff";
    }
});

//button to change the cursor to random colors
randColorBtn.addEventListener("click", () => {
    //add logic here for random colors on each hover
});

//FUNCTIONS FOR FUNCTIONALITY

// function to make the grid
let makeGrid = (row, col) => {
    c.innerHTML = ''; //clear the divs in the etch-a-sketch container
    for (i = 0; i < row; i++) {
        for (j = 0; j < col; j++) {
            const size = 600 / row; //constant value to represent pixel size of container
            const div = document.createElement("div");
            div.setAttribute("class", "grid-item");
            div.style.width = size + "px";
            div.style.height = size + "px";

            c.appendChild(div);
        }
    }
};

makeGrid(16, 16); //making stock grid

//identify grid items
//let grid = document.querySelectorAll(".grid-item");

//function to change fill color
let brush = () => {
    let grid = document.querySelectorAll(".grid-item");
    for (let i = 0; i < grid.length; i++) {
        grid[i].addEventListener("mouseover", () => {
            grid[i].style.backgroundColor = color;
        });
    }
}

brush(); //making divs in grid fillable
