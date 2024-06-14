const container = document.querySelector(".container");
const squaresArray = [];
for (let i = 0; i < 256; i++) {
    const square = document.createElement("div");
    square.className = "square";
    container.appendChild(square);
    squaresArray.push(square);
}
squaresArray.forEach(square => {
    square.addEventListener("mouseover", () => {
        square.classList.add("active");
    });
});