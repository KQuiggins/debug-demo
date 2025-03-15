// Array to hold todos
let todos = [];

/**
 * Renders the todos in the DOM
 */
function renderTodos() {
    // change spelling to elemant. Error: getElemantById is not a function
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = ''; // Clear the list

    todos.forEach((todoItem, index) => {
        const li = document.createElement('li');

        // Create text label
        const textSpan = document.createElement('span');
        textSpan.textContent = todoItem;

        // Create an edit button
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', () => editTodo(index));

        // Create a delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => deleteTodo(index));

        // Append elements
        li.appendChild(textSpan);
        li.appendChild(editButton);
        li.appendChild(deleteButton);

        todoList.appendChild(li);
    });
}

/**
 * Adds a new todo
 */
function addTodo() {
    const input = document.getElementById('todo-input');
    const newTodo = input.value.trim();

    if (newTodo !== '') {
        todos.push(newTodo);
        input.value = ''; // clear the input field
        renderTodos();
    }
}

/**
 * Deletes a todo at the specified index
 * @param {number} index - The index of the todo to delete
 */
function deleteTodo(index) {
    todos.splice(index, 1);
    renderTodos();
}

/**
 * Edits a todo at the specified index
 * @param {number} index - The index of the todo to edit
 */
function editTodo(index) {
    // Prompt for a new value (simple for demonstration)
    const updatedValue = prompt('Edit your todo:', todos[index]);
    if (updatedValue !== null && updatedValue.trim() !== '') {
        todos[index] = updatedValue.trim();
        renderTodos();
    }
}

// Attach event listeners after DOM loads
document.getElementById('add-button').addEventListener('click', addTodo);
