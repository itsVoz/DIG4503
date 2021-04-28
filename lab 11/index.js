// Importing required packages
import MongoClient from 'mongodb';
import chalk from 'chalk';

// Assigning URL to Mongodb server
const URL = "mongodb+srv://madams:F7Rn240l5cN7siQr@cluster0.oewwc.mongodb.net/test";

// Connecting to db
// Ensuring that data will be read by all versions
MongoClient.connect(URL, {useUnifiedTopology: true})
.then(connection => {

    // Reading db data
    // "sample_airbnb" is the target for the connection
    let database = connection.db("sample_airbnb");

    // Compiling the collection 'listingAndReviews'
    // Assining that collection to 'collection'
    let collection = database.collection("listingsAndReviews");

    // Filtering through db with cursor to find all infomation required
    let cursor = collection.find({price: {$lte: 200}, beds: {$gte: 5}, "review_scores.review_scores_rating": {$gte:99}});


    // Logging results and doumenting information found
    // Added chalk elements for stylistic terminal text
    cursor.forEach(document => {
        console.log(chalk.bold(document.name) + ' | ' + chalk.bgRed.black('beds:' + document.beds) + ' | price:' + chalk.green(document.price) + ' | review score rating:' + chalk.italic(document.review_scores.review_scores_rating));
    }, ()=> {

        // Closing our connection
        connection.close();
    })
})

// Error code
.catch(error =>{
    console.log("Error: " + error);
});