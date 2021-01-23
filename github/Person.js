//Author: Matt Adams
//Lab 1

//require the chalk pakage 
const chalk = require ('chalk');

//create a class named Person   
class Person {     
    //create constuctor method w/ arguments of name, favoriteColor, and backgroundColor
    constructor(name, favoriteColors, backgroundColors) {
        //this is refering to Class "Person"
        //setting the arguments to different variables via this.argumentName = variableName
        this.name = name;
        this.favoriteColors = favoriteColors;
        this.backgroundColors = backgroundColors;
    }

    //speak method
    //Browser will communicate in beeps
    speak() {
        //i = 0 sets i to 0, 
        //i condition is i < this.favoriteColors.length
        //as long as i is less then favoriteColors length 
        //i++ adds 1 to i
        for (let i = 0; i < this.favoriteColors.length; i++){
            //log result via Chalk
            console.log(chalk.bgHex(this.backgroundColors[i]).hex(this.favoriteColors[i])(this.name));
        }
    }
}

//module.export makes a class exessable in other files
//exporting class Person
module.exports = Person;