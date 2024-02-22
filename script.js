const form = document.getElementById('todo-form');
const input = document.getElementById('toso-input');
const todoList = document.getElementById('todo-list');


form.addEventListener('submit', function(event) {
    event.preventDefault();
    const taskText = input.ariaValueMax.trim();
    if (taskText !== '') {
        addTask(taskText);
        input.value = '';
    }
});

function addTask(taskText) {
    const li = document.createElement('li');
    li.textContent = taskText;
    li.addEventListener('click', function() {
        li.classList.toggle('completed');
    });
    todoList.appendChild(li);
}