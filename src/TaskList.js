// TaskList.js
import {Task} from "./Task.js";
import editIcon from "../public/icons/edit.svg";
import deleteIcon from "../public/icons/delete.svg";

// onUpdate is callback function for changes in tasks (saving details in project list structure).
function TaskList(taskArr, onUpdate) {
    let tasks = taskArr;
    
    const removeTask = (index) => {
        tasks.splice(index, 1);

        onUpdate();
        displayTasks()
    }

    const addTask = () => {
        let titleInput = document.querySelector("#taskName")
        let descInput = document.querySelector("#taskDescription")
        let dateInput = document.querySelector("#taskDate")
        let priorityInput = document.querySelector("#priority")

        let task = Task(titleInput.value, descInput.value, dateInput.value, priorityInput.value)
        tasks.push(task);
        
        // Save project list details, then display current task list.
        onUpdate();
        displayTasks();
    }

    function editTask(index) {
        let titleInput = document.querySelector(`#editTaskName${index}`);
        let descInput = document.querySelector(`#editTaskDescription${index}`);
        let dateInput = document.querySelector(`#editTaskDate${index}`);
        let priorityInput = document.querySelector(`#editPriority${index}`);

        let task = Task(titleInput.value, descInput.value, dateInput.value, priorityInput.value)
        tasks.splice(index, 1, task);
        
        onUpdate();
        displayTasks();
    }

    const displayTasks = () => {
        let taskContainer = document.querySelector(".task-container");
        // Reset container.
        taskContainer.innerHTML = "";
        // Display each stored task card.
        tasks.forEach((task, index) => {
            let {title, description, date, priority} = task;
            let taskCard = document.createElement("div");
            taskCard.classList.add("task", "card", "hover-box", `p${priority}`);
            taskCard.innerHTML = `<div class="task-details">
                            <h4 class="task-title">Task: ${title}</h4>
                            <div class="task-description"><b>Description: </b>${description}</div>
                            <div class="due-date"><b>Due Date: </b>${date}</div>
                            <div class="priority"><b>Priority: </b>${(priority === "mod") ? "Medium":priority.charAt(0).toUpperCase()+priority.slice(1)}</div>
                        </div>
                        <form action="" method="post" class="card hidden" id="edit-task-form">
                            <label for="editTaskName">Task Name</label>
                            <input type="text" name="editTaskName" id="editTaskName${index}" value="${title}" required/>
                            <label for="editTaskDescription">Task Description</label>
                            <input type="text" name="editTaskDescription" id="editTaskDescription${index}" value="${description}"/>
                            <label for="editTaskDate">Due Date</label>
                            <input type="date" name="editTaskDate" id="editTaskDate${index}" value="${date}">
                            <label for="editTaskPriority">Priority</label>
                            <select name="editPriority" id="editPriority${index}">
                                <option value="high" ${priority==="high"? "selected":""}>High</option>
                                <option value="mod"  ${priority==="mod"? "selected":""}>Medium</option>
                                <option value="low" ${priority==="low"? "selected":""}>Low</option>
                            </select>
                            <h4 class="clickable buttonDiv" id="editTaskBtn">Confirm</h4>
                        </form>
                        <div class="task-options">
                            <img src="${editIcon}" alt="Edit icon" class="clickable edit task-icon" draggable="false"
                            ><img src="${deleteIcon}" alt="Delete icon" class="clickable delete task-icon" draggable="false"">
                        </div>
                    </div>`;
                    taskContainer.appendChild(taskCard);
            
            taskCard.querySelector(".delete").addEventListener("click", () => {
                removeTask(index);
            });

            taskCard.querySelector(".edit").addEventListener("click", () => {
                taskCard.querySelector("#edit-task-form").classList.toggle("hidden");
            });

            taskCard.querySelector("#editTaskBtn").addEventListener("click", () => {
                editTask(index);
            });
        });
    }
    return {displayTasks, addTask};
}

export {TaskList};