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

//Adding a select for quantities
let inputSlct = document.createElement("select");
inputSlct.innerHTML = '<select name="select" id="select"></select>';
inputSlct.id = "select";
container.appendChild(inputSlct);
let option = document.createElement("option");
option.innerHTML = `<option value="">--</option>`;
inputSlct.appendChild(option);
for (let i = 1; i <= 10; i++) {
  let qtySlct = document.createElement("option");
  qtySlct.innerHTML = `<option value="${i}">${i}</option>`;
  inputSlct.appendChild(qtySlct);
}

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
let qty = 1;

function handleChange(event) {
  item = event.target.value;
}

function handleSetQty(event) {
  qty = event.target.value;
  console.log(qty);
}

function handleBuy(event) {
  event.target.classList.toggle("bought");
}

function handleClick(event) {
  let elem = document.createElement("li");
  elem.innerText = qty + " " + item;
  elem.addEventListener("click", handleBuy);
  listElm.appendChild(elem);
  inputField.value = "";
  item = null;
  qty = null;
}

function handleClear() {
  listElm.innerHTML = "";
}

inputField.addEventListener("change", handleChange);
inputSlct.addEventListener("change", handleSetQty);
inputBtn.addEventListener("click", handleClick);
inputField.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    e.preventDefault;
    handleClick();
  }
});
clearBtn.addEventListener("click", handleClear);

window.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded");
});
