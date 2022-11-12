const wrapper = document.getElementById("wrapper");
const todoInput = document.getElementById("todo-input");
const addButton = document.getElementById("add-button");
const todoList = document.getElementById("todo-list");

const handleInput = (event) => {
  text = event.target.value;
  addButton.disabled = text.length > 0 ? false : true;
};

const handleDelete = (event) => {
  event.target.parentNode.remove();
};

const handleClick = () => {
  const todoItem = document.createElement("li");

  const text = document.createElement("h2");
  text.textContent = todoInput.value;
  todoItem.appendChild(text);

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "X";
  deleteButton.classList.add("delete-button");
  deleteButton.addEventListener("click", handleDelete);
  todoItem.appendChild(deleteButton);

  todoList.appendChild(todoItem);
  todoInput.value = "";
  addButton.disabled = true;
};

todoInput.addEventListener("input", handleInput);
addButton.addEventListener("click", handleClick);
