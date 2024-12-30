//canvas for etch a sketch
const c  = document.querySelector("#container");
//container to hold different option buttons for functionality
const opt = document.querySelector("#options");

for (let i = 1; i <= 16; i++) {
    const div = document.createElement("div");
    div.setAttribute("class", `canvas-child`);
    c.appendChild(div);
}

const c_child = document.querySelector(".canvas-child");

c_child.addEventListener("mouseover", () => {
    
});