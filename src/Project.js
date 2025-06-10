import {TaskList} from "./TaskList.js"


function Project(title, taskArray = [], onUpdate = () =>{}) {
    const taskList = new TaskList(taskArray, onUpdate);

    return{title, tasks: taskArray, taskList};
}

export {Project};