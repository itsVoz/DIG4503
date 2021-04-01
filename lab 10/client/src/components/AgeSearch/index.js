import React from "react";
import react from "react";
import { render } from "react-dom";

class AgeSearch extends React.Component {
    readAge(event){

        event.preventDefault();

        // Selecting the id of 'age' from the form
        let element = document.querySelector("#age");

        // fetching infomation from the 'ages' adress
        fetch("/ages/" + element.value)

        // The responce is parse into json data
        .then((res) => {
            return res.json();
        })

        // Looking at our processed data
        .then((processed) => {

            // 'reporting' is selecting the id of 'reportingArea' from the form bellow
            let reporting = document.querySelector("#reportingArea");

            // if an error is pressent, then the reponce will contain error feedback
            if(processed.error) {
                reporting.innerHTML = processed.error;
        
            // otherwise we are posting the match value pair for the data given
            } else {
                reporting.innerHTML = processed.name;
            }
        });

        element.value = "";
    }

    render(){
        return (
            <div>
                <h2>Age</h2>
                <form onSubmit={this.readAge}>
                <input id="age" type="text"/>
                <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default AgeSearch;