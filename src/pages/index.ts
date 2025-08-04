import("../scss/main.css");
import { ProjectList } from "models/ProjectList";

const pages: Record<string, () => Promise<any>> = {
    home: () => import("./home"),
    lists: () => import("./lists"),
}

// Add event listener to add project button.
let container = document.querySelector(".content-wrapper") as HTMLDivElement;
let projects: ProjectList = localStorage.getItem("projects")
    ? new ProjectList(JSON.parse(localStorage.getItem("projects")!))
    : new ProjectList([]);

async function navigate(page: string) {
    // Import the page content, then push it into browser session history.
    const pageModule = await (pages[page] ?? pages["home"])();
    container.innerHTML = pageModule.default;

    if (page === "lists") {
        projects.displayProjects();

        const addListBtn = container.querySelector("#addListBtn") as HTMLButtonElement;
        addListBtn.addEventListener("click", () => {
            projects.addProject();
        });

        const listForm = (document.getElementById("list-form")!.onkeydown = (
            e
        ) => {
            if (e.key === "Enter") {
                e.preventDefault();

                if (e.repeat) return;

                projects.addProject();
            }
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
});

// Handlers for the navigation tabs. Prevents nav tab activity on title nav object.
let navItems = document.querySelectorAll(".nav-item:not(.nav-main)");
navItems.forEach((tab) => {
    tab.addEventListener("click", () => {
        navigate(tab.id);
    });
});
