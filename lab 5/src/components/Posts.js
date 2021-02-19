// Importing nessesary packages
import React, { useState, useEffect, componentDidMount } from "react";
import axios from "axios";

// Creates a component Post
const Posts = () => {
    // Setting internal state with a varible 'posts' & the funtion 'setPosts'
    // The current state is null
    const [posts, setPosts] = useState();

    // useEffect Hook
    useEffect(() => {

        // Using axios to retrive data from the api
        // After retriveing data, .then((res)...) is looking for the responce from axios 
        axios.get(`https://jsonplaceholder.typicode.com/posts`).then((res) => {

            // Varible 'responcePosts' holds the data that was fetched
            // setPosts funtion now calls upon 'responcePost' 
            // Logging for the use effect
            const responsePosts = res.data;
            setPosts(responsePosts);
                console.log("the use effect ran.")
        });
  
        // *******Realted to Assignment*******
        // I had a difficult time understanding where to use the method componentDidMount()
        // The examples that were used in the moudle and for the participation activity didnt give much clairty
        // Did some additonal reasearch to try and use the method like so
        // 
        //  componentDidMount() {
        //      cosole.log('component has been mounted');
        //}

        // Only Running once on intial render
    }, []);

    // Returning values to the browser
    return (
        // Making a conditonal statement that looks for data
        // Print contents of the array to the post parameter
        // post now accepts id and title from the data collected
        <div>
            <h1>New Posts</h1>
            {posts && posts.map((post) => {
                const {userId, id, title, body} = post;

                // Creating a key for the use of the map method, each key has a unique id
                // displaying the fetched data
                return(
                    <div key={id}>
                        <h2>User {userId}: MyPost</h2>
                        <h3>{title}</h3>
                        <p>{body}</p>
                    </div>
                )
            })}
        </div>
    );
};

// Exporting defualt values
export default Posts;