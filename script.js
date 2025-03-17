// Array to hold todos
let todos = [];

/**
 * Renders the todos in the DOM
 */
function renderTodos() {
    const todoList = document.getElementById('todo-list');
    console.log('Rendering todos:', todos); 
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
    console.log('Adding todo:', newTodo); // Debug: log new todo input

    if (newTodo !== '') {
        todos.push(newTodo);
        console.log('Updated todos:', todos); // Debug: log updated todos array
        input.value = ''; // clear the input field
        renderTodos();
    }
}

/**
 * Deletes a todo at the specified index
 * @param {number} index - The index of the todo to delete
 */
function deleteTodo(index) {
    console.log('Deleting todo at index:', index); // Debug: log index of todo to delete
    todos.splice(index, 1);
    console.log('Updated todos:', todos); // Debug: log updated todos array
    renderTodos();
}

/**
 * Edits a todo at the specified index
 * @param {number} index - The index of the todo to edit
 */
function editTodo(index) {
    // Prompt for a new value
    const updatedValue = prompt('Edit your todo:', todos[index]);
    console.log('Editing todo at index:', index, 'New value:', updatedValue); // Debug: log index and new value
    if (updatedValue !== null && updatedValue.trim() !== '') {
        todos[index] = updatedValue.trim();
        console.log('Updated todos:', todos); // Debug: log updated todos array
        renderTodos();
    }
}

// Attach event listeners after DOM loads
document.getElementById('add-button').addEventListener('click', addTodo);
