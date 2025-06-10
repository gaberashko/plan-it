/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Project.js":
/*!************************!*\
  !*** ./src/Project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Project: () => (/* binding */ Project)\n/* harmony export */ });\n/* harmony import */ var _TaskList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TaskList.js */ \"./src/TaskList.js\");\n\r\n\r\n\r\nfunction Project(title, taskArray = [], onUpdate = () =>{}) {\r\n    const taskList = new _TaskList_js__WEBPACK_IMPORTED_MODULE_0__.TaskList(taskArray, onUpdate);\r\n\r\n    return{title, tasks: taskArray, taskList};\r\n}\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvUHJvamVjdC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFzQztBQUN0QztBQUNBO0FBQ0EsMERBQTBEO0FBQzFELHlCQUF5QixrREFBUTtBQUNqQztBQUNBLFdBQVc7QUFDWDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL1Byb2plY3QuanM/MTQwOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1Rhc2tMaXN0fSBmcm9tIFwiLi9UYXNrTGlzdC5qc1wiXHJcblxyXG5cclxuZnVuY3Rpb24gUHJvamVjdCh0aXRsZSwgdGFza0FycmF5ID0gW10sIG9uVXBkYXRlID0gKCkgPT57fSkge1xyXG4gICAgY29uc3QgdGFza0xpc3QgPSBuZXcgVGFza0xpc3QodGFza0FycmF5LCBvblVwZGF0ZSk7XHJcblxyXG4gICAgcmV0dXJue3RpdGxlLCB0YXNrczogdGFza0FycmF5LCB0YXNrTGlzdH07XHJcbn1cclxuXHJcbmV4cG9ydCB7UHJvamVjdH07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Project.js\n");

/***/ }),

/***/ "./src/ProjectList.js":
/*!****************************!*\
  !*** ./src/ProjectList.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ProjectList: () => (/* binding */ ProjectList)\n/* harmony export */ });\n/* harmony import */ var _Project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project.js */ \"./src/Project.js\");\n/* harmony import */ var _public_icons_edit_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/icons/edit.svg */ \"./public/icons/edit.svg\");\n/* harmony import */ var _public_icons_delete_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/icons/delete.svg */ \"./public/icons/delete.svg\");\n// ProjectList.js\r\n\r\n\r\n\r\n\r\nfunction ProjectList(projectArr) {\r\n    let projects = [];\r\n    let contentContainer = document.querySelector(\".content-wrapper\");\r\n    \r\n    const removeProject = (index) => {\r\n        projects.splice(index, 1);\r\n        save();\r\n\r\n        displayProjects();\r\n    }\r\n\r\n    // onUpdate argument. \r\n    const save = () => {\r\n        const serializable = projects.map(p => ({\r\n            title: p.title,\r\n            tasks: p.tasks,\r\n        }));\r\n        localStorage.setItem(\"projects\", JSON.stringify(serializable));\r\n    };\r\n\r\n    const addProject = () => {\r\n        let titleInput = document.querySelector(\"#listName\")\r\n\r\n        let project = (0,_Project_js__WEBPACK_IMPORTED_MODULE_0__.Project)(titleInput.value, [], save);\r\n        projects.push(project);\r\n        save();\r\n\r\n        displayProjects();\r\n    }\r\n\r\n    const editProject = (index) => {\r\n        let titleInput = document.querySelector(`#editListName${index}`);\r\n\r\n        let project = (0,_Project_js__WEBPACK_IMPORTED_MODULE_0__.Project)(titleInput.value, projects[index].tasks, save);\r\n        projects.splice(index, 1, project);\r\n        save();\r\n        \r\n        displayProjects();\r\n    }\r\n\r\n    const getProjects = () => {\r\n        return projects;\r\n    }\r\n\r\n    const saveProjects= () => {\r\n        // Store project in local storage.\r\n        localStorage.setItem(\"projects\", JSON.stringify(projects));\r\n    }\r\n\r\n    const displayProjects = () => {\r\n        let projectContainer = document.querySelector(\".list-wrapper\");\r\n        if (projects.length === 0 && !projectContainer.classList.contains(\"hidden\") ||\r\n            projects.length !== 0 && projectContainer.classList.contains(\"hidden\")) {\r\n                projectContainer.classList.toggle(\"hidden\");\r\n        }\r\n        // Reset container.\r\n        projectContainer.innerHTML = \"\";\r\n        // Display each stored list card.\r\n        projects.forEach((project, index) => {\r\n            let {title, taskList} = project;\r\n            let projectCard = document.createElement(\"div\");\r\n            projectCard.classList.add(\"clickable\", \"list\", \"card\", \"flex\", \"fc\");\r\n            // Store the index in the array of the current project card.\r\n            projectCard.dataset.position = index;\r\n            projectCard.innerHTML = `<h3 class=\"list-title\">${title}</h3>\r\n                <form action=\"\" method=\"post\" class=\"hidden\" id=\"edit-list-form\">\r\n                    <label for=\"editListName\">List Name</label>\r\n                    <input type=\"text\" name=\"editListName\" id=\"editListName${index}\" value=\"${title}\" autocomplete=\"off\" data-action=\"input\" required/>\r\n                    <h4 class=\"clickable buttonDiv\" id=\"editListBtn\" data-action=\"confirm\">Confirm</h4>\r\n                </form>\r\n                <div class=\"list-options\">\r\n                    <img src=\"${_public_icons_edit_svg__WEBPACK_IMPORTED_MODULE_1__}\" alt=\"Edit icon\" class=\"clickable edit list-icon\" data-action=\"edit\" draggable=\"false\"\r\n                    ><img src=\"${_public_icons_delete_svg__WEBPACK_IMPORTED_MODULE_2__}\" alt=\"Delete icon\" class=\"clickable delete list-icon\" data-action=\"delete\" draggable=\"false\">\r\n                </div>`\r\n            projectContainer.appendChild(projectCard);\r\n\r\n            projectCard.addEventListener(\"click\", (event) => {\r\n                let action = event.target.dataset.action;\r\n\r\n                if (action !== undefined) event.stopPropagation();\r\n                switch(action) {\r\n                    case \"delete\":\r\n                        removeProject(index);\r\n                        break;\r\n                    case \"edit\":\r\n                        projectCard.querySelector(\"#edit-list-form\").classList.toggle(\"hidden\");\r\n                        break;\r\n                    case \"confirm\":\r\n                        event.preventDefault();\r\n                        projectCard.querySelector(\"#edit-list-form\").classList.toggle(\"hidden\");\r\n                        editProject(index);\r\n                        break;\r\n                    case \"input\":\r\n                        break;\r\n                    default:\r\n                        contentContainer.innerHTML = `<div class=\"card\">     \r\n                            <h1 class=\"task-title\">${title}</h1>\r\n                            <form action=\"\" method=\"post\" id=\"task-form\">\r\n                            <label for=\"taskName\">Task Name</label>\r\n                            <input type=\"text\" name=\"taskName\" id=\"taskName\" placeholder=\"Do the dishes\" autocomplete=\"off\" required/>\r\n                            <label for=\"taskDescription\">Task Description</label>\r\n                            <input type=\"text\" name=\"taskDescription\" id=\"taskDescription\" autocomplete=\"off\"/>\r\n                            <label for=\"taskDate\">Due Date</label>\r\n                            <input type=\"date\" name=\"taskDate\" id=\"taskDate\" autocomplete=\"off\">\r\n                            <label for=\"taskPriority\">Priority</label>\r\n                            <select name=\"priority\" id=\"priority\">\r\n                                <option value=\"high\">High</option>\r\n                                <option value=\"mod\">Medium</option>\r\n                                <option value=\"low\">Low</option>\r\n                            </select>\r\n                            <h4 class=\"clickable buttonDiv\" id=\"addTaskBtn${index}\">+</h4>\r\n                            </form>\r\n                            <div class=\"flex task-container card\"></div>`\r\n                        taskList.displayTasks();\r\n                        let addTaskBtn = document.querySelector(`#addTaskBtn${index}`);\r\n                        addTaskBtn.addEventListener(\"click\", () => {\r\n                            project.taskList.addTask();\r\n                        });\r\n                }\r\n            });\r\n        });\r\n    }\r\n\r\n    projectArr.forEach(p => {\r\n        projects.push((0,_Project_js__WEBPACK_IMPORTED_MODULE_0__.Project)(p.title, p.tasks, save));\r\n    })\r\n    return {projects, displayProjects, addProject};\r\n}\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvUHJvamVjdExpc3QuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ3FDO0FBQ1c7QUFDSTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixvREFBTztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdFQUFnRSxNQUFNO0FBQ3RFO0FBQ0Esc0JBQXNCLG9EQUFPO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGlCQUFpQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RCxNQUFNO0FBQ3BFO0FBQ0E7QUFDQSw2RUFBNkUsTUFBTSxXQUFXLE1BQU07QUFDcEc7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLG1EQUFRLENBQUM7QUFDekMsaUNBQWlDLHFEQUFVLENBQUM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRCxNQUFNO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEVBQTRFLE1BQU07QUFDbEY7QUFDQTtBQUNBO0FBQ0EsOEVBQThFLE1BQU07QUFDcEY7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLG9EQUFPO0FBQzdCLEtBQUs7QUFDTCxZQUFZO0FBQ1o7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9Qcm9qZWN0TGlzdC5qcz9mOWE3Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIFByb2plY3RMaXN0LmpzXHJcbmltcG9ydCB7UHJvamVjdH0gZnJvbSBcIi4vUHJvamVjdC5qc1wiO1xyXG5pbXBvcnQgZWRpdEljb24gZnJvbSBcIi4uL3B1YmxpYy9pY29ucy9lZGl0LnN2Z1wiO1xyXG5pbXBvcnQgZGVsZXRlSWNvbiBmcm9tIFwiLi4vcHVibGljL2ljb25zL2RlbGV0ZS5zdmdcIjtcclxuXHJcbmZ1bmN0aW9uIFByb2plY3RMaXN0KHByb2plY3RBcnIpIHtcclxuICAgIGxldCBwcm9qZWN0cyA9IFtdO1xyXG4gICAgbGV0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnQtd3JhcHBlclwiKTtcclxuICAgIFxyXG4gICAgY29uc3QgcmVtb3ZlUHJvamVjdCA9IChpbmRleCkgPT4ge1xyXG4gICAgICAgIHByb2plY3RzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgc2F2ZSgpO1xyXG5cclxuICAgICAgICBkaXNwbGF5UHJvamVjdHMoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBvblVwZGF0ZSBhcmd1bWVudC4gXHJcbiAgICBjb25zdCBzYXZlID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNlcmlhbGl6YWJsZSA9IHByb2plY3RzLm1hcChwID0+ICh7XHJcbiAgICAgICAgICAgIHRpdGxlOiBwLnRpdGxlLFxyXG4gICAgICAgICAgICB0YXNrczogcC50YXNrcyxcclxuICAgICAgICB9KSk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShzZXJpYWxpemFibGUpKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgYWRkUHJvamVjdCA9ICgpID0+IHtcclxuICAgICAgICBsZXQgdGl0bGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbGlzdE5hbWVcIilcclxuXHJcbiAgICAgICAgbGV0IHByb2plY3QgPSBQcm9qZWN0KHRpdGxlSW5wdXQudmFsdWUsIFtdLCBzYXZlKTtcclxuICAgICAgICBwcm9qZWN0cy5wdXNoKHByb2plY3QpO1xyXG4gICAgICAgIHNhdmUoKTtcclxuXHJcbiAgICAgICAgZGlzcGxheVByb2plY3RzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZWRpdFByb2plY3QgPSAoaW5kZXgpID0+IHtcclxuICAgICAgICBsZXQgdGl0bGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNlZGl0TGlzdE5hbWUke2luZGV4fWApO1xyXG5cclxuICAgICAgICBsZXQgcHJvamVjdCA9IFByb2plY3QodGl0bGVJbnB1dC52YWx1ZSwgcHJvamVjdHNbaW5kZXhdLnRhc2tzLCBzYXZlKTtcclxuICAgICAgICBwcm9qZWN0cy5zcGxpY2UoaW5kZXgsIDEsIHByb2plY3QpO1xyXG4gICAgICAgIHNhdmUoKTtcclxuICAgICAgICBcclxuICAgICAgICBkaXNwbGF5UHJvamVjdHMoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnZXRQcm9qZWN0cyA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gcHJvamVjdHM7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2F2ZVByb2plY3RzPSAoKSA9PiB7XHJcbiAgICAgICAgLy8gU3RvcmUgcHJvamVjdCBpbiBsb2NhbCBzdG9yYWdlLlxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkaXNwbGF5UHJvamVjdHMgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxpc3Qtd3JhcHBlclwiKTtcclxuICAgICAgICBpZiAocHJvamVjdHMubGVuZ3RoID09PSAwICYmICFwcm9qZWN0Q29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucyhcImhpZGRlblwiKSB8fFxyXG4gICAgICAgICAgICBwcm9qZWN0cy5sZW5ndGggIT09IDAgJiYgcHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoXCJoaWRkZW5cIikpIHtcclxuICAgICAgICAgICAgICAgIHByb2plY3RDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gUmVzZXQgY29udGFpbmVyLlxyXG4gICAgICAgIHByb2plY3RDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICAvLyBEaXNwbGF5IGVhY2ggc3RvcmVkIGxpc3QgY2FyZC5cclxuICAgICAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQge3RpdGxlLCB0YXNrTGlzdH0gPSBwcm9qZWN0O1xyXG4gICAgICAgICAgICBsZXQgcHJvamVjdENhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICBwcm9qZWN0Q2FyZC5jbGFzc0xpc3QuYWRkKFwiY2xpY2thYmxlXCIsIFwibGlzdFwiLCBcImNhcmRcIiwgXCJmbGV4XCIsIFwiZmNcIik7XHJcbiAgICAgICAgICAgIC8vIFN0b3JlIHRoZSBpbmRleCBpbiB0aGUgYXJyYXkgb2YgdGhlIGN1cnJlbnQgcHJvamVjdCBjYXJkLlxyXG4gICAgICAgICAgICBwcm9qZWN0Q2FyZC5kYXRhc2V0LnBvc2l0aW9uID0gaW5kZXg7XHJcbiAgICAgICAgICAgIHByb2plY3RDYXJkLmlubmVySFRNTCA9IGA8aDMgY2xhc3M9XCJsaXN0LXRpdGxlXCI+JHt0aXRsZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gYWN0aW9uPVwiXCIgbWV0aG9kPVwicG9zdFwiIGNsYXNzPVwiaGlkZGVuXCIgaWQ9XCJlZGl0LWxpc3QtZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJlZGl0TGlzdE5hbWVcIj5MaXN0IE5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJlZGl0TGlzdE5hbWVcIiBpZD1cImVkaXRMaXN0TmFtZSR7aW5kZXh9XCIgdmFsdWU9XCIke3RpdGxlfVwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiIGRhdGEtYWN0aW9uPVwiaW5wdXRcIiByZXF1aXJlZC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzPVwiY2xpY2thYmxlIGJ1dHRvbkRpdlwiIGlkPVwiZWRpdExpc3RCdG5cIiBkYXRhLWFjdGlvbj1cImNvbmZpcm1cIj5Db25maXJtPC9oND5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaXN0LW9wdGlvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7ZWRpdEljb259XCIgYWx0PVwiRWRpdCBpY29uXCIgY2xhc3M9XCJjbGlja2FibGUgZWRpdCBsaXN0LWljb25cIiBkYXRhLWFjdGlvbj1cImVkaXRcIiBkcmFnZ2FibGU9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPjxpbWcgc3JjPVwiJHtkZWxldGVJY29ufVwiIGFsdD1cIkRlbGV0ZSBpY29uXCIgY2xhc3M9XCJjbGlja2FibGUgZGVsZXRlIGxpc3QtaWNvblwiIGRhdGEtYWN0aW9uPVwiZGVsZXRlXCIgZHJhZ2dhYmxlPVwiZmFsc2VcIj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PmBcclxuICAgICAgICAgICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0Q2FyZCk7XHJcblxyXG4gICAgICAgICAgICBwcm9qZWN0Q2FyZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYWN0aW9uID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQuYWN0aW9uO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChhY3Rpb24gIT09IHVuZGVmaW5lZCkgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2goYWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImRlbGV0ZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVQcm9qZWN0KGluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImVkaXRcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdENhcmQucXVlcnlTZWxlY3RvcihcIiNlZGl0LWxpc3QtZm9ybVwiKS5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiY29uZmlybVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0Q2FyZC5xdWVyeVNlbGVjdG9yKFwiI2VkaXQtbGlzdC1mb3JtXCIpLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRQcm9qZWN0KGluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImlucHV0XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRDb250YWluZXIuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJjYXJkXCI+ICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzcz1cInRhc2stdGl0bGVcIj4ke3RpdGxlfTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCJcIiBtZXRob2Q9XCJwb3N0XCIgaWQ9XCJ0YXNrLWZvcm1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0YXNrTmFtZVwiPlRhc2sgTmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidGFza05hbWVcIiBpZD1cInRhc2tOYW1lXCIgcGxhY2Vob2xkZXI9XCJEbyB0aGUgZGlzaGVzXCIgYXV0b2NvbXBsZXRlPVwib2ZmXCIgcmVxdWlyZWQvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRhc2tEZXNjcmlwdGlvblwiPlRhc2sgRGVzY3JpcHRpb248L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInRhc2tEZXNjcmlwdGlvblwiIGlkPVwidGFza0Rlc2NyaXB0aW9uXCIgYXV0b2NvbXBsZXRlPVwib2ZmXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRhc2tEYXRlXCI+RHVlIERhdGU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgbmFtZT1cInRhc2tEYXRlXCIgaWQ9XCJ0YXNrRGF0ZVwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRhc2tQcmlvcml0eVwiPlByaW9yaXR5PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cInByaW9yaXR5XCIgaWQ9XCJwcmlvcml0eVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJoaWdoXCI+SGlnaDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJtb2RcIj5NZWRpdW08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibG93XCI+TG93PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cImNsaWNrYWJsZSBidXR0b25EaXZcIiBpZD1cImFkZFRhc2tCdG4ke2luZGV4fVwiPis8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggdGFzay1jb250YWluZXIgY2FyZFwiPjwvZGl2PmBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFza0xpc3QuZGlzcGxheVRhc2tzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhZGRUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2FkZFRhc2tCdG4ke2luZGV4fWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0LnRhc2tMaXN0LmFkZFRhc2soKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByb2plY3RBcnIuZm9yRWFjaChwID0+IHtcclxuICAgICAgICBwcm9qZWN0cy5wdXNoKFByb2plY3QocC50aXRsZSwgcC50YXNrcywgc2F2ZSkpO1xyXG4gICAgfSlcclxuICAgIHJldHVybiB7cHJvamVjdHMsIGRpc3BsYXlQcm9qZWN0cywgYWRkUHJvamVjdH07XHJcbn1cclxuXHJcbmV4cG9ydCB7UHJvamVjdExpc3R9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/ProjectList.js\n");

/***/ }),

/***/ "./src/Task.js":
/*!*********************!*\
  !*** ./src/Task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Task: () => (/* binding */ Task)\n/* harmony export */ });\n// taskManager.js\r\nfunction Task(t, desc, d, p) {\r\n    let title = t;\r\n    let description = desc;\r\n    let date = d;\r\n    let priority = p;\r\n\r\n    return {title, description, date, priority};\r\n}\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvVGFzay5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9UYXNrLmpzP2Q3NTEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gdGFza01hbmFnZXIuanNcclxuZnVuY3Rpb24gVGFzayh0LCBkZXNjLCBkLCBwKSB7XHJcbiAgICBsZXQgdGl0bGUgPSB0O1xyXG4gICAgbGV0IGRlc2NyaXB0aW9uID0gZGVzYztcclxuICAgIGxldCBkYXRlID0gZDtcclxuICAgIGxldCBwcmlvcml0eSA9IHA7XHJcblxyXG4gICAgcmV0dXJuIHt0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUsIHByaW9yaXR5fTtcclxufVxyXG5cclxuZXhwb3J0IHtUYXNrfTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Task.js\n");

/***/ }),

/***/ "./src/TaskList.js":
/*!*************************!*\
  !*** ./src/TaskList.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TaskList: () => (/* binding */ TaskList)\n/* harmony export */ });\n/* harmony import */ var _Task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task.js */ \"./src/Task.js\");\n/* harmony import */ var _public_icons_edit_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/icons/edit.svg */ \"./public/icons/edit.svg\");\n/* harmony import */ var _public_icons_delete_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/icons/delete.svg */ \"./public/icons/delete.svg\");\n// TaskList.js\r\n\r\n\r\n\r\n\r\n// onUpdate is callback function for changes in tasks (saving details in project list structure).\r\nfunction TaskList(taskArr, onUpdate) {\r\n    let tasks = taskArr;\r\n    \r\n    const removeTask = (index) => {\r\n        tasks.splice(index, 1);\r\n\r\n        onUpdate();\r\n        displayTasks()\r\n    }\r\n\r\n    const addTask = () => {\r\n        let titleInput = document.querySelector(\"#taskName\")\r\n        let descInput = document.querySelector(\"#taskDescription\")\r\n        let dateInput = document.querySelector(\"#taskDate\")\r\n        let priorityInput = document.querySelector(\"#priority\")\r\n\r\n        let task = (0,_Task_js__WEBPACK_IMPORTED_MODULE_0__.Task)(titleInput.value, descInput.value, dateInput.value, priorityInput.value)\r\n        tasks.push(task);\r\n        \r\n        // Save project list details, then display current task list.\r\n        onUpdate();\r\n        displayTasks();\r\n    }\r\n\r\n    function editTask(index) {\r\n        let titleInput = document.querySelector(`#editTaskName${index}`);\r\n        let descInput = document.querySelector(`#editTaskDescription${index}`);\r\n        let dateInput = document.querySelector(`#editTaskDate${index}`);\r\n        let priorityInput = document.querySelector(`#editPriority${index}`);\r\n\r\n        let task = (0,_Task_js__WEBPACK_IMPORTED_MODULE_0__.Task)(titleInput.value, descInput.value, dateInput.value, priorityInput.value)\r\n        tasks.splice(index, 1, task);\r\n        \r\n        onUpdate();\r\n        displayTasks();\r\n    }\r\n\r\n    const displayTasks = () => {\r\n        let taskContainer = document.querySelector(\".task-container\");\r\n        // Reset container.\r\n        taskContainer.innerHTML = \"\";\r\n        // Display each stored task card.\r\n        tasks.forEach((task, index) => {\r\n            let {title, description, date, priority} = task;\r\n            let taskCard = document.createElement(\"div\");\r\n            taskCard.classList.add(\"task\", \"card\", \"hover-box\", `p${priority}`);\r\n            taskCard.innerHTML = `<div class=\"task-details\">\r\n                            <h4 class=\"task-title\">Task: ${title}</h4>\r\n                            <div class=\"task-description\"><b>Description: </b>${description}</div>\r\n                            <div class=\"due-date\"><b>Due Date: </b>${date}</div>\r\n                            <div class=\"priority\"><b>Priority: </b>${(priority === \"mod\") ? \"Medium\":priority.charAt(0).toUpperCase()+priority.slice(1)}</div>\r\n                        </div>\r\n                        <form action=\"\" method=\"post\" class=\"card hidden\" id=\"edit-task-form\">\r\n                            <label for=\"editTaskName\">Task Name</label>\r\n                            <input type=\"text\" name=\"editTaskName\" id=\"editTaskName${index}\" value=\"${title}\" required/>\r\n                            <label for=\"editTaskDescription\">Task Description</label>\r\n                            <input type=\"text\" name=\"editTaskDescription\" id=\"editTaskDescription${index}\" value=\"${description}\"/>\r\n                            <label for=\"editTaskDate\">Due Date</label>\r\n                            <input type=\"date\" name=\"editTaskDate\" id=\"editTaskDate${index}\" value=\"${date}\">\r\n                            <label for=\"editTaskPriority\">Priority</label>\r\n                            <select name=\"editPriority\" id=\"editPriority${index}\">\r\n                                <option value=\"high\" ${priority===\"high\"? \"selected\":\"\"}>High</option>\r\n                                <option value=\"mod\"  ${priority===\"mod\"? \"selected\":\"\"}>Medium</option>\r\n                                <option value=\"low\" ${priority===\"low\"? \"selected\":\"\"}>Low</option>\r\n                            </select>\r\n                            <h4 class=\"clickable buttonDiv\" id=\"editTaskBtn\">Confirm</h4>\r\n                        </form>\r\n                        <div class=\"task-options\">\r\n                            <img src=\"${_public_icons_edit_svg__WEBPACK_IMPORTED_MODULE_1__}\" alt=\"Edit icon\" class=\"clickable edit task-icon\" draggable=\"false\"\r\n                            ><img src=\"${_public_icons_delete_svg__WEBPACK_IMPORTED_MODULE_2__}\" alt=\"Delete icon\" class=\"clickable delete task-icon\" draggable=\"false\"\">\r\n                        </div>\r\n                    </div>`;\r\n                    taskContainer.appendChild(taskCard);\r\n            \r\n            taskCard.querySelector(\".delete\").addEventListener(\"click\", () => {\r\n                removeTask(index);\r\n            });\r\n\r\n            taskCard.querySelector(\".edit\").addEventListener(\"click\", () => {\r\n                taskCard.querySelector(\"#edit-task-form\").classList.toggle(\"hidden\");\r\n            });\r\n\r\n            taskCard.querySelector(\"#editTaskBtn\").addEventListener(\"click\", () => {\r\n                editTask(index);\r\n            });\r\n        });\r\n    }\r\n    return {displayTasks, addTask};\r\n}\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvVGFza0xpc3QuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQytCO0FBQ2lCO0FBQ0k7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDhDQUFJO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRUFBZ0UsTUFBTTtBQUN0RSxzRUFBc0UsTUFBTTtBQUM1RSwrREFBK0QsTUFBTTtBQUNyRSxtRUFBbUUsTUFBTTtBQUN6RTtBQUNBLG1CQUFtQiw4Q0FBSTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsb0NBQW9DO0FBQ3JEO0FBQ0Esb0VBQW9FLFNBQVM7QUFDN0U7QUFDQSwyREFBMkQsTUFBTTtBQUNqRSxnRkFBZ0YsWUFBWTtBQUM1RixxRUFBcUUsS0FBSztBQUMxRSxxRUFBcUUsbUZBQW1GO0FBQ3hKO0FBQ0E7QUFDQTtBQUNBLHFGQUFxRixNQUFNLFdBQVcsTUFBTTtBQUM1RztBQUNBLG1HQUFtRyxNQUFNLFdBQVcsWUFBWTtBQUNoSTtBQUNBLHFGQUFxRixNQUFNLFdBQVcsS0FBSztBQUMzRztBQUNBLDBFQUEwRSxNQUFNO0FBQ2hGLHVEQUF1RCxpQ0FBaUM7QUFDeEYsdURBQXVELGdDQUFnQztBQUN2RixzREFBc0QsZ0NBQWdDO0FBQ3RGO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLG1EQUFRLENBQUM7QUFDakQseUNBQXlDLHFEQUFVLENBQUM7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0EsWUFBWTtBQUNaO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvVGFza0xpc3QuanM/Yjc4NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUYXNrTGlzdC5qc1xyXG5pbXBvcnQge1Rhc2t9IGZyb20gXCIuL1Rhc2suanNcIjtcclxuaW1wb3J0IGVkaXRJY29uIGZyb20gXCIuLi9wdWJsaWMvaWNvbnMvZWRpdC5zdmdcIjtcclxuaW1wb3J0IGRlbGV0ZUljb24gZnJvbSBcIi4uL3B1YmxpYy9pY29ucy9kZWxldGUuc3ZnXCI7XHJcblxyXG4vLyBvblVwZGF0ZSBpcyBjYWxsYmFjayBmdW5jdGlvbiBmb3IgY2hhbmdlcyBpbiB0YXNrcyAoc2F2aW5nIGRldGFpbHMgaW4gcHJvamVjdCBsaXN0IHN0cnVjdHVyZSkuXHJcbmZ1bmN0aW9uIFRhc2tMaXN0KHRhc2tBcnIsIG9uVXBkYXRlKSB7XHJcbiAgICBsZXQgdGFza3MgPSB0YXNrQXJyO1xyXG4gICAgXHJcbiAgICBjb25zdCByZW1vdmVUYXNrID0gKGluZGV4KSA9PiB7XHJcbiAgICAgICAgdGFza3Muc3BsaWNlKGluZGV4LCAxKTtcclxuXHJcbiAgICAgICAgb25VcGRhdGUoKTtcclxuICAgICAgICBkaXNwbGF5VGFza3MoKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFkZFRhc2sgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tOYW1lXCIpXHJcbiAgICAgICAgbGV0IGRlc2NJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFza0Rlc2NyaXB0aW9uXCIpXHJcbiAgICAgICAgbGV0IGRhdGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFza0RhdGVcIilcclxuICAgICAgICBsZXQgcHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJpb3JpdHlcIilcclxuXHJcbiAgICAgICAgbGV0IHRhc2sgPSBUYXNrKHRpdGxlSW5wdXQudmFsdWUsIGRlc2NJbnB1dC52YWx1ZSwgZGF0ZUlucHV0LnZhbHVlLCBwcmlvcml0eUlucHV0LnZhbHVlKVxyXG4gICAgICAgIHRhc2tzLnB1c2godGFzayk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gU2F2ZSBwcm9qZWN0IGxpc3QgZGV0YWlscywgdGhlbiBkaXNwbGF5IGN1cnJlbnQgdGFzayBsaXN0LlxyXG4gICAgICAgIG9uVXBkYXRlKCk7XHJcbiAgICAgICAgZGlzcGxheVRhc2tzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZWRpdFRhc2soaW5kZXgpIHtcclxuICAgICAgICBsZXQgdGl0bGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNlZGl0VGFza05hbWUke2luZGV4fWApO1xyXG4gICAgICAgIGxldCBkZXNjSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjZWRpdFRhc2tEZXNjcmlwdGlvbiR7aW5kZXh9YCk7XHJcbiAgICAgICAgbGV0IGRhdGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNlZGl0VGFza0RhdGUke2luZGV4fWApO1xyXG4gICAgICAgIGxldCBwcmlvcml0eUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2VkaXRQcmlvcml0eSR7aW5kZXh9YCk7XHJcblxyXG4gICAgICAgIGxldCB0YXNrID0gVGFzayh0aXRsZUlucHV0LnZhbHVlLCBkZXNjSW5wdXQudmFsdWUsIGRhdGVJbnB1dC52YWx1ZSwgcHJpb3JpdHlJbnB1dC52YWx1ZSlcclxuICAgICAgICB0YXNrcy5zcGxpY2UoaW5kZXgsIDEsIHRhc2spO1xyXG4gICAgICAgIFxyXG4gICAgICAgIG9uVXBkYXRlKCk7XHJcbiAgICAgICAgZGlzcGxheVRhc2tzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZGlzcGxheVRhc2tzID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWNvbnRhaW5lclwiKTtcclxuICAgICAgICAvLyBSZXNldCBjb250YWluZXIuXHJcbiAgICAgICAgdGFza0NvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgIC8vIERpc3BsYXkgZWFjaCBzdG9yZWQgdGFzayBjYXJkLlxyXG4gICAgICAgIHRhc2tzLmZvckVhY2goKHRhc2ssIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB7dGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlLCBwcmlvcml0eX0gPSB0YXNrO1xyXG4gICAgICAgICAgICBsZXQgdGFza0NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICB0YXNrQ2FyZC5jbGFzc0xpc3QuYWRkKFwidGFza1wiLCBcImNhcmRcIiwgXCJob3Zlci1ib3hcIiwgYHAke3ByaW9yaXR5fWApO1xyXG4gICAgICAgICAgICB0YXNrQ2FyZC5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cInRhc2stZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzPVwidGFzay10aXRsZVwiPlRhc2s6ICR7dGl0bGV9PC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWRlc2NyaXB0aW9uXCI+PGI+RGVzY3JpcHRpb246IDwvYj4ke2Rlc2NyaXB0aW9ufTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImR1ZS1kYXRlXCI+PGI+RHVlIERhdGU6IDwvYj4ke2RhdGV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJpb3JpdHlcIj48Yj5Qcmlvcml0eTogPC9iPiR7KHByaW9yaXR5ID09PSBcIm1vZFwiKSA/IFwiTWVkaXVtXCI6cHJpb3JpdHkuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkrcHJpb3JpdHkuc2xpY2UoMSl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCJcIiBtZXRob2Q9XCJwb3N0XCIgY2xhc3M9XCJjYXJkIGhpZGRlblwiIGlkPVwiZWRpdC10YXNrLWZvcm1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJlZGl0VGFza05hbWVcIj5UYXNrIE5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImVkaXRUYXNrTmFtZVwiIGlkPVwiZWRpdFRhc2tOYW1lJHtpbmRleH1cIiB2YWx1ZT1cIiR7dGl0bGV9XCIgcmVxdWlyZWQvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImVkaXRUYXNrRGVzY3JpcHRpb25cIj5UYXNrIERlc2NyaXB0aW9uPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJlZGl0VGFza0Rlc2NyaXB0aW9uXCIgaWQ9XCJlZGl0VGFza0Rlc2NyaXB0aW9uJHtpbmRleH1cIiB2YWx1ZT1cIiR7ZGVzY3JpcHRpb259XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImVkaXRUYXNrRGF0ZVwiPkR1ZSBEYXRlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIG5hbWU9XCJlZGl0VGFza0RhdGVcIiBpZD1cImVkaXRUYXNrRGF0ZSR7aW5kZXh9XCIgdmFsdWU9XCIke2RhdGV9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZWRpdFRhc2tQcmlvcml0eVwiPlByaW9yaXR5PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cImVkaXRQcmlvcml0eVwiIGlkPVwiZWRpdFByaW9yaXR5JHtpbmRleH1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiaGlnaFwiICR7cHJpb3JpdHk9PT1cImhpZ2hcIj8gXCJzZWxlY3RlZFwiOlwiXCJ9PkhpZ2g8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibW9kXCIgICR7cHJpb3JpdHk9PT1cIm1vZFwiPyBcInNlbGVjdGVkXCI6XCJcIn0+TWVkaXVtPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImxvd1wiICR7cHJpb3JpdHk9PT1cImxvd1wiPyBcInNlbGVjdGVkXCI6XCJcIn0+TG93PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cImNsaWNrYWJsZSBidXR0b25EaXZcIiBpZD1cImVkaXRUYXNrQnRuXCI+Q29uZmlybTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stb3B0aW9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke2VkaXRJY29ufVwiIGFsdD1cIkVkaXQgaWNvblwiIGNsYXNzPVwiY2xpY2thYmxlIGVkaXQgdGFzay1pY29uXCIgZHJhZ2dhYmxlPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPjxpbWcgc3JjPVwiJHtkZWxldGVJY29ufVwiIGFsdD1cIkRlbGV0ZSBpY29uXCIgY2xhc3M9XCJjbGlja2FibGUgZGVsZXRlIHRhc2staWNvblwiIGRyYWdnYWJsZT1cImZhbHNlXCJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+YDtcclxuICAgICAgICAgICAgICAgICAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tDYXJkKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRhc2tDYXJkLnF1ZXJ5U2VsZWN0b3IoXCIuZGVsZXRlXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZW1vdmVUYXNrKGluZGV4KTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0YXNrQ2FyZC5xdWVyeVNlbGVjdG9yKFwiLmVkaXRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRhc2tDYXJkLnF1ZXJ5U2VsZWN0b3IoXCIjZWRpdC10YXNrLWZvcm1cIikuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0YXNrQ2FyZC5xdWVyeVNlbGVjdG9yKFwiI2VkaXRUYXNrQnRuXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlZGl0VGFzayhpbmRleCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtkaXNwbGF5VGFza3MsIGFkZFRhc2t9O1xyXG59XHJcblxyXG5leHBvcnQge1Rhc2tMaXN0fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/TaskList.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ProjectList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectList.js */ \"./src/ProjectList.js\");\n// index.js\n__webpack_require__.e(/*! import() */ \"src_styles_css\").then(__webpack_require__.bind(__webpack_require__, /*! ./styles.css */ \"./src/styles.css\"));\n\n\n// Add event listener to add project button.\nlet container = document.querySelector(\".content-wrapper\");\nlet projects = localStorage.getItem(\"projects\") ? (0,_ProjectList_js__WEBPACK_IMPORTED_MODULE_0__.ProjectList)(JSON.parse(localStorage.getItem(\"projects\"))) : (0,_ProjectList_js__WEBPACK_IMPORTED_MODULE_0__.ProjectList)([]);\n\nasync function navigate(page) {\n    // Import the page content, then push it into browser session history.\n    const pageModule = await __webpack_require__(\"./src lazy recursive ^\\\\.\\\\/.*\\\\.js$\")(`./${page}.js`);\n    container.innerHTML = pageModule.default;\n\n    if (page === \"lists\") {\n        projects.displayProjects();\n\n        const addListBtn = container.querySelector(\"#addListBtn\");\n        addListBtn.addEventListener(\"click\", () => {\n            projects.addProject();\n        });\n    }\n    window.history.pushState({}, \"\", `#${page}`);\n}\n// Initial load.\nconst initialPage = location.hash.slice(1) || \"home\";\nnavigate(initialPage);\n\n// Browser navigation handling.\nwindow.addEventListener(\"popstate\", () => {\n    let page = location.hash.slice(1) || \"home\";\n    navigate(page);\n})\n\n// Handlers for the navigation tabs.\nlet navItems = document.querySelectorAll(\".nav-item\");\nnavItems.forEach((tab) => {\n    tab.addEventListener(\"click\", () => {\n        navigate(tab.id);\n    });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBLG1KQUFzQjtBQUN1Qjs7QUFFN0M7QUFDQTtBQUNBLGtEQUFrRCw0REFBVyxpREFBaUQsNERBQVc7O0FBRXpIO0FBQ0E7QUFDQSw2QkFBNkIsNERBQU8sR0FBRyxFQUFFLEtBQUssSUFBSSxDQUFDO0FBQ25EOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsK0JBQStCLFVBQVUsS0FBSztBQUM5QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW5kZXguanNcbmltcG9ydChcIi4vc3R5bGVzLmNzc1wiKTtcbmltcG9ydCB7UHJvamVjdExpc3R9IGZyb20gXCIuL1Byb2plY3RMaXN0LmpzXCI7XG5cbi8vIEFkZCBldmVudCBsaXN0ZW5lciB0byBhZGQgcHJvamVjdCBidXR0b24uXG5sZXQgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50LXdyYXBwZXJcIik7XG5sZXQgcHJvamVjdHMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpID8gUHJvamVjdExpc3QoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKSkgOiBQcm9qZWN0TGlzdChbXSk7XG5cbmFzeW5jIGZ1bmN0aW9uIG5hdmlnYXRlKHBhZ2UpIHtcbiAgICAvLyBJbXBvcnQgdGhlIHBhZ2UgY29udGVudCwgdGhlbiBwdXNoIGl0IGludG8gYnJvd3NlciBzZXNzaW9uIGhpc3RvcnkuXG4gICAgY29uc3QgcGFnZU1vZHVsZSA9IGF3YWl0IGltcG9ydChgLi8ke3BhZ2V9LmpzYCk7XG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9IHBhZ2VNb2R1bGUuZGVmYXVsdDtcblxuICAgIGlmIChwYWdlID09PSBcImxpc3RzXCIpIHtcbiAgICAgICAgcHJvamVjdHMuZGlzcGxheVByb2plY3RzKCk7XG5cbiAgICAgICAgY29uc3QgYWRkTGlzdEJ0biA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiI2FkZExpc3RCdG5cIik7XG4gICAgICAgIGFkZExpc3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIHByb2plY3RzLmFkZFByb2plY3QoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSh7fSwgXCJcIiwgYCMke3BhZ2V9YCk7XG59XG4vLyBJbml0aWFsIGxvYWQuXG5jb25zdCBpbml0aWFsUGFnZSA9IGxvY2F0aW9uLmhhc2guc2xpY2UoMSkgfHwgXCJob21lXCI7XG5uYXZpZ2F0ZShpbml0aWFsUGFnZSk7XG5cbi8vIEJyb3dzZXIgbmF2aWdhdGlvbiBoYW5kbGluZy5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicG9wc3RhdGVcIiwgKCkgPT4ge1xuICAgIGxldCBwYWdlID0gbG9jYXRpb24uaGFzaC5zbGljZSgxKSB8fCBcImhvbWVcIjtcbiAgICBuYXZpZ2F0ZShwYWdlKTtcbn0pXG5cbi8vIEhhbmRsZXJzIGZvciB0aGUgbmF2aWdhdGlvbiB0YWJzLlxubGV0IG5hdkl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXYtaXRlbVwiKTtcbm5hdkl0ZW1zLmZvckVhY2goKHRhYikgPT4ge1xuICAgIHRhYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBuYXZpZ2F0ZSh0YWIuaWQpO1xuICAgIH0pO1xufSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src lazy recursive ^\\.\\/.*\\.js$":
/*!*************************************************!*\
  !*** ./src/ lazy ^\.\/.*\.js$ namespace object ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./Project.js": [
		"./src/Project.js"
	],
	"./ProjectList.js": [
		"./src/ProjectList.js"
	],
	"./Task.js": [
		"./src/Task.js"
	],
	"./TaskList.js": [
		"./src/TaskList.js"
	],
	"./home.js": [
		"./src/home.js",
		"src_home_js"
	],
	"./index.js": [
		"./src/index.js"
	],
	"./lists.js": [
		"./src/lists.js",
		"src_lists_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "./src lazy recursive ^\\.\\/.*\\.js$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./public/icons/delete.svg":
/*!*********************************!*\
  !*** ./public/icons/delete.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "bcf8d6ff346603c8a51a.svg";

/***/ }),

/***/ "./public/icons/edit.svg":
/*!*******************************!*\
  !*** ./public/icons/edit.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "8421b7fc701a0f1a93be.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".main.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "todo-list:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;