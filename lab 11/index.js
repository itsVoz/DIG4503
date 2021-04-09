// Importing required packages
import MongoClient from 'mongodb';

// Assigning URL to Mongodb server
const URL = "mongodb+srv://madams:F7Rn240l5cN7siQr@cluster0.oewwc.mongodb.net/test";

// Connecting to db
// Ensuring that data will be read by all versions
// Filtering through db with cursor to find all infomation required
// Logging results and doumenting information found
MongoClient.connect(URL, {useUnifiedTopology: true})
.then(connection => {
    let database = connection.db("sample_airbnb");

    let collection = database.collection("listingsAndReviews");

    let cursor = collection.find({price: {$lte: 200}, beds: {$gte: 5}, "review_scores.review_scores_rating": {$gte:99}});

    cursor.forEach(document => {
        console.log(document.name + ' | beds:' + document.beds + ' | price:' + document.price + ' | review score rating:' + document.review_scores.review_scores_rating);
    }, ()=> {
        connection.close();
    })
})

// Error code
.catch(error =>{
    console.log("Error: " + error);
});