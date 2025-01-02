// index.js

import ("./styles.css");
import { displayHome } from "./homePage.js";
import { displayMenu } from "./menuPage.js";
import { displayContacts } from "./contactPage.js";

// Handle logic for changing page content.
function renderPage(tab) {
    // Clear current content on page.
    let contentCard = document.querySelector(".content-card");
    contentCard.innerHTML = "";

    // Display appropraite HTML based on tab selected.
    switch (tab) {
        case "home":
            displayHome(contentCard);
            break;
        case "menu":
            displayMenu(contentCard);
            break;
        case "contact":
            displayContacts(contentCard);
            break;
        default:
            console.error(`Unexpected tab name: ${tab}`);
            break;
    }
    console.log(tab);
}

// Add event listeners to the tabs.
let navButtons = Array.from(document.querySelectorAll(".navBtn"));
    navButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            let tab = event.currentTarget.id;
            renderPage(tab);
        });
});