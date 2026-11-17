const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const clearCompletedBtn = document.getElementById("clearCompletedBtn");

let tasks = [];

//Event listener should be outside functions
addTaskBtn.addEventListener("click", addTask);
clearCompletedBtn.addEventListener("click", clearCompletedTasks);

function displayTasks() 
{
    taskList.innerHTML = "";
    tasks.forEach((task, index) => 
    {
        const li = document.createElement("li");
        li.innerHTML = `<input type="checkbox" id="task-${index}" ${task.completed ? "checked" : ""}>
                    <label for="task-${index}">${task.text}</label>`;
        li.querySelector("input").addEventListener("change", () => toggleTask(index));
        taskList.appendChild(li);
    });
}

function addTask()
{
    //removes white space by trimming the input value
    const taskText = taskInput.value.trim();
    
    if(taskText != "")
    {
        tasks.push({text:taskText});
        taskInput.value = "";
        displayTasks();
    }
    displayTasks();
}

function toggleTask(index)
{
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
}

function clearCompletedTasks() 
{
    tasks = tasks.filter(task => !task.completed);

    addTaskBtn.addEventListener("click", addTask);
    clearCompletedBtn.addEventListener("click", clearCompletedTasks);
    
    displayTasks();
}