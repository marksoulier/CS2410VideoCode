const input = document.getElementById("todo-input");
const button = document.getElementById("save-button");

function elFromHTML(htmlString) {
  const container = document.createElement("div");
  container.innerHTML = htmlString;
  return container.firstElementChild;
}

function displayError(error) {
  const el = document.getElementById("error-message");
  el.innerHTML = error;
  el.dataset.open = "true";
  setTimeout(() => {
    el.dataset.open = false;
    el.innerHTML = "";
  }, 5000);
}

function createTodoItem() {
  const text = input.value;
  if (text === "") {
    displayError("Todo item cannot be blank");
    return;
  }
  const todoElement = elFromHTML(`
    <div class="todo-item">
      <label><input type="checkbox" />${text}</label>
    </div>
  `);
  document.getElementById("todo-items").appendChild(todoElement);
  input.value = "";
}

input.addEventListener("keypress", (e) => {
  if (e.code === "Enter") {
    createTodoItem();
  }
});

button.addEventListener("click", createTodoItem);