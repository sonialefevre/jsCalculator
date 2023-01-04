class List {
  name = "List";
  elements = [];

  //Method to add an element to the list
  addElm(name, qty = 1) {
    // Ensure that the quantity is at least 1
    if (qty < 1) {
      throw new Error("Quantity must be strictly positive");
    }
    // Ensure that a name is provided
    if (!name) {
      throw new Error("A name must be provided");
    }
    // Check is the entered element already exists in the array
    let existingElm = this.elements.find(
      (el) => el.name.toLowerCase() == name.toLowerCase() && !el.completionDate
    );
    // If it does, update the existing qte with the newly entered one
    if (existingElm) {
      existingElm.qty = qty;
      // if not, create a new element and push it into the array
    } else {
      let elm = { name: name, qty: qty, completionDate: undefined };
      this.elements.push(elm);
    }
  }

  //Complete an element
  completeElm(elm) {
    elm.completionDate = new Date(); //adds current date and time
  }

  //Realize all elements
  completeAllELm() {
    this.elements.forEach((elm) => this.completeElm(elm));
  }

  //Remove an element
  removeElm(name) {
    let filteredElements = this.elements.filter((elm) => elm.name != name);
    this.elements = filteredElements;
  }

  removeAll() {
    this.elements = [];
  }
}

// let list = new List();
// list.addElm("tomatos", 2);
// list.addElm("", -6);
