// index.js
import("./styles.css");
import {ProjectList} from "./ProjectList.js";

// Add event listener to add project button.
let container = document.querySelector(".content-wrapper");
let projects = localStorage.getItem("projects") ? ProjectList(JSON.parse(localStorage.getItem("projects"))) : ProjectList([]);

async function navigate(page) {
    // Import the page content, then push it into browser session history.
    const pageModule = await import(`./${page}.js`);
    container.innerHTML = pageModule.default;

    if (page === "lists") {
        projects.displayProjects();

        const addListBtn = container.querySelector("#addListBtn");
        addListBtn.addEventListener("click", () => {
            projects.addProject();
        });
    }
    window.history.pushState({}, "", `#${page}`);
}
// Initial load.
const initialPage = location.hash.slice(1) || "home";
navigate(initialPage);

// Browser navigation handling.
window.addEventListener("popstate", () => {
    let page = location.hash.slice(1) || "home";
    navigate(page);
})

// Handlers for the navigation tabs.
let navItems = document.querySelectorAll(".nav-item");
navItems.forEach((tab) => {
    tab.addEventListener("click", () => {
        navigate(tab.id);
    });
});