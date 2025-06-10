// taskManager.js
function Task(t, desc, d, p) {
    let title = t;
    let description = desc;
    let date = d;
    let priority = p;

    return {title, description, date, priority};
}

export {Task};