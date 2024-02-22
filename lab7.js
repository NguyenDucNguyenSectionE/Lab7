document.addEventListener('DOMContentLoaded', function () {
    const taskForm = document.getElementById('taskForm');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    taskForm.addEventListener('submit', (e) => {
      e.preventDefault();
      addTask(taskInput.value);
      taskInput.value = '';
    });

    function addTask(taskText) {
      const taskItem = document.createElement('li');
      
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.addEventListener('change', () => {
        
        if (checkbox.checked) {
          taskItem.style.textDecoration = 'line-through';
        } else {
          taskItem.style.textDecoration = 'none';
        }
      });

      const deleteButton = document.createElement('button');
      deleteButton.innerText = 'Delete';
      deleteButton.addEventListener('click', () => {
        
        taskList.removeChild(taskItem);
      });

      taskItem.appendChild(checkbox);
      taskItem.appendChild(document.createTextNode(taskText));
      taskItem.appendChild(deleteButton);

      taskList.appendChild(taskItem);
    }
  });