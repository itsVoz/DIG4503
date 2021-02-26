// Importing necessary packages
// Displayed information will be localed @ URL http://localhost:8080/
const Express = require('express');
const App = Express();
const port = 8080;

// Accessing the root directory
// Function requests information and submits a response
// Response in this case is 'Hello World'
App.get('/', function(request, response){
    response.send("Hello World!");
});

// .use Allows us to access files in a directory
// .static serves the static files to the express package
App.use('/public', Express.static("public"));

// Access the port and listens for a callback
// If the callback is successfull, 'Server Running!' will be displayed in console
App.listen(port, function(){
    console.log("Server Running!");
})