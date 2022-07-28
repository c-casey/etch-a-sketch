const container = document.querySelector(".container");

function populateGrid(gridSize) {
  if (gridSize > 100) {
    alert("That's way too big, sorry!");
    return;
  }
  for (i = 0; i < gridSize**2; i++) {
    let div = document.createElement(`div${i}`);
    div.setAttribute("class", "pixel");
    div.style.flexBasis = `${99/gridSize}%`;
    container.appendChild(div);
  }
  let pixels = document.querySelectorAll(".pixel");
  for (i = 0; i < pixels.length; i++) {
    pixels[i].addEventListener("pointerenter", (e) => {
      e.srcElement.classList.add("black");
    })
  }
}

function removeGrid() {
  const oldPixels = document.querySelectorAll(".pixel");
  for (i = 0; i < oldPixels.length; i++) {
    container.removeChild(oldPixels[i]);
  }
}

const sizeButton = document.querySelector("#size-button");
sizeButton.addEventListener("click", () => {
  const gridSize = prompt("What size grid would you like?");
  removeGrid();
  populateGrid(gridSize);
});

const resetButton = document.querySelector("#reset-button");
resetButton.addEventListener("click", () => {
  let gridSize = Math.sqrt(container.childElementCount);
  removeGrid();
  populateGrid(gridSize);
});


populateGrid(4);
