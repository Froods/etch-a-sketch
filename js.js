const container = document.querySelector("#container");

let nSquares = 16;
let squareWidth = (1/nSquares * 100).toFixed(2) + "%";
console.log(squareWidth);

for (let i = 0; i < nSquares; i++) {

    for (let j = 0; j < nSquares; j++) {
        const gridSquare = document.createElement("div");
        gridSquare.setAttribute("style", `width: ${squareWidth}; padding-top: ${squareWidth}`);
        gridSquare.setAttribute("class", "gridSquare")
        container.appendChild(gridSquare);
    }

}

container.addEventListener('mouseover', function(event) {
    if (event.target && event.target.classList.contains('gridSquare')) {
        event.target.style.backgroundColor = "black";
    }
});