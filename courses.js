//Getting the root div of the document
let app = document.getElementById("app");

// Creating the list container
let container = document.createElement("div");
container.id = "container";
app.appendChild(container);

//Creating the input
let inputField = document.createElement("input");
inputField.setAttribute("type", "text");
inputField.setAttribute("id", "input");
inputField.setAttribute("name", "input");
inputField.setAttribute("placeholder", "Que voulez-vous acheter ?");
container.appendChild(inputField);

//Adding input button
let inputBtn = document.createElement("button");
inputBtn.innerText = "Ajouter";
inputBtn.className = "button";
container.appendChild(inputBtn);

// Creating the list
let listElm = document.createElement("ul");
listElm.id = "list";
container.appendChild(listElm);

//Adding clear button
let clearBtn = document.createElement("button");
clearBtn.innerText = "Effacer";
clearBtn.id = "clearBtn";
clearBtn.className = "button";
container.appendChild(clearBtn);

let item;

function handleChange(event) {
  item = event.target.value;
}

function handleRemove(event) {
  event.target.remove();
}

function handleClick() {
  let elem = document.createElement("li");
  elem.innerText = item;
  elem.addEventListener("click", handleRemove);
  listElm.appendChild(elem);
  inputField.value = "";
  item = null;
}

function handleClear() {
  listElm.innerHTML = "";
}

inputField.addEventListener("change", handleChange);
inputBtn.addEventListener("click", handleClick);
clearBtn.addEventListener("click", handleClear);
