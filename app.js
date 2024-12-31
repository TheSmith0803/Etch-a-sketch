//the two main windows
const c  = document.querySelector("#container");
const opt = document.querySelector("#options");

const body = document.querySelector("body");
const grid = document.querySelectorAll(".grid-item");


for (let i = 1; i <= 16; i++) {
    const div = document.createElement("div");
    div.setAttribute("class", `grid-item`);
    c.appendChild(div);
}

const c_child = document.querySelector(".canvas-child");

c_child.addEventListener("mouseover", () => {
    
});