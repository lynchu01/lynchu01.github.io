addTodo = function() {
  myUl = document.querySelector("#list");
  myLi = document.createElement("li");
  
  myPriority = document.querySelector("#priority");
  myLi.classList.add(myPriority.value);
  
  newIn = document.createElement("input");
  newIn.type = "checkbox";
  
  myBox = document.querySelector("#input");
  licontents = document.createTextNode(myBox.value);
  
  myLi.appendChild(newIn);
  myLi.appendChild(licontents);
  myUl.appendChild(myLi);
  document.body.appendChild("#list");
  localSave("list");
}
doneTask = function() {
	if (this.checked) {
	this.parentNode.classList.add("done")
	localSave("list");
	} else {
		this.parentNoe.classList.remove("done")
		localSave("list");
	}

}


