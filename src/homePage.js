const homeHTML = `<h1>Gaberoll</h1>
            <div class="review subcard">
                <p>Step into Gaberoll, a cozy haven where handcrafted delights and warm hospitality
                come together to create unforgettable moments. Nestled in the heart of
                Albuquerque, Gaberoll is more than just a cafe – it's an experience.</p>
                <h3>Gordon Ramsey</h3>
            </div>
            <div class="hours subcard">
                <h2>Hours</h2>
                <p>Sunday: 8am - 6 pm</p>
                <p>Monday: 7am - 8 pm</p>
                <p>Tuesday: 7am - 8pm</p>
                <p>Wednesday: 7am - 8pm</p>
                <p>Thursday: 7am - 8pm</p>
                <p>Friday: 7am - 8pm</p>
                <p>Saturday: 8am - 9pm</p>
            </div>
            <div class="location subcard">
                <h2>Location</h2>
                <p>308 Negra Arroyo Lane, Albuquerque, New Mexico</p>
            </div>`;


// Handles the logic for displaying homepage.
function displayHome(container) {
    container.innerHTML = "";
    container.innerHTML = homeHTML;
}

export {displayHome};