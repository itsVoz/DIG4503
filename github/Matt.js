//requrie the exported class Person from Person.js
const Person = require("./Person.js");

//class Matt will extend the class Person
//class Matt will inherent the properties of class Person
class Matt extends Person {
    //create arguments that we want that class to take
    constructor (name, colors, bgColors) {
        //super insures that we user the arugments set in the parent class
        super (name, colors, bgColors);
    }
}

//export this class globally
module.exports = Matt;