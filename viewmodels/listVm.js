//HMTL GENERATION
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

// Creating the list in html
let listElm = document.createElement("ul");
listElm.id = "listElm";
container.appendChild(listElm);

//Adding clear button
let clearBtn = document.createElement("button");
clearBtn.innerText = "Effacer Tout";
clearBtn.id = "clearBtn";
clearBtn.className = "button";
container.appendChild(clearBtn);

//Adding complete all button
let completeBtn = document.createElement("button");
completeBtn.innerText = "Valider tout";
completeBtn.id = "completeBtn";
completeBtn.className = "button";
container.appendChild(completeBtn);

//List creation
let list = new List();
list.name = "Shopping list";

function displayElms() {
  listElm.innerHTML = "";
  list.elements.forEach((e) => {
    let li = document.createElement("li");
    li.innerText = e.qty + " " + e.name;
    li.addEventListener("click", () => {
      list.completeElm(e);
      displayElms();
    });
    listElm.appendChild(li);
    if (e.completionDate) {
      li.classList.add("done");
    } else {
      li.classList.add("todo");
      //Adding a button to increase quantity
      let plusBtn = document.createElement("button");
      plusBtn.classList.add("button", "mini");
      plusBtn.innerText = "+";
      plusBtn.addEventListener("click", (event) => {
        //Preventing bubbling - aka other click event listeners on parent elements
        event.stopPropagation();
        list.addElm(e.name, e.qty + 1);
        displayElms();
      });
      li.appendChild(plusBtn);
      //Addin a button to decrease quantity
      let minusBtn = document.createElement("button");
      minusBtn.classList.add("button", "mini");
      minusBtn.innerText = "-";
      minusBtn.addEventListener("click", (event) => {
        event.stopPropagation();
        list.addElm(e.name, e.qty - 1);
        displayElms();
      });
      li.appendChild(minusBtn);
    }
    inputField.value = "";
  });
}

//Calling the addElm method on click on the add btn
inputBtn.addEventListener("click", () => {
  list.addElm(inputField.value);
  displayElms();
});

//Calling the addElm method on pression Enter on the input field
inputField.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    e.preventDefault;
    list.addElm(input.value);
    displayElms();
  }
});

completeBtn.addEventListener("click", () => {
  list.completeAllELm();
  displayElms();
});

clearBtn.addEventListener("click", () => {
  list.removeAll();
  displayElms();
});

//TODO: Add button to modify quantity of element if it's not complete yet
