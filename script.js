const taskInput = document.getElementById('task-input');  
const addTaskBtn = document.getElementById('add-task-btn');  
const taskList = document.getElementById('task-list');  
  
addTaskBtn.addEventListener('click', addTask);  
  
function addTask() {  
   const task = taskInput.value.trim();  
   if (task) {  
      const taskListItem = document.createElement('li');  
      taskListItem.classList.add('task');  
      taskListItem.innerHTML = `  
        <span>${task}</span>  
        <button class="delete-btn">Delete</button>  
      `;  
      taskList.appendChild(taskListItem);  
      taskInput.value = '';  
      const deleteBtn = taskListItem.querySelector('.delete-btn');  
      deleteBtn.addEventListener('click', deleteTask);  
   }  
}  
  
function deleteTask(e) {  
   const taskListItem = e.target.parentNode;  
   taskList.removeChild(taskListItem);  
}