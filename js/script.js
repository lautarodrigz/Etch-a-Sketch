const popUpButton = document.createElement("button");
popUpButton.textContent = "16 x 16";
popUpButton.classList.add("popupbutton")
const container = document.querySelector(".container");
const squaresArray = [];
let numberOfSquares;
document.body.insertBefore(popUpButton, container)

for (let i = 0; i < 256; i++) {
    const square = document.createElement("div");
    square.className = "square";
    container.appendChild(square);
    squaresArray.push(square);
}

squaresArray.forEach(square => {
    square.addEventListener("mouseover", () => {
        if (square.style.backgroundColor === "") {
            square.style.setProperty("background-color", `rgb(${getRandomColor()[0]}, ${getRandomColor()[1]}, ${getRandomColor()[2]})`);
        }
    });
});

popUpButton.addEventListener("click", () => {
    do {
        numberOfSquares = +prompt("Insert number of squares per side", "16");
        if (numberOfSquares > 100 || numberOfSquares <= 1) {
            alert("Please pick a number between 2 and 100");
        }
    } while (numberOfSquares > 100 || numberOfSquares <= 1);
    // container.innerHTML = "";
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    popUpButton.textContent = `${numberOfSquares} x ${numberOfSquares}`;
    for (let i = 0; i < numberOfSquares ** 2; i++) {
        const square = document.createElement("div");
        square.className = "square";
        square.style.setProperty("width", `calc(100%/${numberOfSquares})`);
        square.style.setProperty("height", `calc(100%/${numberOfSquares})`);
        container.appendChild(square);
        squaresArray.push(square);
    }
    squaresArray.forEach(square => {
        square.addEventListener("mouseover", () => {
            if (square.style.backgroundColor === "") {
                square.style.setProperty("background-color", `rgb(${getRandomColor()[0]}, ${getRandomColor()[1]}, ${getRandomColor()[2]})`);
            }    
        });
    });
});

function getRandomColor() {
    const r = Math.floor(Math.random() * 257);
    const g = Math.floor(Math.random() * 257);
    const b = Math.floor(Math.random() * 257);
    const color = [r, g, b];
    return color;
}







