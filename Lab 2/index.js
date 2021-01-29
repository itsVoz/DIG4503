// Require the package axios before continuing
const axios = require("axios");

// Fetch the URL
// Axios fetches information from the URL 
axios('https://pokeapi.co/api/v2/pokemon/pidgey')

    // Responce Handling
    // .then handles the repsonce of the promise made by axios
    .then(function (response) {
        // We now create a const pokemon to hold the data coming in
        const pokemon = response.data;
        // Logging information
        // We are now fetching and displaying information from the unique URL
        // Information displayed in the console
        console.log("This is a " + pokemon.name + " and its ID is " + pokemon.id);
    })

    // Error handling
    // Called on if URL was bad or incorrect arguments were passed
    .catch(function (error) {
        // Logging information
        // Error log with corrisponding URL error message
        console.log("Error: " + error)
    });