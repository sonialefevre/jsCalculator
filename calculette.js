// Happens when a number button is clicked
function handleClick(event) {
  let number = event.target.innerHTML;
  if (screen.isReset) {
    screen.innerHTML = number;
    screen.isReset = false;
  } else {
    screen.innerHTML += number;
  }
}

// Clears only the last number clicked
function clear() {
  if (screen.innerHTML.length > 1) {
    screen.innerHTML = screen.innerHTML.slice(0, -1);
  } else {
    screen.innerHTML = "0";
    screen.isReset = true;
  }
}

// Clear the whole screen
function clearEverything() {
  screen.innerHTML = "0";
  screen.isReset = true;
}

// Performs the desired calculation
function calculate() {
  screen.innerHTML = eval(screen.innerHTML);
}

//Getting the root div of the document
let app = document.getElementById("app");

//Creating the body of the calculator
const calculator = document.createElement("div");
calculator.id = "calculator";
app.appendChild(calculator);

// Adding the screen
const screen = document.createElement("div");
screen.id = "screen";
screen.innerHTML = "0";
screen.isReset = true;
calculator.appendChild(screen);

//Adding a container for the button blocks
const blockContainer = document.createElement("div");
blockContainer.id = "blockContainer";
calculator.appendChild(blockContainer);

//Left side button block
const leftBlock = document.createElement("div");
leftBlock.className = "btnBlock";
leftBlock.id = "leftBlock";
blockContainer.appendChild(leftBlock);

// Adding the number buttons
for (let i = 9; i > 0; i--) {
  let nbBtn = document.createElement("button");
  nbBtn.className = "button";
  nbBtn.innerHTML = i;
  nbBtn.addEventListener("click", handleClick);
  leftBlock.appendChild(nbBtn);
}

//Adding the 0 and = button
const dotBtn = document.createElement("button");
dotBtn.className = "button";
dotBtn.innerHTML = ".";
dotBtn.addEventListener("click", handleClick);
leftBlock.appendChild(dotBtn);

const zeroBtn = document.createElement("button");
zeroBtn.className = "button";
zeroBtn.id = "zeroBtn";
zeroBtn.innerHTML = "0";
zeroBtn.addEventListener("click", handleClick);
leftBlock.appendChild(zeroBtn);

//right side button block
const rightBlock = document.createElement("div");
rightBlock.className = "btnBlock";
rightBlock.id = "rightBlock";
blockContainer.appendChild(rightBlock);

// Creating right block buttons
const clearBtn = document.createElement("button");
clearBtn.className = "button";
clearBtn.innerHTML = "C";
clearBtn.classList.add("button--red");
clearBtn.addEventListener("click", clear);
rightBlock.appendChild(clearBtn);

const ceBtn = document.createElement("button");
ceBtn.className = "button";
ceBtn.innerHTML = "CE";
ceBtn.classList.add("button--blue");
ceBtn.addEventListener("click", clearEverything);
rightBlock.appendChild(ceBtn);

const multiplyBtn = document.createElement("button");
multiplyBtn.className = "button";
multiplyBtn.innerHTML = "*";
multiplyBtn.addEventListener("click", handleClick);
rightBlock.appendChild(multiplyBtn);

const divideBtn = document.createElement("button");
divideBtn.className = "button";
divideBtn.innerHTML = "/";
divideBtn.addEventListener("click", handleClick);
rightBlock.appendChild(divideBtn);

const addBtn = document.createElement("button");
addBtn.className = "button";
addBtn.innerHTML = "+";
addBtn.classList.add("button--green");
addBtn.addEventListener("click", handleClick);
rightBlock.appendChild(addBtn);

const minusBtn = document.createElement("button");
minusBtn.className = "button";
minusBtn.innerHTML = "-";
minusBtn.addEventListener("click", handleClick);
rightBlock.appendChild(minusBtn);

const equalBtn = document.createElement("button");
equalBtn.className = "button";
equalBtn.innerHTML = "=";
equalBtn.classList.add("button--yellow");
equalBtn.addEventListener("click", calculate);
rightBlock.appendChild(equalBtn);
