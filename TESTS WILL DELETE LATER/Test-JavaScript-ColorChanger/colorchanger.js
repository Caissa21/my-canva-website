//
//
//
//
//
//
//
//

const title = document.getElementById("title");
const redBtn = document.getElementById("redBtn");
const blueBtn = document.getElementById("blueBtn");
const greenBtn = document.getElementById("greenBtn");
const reset = document.getElementById("reset");

redBtn.addEventListener("click", () => {
    title.style.color = "red";
});

blueBtn.addEventListener("click", () => {
    title.style.color = "blue";
});

greenBtn.addEventListener("click", () => {
    title.style.color = "green";
});

reset.addEventListener("click", () => {
    title.style.color = "rgb(0, 0, 0)";
});

