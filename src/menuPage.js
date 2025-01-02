// Stores the menu items.
let menu = {
    beverages: [
        {name:"Honey Lavender Latte",
            description:`A creamy blend of espresso, steamed milk, honey, and a hint of lavender for a 
            soothing and aromatic experience.`,
            price:4.50,},
        {name:"Iced Matcha Latte",
        description:`Premium matcha green tea whisked to perfection, served over ice with your 
                choice of milk.`,
        price:4.00,}
    ],
    sides: [
        {name:"Buttery Croissant",description:`Flaky, golden, and freshly baked daily, perfect on its own or with
                     a side of jam.`,price:3.25,},
        {name:`Rosemary Parmesan Biscuit`,description:`A savory delight with a hint of rosemary and a sprinkle of Parmesan, 
                    great as a light snack.`,price:3.75,}
    ],
    entrees: [
        {name:`Savory Gaberoll`,description:`A signature pastry roll filled with spinach, feta cheese, and caramelized
                     onions, baked to golden perfection.`,price:7.50,},
        {name:`Quiche Lorraine`,description:`A classic French tart made with eggs, cream, bacon, and Gruyère
                     cheese in a flaky crust, served warm.`,price:8.50,}
    ],
};

// Displays the menu items inside of the container element.
function displayMenu(container) {
    container.innerHTML = "";
    Object.keys(menu).forEach(category => {
        const title = document.createElement("h1");
        if (category === "entrees") {
            title.textContent = "Entrées"
        } else {
            title.textContent = category.charAt(0).toUpperCase() + category.slice(1).toLowerCase();
        }
        container.appendChild(title);
        menu[category].forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add(`${category}`, 'subcard');
            itemDiv.innerHTML = `<h2>${item.name}</h2>
                <p>${item.description}</p>
                <h3>$${item.price.toFixed(2)}</h3>
            `;
            container.appendChild(itemDiv);
        });
    });
}

export {displayMenu};





