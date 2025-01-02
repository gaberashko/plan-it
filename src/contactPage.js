// Stores the contacts.
let contacts = [
    {name:`Maria Thompson`, role:`Cafe Manager`, phone:`(585) 555-5678`, email:`maria.thompson@gaberollcafe.com`},
    {name:`Elliot Ramirez`, role:`Head Barista`, phone:`(585) 555-2345`, email:`elliot.ramirez@gaberollcafe.com`},
    {name:`Sophie Chen`, role:`Pastry Chef`, phone:`(585) 555-7890`, email:`sophie.chen@gaberollcafe.com`}
]

// Handles the logic for displaying contact information in container argument.
function displayContacts(container) {
    container.innerHTML = "";
    const contactsTitle = document.createElement("h1");
    contactsTitle.textContent = "Contact Us";
    container.appendChild(contactsTitle);

    contacts.forEach(contact => {
        let itemDiv = document.createElement("div");
        itemDiv.classList.add("contact", "subcard");
        itemDiv.innerHTML = `
        <h2>${contact.name}</h2>
        <p>${contact.role}</p>
        <p>Phone: ${contact.phone}</p>
        <p>Email: ${contact.email}</p>`;

        container.appendChild(itemDiv);
    });
}

export {displayContacts};