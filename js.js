const container = document.querySelector("#container");
const btn = document.querySelector("#btn");

let nSquares = 16;

function setSquares() {
    nSquares = prompt("Number of squares per row: \nChoose from 0 - 100.","")
}

function drawSquares() {

    let squareWidth = (1/nSquares * 100).toFixed(2) + "%";

    for (let i = 0; i < nSquares; i++) {

        for (let j = 0; j < nSquares; j++) {
            const gridSquare = document.createElement("div");
            gridSquare.setAttribute("style", `width: ${squareWidth}; padding-top: ${squareWidth}`);
            gridSquare.setAttribute("class", "gridSquare")
            container.appendChild(gridSquare);
        }

    }

}

function deleteSquares() {

    while (document.querySelector(".gridSquare")) {
        document.querySelector(".gridSquare").remove();
    }

}

drawSquares();

container.addEventListener('mouseover', function(event) {
    if (event.target && event.target.classList.contains('gridSquare')) {
        event.target.style.backgroundColor = "black";
    }
});

btn.addEventListener("click", () => {
    do {
        setSquares();
    } while (nSquares <= 0 || nSquares > 100)
        deleteSquares();
        drawSquares();
});