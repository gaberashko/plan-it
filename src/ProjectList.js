// ProjectList.js
import {Project} from "./Project.js";
import editIcon from "../public/icons/edit.svg";
import deleteIcon from "../public/icons/delete.svg";

function ProjectList(projectArr) {
    let projects = [];
    let contentContainer = document.querySelector(".content-wrapper");
    
    const removeProject = (index) => {
        projects.splice(index, 1);
        save();

        displayProjects();
    }

    // onUpdate argument. 
    const save = () => {
        const serializable = projects.map(p => ({
            title: p.title,
            tasks: p.tasks,
        }));
        localStorage.setItem("projects", JSON.stringify(serializable));
    };

    const addProject = () => {
        let titleInput = document.querySelector("#listName")

        let project = Project(titleInput.value, [], save);
        projects.push(project);
        save();

        displayProjects();
    }

    const editProject = (index) => {
        let titleInput = document.querySelector(`#editListName${index}`);

        let project = Project(titleInput.value, projects[index].tasks, save);
        projects.splice(index, 1, project);
        save();
        
        displayProjects();
    }

    const getProjects = () => {
        return projects;
    }

    const saveProjects= () => {
        // Store project in local storage.
        localStorage.setItem("projects", JSON.stringify(projects));
    }

    const displayProjects = () => {
        let projectContainer = document.querySelector(".list-wrapper");
        if (projects.length === 0 && !projectContainer.classList.contains("hidden") ||
            projects.length !== 0 && projectContainer.classList.contains("hidden")) {
                projectContainer.classList.toggle("hidden");
        }
        // Reset container.
        projectContainer.innerHTML = "";
        // Display each stored list card.
        projects.forEach((project, index) => {
            let {title, taskList} = project;
            let projectCard = document.createElement("div");
            projectCard.classList.add("clickable", "list", "card", "flex", "fc");
            // Store the index in the array of the current project card.
            projectCard.dataset.position = index;
            projectCard.innerHTML = `<h3 class="list-title">${title}</h3>
                <form action="" method="post" class="hidden" id="edit-list-form">
                    <label for="editListName">List Name</label>
                    <input type="text" name="editListName" id="editListName${index}" value="${title}" autocomplete="off" data-action="input" required/>
                    <h4 class="clickable buttonDiv" id="editListBtn" data-action="confirm">Confirm</h4>
                </form>
                <div class="list-options">
                    <img src="${editIcon}" alt="Edit icon" class="clickable edit list-icon" data-action="edit" draggable="false"
                    ><img src="${deleteIcon}" alt="Delete icon" class="clickable delete list-icon" data-action="delete" draggable="false">
                </div>`
            projectContainer.appendChild(projectCard);

            projectCard.addEventListener("click", (event) => {
                let action = event.target.dataset.action;

                if (action !== undefined) event.stopPropagation();
                switch(action) {
                    case "delete":
                        removeProject(index);
                        break;
                    case "edit":
                        projectCard.querySelector("#edit-list-form").classList.toggle("hidden");
                        break;
                    case "confirm":
                        event.preventDefault();
                        projectCard.querySelector("#edit-list-form").classList.toggle("hidden");
                        editProject(index);
                        break;
                    case "input":
                        break;
                    default:
                        contentContainer.innerHTML = `<div class="card">     
                            <h1 class="task-title">${title}</h1>
                            <form action="" method="post" id="task-form">
                            <label for="taskName">Task Name</label>
                            <input type="text" name="taskName" id="taskName" placeholder="Do the dishes" autocomplete="off" required/>
                            <label for="taskDescription">Task Description</label>
                            <input type="text" name="taskDescription" id="taskDescription" autocomplete="off"/>
                            <label for="taskDate">Due Date</label>
                            <input type="date" name="taskDate" id="taskDate" autocomplete="off">
                            <label for="taskPriority">Priority</label>
                            <select name="priority" id="priority">
                                <option value="high">High</option>
                                <option value="mod">Medium</option>
                                <option value="low">Low</option>
                            </select>
                            <h4 class="clickable buttonDiv" id="addTaskBtn${index}">+</h4>
                            </form>
                            <div class="flex task-container card"></div>`
                        taskList.displayTasks();
                        let addTaskBtn = document.querySelector(`#addTaskBtn${index}`);
                        addTaskBtn.addEventListener("click", () => {
                            project.taskList.addTask();
                        });
                }
            });
        });
    }

    projectArr.forEach(p => {
        projects.push(Project(p.title, p.tasks, save));
    })
    return {projects, displayProjects, addProject};
}

export {ProjectList};