// Importing required packages
import Express from "express";
import fs from "fs";

// Setting variable names
// App accesses the Express API
// port is set to 3010
const App = Express();
const port = 3010;

// Setting a varibale to stop all other processes when FileContents is called
let fileContents = fs.readFileSync("database.json");

// database will parse the informaton or string of fileContents which contains JSON objects
let database = JSON.parse(fileContents);

// Retreiving information from specified URL
// If no values present in the database, error message will appear
App.get("/employees/:name", (req,res) => {
    let result = {"error": "Not available!"};

    // Looking through values
    // If a value matched values within database, it will return the result
    // In this instance, we are search for the values of name
    database.forEach((value) => {
        if(req.params.name == value.name) {
            result = value
        }
    });

    // returning the JSON repsonce
    res.json(result);
})

// Retreiving information from specified URL
// If no values present in the database, error message will appear
App.get("/ages/:age", (req,res) => {
    let result = {"error": "Not available!"};

    // Looking through values
    // If a value matched values within database, it will return the result
    // In this instance, we are search for the values of age
    database.forEach((value) => {
        if (req.params.age == value.age) {
            result = value
        }
    });

    // returning the JSON repsonce
    res.json(result);
})

// Express is listening to the port defined
App.listen(port, () => {
    console.log("server running!")
})