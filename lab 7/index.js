// Importing required packages
import Express from 'express';

// Setting variables
// App accesses Express packages
// Port is defined as 45030
const App = Express();
const port = 45030;

// Arrary of names given for assignment
const names = [
    'Cortney',
    'Dewayne',
    'Trenton',
    'Pamala',
    'Ettie',
    'Errol',
    'Lorrie',
    'Hang',
    'Lauryn',
    'Caterina',
    'Isa',
    'Marcela'
];

// Retriveing inforamtion from given URL location
App.get('/people/:person', (req,res) => {

    // if the name of the person is within the array "names"
    // User will be prompted with {"name":"*Given Name*"}
    let person = req.params.person;
    if (names.includes(person)){
        res.json({ Name: person});

        // If the user doesnt input correct infomation within the '/people'
        // User will be prompted with {"name":"Not Available"}
    } else {
        res.json({ Name: "Not Available"});
    }
});

// Retriveing inforamtion from given URL location
App.get('/search/:person', (req, res)=> {

    // Filtering the array "names" with parameters of a string
    const result = names.filter(str => str.includes(req.params.person));

    // If the result function is not empty, returning values of result
    // displayed to the user as  {"search":"*all applicable names*"}
    if (result != 0) {
        res.json({ search: result});

        // If the user doesnt input correct infomation within the '/search'
        // User will be prompted with {"search":"Not Available"}
    } else {
        res.json({ search: "Not available"});
    }
})

// Defining where express should be listening for user input
// port, defined earlier is 45030
App.listen(port, () =>{

});