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

// Setting up an Express static server directed to the public folder
App.use("/", Express.static("public"));

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

// Setting up a Express post request under the employee root
// 'result' will take the values of 'name' and 'age' (in an integer)
App.post("/employee/:name/:age", (req, res) => {
    let result = {
        "name": req.params.name,
        "age": parseInt(req.params.age)
    };

    // pushing values of 'result' to the defined database
    database.push(result);

    // Writing to our file server
    fs.writeFileSync("database.json", JSON.stringify(database, null, '\t'));

    // responce of the post will be in json and take the values of 'result'
    res.json(result);
})

// Express is listening to the port defined
App.listen(port, () => {
    console.log("server running!")
})