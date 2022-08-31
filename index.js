// add click event to button
document.getElementById("addBtn").addEventListener("click", handleClick);

// confirm button was clicked and store value of todo in object
// push object to array

let storeTodos = [];
function handleClick() {
  // confirm button was clicked
  console.log("btnClicked");

  // declare object to be used
  let todo = {};

  // store value of input currently
  let inputValue = document.getElementById("todoInput").value;

  // assign id key and unique id value to object
  // assign a key of message and value of inputValue to object
  todo = {
    id: storeTodos.length + 1,
    message: inputValue
  };

  // push object to array to be stored
  storeTodos.push(todo);
  console.log("inputValue:", inputValue);
  console.log(storeTodos);
  displayTodos();
  document.getElementById("todoInput").value = "";
}

// make items in array appear on screen
function displayTodos() {
  let layout = "";

  storeTodos.forEach(function (value, index) {
    let todo = value.message;
    let id = value.id;
    layout += `
      <li id=${id} class="liItem">
      <span class="todoTextContainer">${todo} </span>
      <span class="deleteBtnContainer">
      <button class="deleteBtn" onclick="deleteTodo(${index})">-</button>
      </span>
      </li>
      </span>
    `;
  });
  document.getElementById("displayTodosList").innerHTML = layout;
}

// delete todo based on index received
function deleteTodo(index) {
  storeTodos = storeTodos.filter((todo, i) => i !== index);
  // storeTodos.splice(index, 1);
  console.log(storeTodos);
  displayTodos();
}
